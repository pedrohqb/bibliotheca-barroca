// Leitura das obras: obra.json, glossario.json e capítulos em la/ e pt/ (ou outros idiomas).
import fs from 'node:fs';
import path from 'node:path';

export const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
export const OBRAS = path.join(RAIZ, 'obras');

// Cabeçalho entre linhas "---": "chave: valor"; valor que começa com { ou [ é JSON.
export function lerCabecalho(texto, arquivo) {
  const m = texto.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) throw new Error(`${arquivo}: falta o cabeçalho entre linhas ---`);
  const meta = {};
  for (const linha of m[1].split('\n')) {
    if (!linha.trim()) continue;
    const i = linha.indexOf(':');
    if (i < 0) throw new Error(`${arquivo}: linha de cabeçalho sem ":" -> ${linha}`);
    const k = linha.slice(0, i).trim();
    let v = linha.slice(i + 1).trim();
    if (/^[\[{]/.test(v)) {
      try { v = JSON.parse(v); } catch { throw new Error(`${arquivo}: JSON inválido em ${k}`); }
    }
    meta[k] = v;
  }
  return { meta, corpo: texto.slice(m[0].length) };
}

// Corpo: "@s3 1B" abre o trecho s3 (referência ao scan: coluna 1, seção B, ou página, conforme obra.json → referencia; só no latim); "@m" nota marginal da impressão;
// "@n" nota do tradutor; "@a" acréscimo de editor posterior (ex.: Brederode, na edição de Antuérpia de 1610 do Covarrubias), tirado do corpo do
// trecho e anotado no rodapé: no texto fica a âncora {a1}, {a2}… no ponto em que estava, e cada "@a" traz, na ordem das âncoras, o texto do
// acréscimo (no latim) ou a tradução dele; "@p" faz o próximo trecho abrir parágrafo novo. As demais linhas são texto.
export const ANCORA = /\{a(\d+)\}/g;
export const ancoras = texto => [...texto.matchAll(ANCORA)].map(m => +m[1]);
export function lerCapitulo(arquivo) {
  const { meta, corpo } = lerCabecalho(fs.readFileSync(arquivo, 'utf8'), arquivo);
  const trechos = [];
  let atual = null, novoParagrafo = true;
  corpo.split('\n').forEach((linha, n) => {
    const l = linha.trim();
    if (!l) return;
    let m;
    if ((m = l.match(/^@s(\d+)(?:\s+(\S+))?$/))) {
      atual = { id: 's' + m[1], col: m[2] || null, texto: '', margem: [], notas: [], acrescimos: [], paragrafo: novoParagrafo, linha: n + 1 };
      trechos.push(atual);
      novoParagrafo = false;
    } else if (l === '@p') {
      novoParagrafo = true;
    } else if ((m = l.match(/^@([mna])\s+(.*)$/))) {
      if (!atual) throw new Error(`${arquivo}:${n + 1}: @${m[1]} antes do primeiro trecho`);
      ({ m: atual.margem, n: atual.notas, a: atual.acrescimos })[m[1]].push(m[2]);
    } else if (l.startsWith('@')) {
      throw new Error(`${arquivo}:${n + 1}: marcador desconhecido ${l.split(/\s/)[0]}`);
    } else {
      if (!atual) throw new Error(`${arquivo}:${n + 1}: texto antes do primeiro trecho @s`);
      atual.texto += (atual.texto ? ' ' : '') + l;
    }
  });
  return { meta, trechos, arquivo };
}

export function lerObras() {
  return fs.readdirSync(OBRAS, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => lerObra(d.name))
    .sort((a, b) => a.meta.autor.localeCompare(b.meta.autor));
}

export function lerObra(id) {
  const dir = path.join(OBRAS, id);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'obra.json'), 'utf8'));
  const gArq = path.join(dir, 'glossario.json');
  const glossario = fs.existsSync(gArq) ? JSON.parse(fs.readFileSync(gArq, 'utf8')) : [];
  const idiomas = Object.keys(meta.idiomas || { la: 'Latim' });
  const caps = {};
  for (const lg of idiomas) {
    const d = path.join(dir, lg);
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d).filter(f => f.endsWith('.md'))) {
      const c = lerCapitulo(path.join(d, f));
      const cid = c.meta.id || f.replace(/\.md$/, '');
      (caps[cid] ||= { id: cid })[lg] = c;
    }
  }
  const capitulos = Object.values(caps).sort((a, b) => (+(a.la?.meta.ordem ?? 1e9)) - (+(b.la?.meta.ordem ?? 1e9)) || a.id.localeCompare(b.id));
  return { id, dir, meta, glossario, idiomas, capitulos };
}

export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Texto do trecho -> HTML: escapa, marca termos do glossário (só no latim) e converte *itálico*.
export function formatar(texto, glossario = []) {
  let h = esc(texto);
  const guard = [];
  if (glossario.length) {
    const formas = glossario.flatMap((g, i) => g.formas.map(f => [f, i])).sort((a, b) => b[0].length - a[0].length);
    for (const [forma, i] of formas) {
      const re = new RegExp(`(?<![\\p{L}])${forma.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}])`, 'gu');
      h = h.replace(re, m => { guard.push(`<span class="g" tabindex="0" data-g="${i}">${m}</span>`); return `\u0000${guard.length - 1}\u0001`; });
    }
  }
  h = h.replace(/\*([^*]+)\*/g, '<i>$1</i>');
  return h.replace(/\u0000(\d+)\u0001/g, (_, n) => guard[+n]);
}

// "processo" diz só como a versão foi feita (primeira versão, revisão por agente, cotejo). Debate e revisão são histórico,
// tirados de "estado", de "debate" (data em que o resultado foi aplicado) e de debate/<obra>/<id>/. Esta função tira do
// texto livre as menções a debate e a revisão pendente, que contradiziam o estado real.
export const limparProcesso = s => String(s || '')
  .replace(/,?\s*(?:e\s+)?debatida com Codex e Gemini/gi, '')
  .replace(/,?\s*sem debate/gi, '')
  .replace(/,?\s*para revis[ãa]o(?:\s+final)?(?:\s+e debate posterior)?/gi, '')
  .replace(/\s+,/g, ',').replace(/[,\s]+$/, '').trim();

export const textoPlano = s => s.replace(/\*/g, '').replace(/\s*\{a\d+\}/g, '');

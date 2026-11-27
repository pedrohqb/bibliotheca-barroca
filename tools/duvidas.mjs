// Gera docs/pontos-de-duvida.md: os pontos de dúvida que o debate entre as IAs deixou para revisão humana.
// Uso: node tools/duvidas.mjs
//
// Entra só o que saiu de um debate (debate/<obra>/<id>/resumo.md): pontos em aberto, divergências, correções acolhidas
// e não aplicadas, ressalvas, propostas de glossário e remissões que os revisores não conseguiram abrir.
// Capítulos não debatidos não entram (decisão do Pedro, 2026-11-27).
import fs from 'node:fs';
import path from 'node:path';
import { lerObras, RAIZ } from './lib.mjs';

const SITE = 'https://pedrohqb.github.io/bibliotheca-barroca';
const ler = f => (fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '');
const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

// Seções de um markdown cujo título casa com o padrão: [[título, corpo]], corpo até o próximo título de nível igual ou maior.
function secoes(md, padrao) {
  const linhas = md.split('\n'), out = [];
  for (let i = 0; i < linhas.length; i++) {
    const m = linhas[i].match(/^(#{2,4})\s+(.*)$/);
    if (!m || !padrao.test(m[2])) continue;
    const nivel = m[1].length, corpo = [];
    for (let j = i + 1; j < linhas.length; j++) {
      const h = linhas[j].match(/^(#{1,6})\s/);
      if (h && h[1].length <= nivel) break;
      corpo.push(linhas[j]);
    }
    const texto = corpo.join('\n').trim();
    if (texto && !/^(nenhum[a]?|nada)\b[^\n]*\.?$/i.test(texto)) out.push([m[2].trim(), texto]);
  }
  return out;
}

const PADRAO_DEBATE = /pontos em aberto|diverg|n[ãa]o aplicad|ressalva|gloss[áa]rio|remiss[õo]es n[ãa]o conferidas/i;

const obras = lerObras();
const partes = [], resumo = [];
let total = 0;

for (const o of obras) {
  const blocos = [];
  let n = 0;
  // Por capítulo, na ordem do catálogo
  const cat = JSON.parse(ler(path.join(o.dir, 'catalogo.json')) || '{"capitulos":[]}').capitulos || [];
  const ordem = new Map(cat.map((e, i) => [e.id, i]));
  const dirDeb = path.join(RAIZ, 'debate', o.id);
  const ids = fs.existsSync(dirDeb) ? fs.readdirSync(dirDeb).filter(d => fs.statSync(path.join(dirDeb, d)).isDirectory()) : [];
  ids.sort((a, b) => (ordem.get(a) ?? 1e9) - (ordem.get(b) ?? 1e9) || a.localeCompare(b));
  const titulo = new Map(o.capitulos.map(c => [c.id, `${c.pt?.meta.capitulo || c.la?.meta.capitulo || ''}${c.pt?.meta.titulo ? ': ' + c.pt.meta.titulo : ''}`]));
  for (const id of ids) {
    const itens = [];
    for (const [arq, padrao, origem] of [['resumo.md', PADRAO_DEBATE, 'debate']]) {
      for (const [tit, corpo] of secoes(ler(path.join(dirDeb, id, arq)), padrao))
        itens.push(`*${origem}, ${tit}* ([${arq}](../debate/${o.id}/${id}/${arq}))\n\n${corpo}`);
    }
    if (!itens.length) continue;
    n += itens.reduce((s, t) => s + Math.max(1, (t.match(/^\s*[-*] /gm) || []).length), 0);
    blocos.push(`### [${id}](${SITE}/${o.id}/${id}.html) — ${titulo.get(id) || ''}\n\n${itens.join('\n\n')}`);
  }
  total += n;
  const debatidos = ids.filter(id => fs.existsSync(path.join(dirDeb, id, 'resumo.md'))).length;
  if (debatidos) resumo.push(`| ${o.meta.autor_pt || o.meta.autor}, *${o.meta.titulo}* | ${debatidos} | ${n} |`);
  if (blocos.length) partes.push(`## ${o.meta.autor_pt || o.meta.autor}, *${o.meta.titulo}*\n\n${blocos.join('\n\n')}`);
}

const doc = `# Pontos de dúvida para revisão humana

Lista gerada em ${hoje} por \`node tools/duvidas.mjs\`. Não edite à mão: resolva o ponto no capítulo e gere a lista de novo.

Entra aqui só o que o debate entre as IAs (Claude, Codex e Gemini) deixou em aberto nos capítulos debatidos: pontos em aberto, divergências, correções acolhidas e não aplicadas, ressalvas, propostas de glossário e remissões que os revisores não conseguiram abrir. O que não passou pelo debate não entra.

| Obra | Capítulos debatidos | Pontos |
|---|---|---|
${resumo.join('\n')}

${partes.join('\n\n')}
`;
fs.writeFileSync(path.join(RAIZ, 'docs', 'pontos-de-duvida.md'), doc);
console.log(`docs/pontos-de-duvida.md: ${total} itens para revisão humana`);

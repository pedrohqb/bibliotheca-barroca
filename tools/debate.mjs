// Ponte entre a Bibliotheca e o motor do debate (~/.debates-ia).
//
//   node tools/debate.mjs preparar <obra> <capitulo> <pasta-do-debate>
//     grava caso.md e minuta-v1.md na pasta (nova) do debate
//
//   node tools/debate.mjs aplicar <obra> <capitulo> <pasta-da-entrega>
//     lê a minuta final da entrega (entregas/<id>/minuta.md), devolve tradução e notas
//     ao arquivo pt/<capitulo>.md, marca "estado: debatida" e a data em "debate" e copia o registro para
//     debate/<obra>/<capitulo>/
import fs from 'node:fs';
import path from 'node:path';
import { lerObra, RAIZ, limparProcesso } from './lib.mjs';

const [cmd, obraId, capId, pasta] = process.argv.slice(2);
const uso = () => { console.error('uso: node tools/debate.mjs preparar|aplicar <obra> <capitulo> <pasta>'); process.exit(2); };
if (!cmd || !obraId || !capId || !pasta) uso();

const o = lerObra(obraId);
const c = o.capitulos.find(x => x.id === capId);
if (!c?.la || !c.pt) { console.error(`${obraId}/${capId}: falta o latim ou a tradução`); process.exit(1); }

if (cmd === 'preparar') {
  fs.mkdirSync(pasta, { recursive: true });
  for (const f of ['caso.md', 'minuta-v1.md']) if (fs.existsSync(path.join(pasta, f))) { console.error(`${f} já existe em ${pasta}: use uma pasta nova`); process.exit(1); }
  const b = o.meta.edicao_base, la = c.la.meta, pt = c.pt.meta;
  const pag = o.meta.referencia === 'pagina', ref = pag ? 'p.' : 'col.';
  const temAc = c.la.trechos.some(t => t.acrescimos.length);
  const extra = path.join(o.dir, 'caso-extra.md'); // instruções de debate próprias da obra (opcional)
  const caso = [
    `# Revisão de tradução: ${o.meta.autor}, ${o.meta.titulo}${la.tomo ? ', tomo ' + la.tomo : ''} — ${la.livro ? la.livro + ', ' : ''}${la.capitulo}`,
    '## Obra e edição de base',
    `${o.meta.autor}, *${o.meta.titulo}*. ${b.titulo}. ${b.local}: ${b.impressor}, ${b.ano}. Exemplar: ${b.exemplar}${b.urn ? ` (${b.urn})` : ''}. ${pag ? 'Páginas' : 'Colunas'} ${la.colunas}. Scan: ${la.scan}`,
    `Título do capítulo: *${la.titulo}* — tradução proposta: "${pt.titulo}"`,
    fs.readFileSync(path.join(RAIZ, 'debate', 'caso-criterios.md'), 'utf8').trim(),
    ...(fs.existsSync(extra) ? [fs.readFileSync(extra, 'utf8').trim()] : []),
    '## Glossário fixado para a obra',
    o.glossario.map(g => `- **${g.lema}** (formas: ${g.formas.join(', ')}) → ${g.pt.join(' / ')}. ${g.nota}`).join('\n'),
    '## Formato da minuta',
    `Cada trecho começa por "## § n (${ref} …)" e traz, nesta ordem, **Latim.** (transcrição, também em revisão), **Margem.** (notas marginais da impressão, quando há), **Tradução.** e **Nota.** (notas do tradutor, uma por linha). Alterações de tradução mexem em **Tradução.** e **Nota.**; erro de transcrição aceito, conferido na imagem do scan por quem aplica, corrige-se em **Latim.**.` +
      (temAc ? `\n\nAcréscimos de editor posterior (${o.meta.acrescimos?.rotulo || 'acréscimo'}): o texto acrescentado não é do autor e foi tirado do corpo do trecho; no **Latim.** e na **Tradução.** fica a âncora {a1}, {a2}… no ponto em que ele estava. Cada acréscimo vem em **Acréscimo latino.** (transcrição, como o **Latim.**) e **Acréscimo traduzido.**, na ordem das âncoras. Os acréscimos são revistos com os mesmos critérios do texto; as âncoras ficam na tradução no ponto correspondente, sem mudar a numeração.` : '')
  ].join('\n\n') + '\n';
  const minuta = [`# ${pt.capitulo}. ${pt.titulo}`, ...c.la.trechos.map((t, i) => {
    const p = c.pt.trechos[i];
    return [`## § ${t.id.slice(1)} (${ref} ${t.col})`, `**Latim.** ${t.texto}`,
      ...t.margem.map(m => `**Margem.** ${m}`), `**Tradução.** ${p.texto}`,
      ...t.acrescimos.flatMap((a, k) => [`**Acréscimo latino.** ${a}`, `**Acréscimo traduzido.** ${p.acrescimos[k] ?? ''}`]),
      ...p.notas.map(n => `**Nota.** ${n}`)].join('\n\n');
  })].join('\n\n') + '\n';
  fs.writeFileSync(path.join(pasta, 'caso.md'), caso);
  fs.writeFileSync(path.join(pasta, 'minuta-v1.md'), minuta);
  const kb = f => (fs.statSync(path.join(pasta, f)).size / 1000).toFixed(1);
  console.log(`caso.md (${kb('caso.md')} KB) e minuta-v1.md (${kb('minuta-v1.md')} KB) gravados em ${pasta}`);
} else if (cmd === 'aplicar') {
  const arqMinuta = path.join(pasta, 'minuta.md');
  if (!fs.existsSync(arqMinuta)) { console.error(`não achei ${arqMinuta}`); process.exit(1); }
  const blocos = fs.readFileSync(arqMinuta, 'utf8').split(/^## § (\d+)[^\n]*\n/m);
  const novos = new Map();
  for (let i = 1; i < blocos.length; i += 2) {
    const corpo = blocos[i + 1];
    const CAMPOS = 'Latim|Margem|Tradução|Nota|Acréscimo latino|Acréscimo traduzido';
    const campo = new RegExp(`\\*\\*(${CAMPOS})\\.\\*\\*\\s*([\\s\\S]*?)(?=\\n\\s*\\*\\*(?:${CAMPOS})\\.\\*\\*|\\s*$)`, 'g');
    let m, traducao = null, latim = null; const notas = [], acLat = [], acTrad = [];
    while ((m = campo.exec(corpo))) {
      const v = m[2].replace(/\s+/g, ' ').trim();
      if (m[1] === 'Tradução') traducao = v; else if (m[1] === 'Nota') notas.push(v); else if (m[1] === 'Latim') latim = v;
      else if (m[1] === 'Acréscimo latino') acLat.push(v); else if (m[1] === 'Acréscimo traduzido') acTrad.push(v);
    }
    novos.set('s' + blocos[i], { traducao, notas, latim, acLat, acTrad });
  }
  const ids = c.la.trechos.map(t => t.id);
  const falta = ids.filter(id => !novos.get(id)?.traducao), sobra = [...novos.keys()].filter(id => !ids.includes(id));
  if (falta.length || sobra.length) { console.error(`minuta final desalinhada: faltam ${falta.join(', ') || '-'}; sobram ${sobra.join(', ') || '-'}`); process.exit(1); }
  const acErrados = c.la.trechos.filter(t => novos.get(t.id).acTrad.length !== t.acrescimos.length ||
    (novos.get(t.id).acLat.length && novos.get(t.id).acLat.length !== t.acrescimos.length)).map(t => t.id);
  if (acErrados.length) { console.error(`minuta final com número de acréscimos diferente do latim em ${acErrados.join(', ')}`); process.exit(1); }
  // Reescreve o arquivo da tradução: cabeçalho com estado "debatida" e trechos na ordem do latim.
  const original = fs.readFileSync(c.pt.arquivo, 'utf8');
  // Cabeçalho: estado "debatida", data do debate (dia em que o resultado foi aplicado) e "processo" sem menção a debate,
  // que agora vem do histórico (campo "debate" e debate/<obra>/<id>/).
  const hoje = new Date().toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' });
  let cab = original.match(/^---\n[\s\S]*?\n---\n/)[0].replace(/^estado: .*$/m, 'estado: debatida')
    .replace(/^processo: (.*)$/m, (_, p) => 'processo: ' + limparProcesso(p));
  cab = /^debate: /m.test(cab) ? cab.replace(/^debate: .*$/m, 'debate: ' + hoje) : cab.replace(/^estado: debatida$/m, 'estado: debatida\ndebate: ' + hoje);
  const corpo = ids.map(id => {
    const n = novos.get(id);
    return [`@${id}`, n.traducao, ...n.acTrad.map(x => `@a ${x}`), ...n.notas.map(x => `@n ${x}`)].join('\n');
  }).join('\n\n');
  fs.writeFileSync(c.pt.arquivo, cab + '\n' + corpo + '\n');
  // Correções de transcrição aceitas no debate (conferidas no scan) voltam ao arquivo latino.
  const acLatino = t => (novos.get(t.id).acLat.length ? novos.get(t.id).acLat : t.acrescimos);
  const corrigidos = c.la.trechos.filter(t => (novos.get(t.id).latim && novos.get(t.id).latim !== t.texto) || acLatino(t).join('\n') !== t.acrescimos.join('\n'));
  if (corrigidos.length) {
    const laOrig = fs.readFileSync(c.la.arquivo, 'utf8');
    const laCab = laOrig.match(/^---\n[\s\S]*?\n---\n/)[0];
    const laCorpo = c.la.trechos.map((t, i) => (i > 0 && t.paragrafo ? '@p\n\n' : '') +
      [`@${t.id} ${t.col}`, novos.get(t.id).latim || t.texto, ...t.margem.map(x => `@m ${x}`), ...acLatino(t).map(x => `@a ${x}`)].join('\n')).join('\n\n');
    fs.writeFileSync(c.la.arquivo, laCab + '\n' + laCorpo + '\n');
    console.log(`transcrição corrigida em ${corrigidos.map(t => t.id).join(', ')}`);
  }
  const dest = path.join(RAIZ, 'debate', obraId, capId);
  fs.mkdirSync(dest, { recursive: true });
  for (const f of fs.readdirSync(pasta).filter(f => /^(registro.*\.md|consumo\.csv)$/.test(f))) fs.copyFileSync(path.join(pasta, f), path.join(dest, f));
  console.log(`tradução atualizada em ${path.relative(RAIZ, c.pt.arquivo)} (estado: debatida); registro copiado para ${path.relative(RAIZ, dest)}`);
} else uso();

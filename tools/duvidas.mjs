// Gera docs/pontos-de-duvida.md: a lista dos pontos que pedem revisão humana, reunidos dos registros do projeto.
// Uso: node tools/duvidas.mjs
//
// Entram (só o que foi deixado expressamente para o Pedro):
//   - debate/<obra>/<id>/resumo.md: pontos em aberto, divergências, correções acolhidas e não aplicadas, ressalvas,
//     propostas de glossário e remissões que os revisores não conseguiram abrir;
//   - debate/<obra>/<id>/revisao.md (revisão por agente): seção "Para o Pedro";
//   - docs/revisao/livro-NN.md (revisão independente do Digesto): "A decidir" dos livros ainda sem "Decisões aplicadas";
//   - docs/progresso-*.md: seções "Pontos em aberto para o Pedro", "Pontos para o Pedro" e "Propostas de glossário".
// Ficam fora, porque são tarefa do debate (CRITERIOS.md, limitação do projeto): as leituras do latim marcadas com [?]
// e as remissões "a conferir" das notas. A lista só as conta.
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
const PROGRESSO = { 'jansenius-augustinus': 'progresso-augustinus.md', 'onate-de-contractibus': 'progresso-de-contractibus.md', 'covarrubias-opera': 'progresso-covarrubias.md', 'iustinianus-digesta': 'progresso-digesto.md' };

const obras = lerObras();
const partes = [], resumo = [];
let total = 0;

for (const o of obras) {
  const blocos = [];
  let n = 0;
  // Pendências gerais, do progresso da obra
  const prog = PROGRESSO[o.id] && ler(path.join(RAIZ, 'docs', PROGRESSO[o.id]));
  for (const [tit, corpo] of secoes(prog || '', /pontos (em aberto )?para o pedro|propostas de gloss/i)) {
    blocos.push(`### ${tit} (docs/${PROGRESSO[o.id]})\n\n${corpo}`);
    n += (corpo.match(/^\s*[-*] /gm) || [1]).length;
  }
  // Por capítulo, na ordem do catálogo
  const cat = JSON.parse(ler(path.join(o.dir, 'catalogo.json')) || '{"capitulos":[]}').capitulos || [];
  const ordem = new Map(cat.map((e, i) => [e.id, i]));
  const dirDeb = path.join(RAIZ, 'debate', o.id);
  const ids = fs.existsSync(dirDeb) ? fs.readdirSync(dirDeb).filter(d => fs.statSync(path.join(dirDeb, d)).isDirectory()) : [];
  ids.sort((a, b) => (ordem.get(a) ?? 1e9) - (ordem.get(b) ?? 1e9) || a.localeCompare(b));
  const titulo = new Map(o.capitulos.map(c => [c.id, `${c.pt?.meta.capitulo || c.la?.meta.capitulo || ''}${c.pt?.meta.titulo ? ': ' + c.pt.meta.titulo : ''}`]));
  for (const id of ids) {
    const itens = [];
    for (const [arq, padrao, origem] of [['resumo.md', PADRAO_DEBATE, 'debate'], ['revisao.md', /para o pedro/i, 'revisão por agente']]) {
      for (const [tit, corpo] of secoes(ler(path.join(dirDeb, id, arq)), padrao))
        itens.push(`*${origem}, ${tit}* ([${arq}](../debate/${o.id}/${id}/${arq}))\n\n${corpo}`);
    }
    if (!itens.length) continue;
    n += itens.reduce((s, t) => s + Math.max(1, (t.match(/^\s*[-*] /gm) || []).length), 0);
    blocos.push(`### [${id}](${SITE}/${o.id}/${id}.html) — ${titulo.get(id) || ''}\n\n${itens.join('\n\n')}`);
  }
  // Digesto: revisão independente, pontos ainda sem decisão
  if (o.id === 'iustinianus-digesta') {
    const dir = path.join(RAIZ, 'docs', 'revisao');
    for (const f of fs.existsSync(dir) ? fs.readdirSync(dir).sort() : []) {
      const md = ler(path.join(dir, f));
      if (/^## Decis[õo]es aplicadas/m.test(md)) continue;
      const pend = [];
      for (const [tit, corpo] of secoes(md, /^D\. /)) {
        const ad = secoes(`## x\n${corpo.replace(/^### /gm, '### ')}`, /a decidir/i);
        for (const [, c] of ad) pend.push(`**${tit}**\n\n${c}`);
      }
      if (pend.length) {
        blocos.push(`### Revisão independente, ${f.replace('.md', '').replace('livro-', 'livro ')}: pontos a decidir ([docs/revisao/${f}](revisao/${f}))\n\n${pend.join('\n\n')}`);
        n += pend.reduce((s, t) => s + Math.max(1, (t.match(/^\s*[-*] /gm) || []).length), 0);
      }
    }
  }
  // Contagem do que fica para o debate
  let interrog = 0, conferir = 0;
  for (const c of o.capitulos) {
    for (const t of c.la?.trechos || []) interrog += ((t.texto + ' ' + t.margem.join(' ')).match(/\[\?\]/g) || []).length;
    for (const t of c.pt?.trechos || []) conferir += t.notas.filter(x => /a conferir/i.test(x)).length;
  }
  total += n;
  resumo.push(`| ${o.meta.autor_pt || o.meta.autor}, *${o.meta.titulo}* | ${n} | ${interrog} | ${conferir} |`);
  if (blocos.length) partes.push(`## ${o.meta.autor_pt || o.meta.autor}, *${o.meta.titulo}*\n\n${blocos.join('\n\n')}`);
}

const doc = `# Pontos de dúvida para revisão humana

Lista gerada em ${hoje} por \`node tools/duvidas.mjs\`, a partir dos registros do projeto. Não edite à mão: resolva o ponto no capítulo (ou no registro de origem) e gere a lista de novo.

Entra aqui só o que ficou expressamente para o Pedro: pontos em aberto e divergências dos debates, correções acolhidas e não aplicadas, propostas de glossário, remissões que os revisores não conseguiram abrir, a seção "Para o Pedro" das revisões por agente, os pontos "a decidir" da revisão independente do Digesto ainda sem decisão e as pendências dos arquivos de progresso.

Ficam fora, por serem tarefa do debate (limitação do projeto, \`CRITERIOS.md\`): as leituras do latim marcadas com \`[?]\` e as remissões "a conferir" das notas. A tabela só as conta.

| Obra | Itens para revisão humana | Leituras \`[?]\` no latim (debate) | Remissões "a conferir" (debate) |
|---|---|---|---|
${resumo.join('\n')}

${partes.join('\n\n')}
`;
fs.writeFileSync(path.join(RAIZ, 'docs', 'pontos-de-duvida.md'), doc);
console.log(`docs/pontos-de-duvida.md: ${total} itens para revisão humana`);

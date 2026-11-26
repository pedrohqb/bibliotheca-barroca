// Monta o pacote de um capítulo para o debate de tradução (Claude × Codex × Gemini).
// Uso: node tools/pacote-debate.mjs <obra> <capitulo>   ex.: node tools/pacote-debate.mjs jansenius-augustinus t2-lp-01
// Gera debate/<obra>/<capitulo>/pacote.md: critérios, glossário e o latim ao lado da tradução, trecho a trecho.
import fs from 'node:fs';
import path from 'node:path';
import { lerObra, RAIZ } from './lib.mjs';

const [obraId, capId] = process.argv.slice(2);
if (!obraId || !capId) { console.error('uso: node tools/pacote-debate.mjs <obra> <capitulo>'); process.exit(2); }
const o = lerObra(obraId);
const c = o.capitulos.find(x => x.id === capId);
if (!c?.la || !c.pt) { console.error(`capítulo ${capId} sem latim ou sem tradução em ${obraId}`); process.exit(1); }
const criterios = fs.readFileSync(path.join(RAIZ, 'debate', 'criterios-revisao.md'), 'utf8').trim();
const b = o.meta.edicao_base;

const partes = [
  `# Revisão de tradução: ${o.meta.autor}, ${o.meta.titulo} — ${c.la.meta.capitulo}`,
  `Edição de base: ${b.titulo}, ${b.local}, ${b.ano} (${b.exemplar}). Scan do capítulo: ${c.la.meta.scan}`,
  `Título latino: ${c.la.meta.titulo}`,
  `Título da tradução: ${c.pt.meta.titulo}`,
  criterios,
  '## Glossário fixado para a obra',
  o.glossario.map(g => `- **${g.lema}** (${g.formas.join(', ')}) → ${g.pt.join(' / ')}. ${g.nota}`).join('\n'),
  '## Texto',
  c.la.trechos.map((t, i) => {
    const p = c.pt.trechos[i];
    return [`### § ${t.id.slice(1)} (col. ${t.col})`,
      `**Latim.** ${t.texto}`,
      ...t.margem.map(m => `*Margem da impressão:* ${m}`),
      `**Tradução.** ${p.texto}`,
      ...p.notas.map(n => `*Nota do tradutor:* ${n}`)].join('\n\n');
  }).join('\n\n')
];

const dir = path.join(RAIZ, 'debate', obraId, capId);
fs.mkdirSync(dir, { recursive: true });
const arq = path.join(dir, 'pacote.md');
fs.writeFileSync(arq, partes.join('\n\n') + '\n');
console.log(`pacote gravado em ${path.relative(process.cwd(), arq)} (${(fs.statSync(arq).size / 1024).toFixed(1)} KB)`);

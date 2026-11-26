// Situação de cada capítulo do catálogo de uma obra e o próximo a produzir.
// Uso: node tools/situacao.mjs <obra> [--proximo]
import fs from 'node:fs';
import path from 'node:path';
import { lerObra } from './lib.mjs';

const [obraId, flag] = process.argv.slice(2);
if (!obraId) { console.error('uso: node tools/situacao.mjs <obra> [--proximo]'); process.exit(2); }
const o = lerObra(obraId);
const arq = path.join(o.dir, 'catalogo.json');
if (!fs.existsSync(arq)) { console.error(`${obraId}: falta catalogo.json`); process.exit(1); }
const cat = JSON.parse(fs.readFileSync(arq, 'utf8'));
const feitos = new Map(o.capitulos.map(c => [c.id, c]));
const linhas = cat.capitulos.map(k => {
  const c = feitos.get(k.id);
  const estado = !c?.la ? 'pendente' : !c.pt ? 'transcrito' : (c.pt.meta.estado || 'rascunho');
  return { ...k, estado };
});
if (flag === '--proximo') {
  const p = linhas.find(l => l.estado === 'pendente' || l.estado === 'transcrito' || l.estado === 'rascunho');
  if (!p) { console.log('nenhum capítulo pendente no catálogo'); process.exit(3); }
  console.log(JSON.stringify(p));
} else {
  const cont = {};
  for (const l of linhas) {
    cont[l.estado] = (cont[l.estado] || 0) + 1;
    console.log(`${l.id.padEnd(12)} ${l.estado.padEnd(11)} col. ${String(l.colunas).padEnd(9)} ${l.livro}, ${l.capitulo}`);
  }
  console.log('\n' + Object.entries(cont).map(([k, v]) => `${k}: ${v}`).join(' · '));
}

// Confere as obras antes do build: cabeçalhos, alinhamento dos trechos entre idiomas e uso do glossário.
// Erros fazem o comando falhar (e o pull request não passa); avisos só aparecem na saída.
import path from 'node:path';
import { lerObras, RAIZ, textoPlano } from './lib.mjs';

const erros = [], avisos = [];
const rel = f => path.relative(RAIZ, f);
let obras;
try { obras = lerObras(); } catch (e) { console.error('ERRO ' + e.message); process.exit(1); }

for (const o of obras) {
  for (const k of ['id', 'autor', 'titulo', 'edicao_base', 'idiomas', 'licenca']) if (!o.meta[k]) erros.push(`${o.id}/obra.json: falta "${k}"`);
  if (o.meta.id !== o.id) erros.push(`${o.id}/obra.json: id "${o.meta.id}" difere do nome da pasta`);
  if (!o.capitulos.length) avisos.push(`${o.id}: nenhum capítulo`);
  const lgs = o.idiomas.filter(l => l !== 'la');

  for (const c of o.capitulos) {
    const la = c.la;
    if (!la) { erros.push(`${o.id}/${c.id}: tradução sem o latim correspondente`); continue; }
    for (const k of ['capitulo', 'titulo', ...(o.meta.referencia === 'nenhuma' ? [] : ['scan'])]) if (!la.meta[k]) erros.push(`${rel(la.arquivo)}: falta "${k}" no cabeçalho`);
    const vistos = new Set();
    for (const t of la.trechos) {
      if (vistos.has(t.id)) erros.push(`${rel(la.arquivo)}:${t.linha}: trecho ${t.id} repetido`);
      vistos.add(t.id);
      if (!t.col && o.meta.referencia !== 'nenhuma') erros.push(`${rel(la.arquivo)}:${t.linha}: trecho ${t.id} sem referência ao scan (ex.: "@${t.id} 2A")`);
      if (!t.texto) erros.push(`${rel(la.arquivo)}:${t.linha}: trecho ${t.id} vazio`);
    }
    const idsLa = la.trechos.map(t => t.id).join(' ');
    for (const lg of lgs) {
      const tr = c[lg];
      if (!tr) { avisos.push(`${o.id}/${c.id}: ainda sem ${o.meta.idiomas[lg] || lg}`); continue; }
      const idsTr = tr.trechos.map(t => t.id).join(' ');
      if (idsTr !== idsLa) {
        const a = new Set(la.trechos.map(t => t.id)), b = new Set(tr.trechos.map(t => t.id));
        const falta = [...a].filter(x => !b.has(x)), sobra = [...b].filter(x => !a.has(x));
        erros.push(`${rel(tr.arquivo)}: trechos desalinhados com o latim` +
          (falta.length ? `; faltam ${falta.join(', ')}` : '') + (sobra.length ? `; sobram ${sobra.join(', ')}` : '') +
          (!falta.length && !sobra.length ? '; ordem diferente' : ''));
        continue;
      }
      for (const t of tr.trechos) if (!t.texto) erros.push(`${rel(tr.arquivo)}:${t.linha}: trecho ${t.id} vazio`);
      if (lg !== 'pt') continue;
      // Glossário: se o latim do trecho usa um termo, a tradução deve trazer uma das versões fixadas.
      la.trechos.forEach((t, i) => {
        const ptTxt = textoPlano(tr.trechos[i].texto).toLowerCase();
        for (const g of o.glossario) {
          const usa = g.formas.some(f => new RegExp(`(?<![\\p{L}])${f}(?![\\p{L}])`, 'u').test(t.texto));
          if (usa && !g.pt.some(p => ptTxt.includes(p.toLowerCase())))
            avisos.push(`${rel(tr.arquivo)}:${tr.trechos[i].linha}: ${t.id} tem "${g.lema}" no latim, mas nenhuma das versões do glossário (${g.pt.join(', ')})`);
        }
      });
    }
  }
}

for (const a of avisos) console.log('aviso ' + a);
for (const e of erros) console.error('ERRO ' + e);
const n = obras.reduce((s, o) => s + o.capitulos.length, 0);
console.log(`${obras.length} obra(s), ${n} capítulo(s): ${erros.length} erro(s), ${avisos.length} aviso(s)`);
process.exit(erros.length ? 1 : 0);

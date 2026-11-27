// Gera o site estático em _site/: acervo, página de cada obra, leitor bilíngue de cada capítulo e busca.
// Uso: node tools/build.mjs [pasta-de-saída]
import fs from 'node:fs';
import path from 'node:path';
import { lerObras, RAIZ, esc, formatar, textoPlano, limparProcesso } from './lib.mjs';

const SAIDA = path.resolve(process.argv[2] || path.join(RAIZ, '_site'));
const SITE = JSON.parse(fs.readFileSync(path.join(RAIZ, 'site.json'), 'utf8'));
fs.rmSync(SAIDA, { recursive: true, force: true });
fs.mkdirSync(path.join(SAIDA, 'assets'), { recursive: true });
for (const f of ['estilo.css', 'leitor.js', 'busca.js']) fs.copyFileSync(path.join(RAIZ, 'site', f), path.join(SAIDA, 'assets', f));

const FONTES = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap';
const ESTADO = { importada: 'tradução própria, aguardando debate', rascunho: 'tradução em rascunho', cotejada: 'tradução com comparações', revisada: 'tradução revista', debatida: 'tradução debatida', publicada: 'tradução revista e publicada' };
const REF = { coluna: 'col.', pagina: 'p.', folio: 'fol.', lei: 'D.' };
// Referência do trecho no gutter; no Digesto (referencia: lei) é a citação usual, D. 1.1.1 pr.
const refTrecho = (o, col) => o.meta.referencia === 'lei' ? col.replace(/\.pr$/, ' pr.') : col;
const TRANSC = { importada: 'transcrição própria, a conferir com o scan', provisoria: 'transcrição provisória', conferida: 'transcrição conferida com o scan' };

const pagina = ({ titulo, raiz, trilha = '', corpo, extra = '', scripts = '' }) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTES}">
<link rel="stylesheet" href="${raiz}assets/estilo.css">
</head>
<body>
<header class="top"><div class="wrap bar">
<a class="marca" href="${raiz}index.html">${esc(SITE.nome)}</a>
${trilha}
<a class="ui" href="${raiz}busca.html">Buscar</a>
${extra}
</div></header>
${corpo}
<footer><div class="wrap">${SITE.rodape.map(p => `<p>${p}</p>`).join('')}</div></footer>
${scripts}
</body>
</html>
`;

// Acréscimos de editor posterior (@a): a âncora {aN} vira chamada sobrescrita que leva ao rodapé do trecho, na mesma coluna.
const chamadas = (html, tid, lg) => html.replace(/\s*\{a(\d+)\}/g, (_, n) => `<sup class="ac"><a href="#${tid}-${lg}-a${n}" id="${tid}-${lg}-c${n}" title="Acréscimo ${n}">a${n}</a></sup>`);
const rodape = (lista, tid, lg, rot, gl) => lista.map((a, k) => `<div class="ac" id="${tid}-${lg}-a${k + 1}"><b><a href="#${tid}-${lg}-c${k + 1}">a${k + 1}</a> ${esc(rot)}</b>${formatar(a, gl)}</div>`).join('');
const escrever = (rel, html) => { const f = path.join(SAIDA, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };
// Histórico do debate, tirado do registro (debate/<obra>/<id>/resumo.md) e da data gravada pelo debate.mjs (campo "debate").
const REPO = 'https://github.com/pedrohqb/bibliotheca-barroca/blob/main';
const dataBr = d => { const m = String(d || '').match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? `${m[3]}/${m[2]}/${m[1]}` : ''; };
const historico = (o, c) => {
  if (!c.pt) return '';
  const dir = path.join(RAIZ, 'debate', o.id, c.id);
  if (fs.existsSync(path.join(dir, 'resumo.md'))) {
    const reg = path.join(dir, 'registro.md');
    const n = fs.existsSync(reg) ? (fs.readFileSync(reg, 'utf8').match(/^## Rodada /gm) || []).length : 0;
    const quando = dataBr(c.pt.meta.debate);
    return `Debatida com Codex e Gemini${quando ? ' em ' + quando : ''}${n ? ` (${n} rodada${n > 1 ? 's' : ''})` : ''}; <a href="${REPO}/debate/${o.id}/${c.id}/resumo.md">resumo do debate</a>. `;
  }
  return ['rascunho', 'importada'].includes(estadoDe(o, c)) ? 'Ainda sem debate. ' : '';
};
const LICENCAS = { 'CC BY-NC-ND 4.0': 'https://creativecommons.org/licenses/by-nc-nd/4.0/deed.pt-br' };
const licenca = n => LICENCAS[n] ? `<a href="${LICENCAS[n]}">${esc(n)}</a>` : esc(n);
// Obra feita por comparação com outras traduções (obra.json → traducoes_cotejadas) não vai a debate: rascunho conta como "cotejada".
const estadoDe = (o, c) => (c.pt?.meta.estado === 'rascunho' && o?.meta.traducoes_cotejadas?.length ? 'cotejada' : c.pt?.meta.estado);
const estadoTraducao = (c, o) => c.pt ? (ESTADO[estadoDe(o, c)] || 'tradução') : 'sem tradução';
const situacao = c => [TRANSC[c.la?.meta.transcricao] || 'transcrição', c.pt ? (ESTADO[c.pt.meta.estado] || 'tradução') : 'sem tradução'].join(' · ');
const nomeCap = c => `${c.pt?.meta.capitulo || c.la.meta.capitulo}`;
const rotulo = c => [c.la.meta.tomo && 'Tomo ' + c.la.meta.tomo, c.pt?.meta.livro_curto, nomeCap(c)].filter(Boolean).join(' · ');
// Agrupa pelo livro do catálogo (fonte única do nome); o rótulo é o nome em português mais frequente no grupo, ou o latino.
const grupos = caps => {
  const g = new Map();
  for (const c of caps) {
    const k = `${c.la.meta.tomo || ''}|${c.livroChave ?? c.la.meta.livro ?? ''}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push(c);
  }
  return [...g.values()].map(cs => {
    const nomes = cs.map(c => c.pt?.meta.livro).filter(Boolean);
    const pt = nomes.sort((a, b) => nomes.filter(x => x === b).length - nomes.filter(x => x === a).length)[0];
    const tomo = cs[0].la.meta.tomo;
    return [[tomo && 'Tomo ' + tomo, pt || cs[0].la.meta.livro].filter(Boolean).join(' · ') || 'Capítulos', cs];
  });
};
const indice = [];
// Capítulo importado ainda não revisto (estado: importada) fica fora do site até passar pela revisão e pelo debate.
// No site os capítulos seguem a ordem da obra (tomo e posição no volume, pelo catálogo), não a ordem de produção (campo "ordem").
const ROMANOS = { I: 1, V: 5, X: 10, L: 50, C: 100 };
const romano = s => [...String(s || '').toUpperCase()].reduce((t, c, i, a) => t + ((ROMANOS[c] || 0) < (ROMANOS[a[i + 1]] || 0) ? -1 : 1) * (ROMANOS[c] || 0), 0);
const ordemDaObra = o => {
  const arq = path.join(o.dir, 'catalogo.json');
  const cat = fs.existsSync(arq) ? JSON.parse(fs.readFileSync(arq, 'utf8')).capitulos || [] : [];
  const pos = new Map(cat.map((e, i) => [e.id, [romano(e.tomo), parseInt(e.paginas) || 0, i]]));
  const livroCat = new Map(cat.map(e => [e.id, e.livro]));
  for (const c of o.capitulos) c.livroChave = livroCat.get(c.id) || c.la.meta.livro || '';
  const chave = c => pos.get(c.id) || [romano(c.la.meta.tomo), Infinity, +c.la.meta.ordem || 0];
  return [...o.capitulos].sort((a, b) => {
    const x = chave(a), y = chave(b);
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2] || a.id.localeCompare(b.id);
  });
};
const obras = lerObras().map(o => ({ ...o, capitulos: o.capitulos.filter(c => c.pt?.meta.estado !== 'importada') })).filter(o => o.capitulos.length)
  .map(o => ({ ...o, capitulos: ordemDaObra(o) }));

// Acervo
escrever('index.html', pagina({
  titulo: SITE.nome, raiz: '',
  corpo: `<main class="wrap acervo">
<h1>${esc(SITE.titulo)}</h1>
<p class="lead">${esc(SITE.descricao)}</p>
${obras.map(o => `<section class="obra">
<div><p class="aut">${esc(o.meta.autor_pt || o.meta.autor)}</p><h2><a href="${o.id}/index.html">${esc(o.meta.titulo)}</a></h2>
<p class="ui" style="font-size:14px;color:var(--mute)">${o.meta.rotulo_edicao ? esc(o.meta.rotulo_edicao) : `${esc(o.meta.edicao_base.local_pt || o.meta.edicao_base.local)}, ${esc(o.meta.edicao_base.ano)}`}</p></div>
<div><p>${esc(o.meta.descricao)}</p>
<ul class="caps">${o.capitulos.slice(-5).reverse().map(c => `<li><a class="ct" href="${o.id}/${c.id}.html">${esc(rotulo(c))}: ${esc(c.pt?.meta.titulo || c.la.meta.titulo)}</a></li>`).join('')}</ul>
<p class="ui" style="font-size:14px;margin-top:12px">${o.capitulos.length > 5 ? `Últimos capítulos publicados. ` : ''}<a href="${o.id}/index.html">Todos os ${o.capitulos.length} capítulos →</a></p></div>
</section>`).join('\n')}
</main>`
}));

for (const o of obras) {
  const b = o.meta.edicao_base;
  // Página da obra
  escrever(`${o.id}/index.html`, pagina({
    titulo: `${o.meta.titulo} · ${SITE.nome}`, raiz: '../',
    trilha: `<span class="trilha">${esc(o.meta.titulo)}</span>`,
    corpo: `<main class="wrap acervo">
<p class="aut ui" style="color:var(--mute);margin:0 0 8px">${esc(o.meta.autor_pt || o.meta.autor)}</p>
<h1>${esc(o.meta.titulo)}</h1>
<p class="lead">${esc(o.meta.descricao)}</p>
<dl class="ficha">
<dt>Edição de base</dt><dd>${esc(b.titulo)}. ${esc(b.local)}: ${esc(b.impressor)}, ${esc(b.ano)}.</dd>
<dt>Exemplar</dt><dd>${esc(b.exemplar)}${b.urn ? ` (${esc(b.urn)})` : ''}${b.nota ? '. ' + esc(b.nota) : ''}</dd>
${o.meta.acrescimos?.descricao ? `<dt>Acréscimos</dt><dd>${esc(o.meta.acrescimos.descricao)}</dd>
` : ''}${o.meta.texto_latino ? `<dt>Texto latino</dt><dd>${formatar(o.meta.texto_latino)}</dd>
` : ''}${o.meta.traducoes_cotejadas?.length ? `<dt>Traduções cotejadas</dt><dd><ul class="cot">${o.meta.traducoes_cotejadas.map(t => `<li>${formatar(t)}</li>`).join('')}</ul></dd>
` : ''}${SITE.limitacoes?.length ? `<dt>Limitações</dt><dd>${SITE.limitacoes.map(esc).join(' ')}</dd>
` : ''}<dt>Licenças</dt><dd>Transcrição: ${licenca(o.meta.licenca.transcricao)}. Tradução: ${licenca(o.meta.licenca.traducao)}. Uso comercial proibido.</dd>
</dl>
<h2>Capítulos</h2>
${grupos(o.capitulos).map(([livro, cs]) => `<h3 class="livro">${esc(livro)}</h3>
<ul class="caps">${cs.map(c => `<li><a class="ct" href="${c.id}.html">${esc(nomeCap(c))}: ${esc(c.pt?.meta.titulo || c.la.meta.titulo)}</a></li>`).join('')}</ul>`).join('\n')}
</main>`
  }));

  // Leitor de cada capítulo
  o.capitulos.forEach((c, ci) => {
    const la = c.la, pt = c.pt;
    const scan = la.meta.scan;
    const ant = o.capitulos[ci - 1], prox = o.capitulos[ci + 1];
    const rotAc = o.meta.acrescimos?.rotulo || 'Acréscimo';
    const temAc = la.trechos.some(t => t.acrescimos.length);
    const linhas = la.trechos.map((t, i) => {
      const p = pt?.trechos[i];
      const num = t.id.slice(1);
      indice.push({ obra: o.meta.titulo, cap: nomeCap(c), url: `${o.id}/${c.id}.html`, id: t.id, lg: 'la', txt: textoPlano(t.texto) });
      if (p) indice.push({ obra: o.meta.titulo, cap: nomeCap(c), url: `${o.id}/${c.id}.html`, id: t.id, lg: 'pt', txt: textoPlano(p.texto) });
      return `<div class="t${t.paragrafo ? ' par' : ''}" id="${t.id}">
<div class="gut"><a class="n" href="#${t.id}" title="Copiar o link deste trecho">§ ${num}</a>${t.col ? `<a class="c" href="${esc(scan || '#')}" title="Abrir o scan (${REF[o.meta.referencia] || 'col.'} ${esc(refTrecho(o, t.col))})">${REF[o.meta.referencia] || 'col.'} ${esc(refTrecho(o, t.col))}</a>` : ''}</div>
<div class="la" lang="la"><p>${chamadas(formatar(t.texto, o.glossario), t.id, 'la')}</p>${t.margem.map(m => `<div class="mg">${formatar(m)}</div>`).join('')}${rodape(t.acrescimos, t.id, 'la', rotAc, o.glossario)}</div>
<div class="pt">${p ? `<p>${chamadas(formatar(p.texto), t.id, 'pt')}</p>${rodape(p.acrescimos, t.id, 'pt', rotAc)}${p.notas.map(n => `<div class="nt"><b>Nota</b>${formatar(n)}</div>`).join('')}` : '<p class="nt">Tradução ainda não feita.</p>'}</div>
</div>`;
    }).join('\n');
    const usados = o.glossario.filter(g => la.trechos.some(t => g.formas.some(f => new RegExp(`(?<![\\p{L}])${f}(?![\\p{L}])`, 'u').test(t.texto))));
    const titulo = pt?.meta.titulo || la.meta.titulo;
    escrever(`${o.id}/${c.id}.html`, pagina({
      titulo: `${o.meta.titulo}, ${nomeCap(c)}`, raiz: '../',
      trilha: `<span class="trilha"><a href="index.html">${esc(o.meta.titulo)}</a> · ${esc(nomeCap(c))}</span>`,
      extra: `<div class="seg ui" role="group" aria-label="Texto exibido">
<button type="button" data-vista="ambos" aria-pressed="true">Latim e português</button><button type="button" data-vista="la" aria-pressed="false">Latim</button><button type="button" data-vista="pt" aria-pressed="false">Português</button></div>
<label class="chk ui"><input type="checkbox" id="ver-notas" checked> Notas</label>${temAc ? `
<label class="chk ui"><input type="checkbox" id="ver-acr" checked> Acréscimos</label>` : ''}
<label class="chk ui"><input type="checkbox" id="ver-glos" checked> Glossário</label>`,
      corpo: `<main class="wrap">
<div class="cab">
<p class="liv">${esc(o.meta.autor_pt || o.meta.autor)}, <i>${esc(o.meta.titulo)}</i>${la.meta.tomo ? ', tomo ' + esc(la.meta.tomo) : ''} · ${esc(pt?.meta.livro || la.meta.livro || '')}</p>
<h1>${esc(titulo)}</h1>
<p class="lat" lang="la">${esc(la.meta.capitulo)}. ${esc(la.meta.titulo)}</p>
<p class="aviso"><b>${esc(estadoTraducao(c, o).replace(/^./, s => s.toUpperCase()))}.</b> ${pt?.meta.tradutor ? 'Tradução de ' + esc(pt.meta.tradutor) + '. ' : ''}${pt?.meta.processo && limparProcesso(pt.meta.processo) ? esc(limparProcesso(pt.meta.processo)) + '. ' : ''}${historico(o, c)}${la.meta.colunas ? `${['pagina', 'lei'].includes(o.meta.referencia) ? 'Páginas' : 'Colunas'} ${esc(la.meta.colunas)} da edição de ${esc(b.local_pt || b.local)}, ${esc(la.meta.ano || b.ano)}` : `Edição de ${esc(b.local_pt || b.local)}, ${esc(la.meta.ano || b.ano)}`}${scan ? `; <a href="${esc(scan)}">ver o scan</a>` : ''}.</p>
</div>
<div class="colhead"><span></span><span class="hla">Latim</span><span class="hpt">Português</span></div>
<div class="texto">
${linhas}
</div>
${usados.length ? `<section class="glos"><h2>Glossário deste capítulo</h2><dl>${usados.map(g => `<div><dt lang="la">${esc(g.lema)}<span>${esc(g.pt.join(', '))}</span></dt><dd>${formatar(g.nota)}</dd></div>`).join('')}</dl></section>` : ''}
<nav class="navcap">${ant ? `<a href="${ant.id}.html">← ${esc(nomeCap(ant))}</a>` : '<span></span>'}${prox ? `<a href="${prox.id}.html">${esc(nomeCap(prox))} →</a>` : '<span></span>'}</nav>
</main>`,
      scripts: `<script type="application/json" id="glossario">${JSON.stringify(o.glossario).replace(/</g, '\\u003c')}</script>
<script src="../assets/leitor.js"></script>`
    }));
  });
}

// Busca
fs.writeFileSync(path.join(SAIDA, 'busca.json'), JSON.stringify(indice));
escrever('busca.html', pagina({
  titulo: `Buscar · ${SITE.nome}`, raiz: '',
  corpo: `<main class="wrap acervo busca">
<h1>Buscar nos textos</h1>
<p class="lead">No latim e nas traduções, sem distinguir acentos.</p>
<label for="q" class="ui" style="display:block;font-size:14px;color:var(--mute);margin-bottom:6px">Palavra ou expressão</label>
<input id="q" type="search" autocomplete="off" placeholder="gratia, livre-arbítrio, Salvador…">
<p id="info" class="ui" style="font-size:14px;color:var(--mute)"></p>
<ul class="res" id="res"></ul>
</main>`,
  scripts: '<script src="assets/busca.js"></script>'
}));

console.log(`site gerado em ${path.relative(process.cwd(), SAIDA) || '.'}: ${obras.length} obra(s), ${indice.length} entradas na busca`);

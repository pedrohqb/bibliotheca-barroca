// Gera o site estático em _site/: acervo, página de cada obra, leitor bilíngue de cada capítulo e busca.
// Uso: node tools/build.mjs [pasta-de-saída]
import fs from 'node:fs';
import path from 'node:path';
import { lerObras, RAIZ, esc, formatar, textoPlano } from './lib.mjs';

const SAIDA = path.resolve(process.argv[2] || path.join(RAIZ, '_site'));
const SITE = JSON.parse(fs.readFileSync(path.join(RAIZ, 'site.json'), 'utf8'));
fs.rmSync(SAIDA, { recursive: true, force: true });
fs.mkdirSync(path.join(SAIDA, 'assets'), { recursive: true });
for (const f of ['estilo.css', 'leitor.js', 'busca.js']) fs.copyFileSync(path.join(RAIZ, 'site', f), path.join(SAIDA, 'assets', f));

const FONTES = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap';
const ESTADO = { importada: 'tradução própria, aguardando debate', rascunho: 'tradução em rascunho', revisada: 'tradução revista', debatida: 'tradução debatida, aguardando revisão', publicada: 'tradução revista e publicada' };
const REF = { coluna: 'col.', pagina: 'p.', folio: 'fol.' };
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

const escrever = (rel, html) => { const f = path.join(SAIDA, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };
const situacao = c => [TRANSC[c.la?.meta.transcricao] || 'transcrição', c.pt ? (ESTADO[c.pt.meta.estado] || 'tradução') : 'sem tradução'].join(' · ');
const nomeCap = c => `${c.pt?.meta.capitulo || c.la.meta.capitulo}`;
const rotulo = c => [c.la.meta.tomo && 'Tomo ' + c.la.meta.tomo, c.pt?.meta.livro_curto, nomeCap(c)].filter(Boolean).join(' · ');
const grupos = caps => {
  const g = new Map();
  for (const c of caps) {
    const k = [c.la.meta.tomo && 'Tomo ' + c.la.meta.tomo, c.pt?.meta.livro || c.la.meta.livro].filter(Boolean).join(' · ') || 'Capítulos';
    if (!g.has(k)) g.set(k, []);
    g.get(k).push(c);
  }
  return [...g];
};
const indice = [];
const obras = lerObras();

// Acervo
escrever('index.html', pagina({
  titulo: SITE.nome, raiz: '',
  corpo: `<main class="wrap acervo">
<h1>${esc(SITE.titulo)}</h1>
<p class="lead">${esc(SITE.descricao)}</p>
${obras.map(o => `<section class="obra">
<div><p class="aut">${esc(o.meta.autor_pt || o.meta.autor)}</p><h2><a href="${o.id}/index.html">${esc(o.meta.titulo)}</a></h2>
<p class="ui" style="font-size:14px;color:var(--mute)">${esc(o.meta.edicao_base.local_pt || o.meta.edicao_base.local)}, ${esc(o.meta.edicao_base.ano)}</p></div>
<div><p>${esc(o.meta.descricao)}</p>
<ul class="caps">${o.capitulos.slice(-5).reverse().map(c => `<li><a class="ct" href="${o.id}/${c.id}.html">${esc(rotulo(c))}: ${esc(c.pt?.meta.titulo || c.la.meta.titulo)}</a><span class="cs">${esc(situacao(c))}</span></li>`).join('')}</ul>
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
<dt>Exemplar</dt><dd>${esc(b.exemplar)} (${esc(b.urn)})${b.nota ? '. ' + esc(b.nota) : ''}</dd>
<dt>Licenças</dt><dd>Transcrição: ${esc(o.meta.licenca.transcricao)}. Tradução: ${esc(o.meta.licenca.traducao)}.</dd>
</dl>
<h2>Capítulos</h2>
${grupos(o.capitulos).map(([livro, cs]) => `<h3 class="livro">${esc(livro)}</h3>
<ul class="caps">${cs.map(c => `<li><a class="ct" href="${c.id}.html">${esc(nomeCap(c))}: ${esc(c.pt?.meta.titulo || c.la.meta.titulo)}</a><span class="cs">${esc(situacao(c))}</span></li>`).join('')}</ul>`).join('\n')}
</main>`
  }));

  // Leitor de cada capítulo
  o.capitulos.forEach((c, ci) => {
    const la = c.la, pt = c.pt;
    const scan = la.meta.scan;
    const ant = o.capitulos[ci - 1], prox = o.capitulos[ci + 1];
    const linhas = la.trechos.map((t, i) => {
      const p = pt?.trechos[i];
      const num = t.id.slice(1);
      indice.push({ obra: o.meta.titulo, cap: nomeCap(c), url: `${o.id}/${c.id}.html`, id: t.id, lg: 'la', txt: textoPlano(t.texto) });
      if (p) indice.push({ obra: o.meta.titulo, cap: nomeCap(c), url: `${o.id}/${c.id}.html`, id: t.id, lg: 'pt', txt: textoPlano(p.texto) });
      return `<div class="t${t.paragrafo ? ' par' : ''}" id="${t.id}">
<div class="gut"><a class="n" href="#${t.id}" title="Copiar o link deste trecho">§ ${num}</a>${t.col ? `<a class="c" href="${esc(scan || '#')}" title="Abrir o scan (${REF[o.meta.referencia] || 'col.'} ${esc(t.col)})">${REF[o.meta.referencia] || 'col.'} ${esc(t.col)}</a>` : ''}</div>
<div class="la" lang="la"><p>${formatar(t.texto, o.glossario)}</p>${t.margem.map(m => `<div class="mg">${formatar(m)}</div>`).join('')}</div>
<div class="pt">${p ? `<p>${formatar(p.texto)}</p>${p.notas.map(n => `<div class="nt"><b>Nota</b>${formatar(n)}</div>`).join('')}` : '<p class="nt">Tradução ainda não feita.</p>'}</div>
</div>`;
    }).join('\n');
    const usados = o.glossario.filter(g => la.trechos.some(t => g.formas.some(f => new RegExp(`(?<![\\p{L}])${f}(?![\\p{L}])`, 'u').test(t.texto))));
    const titulo = pt?.meta.titulo || la.meta.titulo;
    escrever(`${o.id}/${c.id}.html`, pagina({
      titulo: `${o.meta.titulo}, ${nomeCap(c)}`, raiz: '../',
      trilha: `<span class="trilha"><a href="index.html">${esc(o.meta.titulo)}</a> · ${esc(nomeCap(c))}</span>`,
      extra: `<div class="seg ui" role="group" aria-label="Texto exibido">
<button type="button" data-vista="ambos" aria-pressed="true">Latim e português</button><button type="button" data-vista="la" aria-pressed="false">Latim</button><button type="button" data-vista="pt" aria-pressed="false">Português</button></div>
<label class="chk ui"><input type="checkbox" id="ver-notas" checked> Notas</label>
<label class="chk ui"><input type="checkbox" id="ver-glos" checked> Glossário</label>`,
      corpo: `<main class="wrap">
<div class="cab">
<p class="liv">${esc(o.meta.autor_pt || o.meta.autor)}, <i>${esc(o.meta.titulo)}</i>${la.meta.tomo ? ', tomo ' + esc(la.meta.tomo) : ''} · ${esc(pt?.meta.livro || la.meta.livro || '')}</p>
<h1>${esc(titulo)}</h1>
<p class="lat" lang="la">${esc(la.meta.capitulo)}. ${esc(la.meta.titulo)}</p>
<p class="aviso"><b>${esc(situacao(c).replace(/^./, s => s.toUpperCase()))}.</b> ${pt?.meta.tradutor ? 'Tradução de ' + esc(pt.meta.tradutor) + '. ' : ''}${pt?.meta.processo ? esc(pt.meta.processo) + '. ' : ''}${la.meta.colunas ? `${o.meta.referencia === 'pagina' ? 'Páginas' : 'Colunas'} ${esc(la.meta.colunas)} da edição de ${esc(b.local_pt || b.local)}, ${esc(la.meta.ano || b.ano)}` : `Edição de ${esc(b.local_pt || b.local)}, ${esc(la.meta.ano || b.ano)}`}${scan ? `; <a href="${esc(scan)}">ver o scan</a>` : ''}.</p>
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

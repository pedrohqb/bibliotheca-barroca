{
  const doc = document.documentElement;
  const guardar = (k, v) => { try { localStorage.setItem('bib.' + k, v); } catch {} };
  const ler = k => { try { return localStorage.getItem('bib.' + k); } catch { return null; } };

  // Vista: latim e português, só latim, só português
  const botoes = [...document.querySelectorAll('[data-vista]')];
  const vista = v => {
    doc.classList.remove('so-la', 'so-pt');
    if (v !== 'ambos') doc.classList.add('so-' + v);
    botoes.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.vista === v)));
    guardar('vista', v);
  };
  botoes.forEach(b => b.addEventListener('click', () => vista(b.dataset.vista)));
  vista(ler('vista') || 'ambos');

  // Notas do tradutor e marcação do glossário
  const alternar = (id, classe, chave) => {
    const cx = document.getElementById(id);
    if (!cx) return;
    const salvo = ler(chave);
    if (salvo !== null) cx.checked = salvo === '1';
    const ap = () => { doc.classList.toggle(classe, !cx.checked); guardar(chave, cx.checked ? '1' : '0'); };
    cx.addEventListener('change', ap);
    ap();
  };
  alternar('ver-notas', 'sem-notas', 'notas');
  alternar('ver-glos', 'sem-glos', 'glos');
  alternar('ver-acr', 'sem-acr', 'acr');

  // Balão do glossário (eventos delegados: valem também para o capítulo seguinte carregado pelo "Ouvir")
  const dadosEl = document.getElementById('glossario');
  const glos = dadosEl ? JSON.parse(dadosEl.textContent) : [];
  const tip = document.createElement('div');
  tip.id = 'tip';
  tip.setAttribute('role', 'tooltip');
  document.body.appendChild(tip);
  const mostrar = el => {
    if (doc.classList.contains('sem-glos')) return;
    const g = glos[+el.dataset.g];
    if (!g) return;
    tip.replaceChildren();
    const b = document.createElement('b');
    b.textContent = `${g.lema} → ${g.pt.join(', ')}`;
    const p = document.createElement('span');
    p.textContent = g.nota.replace(/\*/g, '');
    tip.append(b, p);
    const r = el.getBoundingClientRect();
    tip.classList.add('on');
    const w = tip.offsetWidth;
    const x = Math.max(8, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - w - 8));
    tip.style.left = x + 'px';
    tip.style.top = (window.scrollY + r.bottom + 8) + 'px';
  };
  const esconder = () => tip.classList.remove('on');
  const gDe = ev => ev.target instanceof Element ? ev.target.closest('.g') : null;
  document.addEventListener('mouseover', ev => { const g = gDe(ev); if (g && !g.contains(ev.relatedTarget)) mostrar(g); });
  document.addEventListener('mouseout', ev => { const g = gDe(ev); if (g && !g.contains(ev.relatedTarget)) esconder(); });
  document.addEventListener('focusin', ev => { const g = gDe(ev); if (g) mostrar(g); });
  document.addEventListener('focusout', ev => { if (gDe(ev)) esconder(); });

  // Realce do par latim/português e link permanente de cada trecho
  let irPara = null; // definido pelo "Ouvir": pula a leitura para o trecho clicado
  document.addEventListener('click', ev => {
    const a = ev.target instanceof Element ? ev.target.closest('.texto a.n') : null;
    if (!a) return;
    ev.preventDefault();
    const id = a.getAttribute('href').slice(1);
    history.replaceState(null, '', '#' + id);
    document.querySelectorAll('.t.on').forEach(t => t.classList.remove('on'));
    document.getElementById(id)?.classList.add('on');
    if (irPara && irPara(id)) return;
    const url = location.href;
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => {
      const antes = a.textContent;
      a.textContent = 'copiado';
      setTimeout(() => { a.textContent = antes; }, 1200);
    }).catch(() => {});
  });
  const marcar = () => {
    const id = location.hash.slice(1);
    document.querySelectorAll('.t.on').forEach(t => t.classList.remove('on'));
    if (id) document.getElementById(id)?.classList.add('on');
  };
  window.addEventListener('hashchange', marcar);
  marcar();

  // Ouvir: lê em voz alta só a tradução (título do capítulo e texto português), sem o original, as notas e os acréscimos,
  // com as vozes do próprio navegador; ao fim do capítulo, carrega o seguinte na mesma página e continua.
  const sintese = window.speechSynthesis;
  const bar = document.querySelector('header.top .bar');
  const trechosPt = raiz => [...raiz.querySelectorAll('.texto .t')].map(t => {
    const p = t.querySelector('.pt > p:not(.nt)');
    if (!p) return null;
    const c = p.cloneNode(true);
    c.querySelectorAll('sup').forEach(s => s.remove());
    const txt = c.textContent.replace(/\s+/g, ' ').trim();
    return txt ? { id: t.id, txt } : null;
  }).filter(Boolean);

  if (sintese && bar && trechosPt(document).length) {
    // Frases curtas: o Chrome corta falas longas e assim a pausa e os saltos ficam precisos.
    const dividir = txt => {
      const frases = txt.split(/(?<=[.!?;:])\s+/);
      const out = [];
      for (const f of frases) {
        if (f.length <= 260) { out.push(f); continue; }
        let atual = '';
        for (const pedaco of f.split(/(?<=,)\s+/)) {
          if (atual && (atual + ' ' + pedaco).length > 260) { out.push(atual); atual = pedaco; }
          else atual = atual ? atual + ' ' + pedaco : pedaco;
        }
        if (atual) out.push(atual);
      }
      return out;
    };
    let fila = [], ti = 0, pi = 0, tocando = false, geracao = 0, atual = null, voz = null;
    const carregar = () => {
      const main = document.querySelector('main');
      const h1 = main?.querySelector('h1')?.textContent.trim() || '';
      const cab = [main?.dataset.cap, h1].filter(Boolean).map(s => s.replace(/[.\s]+$/, '')).join('. ') + '.';
      fila = [{ id: null, partes: dividir(cab) }, ...trechosPt(document).map(t => ({ id: t.id, partes: dividir(t.txt) }))];
      ti = 0; pi = 0;
    };

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'ouvir ui';
    botao.textContent = 'Ouvir';
    botao.setAttribute('aria-pressed', 'false');
    bar.appendChild(botao);

    const painel = document.createElement('div');
    painel.id = 'ouvinte';
    painel.className = 'ui';
    painel.hidden = true;
    painel.setAttribute('role', 'region');
    painel.setAttribute('aria-label', 'Leitura em voz alta');
    painel.innerHTML = `<div class="wrap">
<button type="button" data-a="tocar">Pausar</button>
<button type="button" data-a="ant" aria-label="Trecho anterior">◀ §</button>
<button type="button" data-a="prox" aria-label="Próximo trecho">§ ▶</button>
<label>Voz <select data-a="voz"></select></label>
<label>Velocidade <select data-a="vel">${[0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2].map(v => `<option value="${v}">${String(v).replace('.', ',')}×</option>`).join('')}</select></label>
<label class="chk"><input type="checkbox" data-a="seguir" checked> Seguir para o próximo capítulo</label>
<span class="est" aria-live="polite"></span>
<button type="button" data-a="fechar" aria-label="Parar e fechar">Fechar</button>
</div>`;
    document.body.appendChild(painel);
    const $ = a => painel.querySelector(`[data-a="${a}"]`);
    const est = painel.querySelector('.est');
    const selVoz = $('voz'), selVel = $('vel'), seguir = $('seguir');
    selVel.value = ler('vel') || '1';
    if (ler('seguir') === '0') seguir.checked = false;
    selVel.addEventListener('change', () => { guardar('vel', selVel.value); reiniciar(); });
    seguir.addEventListener('change', () => guardar('seguir', seguir.checked ? '1' : '0'));

    // Vozes em português: primeiro as do Brasil, depois as naturais/online (Edge, Chrome), que soam melhor.
    const nota = v => (/^pt[-_]BR/i.test(v.lang) ? 4 : 0) + (/natural|neural/i.test(v.name) ? 2 : 0) + (/online|google/i.test(v.name) ? 1 : 0);
    const preencher = () => {
      const vs = sintese.getVoices().filter(v => /^pt/i.test(v.lang)).sort((a, b) => nota(b) - nota(a) || a.name.localeCompare(b.name));
      const salva = ler('voz');
      selVoz.replaceChildren(...(vs.length ? vs : [null]).map(v => {
        const o = document.createElement('option');
        o.value = v ? v.name : '';
        o.textContent = v ? `${v.name.replace(/^Microsoft\s+/, '').replace(/\s*-\s*Portuguese.*$/, '')} (${v.lang})` : 'Voz padrão do navegador';
        return o;
      }));
      if (vs.some(v => v.name === salva)) selVoz.value = salva;
      voz = vs.find(v => v.name === selVoz.value) || null;
    };
    preencher();
    sintese.addEventListener?.('voiceschanged', preencher);
    selVoz.addEventListener('change', () => { voz = sintese.getVoices().find(v => v.name === selVoz.value) || null; guardar('voz', selVoz.value); reiniciar(); });

    const realcar = id => {
      document.querySelectorAll('.t.lendo').forEach(t => t.classList.remove('lendo'));
      const el = id && document.getElementById(id);
      if (!el) return;
      el.classList.add('lendo');
      const r = el.getBoundingClientRect();
      if (r.top < 90 || r.bottom > innerHeight - 90) el.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    const situar = () => {
      const n = fila.length - 1;
      est.textContent = ti === 0 ? 'Título do capítulo' : `§ ${fila[ti]?.id?.slice(1) || ''} · ${ti} de ${n}`;
      $('tocar').textContent = tocando ? 'Pausar' : 'Continuar';
    };
    const dizer = () => {
      const g = ++geracao;
      if (!tocando) return;
      if (ti >= fila.length) return proximoCapitulo();
      const t = fila[ti];
      if (pi >= t.partes.length) { ti++; pi = 0; return dizer(); }
      realcar(t.id);
      situar();
      const u = new SpeechSynthesisUtterance(t.partes[pi]);
      u.lang = voz?.lang || 'pt-BR';
      if (voz) u.voice = voz;
      u.rate = +selVel.value || 1;
      u.onend = () => { if (g === geracao && tocando) { pi++; dizer(); } };
      u.onerror = e => {
        if (g !== geracao || e.error === 'interrupted' || e.error === 'canceled') return;
        pausar();
        est.textContent = e.error === 'not-allowed' ? 'O navegador bloqueou a voz: clique em Continuar.' : 'A voz falhou (' + e.error + ').';
      };
      atual = u; // guarda a referência: sem ela o Chrome às vezes descarta a fala e o onend nunca chega
      sintese.resume();
      sintese.speak(u);
    };
    // cancel() seguido de speak() imediato às vezes perde a fala nova no Chrome: dá um respiro.
    const recomecar = () => { geracao++; sintese.cancel(); if (tocando) setTimeout(dizer, 60); else situar(); };
    const reiniciar = () => { if (tocando) { pi = 0; recomecar(); } };
    const tocar = () => { tocando = true; painel.hidden = false; botao.setAttribute('aria-pressed', 'true'); doc.classList.add('com-ouvinte'); recomecar(); };
    // Pausar cancela e lembra a frase: o pause()/resume() nativo é instável no Chrome.
    const pausar = () => { tocando = false; geracao++; sintese.cancel(); situar(); };
    const fechar = () => {
      pausar();
      painel.hidden = true;
      botao.setAttribute('aria-pressed', 'false');
      doc.classList.remove('com-ouvinte');
      realcar(null);
    };
    const saltar = d => { ti = Math.max(0, Math.min(fila.length - 1, ti + d)); pi = 0; tocando ? recomecar() : (realcar(fila[ti].id), situar()); };
    irPara = id => {
      if (painel.hidden) return false;
      const i = fila.findIndex(t => t.id === id);
      if (i < 0) return false;
      ti = i; pi = 0;
      tocando ? recomecar() : (realcar(id), situar());
      return true;
    };

    // Fim do capítulo: busca o seguinte e troca o conteúdo da página, sem navegar
    // (uma página nova perderia a permissão de falar dada pelo clique).
    let trocou = false;
    const proximoCapitulo = async () => {
      const link = document.querySelector('.navcap a[rel=next]');
      if (!seguir.checked || !link) { pausar(); ti = fila.length - 1; est.textContent = link ? 'Fim do capítulo.' : 'Fim da obra.'; return; }
      const g = geracao;
      est.textContent = 'Carregando o próximo capítulo…';
      try {
        const url = new URL(link.getAttribute('href'), location.href);
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.status);
        const novo = new DOMParser().parseFromString(await resp.text(), 'text/html');
        const main = novo.querySelector('main');
        if (!main) throw new Error('página sem conteúdo');
        document.querySelector('main').replaceWith(document.adoptNode(main));
        document.title = novo.title;
        const tr = novo.querySelector('.trilha'), meu = document.querySelector('.trilha');
        if (tr && meu) meu.innerHTML = tr.innerHTML;
        history.pushState(null, '', url.pathname);
        trocou = true;
        scrollTo(0, 0);
        carregar();
        if (g === geracao && tocando) dizer(); else situar();
      } catch {
        pausar();
        est.textContent = 'Não foi possível carregar o próximo capítulo.';
      }
    };
    window.addEventListener('popstate', () => { if (trocou) location.reload(); });
    window.addEventListener('pagehide', () => sintese.cancel());

    botao.addEventListener('click', () => {
      if (!painel.hidden) return fechar();
      carregar();
      // Começa no trecho do link (#s4), se houver; senão, pelo título.
      const i = fila.findIndex(t => t.id && t.id === location.hash.slice(1));
      if (i > 0) ti = i;
      tocar();
    });
    $('tocar').addEventListener('click', () => (tocando ? pausar() : tocar()));
    $('ant').addEventListener('click', () => saltar(-1));
    $('prox').addEventListener('click', () => saltar(1));
    $('fechar').addEventListener('click', fechar);
  }
}

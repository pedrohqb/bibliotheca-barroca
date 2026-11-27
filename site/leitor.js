{
  const doc = document.documentElement;
  const texto = document.querySelector('.texto');
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

  // Balão do glossário
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
  document.querySelectorAll('.g').forEach(el => {
    el.addEventListener('mouseenter', () => mostrar(el));
    el.addEventListener('focus', () => mostrar(el));
    el.addEventListener('mouseleave', esconder);
    el.addEventListener('blur', esconder);
  });

  // Realce do par latim/português e link permanente de cada trecho
  if (texto) {
    texto.addEventListener('click', ev => {
      const a = ev.target.closest('a.n');
      if (!a) return;
      ev.preventDefault();
      const id = a.getAttribute('href').slice(1);
      history.replaceState(null, '', '#' + id);
      document.querySelectorAll('.t.on').forEach(t => t.classList.remove('on'));
      document.getElementById(id)?.classList.add('on');
      const url = location.href;
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => {
        const antes = a.textContent;
        a.textContent = 'copiado';
        setTimeout(() => { a.textContent = antes; }, 1200);
      }).catch(() => {});
    });
  }
  const marcar = () => {
    const id = location.hash.slice(1);
    document.querySelectorAll('.t.on').forEach(t => t.classList.remove('on'));
    if (id) document.getElementById(id)?.classList.add('on');
  };
  window.addEventListener('hashchange', marcar);
  marcar();
}

{
  const campo = document.getElementById('q');
  const lista = document.getElementById('res');
  const info = document.getElementById('info');
  let base = [];
  const sem = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  const trecho = (txt, termo) => {
    const n = sem(txt), i = n.indexOf(termo);
    const ini = Math.max(0, i - 90), fim = Math.min(txt.length, i + termo.length + 120);
    const frag = document.createDocumentFragment();
    frag.append((ini > 0 ? '… ' : '') + txt.slice(ini, i));
    const m = document.createElement('mark');
    m.textContent = txt.slice(i, i + termo.length);
    frag.append(m, txt.slice(i + termo.length, fim) + (fim < txt.length ? ' …' : ''));
    return frag;
  };

  const buscar = () => {
    const termo = sem(campo.value.trim());
    lista.replaceChildren();
    try { history.replaceState(null, '', termo ? '#' + encodeURIComponent(campo.value.trim()).replace(/%/g, '_') : location.pathname); } catch {}
    if (termo.length < 3) { info.textContent = 'Digite ao menos três letras; a busca vale para o latim e para as traduções.'; return; }
    const achados = base.filter(r => sem(r.txt).includes(termo));
    info.textContent = achados.length ? `${achados.length} trecho(s) encontrado(s).` : 'Nada encontrado.';
    for (const r of achados.slice(0, 200)) {
      const li = document.createElement('li');
      const onde = document.createElement('div');
      onde.className = 'onde';
      onde.textContent = `${r.obra} · ${r.cap} · § ${r.id.slice(1)} · ${r.lg === 'la' ? 'latim' : 'português'}`;
      const a = document.createElement('a');
      a.href = `${r.url}#${r.id}`;
      a.append(trecho(r.txt, termo));
      li.append(onde, a);
      lista.append(li);
    }
  };

  fetch('busca.json').then(r => r.json()).then(d => {
    base = d;
    const h = location.hash.slice(1);
    if (h) campo.value = decodeURIComponent(h.replace(/_/g, '%'));
    buscar();
  }).catch(() => { info.textContent = 'Não foi possível carregar o índice da busca.'; });
  campo.addEventListener('input', buscar);
}

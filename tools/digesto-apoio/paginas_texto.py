import json, re, sys, difflib
S = sys.argv[1]
d = json.load(open(f'{S}/digesta.json'))
t = open(f'{S}/web/ci_hocr_searchtext.txt').read(); idx = json.load(open(f'{S}/web/ci_hocr_pageindex.json'))
pn = {p['leafNum']: p['pageNumber'] for p in json.load(open(f'{S}/web/ci_page_numbers.json'))['pages']}
norm = lambda s: re.sub(r'[^A-Z]', '', s.upper().replace('V','U').replace('J','I'))
pages = [norm(t[a:b]) for a, b, *_ in idx]
raw = [t[a:b] for a, b, *_ in idx]
res = []; leaf = 0
def first_law_key(tit):
    for l in tit['leis']:
        for p in l['pars']:
            w = norm(p['t'])[:40]
            if len(w) > 25: return w
    return None
for b in d:
    for tit in b['titulos']:
        key = norm(tit['nome'])[:30]; lk = first_law_key(tit)
        found = None
        for L in range(leaf, min(leaf + 120, len(pages))):
            pg = pages[L]
            if lk and lk[:30] in pg: found = (L, 'lei'); break
        if not found:
            # aproximado: maior bloco comum com a primeira lei
            best = (0, None)
            for L in range(leaf, min(leaf + 60, len(pages))):
                sm = difflib.SequenceMatcher(None, lk or key, pages[L], autojunk=False)
                m = sm.find_longest_match(0, len(lk or key), 0, len(pages[L])).size
                if m > best[0]: best = (m, L)
            if best[1] is not None and best[0] >= 14: found = (best[1], f'aprox{best[0]}')
        if found: leaf = found[0]
        res.append({'num': tit['num'], 'leaf': found[0] if found else None, 'pagina': pn.get(found[0] + 1 if found else -1) if found else None, 'como': found[1] if found else 'nao'})
json.dump(res, open(f'{S}/paginas.json', 'w'), indent=0)
import collections; print(collections.Counter(r['como'][:4] for r in res))
for r in res[:30] + [r for r in res if r['como'] != 'lei'][:40]: print(r)

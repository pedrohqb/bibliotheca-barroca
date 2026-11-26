"""Localiza cada título do Digesto no OCR do Hulot (sidecar do ocrmypdf, páginas separadas por \\f),
pela rubrica latina e francesa do sumário (hulot-indice.json) e pela ordem.
Uso: indice_hulot_ocr.py <apoio> -> grava <apoio>/fr-indice.json {titulo: {tomo, pag_ocr}}"""
import json, re, sys, os, difflib
A = sys.argv[1]
idx = json.load(open(f'{A}/hulot-indice.json'))
norm = lambda s: re.sub(r'[^a-z]', '', s.lower().replace('j', 'i').replace('v', 'u'))
res = {}
tomos = {}
for t in range(1, 8):
    f = f'{A}/ocr/hulot-pdf/hulot-tomo{t}.txt'
    if os.path.exists(f):
        tomos[t] = [norm(p) for p in open(f, encoding='utf8', errors='replace').read().split('\f')]
def chave(k): return [int(x) for x in k.split('.')]
desloc = {}
for k in sorted(idx, key=chave):
    e = idx[k]; t = e['tomo']
    if t not in tomos: continue
    lat = norm(e['nome'].split('=')[0])[:22]
    fr = norm(e['nome'].split('=')[1] if '=' in e['nome'] else '')[:22]
    pages = tomos[t]
    if t in desloc:
        esp = e['pagina'] + desloc[t]; jan = range(max(0, esp - 6), min(len(pages), esp + 7))
    else:
        jan = range(0, len(pages))
    best = None
    for p in jan:
        if (lat and lat in pages[p]) or (fr and len(fr) > 12 and fr in pages[p]): best = p; break
    if best is None and t in desloc:
        sc = [(difflib.SequenceMatcher(None, lat, pages[p], autojunk=False).find_longest_match(0, len(lat), 0, len(pages[p])).size, p) for p in jan]
        best = max(sc)[1] if sc and max(sc)[0] >= 12 else e['pagina'] + desloc[t]
        est = True
    else:
        est = False
    if best is not None:
        if t not in desloc: desloc[t] = best - e['pagina']
        res[k] = {'tomo': t, 'pag_ocr': min(best, len(pages) - 1), 'estimado': est}
json.dump(res, open(f'{A}/fr-indice.json', 'w'), indent=0)
print(len(res), 'títulos localizados nos tomos', sorted(tomos))

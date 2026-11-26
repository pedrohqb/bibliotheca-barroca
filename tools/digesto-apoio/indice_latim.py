# Localiza cada título do Digesto num OCR bilíngue pelo latim da primeira lei (incipit).
import re, sys, json, bisect
F, saida, modo, inicio, *vols = sys.argv[1:]
inicio = int(inicio)
d = json.load(open(f'{F}/mommsen-krueger.json'))
norm = lambda s: re.sub(r'[^a-z]', '', s.lower().replace('j','i').replace('v','u'))
def rubrica(t):
    w = norm(t['nome']); return [w[:22]] if len(w) >= 12 else [w]
def incipits(t):
    if modo == 'rubrica': return rubrica(t)
    out = []
    for l in t['leis'][:6]:
        for p in l['pars'][:1]:
            w = norm(re.sub(r'\*[^*]*\*', '', p['t']))
            if len(w) >= 30: out.append(w[:30])
    return out
docs = []
for v in vols:
    raw = open(v, encoding='utf8', errors='replace').read()
    lines = raw.split('\n'); buf = []; pos = []; off = 0
    for i, l in enumerate(lines):
        n = norm(l); pos.append(off); buf.append(n); off += len(n)
    docs.append((v, ''.join(buf), pos))
res = {}; cur = (0, sum(len(x) for x in docs[0][1:2]) and docs[0][2][min(inicio, len(docs[0][2])-1)])
for b in d:
    for t in b['titulos']:
        found = None
        for di in range(cur[0], len(docs)):
            v, text, pos = docs[di]
            start = cur[1] if di == cur[0] else 0
            for inc in incipits(t):
                k = text.find(inc, start)
                if k >= 0 and (found is None or (di, k) < found[:2]): found = (di, k)
            if found: break
        if found:
            di, k = found; v, text, pos = docs[di]
            line = bisect.bisect_right(pos, k)
            res[t['num']] = {'vol': v.split('/')[-1], 'linha': line}
            cur = found
print(len(res), 'de', sum(len(b['titulos']) for b in d))
json.dump(res, open(saida, 'w'), indent=0)

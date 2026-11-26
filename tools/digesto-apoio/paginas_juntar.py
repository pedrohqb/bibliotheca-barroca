import json, sys
S = sys.argv[1]
H = {int(k): v for k, v in json.load(open(f'{S}/headers.json')).items()}
R = json.load(open(f'{S}/paginas.json'))
pn = {p['leafNum']: p['pageNumber'] for p in json.load(open(f'{S}/web/ci_page_numbers.json'))['pages']}
def hdr(bk, n, lo):
    for L in sorted(H):
        if L < lo - 1 or L > lo + 45: continue
        b, ts = H[L]
        if b == bk and (n in ts or (len(ts) > 1 and min(ts) <= n <= max(ts))): return L
    return None
out = []; stats = {}; lo = 110
for r in R:
    parts = r['num'].split('.'); bk = int(parts[0]); n = int(parts[1]) if len(parts) > 1 else 1
    h = hdr(bk, n, lo); x = r['leaf'] if r['como'] == 'lei' else None
    a = r['leaf'] if r['como'].startswith('aprox') else None
    if a is not None and not (lo - 1 <= a <= lo + 15): a = None
    if x is not None and not (lo - 1 <= x <= lo + 30): x = None
    if x is not None and (h is None or abs(x - h) <= 2): leaf, como = x, 'texto'
    elif h is not None: leaf, como = (h - 1 if a == h - 1 else h), 'cabecalho'
    elif a is not None: leaf, como = a, 'aprox'
    else: leaf, como = None, 'nao'
    if leaf is not None and leaf < lo - 1: leaf, como = None, 'nao'
    if leaf is not None: lo = leaf
    stats[como] = stats.get(como, 0) + 1
    out.append({'num': r['num'], 'leaf': leaf, 'como': como})
# interpolação e monotonicidade
for i, o in enumerate(out):
    if o['leaf'] is None:
        prev = next((out[j]['leaf'] for j in range(i - 1, -1, -1) if out[j]['leaf'] is not None), 116)
        o['leaf'] = prev; o['como'] = 'interp'
bad = [(out[i-1]['num'], out[i]['num'], out[i-1]['leaf'], out[i]['leaf']) for i in range(1, len(out)) if out[i]['leaf'] < out[i-1]['leaf']]
for o in out: o['pagina'] = pn.get(o['leaf'] + 1) or ''
json.dump(out, open(f'{S}/paginas2.json', 'w'), indent=0)
print(stats, 'nao-monot', bad[:20])
print([o for o in out if o['num'] in ('1.1','2.1','26.3','27.1','30','43.1','50.17')])

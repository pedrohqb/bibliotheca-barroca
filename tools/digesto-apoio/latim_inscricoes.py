import json, re, sys
d = json.load(open(sys.argv[1]))
ALLOW = {'Sentiam','Papiam','Mucium','Ferocem','Caniniam','Labeonis','Iuliani','Papiniani','Silaniano','Saturninus'}
JOIN = {'ad','legem','de','et','ex','a','in','sive','libro','libris','lege','leges','notis','apud'}
def split(t):
    t0 = re.sub(r'^[\.\s]*(pr\.\s*)?', '', t)
    m = re.match(r'^((?:\(\d+(?:,\d+)?\)\s*)?)([A-Z][a-z]+(?:\s+(?:et\s+)?[A-Z][a-z]+)?)\s+(libro|libris)\b', t0)
    if not m: return None
    toks = t0.split(' ')
    # avança até a palavra libro
    i = next(k for k,w in enumerate(toks) if w in ('libro','libris'))
    j = i + 1
    while j < len(toks):
        w = toks[j]; prev = toks[j-1]
        if w.endswith('.') and len(w) > 2 and w[:-1].isalpha() and w[:-1].islower() and j+1 < len(toks) and toks[j+1][:1].isupper():
            j += 1; break  # abreviatura no fim (provinc.)
        if w == '.' : j += 1; break
        if w[:1] in '"(':
            break
        if w in ALLOW: j += 1; continue
        if w[:1].isupper() and (prev.lower() not in JOIN or prev[:1].isupper()) and not re.match(r'^[IVX]+$|^Q\.$|^\d', w):
            break
        j += 1
    ins = ' '.join(toks[:j]).strip(' .'); rest = ' '.join(toks[j:]).strip()
    num = re.match(r'^\((\d+)\)\s*', ins)
    return ins, rest
n = 0
for b in d:
    for t in b['titulos']:
        for l in t['leis']:
            if l['inscr'] or not l['pars']: continue
            r = split(l['pars'][0]['t'])
            if not r: print('??', l['num'], l['pars'][0]['t'][:90]); continue
            l['inscr'], rest = r; n += 1
            if rest: l['pars'][0]['t'] = rest
            else:
                l['pars'].pop(0)
            print(l['num'], '|', l['inscr'], '|', rest[:50])
json.dump(d, open(sys.argv[1], 'w'), ensure_ascii=False, indent=0)
print('corrigidas', n)

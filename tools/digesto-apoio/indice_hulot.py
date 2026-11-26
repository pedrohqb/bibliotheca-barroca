import re, sys, json
S = sys.argv[1]
U = {'primus':1,'secundus':2,'tertius':3,'quartus':4,'quintus':5,'sextus':6,'septimus':7,'octavus':8,'nonus':9}
def ordnum(s):
    s = re.sub(r'\s+', ' ', s.lower().strip()).replace('nonusdecimus','nonus decimus').replace('vigesimus','vicesimus').replace('trigesimus','tricesimus')
    spec = {'decimus':10,'undecimus':11,'duodecimus':12}
    if s in spec: return spec[s]
    if s.endswith(' decimus') and s[:-8] in U: return 10 + U[s[:-8]]
    if s in U: return U[s]
    for k,v in {'vicesimus':20,'tricesimus':30,'quadragesimus':40,'quinquagesimus':50}.items():
        if s.startswith(k): return v + U.get(s[len(k):].strip(), 0)
res = {}
for t in range(1,8):
    txt = re.sub(r'\s+', ' ', open(f'{S}/hulot-toc{t}.txt').read())
    txt = txt.split('Index titulorum')[0]
    book = None
    for m in re.finditer(r'(?i)liber ([a-z ]+?) =|Titulus (primus|unicus|\d+)\.?(.*?)\.{3,}\s*\[?(\d+)\]?', txt):
        if m.group(1):
            n = ordnum(m.group(1)); book = n or book
        elif book:
            tn = 1 if m.group(2).lower() in ('primus','unicus') else int(m.group(2))
            res.setdefault(f'{book}.{tn}', {'tomo': t, 'pagina': int(m.group(4)), 'nome': m.group(3).strip()[:60]})
    for m in re.finditer(r'(?i)liber ((?:trice|trige)simus(?: primus| secundus)?) = [^.]*?\.{3,}\s*\[?(\d+)\]?', txt):
        n = ordnum(m.group(1)); res.setdefault(f'{n}.1', {'tomo': t, 'pagina': int(m.group(2)), 'nome': 'De legatis'})
json.dump(res, open(sys.argv[2],'w'), ensure_ascii=False, indent=0)
cat = json.load(open('/home/pedro/bibliotheca-barroca/obras/iustinianus-digesta/catalogo.json'))['capitulos']
want = [c['ref'][3:] if '.' in c['ref'][3:] else c['ref'][3:]+'.1' for c in cat]
print(len(res), 'faltam', [w for w in want if w not in res])
# monotonia
prev=None; bad=[]
for w in want:
    if w in res:
        k=(res[w]['tomo'],res[w]['pagina'])
        if prev and k<prev: bad.append(w)
        prev=k
print('fora de ordem', bad)
print({k:res.get(k) for k in ['1.1','1.2','1.3','2.1','50.17']})

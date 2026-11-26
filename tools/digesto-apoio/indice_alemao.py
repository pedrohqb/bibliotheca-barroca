import re, sys, json
F, saida, *vols = sys.argv[1:]
def roman(s):
    s = s.upper().replace('Y','V').replace('H','II').replace('T','I').replace('1','I').replace('L','L').replace('U','II').replace(',','').replace('.','')
    if not re.fullmatch(r'[LXVI]+', s): return None
    v = {'L':50,'X':10,'V':5,'I':1}; t = 0
    for k,c in enumerate(s): x=v[c]; t += -x if k+1<len(s) and v[s[k+1]]>x else x
    return t
def num(s):
    s = s.strip('.,').replace('t','1').replace('i','1').replace('l','1').replace('I','1').replace('o','0').replace('O','0')
    return int(s) if s.isdigit() else None
first = {}
for v in vols:
    for i, l in enumerate(open(v, encoding='utf8', errors='replace')):
        m = re.search(r'Pandect\.?\s+L(?:ib)?\.?\s*([^ ]+?)\.?,?\s+Tit\.?\s*([^ ]+)', l)
        if not m: continue
        b = roman(m.group(1)); t = num(m.group(2))
        if b and t and 1 <= b <= 50 and t < 40:
            first.setdefault(f'{b}.{t}', (v.split('/')[-1], i + 1))
cat = json.load(open('/home/pedro/bibliotheca-barroca/obras/iustinianus-digesta/catalogo.json'))['capitulos']
ks = [c['ref'][3:] if '.' in c['ref'][3:] else c['ref'][3:] + '.1' for c in cat]
res = {}
order = [(['dascorpusjurisci01otto.txt','dascorpusjurisci02otto.txt','dascorpusjurisci03otto.txt','dascorpusjurisci04otto.txt'].index(first[k][0]), first[k][1]) if k in first else None for k in ks]
# descarta leituras fora de ordem
last = (-1, -1)
for k, o in zip(ks, order):
    if o and o > last:
        res[k] = {'vol': first[k][0], 'linha': first[k][1]}; last = o
print(len(res), 'de', len(ks), 'faltam', [k for k in ks if k not in res][:50])
json.dump(res, open(saida, 'w'), indent=0)

"""Índice por cabeçalho corrente "LIB. X. TIT. Y." (Vignali): primeira linha em que cada título aparece.
Uso: indice_cabecalho.py <fontes> <saida.json> <vol1.txt> [vol2.txt ...]  (volumes na ordem dos livros)"""
import re, sys, json
F, saida, *vols = sys.argv[1:]
def roman(s):
    s = s.upper().replace('Χ', 'X').replace('Ι', 'I').replace('1', 'I').replace('L', 'L')
    if not re.fullmatch(r'[LXVI]+', s): return None
    v = {'L': 50, 'X': 10, 'V': 5, 'I': 1}; t = 0
    for k, c in enumerate(s): x = v[c]; t += -x if k + 1 < len(s) and v[s[k + 1]] > x else x
    return t
first = {}
for vi, v in enumerate(vols):
    for i, l in enumerate(open(v, encoding='utf8', errors='replace')):
        for m in re.finditer(r'LIB\s*\.?\s*([XVIL1Χ]+)\s*\.?\s*-?\s*TIT\s*\.?\s*([XVILΧΙ]+)', l):
            b, t = roman(m.group(1)), roman(m.group(2))
            if b and t and 1 <= b <= 50 and t <= 40:
                first.setdefault(f'{b}.{t}', (vi, i + 1, v.split('/')[-1]))
cat = json.load(open('/home/pedro/bibliotheca-barroca/obras/iustinianus-digesta/catalogo.json'))['capitulos']
ks = [c['ref'][3:] if '.' in c['ref'][3:] else c['ref'][3:] + '.1' for c in cat]
res = {}; last = (-1, -1)
for k in ks:
    if k in first and first[k][:2] > last:
        res[k.replace('.1', '') if k.split('.')[0] in ('30', '31', '32') else k] = {'vol': first[k][2], 'linha': max(1, first[k][1] - 60)}; last = first[k][:2]
print(len(res), 'de', len(ks))
json.dump(res, open(saida, 'w'), indent=0)

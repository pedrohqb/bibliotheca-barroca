# Converte os livros do Digesto (Lassard, Mommsen-Krueger) em JSON: titulos -> leis -> paragrafos
import re, json, sys, html, glob, os
W = sys.argv[1]
out = []
for i in range(1, 51):
    raw = open(f'{W}/d-{i:02d}.htm', encoding='latin1').read()
    raw = re.sub(r'\s+', ' ', raw)
    # quebra em <p> e anchors
    paras = re.findall(r'<p[^>]*>(.*?)</p>', raw, flags=re.I)
    titulos = []; tit = None; lei = None
    for p in paras:
        names = re.findall(r'<a name="?([0-9][^">]*)"?', p, flags=re.I)
        txt = html.unescape(re.sub(r'<[^>]+>', ' ', p)); txt = re.sub(r'\s+', ' ', txt).strip()
        italic = re.search(r'<(i|em)>', p, re.I) is not None
        legata = i in (30, 31, 32)
        if legata and tit is None:
            tit = {'num': str(i), 'nome': 'De legatis et fideicommissis.', 'leis': []}; titulos.append(tit)
        m0 = [] if legata else [n for n in names if re.fullmatch(r'\d+\.\d+', n)]
        mt = re.match(r'^(\d+\.\d+)\.0\.', txt)
        if not m0 and mt and not legata: m0 = [mt.group(1)]
        if m0:
            num = m0[0]; name = re.sub(r'^\d+\.\d+\.0\.\s*', '', txt)
            tit = {'num': num, 'nome': name.strip(), 'leis': []}; titulos.append(tit); lei = None; continue
        ml = [n for n in names if re.fullmatch(r'\d+\.\d+' if legata else r'\d+\.\d+\.\d+', n)]
        if ml:
            if tit is None: print("SEM TITULO", i, ml[0]); continue
            lei = {'num': ml[0], 'inscr': '', 'pars': []}; tit['leis'].append(lei)
            rest = re.sub(r'^\s*' + re.escape(ml[0]) + r'\.?', '', txt).strip()
            if rest: lei['pars'].append({'n': None, 't': rest})
            continue
        if not txt or tit is None: continue
        if lei is None:
            continue
        if italic and not lei['inscr'] and not lei['pars'] and re.match(r'^[A-Z][a-z]+', txt) and len(txt) < 200 and re.search(r'libro|ad |singulari|responsorum|quaestionum|digestorum|libri|regularum|institutionum', txt, re.I):
            lei['inscr'] = txt.rstrip(' .'); continue
        mp = [n for n in names if re.fullmatch((r'\d+\.\d+' if legata else r'\d+\.\d+\.\d+') + r'\.(pr\.|\d+)', n)]
        if mp:
            pn = mp[0].split('.')[2 if legata else 3]; pn = 'pr' if pn == 'pr' else pn
            t = re.sub(r'^(pr\.|\d+\.)\s*', '', txt)
            lei['pars'].append({'n': pn, 't': t})
        else:
            if lei['pars']: lei['pars'][-1]['t'] += ' ' + txt
            elif not lei['inscr'] and italic: lei['inscr'] = txt
            else: lei['pars'].append({'n': None, 't': txt})
    out.append({'livro': i, 'titulos': titulos})
json.dump(out, open(sys.argv[2], 'w'), ensure_ascii=False, indent=0)
nt = sum(len(b['titulos']) for b in out); nl = sum(len(t['leis']) for b in out for t in b['titulos'])
np_ = sum(len(l['pars']) for b in out for t in b['titulos'] for l in t['leis'])
words = sum(len(p['t'].split()) for b in out for t in b['titulos'] for l in t['leis'] for p in l['pars'])
print('titulos', nt, 'leis', nl, 'pars', np_, 'palavras', words)
print('sem inscr', sum(1 for b in out for t in b['titulos'] for l in t['leis'] if not l['inscr']))
print('vazias', [l['num'] for b in out for t in b['titulos'] for l in t['leis'] if not l['pars']][:20])

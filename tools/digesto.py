#!/usr/bin/env python3
"""Digesto de Justiniano: latim de base e fontes de apoio de cada título.

O latim é o da edição de Mommsen e Krueger (Corpus iuris civilis, vol. I), na transcrição digital de
Yves Lassard e Alexandr Koptev (The Roman Law Library, Grenoble), convertida em JSON estruturado
(livro -> título -> lei -> parágrafo) e guardada fora do repositório, em
~/bibliotheca-fontes/iustinianus-digesta/mommsen-krueger.json.

Uso:
  python3 tools/digesto.py latim <id> [--forcar]   grava obras/iustinianus-digesta/la/<id>.md (ex.: d01-01)
  python3 tools/digesto.py apoio <id>              mostra o inglês de Scott do título e onde consultar as demais traduções
  python3 tools/digesto.py situacao                títulos produzidos, palavras feitas e por fazer
"""
import json, os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OBRA = os.path.join(RAIZ, 'obras', 'iustinianus-digesta')
FONTES = os.path.expanduser('~/bibliotheca-fontes/iustinianus-digesta')
APOIO = '/mnt/rbsa/dados/Conhecimento jurídico/Digesta'


def catalogo():
    return json.load(open(os.path.join(OBRA, 'catalogo.json'), encoding='utf8'))


def entrada(cid):
    cat = catalogo()
    for i, c in enumerate(cat['capitulos']):
        if c['id'] == cid:
            return i + 1, c
    sys.exit(f'{cid}: não está no catálogo')


def titulo_latim(c):
    num = c['ref'].replace('D. ', '')
    for b in json.load(open(os.path.join(FONTES, 'mommsen-krueger.json'), encoding='utf8')):
        for t in b['titulos']:
            if t['num'] == num:
                return t
    sys.exit(f'{num}: não está no latim de base')


def ref_trecho(lei, n):
    # 1.1.1 + pr -> 1.1.1.pr ; lei sem parágrafos numerados -> 1.1.2
    return lei if n is None else f'{lei}.{n}'


def latim(cid, forcar=False):
    ordem, c = entrada(cid)
    t = titulo_latim(c)
    arq = os.path.join(OBRA, 'la', f'{cid}.md')
    if os.path.exists(arq) and not forcar:
        sys.exit(f'{arq} já existe (use --forcar para regravar)')
    cab = [
        '---', f'id: {cid}', f'ordem: {ordem}', f'livro: {c["livro"]}', f'capitulo: {c["capitulo"]}',
        f'titulo: {c["titulo"]}', f'referencia: {c["ref"]}', f'colunas: {c["colunas"]}', 'ano: 1889',
        f'scan: {c["scan"]}', 'transcricao: provisoria', '---', '',
    ]
    corpo, s = [], 0
    for lei in t['leis']:
        pars = lei['pars'] or [{'n': None, 't': ''}]
        for k, p in enumerate(pars):
            s += 1
            if k == 0:
                corpo.append('@p')
            texto = p['t'].strip()
            if k == 0 and lei['inscr']:
                texto = f'*{lei["inscr"]}.* {texto}'.strip()
            corpo += [f'@s{s} {ref_trecho(lei["num"], p["n"])}', texto, '']
    os.makedirs(os.path.dirname(arq), exist_ok=True)
    open(arq, 'w', encoding='utf8').write('\n'.join(cab + corpo))
    print(f'{arq}: {len(t["leis"])} leis, {s} trechos')


ROM = [(50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')]


def romano(n):
    r = ''
    for v, sg in ROM:
        while n >= v:
            r += sg; n -= v
    return r


def apoio(cid):
    _, c = entrada(cid)
    num = c['ref'].replace('D. ', '').split('.')
    livro, tit = int(num[0]), (int(num[1]) if len(num) > 1 else 0)
    print(f'{c["ref"]} — {c["titulo"]}\n')
    print('Traduções de apoio (consulta; a tradução é feita do latim):')
    if livro <= 15:
        print(f'- inglês, Monro (Cambridge, 1904-1909), livros 1 a 15: {APOIO}/digestofjustinia0{1 if livro <= 7 else 2}monruoft.pdf')
    if livro <= 8:
        print(f'- francês, Hulot (Metz, 1803), tomo I, livros 1 a 8 (scan sem OCR; ler as páginas como imagem): {APOIO}/pdf0607001437.pdf')
    if livro in (1, 50):
        print(f'- português, TRF1 (2. ed., 2017), livros 1 e 50 (obra protegida: só consulta, nada se copia): {APOIO}/690706769-Corpus-Iuris-Civilis-Digesto-2ª-edicao-revista-e-ampliada-124312-9928173-pdf.pdf')
    print(f'- italiano, versão automática do Scott (2022), livros 1 a 50 (consulta secundária): {APOIO}/Digesta_in_traduzione_italiana.pdf')
    arq = os.path.join(FONTES, 'scott-txt', f'livro-{livro:02d}.txt')
    while not os.path.exists(arq) and livro > 1:  # livros que ficaram no arquivo do anterior
        livro -= 1; arq = os.path.join(FONTES, 'scott-txt', f'livro-{livro:02d}.txt')
    txt = open(arq, encoding='utf8').read()
    if tit:
        m = re.search(rf'(?m)^TITLE {romano(tit)}\.', txt)
        n = re.search(rf'(?m)^TITLE {romano(tit + 1)}\.', txt[m.end():]) if m else None
        trecho = txt[m.start(): m.end() + n.start()] if m and n else (txt[m.start():] if m else '')
    else:
        trecho = txt
    print(f'- inglês, Scott (Cincinnati, 1932), {os.path.basename(arq)}:\n')
    print(trecho.strip() or '(título não localizado no arquivo de Scott; procure pelo título em inglês)')


def situacao():
    cat = catalogo()['capitulos']
    feitos = {f[:-3] for f in os.listdir(os.path.join(OBRA, 'pt'))} if os.path.isdir(os.path.join(OBRA, 'pt')) else set()
    pf = sum(c['palavras'] for c in cat if c['id'] in feitos)
    pt = sum(c['palavras'] for c in cat)
    prox = next((c['id'] for c in cat if c['id'] not in feitos), None)
    print(f'{len(feitos)} de {len(cat)} títulos traduzidos; {pf} de {pt} palavras latinas ({100 * pf / pt:.1f}%). Próximo: {prox}')


if __name__ == '__main__':
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    if a[0] == 'latim' and len(a) >= 2:
        latim(a[1], '--forcar' in a)
    elif a[0] == 'apoio' and len(a) == 2:
        apoio(a[1])
    elif a[0] == 'situacao':
        situacao()
    else:
        sys.exit(__doc__)

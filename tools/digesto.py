#!/usr/bin/env python3
"""Digesto de Justiniano: latim de base e fontes de apoio de cada título.

O latim é o da edição de Mommsen e Krueger (Corpus iuris civilis, vol. I), na transcrição digital de
Yves Lassard e Alexandr Koptev (The Roman Law Library, Grenoble), convertida em JSON estruturado
(livro -> título -> lei -> parágrafo) e guardada fora do repositório, em
~/bibliotheca-fontes/iustinianus-digesta/mommsen-krueger.json.

Uso:
  python3 tools/digesto.py latim <id> [--forcar]   grava obras/iustinianus-digesta/la/<id>.md (ex.: d01-01)
  python3 tools/digesto.py apoio <id> [de|es|it|en]  mostra o título nas traduções de apoio (alemão, espanhol, italiano, Scott) e onde estão Hulot e Monro
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


APOIO_DIR = os.path.join(FONTES, 'apoio')
# Páginas do PDF = página impressa + deslocamento (conferido na imagem); tomos ainda não conferidos: None.
HULOT_DESLOC = {1: 19}
HULOT_MONTAGEM = {1: 'tomo I, 1803', 2: 'tomo II, 1804', 3: 'tomo III, 1804', 4: 'tomo IV, 1804', 5: 'tomo V, 1805', 6: 'tomo VI, 1805', 7: 'tomo VII, 1805'}


def _indice(nome):
    arq = os.path.join(APOIO_DIR, nome)
    return json.load(open(arq, encoding='utf8')) if os.path.exists(arq) else {}


def _faixa(indice, chave, ordem):
    """Linhas (arquivo, início, fim) do título no OCR: do título localizado (ou do anterior localizado) ao próximo localizado."""
    i = ordem.index(chave)
    ant = next((indice[k] for k in reversed(ordem[:i + 1]) if k in indice), None)
    prox = next((indice[k] for k in ordem[i + 1:] if k in indice and (not ant or indice[k]['vol'] == ant['vol'])), None)
    if not ant:
        return None
    ini = max(1, ant['linha'] - (40 if chave in indice else 0))
    fim = prox['linha'] + 5 if prox else ini + 4000
    return ant['vol'], ini, fim, chave in indice


def _trecho_ocr(rotulo, indice, chave, ordem, limite=60000):
    f = _faixa(indice, chave, ordem)
    if not f:
        print(f'- {rotulo}: título não localizado.')
        return
    vol, ini, fim, exato = f
    linhas = open(os.path.join(APOIO_DIR, 'txt', vol), encoding='utf8', errors='replace').read().split('\n')[ini - 1: fim]
    txt = re.sub(r'\n{3,}', '\n\n', '\n'.join(l.rstrip() for l in linhas))
    print(f'\n===== {rotulo} ({vol}, linhas {ini}-{fim}{"" if exato else "; faixa entre os títulos vizinhos localizados"}) =====\n')
    print(txt[:limite])


def apoio(cid, so=None):
    _, c = entrada(cid)
    num = c['ref'].replace('D. ', '').split('.')
    livro, tit = int(num[0]), (int(num[1]) if len(num) > 1 else 0)
    chave = f'{livro}.{tit}' if tit else f'{livro}'
    ordem = [x['ref'][3:] for x in catalogo()['capitulos']]
    print(f'{c["ref"]} — {c["titulo"]}\n')
    print('Traduções de apoio (a tradução é feita do latim; estas servem ao cotejo):')
    if livro <= 15:
        print(f'- inglês, Monro (Cambridge, 1904-1909): {APOIO}/digestofjustinia0{1 if livro <= 7 else 2}monruoft.pdf')
    h = _indice('hulot-indice.json').get(f'{livro}.{tit or 1}')
    if h:
        d = HULOT_DESLOC.get(h['tomo'])
        pdf = f'{APOIO_DIR}/pdf/hulot-tomo{h["tomo"]}.pdf'
        print(f'- francês, Hulot (Metz, 1803-1805), {HULOT_MONTAGEM[h["tomo"]]}, p. {h["pagina"]} impressa'
              + (f' = p. {h["pagina"] + d} do PDF' if d is not None else ' (deslocamento do PDF ainda não conferido neste tomo)') + f': {pdf}')
        o = os.path.join(APOIO_DIR, 'ocr', 'hulot', f'{cid}.txt')
        print(f'  OCR já feito: {o}' if os.path.exists(o) else f'  sem OCR: ler as páginas como imagem e gravar a transcrição em {o}')
    if livro in (1, 50):
        print(f'- português, TRF1 (2017), livros 1 e 50 (obra protegida: só consulta): {APOIO}/690706769-Corpus-Iuris-Civilis-Digesto-2ª-edicao-revista-e-ampliada-124312-9928173-pdf.pdf')
    if so in (None, 'de'):
        _trecho_ocr('alemão, Otto, Schilling e Sintenis (Leipzig, 1830-1832)', _indice('de-indice.json'), chave if tit else chave, ordem)
    if so in (None, 'es'):
        _trecho_ocr('espanhol, García del Corral (Barcelona, 1889-1897), bilíngue', _indice('es-indice.json'), chave, ordem)
    if so in (None, 'it'):
        it = _indice('it-indice.json')
        if chave in it:
            _trecho_ocr('italiano, Vignali (Nápoles, 1856-1862), bilíngue', it, chave, ordem)
        else:
            print('\n- italiano, Vignali: volume deste livro ainda não obtido.')
    if so in (None, 'en'):
        arq = os.path.join(FONTES, 'scott-txt', f'livro-{livro:02d}.txt')
        lv = livro
        while not os.path.exists(arq) and lv > 1:
            lv -= 1; arq = os.path.join(FONTES, 'scott-txt', f'livro-{lv:02d}.txt')
        txt = open(arq, encoding='utf8').read()
        if tit:
            m = re.search(rf'(?m)^TITLE {romano(tit)}\.', txt)
            n = re.search(rf'(?m)^TITLE {romano(tit + 1)}\.', txt[m.end():]) if m else None
            trecho = txt[m.start(): m.end() + n.start()] if m and n else (txt[m.start():] if m else '')
        else:
            trecho = txt
        print(f'\n===== inglês, Scott (Cincinnati, 1932), {os.path.basename(arq)} =====\n')
        print(trecho.strip() or '(título não localizado no arquivo de Scott)')


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
    elif a[0] == 'apoio' and len(a) in (2, 3):
        apoio(a[1], a[2] if len(a) == 3 else None)
    elif a[0] == 'situacao':
        situacao()
    else:
        sys.exit(__doc__)

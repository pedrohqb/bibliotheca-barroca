#!/usr/bin/env python3
"""Extrai as páginas de um PDF de scan e recorta as colunas, ampliadas, para a leitura da transcrição.

Uso:
  python3 tools/paginas.py <arquivo.pdf> <pasta-de-saída> [--paginas 2-3] [--fator 3]

Para cada página: p-NNN.jpg (imagem original do scan) e, dentro dela, cada coluna partida
em metade de cima e metade de baixo, com sobreposição, ampliada (p-NNN-c1a.png, -c1b, -c2a, -c2b).
A divisão entre as colunas é achada pela faixa mais clara perto do meio da mancha de texto.
Precisa de poppler-utils (pdfimages, pdftoppm) e de Pillow (python3-pil).
"""
import argparse
import subprocess
import sys
import tempfile
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit('falta o Pillow: sudo apt install python3-pil')


def paginas_do_pdf(pdf, ini, fim, destino):
    """Extrai as imagens das páginas pedidas; sem imagem embutida, rasteriza a 200 dpi."""
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['pdfimages', '-f', str(ini), '-l', str(fim), '-p', '-j', str(pdf), f'{tmp}/x'], check=True)
        achadas = {}
        for f in sorted(Path(tmp).iterdir()):
            pag = int(f.name.split('-')[1])
            im = Image.open(f)
            if im.width * im.height > achadas.get(pag, (0, None))[0]:
                achadas[pag] = (im.width * im.height, f)
        saida = []
        for pag in range(ini, fim + 1):
            alvo = destino / f'p-{pag:03d}.jpg'
            if pag in achadas and achadas[pag][0] > 600_000:
                Image.open(achadas[pag][1]).convert('RGB').save(alvo, quality=92)
            else:
                subprocess.run(['pdftoppm', '-f', str(pag), '-l', str(pag), '-r', '200', '-jpeg', '-singlefile', str(pdf), str(alvo.with_suffix(''))], check=True)
            saida.append(alvo)
        return saida


def perfil_colunas(im):
    """Quantos pixels de tinta (escuros) há em cada coluna de pixels; o papel amarelado não conta."""
    g = ImageOps.grayscale(im)
    w, h = g.size
    px = g.load()
    passo = max(1, h // 400)
    return [sum(1 for y in range(int(h * .12), int(h * .9), passo) if px[x, y] < 110) for x in range(w)]


def suavizar(v, r=4):
    acc, out = 0, []
    pref = [0]
    for x in v:
        acc += x; pref.append(acc)
    n = len(v)
    return [(pref[min(n, i + r + 1)] - pref[max(0, i - r)]) / (min(n, i + r + 1) - max(0, i - r)) for i in range(n)]


def achar_colunas(soma):
    """Calha entre as colunas: vale estreito de pouca tinta com texto dos dois lados.
    Bordas: primeira faixa larga sem tinta, a partir da calha. A pilha de folhas da lombada,
    escura, fica de fora porque há margem em branco entre ela e o texto."""
    w = len(soma)
    sm = suavizar(soma)
    centro = sorted(sm[w // 4: 3 * w // 4])
    t = centro[int(len(centro) * .9)] * .35
    media = lambda a, b: sum(sm[max(0, a):min(w, b)]) / max(1, min(w, b) - max(0, a))
    cand = [x for x in range(w // 4, 3 * w // 4) if media(x - 50, x - 12) > t and media(x + 12, x + 50) > t]
    calha = min(cand, key=lambda x: sm[x]) if cand else w // 2
    def borda(x, passo):
        corrida = 0
        while 0 < x < w - 1:
            corrida = corrida + 1 if sm[x] < t * .4 else 0
            if corrida >= 25:
                return x - passo * 25
            x += passo
        return x
    return borda(calha - 15, -1), calha, borda(calha + 15, 1)


def recortar(arq, fator, destino):
    im = Image.open(arq)
    w, h = im.size
    x0, calha, x1 = achar_colunas(perfil_colunas(im))
    folga, extra = int(w * 0.015), int(w * 0.12)   # extra: alcança as notas marginais
    colunas = [(max(0, x0 - extra), min(w, calha + folga)), (max(0, calha - folga), min(w, x1 + extra))]
    feitos = []
    for i, (a, b) in enumerate(colunas, 1):
        for parte, (ya, yb) in zip('ab', [(0, int(h * .55)), (int(h * .45), h)]):
            c = im.crop((a, ya, b, yb))
            c = c.resize((c.width * fator, c.height * fator), Image.LANCZOS)
            nome = destino / f'{arq.stem}-c{i}{parte}.png'
            c.save(nome)
            feitos.append(nome)
    return feitos


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('pdf', type=Path)
    ap.add_argument('saida', type=Path)
    ap.add_argument('--paginas', help='intervalo, ex.: 2-3 (padrão: todas)')
    ap.add_argument('--fator', type=int, default=3, help='ampliação dos recortes (padrão 3)')
    a = ap.parse_args()
    info = subprocess.run(['pdfinfo', str(a.pdf)], capture_output=True, text=True, check=True).stdout
    total = int(next(l.split()[-1] for l in info.splitlines() if l.startswith('Pages:')))
    ini, fim = (map(int, a.paginas.split('-')) if a.paginas and '-' in a.paginas else ((int(a.paginas),) * 2 if a.paginas else (1, total)))
    a.saida.mkdir(parents=True, exist_ok=True)
    for p in paginas_do_pdf(a.pdf, ini, fim, a.saida):
        rec = recortar(p, a.fator, a.saida)
        print(p.name, '→', ', '.join(r.name for r in rec))


if __name__ == '__main__':
    main()

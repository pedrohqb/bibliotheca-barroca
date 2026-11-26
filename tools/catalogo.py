#!/usr/bin/env python3
"""Lê o sumário (marcadores) de um PDF de volume inteiro e imprime a estrutura em JSON:
título, nível e páginas inicial e final de cada entrada. Serve para montar o catalogo.json da obra.

Uso:
  python3 tools/catalogo.py <volume.pdf> [--filtro "Liber Proœmialis"]

O PDF de volume das bibliotecas digitais (Paderborn, MDZ) costuma trazer a estrutura da obra
como marcadores. Sem marcadores, o comando avisa: aí o catálogo se monta pelo índice de capítulos
impresso no próprio livro.
Precisa de pypdf (Debian: sudo apt install python3-pypdf).
"""
import argparse
import json
import sys

try:
    from pypdf import PdfReader
except ImportError:
    sys.exit('falta o pypdf: sudo apt install python3-pypdf')


def achatar(reader, itens, nivel=0, saida=None):
    saida = [] if saida is None else saida
    for it in itens:
        if isinstance(it, list):
            achatar(reader, it, nivel + 1, saida)
            continue
        try:
            pag = reader.get_destination_page_number(it) + 1
        except Exception:
            pag = None
        saida.append({'titulo': str(it.title).strip(), 'nivel': nivel, 'pagina': pag})
    return saida


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('pdf')
    ap.add_argument('--filtro', help='só a parte da árvore a partir da entrada com este título até a próxima do mesmo nível')
    a = ap.parse_args()
    r = PdfReader(a.pdf)
    total = len(r.pages)
    itens = achatar(r, r.outline)
    if not itens:
        sys.exit('o PDF não tem marcadores; monte o catálogo pelo índice de capítulos impresso no livro')
    # página final: a anterior à próxima entrada de nível igual ou superior
    for i, it in enumerate(itens):
        prox = next((x['pagina'] for x in itens[i + 1:] if x['nivel'] <= it['nivel'] and x['pagina']), None)
        it['pagina_final'] = max(it['pagina'] or 1, (prox or total + 1) - 1) if it['pagina'] else None
    if a.filtro:
        alvo = a.filtro.casefold()
        ini = next((i for i, x in enumerate(itens) if alvo in x['titulo'].casefold()), None)
        if ini is None:
            sys.exit(f'nenhuma entrada com "{a.filtro}"')
        nv = itens[ini]['nivel']
        fim = next((j for j in range(ini + 1, len(itens)) if itens[j]['nivel'] <= nv), len(itens))
        itens = itens[ini:fim]
    json.dump({'paginas': total, 'entradas': itens}, sys.stdout, ensure_ascii=False, indent=1)
    print()


if __name__ == '__main__':
    main()

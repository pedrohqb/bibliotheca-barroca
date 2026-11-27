"""Acrescenta uma entrada nova ao glossário do Augustinus, com trava, sem tocar nas existentes.

Uso: python3 -I glossario_add.py '<json da entrada: {"lema":..., "formas":[...], "pt":[...], "nota":...}>'
Recusa se o lema já existir. Mantém o formato do arquivo (indentação 2, listas numa linha).
Para ler o glossário: python3 -I glossario_add.py --ler [lema ...]
"""
import fcntl, json, sys

G = '/home/pedro/bibliotheca-barroca/obras/jansenius-augustinus/glossario.json'
L = G + '.lock'


def dump(entries):
    out = []
    for e in entries:
        lines = []
        for k, v in e.items():
            lines.append(f'    {json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False)}')
        out.append('  {\n' + ',\n'.join(lines) + '\n  }')
    return '[\n' + ',\n'.join(out) + '\n]\n'


with open(L, 'w') as lk:
    fcntl.flock(lk, fcntl.LOCK_EX)
    entries = json.load(open(G, encoding='utf-8'))
    if sys.argv[1:2] == ['--ler']:
        want = set(sys.argv[2:])
        sel = [e for e in entries if not want or e['lema'] in want]
        print(dump(sel))
        sys.exit(0)
    new = json.loads(sys.argv[1])
    assert set(new) >= {'lema', 'formas', 'pt', 'nota'}, 'faltam campos'
    if any(e['lema'] == new['lema'] for e in entries):
        print(f'JA EXISTE: {new["lema"]} (não alterado)')
        sys.exit(2)
    entries.append(new)
    tmp = G + '.tmp'
    open(tmp, 'w', encoding='utf-8').write(dump(entries))
    json.load(open(tmp, encoding='utf-8'))
    import os
    os.replace(tmp, G)
    print(f'acrescentada: {new["lema"]}')

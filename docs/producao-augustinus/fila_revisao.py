"""Fila de revisão do Augustinus: capítulos commitados em rascunho sem revisão de agente.

Uso: python3 -I fila_revisao.py <excluir,separados,por,virgula> [--esperar SEG]
Imprime JSON {"prontos": [...], "pendentes_producao": n}.
Com --esperar, se não houver pronto, consulta de novo a cada 60 s até SEG segundos.
"""
import json, subprocess, sys, time

REPO = '/home/pedro/bibliotheca-barroca'
OBRA = 'obras/jansenius-augustinus'
NAO_REVISTO = 'Primeira versão com Claude, para revisão e debate posterior'


def show(path):
    r = subprocess.run(['git', '-C', REPO, 'show', f'HEAD:{path}'], capture_output=True, text=True)
    return r.stdout if r.returncode == 0 else None


def meta(txt):
    m = {}
    if not txt.startswith('---'):
        return m
    for line in txt.split('\n')[1:]:
        if line.startswith('---'):
            break
        if ':' in line:
            k, v = line.split(':', 1)
            m[k.strip()] = v.strip().strip('"\'')
    return m


def fila(excluir):
    cat = json.loads(show(f'{OBRA}/catalogo.json'))['capitulos']
    prontos, pend = [], 0
    for c in cat:
        txt = show(f'{OBRA}/pt/{c["id"]}.md')
        if txt is None:
            pend += 1
            continue
        m = meta(txt)
        if c['id'] not in excluir and m.get('estado') == 'rascunho' and m.get('processo') == NAO_REVISTO:
            prontos.append(c['id'])
    return prontos, pend


import os
RESERVAS = '/home/pedro/.cache/bib-reservas-revisao'
os.makedirs(RESERVAS, exist_ok=True)


def reservar(ids, limite):
    """Reserva atomicamente até `limite` ids (um arquivo por id); devolve os reservados."""
    feitos = []
    for i in ids:
        if len(feitos) >= limite:
            break
        try:
            os.close(os.open(os.path.join(RESERVAS, i), os.O_CREAT | os.O_EXCL | os.O_WRONLY))
            feitos.append(i)
        except FileExistsError:
            pass
    return feitos


excluir = set(x for x in (sys.argv[1] if len(sys.argv) > 1 else '').split(',') if x)
esperar = int(sys.argv[sys.argv.index('--esperar') + 1]) if '--esperar' in sys.argv else 0
limite = int(sys.argv[sys.argv.index('--limite') + 1]) if '--limite' in sys.argv else 1
fim = time.time() + esperar
while True:
    prontos, pend = fila(excluir | set(os.listdir(RESERVAS)))
    prontos = reservar(prontos, limite)
    if prontos or time.time() >= fim:
        break
    time.sleep(60)
print(json.dumps({'prontos': prontos, 'pendentes_producao': pend}))

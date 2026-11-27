"""Produz capítulos pendentes do Augustinus com modelos externos: Codex (ChatGPT) até o limite, depois Gemini.

Uso: python3 -I executor_externo.py [--paralelo 5] [--so ID,ID]
Estado e log em ~/.cache/bib-externo/. Cada capítulo: imagens → modelo grava la/pt → validação → commit
com caminhos explícitos e push. Capítulo que falha vai para falhas/ e não é commitado.
"""
import json, os, re, shutil, subprocess, sys, threading, time

REPO = '/home/pedro/bibliotheca-barroca'
OBRA = f'{REPO}/obras/jansenius-augustinus'
HERE = os.path.dirname(os.path.abspath(__file__))
BASE = os.path.expanduser('~/.cache/bib-externo')
os.makedirs(f'{BASE}/logs', exist_ok=True); os.makedirs(f'{BASE}/falhas', exist_ok=True)
PDF = {'I': '~/bibliotheca-fontes/jansenius-augustinus/tomo-1.pdf', 'II': '~/bibliotheca-fontes/jansenius-augustinus/tomo-2.pdf',
       'III': '~/bibliotheca-fontes/jansenius-augustinus/tomo-3.pdf'}
LIMITE = re.compile(r'usage limit|rate.?limit|quota|RESOURCE_EXHAUSTED|exceeded your|hit your|try again (at|in)|LIMITE DE USO|\b429\b', re.I)
MOTORES = ['codex', 'gemini']
NOME = {'codex': 'Codex (ChatGPT)', 'gemini': 'Gemini'}
NOTA = {'codex': 'e vão anexadas a esta mensagem.',
        'gemini': 'Abra cada uma com a sua ferramenta de ler arquivos (são imagens PNG) antes de transcrever.'}

git_lock = threading.Lock(); state_lock = threading.Lock()
estado = {'motor': 0, 'feitos': [], 'falhas': [], 'limites': []}


def log(msg):
    line = time.strftime('%H:%M:%S ') + msg
    print(line, flush=True)
    open(f'{BASE}/executor.log', 'a').write(line + '\n')


def sh(cmd, **kw):
    return subprocess.run(cmd, shell=isinstance(cmd, str), capture_output=True, text=True, **kw)


def catalogo():
    return {c['id']: c for c in json.load(open(f'{OBRA}/catalogo.json'))['capitulos']}


def pendentes():
    out = sh(['node', 'tools/situacao.mjs', 'jansenius-augustinus'], cwd=REPO).stdout.split('\n')
    return [l.split()[0] for l in out if len(l.split()) > 1 and l.split()[1] == 'pendente']


def exemplos(cid, cat):
    pref = cid.rsplit('-', 1)[0]
    feitos = [i for i in cat if i.startswith(pref + '-') and sh(['git', 'cat-file', '-e', f'HEAD:obras/jansenius-augustinus/pt/{i}.md'], cwd=REPO).returncode == 0]
    feitos = feitos[-2:] or ['t3-gc10-01', 't3-gc9-24']
    return ' e '.join(feitos)


def imagens(cid, c):
    a, b = (int(x) for x in c['paginas'].split('-'))
    d = f'/tmp/bib/{cid}'
    r = sh(['python3', 'tools/paginas.py', os.path.expanduser(PDF[c['tomo']]), d, '--paginas', f'{max(1, a - 1)}-{b + 1}'], cwd=REPO)
    if r.returncode:
        raise RuntimeError('paginas.py: ' + r.stderr[-300:])
    return sorted(f'{d}/{f}' for f in os.listdir(d) if re.search(r'-c\d[ab]\.png$', f)), f'{max(1, a - 1)}-{b + 1}'


def rodar(motor, cid, c, cat):
    imgs, pags = imagens(cid, c)
    t = open(f'{HERE}/prompt-capitulo-externo.md').read()
    t = t.replace('{ID}', cid).replace('{PAGINAS}', pags).replace('{EXEMPLOS}', exemplos(cid, cat))
    t = t.replace('{MOTOR}', NOME[motor]).replace('{IMGNOTE}', NOTA[motor])
    pf = f'{BASE}/logs/prompt-{cid}.md'; open(pf, 'w').write(t)
    lf = f'{BASE}/logs/{motor}-{cid}.log'
    with open(pf) as fin, open(lf, 'w') as fout:
        if motor == 'codex':
            cmd = ['codex', 'exec', '-C', REPO, '-s', 'workspace-write', '--skip-git-repo-check', '-i', ','.join(imgs),
                   '-o', f'{BASE}/logs/relatorio-{cid}.md', '-']
            p = subprocess.run(cmd, stdin=fin, stdout=fout, stderr=subprocess.STDOUT, cwd=REPO, timeout=7500)
        else:
            cmd = ['agy', '-p', t, '--model', 'gemini-4-argon-high', '--sandbox', '--dangerously-skip-permissions',
                   '--disable-slash-commands', '--print-timeout', '7200s']
            p = subprocess.run(cmd, stdout=fout, stderr=subprocess.STDOUT, cwd=REPO, timeout=7500)
    out = open(lf).read()
    return p.returncode, out


def arquivos(cid):
    return [f'obras/jansenius-augustinus/la/{cid}.md', f'obras/jansenius-augustinus/pt/{cid}.md']


def descartar(cid, motivo):
    for f in arquivos(cid):
        if os.path.exists(f'{REPO}/{f}') and sh(['git', 'ls-files', '--error-unmatch', f], cwd=REPO).returncode:
            shutil.move(f'{REPO}/{f}', f'{BASE}/falhas/{os.path.basename(os.path.dirname(f))}-{cid}.md')
    with state_lock:
        estado['falhas'].append([cid, motivo])
    log(f'FALHA {cid}: {motivo}')


def validar(cid, motor):
    for f in arquivos(cid):
        if not os.path.exists(f'{REPO}/{f}'):
            return f'faltou {f}'
    pt = open(f'{REPO}/{arquivos(cid)[1]}').read()
    if NOME[motor] not in pt.split('---')[1]:
        return 'cabeçalho pt sem o processo do motor'
    r = sh(['node', 'tools/validar.mjs'], cwd=REPO)
    erros = [l for l in (r.stdout + r.stderr).split('\n') if l.startswith('ERRO') and cid in l]
    return '; '.join(erros[:3]) if erros else ''


def publicar(cid, motor):
    fs = arquivos(cid)
    with git_lock:
        sh(['git', 'add'] + fs, cwd=REPO)
        r = sh(['git', 'commit', '-q', '-m', f'jansenius-augustinus {cid}: transcrição e tradução por {NOME[motor]} (rascunho, sem debate)',
                '-m', 'Produzido por modelo externo durante a espera do limite do Claude; prioridade na revisão independente.',
                '-m', 'Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>', '--'] + fs, cwd=REPO)
        if r.returncode:
            return 'commit: ' + (r.stdout + r.stderr)[-200:]
        for _ in range(5):
            if sh('git pull -q --rebase --autostash && git push -q', cwd=REPO).returncode == 0:
                return ''
            time.sleep(5)
        return 'push falhou (commit local feito)'


def worker(fila, cat):
    while True:
        with state_lock:
            if not fila or estado['motor'] >= len(MOTORES):
                return
            cid = fila.pop(0)
            motor = MOTORES[estado['motor']]
        log(f'início {cid} ({motor})')
        try:
            rc, out = rodar(motor, cid, cat[cid], cat)
        except Exception as e:
            descartar(cid, f'{motor}: {e}'); continue
        finally:
            shutil.rmtree(f'/tmp/bib/{cid}', ignore_errors=True)
        if LIMITE.search(out[-4000:]) and (rc != 0 or not os.path.exists(f'{REPO}/{arquivos(cid)[1]}')):
            with state_lock:
                if MOTORES[estado['motor']] == motor if estado['motor'] < len(MOTORES) else False:
                    estado['motor'] += 1
                    estado['limites'].append([motor, time.strftime('%H:%M'), out[-300:]])
                    log(f'LIMITE do {motor}; próximo motor: {MOTORES[estado["motor"]] if estado["motor"] < len(MOTORES) else "nenhum"}')
                fila.insert(0, cid)
            for f in arquivos(cid):
                if os.path.exists(f'{REPO}/{f}') and sh(['git', 'ls-files', '--error-unmatch', f], cwd=REPO).returncode:
                    os.remove(f'{REPO}/{f}')
            continue
        erro = validar(cid, motor) if rc == 0 else f'saída {rc}: {out[-200:]}'
        if erro:
            descartar(cid, f'{motor}: {erro}'); continue
        erro = publicar(cid, motor)
        if erro:
            log(f'AVISO {cid}: {erro}')
        with state_lock:
            estado['feitos'].append([cid, motor])
        log(f'publicado {cid} ({motor})')
        json.dump(estado, open(f'{BASE}/estado.json', 'w'), ensure_ascii=False, indent=1)


def main():
    par = int(sys.argv[sys.argv.index('--paralelo') + 1]) if '--paralelo' in sys.argv else 5
    cat = catalogo()
    fila = sys.argv[sys.argv.index('--so') + 1].split(',') if '--so' in sys.argv else pendentes()
    if '--excluir' in sys.argv:
        ex = set(sys.argv[sys.argv.index('--excluir') + 1].split(','))
        fila = [x for x in fila if x not in ex]
    if '--motor' in sys.argv:
        estado['motor'] = MOTORES.index(sys.argv[sys.argv.index('--motor') + 1])
    global BASE
    if '--base' in sys.argv:
        BASE = sys.argv[sys.argv.index('--base') + 1]
        os.makedirs(f'{BASE}/logs', exist_ok=True); os.makedirs(f'{BASE}/falhas', exist_ok=True)
    log(f'{len(fila)} capítulos na fila, {par} em paralelo')
    ts = [threading.Thread(target=worker, args=(fila, cat)) for _ in range(par)]
    for t in ts:
        t.start(); time.sleep(20)
    for t in ts:
        t.join()
    json.dump(estado, open(f'{BASE}/estado.json', 'w'), ensure_ascii=False, indent=1)
    log(f'fim: {len(estado["feitos"])} publicados, {len(estado["falhas"])} falhas, fila restante {len(fila)}, limites {[l[:2] for l in estado["limites"]]}')


if __name__ == '__main__':
    main()

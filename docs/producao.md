# Produção na VM do TrueNAS

A produção dos capítulos roda na VM de IA (Debian 13 + XFCE): o Claude Code transcreve e traduz, o Codex e o Gemini revisam pelo motor do debate, e cada capítulo debatido é publicado direto no site.

## 1. Pacotes (uma vez)

```bash
sudo apt install git gh nodejs npm python3 python3-pil python3-pypdf python3-docx poppler-utils python-is-python3
gh auth login                       # conta pedrohqb, HTTPS
git clone https://github.com/pedrohqb/bibliotheca-barroca ~/bibliotheca-barroca
cd ~/bibliotheca-barroca
git config user.name "Pedro Henrique Quitete Barreto"
git config user.email "<o e-mail da sua conta do GitHub>"
node tools/validar.mjs              # deve terminar com 0 erro(s)
```

## 2. Motor do debate 4.4.16-rbsa (uma vez)

O perfil `traducao` entrou na 4.4.15-rbsa; a 4.4.16-rbsa ensina os revisores a registrar como não conferidas as remissões que não se abrem na web, em vez de travar o debate em INCONCLUSIVO. As demais funções são as da 4.4.14-rbsa.

```bash
unzip debates-ia-linux-v4.4.16-rbsa.zip -d /tmp/debates && bash /tmp/debates/debates-ia/instalar.sh
python3 ~/.debates-ia/debates/preparar_rodada.py --perfis   # deve listar traducao
bash ~/.debates-ia/teste-traducao.sh                         # teste do perfil traducao com Codex e Gemini
```

- **Codex**: já instalado na VM. No `~/.codex/config.toml`, deixe a linha `model = "…"` (sem ela, `MODEL_REQUIRED`).
- **Gemini (agy)**: `curl -fsSL https://antigravity.google/cli/install.sh | bash`, depois `~/.local/bin/agy` para entrar com a conta Google e, dentro dele, `/config` → desligue **Enable Telemetry**. Use o Claude Code no terminal da sessão XFCE (xrdp): o agy guarda o login no GNOME Keyring, que só fica desbloqueado na sessão gráfica.
- **Plugin RBSA IA Legal System rbsa.21** no Claude Code da VM: a skill `traduzir-capitulo` conduz o debate pelo protocolo da `rbsa-debate`.
- Teste: `bash ~/.debates-ia/teste-rapido.sh codex,gemini`.

## 3. Chrome e scans

Os scans são baixados automaticamente pelo Claude in Chrome, no Chromium da VM: a skill abre o visualizador de Paderborn, baixa o PDF do volume, confere e o move para o lugar certo, e lê no índice do visualizador os links de cada capítulo. Para isso, uma vez:

1. No Chromium da VM (ou no Google Chrome), a extensão Claude in Chrome, com a mesma conta do Claude Code.
2. Nas configurações do navegador, em Downloads, desligue **Perguntar onde salvar cada arquivo** (a caixa de diálogo do sistema trava a automação).
3. Abra o Claude Code com a integração do Chrome ligada: `claude --chrome` (ou `/chrome` dentro da sessão, para conectar e conferir).

| Volume | Link | Caminho |
|---|---|---|
| Tomo I | https://nbn-resolving.org/urn:nbn:de:hbz:466:1-13650 | `~/bibliotheca-fontes/jansenius-augustinus/tomo-1.pdf` |
| Tomo II | https://nbn-resolving.org/urn:nbn:de:hbz:466:1-13673 | `~/bibliotheca-fontes/jansenius-augustinus/tomo-2.pdf` |
| Tomo III | https://nbn-resolving.org/urn:nbn:de:hbz:466:1-13704 | `~/bibliotheca-fontes/jansenius-augustinus/tomo-3.pdf` |

Os volumes das outras obras estão nos planos delas (`docs/plano-de-contractibus.md`, `docs/plano-covarrubias.md`). Cada volume é baixado quando a produção chega a ele. Se a automação não passar pela verificação do site, a skill para e avisa; aí basta baixar o PDF à mão pelo mesmo link e gravar no caminho da tabela.

## 4. Produzir

```bash
cd ~/bibliotheca-barroca && claude --chrome
```

E peça: "traduza o próximo capítulo do Augustinus" ou "traduza os próximos 3 capítulos". A skill `traduzir-capitulo` faz, para cada capítulo: imagens do scan → transcrição e conferência → glossário → tradução → validação → debate (Codex e Gemini, perfil `traducao`, até 3 rodadas de mérito e a final) → aplicação do resultado → resumo para a revisão → commit e push. O site se atualiza sozinho em cerca de um minuto.

Para acompanhar: `node tools/situacao.mjs jansenius-augustinus`.

## 5. Revisar

Cada capítulo publicado traz em `debate/jansenius-augustinus/<id>/`:

- `resumo.md`: o roteiro da revisão (objeções acolhidas e rejeitadas, pontos em aberto, propostas de mudança no glossário, leituras duvidosas da transcrição);
- `registro.md`: o debate inteiro, com as respostas dos revisores e as buscas que fizeram;
- `consumo.csv`: tokens de cada rodada.

Revisto o capítulo, mude no cabeçalho `estado: debatida` para `revisada` (e, se conferiu o latim contra o scan, `transcricao: provisoria` para `conferida`) e faça o push; o selo do site muda junto.

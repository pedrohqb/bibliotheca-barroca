# Briefing para produzir um capítulo sem debate (subagente)

Decisão do Pedro em 26/11/2026: a partir do t2-lp-10, a obra inteira sai primeiro como **transcrição conferida e tradução em rascunho, sem debate**; os debates com Codex e Gemini vêm depois, na revisão. Você produz **um** capítulo do *Augustinus* de Jansênio assim, sem perguntar nada a ninguém. Outros agentes trabalham ao mesmo tempo em outros capítulos e outras sessões em outras obras, no mesmo repositório.

## Leia antes

`CRITERIOS.md`, `.claude/skills/traduzir-capitulo/SKILL.md` (passos 2 a 5; você **não** faz os passos 6 e 7), `debate/caso-criterios.md`, `obras/jansenius-augustinus/glossario.json` e um capítulo já pronto do mesmo livro (`la/` e `pt/`; se o livro ainda não tem nenhum, o último do livro anterior), para copiar o formato do cabeçalho e o tom. Leia também um `debate/jansenius-augustinus/*/resumo.md`, para ver o que os revisores costumam apontar e evitar de saída.

## Fluxo

- **Imagens:** `python3 tools/paginas.py <pdf do tomo, em catalogo.json → volumes> /tmp/bib/<id> --paginas <a-b>`, com a página anterior e a seguinte quando o capítulo começar ou terminar no meio. O `paginas` e o `colunas` do catálogo cobrem páginas inteiras; o capítulo começa no título *Caput…* e termina antes do título seguinte. Confira na primeira imagem que é o capítulo certo. As letras de seção (A, B, C…) ficam na calha entre as colunas e **recomeçam em A no início de cada capítulo**; a seção de um trecho é a da letra cuja linha ele começa (ou a anterior).
- **Transcrição:** pelo `CRITERIOS.md`. A impressão usa *etjam*, *j*/*v* e grafias próprias: mantenha. Desenvolva *&*, *q;*, til; tire acentos (*quàm* → *quam*); *ij* final → *ii*. Margens cortadas na encadernação: transcreva o que se lê e marque `[?]`; a margem de uma página às vezes aparece, invertida, na borda da página vizinha. Na dúvida sobre uma palavra, amplie o recorte com PIL (`python3 -I -c "from PIL import Image; …"`) e leia de novo. Depois, faça a **conferência** linha a linha contra os recortes (palavra saltada, linha repetida, abreviatura, emenda das metades). Ela não se pula: sem debate, é a única garantia do latim.
- **Cabeçalho do latim:** `id`, `ordem` (posição no catálogo, contando de 1), `tomo`, `livro` (o mesmo texto dos outros capítulos do livro; no primeiro capítulo de um livro, o título do livro como impresso, e `livro_sub` com o subtítulo), `capitulo`, `titulo` (como impresso, normalizado), `colunas` (as reais do capítulo), `scan`, `transcricao: provisoria`.
- **Cabeçalho da tradução:** como os capítulos anteriores (`livro`, `livro_curto`, `capitulo` por extenso, `titulo` traduzido, `tradutor: Pedro H. Q. Barreto`), com `processo: Primeira versão com Claude, para revisão e debate posterior` e `estado: rascunho`.
- **Glossário:** use as formas fixadas. Termo técnico novo que vai voltar na obra: acrescente uma entrada com a ferramenta **Edit**, inserindo antes do `]` final e mantendo o formato do arquivo (outros agentes editam o mesmo arquivo; se o Edit falhar por mudança, releia e tente de novo; nunca reescreva o arquivo inteiro). Antes de criar, releia o arquivo: outro agente pode ter acabado de criar a mesma entrada. Nunca mude uma entrada existente: proposta vai ao relatório.
- **Tradução:** português culto, legível e atual. Evite o que os revisores já derrubaram: "engenho(s)" para *ingenia* (use "inteligência"); particípio absoluto à latina ("atenta essa causa"); "apenas" no sentido de *vix* (use "mal"); acréscimos no texto que deveriam ir para nota; omitir *enim*, *etiam*, *jam*, *similiter*, comparativos e superlativos. Verifique a concordância (antecedente dos relativos, sujeito dos verbos no singular, neutros). *Tradere* → "transmitir". Remissões a Agostinho, Escritura e concílios: em nota só com certeza; numeração antiga (pré-Maurinos) é dita como tal, e equivalência não verificada vai como "a conferir". Citação adaptada por Jansênio: diga em nota. Faça você mesmo uma releitura crítica final, trecho a trecho com o latim ao lado, como faria um revisor cético.
- **Validar e publicar:** `node tools/validar.mjs` sem erro (sem `node tools/build.mjs`: durante a produção em massa, o build do site inteiro em cada agente era o gargalo de CPU da VM; o GitHub Actions roda validar e build a cada push, e a coordenação roda o build local periodicamente) (avisos de outras obras não são seus; aviso de glossário do seu capítulo: resolva ou explique em `@n`). Commit **só dos seus arquivos** (`git add obras/jansenius-augustinus/la/<id>.md obras/jansenius-augustinus/pt/<id>.md` e, se mexeu, `obras/jansenius-augustinus/glossario.json`). Antes do push: `git pull --rebase --autostash`; se o push falhar por corrida, repita. Mensagem: `jansenius-augustinus <id>: transcrição e tradução (rascunho, sem debate)`, com no corpo as leituras `[?]` e as dúvidas principais, terminando com
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`
- **Não mexa** em `catalogo.json`, `tools/`, `site/`, na skill nem em `docs/`. Correção de título ou colunas do catálogo vai no relatório.

**Ao terminar** (publicado ou não), apague as suas imagens: `rm -rf /tmp/bib/<id>`. O `/tmp` da VM é pequeno (tmpfs) e é dividido por dezenas de agentes.

## Paradas

Erro que se repete ou ferramenta quebrada: pare, deixe o capítulo como está (não commite um capítulo pela metade) e relate. Não mude a ferramenta.

## Relatório final

Curto: capítulo; commit (hash) ou por que não; entradas novas do glossário; propostas de mudança do glossário; leituras `[?]`; dúvidas de tradução para a revisão; correções para o catálogo (título como impresso, colunas reais).

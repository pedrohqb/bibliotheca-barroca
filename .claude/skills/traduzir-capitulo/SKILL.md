---
name: traduzir-capitulo
description: Produz um capítulo da Bibliotheca Barroca de ponta a ponta — transcrição do scan, tradução, debate com Codex e Gemini (perfil traducao), aplicação do resultado e publicação. Use para "traduza o próximo capítulo", "traduza os próximos N capítulos do Augustinus", "/traduzir-capitulo t2-lp-03".
---

# Produzir um capítulo

Argumento: o id de um capítulo do catálogo (`t2-lp-03`), "próximo" (padrão) ou "próximos N". A obra padrão é `jansenius-augustinus`. Em lote, repita o fluxo inteiro capítulo a capítulo, com commit e push ao fim de cada um, e pare no primeiro `LIMITE DE USO`, erro que não se resolva ou dúvida que dependa do Pedro, dizendo onde parou.

Leia antes, uma vez por sessão: `CRITERIOS.md` (transcrição, registro e fidelidade) e `debate/caso-criterios.md`. Eles valem acima de qualquer hábito.

## Pré-checagem (uma vez por sessão)

- `git pull --ff-only`, depois `node tools/validar.mjs` sem erro.
- Motor: `python3 ~/.debates-ia/debates/preparar_rodada.py --versao` mostra 4.4.15-rbsa ou mais nova, e `--perfis` lista `traducao`. Se não, pare e peça a instalação do motor (`docs/producao.md`).
- O PDF do volume, no caminho de `catalogo.json` → `volumes`, existe. Se não, baixe-o pelo Chrome (seção Fontes, no fim).

## 1. Escolher o capítulo

`node tools/situacao.mjs jansenius-augustinus --proximo` dá o próximo pendente (`pendente`, `transcrito` ou `rascunho`). Retome do passo em que ele parou: `transcrito` vai ao passo 4, `rascunho` ao passo 6.

Se o catálogo acabou (saída 3) ou não traz `paginas` do capítulo, complete-o antes (seção Catálogo, no fim).

## 2. Imagens

`python3 tools/paginas.py <pdf-do-volume> /tmp/bib/<id> --paginas <a-b>` extrai as páginas do capítulo e recorta cada coluna em duas metades ampliadas (`p-NNN-c1a.png` …). Inclua a página anterior e a seguinte se o capítulo começar ou terminar no meio de uma página. Confira na primeira imagem que é o capítulo certo (título do *Caput* e número das colunas no alto da página).

## 3. Transcrição

Leia os recortes na ordem (coluna 1 de cima para baixo, depois a 2) com a ferramenta Read e transcreva em `obras/<obra>/la/<id>.md`, pelo `CRITERIOS.md`:

- cabeçalho: `id`, `ordem` (posição no catálogo), `tomo`, `livro`, `livro_sub` (só no primeiro capítulo do livro), `capitulo`, `titulo`, `colunas`, `scan` (do catálogo), `transcricao: provisoria`;
- comece no título do capítulo e pare antes do título do seguinte;
- trechos (`@sN <coluna><seção>`) de uma a três frases, 60 a 250 palavras, cortados em fim de frase; a coluna é a do início do trecho e a seção (A, B) a da letra na margem da impressão;
- `@p` antes do trecho que abre parágrafo; `@m` para cada nota marginal, como impressa, presa ao trecho a que se refere;
- itálico da impressão em `*…*`; leitura duvidosa com `[?]`.

Depois, **conferência**: releia cada recorte contra o texto transcrito, linha por linha, procurando palavra saltada, linha repetida, abreviatura mal desenvolvida e trecho cortado na emenda das metades. Corrija o que achar. A transcrição continua `provisoria`: `conferida` é só a que o Pedro conferir.

## 4. Glossário

Antes de traduzir, liste os termos técnicos do capítulo. Termo que já está em `glossario.json`: use a versão fixada. Termo novo que vai voltar na obra (graça, natureza, concupiscência, mérito, delectatio…): acrescente uma entrada (`lema`, `formas` flexionadas que aparecem, `pt`, `nota`). Nunca mude uma entrada existente por conta própria: se o capítulo mostrar que ela está errada, anote e leve ao Pedro no resumo final; mudança de glossário vale para a obra inteira e exige revisar os capítulos anteriores.

## 5. Tradução

Em `obras/<obra>/pt/<id>.md`, os mesmos trechos (`@sN`, sem coluna), pelo registro do `CRITERIOS.md`: **português culto, mas legível e atual**, sem arcaísmos, mesóclises nem inversões latinizantes, vocabulário corrente quando houver equivalente exato, e **cada termo técnico com uma forma só ao longo de todo o texto**, a do glossário. Fidelidade antes da elegância; explicação, dúvida e jogo de palavras perdido vão em `@n`.

Cabeçalho: `id`, `livro` e `livro_curto` (em português), `capitulo`, `titulo`, `tradutor: Pedro H. Q. Barreto`, `processo: Primeira versão com Claude, debatida com Codex e Gemini, para revisão`, `estado: rascunho`.

`node tools/validar.mjs`: nenhum erro; aviso de glossário, resolva (use a versão fixada) ou explique em `@n` por que o termo tem ali outro sentido.

## 6. Debate

Siga o protocolo da skill `rbsa-debate` do plugin RBSA IA Legal System (motor em `~/.debates-ia`), com estas definições, que prevalecem sobre os padrões dela:

- pasta nova: `~/Documentos/Debates IA/AAAA-MM-DD-bib-<id>/`; grave o caso e a minuta com `node tools/debate.mjs preparar <obra> <id> "<pasta>"` (não escreva `caso.md` nem `minuta-v1.md` à mão);
- R1: `python3 "$D/preparar_rodada.py" "<pasta>" 1 --revisores codex,gemini --dados publicos --regras traducao --max-rodadas 4`; confira na linha `POLITICA` `dados=publicos perfil=traducao`. O texto é público (domínio público): não há anonimização nem autorização a pedir. Sem Fable;
- nada das skills de peça (`rbsa-estilo-pecas`, `rbsa-teses-contencioso`, `rbsa-biblioteca`, `rbsa-docx-author`): a referência de estilo é o `CRITERIOS.md`;
- julgue cada objeção pelo latim, não pela autoridade do revisor. Alterações só em **Tradução.**, **Nota.** e, se o revisor apontar erro de transcrição e o recorte confirmar, em **Latim.** (diga na réplica que conferiu a imagem). Mudança de termo do glossário proposta por revisor não se aplica no debate: vai ao resumo para o Pedro;
- siga a regra de aceite (`decidir.py`) e exporte ao fim, com o consumo do Claude.

## 7. Aplicar e publicar

1. `node tools/debate.mjs aplicar <obra> <id> "<pasta>/entregas/<id-da-entrega>"`: devolve tradução, notas e correções de transcrição aos arquivos, marca `estado: debatida` e copia `registro.md` e `consumo.csv` para `debate/<obra>/<id>/`.
2. Divergência que ficou registrada ou objeção INCONCLUSIVA: vira `@n` no trecho ("Ponto em aberto no debate: …", com as duas posições em uma linha cada).
3. Grave `debate/<obra>/<id>/resumo.md`: objeções acolhidas e rejeitadas (uma linha cada, com o motivo), pontos em aberto, propostas de mudança de glossário e as leituras da transcrição marcadas com `[?]`. É o roteiro da revisão do Pedro.
4. `node tools/validar.mjs` e `node tools/build.mjs` sem erro.
5. Commit direto na `main` e push (decisão do Pedro: capítulos debatidos são publicados com o selo "debatida, aguardando revisão"): `git add -A obras debate && git commit -m "<obra> <id>: transcrição, tradução e debate" -m "<rodadas, estado final do decidir.py, pontos em aberto>" && git push`.

Ao fim (de cada capítulo, ou do lote), diga em poucas linhas: capítulos publicados, rodadas e estado final de cada um, pontos em aberto para o Pedro e o consumo.

## Fontes (download pelo Chrome)

As bibliotecas digitais (Paderborn, em especial) barram download por script com uma verificação de navegador; por isso os scans vêm pelo Claude in Chrome, no navegador da VM (Chromium), que passa por essa verificação como um usuário comum. Carregue as ferramentas do Chrome numa única busca (`tabs_context_mcp`, `tabs_create_mcp`, `navigate`, `read_page`, `find`, `computer`, `get_page_text`) e trabalhe numa aba nova.

**Volume inteiro** (quando falta o PDF de `catalogo.json` → `volumes`):

1. Pasta de downloads do navegador: `xdg-user-dir DOWNLOAD` (em português costuma ser `~/Transferências`). Anote os PDFs que já estão lá.
2. Abra o `scan` do volume (link `nbn-resolving.org`, que leva ao visualizador de Paderborn). Se aparecer a verificação "enable JavaScript and cookies", espere alguns segundos e recarregue uma vez.
3. Ache no visualizador o download do volume inteiro em PDF (ícone ou menu "Download"/"PDF", às vezes com opção "gesamtes Werk"/"complete work") e clique. Não clique em nada que abra caixa de diálogo do sistema; se o Chrome perguntar onde salvar, pare e peça ao Pedro para desligar "Perguntar onde salvar cada arquivo" nas configurações do navegador.
4. Espere o arquivo novo aparecer na pasta de downloads e parar de crescer (`ls -l` a cada 30 s; volume de algumas centenas de MB demora). Confira com `pdfinfo` (número de páginas compatível com o volume, título do Augustinus) e mova para o caminho de `volumes`.

**PDF de um capítulo**: o link `https://digital.ub.uni-paderborn.de/download/pdf/<id>` baixa direto quando aberto no Chrome; mesmo procedimento de espera e conferência. Use quando o volume não baixar ou para conferir um capítulo.

Três tentativas sem sucesso (verificação que não passa, botão que não aparece, download que não chega): pare e descreva ao Pedro o que a página mostra.

## Catálogo

`obras/<obra>/catalogo.json` lista os capítulos na ordem de produção, com `id`, `tomo`, `livro`, `capitulo`, `titulo`, `colunas`, `paginas` (páginas do PDF do volume) e `scan`. Para estendê-lo:

1. Estrutura e páginas: `python3 tools/catalogo.py <pdf-do-volume> --filtro "<livro>"` lista o livro pelos marcadores do PDF (capítulos e, nas bibliotecas alemãs, as entradas "Spalte n-m" com as páginas). Sem marcadores, monte pelo índice de capítulos impresso no volume (leia as páginas do índice com `tools/paginas.py`).
   Links de cada capítulo: no Chrome, abra a estrutura (índice) do volume no visualizador de Paderborn e leia com `get_page_text`/`read_page` os links de download de cada capítulo (`/download/pdf/<id>`); eles viram o `scan` do capítulo, que o site mostra.
2. Ids: `t<tomo em algarismo>-<sigla do livro>-<capítulo com dois dígitos>`; siglas usadas: `lp` (*Liber prooemialis*). Para livro novo, crie sigla curta e anote-a aqui.
3. `scan`: o PDF do capítulo na biblioteca (passo 1); se não achar, o `scan` do volume.
4. Confira duas ou três entradas abrindo a página indicada antes de gravar.

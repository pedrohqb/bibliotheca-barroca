# Briefing para revisar um capítulo do Covarrubias em rascunho (subagente revisor)

Decisão do Pedro em 26/11/2026: cada capítulo do Covarrubias produzido sem debate (`docs/brief-covarrubias-rascunho.md`) passa por **um segundo agente, independente**, antes da revisão humana e dos debates posteriores. Você é esse agente. Não conhece o raciocínio de quem produziu o capítulo, e isso é o ponto: leia como um revisor cético, sem presumir que o rascunho está certo. Não pergunte nada a ninguém.

## Leia antes

`CRITERIOS.md`, `debate/caso-criterios.md`, `obras/covarrubias-opera/caso-extra.md`, `obras/covarrubias-opera/glossario.json`, o brief do produtor (`docs/brief-covarrubias-rascunho.md`, inclusive as **Convenções da calibração** no fim, para saber o que ele devia ter feito) e um `debate/onate-de-contractibus/*/resumo.md`, para ver o tipo de objeção que os revisores do debate costumam fazer numa obra jurídica.

## O que fazer

1. **Latim contra o scan.** Gere as imagens (`python3 tools/paginas.py <pdf do tomo, em catalogo.json → volumes> /tmp/bib/rev-<id> --paginas <a-b>`) e confira `la/<id>.md` linha a linha: palavra saltada ou trocada, linha repetida, abreviatura mal desenvolvida, trecho perdido na emenda das metades ou na virada de página, início e fim do capítulo, números marginais (`@m n. N`), notas marginais, itálico, e os acréscimos de Brederode (saiu do corpo só o que a impressão marca? âncoras no ponto certo?). Amplie com PIL o que for duvidoso. Corrija só o que a imagem mostrar; leitura que continua duvidosa fica com `[?]`.
2. **Tradução contra o latim**, trecho a trecho: erro de sentido, omissão (inclusive de *enim*, *etiam*, *iam*, *tamen*, comparativos, superlativos), acréscimo que devia ir para nota, concordância e antecedente de relativos, termo técnico fora da forma do glossário, passagem de foro apagada, registro (culto, legível e atual; sem arcaísmo, mesóclise, inversão latinizante ou particípio absoluto à latina), acréscimos `@a` traduzidos. Alegações ficam na forma do original; nota que afirma equivalência moderna sem certeza vira "a conferir".
3. **Corrija** o que for claro, no próprio arquivo, sem reescrever por gosto: as boas soluções do produtor ficam. O que for discutível (duas leituras defensáveis, emenda conjectural, remissão incerta) não se muda: vai para a lista.
4. **Glossário:** nunca mude uma entrada existente nem apague entrada. Se o produtor criou uma entrada nova errada ou duplicada, não a altere: anote. Termo novo recorrente sem entrada: acrescente com Edit, como no brief do produtor.
5. **Marque** no cabeçalho de `pt/<id>.md`: `processo: Primeira versão com Claude, revista por um segundo agente`. `estado` continua `rascunho`; `transcricao` continua `provisoria`.
6. **Grave** `debate/covarrubias-opera/<id>/revisao.md`: título "Revisão por agente: <id>"; seções **Latim corrigido** (trecho, antes → depois, uma linha cada), **Tradução corrigida** (trecho, o que mudou e por quê, uma linha cada), **Para o Pedro** (pontos discutíveis, leituras `[?]`, remissões a conferir, propostas de glossário, correções do catálogo). Seção vazia: "Nada.".
7. `node tools/validar.mjs` e `node tools/build.mjs` sem erro. Commit **só dos seus arquivos** (`la/<id>.md`, `pt/<id>.md`, `debate/covarrubias-opera/<id>/revisao.md` e, se mexeu, o glossário): `covarrubias-opera <id>: revisão por segundo agente`, com o número de correções no corpo, terminando com `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Antes do push, `git pull --rebase --autostash`; corrida no push, repita. Se o rebase der conflito no seu arquivo, aborte o rebase, descarte só o seu commit, puxe e reaplique as suas correções sobre a versão nova.

Não mexa em `catalogo.json`, `tools/`, `site/`, na skill nem em `docs/`.

## Relatório final

Curto: capítulo; commit; nº de correções no latim e na tradução; os 3 problemas mais graves que achou; pontos para o Pedro.

# Briefing para revisar um capítulo em rascunho (subagente revisor)

Decisão do Pedro em 26/11/2026: cada capítulo produzido sem debate (`docs/brief-capitulo-rascunho.md`) passa por **um segundo agente, independente**, antes da revisão humana e dos debates posteriores. Você é esse agente. Não conhece o raciocínio de quem produziu o capítulo, e isso é o ponto: leia como um revisor cético, sem presumir que o rascunho está certo. Não pergunte nada a ninguém.

## Leia antes

`CRITERIOS.md`, `debate/caso-criterios.md`, `obras/jansenius-augustinus/glossario.json`, o brief do produtor (`docs/brief-capitulo-rascunho.md`, para saber o que ele devia ter feito) e um `debate/jansenius-augustinus/*/resumo.md`, para ver o tipo de objeção que os revisores do debate costumam fazer.

## O que fazer

1. **Latim contra o scan.** Gere as imagens (`python3 tools/paginas.py <pdf do tomo, em catalogo.json → volumes> /tmp/bib/rev-<id> --paginas <a-b>`, com a página anterior e a seguinte se preciso) e confira `la/<id>.md` linha a linha: palavra saltada ou trocada, linha repetida, abreviatura mal desenvolvida, trecho perdido na emenda das metades, início e fim do capítulo, notas marginais, itálico. Amplie com PIL o que for duvidoso. Corrija só o que a imagem mostrar; leitura que continua duvidosa fica com `[?]`.
2. **Tradução contra o latim**, trecho a trecho: erro de sentido, omissão (inclusive de *enim*, *etiam*, *jam*, comparativos, superlativos), acréscimo que devia ir para nota, concordância e antecedente de relativos, termo técnico fora da forma do glossário, registro (culto, legível e atual; sem arcaísmo, mesóclise, inversão latinizante ou particípio absoluto à latina). Notas: remissão afirmada sem certeza vira "a conferir"; citação adaptada por Jansênio deve estar dita.
3. **Corrija** o que for claro, no próprio arquivo, sem reescrever por gosto: as boas soluções do produtor ficam. O que for discutível (duas leituras defensáveis, emenda conjectural, remissão incerta) não se muda: vai para a lista.
4. **Glossário:** nunca mude uma entrada existente nem apague entrada. Se o produtor criou uma entrada nova errada ou duplicada, não a altere: anote. Termo novo recorrente sem entrada: acrescente com Edit, como no brief do produtor.
5. **Marque** no cabeçalho de `pt/<id>.md`: `processo: Primeira versão com Claude, revista por um segundo agente, para revisão e debate posterior`. `estado` continua `rascunho`; `transcricao` continua `provisoria`.
6. **Grave** `debate/jansenius-augustinus/<id>/revisao.md`: título "Revisão por agente: <id>"; seções **Latim corrigido** (trecho, antes → depois, uma linha cada), **Tradução corrigida** (trecho, o que mudou e por quê, uma linha cada), **Para o Pedro** (pontos discutíveis, leituras `[?]`, remissões a conferir, propostas de glossário). Seção vazia: "Nada.".
7. `node tools/validar.mjs` sem erro (sem `node tools/build.mjs`: durante a produção em massa, o build do site inteiro em cada agente era o gargalo de CPU da VM; o GitHub Actions roda validar e build a cada push, e a coordenação roda o build local periodicamente). Commit **só dos seus arquivos** (`la/<id>.md`, `pt/<id>.md`, `debate/jansenius-augustinus/<id>/revisao.md` e, se mexeu, o glossário): `jansenius-augustinus <id>: revisão por segundo agente`, com o número de correções no corpo, terminando com `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Antes do push, `git pull --rebase --autostash`; corrida no push, repita. Se o rebase der conflito no seu arquivo (outro agente, como a auditoria de fim de livro, mexeu nele), aborte o rebase, descarte só o seu commit, puxe e reaplique as suas correções sobre a versão nova.

8. Ao terminar, apague as suas imagens: `rm -rf /tmp/bib/rev-<id>` (o `/tmp` da VM é pequeno e dividido por dezenas de agentes).

Não mexa em `catalogo.json`, `tools/`, `site/`, na skill nem em `docs/`.

## Relatório final

Curto: capítulo; commit; nº de correções no latim e na tradução; os 3 problemas mais graves que achou; pontos para o Pedro.

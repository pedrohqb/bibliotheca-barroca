# Plano: o *De Contractibus* de Pedro de Oñate, obra inteira

**Mudança de 2026-11-26:** o Pedro descartou a tradução anterior dele ("não estava boa"). Não há importação: a obra é produzida como o *Augustinus*, pelo fluxo normal da skill `traduzir-capitulo` (transcrição do scan, tradução nova, debate com Codex e Gemini, publicação com `estado: debatida`). A seção "Capítulo importado" da skill não se aplica a esta obra.

Obra no repositório: `obras/onate-de-contractibus/`. Cada sessão retoma de onde a anterior parou, pelo repositório e por `docs/progresso-de-contractibus.md`.

## Edição de base

Roma, 1646–1654, exemplar da Biblioteca Nazionale Centrale di Roma digitalizado pelo Google Books. Os PDFs estão em `~/bibliotheca-fontes/onate-de-contractibus/`, e as ids estão em `catalogo.json` → `volumes`.

| Volume | Impressão | Tratados | Google Books |
|---|---|---|---|
| Tomo I, *De contractibus in genere* | Caballi, 1646 | I–VII | `xo-P4-cXqAYC` |
| Tomo II, *De contractibus lucrativis* | Caballi, 1647 | VIII–XX | `OLOLiC84maIC` |
| Tomo III, parte 1, *De contractibus onerosis* | Bernabò, 1654 | XXI–XXVII | `m2YktiXcvf0C` |
| Tomo III, parte 2 | Bernabò, 1654 | XXVIII–XXXVI | `LUJB2PCwEGYC` (a conferir) |

## Etapas

| Etapa | O que se faz | Termina quando |
|---|---|---|
| 0. Fontes | Scans dos quatro volumes baixados e conferidos | feito em 2026-11-26 |
| 1. Catálogo | Catálogo de cada tratado pelo índice impresso do tomo, antes de produzi-lo | o tratado seguinte está catalogado |
| 2. Calibração | Só o `t1-d000-s00` (Proêmio), de ponta a ponta, com a proposta inicial de glossário dos termos jurídicos centrais | o Pedro leu o resumo e aprovou o glossário inicial ("pode seguir") |
| 3. Produção | Tratado a tratado, na ordem da obra, em lotes, pelo fluxo completo da skill | ponto de controle ao fim de cada tratado |
| 4. Fechamento | Auditoria de uniformidade da obra inteira; propostas de glossário em aberto | relatório final ao Pedro |

### Unidade e ids

O capítulo da Bibliotheca é a **secção** (*sectio*) de cada disputa (a numeração das disputas é contínua na obra). Id: `t<tomo>-d<disputa, 3 dígitos>-s<secção, 2 dígitos>` (ex.: `t1-d002-s03`); o Proêmio é `t1-d000-s00`. Para o tomo III, `tomo: III` e o PDF da parte, conforme o tratado. O tratado é o "livro" do site (`livro: Tractatus I. De natura, et divisione contractus`).

Trechos: um a três parágrafos numerados de Oñate por trecho, dentro dos limites da skill. A referência ao scan é a página impressa (`"referencia": "pagina"`, por exemplo `@s4 12`). O `scan` de cada capítulo abre a página no Google Books (`&pg=PA<página>`).

## Ponto de controle (fim de cada tratado)

O mesmo do *Augustinus* (`docs/plano-augustinus.md`): auditoria de uniformidade dos termos no tratado e lista das propostas de mudança no glossário, com os trechos afetados. A sessão para até a resposta do Pedro.

## Prompt de cada sessão

Na VM, sessão XFCE: `cd ~/bibliotheca-barroca && claude --chrome`, e cole:

```text
Produção da Bibliotheca Barroca: De Contractibus de Pedro de Oñate, obra inteira, em etapas.

Leia, antes de qualquer outra coisa: CLAUDE.md, CRITERIOS.md, docs/plano-de-contractibus.md, docs/progresso-de-contractibus.md e a skill traduzir-capitulo. Eles mandam; este prompt só diz o que fazer nesta sessão. A obra é onate-de-contractibus; não mexa nos capítulos do Augustinus.

1. Situação. Faça a pré-checagem da skill. Pelo progresso e pelo plano, diga em três linhas: etapa atual, último capítulo publicado ou debatido e se há ponto de controle esperando resposta minha. Se houver, e eu não tiver respondido nesta mensagem, pare aqui e mostre o que está pendente.

2. Etapa. Siga a etapa atual do plano:
   - Catálogo: se o tratado seguinte não estiver em catalogo.json, catalogue-o pelo índice impresso do tomo (seção Catálogo da skill), confira três entradas no scan e grave.
   - Calibração: produza só o t1-d000-s00 e pare, com o resumo do debate e a proposta inicial de glossário, para eu ler.
   - Produção: produza o lote desta sessão, capítulo a capítulo, na ordem do catálogo, pelo fluxo completo da skill (transcrição com conferência, glossário, tradução, debate com Codex e Gemini, aplicação, resumo, commit e push). Lote: até 5 capítulos ou o que eu disser ao final deste prompt.
   - Fim de tratado: faça o ponto de controle do plano e pare.

3. Regras de toda a sessão:
   - Português culto, mas legível e atual; cada termo técnico com a forma do glossário em todo o texto. Não mude o glossário sem mim: a proposta vai ao resumo do capítulo.
   - Não pule a conferência da transcrição nem o debate para render mais. Capítulo com problema que você não resolve fica como está, registrado no progresso.
   - Pare no primeiro LIMITE DE USO de qualquer revisor (anote o horário de liberação), em erro que se repita ou em dúvida que dependa de mim.
   - Não mude a ferramenta (tools/, site/, skill) no meio da produção: se ela atrapalhar, descreva o problema no progresso.

4. Ao terminar, atualize docs/progresso-de-contractibus.md (etapa atual; o que foi feito nesta sessão; capítulos publicados, com rodadas e estado final do decidir.py; pontos em aberto para mim; propostas de glossário; consumo; próximo passo), faça commit e push, e me dê o mesmo resumo em poucas linhas.

Lote desta sessão: 5 capítulos.
```

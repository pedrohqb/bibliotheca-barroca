# Plano: o *Augustinus* inteiro

A obra tem três tomos, por volta de 2.300 colunas e algumas centenas de capítulos; a produção corre em muitas sessões. Cada sessão retoma de onde a anterior parou, pelo estado do repositório e por `docs/progresso-augustinus.md`, e produz um lote de capítulos com a skill `traduzir-capitulo`.

## Etapas

| Etapa | O que se faz | Termina quando |
|---|---|---|
| 0. Preparação | Pré-checagem da VM; catálogo do tomo II inteiro em `catalogo.json` (livros na ordem do volume, com colunas e páginas) | catálogo do tomo II completo e conferido por amostragem |
| 1. Calibração | Só o `t2-lp-02`, de ponta a ponta | o Pedro leu o resumo e o registro e disse "pode seguir" |
| 2. *Liber prooemialis* | Os demais capítulos do livro proemial | último capítulo do livro publicado + ponto de controle |
| 3. Tomo II | Os demais livros do tomo II, na ordem do volume | idem, a cada livro |
| 4. Tomo I | Catálogo do tomo I; depois os livros, na ordem | idem, a cada livro |
| 5. Tomo III | Catálogo do tomo III; depois os livros, na ordem | idem, a cada livro |
| 6. Fechamento | Auditoria de uniformidade da obra inteira; índice das propostas de glossário ainda abertas | relatório final ao Pedro |

## Ponto de controle (fim de cada livro)

1. Auditoria de uniformidade dos termos no livro: para cada lema do glossário, as traduções usadas em todos os capítulos do livro; divergência sem nota que a justifique é corrigida (é aplicação do glossário, não mudança dele) e vai no commit.
2. Lista das propostas de mudança de glossário acumuladas nos `resumo.md` do livro, com os trechos afetados.
3. A sessão para e entrega a auditoria e a lista ao Pedro. O livro seguinte só começa depois da resposta dele sobre o glossário.

## Prompt de cada sessão

Abra o Claude Code na pasta do repositório, na sessão XFCE da VM (`cd ~/bibliotheca-barroca && claude`), e cole:

```text
Produção da Bibliotheca Barroca: tradução do Augustinus de Jansênio, obra inteira, em etapas.

Leia, antes de qualquer outra coisa: CLAUDE.md, CRITERIOS.md, docs/plano-augustinus.md, docs/progresso-augustinus.md (se existir) e a skill traduzir-capitulo. Eles mandam; este prompt só diz o que fazer nesta sessão.

1. Situação. Faça a pré-checagem da skill. Rode `node tools/situacao.mjs jansenius-augustinus` e, pelo progresso e pelo plano, diga em três linhas: etapa atual, último capítulo publicado e se há ponto de controle esperando resposta minha. Se houver, e eu não tiver respondido nesta mensagem, pare aqui e mostre o que está pendente.

2. Etapa. Siga a etapa atual do plano:
   - Preparação: monte ou complete o catálogo do tomo indicado (seção Catálogo da skill), confira três entradas abrindo as páginas indicadas e grave. Depois passe à etapa seguinte na mesma sessão.
   - Calibração: produza só o t2-lp-02 e pare, com o resumo do debate, para eu ler.
   - Livro em produção: produza o lote desta sessão, capítulo a capítulo, na ordem do catálogo, cada um com o fluxo completo da skill (transcrição com conferência, glossário, tradução, debate com Codex e Gemini, aplicação, resumo, commit e push). Lote: até 5 capítulos ou o que eu disser ao final deste prompt.
   - Fim de livro: faça o ponto de controle do plano e pare.

3. Regras de toda a sessão:
   - Português culto, mas legível e atual; cada termo técnico com a forma do glossário em todo o texto. Não mude o glossário sem mim: proposta vai ao resumo do capítulo.
   - Não pule a conferência da transcrição nem o debate para render mais. Capítulo com problema que você não resolve fica como está (rascunho ou transcrito), registrado no progresso, e a sessão segue para o próximo só se o problema não afetar os seguintes.
   - Pare no primeiro LIMITE DE USO de qualquer revisor (anote o horário de liberação que o motor informar), em erro que se repita ou em dúvida que dependa de mim.
   - Nada de mudar a ferramenta (tools/, site/, skill) no meio da produção: se ela atrapalhar, descreva o problema no progresso e siga se der.

4. Ao terminar, atualize docs/progresso-augustinus.md (etapa atual; capítulos publicados nesta sessão, com rodadas e estado final do decidir.py; pontos em aberto para mim; propostas de glossário acumuladas no livro; consumo da sessão; próximo capítulo), faça commit e push, e me dê o mesmo resumo em poucas linhas.

Lote desta sessão: 5 capítulos.
```

Para mudar o tamanho do lote, troque a última linha ("Lote desta sessão: 3 capítulos", "só o t2-lp-07"). Para responder a um ponto de controle, escreva a resposta antes do prompt ("Glossário: aceito a proposta sobre *delectatio*; recuso a sobre *concupiscentia*") e cole o prompt em seguida.

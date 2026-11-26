# Plano: o *De Contractibus* de Pedro de Oñate, obra inteira

O Pedro já traduziu a obra inteira (três volumes) numa edição bilíngue latim–português em `.docx`, gerada com Node. Aqui ela não é traduzida de novo: é **importada** para a Bibliotheca, alinhada trecho a trecho, publicada como "tradução própria, aguardando debate" e, depois, revista em debate com Codex e Gemini, tratado a tratado, sob os mesmos critérios de registro e de uniformidade dos termos (`CRITERIOS.md`). Cada sessão retoma de onde a anterior parou, pelo repositório e por `docs/progresso-de-contractibus.md`.

Obra no repositório: `obras/onate-de-contractibus/`.

## Etapas

| Etapa | O que se faz | Termina quando |
|---|---|---|
| 0. Fontes | Achar os arquivos da edição do Pedro; identificar a edição latina de base e achar os scans dela (Chromium); baixar os volumes para `~/bibliotheca-fontes/onate-de-contractibus/` | arquivos localizados, edição de base identificada, volumes baixados |
| 1. Importação | Ler a estrutura dos `.docx`; escrever `tools/importar-onate.py`; criar `obra.json`, `catalogo.json` e os capítulos em `la/` e `pt/`, com `estado: importada` e `transcricao: importada`; publicar | obra inteira no site, `validar.mjs` sem erro, três capítulos conferidos contra o `.docx` |
| 2. Glossário | Levantar na tradução do Pedro como ele verteu cada termo técnico (*dominium*, *ius*, *iustitia commutativa*, *contractus*, *pactum*, *stipulatio*, *obligatio*, *promissio*, *pretium iustum*, *usura*, *lucrum cessans*, *damnum emergens*, *census*, *societas*…), com as variações e onde ocorrem; montar `glossario.json` com a forma dominante | o Pedro aprovou o glossário (ponto de controle) |
| 3. Debate | Tratado a tratado, na ordem da obra, em lotes: debate de cada capítulo importado (skill, "capítulo importado") | ponto de controle ao fim de cada tratado |
| 4. Fechamento | Auditoria de uniformidade da obra inteira; propostas de glossário em aberto | relatório final ao Pedro |

### Unidade e ids

O capítulo da Bibliotheca é a **secção** (*sectio*) de cada disputa; disputa sem secções é um capítulo. Id: `t<tomo>-d<disputa, 3 dígitos>-s<secção, 2 dígitos>` (ex.: `t1-d002-s03`; sem secção, `t1-d002-s00`). Trechos: um parágrafo numerado de Oñate por trecho; parágrafo muito longo (mais de 350 palavras) pode ser dividido em fim de frase. O tratado é o "livro" do site (`livro: Tractatus I. De contractibus in genere`, por exemplo).

### Referência ao scan

Em `obra.json`, `"referencia": "pagina"` se a edição de base for paginada (a de Roma, em fólio, costuma ser), ou `"coluna"` se for em colunas numeradas; cada trecho leva a página (ou coluna) em que começa, como no *Augustinus* (`@s4 125`). Se a edição do Pedro não trouxer essa correspondência, a importação usa `"referencia": "nenhuma"` e o `scan` de cada capítulo aponta para o volume; a correspondência entra depois, capítulo a capítulo, no debate.

## Ponto de controle (fim de cada tratado)

O mesmo do *Augustinus* (`docs/plano-augustinus.md`): auditoria de uniformidade dos termos no tratado, lista das propostas de mudança no glossário com os trechos afetados, e a sessão para até a resposta do Pedro. Aqui também entra, separado, o balanço das **atualizações de registro** que o debate fez na tradução dele, para o Pedro aprovar o critério antes do tratado seguinte.

## Prompt de cada sessão

Na VM, sessão XFCE: `cd ~/bibliotheca-barroca && claude --chrome`, e cole:

```text
Produção da Bibliotheca Barroca: De Contractibus de Pedro de Oñate, obra inteira, a partir da minha tradução já pronta, em etapas.

Leia, antes de qualquer outra coisa: CLAUDE.md, CRITERIOS.md, docs/plano-de-contractibus.md, docs/progresso-de-contractibus.md (se existir) e a skill traduzir-capitulo (inclusive "Capítulo importado"). Eles mandam; este prompt só diz o que fazer nesta sessão. A obra é onate-de-contractibus; não mexa nos capítulos do Augustinus.

1. Situação. Faça a pré-checagem da skill. Pelo progresso e pelo plano, diga em três linhas: etapa atual, último capítulo publicado ou debatido e se há ponto de controle esperando resposta minha. Se houver, e eu não tiver respondido nesta mensagem, pare aqui e mostre o que está pendente.

2. Etapa. Siga a etapa atual do plano:
   - Fontes: procure os arquivos da minha edição bilíngue do De Contractibus (.docx dos três volumes e, se houver, o projeto Node que os gerou) na minha pasta pessoal e em /mnt/rbsa/dados; não achando, pare e me pergunte o caminho. Pelo texto preliminar dos arquivos, identifique a edição latina de base; ache no Chromium os scans dela (Google Books, BSB/MDZ, Internet Archive, bibliotecas espanholas e italianas), baixe os volumes para ~/bibliotheca-fontes/onate-de-contractibus/ (seção Fontes da skill) e confira por pdfinfo e pela folha de rosto. Se a edição de base não tiver scan, pare e me diga.
   - Importação: examine a estrutura dos .docx (tabela de duas colunas, parágrafos alternados ou outra) num volume antes de escrever qualquer código; escreva tools/importar-onate.py (python3-docx), rode, gere obra.json, catalogo.json, la/ e pt/ com estado: importada e transcricao: importada, rode validar.mjs e build.mjs, confira três capítulos (início, meio e fim da obra) contra o .docx, palavra por palavra, e publique (commit e push). Minha tradução entra exatamente como está: nenhuma correção nesta etapa.
   - Glossário: faça o levantamento da etapa 2 do plano e pare com a proposta de glossario.json, as variações encontradas e onde ocorrem, para eu aprovar.
   - Debate: com o glossário aprovado, debata o lote desta sessão, capítulo a capítulo, na ordem do catálogo, pelo fluxo da skill para capítulo importado (debate com Codex e Gemini, aplicação, resumo, commit e push). Lote: até 5 capítulos ou o que eu disser ao final deste prompt.
   - Fim de tratado: faça o ponto de controle do plano e pare.

3. Regras de toda a sessão:
   - A tradução é minha: muda só pelo que o debate demonstrar. No resumo de cada capítulo, separe correção de sentido de atualização de registro.
   - Português culto, mas legível e atual; cada termo técnico com a forma do glossário em todo o texto. Não mude o glossário sem mim.
   - Não pule o debate para render mais. Capítulo com problema que você não resolve fica como está, registrado no progresso.
   - Pare no primeiro LIMITE DE USO de qualquer revisor (anote o horário de liberação), em erro que se repita ou em dúvida que dependa de mim.
   - Fora a etapa de importação (que cria tools/importar-onate.py), não mude a ferramenta (tools/, site/, skill) no meio da produção: se ela atrapalhar, descreva o problema no progresso.

4. Ao terminar, atualize docs/progresso-de-contractibus.md (etapa atual; o que foi feito nesta sessão; capítulos debatidos, com rodadas e estado final do decidir.py; pontos em aberto para mim; propostas de glossário; consumo; próximo passo), faça commit e push, e me dê o mesmo resumo em poucas linhas.

Lote desta sessão: 5 capítulos.
```

# Plano: as *Opera omnia* de Diego de Covarrubias y Leyva

Decisões do Pedro (2026-11-26): a obra inteira, começando pelas três *relectiones* que tratam de boa-fé, pactos e restituição; a edição de base é a de Antuérpia, 1610, e os acréscimos de Brederode ficam em rodapé. A produção é a mesma do *Augustinus*: transcrição do scan, tradução nova, debate com Codex e Gemini, publicação com `estado: debatida`.

Obra no repositório: `obras/covarrubias-opera/`. Cada sessão retoma de onde a anterior parou, pelo repositório e por `docs/progresso-covarrubias.md`.

## Edição de base

*Opera omnia*, Antuérpia, Keerbergius, 1610, dois tomos em fólio, paginados, exemplar da Erzbischöfliche Akademische Bibliothek Paderborn, digitalizado pela Universitätsbibliothek Paderborn (o mesmo visualizador do *Augustinus*, com PDF de cada seção).

| Volume | Link | Caminho na VM |
|---|---|---|
| Tomo I ([6] f., 610 p.) | https://nbn-resolving.org/urn:nbn:de:hbz:466:1-96556 | `~/bibliotheca-fontes/covarrubias-opera/tomo-1.pdf` |
| Tomo II | https://nbn-resolving.org/urn:nbn:de:hbz:466:1-96570 | `~/bibliotheca-fontes/covarrubias-opera/tomo-2.pdf` |

**Acréscimos de Brederode.** A edição é póstuma e foi "aumentada e ilustrada em muitos lugares" por Pieter Cornelis van Brederode, que marcou os acréscimos com um sinal próprio (a folha de rosto avisa). Eles não são do Covarrubias: saem do corpo do trecho e vão para o rodapé com `@a` e a âncora `{a1}`, `{a2}`… no ponto em que estavam (formato no `README.md`; critério no `CRITERIOS.md`). O site os mostra em rodapé, nas duas colunas, com chave para esconder. Na calibração, identificar o sinal e anotá-lo aqui. Paderborn registra também Jan van Uffels como comentador: verificar na calibração se há uma segunda camada de acréscimos; se houver, parar e perguntar ao Pedro, porque a ferramenta só tem um rótulo de acréscimo por obra.

**Conferência.** Leituras duvidosas conferem-se nas edições de Salamanca revistas pelo autor, digitalizadas pela Universidade de Granada (DIGIBUG): *Possessor malae fidei*, 1569 (http://hdl.handle.net/10481/10415); *Peccatum*, 1571, "ex tertia authoris recognitione" (http://hdl.handle.net/10481/10416); *Quamvis pactum*, 1573 (http://hdl.handle.net/10481/10414). Divergência que mude o sentido vai em nota; o texto de base continua o de 1610.

## Ordem de produção

| Ordem | Parte | Tomo I, páginas | Sigla |
|---|---|---|---|
| 1 | *Relectio regulae Possessor malae fidei* (prescrição, posse, boa e má-fé, foro da consciência) | 400–462 | `pmf` |
| 2 | *Relectio c. Quamvis pactum, de pactis, in 6* (juramento; pactos e estipulações confirmados por juramento; renúncia à sucessão) | 240–318 | `qp` |
| 3 | *Relectio regulae Peccatum* (restituição; potestade temporal e guerra justa) | 462–519 | `pec` |
| 4 | O restante do tomo I, na ordem do volume: *De testamentis* (`test`), *Epitome de sponsalibus et matrimoniis* (`spons`), *Relectio c. Alma mater* (`am`), *Relectio Clem. Si furiosus* (`sf`), *Veterum numismatum collatio* (`num`) | 1–240, 318–400, 519–610 | |
| 5 | Tomo II, na ordem do volume (siglas criadas no catálogo) | | |

## Unidade, ids e trechos

- **Capítulo:** cada seção (§) de uma *relectio* ou de um tratado, como na estrutura de Paderborn (cada uma tem PDF próprio, que vira o `scan` do capítulo). Prefácio ou proêmio da *relectio*: capítulo `00`.
- **Id:** `t<tomo>-<sigla>-<seção, 2 dígitos>` (ex.: `t1-pmf-01`). A *relectio* ou o tratado é o "livro" do site (`livro: Relectio regulae Possessor malae fidei`; `livro_curto` em português na tradução).
- **Trechos:** a impressão numera os parágrafos à margem (com † no ponto do texto em que cada número começa). Cada número abre um trecho, e o número impresso entra como `@m n. 6` no trecho em que começa, para que a citação tradicional (*n.* 6) se ache no site. Número muito longo (mais de 300 palavras) pode ser dividido em fim de frase; a segunda parte não leva `@m n.`.
- **Referência ao scan:** a página impressa (`"referencia": "pagina"`, ex.: `@s4 404`), como no *De Contractibus*.
- **Alegações** (*l. si quis, ff. de…*, *c. …, de…, in 6*) ficam na forma do original, sem tradução; sigla e alegação obscura se explicam em nota (`obras/covarrubias-opera/caso-extra.md`).

## Etapas

| Etapa | O que se faz | Termina quando |
|---|---|---|
| 0. Fontes | PDF do tomo I baixado pelo Chrome (seção Fontes da skill) e conferido | PDF no caminho da tabela |
| 1. Catálogo | Catálogo da parte seguinte na ordem acima, pelos marcadores do PDF e pela estrutura de Paderborn (links de cada seção) | a parte seguinte está catalogada |
| 2. Calibração | Só o `t1-pmf-01`, de ponta a ponta: sinal de Brederode identificado e tratado com `@a`; proposta inicial de glossário dos termos jurídicos centrais (*praescriptio*, *usucapio*, *possessio*, *bona fides*, *mala fides*, *titulus*, *dominium*, *forum conscientiae*…), partindo das formas já aprovadas no glossário do *De Contractibus* para que o mesmo termo tenha a mesma forma nas duas obras | o Pedro leu o resumo e aprovou o glossário inicial ("pode seguir") |
| 3. Produção | Parte a parte, na ordem acima, em lotes, pelo fluxo completo da skill | ponto de controle ao fim de cada parte |
| 4. Fechamento | Auditoria de uniformidade da obra inteira; propostas de glossário em aberto | relatório final ao Pedro |

## Ponto de controle (fim de cada parte)

O mesmo do *Augustinus* (`docs/plano-augustinus.md`): auditoria de uniformidade dos termos na parte e lista das propostas de mudança no glossário, com os trechos afetados; aqui também a lista dos acréscimos de Brederode da parte (quantos e onde), para o Pedro ver se a separação está boa. A sessão para até a resposta do Pedro.

## Prompt de cada sessão

Na VM, sessão XFCE: `cd ~/bibliotheca-barroca && claude --chrome`, e cole:

```text
Produção da Bibliotheca Barroca: Opera omnia de Diego de Covarrubias, obra inteira, em etapas.

Leia, antes de qualquer outra coisa: CLAUDE.md, CRITERIOS.md, docs/plano-covarrubias.md, docs/progresso-covarrubias.md (se existir), obras/covarrubias-opera/caso-extra.md e a skill traduzir-capitulo. Eles mandam; este prompt só diz o que fazer nesta sessão. A obra é covarrubias-opera; não mexa nos capítulos das outras obras.

1. Situação. Faça a pré-checagem da skill. Pelo progresso e pelo plano, diga em três linhas: etapa atual, último capítulo publicado e se há ponto de controle esperando resposta minha. Se houver, e eu não tiver respondido nesta mensagem, pare aqui e mostre o que está pendente.

2. Etapa. Siga a etapa atual do plano:
   - Fontes: se faltar o PDF do tomo I, baixe-o pelo Chrome (seção Fontes da skill), confira com pdfinfo e pela folha de rosto e grave no caminho do plano. Depois passe à etapa seguinte na mesma sessão.
   - Catálogo: se a parte seguinte (na ordem do plano) não estiver em catalogo.json, catalogue-a (seção Catálogo da skill), com o link de cada seção lido na estrutura de Paderborn; confira três entradas abrindo as páginas indicadas e grave.
   - Calibração: produza só o t1-pmf-01 e pare, com o resumo do debate, a proposta inicial de glossário e a descrição do sinal de Brederode (com a página em que aparece), para eu ler.
   - Produção: produza o lote desta sessão, capítulo a capítulo, na ordem do catálogo, pelo fluxo completo da skill (transcrição com conferência, acréscimos de Brederode em @a, glossário, tradução, debate com Codex e Gemini, aplicação, resumo, commit e push). Lote: até 5 capítulos ou o que eu disser ao final deste prompt.
   - Fim de parte: faça o ponto de controle do plano e pare.

3. Regras de toda a sessão:
   - Português culto, mas legível e atual; cada termo técnico com a forma do glossário em todo o texto. Não mude o glossário sem mim: a proposta vai ao resumo do capítulo.
   - Não pule a conferência da transcrição nem o debate para render mais. Capítulo com problema que você não resolve fica como está, registrado no progresso.
   - Pare no primeiro LIMITE DE USO de qualquer revisor (anote o horário de liberação), em erro que se repita ou em dúvida que dependa de mim.
   - Não mude a ferramenta (tools/, site/, skill) no meio da produção: se ela atrapalhar, descreva o problema no progresso.

4. Ao terminar, atualize docs/progresso-covarrubias.md (etapa atual; o que foi feito nesta sessão; capítulos publicados, com rodadas e estado final do decidir.py; acréscimos de Brederode encontrados; pontos em aberto para mim; propostas de glossário; consumo; próximo passo), faça commit e push, e me dê o mesmo resumo em poucas linhas.

Lote desta sessão: 5 capítulos.
```

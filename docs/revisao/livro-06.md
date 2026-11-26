# Revisão independente: Digesto, livro VI (D. 6.1 a 6.3)

Revisor: Claude, sem participação na tradução, segundo `docs/revisao-digesto.md`. Data: 2026-11-26. O trabalho foi dividido em dois blocos, D. 6.1 e D. 6.2-6.3, cada um revisto pelo mesmo roteiro e consolidado aqui.

Método: a tradução foi lida contra o latim em todos os trechos. O latim foi conferido contra a impressão de 1889 (Krueger), com o aparato: cerca de 75 dos 119 trechos em D. 6.1 e todos os trechos de D. 6.2 e 6.3. Houve cotejo com Hulot, Otto-Schilling-Sintenis, Vignali, García del Corral, Scott e Monro nos pontos suspeitos e em todas as notas que os citam. Não foram alterados `estado`, `processo`, o glossário, o catálogo, `tools/` nem `docs/` (salvo este relatório).

## Resumo

- **Trechos lidos:** 185 (D. 6.1: 119; D. 6.2: 62; D. 6.3: 4).
- **Erros corrigidos:** 27.

| Tipo | Nº | Onde |
|---|---|---|
| Sentido | 4 | 6.1 s25, s26, s28, s85 |
| Latim (contra a impressão) | 2 | 6.1 s50 (*tempore*); 6.2 s17 (minúscula) |
| Forma fixada | 3 | 6.1 s60; 6.2 s11, s59 |
| Registro | 7 | 6.1 s4, s8, s11, s31, s68, s74; 6.2 s20 |
| Nota | 11 | 6.1 s20, s28, s36, s63, s79; 6.2 s3, s6, s10, s27, s44, s62 |

- **Pontos a decidir:** 6 (detalhes nas seções):
  1. D. 6.1 s97, *non attingit*: "não tocou" (conjectura *attigit*, aparato 4 da p. 93) ou "não toca" (impresso).
  2. D. 6.1 s102, *mancipium hereditarium*: "um bem da herança" ou "escrava da herança".
  3. D. 6.1 s3, *in potestate ex iure Romano*: "sob o seu poder" ou "sob poder" (literal).
  4. D. 6.2 s40, nota: "Cujácio lê *quo ea pariat*" ou "Cujácio propõe" (é conjectura).
  5. D. 6.2 s55, *recte … experiretur*: "agirá com razão" (Scott, Otto-Schilling-Sintenis) ou "agiria com razão" (imperfeito do subjuntivo).
  6. D. 6.3 s1, nota: "Monro, seguindo a edição, transpõe" ou "Monro, seguindo Mommsen, transpõe" (a edição de 1889 não propõe a transposição).
- **Para o coordenador:**
  - Nome de jurista fora da lista do brief: "Fúrio Antiano" (*Furius Anthianus*, D. 6.1 s119).
  - Em D. 6.1, s118 e s119 têm quebra de linha depois da referência, em `la/` e em `pt/`. O validador não acusa.
  - Hulot: o `apoio fr` aponta para o fim de D. 6.2. O título começa na p. OCR 495 (impressa 468) do tomo I, e D. 6.3 na p. OCR 502 (impressa 475).
- **Validador:** `node tools/validar.mjs` dá 0 erros e nenhum aviso nos três títulos. Os 8 erros que restam no total estão em Covarrubias e em D. 19.2 (pt incompleto), fora desta revisão.
- Imagens do scan apagadas (`trabalho/rev-06`).

## D. 6.1 — Da reivindicação

- Trechos lidos: 119 (s1–s119), todos contra o latim.
- Conferidos contra o scan (impressão de 1889, p. 89–94 = scan n204–n209): s1–s29 (p. 89–90, inteiras), s30–s49 (p. 91, inteira), s50–s60 (p. 92, col. 1), s69–s73 (p. 92, col. 2), s106–s119 (p. 94), isto é, cerca de 75 dos 119 trechos, com o aparato de todas as seis páginas (p. 93 só no aparato e no fim das colunas: s88–s91, s99–s101; incluídas as notas citadas na tradução em s87, s89, s97, s98, s115–s117).
- Cotejo: Hulot (fr, tomo I, p. OCR 469–502), Otto-Schilling-Sintenis (de), Vignali (it), García del Corral (es), Scott (en) e Monro (en) nos pontos suspeitos e nas notas que citam traduções de apoio (s20, s28, s36, s59, s68, s116). Conferem: s20 (Scott "in addition to the cost of maintenance"; Hulot e OSS excluem a alimentação), s59 (Cujácio, *post quintum annum*, na glosa de Gotofredo em Vignali, "9. obs. 18"), s68 (Scott), s116 (OSS: o donatário estava no campo). Erradas: s28 e s36 (ver abaixo).

### Corrigido
- s50 (latim) — antes: "item si litis contestatae temporis non possedit"; depois: "item si litis contestatae tempore non possedit"; motivo: a impressão (p. 91–92) traz *tempore*; a tradução não muda; tipo: latim.
- s4 — antes: "pois reivindicar-se-á o rebanho, não os corpos singulares"; depois: "pois o que se reivindica é o rebanho, não os corpos singulares"; motivo: mesóclise; tipo: registro.
- s8 — antes: "e cada um reivindicaremos na proporção"; depois: "e cada um de nós reivindicará na proporção"; motivo: concordância decalcada do latim; tipo: registro.
- s11 — antes: "mas demandar-se-á pela ação real"; depois: "mas se demandará pela ação real"; motivo: mesóclise; tipo: registro.
- s20, nota — antes: "a Florentina omite *si* ("se") e entende que as leis 10 e 11…"; depois: "a Florentina omite *si* ("se"), e a edição entende que…"; motivo: a frase fazia da Florentina o sujeito da conjectura sobre os dois trechos (aparato 7 e 8 da p. 90); tipo: nota.
- s25 — antes: "se o restituiu espancado"; depois: "se o entregou espancado"; motivo: *tradidit*, como em s33 (*tradere*, "entregar"); tipo: sentido.
- s26 — antes: "talvez se lhe acuda por este ofício do juiz"; depois: "talvez se lhe acuda pelo ofício do juiz"; motivo: *huic* é dativo ("lhe"), não demonstrativo de *officio*; "este" era acréscimo; tipo: sentido.
- s28 — antes: "deve-se prestá-lo pela mora sofrida: pois, se o possuidor lho tivesse restituído"; depois: "deve-se prestá-lo a quem sofreu a mora: pois, se o possuidor o tivesse restituído a ele"; motivo: *moram passo* é dativo (o texto dava valor causal e a nota corrigia); "lho" é arcaico no português do Brasil; tipo: sentido / registro.
- s28, nota — antes: "As traduções de apoio entendem assim (Otto-Schilling-Sintenis, Monro, Scott)"; depois: só Otto-Schilling-Sintenis ("dem den Verzug Erleidenden"); Monro ("where the possessor was in default") e Scott ("if the party was in default") dão valor de condição; motivo: afirmação sobre as traduções de apoio inexata; tipo: nota.
- s31 — antes: "enquanto Mévio mo pedia"; depois: "enquanto Mévio o pedia de mim"; motivo: "mo" é arcaico; tipo: registro.
- s36, nota — antes: "…seguem a leitura *continuo* … e não fazem pergunta"; depois: "…traduzem pela leitura *continuo* …: Otto-Schilling-Sintenis e Vignali sem pergunta; García del Corral põe a interrogação na frase anterior"; motivo: García del Corral faz pergunta ("¿ha de ser absuelto sin cauciones…?"); tipo: nota.
- s60 — antes: "dono da nua propriedade" / nota "Nua propriedade"; depois: "nua-propriedade" nos dois lugares; motivo: forma fixada do brief; tipo: forma fixada.
- s63, nota — antes: "a Florentina lê *petit* ("peço")"; depois: "*petit* ("pede")"; motivo: *petit* é 3ª pessoa; tipo: nota.
- s68 — antes: "mas deve conceder-se-lhe que retire"; depois: "mas deve-se conceder a ele que retire"; motivo: mesóclise; tipo: registro.
- s74 — antes: "assegurar-me-á a ação real"; depois: "me assegurará a ação real"; motivo: mesóclise; tipo: registro.
- s79, nota — antes: ""Jurou sobre o valor da lide" (*in litem iuraverit*)"; depois: ""Jurou na lide""; motivo: o lema da nota não correspondia ao texto, que usa a forma fixada ("jurou na lide"); tipo: nota.
- s85 — antes: "embora ainda não tenha tido a posse dela"; depois: "a posse da coisa"; motivo: *eius* remete a *eo quod hereditati obvenerit*, não à herança, que "dela" sugeria; tipo: sentido.

### A decidir
- s97 (*quam heres non attingit*): a tradução diz "em que o herdeiro não tocou", isto é, traduz a conjectura *attigit* (aparato 4 da p. 93), não o *attingit* impresso. Leitura A: manter o pretérito, que lê melhor e a nota explica. Leitura B: "em que o herdeiro não toca", como na impressão, deixando *attigit* só na nota.
- s102 (*mancipium hereditarium*): "é um bem da herança". Leitura A: manter, porque *mancipium* é genérico. Leitura B: "é escrava da herança", na linha de *servus hereditarius* (brief: "escravo da herança"), já que se trata de uma *ancilla*.
- s3 (*'in potestate ex iure Romano'*): "sob o seu poder segundo o direito romano". O "seu" não está na fórmula. Leitura A: manter, porque se subentende do *filium suum* anterior. Leitura B: "sob poder segundo o direito romano", literal.

### Observações
- Inscrições conferidas em todas as leis: autores, obras e livros corretos. Formas usadas fora da tabela do brief: "Fúrio Antiano" (*Furius Anthianus*, s119); "Comentários ao edito monitório" para *edicti monitorii* (s84), como na tabela para *ad edictum monitorium*.
- Aparato conferido e correto nas notas de s3, s6, s10, s11, s16, s18, s20, s24, s41, s43, s55, s63, s67, s69, s75, s87, s89, s97, s98, s115, s116 e s117.
- Formato: em la/ e pt/, s118 e s119 têm quebra de linha depois da referência e a nota de s119 fica em linha própria. O validador não acusa; não mexi.
- Validador: `node tools/validar.mjs` com 0 erros; nenhum aviso em d06-01.
- Imagens e textos de apoio apagados de `trabalho/rev-06/A`.

## D. 6.2 — Da ação real publiciana

- Trechos lidos: 62 (s1–s62), todos contra o latim.
- Conferidos contra o scan (p. 94–96 da impressão; scan n209–n211): todos, s1–s62, com as inscrições e o aparato das p. 94 (notas 5–7), 95 (notas 1–8) e 96 (notas 1–3).
- Cotejo: Scott (en) e Monro (texto já indexado em `trabalho/ag-m/monro.txt`, p. 393–399) em todo o título; Otto-Schilling-Sintenis (de), García del Corral (es), Vignali (it) e Hulot (fr) nos pontos suspeitos e em todas as notas que os citam. Conferem: Monro em s8, s16, s23, s27, s44 e s50; Otto-Schilling-Sintenis em s1 (n. 40), s16 (n. 45), s23 (n. 46), s27 (n. 47) e s62; García del Corral em s16 e s33 (sobre o *non* acrescentado depois na Florentina); Vignali e Gotofredo em s12, s19, s27 (Agioteodoreto), s38 (Noodt), s41 e s50 (Fabro); Hulot em s27, s50 e s62.
- Hulot: o `apoio fr` mostra as p. OCR 501–503, que são o fim do título. D. 6.2 começa na p. OCR 495 (impressa 468) do tomo I, e D. 6.3 na p. OCR 502 (impressa 475).

### Corrigido
- s17 (latim) — antes: "qui detulit. Sed si possessori"; depois: "qui detulit. sed si possessori"; motivo: a impressão tem minúscula no meio do parágrafo; tipo: latim.
- s11 — antes: "Se o litígio foi estimado … a estimação do litígio"; nota: "o valor fixado no litígio"; depois: "Se a lide foi estimada … a estimação da lide"; nota: "o valor fixado na estimação da lide"; motivo: *lis* = lide, *litis aestimatio* = estimação da lide (brief); tipo: forma fixada.
- s59 — antes: "pela ação de compra … pela ação contrária de mandato"; depois: "pela ação de compra (*iudicium empti*) … pela ação contrária de mandato (*iudicium mandati contrarium*)"; motivo: nome da ação em latim na primeira ocorrência do título (brief); tipo: forma fixada.
- s20 — antes: "qualquer outro que gira um negócio meu"; depois: "que gere"; motivo: conjugação errada de "gerir"; tipo: registro.
- s3, nota — antes: "O aparato registra que alguns manuscritos acrescentam 'por causa de compra'"; depois: "O aparato registra a proposta de inserir 'por causa de compra' (*ex causa emptionis*)"; motivo: aparato n. 7 "ex causa emptionis *ins.*", que é proposta de editor e não leitura de manuscritos; tipo: nota.
- s6, nota — antes: "'Dote estimada':"; depois: "'Dada em dote estimada':"; motivo: o rótulo não correspondia ao texto ("dote" é masculino; o estimado é a coisa); tipo: nota.
- s10, nota — antes: "(partilha da herança, divisão de coisa comum, demarcação), como explicam Otto-Schilling-Sintenis"; depois: "…; Otto-Schilling-Sintenis dão o exemplo da divisão de coisa comum"; motivo: a n. 42 de Otto-Schilling-Sintenis só traz o *iudicium communi dividundo*; tipo: nota.
- s27, nota — antes: "O aparato registra a variante *potest* em lugar de *putet*"; depois: "*Putet* é emenda: a Florentina e os manuscritos da Vulgata leem *potest* (aparato, nota 2)"; motivo: aparato "potest FS", ou seja, *potest* é a leitura de toda a tradição e não uma variante; tipo: nota.
- s44, nota — antes: "A edição de Mommsen-Krüger anota *nec*, em lugar de *non*, num dos manuscritos"; depois: "Os manuscritos da Vulgata leem *nec* em lugar de *non* (aparato, nota 6)"; motivo: aparato "non] nec S"; tipo: nota.
- s62, nota — antes: "a florentina tem *prima*"; depois: "a Florentina e os manuscritos da Vulgata têm *prima*"; motivo: aparato "prima FS"; tipo: nota.

### A decidir
- s40, nota: "Cujácio lê *quo ea pariat*". O aparato dá "experiar] ea pariat Cuiacius", que é uma conjectura de Cujácio. Leitura A: manter "lê". Leitura B: "Cujácio propõe".
- s55 (*recte hac actione experiretur*): "agirá com razão". O latim está no imperfeito do subjuntivo. Leitura A: manter o futuro, como Scott e Otto-Schilling-Sintenis. Leitura B: "agiria com razão", mais literal.

### Observações
- Inscrições, nomes de juristas e obras (*Comentários ao edito*, *Comentários ao edito provincial*, *Comentários a Sabino*, *Notas às Questões de Papiniano*, *Pergaminhos*) conferem com a impressão e com a tabela do brief.
- Formas fixadas conferidas: tradição, usucapião, abandono noxal, reivindicação, prédio de aluguel, munícipes, pecúlio, demandante, prédios vectigais.
- s19: a nota sobre *et in honorariis* está certa (aparato "in ins. F").

## D. 6.3 — Se se pedir um campo vectigal, isto é, enfitêutico

- Trechos lidos: 4 (s1–s4), todos contra o latim.
- Conferidos contra o scan (p. 96; scan n211): todos, com o aparato (notas 4–7).
- Cotejo: Scott, Monro, Otto-Schilling-Sintenis (n. 54), García del Corral e Hulot. A nota de s1 confere com Otto-Schilling-Sintenis e com Monro ("Transpose tamdiu and quamdiu. Cf. M."), e a nota de s3 confere com o aparato (n. 7, *ad edictum Hal.*).

### Corrigido
- Nada.

### A decidir
- s1, nota: "Monro, seguindo a edição, transpõe". Monro remete a "M." (Mommsen, *editio maior*). A edição de 1889 só registra a ordem inversa como leitura dos *dett.* (n. 6) e não propõe transposição. Leitura A: manter. Leitura B: "Monro, seguindo Mommsen, transpõe".

### Observações
- O latim confere integralmente com a impressão. O aparato n. 5 ("vectigales *ins.* S", depois de *alii non*) não está anotado, mas não muda o sentido.

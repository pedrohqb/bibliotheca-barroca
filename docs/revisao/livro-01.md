# Revisão independente: Digesto, livro I (D. 1.1 a 1.22)

Revisor: Claude, sem participação na tradução, segundo `docs/revisao-digesto.md`. Data: 2026-11-26. Trabalho dividido em três blocos (D. 1.1-1.3; D. 1.4-1.8; D. 1.9-1.22), cada um revisto pelo mesmo roteiro e consolidado aqui.

Método: tradução lida contra o latim em todos os trechos; latim conferido contra a impressão de 1889 (Krueger), com o aparato, muito acima da amostra de 1 em 5 (D. 1.1-1.8 inteiros; cerca de 120 de 150 trechos em D. 1.9-1.22); cotejo com Hulot, Otto-Schilling-Sintenis, Vignali, García del Corral e Scott nos pontos suspeitos e em todas as notas que os citam. Não foram alterados `estado`, `processo`, glossário, catálogo, `tools/` nem `docs/` (salvo este relatório).

## Resumo

- **Trechos lidos:** 413 (D. 1.1-1.3: 117; D. 1.4-1.8: 146; D. 1.9-1.22: 150).
- **Erros corrigidos:** 44.

| Tipo | Nº | Onde |
|---|---|---|
| Sentido | 4 | 1.1 s7; 1.2 s39; 1.7 s3; 1.8 s24 |
| Latim (contra a impressão) | 9 | 1.2 s8, s12, s15, s45, s46, s52; 1.3 s2 (grego); 1.6 s3; 1.7 s43 (erro tipográfico mantido, com nota) |
| Forma fixada | 10 | 1.4 s1; 1.5 s32; 1.6 s4; 1.8 s14; 1.11 s3; 1.15 s1; 1.16 s17, s24; 1.18 s26; 1.21 s4 |
| Registro | 4 | 1.2 s40; 1.7 s50; 1.8 s13, s27 |
| Nota | 17 | 1.2 s6, s7, s46, s53; 1.3 s2; 1.5 s5, s8, s10, s19, s32; 1.6 s14; 1.7 s15, s43; 1.8 s14; 1.16 s21; 1.18 s3; 1.19 s3 |

- **Pontos a decidir:** 12 (detalhes nas seções):
  1. D. 1.1 s8 — *servitus* da pessoa: "servidão" (glossário) ou "escravidão" (brief e títulos seguintes). Glossário e brief se contradizem.
  2. D. 1.1 s19 — *maiestate imperii*: "poder" ou "império".
  3. D. 1.2 s26 — colchetes "[os decênviros foram]" no corpo ou só em nota.
  4. D. 1.2 s47 — "Quinto Múcio Volúsio": genitivo forçado contra o nominativo impresso.
  5. D. 1.3, título — "costume antigo" ou "longo costume" (como no corpo, s36).
  6. D. 1.3 s17 — *vim ac potestatem*: "força e alcance" ou "força e poder".
  7. D. 1.5 s29 — *vulgo* em latim ou "concebidos fora do casamento".
  8. D. 1.7 s29 — *subscribendum*: "deferir a vontade" ou "dar assentimento à vontade".
  9. D. 1.9 s14 — *liberi*: "filhos" (tautológico) ou "descendentes".
  10. D. 1.12 s8 — *ut non idoneus tutor … daretur*: "que não se desse um tutor idôneo" (García del Corral, Scott) ou "que se desse um tutor inidôneo" (Otto-Schilling-Sintenis; a gramática, que pediria *ne*, favorece esta).
  11. D. 1.16 s30 — *animadvertendi ius*: "punir com a morte" (acréscimo, apoiado por Scott) ou só "punir", com o sentido capital na nota.
  12. D. 1.19 s1 — nota sobre a conjetura do aparato 5 da p. 17.
- **Para o coordenador (uniformidade no corpus):** "Septímio" × "Sétimo" Severo; "Macro" × "Emílio Macro" para *Macer*; "conjetura" × "conjectura"; *nefas* com três versões em D. 1.1-1.2 (cada uma explicada em nota). Na impressão, a lei de D. 1.15.4 vem numerada "5" (referência não alterada). Em D. 1.2, s52-s55 têm formatação diferente do resto do arquivo (quebra de linha depois de `@sN`); o validador não acusa.
- **Validador:** `node tools/validar.mjs` com 0 erros; nos títulos do livro I restam só avisos de glossário já explicados em nota (*tutela* em D. 1.1.3, *prudentes* em D. 1.3.1, *ius* em D. 1.8 s11).
- Imagens do scan apagadas (`trabalho/rev-01`).

## Decisões aplicadas

Decisões do coordenador sobre os 12 pontos a decidir, aplicadas em 2026-11-26 (só em `pt/`; o latim não mudou):

1. D. 1.1 s8: "servidão" passou a "escravidão" (três ocorrências).
2. D. 1.1 s19: "majestade do seu poder" passou a "majestade do seu império".
3. D. 1.2 s26: "[os decênviros foram]" fica no corpo, entre colchetes, com a nota. Sem alteração.
4. D. 1.2 s47: "ouvinte de Quinto Múcio Volúsio" passou a "Aulo Cascélio, Quinto Múcio, ouvinte de Volúsio", no nominativo, como na impressão. A nota agora começa dizendo que o latim impresso está corrompido e mantém as leituras de Hulot e da edição.
5. Título de D. 1.3: "Das leis, dos senatus-consultos e do longo costume". O título não aparece em `catalogo.json`, que não foi tocado.
6. D. 1.3 s17: "força e alcance" passou a "força e poder".
7. D. 1.5 s29: "concebidos *vulgo*" passou a "concebidos fora do casamento". Nota nova: *vulgo concepti*, literalmente "concebidos ao acaso, do povo".
8. D. 1.7 s29: "deferir a vontade" passou a "dar assentimento à vontade".
9. D. 1.9 s14: "Por filhos de senadores" passou a "Por descendentes de senadores".
10. D. 1.12 s8: agora "que se desse a alguém um tutor inidôneo". A nota registra a outra leitura, de García del Corral e Scott, e o argumento do *ne*.
11. D. 1.16 s30: "punir com a morte" passou a "punir". O latim (*animadvertendi … ius*) não traz *capite* nem *capitis*, e a nota existente já explica o sentido capital de *animadvertere*.
12. D. 1.19 s1: sem nota nova.

Uniformização no livro I:
- "Sétimo Severo" passou a "Septímio Severo" (D. 1.16 s15, nota).
- "conjetura" passou a "conjectura" em todas as ocorrências: D. 1.2, 1.5, 1.9 (2), 1.10 e 1.14 (2).
- *Macer*: as cinco inscrições do livro (D. 1.18, três; 1.21; 1.22) trazem só *Macer* e já estavam como "Macro". Nada mudou.

## D. 1.1 — Da justiça e do direito

- Trechos lidos: 20 (s1–s20), todos contra o latim.
- Conferidos contra o scan (p. 116–117 da impressão): s1–s20, todos; aparato da p. 116 lido (notas 1–17).
- Cotejo: fr (Hulot), de (Otto-Schilling-Sintenis), es (García del Corral), en (Scott) para s2, s6–s7. As afirmações das notas sobre Hulot ("ministres du droit", "c'est un crime") e Otto-Schilling-Sintenis ("unrecht") conferem.

### Corrigido
- s7 — antes: "ou que repilamos a violência e a injúria"; depois: "que repilamos a violência e a injúria"; motivo: "ou" não está no latim (*ut vim atque iniuriam propulsemus* continua a série de exemplos de s6, e não é alternativa; nenhuma das traduções de apoio usa disjunção); tipo: sentido (acréscimo).

### A decidir
- s8 (*servitus* da pessoa): a tradução diz "servidão" ("enquanto alguém está em servidão", "a servidão era desconhecida", "a servidão se introduziu"). A nota do glossário (lema *servus*) admite "servidão (no sentido de escravidão)"; o brief fixa *servitus* (da pessoa) como "escravidão", que é a forma usada nos títulos seguintes (d01-05, d01-07, d01-14, d02-04…). Leitura A: manter "servidão", como diz o glossário. Leitura B: "escravidão", como diz o brief e como faz o resto da obra. O glossário e o brief se contradizem aqui; convém decidir e alinhar os dois.
- s19 (*salva maiestate imperii sui*): "salva a majestade do seu poder". O brief reserva "poder" para *potestas* e dá para *imperium* "poder de mando" ou "império" (as duas formas aparecem no brief). Leitura A: manter "poder", que é legível. Leitura B: "do seu império" ou "do seu poder de mando", pela forma fixada.

### Observações
- s3, nota sobre *consistit*: o aparato (n. 4) diz "sic dett. cum B, constitit FR"; a nota está certa no essencial. A afirmação de que *constitit* foi "adotada nas edições estereotípicas posteriores" não se apoia no aparato de 1889; não é errada até onde sei, mas não pude conferir.
- s11, grego: o scan parece trazer o artigo com espírito e acento (οἳ μὲν … οἳ δὲ), mas a impressão não é nítida nesse ponto; mantive οἱ.
- *nefas*: "ímpio" em D. 1.1.3, "sacrilégio" em D. 1.2.1 e "não era lícito" (*non erat fas*) em D. 1.2.2.18. As notas explicam cada escolha; registro só para uniformidade.

## D. 1.2 — Da origem do direito, de todas as magistraturas e da sucessão dos jurisconsultos

- Trechos lidos: 55 (s1–s55), todos contra o latim.
- Conferidos contra o scan (p. 117–120): s1, s2–s16, s17–s36, s37–s48, s49–s55, isto é, todo o título, com o aparato das p. 117, 118, 119 e 120.
- Cotejo: com Hulot (fr) para todas as notas que citam Hulot (s8, s26, s31, s40, s46, s50, s53), e todas conferem.

### Corrigido
- s15 (latim) — antes: "Post hoc dein de auctorum"; depois: "post hoc dein de auctorum"; motivo: a impressão tem minúscula no meio do parágrafo; tipo: latim.
- s8 (latim) — antes: "certas solemnesque"; depois: "certas sollemnesque"; motivo: grafia da impressão; tipo: latim.
- s12 (latim) — antes: "dicturus esset seque praemunirent"; depois: "dicturus esset, seque praemunirent"; motivo: vírgula da impressão; tipo: latim.
- s45 (latim) — antes: "iterum Quintum interrogasset et a Quinto Mucio"; depois: "iterum Quintum interrogasse et a Quinto Mucio"; motivo: a impressão traz o infinitivo (ainda em discurso indireto, depois de *traditur*); a tradução não muda; tipo: latim.
- s46 (latim) — antes: "Labeonis Antisti pater"; depois: "Labeonis Antistii pater"; motivo: grafia da impressão; tipo: latim.
- s52 (latim) — antes: "Huic nec amplae"; depois: "huic nec amplae"; motivo: minúscula na impressão; tipo: latim.
- s39 — antes: "duas tesserazinhas" / nota "Tesserazinhas"; depois: "duas tésseras" / "Tésseras"; motivo: *tesserae* não é diminutivo (seria *tessellae*/*tesserulae*); tipo: sentido.
- s40 — antes: "Énio"; depois: "Ênio"; motivo: grafia brasileira, a usada no resto da edição; tipo: registro.
- s46, nota — antes: "a posição de *Gaius* é estranha; Schrader propõe *Titus* (nota 37 da edição)"; depois: "Cujácio propõe suprimi-lo, e a edição sugere também transpô-lo para antes de *Cinna*, observando que o prenome de Alfeno parece ter sido *Publius* (nota 37)"; motivo: a proposta de Schrader (*Titus*) é a nota 27, que trata do *Gaius Iuventius* de § 42 (cf. Cic. *Brut.* 178); a nota 37 é a de Cujácio sobre Alfeno; tipo: nota.
- s53, nota — antes: "(*eousque donec*)"; depois: "(*eo usque, donec*)"; motivo: alinhar com o latim impresso; tipo: nota.
- s6, nota — antes: "assim a Florentina e o Epítome; os editores modernos discutem a leitura *roboreas* ('de carvalho')"; depois: "a edição anota que o Epítome grego confirma *eboreas* (nota 8); Lívio (3, 57) fala de tábuas de bronze"; motivo: o aparato não menciona *roboreas*, e a afirmação não tinha fonte; tipo: nota.
- s7, nota — antes: "A edição registra a variante *disputatione*"; depois: "A Florentina lê *disputatione* (nota 11 da edição)"; motivo: o aparato diz "sic dett., disputatione FR": *disputatione* não é uma variante qualquer, é a leitura da Florentina; tipo: nota.

### A decidir
- s26: "[os decênviros foram] em parte mortos na prisão". Os colchetes acrescentam o sujeito no corpo do texto, e a nota já explica a lacuna (aparato n. 15). Leitura A: manter os colchetes, que deixam o acréscimo à vista. Leitura B: tirar os colchetes ("e, por consenso do povo, em parte mortos na prisão") e deixar a explicação só na nota, como pede o CRITERIOS ("nada se acrescenta ao texto").
- s47: "Aulo Cascélio, ouvinte de Quinto Múcio Volúsio". O latim impresso (*Quintus Mucius Volusii auditor*) tem Quinto Múcio no nominativo. A nota expõe o problema, mas a tradução força um genitivo. Leitura A: manter. Leitura B: traduzir literalmente ("Aulo Cascélio, Quinto Múcio, ouvinte de Volúsio…") e deixar o problema todo na nota.

### Observações
- s29: o § 27 começa, na impressão, em "ita facti sunt aediles curules", e "Cumque" vem com maiúscula, como está no arquivo.
- s33: *ultis Tiberim* está assim na impressão (a nota 25 da edição a dá como acréscimo dos compiladores). Correto.
- Formato: s52–s55 usam quebra de linha depois de `@sN` e linha em branco, ao contrário do resto do arquivo. O validador não acusa erro; não mexi.

## D. 1.3 — Das leis, dos senatus-consultos e do costume antigo

- Trechos lidos: 42 (s1–s42), todos contra o latim.
- Conferidos contra o scan (p. 120–122): s1–s42, todos, incluindo as inscrições e o grego de s2, s3 e s6; aparato das p. 120 e 121.
- Cotejo: com Hulot para a nota de s26 ("interpréter les lois nouvelles par les anciennes"), que confere.

### Corrigido
- s2 (latim, grego) — antes: "ἀνθρώπων φρονίμων, ἐπανόρθωμα"; depois: "ἀνθρώπων φρονίμων ἐπανόρθωμα"; motivo: na impressão não há vírgula (conferido com ampliação do recorte); tipo: latim.
- s2, nota — acrescentado ao fim: "A tradução segue o texto transmitido; a edição registra a emenda de Hercher, que liga 'os seres que por natureza vivem em cidade' a 'chefe e guia' (notas 24 e 25)."; motivo: o aparato traz texto e tradução latina emendados, que mudam a construção da frase de Crisipo; tipo: nota.

### A decidir
- Título: "Das leis, dos senatus-consultos e do costume antigo" (*longa consuetudine*), mas em s36 *longa consuetudine* vira "longo costume". Leitura A: manter "costume antigo" no título, forma já publicada. Leitura B: "e do longo costume", mais fiel e igual ao corpo do texto.
- s17 (*vim ac potestatem*): "força e alcance". *Potestas* é "poder" no brief, mas aqui o sentido é outro (o alcance da lei). Leitura A: manter "alcance", com ou sem nota. Leitura B: "força e poder", pela forma fixada, com a perda de sentido que isso traz.

### Observações
- As inscrições conferem com a impressão (numerais como impressos: LVIIII, LXXXX, XXVIIII, LXXXIIII; *Idem* resolvido no nome do autor). Nomes de obras e de juristas conferem com a tabela do brief.
- O validador dá dois avisos de glossário (*tutela* em D. 1.1.3, *prudentes* em D. 1.3.1). Os dois já estão explicados nas notas.

## D. 1.4 — Das constituições dos príncipes

- Trechos lidos: 6 (s1-s6).
- Conferidos contra o scan: todos (s1-s6), com a nota 3 do aparato (grego de Modestino).
- Apoio: Hulot conferido para a afirmação da nota de s2 ("lettres signées de lui", "en jugeant sommairement"); confere.

### Corrigido
- s1 | antes: "pela lei régia promulgada sobre o seu poder" | depois: "pela lei régia promulgada sobre o seu império" | motivo: *de imperio eius* e *omne suum imperium* na mesma frase vertidos de dois modos; a própria nota fixa *imperium* = "império" | tipo: forma fixada.

### A decidir
- nada.

### Observações
- Latim confere integralmente com a impressão.

## D. 1.5 — Do estado das pessoas

- Trechos lidos: 33 (s1-s33).
- Conferidos contra o scan: todos (s1-s33), com o aparato das pp. 7-8 (notas 17, 19, 21 da edição citadas nas notas da tradução: conferem).

### Corrigido
- s8 (nota) | antes: "os que foram manumitidos (§ 12)" | depois: "(D. 1.5.6)" | motivo: remissão errada; não há § 12 aplicável, a definição de libertos é D. 1.5.6 | tipo: nota.
- s10 (nota) | antes: "de pai incerto (cf. § 29)" | depois: "(cf. D. 1.5.23)" | motivo: remissão errada; a definição de *vulgo concepti* é D. 1.5.23 | tipo: nota.
- s5 (nota) | antes: "o glossário fixa 'servidão' para *servitus*, mas aqui ... 'escravidão' é a palavra exata" | depois: "a forma fixada para a *servitus* da pessoa; a servidão predial vem em D. 8." | motivo: as formas fixadas do brief dão "escravidão" para a *servitus* da pessoa; a nota apresentava a escolha como desvio do glossário | tipo: nota.
- s19 (nota) | antes: "contra *iudicio*, de outros manuscritos" | depois: "contra *iudicio*, da Florentina e da tradição secundária (F S)" | motivo: o aparato (nota 19) mostra que *iudicio* é a leitura de F e S, isto é, de toda a tradição latina; *iudicii* é dos gregos | tipo: nota.
- s32 | antes: "o que nascer tem o direito de retorno (*postliminium*)" | depois: "o que nascer tem o pós-limínio (*postliminium*)"; nota ajustada para "Pós-limínio" (*postliminium*) | motivo: forma fixada *postliminium* = pós-limínio (usada assim em D. 1.7 e 1.8) | tipo: forma fixada.

### A decidir
- s29: "Dizem-se concebidos *vulgo* os que..." — leitura A (atual): manter *vulgo* em latim, porque o trecho define o próprio termo; leitura B: usar a forma fixada "concebidos fora do casamento" ("Dizem-se concebidos fora do casamento os que não podem indicar o pai..."), com o latim em nota.

### Observações
- Latim confere integralmente com a impressão (inclusive *iudicii*, *ampliavit*, grego παρὰ τὴν σποράν).
- s31 "a respeito de quem se proferiu sentença nesse sentido": "nesse sentido" é explicitação não escrita no latim, mas necessária ao sentido; deixei.

## D. 1.6 — Dos que são de direito próprio ou alheio

- Trechos lidos: 14 (s1-s14).
- Conferidos contra o scan: todos (s1-s14), com o aparato da p. 8.
- Apoio: de, fr, it, en para s14.

### Corrigido
- s3 (latim) | antes: "saevire. Nam ex constitutione" | depois: "saevire. nam ex constitutione" | motivo: a impressão traz minúscula (maiúscula só no início de pr./§) | tipo: latim.
- s4 | antes: "conhece das queixas daqueles da família de Júlio Sabino"; nota "Família" (*familia*) | depois: "daqueles da escravaria de Júlio Sabino"; nota "Escravaria" (*familia*): o conjunto dos escravos de um senhor | motivo: forma fixada *familia* (escravos) = escravaria | tipo: forma fixada.
- s14 (nota) | antes: "no direito clássico tardio, os nascidos de concubinato, que só por legitimação entravam no poder do pai" | depois: "ao que parece, os nascidos de concubinato (Hulot, 'les bâtards'; Scott, 'illegitimate'), que só por legitimação, instituto pós-clássico, entravam no poder do pai; Gotofredo remete à Novela 89, c. 1." | motivo: a legitimação é pós-clássica (Constantino, Justiniano), não "clássica tardia"; a interpretação passa a vir com o apoio que a sustenta | tipo: nota.

### A decidir
- nada.

### Observações
- Latim confere com a impressão, salvo a maiúscula corrigida.

## D. 1.7 — Das adoções, das emancipações e dos outros modos pelos quais se dissolve o poder

- Trechos lidos: 66 (s1-s66).
- Conferidos contra o scan: todos (s1-s66), com o aparato das pp. 9-11 (notas 3, 11, 15 da p. 9; 1 da p. 10; 1 da p. 11: conferem com as notas de s3, s17, s24, s64).
- Apoio: it (Vignali/Gotofredo), fr, de, en para s15, s63 e s8.

### Corrigido
- s43 (latim) | antes: "filium quidem in potestate retinere" | depois: "filium quidem in potestare retinere", com nota nova em pt: "*In potestare*: erro tipográfico evidente da impressão de 1889, por *in potestate*; traduz-se a forma correta." | motivo: a impressão traz *potestare*; o roteiro manda manter o erro tipográfico evidente e explicá-lo em nota | tipo: latim.
- s3 | antes: "A adoção em geral faz-se de dois modos" | depois: "Pois a adoção em geral faz-se de dois modos" | motivo: omissão de *enim*, que liga o fragmento de Gaio ao de Modestino | tipo: sentido.
- s15 (nota) | antes: "a glosa contrapõe o retorno ao poder por ingratidão" | depois: "Gotofredo (nota a este passo, na edição de Vignali) contrapõe..." | motivo: a observação é de Gotofredo (notas 3 e 4 na edição de Vignali), não da Glosa | tipo: nota.
- s50 | antes: "por exemplo, mo desses em adoção" | depois: "por exemplo, o desses a mim em adoção" | motivo: contração pronominal *mo*, arcaizante | tipo: registro.

### A decidir
- s29 "não se deverá deferir a vontade de quem quiser ad-rogar" (*voluntati ... subscribendum erit*): leitura A (atual) mantém "deferir a vontade"; leitura B: "não se deverá dar assentimento à vontade" / "atender à vontade", mais próximo de *subscribere* (aprovar por subscrição) e de regência mais natural.

### Observações
- s8 (D. 1.7.5): o aparato (nota 11) traz a suspeita de Mommsen de que o que segue *exploratur* é dos compiladores; a tradução não o diz. Uma nota curta seria útil, mas não a acrescentei.
- s29 "se garantir a um escravo público" (*caverit*): "prestar caução" seria mais coerente com *cautio* = caução; deixei por ser verbo.

## D. 1.8 — Da divisão e da qualidade das coisas

- Trechos lidos: 27 (s1-s27).
- Conferidos contra o scan: todos (s1-s27), com o aparato das pp. 11-12 (notas 8, 12, 15, 16: conferem com as notas de s6, s8, s15; a 15 não estava anotada).
- Apoio: fr, de, en para s19 e s24.

### Corrigido
- s13 | antes: "Feito, porém, uma vez o templo sagrado, mesmo destruído o edifício, o lugar continua sagrado." | depois: "Mas, uma vez que o templo se tornou sagrado, o lugar continua sagrado mesmo depois de destruído o edifício." | motivo: inversão latinizante | tipo: registro.
- s14 | antes: "ainda que este só o ratifique depois" | depois: "ainda que este só o tenha por válido depois" | motivo: forma fixada *ratum habere* = ter por válido | tipo: forma fixada.
- s14 (nota nova) | "A tradição secundária (S), com a maior parte dos manuscritos das *Instituições* de Justiniano (2, 1, 9), insere *non* ('ainda que não o tenha por válido'), contra a Florentina e os gregos (nota 15 da edição de 1889)." | motivo: variante registrada no aparato que inverte o sentido da frase | tipo: nota.
- s24 | antes: "Os muros municipais não é lícito reconstruí-los" | depois: "... repará-los" | motivo: *reficere* = reparar, restaurar (assim o alemão, "ausgebessert"); "reconstruir" diz mais | tipo: sentido.
- s27 | antes: "é punido com a pena capital, como se alguém os transpuser com escadas" | depois: "é punido com a pena capital, assim como quem os transpuser com escadas" | motivo: "como se" + futuro do subjuntivo é agramatical e sugere comparação hipotética; *sicuti si quis transcendet* = "assim como [é punido] quem transpõe" | tipo: registro.

### A decidir
- nada.

### Observações
- Latim confere integralmente com a impressão.
- s15 (nota): o aparato remete a *Eneida* 3, 303 e também a 6, 505; a nota cita só o primeiro passo. Não é erro.
- Validador: aviso de glossário em s11 (*in ius vocare*), já explicado em `@n`, como manda o glossário.

## D. 1.9 — Dos senadores

- Trechos lidos: 17.
- Conferidos contra o scan: s1-s17 (todos). O latim confere. As notas do aparato (3 *divi*, 5 *viro*) estão bem relatadas.
- Corrigido: nada.
- A decidir:
  - s14 (*Liberos senatorum accipere debemus non tantum senatorum filios*). Leitura atual: "Por filhos de senadores devemos entender não só os filhos dos senadores", que em português fica tautológica. Leitura alternativa: "Por descendentes (*liberi*) dos senadores devemos entender não só os filhos…", que deixa visível a oposição *liberi*/*filii*.
- Observações: o aparato 2 (*senatum ins. F*, em s3) não tem nota, o que é aceitável. "Septímio Severo" (nota de s4) e "Sétimo Severo" (D. 1.16 s5) aparecem os dois no corpus; convém escolher um.

## D. 1.10 — Do ofício do cônsul

- Trechos lidos: 3.
- Conferidos contra o scan: s1-s3. O latim confere, e a nota sobre Hotman (*ex sententia consilii*) está exata.
- Corrigido: nada.
- A decidir: nada.

## D. 1.11 — Do ofício do prefeito do pretório

- Trechos lidos: 3.
- Conferidos contra o scan: s1-s3. A impressão confirma *iudicaturus*. As notas sobre os aparatos 10 e 11 estão exatas.
- Corrigido:
  - s3, nota: "restituição por inteiro (*in integrum restitutio*)" → "restituição integral". Motivo: a forma fixada no brief é "restituição integral". Tipo: forma fixada.
- A decidir: nada.
- Observações: o aparato 9 registra que *offici* é emenda de Brenkmann e que F e S leem *officio*. A tradução não o anota, sem prejuízo para o sentido. Não verifiquei a afirmação "que Monro segue" (nota de s1).

## D. 1.12 — Do ofício do prefeito da cidade

- Trechos lidos: 17.
- Conferidos contra o scan: s1-s17. O latim confere. As notas dos aparatos 3, 4, 6, 9 e 11 estão exatas.
- Corrigido: nada.
- A decidir:
  - s8 (*praemio accepto operam dedisse ut non idoneus tutor alicui daretur*).
    - Leitura A, a atual: "fizeram com que não se desse a alguém um tutor idôneo". É a de García del Corral e de Scott ("to prevent a suitable guardian from being appointed").
    - Leitura B: "fizeram com que se desse a alguém um tutor inidôneo", tomando *non idoneus* como bloco, e é a de Otto-Schilling-Sintenis ("ein untauglicher Vormund bestellt werde"). Na finalidade negativa, o latim pediria antes *ne*, o que favorece B.
    - Cheguei a corrigir para B e desfiz a correção depois do cotejo.
- Observações: em s7 ("pode julgar", *audire potest*), "conhecer" seria mais literal, mas a forma atual é aceitável.

## D. 1.13 — Do ofício do questor

- Trechos lidos: 5.
- Conferidos contra o scan: s1-s5. O latim confere (*Fenestella*). As notas dos aparatos 15 e 16 estão exatas.
- Corrigido: nada.
- A decidir: nada.
- Observações: em s4, "do direito de dar o voto" acrescenta "direito de" a *sententiae dicendae*. É leve; pode ficar.

## D. 1.14 — Do ofício dos pretores

- Trechos lidos: 4.
- Conferidos contra o scan: s1-s4. As notas dos aparatos 19, 21 e 22 estão exatas.
- Corrigido: nada.
- A decidir: nada.
- Observações: há duas variantes do aparato sem nota, ambas menores. O aparato 18 registra *ad edictum* em F¹ na inscrição de 1.14.3, e o aparato 20 registra *prome* em F por *Romae*.

## D. 1.15 — Do ofício do prefeito dos vigias

- Trechos lidos: 9.
- Conferidos contra o scan: s1-s9. As notas dos aparatos 5 e 6 estão exatas. A nota sobre *hamis* (Otto e Scott, "ganchos") foi conferida no apoio.
- Corrigido:
  - s1, corpo e nota: "família pública" / "famílias privadas" → "escravaria pública" / "escravarias privadas". Motivo: a forma fixada no brief é *familia* (escravos) = "escravaria". Tipo: forma fixada.
- A decidir: nada.
- Observação para o coordenador: na impressão (p. 14), a lei de Ulpiano que o arquivo trata como 1.15.4 (s9) está numerada **5**, e não vi nenhuma lei 4 impressa entre as duas. Na numeração corrente, a lei é D. 1.15.4. Não mexi na referência.

## D. 1.16 — Do ofício do procônsul e do legado

- Trechos lidos: 35.
- Conferidos contra o scan: s1-s11, s13-s16, s21-s35. Foram vistos os aparatos 9, 11, 12, 15, 17 e 18 da p. 14 e os aparatos 2-13 da p. 15.
- Corrigido:
  - s17: "conceder feriados" → "conceder férias". Motivo: a forma fixada é *feriae* = "férias". Tipo: forma fixada.
  - s24: "castigo de pauladas" → "castigo de varas". Motivo: *fustium castigatio* aparece como "varas" em D. 1.12 e D. 1.15, e a forma foi uniformizada. Tipo: forma fixada (uniformidade).
  - s21, nota: "esta passagem, na *geminatio* de D. 50.17.71, vem atribuída ao livro 2" → "O § 1 desta lei repete-se em D. 50.17.71, onde a inscrição traz o livro 2 da mesma obra; o aparato julga essa a lição certa". Motivo: o aparato 6-7 da p. 15 diz "l. 9 § 1 = D. 50,17,71; secundo D. l. gem. recte". A geminação é do § 1 (s22), não do *pr.*. Tipo: nota.
- A decidir:
  - s30 (*animadvertendi … ius*). Leitura atual: "o direito de punir com a morte", que acrescenta "com a morte" e é sustentada por Scott ("to execute"). Leitura alternativa, mais literal: "o direito de punir", deixando o sentido capital só na nota que já existe.
- Observações: a nota de s13 escreve "conjectura", e as demais notas do bloco escrevem "conjetura". As duas grafias são válidas; convém uniformizar.

## D. 1.17 — Do ofício do prefeito augustal

- Trechos lidos: 1.
- Conferidos contra o scan: s1 (início, p. 15).
- Corrigido: nada.
- A decidir: nada.

## D. 1.18 — Do ofício do governador

- Trechos lidos: 32.
- Conferidos contra o scan: s1-s3, s6-s15 (parte), s16-s23 e s30-s32. Foram vistos os aparatos das p. 15-17 (15-21; 1-20; 1-3).
- Corrigido:
  - s3, nota: "a lição *si quis malum commiserit* da edição de Haloander" → "dos manuscritos da tradição secundária (*S*), contra a Florentina e as Basílicas". Motivo: o aparato 17 da p. 15 diz "si quis malum commiserit S contra FB", e Haloandro não é a fonte dessa lição. Tipo: nota.
  - s26: "se prometa, com caução, comparecer em juízo" → "se prometa, mediante satisdação, comparecer em juízo". Motivo: o latim é *satisdato*, e a forma fixada para *satisdatio* é "satisdação". Tipo: forma fixada.
- A decidir: nada.
- Observações: há variantes do aparato sem nota, todas menores. São o aparato 1 da p. 16 (*prohibitam scr. cum B*, em s10) e o aparato 7 da p. 16 (*proconsulis* em F, na inscrição de Próculo, s21).

## D. 1.19 — Do ofício do procurador de César ou do racional

- Trechos lidos: 7.
- Conferidos contra o scan: s1-s5. A nota do aparato 6 (*procuratores*, ὁ καθολικός) está exata.
- Corrigido:
  - s3, nota: "a imissão na herança" → "a imiscuição na herança". Motivo: "imissão" é o termo fixado para a *missio in possessionem*, e aqui se trata de *se miscere*. Tipo: nota.
- A decidir:
  - s1: deve-se ou não acrescentar uma nota sobre a conjetura do aparato 5 da p. 17 (*si ab eo comprobantur, atque si a Caesare gesta essent ita sunt*)? Ela muda a construção: "o que o procurador fez, se ele [César] aprova, vale como feito por César". A tradução atual segue a lição impressa e pode ficar como está.

## D. 1.20 — Do ofício do jurídico

- Trechos lidos: 2.
- Conferidos contra o scan: s1-s2 (p. 17, conferência sumária).
- Corrigido: nada.
- A decidir: nada.

## D. 1.21 — Do ofício daquele a quem foi delegada a jurisdição

- Trechos lidos: 9.
- Conferidos contra o scan: s1-s7.
- Corrigido:
  - s4: "quiserem vender imóveis" → "quiserem vender prédios". Motivo: *praedia*, cuja forma fixada é *praedium* = "prédio". Tipo: forma fixada.
- A decidir: nada.
- Observações: a inscrição traz só *Macer* e foi vertida como "Macro". No corpus, *Macer* aparece ora como "Macro", ora como "Emílio Macro". O brief só fixa "Emílio Macro" para *Aemilius Macer*; seria bom uniformizar.

## D. 1.22 — Do ofício dos assessores

- Trechos lidos: 6.
- Conferidos contra o scan: s5-s6 e o aparato 12-13 da p. 17. A nota sobre *consiliario* (Brencmann) está exata.
- Corrigido: nada.
- A decidir: nada.

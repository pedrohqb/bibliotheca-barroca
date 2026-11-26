# Revisão independente: Digesto, livro II (D. 2.1 a 2.15)

Revisor: Claude, sem participação na tradução, segundo `docs/revisao-digesto.md`. Data: 2026-11-26. Trabalho dividido em quatro blocos, revistos pelo mesmo roteiro e consolidados aqui: D. 2.1-2.7, D. 2.8-2.13, D. 2.14 e D. 2.15 (este junto com D. 3.1-3.2). Os arquivos grandes foram lidos só pelo gateway RBSA (escopo `bibliotheca-digesto`).

Método: tradução lida contra o latim em todos os trechos. Latim conferido contra a impressão de 1889, com o aparato, muito acima da amostra de 1 em 5: D. 2.1-2.13 e D. 2.15 inteiros, e cerca de 70 dos 134 trechos de D. 2.14. Cotejo com as traduções de apoio (Hulot, Otto-Schilling-Sintenis, Vignali, García del Corral, Scott) nos pontos suspeitos e nas notas que as citam. Não foram alterados `estado`, `processo`, glossário, catálogo, `tools/` nem `docs/` (salvo este relatório).

## Resumo

- **Trechos lidos:** 448. Por título: 2.1, 29; 2.2, 13; 2.3, 5; 2.4, 44; 2.5, 4; 2.6, 4; 2.7, 17; 2.8, 37; 2.9, 8; 2.10, 13; 2.11, 35; 2.12, 14; 2.13, 42; 2.14, 134; 2.15, 49.
- **Erros corrigidos:** 44, todos em `pt/`. O latim confere com a impressão em tudo o que foi visto, e não houve erro de sentido.

| Tipo | Nº | Onde |
|---|---|---|
| Sentido | 0 | — |
| Latim | 0 | — |
| Forma fixada | 27 | 2.1 s7, s11, s12, s14 e 2.7 s8, s11 (*dolo malo* = dolo mau); 2.2 s6 (ter por válido); 2.4 s7, s8 (fora do casamento), s12 (prejulgamento), s19 (coletividade, agente), s35 (junto ao ofício); 2.7 s2 (abandono noxal); 2.9 s8 (estatulíbero); 2.11 s22, s23 (a serviço do Estado); 2.12 s5 (dano causado injustamente); 2.14 s21, s31, s33, s43, s112 (títulos de obras em itálico, 6) |
| Registro | 5 | 2.14 s36, s81, s83 (mesóclises); s114, s130 (contrações arcaizantes) |
| Nota | 12 | 2.1 s3, s23; 2.4 s10, s24; 2.5 s4; 2.11 s29; 2.14 s1, s18, s26, s29, s104, s113 |

- **Pontos a decidir:** 9 (detalhes nas seções):
  1. D. 2.3 s2 — inserção de *obtemperasse* (aparato): só na nota, como hoje, ou também no corpo entre colchetes.
  2. D. 2.4 s28 — *actor*: "representante" (atual) ou "agente" (forma fixada para o *actor* de coletividade).
  3. Título de D. 2.6 (*satis … dent*): "deem fiança" (atual) ou "prestem satisdação" (forma fixada). O título também está em `catalogo.json`.
  4. *pro rei qualitate*: "condição do réu" em D. 2.6 s1 e "qualidade da causa" em D. 2.8.5.1; escolher uma.
  5. D. 2.13 s22 — acrescentar ou não nota sobre a proposta *in sequentibus* por *in quibus* (aparato 2 da p. 142).
  6. D. 2.13 s30 — *locum actio non habebit neque augmentum neque deminutionem*: a tradução segue o sentido emendado e omite *locum … non habebit* sem marca; alternativa: traduzir o impresso e deixar a emenda na nota.
  7. D. 2.14 s1 — *fidei humanae*: "boa-fé humana" (atual, com Scott) ou "fé humana" (García del Corral, Vignali).
  8. D. 2.14 s23, s70 e corpus — "Basílicos" ou "Basílicas": as duas formas correm na obra (Basílicos em d03-03, d07-08, d09-02, d10-02, d11-06; Basílicas em d07-04, d11-03, d12-01, d12-02 e no relatório do livro I).
  9. D. 2.15 s34 — *locupletior factus*: forma fixada "enriquecido", mas o corpus usa sistematicamente "ficou mais rico" (D. 3.5 etc.); alinhar a obra ou rever a forma fixada.
- **Para o coordenador (uniformidade):**
  - Obras novas nas inscrições ou no corpo: *adsessoria* (Puteolano) = *Assessórios*; *lectionum* (Pomponio) = *Leituras* (a tabela só tem "Leituras várias"); *Semestria* = *Semestres*. Nomes: Papírio Justo, Fúrio Antiano.
  - Termos em uso coerente, fora do brief: *apud officium* = junto ao ofício; *locuples* = abonado; *venia edicti* = licença do edito; *ius anulorum* = direito dos anéis; *natalibus restitutus* = restituído aos natais; *manus iniectio* (cláusula da venda) = direito de apreensão; *sistere aliquem* = apresentar em juízo; *in eadem causa* = na mesma condição; *fori praescriptio* = exceção de foro; *argentaria* = banca; *nuda pactio* = pacto nu; *pactum in rem / in personam* = pacto real / pessoal; *exceptio pacti conventi* = exceção de pacto convencionado; *mensularius* e *nummularius* = cambista; *magister* (de sociedade) = gerente; *praescriptis verbis* = de palavras prescritas.
  - *dolo malo* estava como "com dolo" em D. 2.1 e 2.7; uniformizado para "dolo mau".
  - *magis est* aparece como "é melhor que" (D. 2.15 s17, D. 2.8, D. 4.2) ao lado de "prevalece" e "é mais correto"; convém fixar.
  - Fora do livro, D. 4.4 ainda traz "a serviço da república" (não tocado).
- **Validador:** `node tools/validar.mjs` com 0 erros; no livro II restam só avisos de *ius* em *in ius vocare* / *in iure*, já explicados em nota (D. 2.4, 2.5, 2.7, 2.8 s11, 2.12 s10). D. 2.14 sem avisos.
- Imagens do scan apagadas (`trabalho/rev-0203`).

## Decisões aplicadas

Decisões do coordenador sobre os 9 pontos a decidir, aplicadas em 2026-11-26 (só em `pt/`; o latim não mudou):

1. D. 2.3 s2: a inserção de *obtemperasse* fica só na nota. Sem alteração (já era assim).
2. D. 2.4 s28: "defensor ou representante" passou a "defensor ou agente" (*actor*).
3. Título de D. 2.6: "Que os chamados a juízo vão ou prestem satisdação ou caução" (antes "deem fiança ou caução"); o rótulo da nota de s1 passou a "Prestar satisdação" (*satis dare*). `catalogo.json` não foi tocado e ainda traz o título antigo.
4. *pro rei qualitate* = "conforme a natureza da causa": D. 2.6 s1 (antes "conforme a condição do réu") e D. 2.8 s11 (D. 2.8.5.1, antes "em relação à qualidade da causa"), corpo e notas; a nota de D. 2.6 s1 registra a leitura de Monro ("do réu").
5. D. 2.13 s22: sem nota.
6. D. 2.13 s30: traduzido o texto impresso, "a ação não terá lugar, nem aumento nem diminuição"; a nota explica a emenda (a ação subsiste, sem aumento nem diminuição) e quem a segue (Monro, Hulot).
7. D. 2.14 s1: "boa-fé humana" passou a "fé humana", corpo e nota.
8. "Basílicos" nos livros II-III: "Basílicas" passou a "Basílicos" em D. 2.4 s38 (nota, em itálico como estava) e D. 2.11 s29 (nota). D. 2.14, 2.15, 3.2 e 3.3 já traziam "Basílicos".
9. *locupletior factus* = "enriquecido": D. 2.15 s34 ("ficou mais rico", duas vezes, passou a "ficou enriquecido"). Pela mesma decisão, também em D. 3.5 (s7, s18, s21, s24, s87; ver o relatório do livro III).

Fora do livro: em D. 4.4 (`pt/d04-04.md`), "ausentes além-mar a serviço da república" passou a "a serviço do Estado" (*rei publicae causa absunt*), forma fixada; era a única ocorrência no título.

## D. 2.1 — Da jurisdição

- Trechos lidos: 29 (s1–s29), todos contra o latim.
- Conferidos contra o scan: s1–s29, todos (p. 18–19, leaf 133–134). Li o aparato da p. 18 (notas 1–13) e o da p. 19 (nota 1).
- Cotejo: alemão em s14 (*notat*: "rügt" confere com a nota).
### Corrigido
- s3, nota — antes: "Cujácio lia 'livro único' na inscrição"; depois: "Cujácio propunha 'livro único' (*singulari*) na inscrição"; motivo: o aparato (n. 2, "singulari Cuiacius") registra uma conjectura de Cujácio, não uma leitura de manuscrito; tipo: nota.
- s23, nota — antes: "Cujácio lia *in praesentem*"; depois: "Cujácio propunha *in praesentem*"; motivo: o mesmo (n. 13, "in praesentem Cuiacius"); tipo: nota.
- s7 — antes: "Se alguém, com dolo, danificar"; depois: "com dolo mau"; motivo: forma fixada *dolus malus* = dolo mau; tipo: forma fixada.
- s11 — antes: "Faz-se menção do dolo"; depois: "do dolo mau"; tipo: forma fixada.
- s12 — antes: "sem dolo … com dolo … com dolo"; depois: "sem dolo mau … com dolo mau … com dolo mau"; tipo: forma fixada.
- s14 — antes: "se eles, com dolo, fizeram"; depois: "com dolo mau"; tipo: forma fixada.
### A decidir
- nada.
### Observações
- s6, nota "Alguns editores suprimem o 'e'": o aparato (n. 5a) diz só "et *del.*", isto é, uma proposta de supressão. A nota é aceitável.
- s7, nota sobre "cinquenta" em Haloandro, Scott e Hulot: não está no aparato de 1889. Não a conferi nas traduções e não mexi.
- Variantes do aparato que não têm nota, todas menores: n. 3 (*merum est aut mixtum est* em F²), n. 5 (*haberet* F¹), n. 7–11 (s17–s18) e n. 12 (*praetor vel proconsul scr.*, em s21).

## D. 2.2 — Que cada um se sujeite ao mesmo direito que tiver estabelecido contra outro

- Trechos lidos: 13 (s1–s13), todos contra o latim.
- Conferidos contra o scan: s1–s13, todos (p. 19), com o aparato n. 2–10.
- Cotejo: não foi preciso.
### Corrigido
- s6 — antes: "ou o ratifiquei"; depois: "ou o tive por válido"; motivo: forma fixada *ratum habere* = ter por válido; tipo: forma fixada.
### A decidir
- nada.
### Observações
- s2, nota "alguns manuscritos trazem *potestatemve*": o aparato (n. 4) atribui a leitura a S, a tradição secundária. A nota é exata no essencial.
- s5: o aparato n. 5 registra *ad edictum ins. F* (*iniquum ad edictum ius*). Não há nota, e não faz falta.

## D. 2.3 — Se alguém não obedecer a quem declara o direito

- Trechos lidos: 5 (s1–s5), todos contra o latim.
- Conferidos contra o scan: s1–s5, todos (p. 19), com o aparato n. 11–13.
- Cotejo: as afirmações da nota de s2 sobre as traduções foram tomadas como estão. O aparato confere: n. 13, "obtemperasse *ins.*".
### Corrigido
- nada.
### A decidir
- s2: o corpo traduz o texto impresso, que sem a inserção fica contraditório: "não obedeceu … se … permitiu que fosse conduzida". A nota explica a inserção proposta pelo aparato.
  - Leitura A (atual): manter o corpo sem a inserção e deixar tudo na nota.
  - Leitura B: pôr "[considera-se que obedeceu]" no corpo, entre colchetes, como em D. 1.2 s26 (decisão 3 do livro I), porque a lacuna está no texto e a nota a explica.
### Observações
- s3, *dominus*: "o representado" é aceitável.

## D. 2.4 — Do chamamento a juízo

- Trechos lidos: 44 (s1–s44), todos contra o latim.
- Conferidos contra o scan: s1–s44, todos (p. 19–21), com o aparato n. 14–17 da p. 19, n. 1–14 da p. 20 e n. 1–3 da p. 21.
  - Confere a nota de s11 (n. 2–3: *permittetur* F^b, *vocabit dett.*).
  - Confere a nota de s38 (n. 13: *ab ianua* de Cujácio *ex B*, *abinea* F, *ab vinea* S).
  - Confere a nota de s7 (n. 17: *tantum Hal.*).
  - Confere a nota de s35 (n. 12: Charondas).
- Cotejo: alemão em s24.
### Corrigido
- s7 — antes: "mesmo que o filho seja de pai incerto"; nota "De pai incerto (*vulgo quaesitus*): … sem pai conhecido"; depois: "mesmo que o filho tenha sido gerado fora do casamento"; nota "Gerado fora do casamento (*vulgo quaesitus*; literalmente, 'obtido ao acaso, do povo'): … sem pai certo"; motivo: decisão do coordenador, *vulgo concepti* = concebidos fora do casamento, aplicada à expressão gêmea; tipo: forma fixada.
- s8 — antes: "mesmo que tenha concebido de pai incerto"; depois: "mesmo que tenha concebido fora do casamento"; motivo: *vulgo conceperit*, mesma decisão; tipo: forma fixada.
- s10, nota — antes: "ligado pelo mesmo pátrio poder"; depois: "pelo mesmo poder paterno"; motivo: forma fixada *patria potestas* = poder paterno; tipo: nota.
- s12 — antes: "num juízo prejudicial" e nota "Juízo prejudicial (*praeiudicium*)"; depois: "num prejulgamento" e "Prejulgamento (*praeiudicium*)"; motivo: forma fixada *praeiudicium* = prejulgamento; tipo: forma fixada.
- s19 — antes: "contra a república ou a corporação … o representante por eles constituído"; depois: "contra a república ou a coletividade … o agente por eles constituído"; motivo: *universitatem* e *actorem*, formas fixadas *universitas* = coletividade e *actor* (de coletividade) = agente. "Corporação" é *corpus*, que aparece no mesmo trecho e também era vertido assim; tipo: forma fixada.
- s24, nota — antes: "O alemão traduz 'bisneto' (*Urgrossenkel*)"; depois: "O alemão diz 'além do *Urgrossenkel*'"; motivo: *Urgrossenkel* não é "bisneto" (*Urenkel*); o alemão diz "über den Grad des Urgrossenkels hinausgehen"; tipo: nota.
- s35 — antes: "prestou caução perante a secretaria … perante a secretaria" e nota "Secretaria (*officium*)"; depois: "junto ao ofício" (duas vezes) e nota "Junto ao ofício (*apud officium*): perante o pessoal administrativo do magistrado (cf. D. 2.8.7.2)"; motivo: forma fixada *officium* = ofício; *apud officium* é "junto ao ofício" em D. 2.8 e D. 10.4; tipo: forma fixada.
### A decidir
- s28, *vel actor interveniat patronus*: "como … representante".
  - Leitura A (atual): manter "representante", porque o patrono pode intervir como representante de qualquer um.
  - Leitura B: "agente", a forma fixada para o *actor* de coletividade, que é o sentido técnico mais provável ao lado de *tutor*, *curator* e *defensor*.
### Observações
- s10: "O filho" é sujeito acrescentado, porque o latim não o explicita. É necessário e pode ficar.
- s14: a nota sobre a divergência de Otto-Schilling-Sintenis foi conservada sem cotejo novo.
- O aparato n. 1 da p. 20 (*habeat Hal.*, em s11) e o n. 8 (*sed et Hal.*, em s18) não têm nota. São menores.

## D. 2.5 — Se alguém, chamado a juízo, não for, ou se alguém chamar quem, pelo edito, não devia chamar

- Trechos lidos: 4 (s1–s4), todos contra o latim.
- Conferidos contra o scan: s1–s4, todos (p. 21), com o aparato n. 4.
- Cotejo: alemão em s4.
### Corrigido
- s4, nota — antes: "Otto, Schilling e Sintenis traduzem 'condição do incerto' (*condictio incerti*)"; depois: "traduzem '*condictio* do incerto' (*Condiction des Unbestimmten*)"; motivo: "condição" verte mal *condictio*, que é uma ação; tipo: nota.
### A decidir
- nada.
### Observações
- s1, nota: o termo citado é "*fideiussor iudicio sistendi causa*", mas o latim do trecho traz *in iudicio sistendi causa*. A diferença é mínima.

## D. 2.6 — Que os chamados a juízo vão ou deem fiança ou caução

- Trechos lidos: 4 (s1–s4), todos contra o latim.
- Conferidos contra o scan: s1–s4, todos (p. 21), com o aparato n. 5–7.
  - Confere a nota de s3 (n. 6, "quivis *ins.*").
  - Confere a nota de s4 (*quinquagensimo octavo*).
- Cotejo: não foi preciso.
### Corrigido
- nada.
### A decidir
- Título (*satis vel cautum dent*): hoje "deem fiança ou caução", e a nota de s1 explica *satis dare* como "dar fiança".
  - Leitura A (atual): manter.
  - Leitura B: "prestem satisdação ou caução", pela forma fixada *satisdatio/satisdare* = satisdação/prestar satisdação, que é a usada em D. 2.8.
  - Se o título mudar, `catalogo.json` acompanha.
- s1, *pro rei qualitate*: aqui "conforme a condição do réu"; em D. 2.8.5.1, "em relação à qualidade da causa". As duas notas citam a leitura contrária (Hulot aqui, Monro lá).
  - Leitura A: uniformizar em "réu".
  - Leitura B: uniformizar em "causa".
  - Uniformizar é preferível; a escolha fica com o coordenador.
### Observações
- O aparato n. 7 (*eos del.*, em s4) não tem nota, e não faz falta.

## D. 2.7 — Que ninguém subtraia à força quem for chamado a juízo

- Trechos lidos: 17 (s1–s17), todos contra o latim.
- Conferidos contra o scan: s1–s17, todos (p. 21), com o aparato n. 8–11.
- Cotejo: não foi preciso.
### Corrigido
- s2 — antes: "sem a entrega noxal" e nota "(*noxae deditio*, 'entrega noxal')"; depois: "sem o abandono noxal" / "'abandono noxal'"; motivo: forma fixada *noxae deditio* = abandono noxal, usada em D. 2.9, 4.2, 4.3, 6.2 e 9.1; tipo: forma fixada.
- s8 — antes: "é preciso também o dolo? … ainda que não haja dolo"; depois: "dolo mau" (duas vezes); motivo: forma fixada; tipo: forma fixada.
- s11 — antes: "nem faça com dolo … sem dolo"; depois: "com dolo mau … sem dolo mau"; tipo: forma fixada.
### A decidir
- nada.
### Observações
- O aparato n. 11, em s17, diz que depois de *solvit* o resto da página está em branco em F, e que F² anotou οὐδὲν λείπει ("nada falta"). Uma nota curta seria útil, mas não a acrescentei.
- O aparato n. 9, em s6, registra a corrupção de F^a (*putat essessare*). O texto segue S, e não há nota; não faz falta.

## D. 2.8 — Dos que são obrigados a prestar satisdação, a prometer sob juramento ou que são deixados à sua própria promessa

- Trechos lidos: 37 (s1–s37), todos contra o latim.
- Conferidos contra o scan: s1–s37, todos (p. 136 c2b, p. 137 inteira, p. 138 c1a); aparato da p. 136 (n. 12–13) e da p. 137 (n. 1–13).
- Cotejo: não foi necessário (nenhuma suspeita de erro); as notas que citam o aparato conferem: s1 (n. 13 *cum pro eo … ita cavetur scr.*), s9 (n. 4 *exhiberi Hal.*), s16 (n. 5 *statuendo F*), s24 (n. 12, distinção de Cujácio).

### Corrigido
- Nada.

### A decidir
- Nada.

### Observações
- s18: o aparato (n. 7) diz que depois de *ut ex integro caveatur* "ex causa vel similia hic male omissa sunt"; a tradução não o registra. Nota possível, não indispensável.
- s34: *si unus ex tutoribus possessor fuit* vertido "seja possuidor"; o perfeito ("tenha sido") seria mais literal, sem mudança de sentido.
- s13: *libro epistularum* sem número, "no livro das Cartas": correto, a impressão não dá número.

## D. 2.9 — Como se presta caução quando se age por causa noxal

- Trechos lidos: 8 (s1–s8), todos contra o latim.
- Conferidos contra o scan: s1–s8, todos (p. 138 c1b, c2a, pe); aparato da p. 138 (n. 1–7).
- Cotejo: fr (Hulot) em s3: Hulot traduz "comme s'il s'étoit présenté d'abord", isto é, toma *venisset* de *venio*, como diz a nota.

### Corrigido
- s8 — antes: "se se prometeu apresentar um *statu liber*" / nota "*Statu liber*: o escravo…"; depois: "se se prometeu apresentar um estatulíbero" / nota "\"Estatulíbero\" (*statu liber*): o escravo…"; motivo: forma fixada no brief (*statuliber*: estatulíbero), usada em D. 5.2, 5.3, 9.4, 10.2, 12.4, 12.6; tipo: forma fixada.

### A decidir
- Nada.

### Observações
- Notas de s1 (n. 2 *debere ins.*) e s7 (n. 7, ordem inversa das orações, "fuit fere") conferem com o aparato.
- s6: o aparato (n. 6) registra *debet et Sabinus scr.*; não anotado, sem efeito no sentido.

## D. 2.10 — Daquele por obra de quem alguém deixar de comparecer em juízo

- Trechos lidos: 13 (s1–s13), todos contra o latim.
- Conferidos contra o scan: s1–s13, todos (p. 138 c2a, c2b, pe; p. 139 c1a); aparato da p. 138 (n. 8–12).
- Cotejo: fr (Hulot) em s11–s12: Hulot entende de fato o promitente e o seu fiador ("celui qui a promis … et la caution qu'il avoit donnée"), como diz a nota.

### Corrigido
- Nada.

### A decidir
- Nada.

### Observações
- s2 (*retinuit*: n. 9 *retinuerit FaS*) e s3 (*si quis*: n. 10 *si quid F*): o latim segue a impressão; as variantes não mudam o sentido e não precisam de nota.

## D. 2.11 — Se alguém não cumprir as cauções prestadas para o comparecimento em juízo

- Trechos lidos: 35 (s1–s35), todos contra o latim.
- Conferidos contra o scan: s1–s35, todos (p. 139 c1a–c2b, pe; p. 140 c1a, c1b, c2a, pe); aparato da p. 139 (n. 1–17) e da p. 140 (n. 1–10).
- Cotejo: não foi necessário; notas conferidas contra o aparato: s6 (n. 5, Cujácio *non dandam*), s10 (n. 10 *temporis ins.*), s13 (n. 12, Hotman), s19 (n. 17 *qui impediit vel similia exciderunt*), s27 (n. 3 *del.*), s29 (n. 4).

### Corrigido
- s22, s23 — antes: "a serviço da república" (3 ocorrências); depois: "a serviço do Estado"; motivo: forma fixada no brief (*rei publicae causa abesse*: estar ausente a serviço do Estado), usada em D. 4.1, 4.6, 4.8; tipo: forma fixada.
- s29, nota — antes: "O aparato registra a proposta de deslocar 'antes da contestação da lide' para depois de 'tornada exigível a estipulação', que Monro adota"; depois: "O aparato indica que, segundo as Basílicas, 'antes da contestação da lide' deve ir para antes de 'morreu' (*ante mortuus est*), leitura que Monro adota"; motivo: o aparato (n. 4) diz *ante litem contestatam ante mortuus est collocandum esse indicant B*: não é proposta de editor, é indicação das Basílicas, e o ponto de inserção é antes de *mortuus est*; tipo: nota.

### A decidir
- Nada.

### Observações
- s27, nota: "o aparato indica que a oração deve ser suprimida, como glosa" — o aparato diz só *del.*; "como glosa" é inferência razoável.
- D. 3.3 e D. 4.4 (fora do bloco) também trazem "a serviço da república"; convém uniformizar.

## D. 2.12 — Das férias, das dilações e dos diversos tempos

- Trechos lidos: 14 (s1–s14), todos contra o latim.
- Conferidos contra o scan: s1–s14, todos (p. 140 c2a, c2b, pe; p. 141 c1a, c1b, pe); aparato da p. 140 (n. 11–17) e da p. 141 (n. 1–4).
- Cotejo: não foi necessário; nota de s4 (n. 16 *vel de f. c. libertate praestanda scr.*) confere.

### Corrigido
- s5 — antes: "de dano injusto" / nota "\"Dano injusto\" (*damnum iniuria*)"; depois: "de dano causado injustamente" / nota "\"Dano causado injustamente\" (*damni iniuriae*)"; motivo: forma fixada no brief (*damnum iniuria datum*: dano causado injustamente), a mesma usada em D. 2.13 s39; e o latim do trecho é *damni iniuriae*, não *damnum iniuria*; tipo: forma fixada.

### A decidir
- Nada.

### Observações
- s8: o aparato (n. 1) propõe suprimir *causa* (*messis vindemiarumque causa*); sem nota, sem efeito no sentido.

## D. 2.13 — Da exibição

- Trechos lidos: 42 (s1–s42), todos contra o latim.
- Conferidos contra o scan: s1–s42, todos (p. 141 c1b, c2a, c2b, pe; p. 142 c1a, c1b, c2a, c2b, pe), inclusive o grego de s28 (δεύτερον, πάλιν); aparato da p. 141 (n. 5–20) e da p. 142 (n. 1–12).
- Cotejo: não foi necessário; notas conferidas contra o aparato: s2 (n. 7 *vel indicando scr.*), s9 (n. 13, Muret *cuique*), s10 (n. 15 *meumque scr.*), s19 (n. 20 *debendi ins.*), s30 (n. 7, Antoine Favre).

### Corrigido
- Nada.

### A decidir
- s30 (*locum actio non habebit neque augmentum neque deminutionem*). Leitura A (atual): "a ação não admitirá nem aumento nem diminuição", isto é, o sentido emendado (a ação subsiste, fixa), com nota sobre a corrupção e as propostas de Favre e da edição. Leitura B: traduzir o texto impresso, que diz literalmente "a ação não terá lugar, nem aumento nem diminuição", e deixar o sentido emendado só na nota. A atual omite *locum … non habebit* sem marcá-lo no corpo.
- s22 (*in quibus Titii ratio scripta est*): a edição propõe *in sequentibus* (n. 2 da p. 142), "e nas seguintes está escrita a conta de Tício". Leitura A: manter sem nota. Leitura B: nota curta com a proposta, que torna a frase mais clara.

### Observações
- s8, nota "a fonte digital lê *Mauricius*": o aparato (n. 11 da p. 141) acrescenta que Haloandro lê *Modestinus*; poderia entrar na mesma nota.
- s29, nota sobre *exhibet*: útil, porque o resto do título usa *edere*.

## D. 2.14 — Dos pactos

- Trechos lidos: 134 (s1–s134), todos contra o latim.
- Conferidos contra o scan (pp. 27–33 da impressão, archive n142–n148): s1–s33, s64–s75, s84–s93, s113–s116, s118–s123 e s130–s134, ou seja, cerca de 70 trechos, mais da metade. Li o aparato das pp. 27–32 e conferi as notas que o citam: s6 (*posse del.*, n. 1), s13 (*pro pace*), s17 (glosa de συνάλλαγμα), s21 (*pactiones dett.*), s23 (*non del. secundum B*), s28 (*ne iudicati prove iudicato*), s31 (*nec de ea re iusiurandum*), s55 (*quin prodesse*), s64 (Rücker), s70 (*alii* emendado pelas Basílicas; sem parágrafo na impressão), s77 (*videtur* em Haloandro; *videmurque eo iure uti*), s78 (*agere*/*facere*), s84 (*actum*), s96 (D. 23.4.10), s100 (*remitti S recte*), s104 (*iudicatis/iudicati*), s109 (*venditor dett.*), s110 (D. 26.7.59), s112 (C. 6.54.2), s113 (*posteriori*), s114 (*id est scriptum del. Hal.*). Todas conferem, salvo s18 e s104 (corrigidas abaixo). Também conferem com a impressão *tantandem* (s92), *octaginta* (s114), *pactus sit* (s118), *insuptiliter* (s21) e o título impresso "XIIII".
- Cotejo: es (García del Corral), it (Vignali/Gotofredo), en (Scott) em s1; es e it em s18; it em s36 (a nota sobre Vignali, "chiamato in giudizio", confere).

### Corrigido
- s36 — antes: "contar-se-ão como um só"; depois: "serão contados como um só"; motivo: mesóclise; tipo: registro.
- s81 — antes: "far-se-ia pela exceção que me seria oposta que eu só devesse exigir os outros dez"; depois: "a exceção que me seria oposta faria com que eu só devesse exigir os outros dez"; motivo: mesóclise e construção confusa; tipo: registro.
- s83 — antes: "opor-se-me-á a exceção de pacto"; depois: "a exceção de pacto me será oposta"; motivo: mesóclise; tipo: registro.
- s114 — antes: "eu ta restituirei"; depois: "eu a restituirei a ti"; motivo: contração pronominal arcaizante (como o *mo* corrigido em D. 1.7); tipo: registro.
- s130 — antes: "e tu mas tivesses prestado"; depois: "e tu as tivesses prestado a mim"; motivo: o mesmo; tipo: registro.
- s21, s31, s33, s43, s112 — títulos de obras citados no corpo passaram ao itálico: *Comentários ao edito*, *Leituras*, *Digestos* (2), *Assessórios*, *Semestres*; motivo: regra do brief ("Títulos de obras citados no corpo do texto vão em itálico"); tipo: forma fixada.
- s1, nota — antes: "(§ 7)"; depois: "(D. 2.14.7.7)"; motivo: remissão ambígua; tipo: nota.
- s26, nota — antes: "(§ 22)"; depois: "(D. 2.14.7.7)"; motivo: "§ 22" é o número do trecho, não do parágrafo; não há § 22 nesta lei; tipo: nota.
- s29, nota — antes: "(cf. § 17.1)"; depois: "(cf. D. 2.14.17.1)"; motivo: remissão ambígua; tipo: nota.
- s18, nota — antes: "O aparato registra que Haloandro lê, por erro, *ut maleficium fiat*"; depois: "García del Corral anota que Haloandro lê, por erro, *ut maleficium fiat*"; motivo: o aparato da impressão de 1889 (p. 28) não traz essa variante; ela vem da nota 5 de García del Corral (e de Gotofredo, na edição de Vignali); tipo: nota.
- s104, nota — antes: "a lição *iudicati*, de outro manuscrito"; depois: "a lição *iudicati*, do terceiro corretor da Florentina (F³; nota 10 da edição)"; motivo: o aparato diz "iudicatis F¹P cum B (Anon.), iudicati F³"; tipo: nota.
- s113, nota — antes: "\"Obrigara-se por escrito\" (*caverat*)"; depois: "\"Se obrigara por escrito\""; motivo: a nota tem de citar a forma que está no corpo ("se obrigara por escrito"); tipo: nota.

### A decidir
- s1 (*quid enim tam congruum fidei humanae*): a tradução diz "boa-fé humana", e a nota avisa que não se trata da *bona fides* técnica.
  - Leitura A (atual): manter "boa-fé humana" com a nota.
  - Leitura B: "fé humana" ou "lealdade humana", sem acrescentar "boa". É o que fazem García del Corral ("fe humana") e Vignali ("fede umana"); Scott traz "good faith of mankind". A nota poderia então ser encurtada.
- "Basílicos" (s23, s70): o corpus divide-se entre "Basílicos" (d03-03, d07-08, d09-02, d10-02, d11-06) e "Basílicas" (d07-04, d11-03, d12-01, d12-02, e o relatório do livro I).
  - Leitura A: manter "Basílicos" aqui.
  - Leitura B: uniformizar tudo em "as Basílicas", a forma corrente em português.

### Observações
- s110: "o tutor transigiu com a maior parte dos credores que recebessem certa porção" (*decidit, ut*). A regência é forçada. "Acordou com a maior parte dos credores que recebessem" seria mais natural, mas *decidere* é termo técnico de transação, e por isso não mexi.
- s30: "não deixa de ser cumprido como se fosse feito contra a forma do direito" é correto, mas um pouco ambíguo. Fica mais claro assim: "não se deve deixar de cumprir, como se tivesse sido feito contra a forma do direito". Não alterei.
- s91: a nota sobre *puis* trata de um erro da fonte digital que a impressão não tem. É inofensiva, mas de pouca utilidade para o leitor.
- s70: o aparato n. 5 da p. 30 (*pro reo* emendado segundo as Basílicas; F e S leem *pro eo*) não tem nota. A variante é menor.
- s92: *tantandem* (por *tantundem*) está assim na impressão. É erro tipográfico evidente e não tem nota; a tradução segue o sentido correto. Uma nota curta, como manda o brief, seria possível.
- s114: a impressão traz *octaginta* (por *octoginta*), e assim está no arquivo. Também não tem nota.
- Inscrições: os autores, as obras (pela tabela) e os números dos livros conferem em todas as leis lidas. Os *Idem* foram resolvidos corretamente, inclusive em D. 2.14.51, onde o aparato registra *ulpianus* em F¹S.
- Validador: `node tools/validar.mjs`, 0 erros; nenhum aviso em d02-14.
- Imagens do scan apagadas da pasta de trabalho.

## D. 2.15 — Das transações

- Trechos lidos: 49 (s1–s49), todos contra o latim.
- Conferidos contra o scan: s1–s49, todos (p. 148–150); aparato das três páginas lido (p. 148, n. 1–16; p. 149, n. 1–10; p. 150, n. 1–7).
- Cotejo: as notas que citam o aparato conferem: s5 (*eo testamento scr.*, n. 5), s7 (*regitur scr.*, n. 6), s8 (lugar gêmeo D. 29.3.1.1, n. 7–8), s17 (*a legatario scr.*, n. 16), s37 (*transactio del.*, n. 7), s41 (reconstrução da edição, n. 10, transcrita com exatidão), s46 (*id obs. … convenisset om. F*, n. 5). As inscrições conferem com a impressão; o *Idem* de s38, s42 e s43 é Ulpiano.

### Corrigido
- Nada.

### A decidir
- s34 (*locupletior factus*): "ficou mais rico", "ficou mais rico" e "enriquecer" (*esse locuples*). Leitura A: manter, como no resto da obra (D. 3.5 usa "ficou mais rico" cinco vezes). Leitura B: "se enriqueceu", pela forma fixada "enriquecido". Não corrigi para não abrir divergência com os títulos já publicados.

### Observações
- s17 (*magis est ut transigere Titius possit*): "é melhor que Tício possa transigir". O sentido técnico é "a opinião preferível é que"; a mesma fórmula aparece em D. 2.8 e D. 4.2 e não é erro, mas convém fixar uma forma.
- s23 (*numquid circumvenire velit*): "se não quer enganar". É idiomático ("ver se não quer"), mas pode ser lido como negação; "se porventura quer enganar" seria mais claro. Não alterei.
- s29: "sem conhecer da causa" (*citra causae cognitionem*); a forma fixada para *causa cognita* é "com conhecimento de causa". A variação é aceitável na construção negativa.
- s12: a nota geral sobre *transactio* está em s12, e não na primeira ocorrência (s1). Seria mais natural em s1.

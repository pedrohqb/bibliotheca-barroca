# t2-lp-07 — resumo do debate

Revisores: Codex (gpt-6.1-sol) e Gemini (gemini-4-argon-high), perfil `traducao`, dados públicos. Quatro rodadas: R1 com 7 objeções do Codex (INCONCLUSIVO) e 5 do Gemini (`decidir.py`: CONTINUAR); R2: Gemini sem objeção, Codex com 1 objeção nova (CONTINUAR); R3: os dois sem objeção (FINAL_UNANIMIDADE); R4 final sem objeção. Nenhuma divergência.

## Objeções acolhidas

- [codex:R1:O1] § 3 — "a necessidade imposta pelos erros que se alastram".
- [codex:R1:O2] e [gemini:R1:O4] § 7 — nota de *diligit*/*diligitur* sem dizer que a frase "pede" a passiva; família *diligere*/*dilectio* anotada; tratado 96,4 sobre João.
- [codex:R1:O3] e [gemini:R1:O1] § 10 — *sitis* subordinado a *fiet, ut*: "mas sejais todos discípulos de Deus"; período reordenado ("para que possais contemplar e perceber com a própria mente aquelas mesmas coisas que aprendestes e crestes…"); "sermões vindos de fora".
- [codex:R1:O4] § 12 — *ad hoc te advoca*: "dedica-te a isso" (a edição de Agostinho traz *avoca*; em nota).
- [codex:R1:O5] e [gemini:R1:O3] § 18 — *primo videam, et sic credam*: "quero primeiro ver, e então crer"; *Enarr. in Ps.* 39,21.
- [codex:R1:O6] § 23 — *intelligentiam*: "compreensão" (como *intellectus* nos §§ 19–20).
- [codex:R1:O7] e [gemini:R1:O2] § 24 — "costuma falar ora de…, ora de…"; cartas 167,4,14 (a Jerônimo) e 145,6 (a Anastásio), em vez da carta a Honorato da v1.
- [gemini:R1:O5] §§ 12–23 — remissões completadas: *Enarr. in Ps.* 77,10; sermões 261,4, 8,5, 216,9, 139 e 43; *De serm. Dom. in monte* 2,3,14; q. 81,1 e 81,2 das *83 quaestiones*; *De Gen. c. Man.* 2,23,35-36 (fórmula condensada); *Contra Faustum* 32,18; carta 155,4,13.
- [codex:R2:O8] § 23 — *Tract. in Ioan.* 18,7 (na R2 eu tinha posto 18,6, lendo o título editorial da edição on-line).

## Objeções rejeitadas

Nenhuma no todo. Localizações do Gemini corrigidas na fonte (augustinus.it) antes de aplicar: *De Trinitate* 8,9,13 (não 8,8,12), carta 167,4,14 (não 4,15), carta 145,6 (não 145,4), sermão 216,9 (não 216,11), q. 81,2 (não q. 61,2). Na R2, o Gemini aceitou essas correções.

## Pontos em aberto para a revisão

- § 10: a impressão traz *ut a Doctoribus exterioribus*, sem o *non* das edições de Agostinho; a tradução segue o impresso, e a nota diz que a falta é provavelmente erro de impressão.
- § 24, margens cortadas: *Epist. [?] Hon[?]* pode ser *Epist. 2[9] Hier[on.]* (carta 167 = antiga 29, a Jerônimo); *ad Au[?]* talvez seja *ad An[ast.]*. Ampliei a imagem, mas a resolução não permite firmar a leitura; o latim ficou como estava.
- Remissões não conferidas (Codex): nota do § 1 (lugar no capítulo anterior); *Fragm.* 2[?] c. 2 da margem do § 13; equivalências antigas carta 155 = 52 e carta 167 = 29; sermão 261 = 12 *de diversis*, 216 = 8 *de diversis*, 139 e 43 = 51 *de verbis Domini* e 27 *de verbis Apostoli*.

## Glossário

Nenhuma entrada nova. Proposta: uma entrada para *cupiditas*. Aqui é "cupidez", o amor desordenado agostiniano oposto à *caritas* (§§ 11, 14, 15, 17); em t2-lp-05, 08 e 09 a palavra aparece no sentido comum de "desejo" (*disserendi cupiditate*), por isso a entrada pediria a distinção dos dois sentidos.

## Transcrição

Leituras com `[?]`: margem do § 13 (*Fragm. 2[?]*), do § 23 (*Tract. [?]*, *Epist. 5[?] Macedon.[?]*) e do § 24 (três margens cortadas na encadernação). Nenhuma correção do latim no debate.

## Ressalvas do debate

- Gemini na R1: 3.ª tentativa na rodada. A 1.ª foi recusada (STEP_SEQUENCE, com `eco_recusada=FERRAMENTA_PROIBIDA`, `step:error_message`); a 2.ª foi interrompida e o motor a fechou como perdida. Pela skill `rbsa-debate`, a 3.ª exigia autorização do usuário; foi rodada por ordem da coordenação da produção. A resposta aceita é da 3.ª.
- Trava órfã `rodadas/R1/.gemini.lock` (pasta vazia) apagada à mão, depois de confirmar que não havia processo do motor nem do agy.
- R2: limite de uso do Codex (liberado às 20h10); retomado depois, na mesma rodada. Aviso do motor na R2: regras do revisor alteradas desde a R1.

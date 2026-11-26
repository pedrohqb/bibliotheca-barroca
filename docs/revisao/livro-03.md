# Revisão independente: Digesto, livro III (D. 3.1 a 3.6)

Revisor: Claude, sem participação na tradução, segundo `docs/revisao-digesto.md`. Data: 2026-11-26. Trabalho dividido em três blocos, revistos pelo mesmo roteiro e consolidados aqui: D. 3.1-3.2 (com D. 2.15), D. 3.3 e D. 3.4-3.6. Os arquivos grandes (D. 3.3, D. 3.5) foram lidos pelo gateway RBSA (escopo `bibliotheca-digesto`) e reindexados depois das alterações.

Método: tradução lida contra o latim em todos os trechos. Latim conferido contra a impressão de 1889, com o aparato: D. 3.1, 3.2, 3.4 e 3.6 inteiros; cerca de 60 dos 138 trechos de D. 3.3 e cerca de 45 dos 105 de D. 3.5, com o aparato de todas as páginas contra todas as notas que o citam. Cotejo com Hulot, Otto-Schilling-Sintenis, García del Corral, Vignali e Scott nos pontos suspeitos. Não foram alterados `estado`, `processo`, glossário, catálogo, `tools/` nem `docs/` (salvo este relatório).

## Resumo

- **Trechos lidos:** 363. Por título: 3.1, 26; 3.2, 57; 3.3, 138; 3.4, 18; 3.5, 105; 3.6, 19.
- **Erros corrigidos:** 24 (contados por ponto; em D. 3.3, 7 pontos somam 11 alterações). Nenhum erro de sentido.

| Tipo | Nº | Onde |
|---|---|---|
| Sentido | 0 | — |
| Latim | 1 | 3.2 s28 (*a principi* → *a principe*, como na impressão) |
| Forma fixada | 13 | 3.1 s14 e 3.2 s11 (conjectura, nas notas); 3.2 s11 (estalajadeiro ou dono de estábulo); 3.3 s15, s111 (a serviço do Estado), s49, s91, s136, s137 (a arbítrio de um homem de bem; contados como um ponto com s49), s55 (prejulgamento); 3.5 s9 (adiu a herança), s36, s52 (dolo mau), s60, s81 (escravaria) |
| Registro | 5 | 3.4 s1; 3.5 s35, s37 (mesóclise "atribui-se-me"), s60; 3.6 s14 |
| Nota | 5 | 3.2 s10 (grego da nota); 3.3 s117 (*novare*: S cum B, não Haloandro), s119 (nota para o colchete "[Respondeu]"); 3.5 s36 (nota que justificava "dolo" retirada), s95 ("Póstumos" → "Posteriores", como na inscrição) |

- **Pontos a decidir:** 6 (detalhes nas seções):
  1. D. 3.2 s52 — *ex sententia … pro alio habita*: "proferida a favor de um" (atual, com Scott) ou "a respeito de outro / contra outro" (García del Corral; o caso, sentença contra Lúcio Tício, favorece esta).
  2. D. 3.3 s80 — *rei credendi/promittendi*: "credores/devedores solidários" (atual) ou "correus credores/devedores", pela forma fixada *duo rei* = correus.
  3. D. 3.5 s23 — "ele terá a ação" (atual, com Scott) ou "será dada a ação", impessoal como o latim.
  4. D. 3.5 s45 — *cuiusque temporis*: "de cada um" (atual, segue a supressão de *temporis* proposta no aparato) ou "no início de cada período", como a impressão e o alemão.
  5. D. 3.5 s50 — *malo more erogata*: "gasto de má-fé" (atual) ou "mal gasto".
  6. D. 3.6 s9 — *depectus est*: "se vendeu por pacto" (atual) ou "fez pacto torpe".
- **Para o coordenador (uniformidade):**
  - Obras fora da tabela: *de heurematicis* (Modestino) = *Das descobertas*; *de verborum obligationibus* (Gaio) = *Das obrigações verbais*.
  - *praeiudicium* em D. 3.3 s55 é a ação prejudicial; aplicou-se "prejulgamento" (forma fixada), com nota. Se se preferir "ação prejudicial" nesse sentido, a mudança é no brief.
  - Termos em uso: *negotium facere* = causar embaraço; *calumnia* = calúnia; *exsecutor* = executor; *frustrator* = faltoso.
  - "Entende assim" (D. 3.1 s10, *sic accipe*) destoa do "entenda-se" do resto da obra; na nota de D. 3.2 s33, "Monro propõe ler" ficaria melhor "Monro entende" (Monro é tradutor, não editor); em D. 3.5 s24 a nota atribui *nihil agi tua* "a Mommsen", mas no aparato é proposta marcada *scr.* Não corrigidos.
  - O cabeçalho de `la/d03-03.md` (`colunas: 38-43`) está certo: o revisor do bloco o estranhou, mas 153-158 são as folhas do exemplar do archive.org (folha 133 = p. 18 da impressão, conforme D. 2.1-2.7), e correspondem às páginas impressas 38-43.
  - Formatação: em D. 3.3, s132-s138 diferem do resto do arquivo (como D. 1.2 s52-s55); o validador não acusa.
- **Gateway:** no bloco D. 3.4-3.6, o revisor rodou por engano um grep de "dolo" em `pt/d03-05.md`, arquivo que o hook barra ao Read; o resultado só confirmou o que já fora lido pelo gateway. Registro o desvio.
- **Validador:** `node tools/validar.mjs` com 0 erros; no livro III restam só avisos de *ius* (D. 3.1 s3, s9, s12; D. 3.3 s61), todos explicados em nota.
- Imagens do scan apagadas (`trabalho/rev-0203`).

## Decisões aplicadas

Regra geral do coordenador para os pontos a decidir do livro III: seguir o latim impresso ao pé da letra e registrar a outra leitura em nota. Aplicada em 2026-11-26 (só em `pt/`):

1. D. 3.2 s52: "proferida a favor de um" passou a "proferida a respeito de outro" (*pro alio habita*), com nota nova: literalmente "tida para outro", isto é, dada no processo de outra pessoa; registra Scott ("a favor de um") e García del Corral ("contra uno").
2. D. 3.3 s80: "credores solidários" / "devedores solidários" passaram a "correus credores" / "correus devedores" (*rei credendi* / *rei promittendi*), forma fixada; a nota agora diz que são credores e devedores solidários da mesma obrigação, e o "credor solidário" da observação sobre Hulot passou a "correu credor".
3. D. 3.5 s23: o latim tem *dabitur*; "ele terá a ação" passou a "será dada a ação", com nota (Scott entende que a ação se dá ao falso escravo).
4. D. 3.5 s45: traduzido o texto impresso, "a condição no início de cada período" (*initio cuiusque temporis*), como o alemão; a nota registra a supressão de *temporis* no aparato, seguida por Monro, e o sentido que ela dá.
5. D. 3.5 s50: mantido "gasto de má-fé", com nota: *malo more*, literalmente "de mau modo", não é o termo técnico da má-fé.
6. D. 3.6 s9: mantido "se vendeu por pacto", com nota: tradução interpretativa; o latim diz só "fez pacto", em sentido pejorativo.

Decisão do livro II aplicada também aqui: *locupletior factus* = "enriquecido". Em D. 3.5, "ficou mais rico" passou a "ficou enriquecido" em s7, s18, s21 (s21: "eu fiquei enriquecido"), s24 e s87 (Paulo, *Sentenças*, livro 1); em s29 já estava "ficou enriquecido" (*locupletatus*). Não resta "mais rico" no título.

## D. 3.1 — Do postular

- Trechos lidos: 26 (s1–s26), todos contra o latim.
- Conferidos contra o scan: s1–s26, todos (p. 150–151); aparato lido (p. 150, n. 8–15; p. 151, n. 1–10).
- Cotejo: Scott e Otto-Schilling-Sintenis em s4. Confere a nota sobre *moderatam … aetatem*: Scott diz "too young"; o alemão anota *excusare* = *prohibere*. As notas sobre *furioso om. F* (s12, n. 3), *tribunorum Rueckerus* (s14, n. 4) e *respondisse* (s4, n. 11: F³ e S) conferem com o aparato. A afirmação de que a fonte digital lia *captibus* (s8) não pôde ser conferida; a impressão traz *capitibus*.

### Corrigido
- s14, nota — antes: "Rücker, seguido por Monro, conjetura *tribunorum*"; depois: "… conjectura *tribunorum*"; motivo: grafia "conjectura" fixada pelo coordenador para toda a obra; tipo: forma fixada / nota.

### A decidir
- Nenhum.

### Observações
- s1: o aparato (n. 10) registra a ordem primitiva provável (*habendae rationis causa decoris sui suaeque dignitatis tuendae causa*). A ordem não muda o sentido, e não pus nota.
- s10: "Entende assim" (*sic accipe*), imperativo de tu. É correto, mas destoa do "entenda-se" usado noutros títulos.
- s12: o aviso do validador sobre *ius* é *de in ius vocando*, vertido "chamamento a juízo" pela forma fixada, com nota.

## D. 3.2 — Dos que são notados de infâmia

- Trechos lidos: 57 (s1–s57), todos contra o latim.
- Conferidos contra o scan: s1–s57, todos (p. 151–153); aparato lido (p. 151, n. 11–19; p. 152, n. 1–33; p. 153, n. 1–16).
- Cotejo: Scott e García del Corral em s52. As notas sobre os *Fragmenta Vaticana* § 320 (s1, n. 12 e 15), *habens Brencmannus* (s11, n. 8), *variator … Stephanus* (s13, n. 10), a divisão dos §§ 3/4 (s20; a impressão abre o § 4 em *Sed et si iureiurando*) e *Marcellus F cum B, Macer S recte* (s53, n. 12) conferem com o aparato.

### Corrigido
- s28 — antes: *Solet a principi impetrari*; depois: *Solet a principe impetrari*; motivo: a impressão (p. 152) traz *principe*; *principi* era erro da fonte digital; tipo: latim.
- s11 — antes: "se era taberneiro ou estalajadeiro"; depois: "se era estalajadeiro ou dono de estábulo"; motivo: formas fixadas *caupo* = estalajadeiro, *stabularius* = dono de estábulo (como em D. 4.9); tipo: forma fixada.
- s11, nota — antes: "*habens* é conjetura de Brencmann"; depois: "*habens* é conjectura de Brencmann"; motivo: grafia fixada; tipo: forma fixada / nota.
- s10, nota — antes: "(*βραβευτάς*)"; depois: "(βραβευτὰς)"; motivo: o grego vai sem asteriscos e com a acentuação da impressão (grave, como no latim do trecho); tipo: nota.

### A decidir
- s52 (*cum non oportet ex sententia sive iusta sive iniusta pro alio habita alium praegravari*). Leitura A (atual): "por uma sentença … proferida a favor de um, se agrave outro", como Scott ("given in favor of one party"). Leitura B: "proferida a respeito de outro" ou "contra outro", como García del Corral ("pronunciada contra uno"). No caso, a sentença foi dada contra Lúcio Tício e se discute se atinge as testemunhas, e isso favorece B. *pro alio* pode significar simplesmente "quanto a outro".

### Observações
- s1: "comandante" para *imperator* no edito, com nota que remete à leitura de Ulpiano ("imperador") em s2. A escolha é defensável e está explicada.
- s33, nota: "Monro propõe ler *si qua*". Monro é tradutor, não editor; seria mais exato "Monro entende *si qua*". Não pude conferir Monro e não alterei.
- s43: "por constituição e por resposta dos jurisconsultos" acrescenta o sujeito de *responsum*. A nota o declara.

## D. 3.3 — Dos procuradores e defensores

- Trechos lidos: 138 (s1–s138), todos contra o latim.
- Conferidos contra o scan (impressão de 1889, p. 153–158 do exemplar do archive.org): s1–s25 (p. 153 c2, p. 154 c1); s36–s39 (p. 154 c2b); s48–s55 (p. 155 c1b); s56–s62 e s67–s68 (p. 155 c2a, rodapé); s75–s84 e s102–s103 (p. 156 c1b, rodapé); s122–s129 (p. 157 c2a, rodapé); s135–s138 (p. 158 c1a). São cerca de 60 trechos, bem acima da amostra de 1 em 5. Não há divergência entre a transcrição e a impressão nos trechos conferidos. Confere em particular *litis translatio* (s38), *nisi et agendum* (s56, n. 8: "sic F¹S cum B, ad ins. F³") e *non potest* (s127).
- Aparato conferido para todas as notas que o citam: p. 155 n. 4 (*et ei quocum alterius nomine scr.*, s49), n. 7 (*provinciam dett.*, s55), n. 13 (*adversarius et is ins.*, s62), n. 16 (conjectura em s68); p. 156 n. 5 (*vel quidam dett.*, s82), n. 9 (*satis ins.*, s86), n. 10 (*procuratorem del.*, s89), n. 14 (*pro eo dett. cum B*, s94); p. 157 n. 6 (*novare S cum B, om. F*, s117), n. 8 (*absens Arnaldus*, s124), n. 9 (inscrição *idem libro decimo pandectarum* riscada, s124), n. 15 (*non Pᵃ … cum B, om. F et dett.*, s127). Todas exatas, salvo s117 (corrigida).
- Cotejo: Hulot (fr), Otto-Schilling-Sintenis (de), García del Corral (es) e Scott (en). Em s117 conferi a omissão de "novar" (de, fr, es: confere); em s68 conferi a afirmação da nota sobre Hulot (confere: "on ne peut guère constituer procureur pour défendre un tuteur accusé comme suspect"); em s61 conferi que Otto-Schilling-Sintenis e Scott entendem "se o herdeiro está ausente" (confere); em s124 conferi a versão de Hulot ("son procureur absent").

### Corrigido
- s15 — antes: "ou se tiver de ausentar-se a serviço da república"; depois: "ou se tiver de estar ausente a serviço do Estado"; motivo: forma fixada de *rei publicae causa abesse*; tipo: forma fixada.
- s111 — antes: "nem quem vai ausentar-se a serviço da república"; depois: "nem quem vai estar ausente a serviço do Estado"; motivo: o mesmo; tipo: forma fixada.
- s49 (corpo, duas ocorrências, e nota) — antes: "segundo o arbítrio de um homem bom"; depois: "a arbítrio de um homem de bem"; motivo: forma fixada de *boni viri arbitratu*; tipo: forma fixada.
- s91 — antes: "porque um homem bom, como árbitro,"; depois: "porque um homem de bem, como árbitro,"; motivo: *vir bonus … arbitraturus*, uniformizado com a forma fixada; tipo: forma fixada.
- s136, s137 — antes: "segundo o arbítrio de um homem bom"; depois: "a arbítrio de um homem de bem"; tipo: forma fixada.
- s55 — antes: "se pedir um prejudicial"; depois: "se pedir um prejulgamento". Na nota, antes: "\"Prejudicial\" (*praeiudicium*): a ação que só declara"; depois: "\"Prejulgamento\" (*praeiudicium*): a ação prejudicial, que só declara"; motivo: forma fixada do brief; tipo: forma fixada.
- s117, nota — antes: "*novare* falta no manuscrito florentino e vem da edição de Haloander e dos Basílicos"; depois: "… e vem dos manuscritos da tradição secundária (S) e dos Basílicos"; motivo: o aparato (p. 157 n. 6) diz "novare S cum B, om. F", sem menção a Haloander; tipo: nota.
- s119, nota nova — "[Respondeu]" estava no corpo sem explicação. Pela decisão do coordenador, o colchete só fica com nota. Nota: o latim traz só a oração infinitiva, que dependia de um *respondit* suprimido na compilação; tipo: nota.

### A decidir
- Nenhum.

### Observações
- s61 (*an igitur heres sit absens*): a tradução diz "se o ausente é herdeiro", contra todas as traduções de apoio ("se o herdeiro está ausente"). A nota explica a escolha pela pergunta clássica do interrogatório *in iure* (D. 11.1). Acho a escolha correta e a mantenho; registro porque diverge do apoio inteiro.
- s62, s86: os colchetes "[o adversário]" e "[caução]" têm nota e se apoiam no aparato (n. 13, p. 155; n. 9, p. 156). Estão de acordo com a decisão sobre colchetes.
- s49: a tradução adota a correção do aparato (*ei quocum alterius nomine*) contra o texto impresso, e a nota diz isso. Está certo.
- Formatação: s132–s138 têm quebra de linha depois de `@sN` e linha em branco entre os trechos, diferente do resto do arquivo. O validador não acusa (o mesmo caso de D. 1.2 s52–s55).
- O cabeçalho do latim diz `colunas: 38-43`; o título ocupa as páginas 153–158 do exemplar digitalizado (`n153`–`n158`). Não alterei o cabeçalho; convém conferir se "38-43" é a paginação impressa.
- Sem mesóclises nem arcaísmos. Em s87 há "nega-se-lhe a ação", ênclise dupla, aceitável. Não alterei.

## D. 3.4 — Do que se demanda em nome de qualquer coletividade ou contra ela

- Trechos lidos: 18 (s1–s18), todos contra o latim.
- Conferidos contra o scan: todos (s1–s18), na p. 43 (leaf 158), com o aparato da página (notas 3–13). *recciderit* (s15) e *possideri* (s3) estão assim na impressão.
- Cotejo: es, it, fr e en para s6 (dois terços), s11 (Haloandro) e s12 (*constitui ei potest*). As notas conferem: o italiano diz de fato "due membri"; o espanhol diz "y pueda ser nombrado para él"; a leitura de Haloandro (*videantur, quae et permissa durant*) está nas notas do espanhol e do italiano. Ela não aparece no aparato de 1889.

### Corrigido
- s1 — antes: "Nem a sociedade, nem o colégio, nem corporação desse tipo se concede indistintamente a todos ter"; depois: "Não se concede indistintamente a todos ter sociedade, colégio ou corporação desse tipo"; motivo: ordem latinizante; tipo: registro.

### A decidir
- Nenhum.

### Observações
- s16: a nota sobre *per exactiones* confere com o aparato (n. 12, *scr.*).

## D. 3.5 — Da gestão de negócios

- Trechos lidos: 105 (s1–s105), todos contra o latim, pelo gateway.
- Conferidos contra o scan: s1–s2 (p. 43), s13–s25 (p. 44), s35–s43 (p. 45), s55–s64 (p. 46), s104–s105 (p. 49). Aparato das p. 44–49 lido e conferido com as notas de s9 (*et fetus S, effectus F*), s24 (*agi tua scr.*), s38 (*dereliquerit*, impresso), s43 (Koehler), s45 (*temporis del.*), s50 (*debere quod Sabinus scribit scr.*), s52 (*recipiat ins.*), s60 (*sine vitio*, impresso), s74 (*nec S, de F*), s88 (texto das *Sentenças* de Paulo), s90 (*licentia quia scr.*) e s105 (*quando quidem dett.*). Todas conferem.
- Cotejo: en (Scott) e de (Otto-Schilling-Sintenis) em s23 e s45.

### Corrigido
- s9 — antes: "nem do herdeiro que ainda não aceitou"; depois: "nem do herdeiro que ainda não adiu a herança"; motivo: *adire hereditatem* = "adir a herança"; tipo: forma fixada.
- s35 — antes: "se eu tivesse emprestado dinheiro a um dos sócios proibindo-o o outro"; depois: "… a um dos sócios apesar da proibição do outro"; motivo: frase ambígua e truncada (*prohibente socio*); tipo: registro.
- s36 — antes: "se não houver dolo da tua parte"; depois: "se não houver dolo mau da tua parte"; motivo: *dolus malus* = "dolo mau", como nos demais títulos (d02-10, d04-03…); tipo: forma fixada. A nota que justificava "dolo" ("aqui e adiante, 'dolo'") foi suprimida; tipo: nota.
- s37 — antes: "Mas atribui-se-me, por outro lado, ação pelas despesas que fiz?"; depois: "Mas tenho eu, por outro lado, ação pelas despesas que fiz?"; motivo: colocação pronominal arcaizante; tipo: registro.
- s52 — antes: "não se considera que ages com dolo"; depois: "… com dolo mau"; motivo: *dolum malum*; tipo: forma fixada.
- s60 — antes: "para os escravos da casa"; depois: "para a escravaria"; motivo: *familia* (escravos) = "escravaria"; tipo: forma fixada.
- s60 — antes: "como deve ser condenado justamente por causa do desabamento"; depois: "… precisamente por causa do desabamento"; motivo: "justamente" lia-se como "com justiça" (*propter ipsam*); tipo: registro.
- s81 — antes: "sustentou tanto o filho como os escravos dele"; depois: "… como a escravaria dele"; motivo: *familiam*, forma fixada; tipo: forma fixada.
- s95, nota — antes: "\"Póstumos\" (*Posteriores*)"; depois: "\"Posteriores\" (*Posteriores*)"; motivo: a nota não batia com a inscrição nem com a tabela de obras; tipo: nota.

### A decidir
- s23 (*dabitur negotiorum gestorum actio*): leitura A (atual), "ele terá a ação de gestão de negócios", como Scott ("will be granted him"). Leitura B: "será dada a ação de gestão de negócios", impessoal como o latim e o alemão; a ação cabe em princípio ao dono contra o falso escravo.
- s45 (*initio cuiusque temporis condicionem spectandam*): leitura A (atual), "a condição de cada um no início", que traduz o texto sem *temporis* (correção do aparato, n. 16, seguida por Monro e por Scott, "the condition of the parties"). Leitura B: "a condição do início de cada período", como impresso e como o alemão ("zu Anfang jeder Zeit"). A nota atual explica a correção, mas o corpo não traduz o texto impresso.
- s50 (*malo more pecunia … erogata*): leitura A (atual), "gasto de má-fé"; leitura B: "mal gasto", "gasto de modo reprovável". *Malo more* não é exatamente má-fé.

### Observações
- s24, nota: *nihil agi tua ratihabitione* é correção do editor (*scr.*, n. 7, p. 44), não o texto impresso. A nota diz "Monro, com Mommsen"; seria mais exato dizer "Monro segue a correção registrada no aparato". Não alterei.
- s59: o aparato (n. 15, p. 46) registra a correção *quando* por *quod* (*sed etiam quod imprudenter eum elegeris*). Sem nota; o sentido não muda.
- s36: a impressão traz *non est negotiorum actio*, sem *gestorum*, e a tradução completa sem dano.
- s49: *Adquin* está assim na impressão (p. 46, margem do recorte); s28 não foi conferido.

## D. 3.6 — Dos caluniadores

- Trechos lidos: 19 (s1–s19), todos contra o latim.
- Conferidos contra o scan: todos (s1–s19), na p. 49 (leaf 164), com o aparato (n. 4–16). Conferem a nota de s3 (*accepit scr.*, n. 6), a remissão de s4 a C. 7.49.1 (n. 7) e a nota de s16 (*etiam F²*, n. 16).
- Cotejo: de (s8), it (s15), es (s2).

### Corrigido
- s14 — antes: "porque quem não sabe não se considera ter a possibilidade de demandar"; depois: "porque se considera que quem não sabe não tem a possibilidade de demandar"; motivo: construção latinizante; tipo: registro.

### A decidir
- s9 (*depectus est … turpiter pactus*): leitura A (atual), "quem se vendeu por pacto (*depectus est*)", interpretativa; leitura B: "quem fez pacto torpe (*depectus est*)", mais literal.

### Observações
- s8, nota: o alemão traz de fato "[nicht]" entre colchetes, mas a nota 70 dele, que daria a fonte (Brenkmann), não está no OCR; a atribuição a Brenkmann não pôde ser conferida.
- s15, nota: confere ("allora posso ridomandarlo" no italiano). s2, nota: o espanhol diz de fato "ley de peculado".
- s19, nota: *De adulteriis* de Papiniano é monografia sobre a lei Júlia, não propriamente "comentário"; a nota pode ficar.

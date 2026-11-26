# t1-d000-s00 — Proêmio (*De partitione operis*): resumo para a revisão

Capítulo de calibração do *De Contractibus*. Debate com Codex (gpt-6.1-sol) e Gemini (gemini-4-argon-high), perfil `traducao`, quatro rodadas (três de mérito e uma final). Regra de aceite: R1 e R2 CONTINUAR; R3 **FINAL_MAIORIA** (Gemini sem objeção; Codex INCONCLUSIVO); R4 final, com o Gemini sem objeção e o Codex INCONCLUSIVO pelo mesmo motivo. Registro completo em `registro.md`.

## Objeções acolhidas

- § 2, nota sobre *idolorum servitus* (Codex e Gemini): a fórmula é literal em Ef 5,5; a nota já não diz que Oñate citou Cl 3,5 de memória.
- § 3, *mercatoribus in primis appetenda* (Codex e Gemini): "procurada antes de todos" → "digna de ser buscada sobretudo", que conserva o gerundivo e o *in primis* intensivo.
- § 4, *claritatis gratia, cui maxime studui* (Codex): o *cui* singular retoma só a clareza ("à qual me dediquei").
- § 4, *Age igitur* (Codex): "Eia, pois" → "Vamos, pois", para sair do arcaísmo.
- § 5, *et extra in decretalibus* (Codex e Gemini): "e fora deles, nas Decretais" → "e no *Extra*, nas Decretais"; a nota explica o nome do *Liber Extra*.
- § 6, *Salas late, et bene* (Codex): "ampla e bem" → "extensamente e bem".
- § 7, colchetes da citação (Codex e Gemini): fechados antes de "em cada contrato", como na impressão; nova nota identifica o verso em Nebrija, *Introductiones Latinae*, livro II.
- § 7, *successionum, manumissionum, vsucapionum*, em parte (Codex e Gemini): ficam os genitivos do autor, regidos pelo *Communia* anterior, e as rubricas completas vão na nota; não acrescentei *Communia de* no texto.
- § 6, *Mercado de contractib.*, em parte (Gemini): retirado o "em", que prendia *De contractibus* só a Mercado; não juntei "e", para manter a ambiguidade do latim.

## Objeções rejeitadas

Nenhuma de tradução.

## Pontos em aberto

- **Remissões do § 6, INCONCLUSIVO (Codex, R1 a R4).** Manuel Rodrigues, *Summa*, p. 1, c. 132; Filiarchi, *De officio sacerdotis*, t. 1, p. 2, l. 2, c. 6; Henríquez, l. 11, c. 9; e a *Summa* citada no verbete *contractus* (a de Caetano?) não foram conferidas na fonte. O Codex não aponta erro, só a falta de conferência. Vai em `@n` no § 6. Os outros lugares estão conferidos pelos dois revisores: Ovídio, *Met.* I, 16-17; Ef 5,5 e Cl 3,5; 2Cor 12,15; Bernardo, *De consideratione* I, 4; Tomás, II-II, q. 61; os títulos *Communia* do Código e do Digesto; Nebrija.
- **§ 5, *minimam iuris voluminum partem*.** O impresso diz "a menor parte", e a nota marginal e o contexto pedem o contrário. A tradução segue o texto e anota a conjectura de um *non* que falta; os dois revisores concordam com essa solução.

## Transcrição

- § 2, *leges tot sint[?]*: o *sint* está borrado no scan.
- Mantidos como impressos e anotados: *Augenium* (por *Eugenium*), *tecnis*, *exhantlandis*, *labyrintis*.
- O Proêmio é impresso a uma coluna, não a duas.

## Glossário

O glossário inteiro é proposta inicial desta calibração, a aprovar (17 termos, em `obras/onate-de-contractibus/glossario.json`). Nenhum revisor propôs mudança. Pontos de decisão: *lucrativus* → "gratuito"; *dominium* → "domínio"; *sectio* → "seção"; *disputatio* → "disputa".

## Consumo

Claude no debate: 29 chamadas, cerca de US$ 2,31 a preço de API (sessão inteira até a exportação: US$ 7,12). Revisores em `consumo.csv`: o Codex fez 44 buscas na R1 e leu cerca de 2,6 milhões de tokens de entrada em quatro rodadas, quase todos em cache; o Gemini, cerca de 260 mil.

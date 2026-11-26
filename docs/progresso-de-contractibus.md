# Progresso: *De Contractibus* de Pedro de Oñate

## Etapa atual

**2. Calibração**, esperando o Pedro: o `t1-d000-s00` (Proêmio) foi publicado como `debatida`. O Pedro lê `debate/onate-de-contractibus/t1-d000-s00/resumo.md`, aprova ou corrige o glossário inicial e diz "pode seguir".

## Decisão do Pedro (2026-11-26)

A tradução anterior do Pedro foi descartada ("não estava boa"). Não há importação: a obra é produzida pelo fluxo normal da skill, como o *Augustinus*. O plano foi reescrito (`docs/plano-de-contractibus.md`).

## Sessões

### 2026-11-26

- Pré-checagem: `git pull --ff-only`; `validar.mjs` sem erro; motor de debate 4.4.15-rbsa com perfil `traducao`.
- **Fontes (etapa 0, concluída).** Scans do Google Books do exemplar da Biblioteca Nazionale Centrale di Roma, entregues pelo Pedro em `Troca IA/Obras/` e copiados para `~/bibliotheca-fontes/onate-de-contractibus/` (com `SHA256SUMS`). Folhas de rosto conferidas na imagem:
  - `tomo1-1646.pdf` (736 p.): tomo I, Roma, Caballi, 1646, cota 13.12.g.33, tratados I–VII. Google Books `xo-P4-cXqAYC`.
  - `tomo2-1647.pdf` (1090 p.): tomo II, Roma, Caballi, 1647, cota g.34, tratados VIII–XX. `OLOLiC84maIC`.
  - `tomo3-parte1.pdf` (1007 p.): tomo III, Roma, apud Angelum Bernabò, 1654, cota g.35, tratados XXI–XXVII. `m2YktiXcvf0C`.
  - `tomo3-parte2.pdf` (800 p.): tomo III, parte 2, falsa folha de rosto sem data, cota g.36, tratados XXVIII–XXXVI. `LUJB2PCwEGYC` (a conferir: há dois volumes de 1654 da BNCR no Google Books, e este é o que sobra).
- **Catálogo (etapa 1).** `obra.json` (`referencia: pagina`) e `catalogo.json` com o tratado I inteiro (26 capítulos: Proêmio e disp. 1–3), pelo índice impresso do tomo I. Página impressa = página do PDF − 44, conferido até a p. 103. O preâmbulo de cada disputa entra no capítulo da Sectio I. Entradas conferidas no scan: p. 22 (disp. 2, sec. 1) e p. 85 (disp. 3, sec. 11); p. 56 a confirmar na transcrição.
- **Calibração (etapa 2).** `t1-d000-s00`: transcrição (7 trechos, pp. 1–2, conferida contra o scan), glossário inicial (17 termos, proposta) e tradução. Debate com Codex e Gemini em 4 rodadas: R1 e R2 CONTINUAR, R3 FINAL_MAIORIA (Gemini sem objeção; Codex INCONCLUSIVO só quanto à conferência das remissões do § 6), R4 final no mesmo estado. Objeções: 14 na R1 (8 do Codex, 6 do Gemini, quase todas coincidentes), todas acolhidas, duas em parte; nenhuma rejeitada. Publicado com `estado: debatida`.
- Consumo: Claude, sessão inteira cerca de US$ 7,12 a preço de API (debate do Proêmio, US$ 2,31); revisores em `debate/onate-de-contractibus/t1-d000-s00/consumo.csv`.

## Pontos em aberto para o Pedro

- **Glossário inicial**, a aprovar (`obras/onate-de-contractibus/glossario.json`). Pontos de decisão: *lucrativus* → "gratuito" (e não "lucrativo"); *dominium* → "domínio" (e não "propriedade"); *sectio* → "seção"; *disputatio* → "disputa".
- Remissões do § 6 do Proêmio (Manuel Rodrigues, Filiarchi, Henríquez, a *Summa* no verbete *contractus*): a conferir na fonte, na revisão.
- *minimam iuris voluminum partem* (Proêmio, § 5): o impresso diz o contrário do que o contexto pede; a tradução segue o texto e anota.

## Problemas da ferramenta (não corrigidos, por regra da sessão)

- `tools/paginas.py` recorta em duas colunas mesmo as páginas impressas a uma coluna só, como o Proêmio; recortei faixas horizontais à parte, no scratchpad.
- `tools/debate.mjs preparar`: o caso sai com "(undefined)" quando `obra.json` não tem `urn`, e diz "Colunas" mesmo com `referencia: pagina`.
- `tools/build.mjs`: o rótulo do scan usa `colunas` do cabeçalho; para esta obra, o campo traz páginas, e o rótulo do site sai certo ("p.") só porque o build lê `referencia`.

## Propostas de glossário

Todo o glossário inicial é proposta (ver acima).

## Próximo passo

Com o "pode seguir" e o glossário aprovado: produção do tratado I a partir do `t1-d001-s01` (preâmbulo da disp. 1 e sec. 1, pp. 2-4), em lotes de 5, pelo prompt do plano.

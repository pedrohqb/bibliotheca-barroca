# Progresso: *De Contractibus* de Pedro de Oñate

## Etapa atual

**3. Produção, tratado I.** O glossário inicial foi aprovado pelo Pedro em 2026-11-26 ("pode seguir"). O lote parou no primeiro capítulo, `t1-d001-s01`, por **LIMITE DE USO do Codex** (liberação às 3:10 PM de 2026-11-26, pela mensagem do Codex).

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
- Lote do tratado I (pedido: 5 capítulos). `t1-d001-s01` (preâmbulo da disp. 1 e sec. 1, pp. 2–4): transcrição (10 trechos, conferida contra o scan) e tradução prontas, em `estado: rascunho`, **sem commit**, para não ir ao site antes do debate. Debate em `~/Documentos/Debates IA/2026-11-26-bib-t1-d001-s01/`: R1 congelada; Codex parou em LIMITE DE USO (tentativa `f4d9a072…`, sem resposta); Gemini aceito na R1 (mérito PENDENTE; resposta guardada na pasta do debate, a ler na retomada).
- Consumo: Claude, sessão inteira cerca de US$ 7,12 a preço de API (debate do Proêmio, US$ 2,31); revisores em `debate/onate-de-contractibus/t1-d000-s00/consumo.csv`.

## Pontos em aberto para o Pedro

- Aprovar os termos novos do glossário (seção "Propostas de glossário") e autorizar a gravação deles em `glossario.json`.
- Remissões do § 6 do Proêmio (Manuel Rodrigues, Filiarchi, Henríquez, a *Summa* no verbete *contractus*): a conferir na fonte, na revisão.
- *minimam iuris voluminum partem* (Proêmio, § 5): o impresso diz o contrário do que o contexto pede; a tradução segue o texto e anota.

## Problemas da ferramenta (não corrigidos, por regra da sessão)

- `tools/paginas.py` recorta em duas colunas mesmo as páginas impressas a uma coluna só, como o Proêmio; recortei faixas horizontais à parte, no scratchpad.
- `tools/debate.mjs preparar`: o caso sai com "(undefined)" quando `obra.json` não tem `urn`, e diz "Colunas" mesmo com `referencia: pagina`.
- `tools/paginas.py` também erra a largura das colunas nas páginas a duas colunas do tomo I (corta cada coluna pela metade); usei um recorte próprio, no scratchpad, por colunas e faixas.

## Propostas de glossário

O glossário inicial (17 termos) foi aprovado. Termos novos do `t1-d001-s01`, a acrescentar com o aval do Pedro (a gravação em `glossario.json` foi barrada pelo classificador de permissões da sessão; a tradução já os usa de forma uniforme):

- *consensus* → "consentimento"; *conuentio* → "convenção" (gênero mais largo que o contrato; distinto de *pactum*);
- *quasi contractus* → "quase contrato"; *distractus* → "distrato" (em Oñate, mais largo que no direito brasileiro: pagamento, aceptilação, compensação);
- *restitutio* → "restituição"; *ius gentium* → "direito das gentes"; *ius naturale* / *ius naturae* → "direito natural";
- *solutio (debiti)* → "pagamento"; *acceptilatio* → "aceptilação"; *compensatio* → "compensação".

## Próximo passo

Depois das 15:10 de 2026-11-26: retomar o debate do `t1-d001-s01` rodando de novo o Codex na R1 (`rodada.py codex "<pasta>" 1`; o Gemini já respondeu). Depois, aplicar, publicar e seguir o lote com `t1-d001-s02` (pp. 4–5).

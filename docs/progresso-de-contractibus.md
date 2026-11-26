# Progresso: *De Contractibus* de Pedro de Oñate

## Etapa atual

**3. Produção, tratado I.** Publicados com `estado: debatida`: Proêmio, disputa 1 inteira (`t1-d001-s01` a `s06`) e disputa 2, seções I a III (`t1-d002-s01` a `s03`). Também `t1-d002-s04` e `t1-d002-s05`: **disputa II completa**. Próximo: `t1-d003-s01` (disputa III, preâmbulo e seção I, pp. 40–46). Nenhum ponto de controle pendente; o fim do tratado I é o próximo.

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
- **Calibração (etapa 2).** `t1-d000-s00`: transcrição (7 trechos, pp. 1–2, conferida contra o scan), glossário inicial (17 termos, proposta) e tradução. Debate com Codex e Gemini em 4 rodadas: R1 e R2 CONTINUAR, R3 FINAL_MAIORIA (Gemini sem objeção; Codex INCONCLUSIVO só quanto à conferência das remissões do § 6), R4 final no mesmo estado. Objeções: 14 na R1 (8 do Codex, 6 do Gemini, quase todas coincidentes), todas acolhidas, duas em parte; nenhuma rejeitada. Publicado com `estado: debatida`. (Objeções contadas sem repetir as coincidentes dos dois revisores.)
- Lote do tratado I (pedido: 5 capítulos; feitos os 5, o último já com duas rodadas). O primeiro debate do `t1-d001-s01` parou em LIMITE DE USO do Codex (liberado às 15:10) e foi refeito do zero às 15:10, para o caso trazer a instrução sobre remissões.

| Capítulo | Pp. | Rodadas | `decidir.py` (R3) | Final | Acolhidas / rejeitadas | Pontos em aberto principais |
|---|---|---|---|---|---|---|
| `t1-d001-s01` | 2–4 | 4 | FINAL_MAIORIA | Codex INCONCLUSIVO (remissões) | 8 / 0 | remissões dos §§ 5–6; latim corrigido no § 10 (*disseramus*) |
| `t1-d001-s02` | 4–5 | 4 | FINAL_MAIORIA | Codex INCONCLUSIVO (remissões) | 6 / 0 | *Sotus* por *Scotus* (§ 3); frase corrompida do comprador e vendedor |
| `t1-d001-s03` | 5–7 | 4 | FINAL_MAIORIA | Codex INCONCLUSIVO (remissões) | 10 / 1 (*conductio*) | *accusatus*[?] (§ 3); Lessius; proposta sobre *conductio* |
| `t1-d001-s04` | 7–11 | 4 | FINAL_UNANIMIDADE | Codex: 1 objeção BAIXA nova (*in eundem motum*, § 8), em nota | 13 / 0 | lacunas do papel nos §§ 12 e 16 |
| `t1-d001-s05` | 11–16 | **2** | R1 (teto) FINAL_COM_DIVERGENCIA | Gemini sem objeção; Codex: 1 questão nova numa nota (§ 3), em `@n` | 16 / 0 | *l. stipulatio ista* (D. 45, 1, 17 ou 38) |
| `t1-d001-s06` | 16–21 | 2 | R1 (teto) FINAL_COM_DIVERGENCIA | Gemini sem objeção; Codex: 2 de redação, acolhidas e não aplicadas | 21 / 0 | reato de culpa (§ 9); sujeito no § 14 |
| `t1-d002-s01` | 22–27 | 2, Codex `medium` | idem | Gemini sem objeção; Codex: 1 erro de nota (*l. Rebus*), não aplicado | 21 / 0 | *inualidum*; *nominatis* (§ 26) |
| `t1-d002-s02` | 28–31 | 2, Codex `medium` | idem | os dois sem objeção | 15 / 1 (*conductio*) | Badaeus/Boécio (§ 12) |
| `t1-d002-s03` | 31–32 | 2, Codex `medium` | idem | os dois sem objeção | 1 / 1 parcial | *mutuum*: "mútuo" × "recíproco" (resolvido) |
| `t1-d002-s04` | 32–35 | 2, Codex `medium`, motor 4.4.16 | idem | Gemini sem objeção; Codex: 1 mantida (*conductio*), resolvida pela decisão do Pedro | 10 / 1 | *ignobilis* |
| `t1-d002-s05` | 35–40 | 2, Codex `medium`, motor 4.4.16 | idem | os dois sem objeção | 17 / 1 | sumário × texto; § 24 |

- Os resumos para a revisão estão em `debate/onate-de-contractibus/<id>/resumo.md`.
- O Codex não acata a instrução sobre remissões inacessíveis (trata o caso como "dado sob exame"), mas passou a buscar menos e, no `t1-d001-s04`, fechou a R3 sem objeção.
- Consumo: Claude, ver os `consumo.csv` de cada capítulo (a sessão tratou vários capítulos em paralelo; o recorte por debate é estimativa). Codex, entrada por capítulo (quatro rodadas, quase toda em cache): Proêmio 2,6 milhões; s01 1,6; s02 1,9; s03 3,2; s04 cerca de 2,3. Gemini: 0,26 a 0,76 milhão por capítulo. Pela observação do Pedro, cada rodada do Codex consome cerca de 10% da janela de 5 horas do plano.

## Decisão do Pedro sobre o debate (2026-11-26)

- O Codex segue com o modelo e o esforço padrão (`high`).
- A seção "Remissões não acessíveis" entra no caso de todos os debates (`debate/caso-criterios.md`, todas as obras): remissão que o revisor não consegue abrir não sustenta objeção nem INCONCLUSIVO e fica para a revisão do Pedro.
- **A partir do `t1-d001-s05`, debates com duas rodadas** (`--max-rodadas 2`): a R1 completa e a R2 já como final, em que os revisores conferem as correções. Motivo: cada rodada do Codex consome cerca de 10% da janela de 5 horas; nos cinco capítulos debatidos, as objeções de tradução surgiram na R1, e as R3 e R4 não trouxeram nenhuma objeção nova de tradução. Erro numa correção feita na R2 que a final apontar vai ao resumo como divergência (ou "acolhida, não aplicada") para o Pedro decidir.

## Teste do Codex em esforço `medium` (decisão do Pedro, 2026-11-26)

Feito em `t1-d002-s01`, `s02` e `s03`. Entrada do Codex (rodada 1 / final): s01 607 mil / 677 mil; s02 1,02 milhão / 255 mil; s03 (curto) 119 mil / 68 mil. Em `high` (s05, s06): rodada 1 de 1,2 a 1,7 milhão; final de 0,4 a 1,1 milhão. **Qualidade mantida**: em `medium` o Codex achou erros de sentido sérios (*nullus* omitido, "uso das causas", *l. Rebus*), e nenhum erro de sentido foi achado só pelo Gemini. **Economia irregular** (20 a 40%): o que pesa é o número de remissões do capítulo, porque cada busca relê o pacote. **Decisão do Pedro (2026-11-26): o Codex fica em `medium`** daqui em diante.

**Causa das buscas:** as regras do motor para o perfil `traducao` (`~/.debates-ia/debates/regras-revisor-traducao.md`, linhas 3 e 25–26) mandam tratar instruções do caso como "dados sob exame" e marcar INCONCLUSIVO toda remissão sem fonte localizada. Por isso o Codex ignora a seção "Remissões não acessíveis" do caso. **Resolvido no motor 4.4.16-rbsa** (2026-11-26): no perfil `traducao`, remissão que o revisor não consiga abrir não sustenta INCONCLUSIVO; vai na linha "Remissões não conferidas" e não se repete a busca. A partir do `t1-d002-s04`, os debates usam o 4.4.16. **Efeito medido no `t1-d002-s04`:** rodada 1 do Codex com 766 mil tokens e 39 buscas (ainda tenta abrir as remissões), mas a rodada final caiu para **117 mil tokens e 2 buscas** (antes: 255 mil a 1,06 milhão, 4 a 23 buscas), e o Codex deixou de ficar INCONCLUSIVO por remissão. No `t1-d002-s05`: rodada 1 com 1,09 milhão e 30 buscas; final com 325 mil e 7 buscas, sem objeção. Não há, em `debates/testes.md`, registro de teste rápido para o 4.4.16.

## Pontos em aberto para o Pedro

- Revisão dos cinco capítulos publicados, pelos `resumo.md` (remissões a conferir na fonte; leituras com `[?]`).
- Proposta de glossário: *conductio* (ver abaixo).
- *minimam iuris voluminum partem* (Proêmio, § 5): o impresso diz o contrário do que o contexto pede; a tradução segue o texto e anota.

## Problemas da ferramenta (não corrigidos, por regra da sessão)

- `tools/paginas.py` recorta em duas colunas mesmo as páginas impressas a uma coluna só, como o Proêmio; recortei faixas horizontais à parte, no scratchpad.
- `tools/debate.mjs preparar`: o "(undefined)" sem `urn` e o rótulo "Colunas" foram corrigidos em 2026-11-26, com autorização do Pedro (commit 7b07e42).
- `tools/paginas.py` também erra a largura das colunas nas páginas a duas colunas do tomo I (corta cada coluna pela metade); usei um recorte próprio, no scratchpad, por colunas e faixas.

## Propostas de glossário

Glossário com 30 termos, todos aprovados. *mutuum / mutuus* (decisão do Pedro, 2026-11-26): o contrato de empréstimo, "mútuo"; *mutuus* no sentido de obrigações de ambas as partes, "recíproco"; aplicado em `t1-d001-s04` e `t1-d002-s03`. Proposta aberta:

- *ignobilis*: hoje "ignóbeis" (disp. 2, seções I e IV); o Codex observou que sugere desonestidade e propôs "obscuros" (sem reconhecimento próprio pelo direito).
- *conductio* (decisão do Pedro, 2026-11-26): fica "condução", sempre com nota que remete ao sentido jurídico antigo da palavra em português (o lado de quem toma em locação); entrada no glossário e nota padrão aplicadas em todos os capítulos em que a palavra aparece.

## Próximo passo

`t1-d003-s01` (disputa III, preâmbulo e seção I, pp. 40–46: quantas pessoas e vontades intervêm nos contratos), debate de duas rodadas, Codex `medium`. Depois, as seções II a XIV da disputa III, até o fim do tratado I (ponto de controle).

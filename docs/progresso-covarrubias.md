# Progresso: Covarrubias, *Opera omnia*

## Etapa atual

**Produção em rascunho, sem debate, obra inteira** (decisão do Pedro, 26/11/2026: "Pode seguir com a tradução do Covarruvias com 20 agentes, sem debate por enquanto, até o fim. Coloque um revisor independente."). Cada capítulo: um agente produz (`docs/brief-covarrubias-rascunho.md`) e um segundo agente, independente, revisa (`docs/brief-covarrubias-revisao.md`), com `estado: rascunho`. Os debates com Codex e Gemini ficam para a revisão. Esse "até o fim" valeu como aprovação da calibração e do glossário inicial, que o plano mandava submeter ao Pedro.

## Feito em 26/11/2026

- **Fontes:** tomos I (634 p. do PDF, 399 MB) e II (642 p., 355 MB) baixados de Paderborn pelo navegador do app (Paderborn barra download por script com uma verificação Anubis), em `~/bibliotheca-fontes/covarrubias-opera/`.
- **Catálogo:** 344 capítulos (`obras/covarrubias-opera/catalogo.json`), pela estrutura de Paderborn (um PDF por seção) e pelos marcadores do PDF. Tomo I, 176: pmf 20, qp 16, pec 19, test 17, ray 16, suc 1, spons 48, am 13, sf 12, num 11, pre 3. Tomo II, 168: var1-var4 (*Variae resolutiones*), uff1-uff4 (*Natae* de Uffels), pq (*Practicae quaestiones*). Siglas novas: `ray` (c. *Raynutius*), `suc` (*De successionibus ab intestato*), `pre` (paratextos), `var1`-`var4`, `uff1`-`uff4`, `pq`.
- **Calibração** (t1-pmf-00 e t1-pmf-01, commit 1282aea): sinal de Brederode = colchetes retos `[ ]` (folha de rosto, PDF p. 4; ocorrências na p. 417 col. 2 e p. 418 col. 2); sem segunda camada na *Possessor malae fidei*; glossário inicial de 144 lemas, com as formas do Oñate nos termos comuns. Convenções no fim do brief do produtor.
- **Produção:** 5 workflows de 4 agentes (20 ao mesmo tempo), os 344 capítulos repartidos em rodízio na ordem do plano (pmf, qp, pec, resto do tomo I, tomo II).

## Parada de 26/11/2026 (pedido do Pedro: "vamos ir terminando e parar")

Os 5 workflows foram parados antes de alguma revisão independente terminar.

- **Publicados em rascunho (17), ainda sem a revisão do segundo agente:**
  - *Possessor malae fidei*: t1-pmf-00, 01, 02, 03, 04, 06, 07, 08, 09, 11, 12, 13, 14, 17, 18;
  - *Quamvis pactum*: t1-qp-00 e 01.
  - São 616 trechos, com 11 acréscimos de Brederode em `@a`: pmf-03 2, pmf-06 4, pmf-07 1, pmf-13 2, pmf-14 1, qp-01 1. Os trechos têm 75 leituras `[?]` (contagem por arquivo `la/`).
- **Pela metade, fora do repositório (nada se perdeu):** em `~/bibliotheca-fontes/covarrubias-opera/parciais-2026-11-26/`.
  - Latim: t1-pmf-05, 10, 15, 19, t1-qp-02 a 06 e t1-pec-02.
  - Tradução (parcial): pmf-05, 15, 19, qp-03, 05 e 06.
  - Saíram do repositório porque estão incompletos e o validador os recusaria. Podem servir de ponto de partida, mas é preciso conferir até onde vão.
- **Glossário:** 144 lemas, os da calibração; nenhum foi acrescentado pelos agentes.

## Como retomar

Rodar de novo o mesmo esquema (produtor e revisor por capítulo) com:

- **Revisão** dos 17 capítulos publicados acima;
- **Produção e revisão** dos 327 restantes do catálogo, a partir de t1-pmf-05.

O produtor pula o capítulo que já existe em rascunho e vai direto à revisão.

## Pontos em aberto para o Pedro

- O recorte de Paderborn nem sempre coincide com a divisão impressa (ex.: pmf-01 é p. 401-402, "Prima relectionis pars"; pmf-02 é "§. Vnicus", até a p. 404). Os agentes seguem o título impresso e registram a diferença; o `capitulo` do catálogo ("§ n") é provisório.
- As *Natae* de Uffels (tomo II, p. 345-384) são uma seção separada, comentário de outro autor às *Variae*; entraram no catálogo (uff1-uff4) e na produção, no fim da parte. Se preferir deixá-las fora, é só não publicar esses capítulos.
- Leituras duvidosas da calibração (pmf-01): s5 (grego), s21 (*actum*, talvez *aptum*), s28 (*praesertim*, talvez *praescriptam*), a conferir na edição de Salamanca de 1569.

## Próximo passo

Retomar (ver acima); ao fim de cada parte, auditoria de uniformidade dos termos, lista dos acréscimos de Brederode e das propostas de glossário (registradas aqui, sem esperar resposta).

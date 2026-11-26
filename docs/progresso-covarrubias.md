# Progresso: Covarrubias, *Opera omnia*

## Etapa atual

**Produção em rascunho, sem debate, obra inteira** (decisão do Pedro, 26/11/2026: "Pode seguir com a tradução do Covarruvias com 20 agentes, sem debate por enquanto, até o fim. Coloque um revisor independente."). Cada capítulo: um agente produz (`docs/brief-covarrubias-rascunho.md`) e um segundo agente, independente, revisa (`docs/brief-covarrubias-revisao.md`), com `estado: rascunho`. Os debates com Codex e Gemini ficam para a revisão. Esse "até o fim" valeu como aprovação da calibração e do glossário inicial, que o plano mandava submeter ao Pedro.

## Feito em 26/11/2026

- **Fontes:** tomos I (634 p. do PDF, 399 MB) e II (642 p., 355 MB) baixados de Paderborn pelo navegador do app (Paderborn barra download por script com uma verificação Anubis), em `~/bibliotheca-fontes/covarrubias-opera/`.
- **Catálogo:** 344 capítulos (`obras/covarrubias-opera/catalogo.json`), pela estrutura de Paderborn (um PDF por seção) e pelos marcadores do PDF. Tomo I, 176: pmf 20, qp 16, pec 19, test 17, ray 16, suc 1, spons 48, am 13, sf 12, num 11, pre 3. Tomo II, 168: var1-var4 (*Variae resolutiones*), uff1-uff4 (*Natae* de Uffels), pq (*Practicae quaestiones*). Siglas novas: `ray` (c. *Raynutius*), `suc` (*De successionibus ab intestato*), `pre` (paratextos), `var1`-`var4`, `uff1`-`uff4`, `pq`.
- **Calibração** (t1-pmf-00 e t1-pmf-01, commit 1282aea): sinal de Brederode = colchetes retos `[ ]` (folha de rosto, PDF p. 4; ocorrências na p. 417 col. 2 e p. 418 col. 2); sem segunda camada na *Possessor malae fidei*; glossário inicial de 144 lemas, com as formas do Oñate nos termos comuns. Convenções no fim do brief do produtor.
- **Produção:** 5 workflows de 4 agentes (20 ao mesmo tempo), os 344 capítulos repartidos em rodízio na ordem do plano (pmf, qp, pec, resto do tomo I, tomo II).

## Pontos em aberto para o Pedro

- O recorte de Paderborn nem sempre coincide com a divisão impressa (ex.: pmf-01 é p. 401-402, "Prima relectionis pars"; pmf-02 é "§. Vnicus", até a p. 404). Os agentes seguem o título impresso e registram a diferença; o `capitulo` do catálogo ("§ n") é provisório.
- As *Natae* de Uffels (tomo II, p. 345-384) são uma seção separada, comentário de outro autor às *Variae*; entraram no catálogo (uff1-uff4) e na produção, no fim da parte. Se preferir deixá-las fora, é só não publicar esses capítulos.
- Leituras duvidosas da calibração (pmf-01): s5 (grego), s21 (*actum*, talvez *aptum*), s28 (*praesertim*, talvez *praescriptam*), a conferir na edição de Salamanca de 1569.

## Próximo passo

Acompanhar os workflows; ao fim de cada parte, auditoria de uniformidade dos termos, lista dos acréscimos de Brederode e das propostas de glossário (registradas aqui, sem esperar resposta).

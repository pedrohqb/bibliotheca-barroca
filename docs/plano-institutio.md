# Plano: a *Institutio* de Calvino com contraponto católico (em estudo)

Proposta do Pedro (2026-11-26): traduzir a *Institutio christianae religionis* de Calvino (edição definitiva, Genebra, 1559) "usando as várias traduções existentes" e acompanhar cada capítulo de um **contraponto católico** tirado de autores tradicionais em domínio público. **Natureza da obra (Pedro, 2026-11-27): não é apologética.** O objetivo é resumir a controvérsia inteira em torno de cada capítulo: o que Calvino afirma, o que os católicos responderam, o que ele ou os seus replicaram e onde a discussão parou. O lado católico organiza a edição, mas cada parte fala com as próprias palavras e no seu argumento mais forte. O projeto ainda está em estudo: **nada foi produzido** e a obra ainda não existe em `obras/`. Este documento reúne o que já foi decidido e pesquisado para que outra sessão continue de onde a primeira parou.

## O que já existe

**Mapa de correspondência, capítulo a capítulo.** É uma planilha (artifact do Claude, na conta do Pedro):
https://claude.ai/artifact/5TNSDSAynmyB3vUkeAFsd8

Ela é a fonte de verdade do contraponto. Uma sessão no claude.ai a lê pelo conector Claude Docs (`read` com `ref` `{"object":"node","id":"3d154e59-551b"}`, `container` `{"kind":"project","id":"24131a2f-2888-4074-b370-e97dc2f25657"}`, `engine` `workbook`). Uma sessão na VM, sem esse conector, precisa de uma cópia: o Pedro baixa a planilha como .xlsx e a grava em `docs/institutio/mapa.xlsx`.

Aba **Mapa**, uma linha por capítulo (81 linhas: a Carta a Francisco I e os 80 capítulos; a *Epistola ad lectorem* entra na tradução, mas não pede contraponto):

| Coluna | Conteúdo |
|---|---|
| A, B | capítulo de Calvino (I, 1 … IV, 20) e assunto |
| C | correspondência em Coton: Direta, Parcial, Ausente |
| D | cobertura geral do contraponto: Boa (60), Parcial (8), Convergência (13), Fraca (0) |
| E | Coton, *Institutio Catholica* (1618): livro, capítulo, página |
| F | Belarmino, *Controversiae*: tratado, livro, capítulos |
| G | citações explícitas da *Institutio* feitas por Coton, com seção e página |
| H | link da imagem do scan de Coton (MDZ) |
| I | observações |
| J–Q | Trento; Pighius; Sadoleto; Francisco de Sales; Molanus; Duperron; Nicole e Arnauld; Möhler |
| R | outros autores (Petávio, Suárez, Vega, Stapleton, Cano, Soto, Molina, Bossuet, Catecismo Romano, Vaticano I, espirituais) |
| S | links de página de Vega e Stapleton |
| T | Padres citados por Calvino em cada capítulo (contagem) |
| U | resposta católica à leitura patrística de Calvino (12 capítulos) |
| V | cadeia fonte católica → réplica → tréplica católica, ou comentário do editor quando não há tréplica |
| W | Jansênio, *Augustinus*: lugares em que cita Calvino, com link para a tradução no site |

Aba **Notas**: contagens, critério da cobertura, edição e método de cada autor.

**Marcas de conferência** usadas nas células, que devem ser mantidas:

| Marca | Significa |
|---|---|
| `[conferida]` / `[conferido]` | lugar conferido no texto da fonte |
| `[sumário conferido]` | conferido no índice ou sumário de capítulos, não no corpo |
| `[estrutura conferida]` | só a divisão dos livros conferida no próprio texto |
| `[cita IV, 17]` | o autor cita ali aquele capítulo da *Institutio* |
| `[OCR]` | leitura do OCR, não conferida |
| sem marca | correspondência pelo assunto, no nível da obra |

Apresentação da obra para o site (rascunho): `docs/apresentacao-institutio-rascunho.md`.

## Decisões já tomadas

- Texto de Calvino: a edição de 1559, a última revista por ele, com as traduções existentes no processo.
- Contraponto só com autores em domínio público pelo critério brasileiro (Lei 9.610/98, art. 41: 70 anos contados de 1º de janeiro do ano seguinte à morte, ou seja, autores mortos até 1955).
- Eixo do contraponto: Coton (responde à *Institutio* na mesma forma de instituição completa e a cita dezenas de vezes) e Belarmino capítulo a capítulo; Trento e o Catecismo Romano como texto oficial; os demais completam onde Coton e Belarmino falham.
- Capítulos de convergência (sobretudo III, 6–10, II, 9 e II, 15) têm contraponto que mostra o acordo, não polêmica.
- Formato proposto (2026-11-27), a confirmar no piloto: sob cada capítulo de Calvino, uma nota curta do Pedro (o que está em jogo, a que seção a fonte responde, se há acordo) e um a três trechos das fontes, traduzidos e com o original ao lado; a nota descreve a controvérsia, não toma partido.
- **Decisões do Pedro (2026-11-27): quando Calvino respondeu à fonte católica, a réplica dele entra logo abaixo do trecho católico, seguida da tréplica católica; e a cadeia termina sempre do lado católico: com a tréplica histórica, se houver, ou com um comentário católico do editor** (cadeias abaixo).

## Réplicas e tréplicas

**Regra do Pedro (2026-11-27, confirmada): a cadeia termina sempre do lado católico** ("senão não acaba": a edição precisa de um ponto de parada). Quando há tréplica católica histórica, ela fecha a cadeia. Quando não há, a réplica entra mesmo assim, seguida de um **comentário católico do editor** que responde a ela. Quando Calvino já tinha morrido (1564), a réplica é de quem continuou a polêmica do lado reformado. A tréplica pode ser de outro autor católico, desde que responda à própria réplica, e não só ao tema. Cadeia por capítulo: coluna V da planilha.

| Fonte católica | Réplica | Tréplica católica | Capítulos |
|---|---|---|---|
| Pighius, *De libero hominis arbitrio* (1542) | Calvino, *Defensio … adversus calumnias Alberti Pighii* (1543) | Belarmino, *De gratia et libero arbitrio*, L. V, c. 17 e 20, L. VI, c. 10; *De amissione gratiae*, L. VI, c. 5 e 16 (citam os livros II, III, IV e VI da *Defensio*) | II, 2–5 |
| Pighius | Calvino, *De aeterna Dei praedestinatione* (1552) | Belarmino, *De amissione gratiae*, L. II, c. 2–7 (cita o prefácio) | I, 18; II, 4; III, 23 |
| Trento, sessões VI e VII (1547) | Calvino, *Acta Synodi Tridentinae cum Antidoto* (1547) | Belarmino: *De justificatione*, L. I, c. 13, 14 e 20, L. IV, c. 14; *De amissione gratiae*, L. I, c. 4–8; *De sacramentis in genere*, L. I, c. 1–4. Andrés de Vega, *De iustificatione*, L. XV, c. 23 | II, 7–8; III, 2; III, 4; III, 11; III, 17; III, 24; IV, 14; IV, 16 |
| Stapleton, *Principiorum fidei* (1578), e Belarmino | Whitaker, *Disputatio de Sacra Scriptura* (1588); *Duplicatio* (1594) | Stapleton, *Authoritatis ecclesiasticae … defensio* (1592) e *Triplicatio inchoata* (Antuérpia, 1596; BSB `bsb10168686`) | I, 7–9; IV, 8 |
| Duperron, conferência de Fontainebleau (1600) | Du Plessis-Mornay, *De l'institution … de l'Eucharistie* (1598) e as respostas posteriores | Duperron, *Traité de l'Eucharistie* (póstumo, 1622) | IV, 14; IV, 17 |
| Nicole, *Préjugez légitimes contre les calvinistes* (1671) | Jean Claude, *La défense de la Réformation* (1673) | Nicole, *Les prétendus réformez convaincus de schisme* (1684) | IV, 1–2 |
| Bossuet, *Histoire des variations* (1688) | Jurieu, cartas pastorais | Bossuet, *Avertissements aux protestants* e *Défense de l'Histoire des variations* (1689–1691) | IV, 1–2 |
| Möhler, *Symbolik* (1832) | F. C. Baur, *Der Gegensatz des Katholicismus und Protestantismus* (1834) | Möhler, *Neue Untersuchungen der Lehrgegensätze* (1834) | conforme os §§ |

**Réplicas sem tréplica histórica: entram com comentário católico do editor.**

| Fonte católica | Réplica | Capítulos |
|---|---|---|
| Sadoleto, carta aos genebrinos (1539) | Calvino, *Responsio ad Sadoletum* (1539) | Pref.; IV, 1–2 |
| Faculdade de Teologia de Paris, artigos de 1543 | Calvino, *Articuli … cum antidoto* (1544) | conforme o artigo (livre-arbítrio, fé e obras, sacramentos, santos, purgatório, primado) |
| Stapleton, *Universa iustificationis doctrina*, L. I–III (1582) | Whitaker, *De peccato originali* (1600) | II, 1–3; III, 3 |
| Coton, *Institution catholique* (1610) | Jacques Cappel, *Instruction chrestienne* (1619) | conforme o capítulo de Coton |
| Möhler, *Neue Untersuchungen* (1834) | Baur, *Erwiederung* (1834) | conforme os §§ |

Regras do comentário do editor:

- É identificado no site como comentário do editor, separado dos textos históricos, para que ninguém o tome por obra de autor antigo.
- Tem voz descritiva, de quem resume uma controvérsia, não de quem a vence: diz como a teologia católica das fontes do mapa responde à réplica, atribuindo cada posição a quem a sustenta ("Belarmino responde que…", "Trento distingue…"). Não declara vencedor.
- Só afirma o que as fontes sustentam, e cada afirmação remete ao lugar de onde vem. Nada de doutrina nova nem de opinião sem fonte.
- Registra também o que a réplica tem de certo (uma citação errada do lado católico, um abuso real) e o que ficou em aberto entre as partes.
- Curto: o necessário para fechar o ponto, no registro das notas do tradutor.
- Sai em rascunho e passa pela revisão do Pedro; se depois aparecer uma tréplica histórica, ela substitui o comentário.

Regras para todos os trechos, católicos ou reformados:

- Cada parte entra no seu argumento mais forte: escolhe-se o trecho que melhor representa a posição, não o mais fraco nem o mais virulento.
- A nota do editor sob cada capítulo descreve a controvérsia (o que está em jogo, onde há acordo, onde a divergência é real), sem tomar partido.
- Insultos e invectivas da época ficam no texto quando fazem parte do trecho, sem comentário moralizante.

As tréplicas de Belarmino foram conferidas no texto da edição Vivès; as demais datas e títulos, pelos catálogos. Todos os autores morreram antes de 1955.

## Jansênio

Pedido do Pedro (2026-11-27): usar o que der do *Augustinus*, que a Bibliotheca Barroca já está traduzindo. Busca nas 568 transcrições já feitas achou Jansênio citando Calvino em oito capítulos (coluna W): contra a justiça original como bem natural (I, 15), contra um Deus autor do pecado (I, 18; II, 4; III, 23), sobre a liberdade e a graça (II, 2–5) e sobre a predestinação (III, 21–24). O capítulo mais importante, *De gratia Christi*, L. VIII, c. 21 ("como esta concórdia da graça e do livre-arbítrio difere da opinião de Calvino"), ainda não foi traduzido; vale adiantá-lo na produção do *Augustinus*.

Regras:

- Jansênio entra como voz agostiniana do lado católico, sempre identificada como obra condenada (*In eminenti*, 1643; *Cum occasione*, 1653), com link para o capítulo traduzido no site, sem retraduzir.
- Não fecha cadeia de réplica: a tréplica ou o comentário do editor usa fontes não condenadas.
- Onde Jansênio lê Agostinho mais perto de Calvino do que Belarmino, a nota do editor registra as três posições; é um dos pontos em que a controvérsia atravessa o próprio lado católico.

## Decisões em aberto (perguntar ao Pedro antes de produzir)

1. **Formato do contraponto no site.** As obras atuais têm só latim e português alinhados por trecho (`@s`), com notas `@m`, `@n` e `@a`. O contraponto pede outra camada: nota por trecho, bloco por capítulo ou terceira coluna. Qualquer opção mexe em `tools/` e `site/`, o que não se faz no meio de produção de outra obra.
2. **Do latim ou das traduções.** O Pedro falou em traduzir "usando as várias traduções existentes". A regra das outras obras (`CRITERIOS.md`, e o Digesto em `docs/plano-digesto.md`) é traduzir do latim, com as traduções só como apoio, sem copiar delas. Confirmar com ele.
3. **Texto latino de base.** Impressão de 1559 (Genebra, Robert Estienne) digitalizada, pela regra do `CRITERIOS.md`; a de *Calvini Opera*, vol. 2 (Brunsvigae, 1864), só para conferência. Exemplar e scan ainda não escolhidos.
4. **Traduções de apoio.** Candidatas em domínio público: o francês de Calvino (1560), Norton (1561), Allen (1813), Beveridge (1845), o espanhol de Cipriano de Valera (1597). Battles (1960) e as notas de Barth-Niesel não estão em domínio público. Falta escolher e localizar os scans.
5. **Debate ou não.** O Digesto dispensou o debate; aqui o Pedro ainda não decidiu.
6. **Unidade e ids.** Provável: capítulo = capítulo de Calvino, trecho = seção (§); ids `l1-c01`… a definir.

## Fontes do contraponto (edições conferidas na pesquisa)

| Autor e obra | Edição | Onde |
|---|---|---|
| Coton, *Institutio Catholica* | Mainz [Colônia], 1618 | MDZ `bsb11296503` |
| Belarmino, *Opera omnia* | Paris, Vivès, 1870 | archive.org `operaomnia01bell_0` (*De Romano Pontifice*), `operaomnia05bell`, `operaomnia06bell_0` (*De gratia et libero arbitrio*) |
| Trento | trad. Waterworth, Londres, 1848 | archive.org |
| Catecismo Romano | trad. Donovan, 1829 | archive.org |
| Pighius, *De libero hominis arbitrio* | Colônia, 1542 | MDZ `bsb10196636` |
| Petávio, *Dogmata theologica* | Paris, Vivès, 1865 | archive.org `dogmatatheologi01goog`, `dogmatatheologic03peta`, `…04peta`, `…05peta` |
| Suárez, *Opera omnia* | Paris, Vivès, 1856 | archive.org `rpfranciscisuare01su`, `…02su`, `…09suar`, `…14su`, `…15su`, `…17su`, `…23su` |
| Andrés de Vega, *De iustificatione* | Aschaffenburg, 1621 | archive.org `bub_gb_-n4pgsLanUcC` |
| Stapleton, *Universa iustificationis doctrina* | Paris, 1582 | archive.org `bub_gb_m6H9c6v9Vx8C` |
| Stapleton, *Principiorum fidei doctrinalium demonstratio* | Paris, 1578 | archive.org `bub_gb_I7kabMcE6E8C` |
| Cano, *De locis theologicis* | Salamanca, 1563 | archive.org `bub_gb_U-F4pEoTtaAC` |
| Soto, *De natura et gratia* | ed. 1584 | archive.org `bub_gb_BhZyoRkGxtIC` |
| Molina, *Concordia* | Paris, Lethielleux, 1876 | archive.org `concordialiberia00moli` |
| Bossuet, *Histoire des variations* | 1844–1845 | archive.org `histoiredesvari01bossgoog`, `histoiredesvari02bossgoog` |
| Duperron, *Réfutation… des passages de S. Augustin* | Paris, 1624 | archive.org `bub_gb_11-8pBjWp-IC` |
| Duperron, *Traitté du S. Sacrement de l'Eucharistie* | 1629 | archive.org `bub_gb_r7HnSD-rk8cC` |
| Calvino, trad. Beveridge (apoio e contagem patrística) | Edimburgo, 1845 | archive.org `instituteschrist01calvuoft`, `institutesofreli02calvuoft`, `institutesofthec03calvuoft` |

As demais (Sadoleto em *Calvini Opera* 5; Francisco de Sales, trad. Mackey e ed. de Annecy; Molanus, 1771; Duperron, *Réplique au roi de la Grande-Bretagne*; Nicole, 1671; Möhler, trad. Robertson) estão descritas na aba Notas da planilha.

## Método de pesquisa que funcionou

- O shell não alcança o archive.org nem o MDZ (allowlist); a pesquisa roda no navegador (Claude in Chrome na VM, ou o navegador do app), com `fetch` em JavaScript na origem `https://archive.org`.
- archive.org: `advancedsearch.php?q=…&output=json` acha o item; `/metadata/<id>` dá o arquivo `_djvu.txt`; o texto inteiro se baixa de `/download/<id>/<arquivo>` e se guarda numa variável da página para várias buscas.
- Página do scan de um trecho: `https://<server>/fulltext/inside.php?item_id=<id>&doc=<id>&path=<dir>&q=<palavra>` devolve o índice da imagem; o link é `https://archive.org/details/<id>/page/n<índice>`. Pode cair uma página antes ou depois.
- MDZ: OCR por página em `https://api.digitale-sammlungen.de/ocr/<id>/<página>`; Paderborn: estrutura em `/eab/content/structure/<id>`.
- OCR de impressões antigas lê mal números de seção: toda citação de Calvino se confere pelo sumário da seção em Beveridge antes de ganhar `[conferida]`.

## Próximos passos

1. O Pedro decide as questões em aberto, a começar pelo formato do contraponto.
2. **Capítulo-piloto**, de ponta a ponta (tradução, cotejo, contraponto), para testar o formato antes dos 80. Sugestões: II, 2 (servidão da vontade: Coton, Belarmino, Trento, Stapleton e a disputa sobre Agostinho, que cruza com o *Augustinus*; cadeia completa: Pighius, a *Defensio* de Calvino e a tréplica de Belarmino) ou IV, 17 (a ceia: o teste mais exigente).
3. Pendências do mapa, sem urgência: estender a coluna U aos outros capítulos densos de Padres (III, 4, III, 5, IV, 1–2, IV, 4–5, IV, 12–13, IV, 19); conferir Báñez, Lessius, Luís de Granada, Franzelin, Fisher, Hosius, Wiseman, Vitória e as encíclicas de Leão XIII; links de página para Belarmino, Trento e Suárez; descer ao nível da seção (§) capítulo a capítulo, na própria produção.

## Prompt para retomar em outra sessão

```text
Bibliotheca Barroca: projeto da Institutio de Calvino com contraponto católico, ainda em estudo.

Leia antes de qualquer outra coisa: CLAUDE.md, CRITERIOS.md, README.md e docs/plano-institutio.md. O mapa de correspondência é a planilha indicada no plano (ou docs/institutio/mapa.xlsx, se existir); leia-a antes de propor qualquer coisa. Não crie obras/ para Calvino nem mexa em tools/ ou site/ sem que eu decida o formato do contraponto.

1. Diga em poucas linhas o estado do projeto e quais decisões em aberto do plano ainda dependem de mim.
2. Faça o que eu pedir ao final desta mensagem. Se for pesquisa no mapa, siga o método do plano, marque cada lugar com o nível de conferência que ele teve e grave na planilha sem apagar o que existe. Se for o piloto, só comece depois que as decisões 1 a 4 do plano estiverem tomadas.
3. Ao terminar, atualize docs/plano-institutio.md (o que mudou, decisões tomadas, próximos passos), faça commit só desse arquivo (e de docs/institutio/, se houver) e push.

Tarefa desta sessão:
```

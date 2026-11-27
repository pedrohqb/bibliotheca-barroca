# Plano: a *Institutio* de Calvino com contraponto católico (em estudo)

Proposta do Pedro (2026-11-26): traduzir a *Institutio christianae religionis* de Calvino (edição definitiva, Genebra, 1559) "usando as várias traduções existentes" e acompanhar cada capítulo de um **contraponto católico** tirado de autores tradicionais em domínio público. O projeto ainda está em estudo: **nada foi produzido** e a obra ainda não existe em `obras/`. Este documento reúne o que já foi decidido e pesquisado para que outra sessão continue de onde a primeira parou.

## O que já existe

**Mapa de correspondência, capítulo a capítulo.** É uma planilha (artifact do Claude, na conta do Pedro):
https://claude.ai/artifact/5TNSDSAynmyB3vUkeAFsd8

Ela é a fonte de verdade do contraponto. Uma sessão no claude.ai a lê pelo conector Claude Docs (`read` com `ref` `{"object":"node","id":"3d154e59-551b"}`, `container` `{"kind":"project","id":"24131a2f-2888-4074-b370-e97dc2f25657"}`, `engine` `workbook`). Uma sessão na VM, sem esse conector, precisa de uma cópia: o Pedro baixa a planilha como .xlsx e a grava em `docs/institutio/mapa.xlsx`.

Aba **Mapa**, uma linha por capítulo (81 linhas: a Carta a Francisco I e os 80 capítulos; a *Epistola ad lectorem* entra na tradução, mas não pede contraponto):

| Coluna | Conteúdo |
|---|---|
| A, B | capítulo de Calvino (I, 1 … IV, 20) e assunto |
| C | correspondência em Coton: Direta, Parcial, Ausente |
| D | cobertura geral do contraponto: Boa (51), Parcial (22), Convergência (8), Fraca (0) |
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

## Decisões já tomadas

- Texto de Calvino: a edição de 1559, a última revista por ele, com as traduções existentes no processo.
- Contraponto só com autores em domínio público pelo critério brasileiro (Lei 9.610/98, art. 41: 70 anos contados de 1º de janeiro do ano seguinte à morte, ou seja, autores mortos até 1955).
- Eixo do contraponto: Coton (responde à *Institutio* na mesma forma de instituição completa e a cita dezenas de vezes) e Belarmino capítulo a capítulo; Trento e o Catecismo Romano como texto oficial; os demais completam onde Coton e Belarmino falham.
- Capítulos de convergência (sobretudo III, 6–10, II, 9 e II, 15) têm contraponto que mostra o acordo, não polêmica.
- Formato proposto (2026-11-27), a confirmar no piloto: sob cada capítulo de Calvino, uma nota curta do Pedro (o que está em jogo, a que seção a fonte responde, se há acordo) e um a três trechos das fontes, traduzidos e com o original ao lado.
- **Decisão do Pedro (2026-11-27): quando Calvino respondeu à fonte católica, a réplica dele entra logo abaixo do trecho católico**, e, se houver, a tréplica católica depois dela (cadeias abaixo).

## Réplicas e tréplicas

Quando Calvino já tinha morrido (1564), a réplica é de quem continuou a polêmica do lado reformado. Só entram as cadeias que tocam o capítulo de Calvino em questão.

| Fonte católica | Réplica | Tréplica católica | Capítulos |
|---|---|---|---|
| Pighius, *De libero hominis arbitrio* (1542) | Calvino, *Defensio sanae et orthodoxae doctrinae de servitute et liberatione humani arbitrii adversus calumnias Alberti Pighii* (1543); depois *De aeterna Dei praedestinatione* (1552) | não há: Pighius morreu em 1542 | II, 2–5; III, 21–24 |
| Sadoleto, carta aos genebrinos (1539) | Calvino, *Responsio ad Sadoletum* (1539) | não há conhecida | Pref.; IV, 1–2 |
| Trento, decreto da justificação (sessão VI, 1547) | Calvino, *Acta Synodi Tridentinae cum Antidoto* (1547) | Andrés de Vega, *De iustificatione*, L. XV, c. 23 (resposta às três calúnias de Calvino contra os cânones) e a resposta ao *Antidotum* anexa à edição de 1621 | III, 2–4; III, 11–18 |
| Faculdade de Teologia de Paris, artigos de 1543 | Calvino, *Articuli … cum antidoto* (1544) | a localizar | vários |
| Stapleton, *Principiorum fidei* (1578) e Belarmino | Whitaker, *Disputatio de Sacra Scriptura* (1588) | Stapleton, *Authoritatis ecclesiasticae … defensio* (1592); Whitaker, *Duplicatio* (1594); Stapleton, *Triplicatio inchoata* (Antuérpia, 1596; BSB `bsb10168686`) | I, 7–9; IV, 8 |
| Stapleton, *Universa iustificationis doctrina* (1582), L. I–III | Whitaker, *De peccato originali* (1600, póstumo) | não há: Stapleton morreu em 1598 | II, 1–3; III, 3 |
| Coton, *Institution catholique* (1610) | Jacques Cappel, *Instruction chrestienne* (1619) | a localizar | vários |
| Duperron, na conferência de Fontainebleau (1600) | Du Plessis-Mornay, nas respostas posteriores à conferência | Duperron, *Traité de l'Eucharistie* (póstumo, 1622), que responde também ao livro de Mornay de 1598, *De l'institution … de l'Eucharistie* | IV, 14; IV, 17 |
| Nicole, *Préjugez légitimes contre les calvinistes* (1671) | Jean Claude, *La défense de la Réformation* (1673) | Nicole, *Les prétendus réformez convaincus de schisme* (1684) | IV, 1–2 |
| Bossuet, *Histoire des variations* (1688) | Jurieu, cartas pastorais; Basnage | Bossuet, *Avertissements aux protestants* e *Défense de l'Histoire des variations* (1689–1691) | IV, 1–2; III, 2; III, 24; IV, 17 |
| Möhler, *Symbolik* (1832) | F. C. Baur, *Der Gegensatz des Katholicismus und Protestantismus* (Tübingen, 1834) | Möhler, *Neue Untersuchungen der Lehrgegensätze* (1834); Baur ainda respondeu com a *Erwiederung* (1834) | conforme os §§ |

Todos os autores da tabela morreram antes de 1955; o domínio público vale também para as réplicas. As datas e títulos sem edição indicada ainda não foram conferidos no scan.

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
2. **Capítulo-piloto**, de ponta a ponta (tradução, cotejo, contraponto), para testar o formato antes dos 80. Sugestões: II, 2 (servidão da vontade: Coton, Belarmino, Trento, Stapleton e a disputa sobre Agostinho, que cruza com o *Augustinus*) ou IV, 17 (a ceia: o teste mais exigente).
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

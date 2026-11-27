# Plano: pandectística — Savigny, *System des heutigen römischen Rechts*, Windscheid, *Lehrbuch des Pandektenrechts*, e obras afins (em estudo)

Pedido do Pedro (2026-11-27): organizar na Bibliotheca Barroca a tradução do *Sistema do direito romano atual* de Savigny e das *Pandectas* de Windscheid, **a partir dos originais alemães** tomados da web, com levantamento das traduções existentes em domínio público e **tradução comparada** com elas. O Pedro enviou as duas traduções que já tinha montado para impressão (projeto de fac-símiles): Fadda e Bensa, *Diritto delle Pandette*, e Mesía e Poley, *Sistema del derecho romano actual*.

São as duas primeiras obras não latinas do projeto: o original é alemão, impresso em Fraktur. O que vale para o latim nas outras obras (transcrição normalizada, tradução do original, glossário fixo, cotejo) vale aqui para o alemão, com as adaptações abaixo. **Nada foi produzido ainda**: as obras não existem em `obras/` (lá elas apareceriam no site). Este documento reúne o que foi pesquisado e decidido, para que outra sessão continue daqui.

A lista de fontes, com os identificadores de cada volume, também está em `docs/pandectistica/fontes.json`, para os scripts.

## Decisões já tomadas (valem por regra do projeto)

- **Digesto antes** (Pedro, 2026-11-27): a tradução das obras deste plano (calibração e produção) só começa depois de terminado o Digesto (`docs/plano-digesto.md`), porque a pandectística cita o Digesto a cada passo e as citações devem remeter à tradução já feita, com o glossário latino fixado. A etapa 0 (preparação) pode correr antes, em paralelo: fontes, catálogos, datas de morte dos tradutores; a mudança em `tools/` e `site/` só num momento em que nenhuma sessão do Digesto esteja rodando.
- **Duas obras, um plano** (Pedro, 2026-11-27): Savigny e Windscheid são obras separadas no repositório e no site (`obras/savigny-system/` e `obras/windscheid-pandekten/`, cada uma com `obra.json`, catálogo, glossário e página próprios), mas o planejamento fica neste documento único, porque as duas dividem as mudanças em `tools/`, os critérios do alemão e a base terminológica.
- **Tradução do original alemão**, nunca de uma tradução. As traduções históricas servem ao cotejo, trecho a trecho; nada se copia delas, e divergência de sentido entre elas vai em `@n`.
- **Sem debate entre IAs** (regra do Pedro de 2026-11-27, no `CRITERIOS.md`): as duas obras têm traduções existentes, então são traduzidas do alemão, comparadas com elas e ficam `estado: cotejada` ("tradução com comparações" no site). As edições efetivamente cotejadas vão em `obra.json` → `traducoes_cotejadas` e no `processo` de cada capítulo.
- Registro, fidelidade, glossário fixo, notas e limitações: os do `CRITERIOS.md`.
- Domínio público pelo critério brasileiro (Lei 9.610/98, art. 41: autor morto até 1955). Cumprem: Savigny († 1861), Windscheid († 1892), Scialoja († 1933), Fadda († 1931), Bensa († 1928), Holloway († 1893). Guenoux, Mesía, Poley, Rattigan e Guthrie publicaram entre 1840 e 1884; as datas de morte deles se conferem na etapa 0, antes de entrarem em `traducoes_cotejadas`.

## As obras e as edições de base

### Savigny, *System des heutigen römischen Rechts*

Edição única em vida do autor: Berlim, Veit und Comp., 1840–1849, 8 volumes, e o volume de índices de O. L. Heuser (1851). Não houve segunda edição revista; as reimpressões modernas são fac-símiles. **Base: o exemplar da Bayerische Staatsbibliothek digitalizado pelo MDZ**, com OCR de boa qualidade da Fraktur (testado nos vols. 1, 7 e 8).

| Vol. | Ano | §§ | Apêndices (*Beylagen*) | MDZ | Imagens |
|---|---|---|---|---|---|
| 1 | 1840 | 1–59 | I–II | `bsb10565865` | 492 |
| 2 | 1840 | 60–103 | III–VII | `bsb10565866` | 574 |
| 3 | 1840 | 104–141 | VIII | `bsb10565867` | 488 |
| 4 | 1841 | 142–203 | IX–XI | `bsb10565868` | 630 |
| 5 | 1841 | 204–255 | XII–XIV | `bsb10565869` | 664 |
| 6 | 1847 | 256–301 | a conferir | `bsb10565870` | 556 |
| 7 | 1848 | 302–343 | a conferir | `bsb10565871` | 334 |
| 8 | 1849 | 344–400 | a conferir | `bsb10565872` | 562 |
| Índices (Heuser) | 1851 | — | — | `bsb10565873` | 398 |

Limites dos §§ e apêndices lidos no OCR dos sumários e nos cabeçalhos das traduções; o catálogo da etapa 0 os confere volume a volume. O índice de Heuser não se traduz (serve para montar o catálogo). Fora do escopo: o *Obligationenrecht* (1851–1853), obra à parte, embora continue o *System*.

### Windscheid, *Lehrbuch des Pandektenrechts*

Nove edições: 1ª (Düsseldorf, 1862–1870) a 7ª (Frankfurt, 1891) pelo autor; 8ª (1900–1901) e 9ª (1906) refeitas por Theodor Kipp "em exposição comparada com o direito civil alemão" (o BGB). **Base: a 7ª edição (Frankfurt a. M., Literarische Anstalt Rütten & Loening, 1891), a última revista por Windscheid**, no exemplar da BSB digitalizado pelo MDZ (OCR da Fraktur disponível). As edições de Kipp servem só para conferir leitura difícil; o que Kipp acrescentou não entra.

| Vol. | Conteúdo | §§ | MDZ | Imagens |
|---|---|---|---|---|
| 1 | Introdução; livros I–III (direito em geral, direitos em geral, direito das coisas) | 1–249 | `bsb11637299` | 788 |
| 2 | livros IV–V (obrigações, família) | 250–526 | `bsb11637300` | 864 |
| 3 | livro VI (sucessões) | 527–678 | `bsb11637301` | 504 |

Há §§ com letra (ex.: § 37a); os ids precisam aceitá-los. Outros exemplares, para conferência: 6ª ed. (1887) no Internet Archive (`lehrbuchdespande01wind`, `…02wind`, `…03wind`, Toronto, com OCR) e no MPIER; 7ª ed., vol. 2, no Internet Archive (`lehrbuchdespand00windgoog`); 8ª ed. no Internet Archive (`lehrbuchdespand01kippgoog`, `lehrbuchdespand01windgoog`, `lehrbuchdespand00kippgoog`); 9ª ed., vol. 1, `lehrbuchdespand03kippgoog`.

**Acesso ao MDZ** (testado): OCR por página em `https://api.digitale-sammlungen.de/ocr/<bsb>/<n>` (hOCR); manifesto IIIF em `https://api.digitale-sammlungen.de/iiif/presentation/v2/<bsb>/manifest`, cujos rótulos dão a página impressa (ex.: `XXXIV (0040)`); imagem em `https://api.digitale-sammlungen.de/iiif/image/v2/<bsb>_<n com 5 dígitos>/full/1600,/0/default.jpg`; visualizador `https://www.digitale-sammlungen.de/de/view/<bsb>?page=<n>`.

## Traduções para o cotejo

### Savigny

| Língua | Tradução | Feita de | Cobre | Onde | Peso no cotejo |
|---|---|---|---|---|---|
| italiano | Vittorio Scialoja, *Sistema del diritto romano attuale*, 8 vols. (Turim, UTET, 1886–1898) | alemão | obra inteira | Biblioteca Digitale Lombarda (exemplar da Univ. de Brescia), registro `BDL-OGGETTO-1965`, volumes `1966` a `1974`; visualizador `https://www.bdl.servizirl.it/bdl/bookreader/index.html?path=fe&cdOggetto=<n>`; o visualizador tem exportação em PDF | **principal**: tradução de romanista de primeira linha, direto do alemão |
| francês | Charles Guenoux, *Traité de droit romain*, 8 tomos (Paris, Firmin Didot; 1ª ed. 1840–1851; 2ª ed. 1855–1860) | alemão, em vida de Savigny | obra inteira | Internet Archive, 2ª ed. completa (exemplares da Biblioteca Nacional Central, via Google): t. I `bub_gb_JRilKdkPsLYC`, II `bub_gb_tzhhDup6TRgC`, III `bub_gb_cXx4LRUWDqgC`, IV `bub_gb_ViJJspxLvbAC`, V `bub_gb_RqGZLmTy6cAC`, VI `bub_gb_coKxmRxT2r0C` (outro: `bub_gb_Dt2tevinwbEC`), VII `bub_gb_L5ZLztkaAowC` (outros: `bub_gb_pJta4LzfeJQC`, `traitdedroitrom00savigoog`), VIII `bub_gb_DxAAGby2PKAC`; Toronto: `traitdedroitroma01savi`, `…02savi`, `…03savi`, `…04savi`, `traitdedroitro06savi`, `traitdedroitroma08savi`; 1ª ed., t. I–VI: `bub_gb_3sZc39Re000C` (1840), `bub_gb_H-GjN-XQnXsC` (1841), `bub_gb_E8hz0uO3kVMC` (1843), `bub_gb_3n1B_NuKnLgC` (1845), `bub_gb_ZwPK4qitYu0C` (1846) | **principal** |
| espanhol | Jacinto Mesía e Manuel Poley, *Sistema del derecho romano actual*, 6 tomos (Madrid, F. Góngora, 1878–1879), com prólogo de Durán y Bas | **francês de Guenoux** | obra inteira (§§ 1–400 em 6 tomos) | pasta do Pedro (PDFs montados dos scans do Google, com texto); Internet Archive `BRes1421811` a `BRes1421816` (Complutense) | secundário: testemunho de terceira mão; serve para a terminologia de língua ibérica e para mostrar onde Guenoux foi seguido |
| inglês | William Holloway, *System of the Modern Roman Law*, vol. I (Madras, Higginbotham, 1867) | alemão | vol. 1 (§§ 1–59) | Internet Archive `india.history.resource.117230` (só PDF) | apoio no vol. 1 |
| inglês | William Henry Rattigan, *Jural Relations, or the Roman Law of Persons…* (Londres, Wildy, 1884) | alemão | vol. 2 (§§ 60–103) | Internet Archive `JuralRelations` (reimpressão fac-similar de 1979) | apoio no vol. 2 |
| inglês | William Guthrie, *Private International Law…* (Edimburgo, T. & T. Clark, 1869; 2ª ed. 1880) | alemão | vol. 8 (§§ 344–400) | Internet Archive `privateinternat01guthgoog` (1869), `privateinternati00saviuoft` (1880, Toronto) | apoio no vol. 8; usar a 2ª ed. |

Não entram: Paride Zaiotti, *Sistema del diritto romano attuale*, vol. I (Veneza, 1856; Internet Archive `sistemadeldirittoromanosavigny1`), parcial e anterior a Scialoja (pode servir de consulta no vol. 1); as versões napolitanas de Guariglia (1845) e Adinolfi (1884, só o fasc. 1), não localizadas; a tradução portuguesa de Ciro Mioranza (Ijuí, Unijuí, 2004), protegida.

### Windscheid

| Língua | Tradução | Cobre | Onde | Peso |
|---|---|---|---|---|
| italiano | Carlo Fadda e Paolo Emilio Bensa, *Diritto delle Pandette*, "prima traduzione italiana sola consentita dall'Autore e dagli Editori, fatta sull'ultima edizione tedesca" (Turim, UTET, 1902–1904; vol. I na "nuova ristampa stereotipa", 1925) | texto inteiro (§§ 1–678) | pasta do Pedro: vol. I (1925, 922 pp.), II/1 (408), II/2 (608; faltam as pp. 10–11 do exemplar de Harvard, substituídas por folha de aviso), III/1 (466; termina com "Fine del vol. III ed ultimo della traduzione"). Sem camada de texto; exemplares com OCR no Internet Archive (Harvard via Google): `dirittodellepan02windgoog` (1902), `dirittodellepan00windgoog` e `dirittodellepan01windgoog` (1904) | **única tradução completa** |

Pontos a saber sobre Fadda e Bensa:

- A tradução começou em 1886 (fascículos) e, pela "Avvertenza dei traduttori", estava "già assai progredita" quando saiu a 7ª edição (1891). **A edição alemã que ela segue em cada parte ainda não está conferida**: a calibração compara alguns §§ do italiano com a 6ª e a 7ª edições e registra o resultado aqui. Onde o italiano seguir texto anterior ao de 1891, a diferença não é erro de tradução.
- As **notas dos tradutores** (o célebre comentário de direito italiano, publicado à parte, continuado depois por Bonfante e Maroi sem chegar ao fim e reunido nos vols. IV e V da reedição de 1930) não são de Windscheid e **ficam fora**: não se traduzem nem se cotejam. O Pedro não as tem, e não fazem falta para o cotejo do texto.

Não entram: a tradução russa do vol. 1 (São Petersburgo, sob a direção de S. V. Pakhman), citada no dicionário Brockhaus-Efron e não localizada; a tradução espanhola da 1ª edição publicada no Internet Archive em 2026 (`windscheid-pandectas-1862-traduccion`), recente e sem situação de direitos clara pelo critério brasileiro.

**Windscheid tem uma só tradução para o cotejo.** A regra do projeto (obra com tradução existente fica `cotejada`, sem debate) vale assim mesmo; se o Pedro quiser uma segunda leitura, ver a decisão 6.

## Ampliação: outras obras da pandectística (levantamento de 2026-11-27)

O Pedro pediu (2026-11-27) o levantamento de mais quatro obras, para entrarem no mesmo plano. Cada uma seria uma obra própria em `obras/`, com o mesmo método (tradução do alemão, cotejo, `estado: cotejada`, sem debate). Identificadores em `docs/pandectistica/fontes.json`. As datas de morte dos tradutores marcados com "a conferir" se verificam antes de entrarem em `traducoes_cotejadas`.

### Savigny, *Das Obligationenrecht als Theil des heutigen römischen Rechts* (`savigny-obligationenrecht`)

Continuação direta do *System*, de que é a parte especial das obrigações: 2 vols., Berlim, Veit, 1851–1853, edição única. **Base: MDZ** `bsb10565883` (vol. 1, 1851) e `bsb10565884` (vol. 2, 1853); outros exemplares no Internet Archive (`dasobligationen01savigoog`, `dasobligationen02savigoog`, `dasobligationenr02savi`). Capítulo = §, na numeração própria da obra.

| Língua | Tradução | Onde | Observação |
|---|---|---|---|
| francês | C. Gérardin e P. Jozon, *Le droit des obligations*, 2 tomos (Paris, A. Durand, 1863; 2ª ed., Paris, Thorin, 1873) | IA, 1ª ed.: `bub_gb_lkaoHfp8XXQC` (t. I), `bub_gb_XNf1zC6BaPYC`, `ledroitdesoblig01jozogoog`, `ledroitdesoblig02jozogoog`; 2ª ed.: `ledroitdesoblig00hippgoog`, `ledroitdesoblig00jozogoog` | principal; datas de morte a conferir |
| italiano | Giovanni Pacchioni, *Le obbligazioni*, 2 vols. (Turim, UTET, 1912–1915) | vol. 2 (1915) na biblioteca digital da Faculdade de Direito da Univ. Masaryk (Brno), acesso aberto: `digi.law.muni.cz/handle/digilaw/22581`; vol. 1 a localizar no mesmo acervo | principal; Pacchioni († 1947) |

Não é tradução: A. Brown, *An Epitome and Analysis of Savigny's Treatise on Obligations* (Londres, 1872; IA `anepitomeandana00savigoog`), só consulta.

### Jhering, *Culpa in contrahendo oder Schadensersatz bei nichtigen oder nicht zur Perfection gelangten Verträgen* (`jhering-culpa-in-contrahendo`)

Artigo publicado nos *Jahrbücher für die Dogmatik des heutigen römischen und deutschen Privatrechts*, vol. 4 (Jena, 1861), pp. 1 ss. (IA `jahrbcherfrdied00jhergoog`, onde abre o volume), e reimpresso nos *Gesammelte Aufsätze*, vol. 1 (Jena, Fischer, 1881), pp. 327 ss. (MDZ `bsb11639598`; IA `bub_gb_-HQDAAAAQAAJ`, `bub_gb_tLFBAAAAYAAJ`). **Base proposta: a primeira publicação (1861)**, conferida com a reimpressão de 1881, que registra a data do volume como 1860; se Jhering tiver mudado o texto em 1881, a decisão entre as duas vai ao Pedro. Obra curta (cerca de 110 páginas): capítulo = seção do artigo.

| Língua | Tradução | Onde | Observação |
|---|---|---|---|
| francês | O. de Meulenaere, "De la culpa in contrahendo…", em Jhering, *Œuvres choisies* (Paris, Marescq, 1893) | IA `uvreschoisiestr00meulgoog` (o sumário do texto, com o capítulo III, "Casuistique de la culpa in contrahendo", está nesse volume) | **única tradução em domínio público**; Meulenaere nasceu em 1840, data de morte a conferir |

Não entram: as traduções modernas para o italiano (2005) e para o português (2008), protegidas.

### Savigny, *Das Recht des Besitzes* (`savigny-besitz`)

Primeira obra de Savigny (1803), com seis edições em vida: 1803, 1806, 1818, 1822, 1827 e 1837; a 7ª (Viena, 1865) é póstuma, de Rudorff, a partir de notas deixadas pelo autor e com apêndice do editor. **Base proposta: a 6ª edição (Giessen, Heyer, 1837), a última publicada pelo autor**, MDZ `bsb10567078` (IA `dasrechtdesbesi00savigoog`). Alternativa: a 7ª, com o que for de Rudorff tirado do corpo e posto em rodapé, como os acréscimos de Brederode no Covarrubias (`@a`); a 7ª não foi localizada no Internet Archive (procurar no MDZ e no Google Books). Edições anteriores no MDZ, para conferência: 1803 (`bsb10567076`, `bsb11347406`), 1806 (`bsb10553316`), 1818 (`bsb11101052`). Capítulo = §.

| Língua | Tradução | Feita da | Onde | Observação |
|---|---|---|---|---|
| inglês | Sir Erskine Perry, *Von Savigny's Treatise on Possession; or the Jus Possessionis of the Civil Law* (Londres, S. Sweet, 1848) | 6ª ed. | IA `india.history.resource.41446` | principal se a base for a 6ª; Perry († 1882) |
| francês | Jules Beving, *Traité de la possession d'après les principes du droit romain* (Bruxelas, Hauman, 1840) | 6ª ed. (a conferir) | IA `traitdelaposses00bevigoog` | data de morte a conferir |
| francês | Henri Staedtler, *Traité de la possession en droit romain* (Bruxelas, Bruylant, 1870; Paris, Durand, 1879) | 7ª ed. (Rudorff) | IA `traitdelaposses01staegoog` (1870), `traitdelapossess00savi` (1879) | principal se a base for a 7ª; data de morte a conferir |
| italiano | Pietro Conticini, *Il diritto del possesso* (Florença, Pezzati, 1839) | a conferir | IA `bub_gb_EEp1S36NLRsC` | secundário; data de morte a conferir |
| italiano | Raffaele Andreoli, *Trattato del possesso secondo i principii del dritto romano*, traduzido e anotado (Nápoles, Pedone Lauriel, 1857) | a conferir | IA `bub_gb_-7M6GfDp7bAC` | data de morte a conferir |
| espanhol | *Tratado de la posesión según los principios de derecho romano* (Madrid, Sociedad Literaria y Tipográfica, 1845) | provavelmente do francês | IA `bub_gb_CuC_21Mf5qMC` | tradutor não identificado na folha de rosto; secundário |

### Savigny, *Vom Beruf unsrer Zeit für Gesetzgebung und Rechtswissenschaft* (`savigny-beruf`)

O manifesto da Escola Histórica contra a proposta de codificação de Thibaut: 1ª ed. Heidelberg, Mohr, 1814 (MDZ `bsb10740690`); 2ª ed. "vermehrte" 1828 (IA `bub_gb_c6VLAAAAcAAJ`), com prefácio novo e pequenas correções; 3ª ed. 1840 (IA `vomberufunsrerz00savigoog`), que repete a 2ª. **Base proposta: a 2ª edição (1828)**, a última revista pelo autor, com as variantes de 1814 que mudem o sentido em `@n`; alternativa: 1814, o texto da polêmica. Obra curta (12 capítulos e apêndices): capítulo = capítulo do autor.

| Língua | Tradução | Feita de | Onde | Observação |
|---|---|---|---|---|
| inglês | Abraham Hayward, *Of the Vocation of Our Age for Legislation and Jurisprudence* (Londres, Littlewood, [1831]) | alemão (reproduz a edição só em parte) | a localizar (Google Books, HathiTrust); no IA só há a reimpressão de 1986 (`specialediionofv0000fred`) | principal; Hayward († 1884) |
| italiano | *La vocazione del nostro secolo per la legislazione e la giurisprudenza*, 2ª ed. italiana, ed. Giuseppe Tedeschi (Verona, 1857, "Biblioteca giuridica teorico-pratica", vol. 1) | alemão | a localizar | Tedeschi cortou notas e acrescentou outras; datas a conferir |
| espanhol | Adolfo Posada, *De la vocación de nuestro siglo para la legislación y la ciencia del derecho* (Madrid, La España Moderna, s.d., fim do séc. XIX) | **italiano de Verona, 1857** | a localizar | terceira mão; Posada († 1944) |

Não entram, por protegidas: as traduções francesa de Alfred Dufour (2006) e espanholas de Martínez Neira e Calatayud (Universidad Carlos III, 2015, acesso aberto, mas protegida) e de Gómez (UNED, da 2ª ed.); podem servir só de consulta, sem cópia.

### Ordem de produção (decidida)

O Pedro aprovou as quatro obras e deixou a ordem a critério do plano (2026-11-27). Ordem fixada, depois do Digesto:

1. **Jhering, *Culpa in contrahendo***: curta, serve de piloto do método alemão (transcrição da Fraktur, notas do autor, cotejo, glossário).
2. **Savigny, *Vom Beruf unsrer Zeit***: curta; segundo piloto, já com Savigny, e o programa que o *System* executa.
3. **Savigny, *System des heutigen römischen Rechts***: fixa a terminologia de que dependem as demais.
4. **Savigny, *Obligationenrecht***: continuação do *System*.
5. **Savigny, *Recht des Besitzes***.
6. **Windscheid, *Lehrbuch des Pandektenrechts***: a síntese, que herda a terminologia das anteriores.

A calibração (etapa 1) passa a ser a *Culpa in contrahendo* inteira, mais os §§ 4–5 e 52 do *System*, que fixam *Rechtsverhältniß* e *Rechtsinstitut*; os §§ de Windscheid da calibração ficam para o início dele. Nada impede adiantar uma obra se o Pedro pedir.

## Possível no futuro: Glück, *Ausführliche Erläuterung der Pandecten*

Pedido do Pedro (2026-11-27): registrar como obra possível, sem data. **Não entra na ordem de produção.**

O comentário às Pandectas de Christian Friedrich von Glück (Erlangen, Palm, depois Palm & Enke), que segue a ordem do Digesto livro a livro e título a título, "nach Hellfeld", é o grande repertório do *usus modernus* às portas da pandectística. Glück trabalhou nele cerca de quarenta anos e não o terminou: planejado para seis volumes, tinha 35 à morte dele (1831). Continuaram-no Mühlenbruch, Fein, Arndts, Leist, Burckhard, Czyhlarz, Salkowski, Ubbelohde e outros, em séries por livros do Digesto, até o fim do século XIX; volumes de 600 páginas são comuns (ex.: série dos livros 41 e 42, t. 1, 1887, XII + 628 pp.).

**Tamanho:** só a parte de Glück passa de 15 mil páginas, várias vezes o *Augustinus* (cerca de 2.300 colunas em fólio); com as continuações, muito mais. É, de longe, a maior obra cogitada na Bibliotheca.

**Fontes já vistas (a levantar por inteiro quando for o caso):** volumes no MDZ e na Staatsbibliothek Bamberg (via Deutsche Digitale Bibliothek), na Freie Universität Berlin (Refubium), em Halle (Share_it, `opendata.uni-halle.de`), na biblioteca digital da Univ. Masaryk (`digi.law.muni.cz`, ex.: `digilaw/35665`) e no Internet Archive (ex.: `ausfhrlicheerlu00burcgoog`). Várias tiragens dos primeiros volumes têm título diferente (*Versuch einer ausführlichen Erläuterung…*).

**Tradução para o cotejo:** a italiana, *Commentario alle Pandette* (Milão, Vallardi, desde 1888), dirigida por Filippo Serafini e Pietro Cogliolo, com notas de muitos colaboradores (entre eles Fadda). Antes de usá-la, conferir volume a volume a data de morte de cada tradutor e anotador, porque a série se estendeu pelo século XX e há volumes de autores mortos depois de 1955, protegidos pelo critério brasileiro.

**Como poderia entrar:** a obra inteira só depois de todas as outras, se o método se mostrar sustentável nessa escala. Antes disso, cabe uma **seleção de títulos** ligada às demais obras (por exemplo, pactos, boa-fé, *culpa*, posse, prescrição), com o mesmo método: tradução do alemão, cotejo com o italiano, capítulo = título do Digesto, remissão ao título correspondente da tradução do Digesto desta biblioteca.

## Forma no repositório (proposta)

- Obras: `obras/savigny-system/` e `obras/windscheid-pandekten/`, com `la/` (a pasta do original em todas as obras, aqui com o alemão) e `pt/`; `obra.json` → `idiomas: {"la": "Alemão", "pt": "Português"}`.
- **Capítulo = §** (ids `p001`…`p400` no Savigny; `p001`…`p678`, com `p037a` etc., no Windscheid). Apêndices do Savigny: `b01`…; prefácios (*Vorrede*): `v1`…; no Windscheid, o prefácio da 7ª edição: `v7`. §§ longos podem ser divididos em partes `p009-1`, `p009-2` no catálogo, sem mudar a numeração do autor.
- **Trecho = parágrafo** da impressão (*Absatz*); `@p` quando o parágrafo abre linha nova com recuo.
- **Referência = página** da edição de base (`referencia: pagina`), lida no rótulo do manifesto IIIF; o link do trecho abre a página no MDZ.
- **Notas de rodapé do autor**: nos dois autores são longas e essenciais (Windscheid põe nas notas toda a literatura e a discussão). Ficam no rodapé do trecho, com âncora no ponto da chamada (`(a)` no Savigny, `¹` no Windscheid), transcritas e traduzidas. Listas de literatura e remissões a fontes (D., C., Nov.) não se traduzem: mantêm-se como impressas; só a prosa da nota se traduz.
- **Citações latinas** (Digesto, Código, glosadores): ficam em latim nas duas colunas; a tradução vai em `@n` quando o argumento depende dela, e segue a tradução do Digesto desta biblioteca quando o título já estiver feito (com link).
- **Concordância com as traduções**: o catálogo guarda, para cada §, a página de cada tradução cotejada (Scialoja, Guenoux, Mesía e Poley, os ingleses; Fadda e Bensa). Proposta: o site mostrar esses links em cada capítulo ("ver em Scialoja, vol. 1, p. 45"), que é o jeito barato de pôr as traduções antigas ao alcance do leitor sem transcrevê-las (ver decisão 2).

### Mudanças em `tools/` e `site/` (etapa 0; não se fazem no meio da produção de outra obra)

O código guarda o original na chave `la` em todas as obras; com o ajuste de 2026-11-27 isso já não amarra o site ao latim. Para estas obras falta:

1. **Idioma original**: resolvido pelo Pedro em 2026-11-27 (commit `2097e15`): o site passou a apresentar obras clássicas em geral, e os rótulos do leitor ("Alemão e português", "Alemão") saem de `obra.json` → `idiomas.la`, a chave do original em qualquer obra. Resta um detalhe: o atributo `lang="la"` do HTML (coluna do original, título do capítulo, lema do glossário) ainda é fixo; deve sair de um campo como `obra.json` → `lang: "de"`, para hifenização e leitores de tela.
2. **Notas do autor**: um marcador novo, `@r` com âncora `{r1}`, `{r2}`… (mesmo mecanismo do `@a`, outro rótulo: "Nota do autor"), conferido pelo validador como o `@a` (mesmo número de notas no original e na tradução). Usar o `@a` direto não serve: ele significa acréscimo de editor posterior.
3. **Concordância** no rodapé do capítulo, a partir do catálogo (se o Pedro aprovar).
4. **Glossário com lema alemão**: o formato atual serve (`lema`, `formas`, `pt`, `nota`); o `lang` do lema entra na correção do item 1.

## Critérios de transcrição do alemão (proposta, a levar ao `CRITERIOS.md` na calibração)

Transcrição normalizada para leitura, como no latim:

- Fraktur transcrita em letra comum; *ſ* longo → *s*; ligaduras desfeitas;
- **grafia da impressão mantida**: *seyn*, *Theil*, *Zweytes*, *Gränze*, *gemeynt*, *Beylage* (Savigny, 1840) e a ortografia de 1891 (Windscheid); nada de modernizar;
- espaçado (*Sperrsatz*, a ênfase da Fraktur) → `*…*`;
- palavras em Antiqua dentro da Fraktur (latim, nomes de obras) ficam como texto comum; itálico só onde a impressão o usa;
- hifenização de fim de linha desfeita;
- chamadas de nota como impressas; notas em duas colunas lidas na ordem da página;
- o OCR do MDZ é o ponto de partida e **sempre se confere contra a imagem** (erros típicos: *ß* lido como *k* ou *ſ*, *ſ* como *f*, números de §, abreviaturas de fontes como *L. 3 § 4 D. de min.*); `transcricao: provisoria`.

## Glossário inicial (proposta, para o Pedro aprovar na calibração)

Um glossário **comum às duas obras** (Windscheid segue a terminologia de Savigny), copiado nos dois `glossario.json`. Sugestões, com a forma do Código Civil brasileiro quando ele tem o termo:

| Alemão | Proposta | Observação |
|---|---|---|
| Rechtsverhältniß | relação jurídica | Savigny, § 4 e §§ 52–53 |
| Rechtsinstitut | instituto jurídico | Savigny, § 5 |
| Rechtsquelle | fonte do direito | |
| Volksgeist | espírito do povo | manter o termo alemão em nota na primeira ocorrência |
| Gewohnheitsrecht | direito consuetudinário | |
| gemeines Recht | direito comum | |
| heutiges römisches Recht | direito romano atual | título de Savigny |
| Rechtsfähigkeit | capacidade de direito | CC, art. 1º fala em "capaz de direitos" |
| Handlungsfähigkeit / Geschäftsfähigkeit | capacidade de agir / capacidade negocial | a decidir |
| juristische Person | pessoa jurídica | Savigny: *juristische Person* como pessoa fictícia |
| Rechtsgeschäft | negócio jurídico | |
| Willenserklärung | declaração de vontade | |
| Voraussetzung | pressuposição | Windscheid, teoria da pressuposição |
| Irrthum | erro | |
| Anspruch | pretensão | CC, art. 189 |
| Klage / Klagerecht | ação / direito de ação | |
| Einrede | exceção | |
| Verjährung | prescrição | |
| Ersitzung | usucapião | |
| Besitz | posse | |
| Eigenthum | propriedade | |
| Sache | coisa | |
| Forderung / Forderungsrecht | crédito / direito de crédito | |
| Obligation | obrigação | |
| Schenkung | doação | |
| Verletzung (der Rechte) | violação (dos direitos) | |
| Wiedereinsetzung in den vorigen Stand | restituição por inteiro | *in integrum restitutio* |

## Fontes fora do repositório

Na VM, como nas outras obras: `~/bibliotheca-fontes/savigny-system/` e `~/bibliotheca-fontes/windscheid-pandekten/`, cada uma com:

- `ocr/<vol>/<n>.hocr` e `ocr/<vol>.json` (texto por página, do MDZ) e `paginas.json` (imagem → página impressa, do manifesto);
- `apoio/pdf/` e `apoio/txt/` por tradução (Scialoja, Guenoux, Mesía-Poley, ingleses; Fadda-Bensa): os PDFs do Pedro vão para `apoio/pdf/` (os do Windscheid, em `windscheid-pandekten/apoio/pdf/fadda-bensa-*.pdf`; os do Savigny, em `savigny-system/apoio/pdf/mesia-poley-tomo-*.pdf`); os do Internet Archive e da BDL, baixados pelo Chromium da VM;
- `apoio/<sigla>-indice.json`: § → volume e página de cada tradução (pelos cabeçalhos correntes do OCR, como no Digesto), que alimenta a concordância.

## Fluxo de cada §

1. Original: texto do OCR do MDZ, dividido em trechos pelos parágrafos, com a página de cada trecho; notas do autor separadas com as âncoras.
2. Conferência contra a imagem da página, linha a linha (texto e notas), pelos critérios acima.
3. Cotejo: trechos correspondentes de cada tradução de apoio à vista (Savigny: Scialoja e Guenoux sempre; Mesía-Poley e o inglês do volume, quando houver; Windscheid: Fadda-Bensa). Onde o OCR da tradução falhar, ler a imagem.
4. Tradução em `pt/`, pelo `CRITERIOS.md` e pelo glossário; `processo: Primeira versão com Claude, feita do alemão e cotejada com as traduções de <as usadas, com ano>`; `estado: cotejada`; divergências de sentido entre as traduções antigas que dependam de interpretação vão em `@n`.
5. `node tools/validar.mjs` e `node tools/build.mjs`; commit só dos arquivos da obra e push.

## Etapas e tamanho

| Etapa | O que se faz | Termina quando |
|---|---|---|
| 0. Estrutura (pode correr durante o Digesto) | Mudanças em `tools/` e `site/` (acima), fora das horas de produção do Digesto; fontes baixadas; datas de morte dos tradutores; `catalogo.json` das obras (§, título, volume, páginas, palavras, páginas em cada tradução) | validador e site funcionam com uma obra alemã de teste |
| 1. Calibração (depois do Digesto) | Jhering, *Culpa in contrahendo*, inteira, e Savigny, *System*, §§ 4–5 (relação jurídica, instituto jurídico) e § 52 (essência das relações jurídicas), de ponta a ponta; no início de Windscheid, §§ 37–37a e 43–44 e a conferência da edição alemã seguida por Fadda e Bensa | o Pedro leu, aprovou glossário e forma, e disse "pode seguir" |
| 2. Produção | obra a obra, na ordem acima; § a §; ponto de controle ao fim de cada volume ou obra | |
| 3. Fechamento | auditoria de uniformidade dos termos | relatório ao Pedro |

Tamanho: cerca de 4.300 páginas de scan no Savigny e 2.150 no Windscheid, com notas extensas; a contagem de palavras sai do OCR na etapa 0. Lote de sessão sugerido: até 10 mil palavras alemãs, terminando no fim de um §.

## Decisões em aberto (perguntar ao Pedro antes da etapa 0)

1. **Notas do autor** (`@r`, acima) e o `lang` do original: aprovar o desenho e escolher o momento (outras sessões produzem no mesmo repositório). Os rótulos do idioma já foram resolvidos.
2. **Concordância com as traduções no site** (links por §) ou só cotejo interno.
3. ~~Ordem~~: decidida (ver "Ordem de produção").
4. **Glossário**: aprovar as formas propostas, sobretudo *Rechtsfähigkeit*, *Handlungsfähigkeit* e *Anspruch*.
5. **Apêndices de Savigny** (*Beylagen*): entram, na ordem dos volumes (proposta), ou ficam para o fim.
6. **Windscheid com uma só tradução**: fica `cotejada` com Fadda e Bensa (regra atual) ou, por exceção, recebe também o debate.
7. ~~Obras novas da ampliação~~: as quatro entram (Pedro, 2026-11-27).
8. **Edição de base** do *Besitz* (6ª, 1837, ou 7ª, de Rudorff, 1865, com os acréscimos dele em rodapé), do *Beruf* (1828 ou 1814) e da *Culpa in contrahendo* (1861 ou 1881). Sem resposta, valem as propostas do plano (1837, 1828, 1861).

## Prompt para retomar em outra sessão

```text
Bibliotheca Barroca: Savigny (System des heutigen römischen Rechts) e Windscheid (Lehrbuch des Pandektenrechts), do alemão, com cotejo das traduções históricas. Projeto em estudo.

Leia antes: CLAUDE.md, CRITERIOS.md, README.md, docs/plano-pandectistica.md e docs/pandectistica/fontes.json. Não crie obras/ para Savigny ou Windscheid nem mexa em tools/ ou site/ sem que eu tenha decidido as questões em aberto do plano.

1. Diga em poucas linhas o estado do projeto e quais decisões em aberto ainda dependem de mim.
2. Faça o que eu pedir ao final desta mensagem, pelo plano.
3. Ao terminar, atualize docs/plano-pandectistica.md (o que mudou, decisões, próximos passos), commit só dele e de docs/pandectistica/ (nunca git add -A) e push.

Tarefa desta sessão:
```

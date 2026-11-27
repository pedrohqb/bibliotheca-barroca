# Plano: Savigny, *System des heutigen römischen Rechts*, e Windscheid, *Lehrbuch des Pandektenrechts* (em estudo)

Pedido do Pedro (2026-11-27): organizar na Bibliotheca Barroca a tradução do *Sistema do direito romano atual* de Savigny e das *Pandectas* de Windscheid, **a partir dos originais alemães** tomados da web, com levantamento das traduções existentes em domínio público e **tradução comparada** com elas. O Pedro enviou as duas traduções que já tinha montado para impressão (projeto de fac-símiles): Fadda e Bensa, *Diritto delle Pandette*, e Mesía e Poley, *Sistema del derecho romano actual*.

São as duas primeiras obras não latinas do projeto: o original é alemão, impresso em Fraktur. O que vale para o latim nas outras obras (transcrição normalizada, tradução do original, glossário fixo, cotejo) vale aqui para o alemão, com as adaptações abaixo. **Nada foi produzido ainda**: as obras não existem em `obras/` (lá elas apareceriam no site). Este documento reúne o que foi pesquisado e decidido, para que outra sessão continue daqui.

A lista de fontes, com os identificadores de cada volume, também está em `docs/pandectistica/fontes.json`, para os scripts.

## Decisões já tomadas (valem por regra do projeto)

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

## Forma no repositório (proposta)

- Obras: `obras/savigny-system/` e `obras/windscheid-pandekten/`, com `de/` (original) e `pt/`.
- **Capítulo = §** (ids `p001`…`p400` no Savigny; `p001`…`p678`, com `p037a` etc., no Windscheid). Apêndices do Savigny: `b01`…; prefácios (*Vorrede*): `v1`…; no Windscheid, o prefácio da 7ª edição: `v7`. §§ longos podem ser divididos em partes `p009-1`, `p009-2` no catálogo, sem mudar a numeração do autor.
- **Trecho = parágrafo** da impressão (*Absatz*); `@p` quando o parágrafo abre linha nova com recuo.
- **Referência = página** da edição de base (`referencia: pagina`), lida no rótulo do manifesto IIIF; o link do trecho abre a página no MDZ.
- **Notas de rodapé do autor**: nos dois autores são longas e essenciais (Windscheid põe nas notas toda a literatura e a discussão). Ficam no rodapé do trecho, com âncora no ponto da chamada (`(a)` no Savigny, `¹` no Windscheid), transcritas e traduzidas. Listas de literatura e remissões a fontes (D., C., Nov.) não se traduzem: mantêm-se como impressas; só a prosa da nota se traduz.
- **Citações latinas** (Digesto, Código, glosadores): ficam em latim nas duas colunas; a tradução vai em `@n` quando o argumento depende dela, e segue a tradução do Digesto desta biblioteca quando o título já estiver feito (com link).
- **Concordância com as traduções**: o catálogo guarda, para cada §, a página de cada tradução cotejada (Scialoja, Guenoux, Mesía e Poley, os ingleses; Fadda e Bensa). Proposta: o site mostrar esses links em cada capítulo ("ver em Scialoja, vol. 1, p. 45"), que é o jeito barato de pôr as traduções antigas ao alcance do leitor sem transcrevê-las (ver decisão 2).

### Mudanças em `tools/` e `site/` (etapa 0; não se fazem no meio da produção de outra obra)

Hoje o código supõe latim em todo lugar (`c.la`, rótulo "Latim e português", `lang="la"`). Para estas obras é preciso:

1. **Idioma original configurável**: `obra.json` → `original: "de"` e `idiomas: {"de": "Alemão (Berlim, 1840–1849)", "pt": "Português"}`; `lib.mjs` expõe o capítulo original como `c.orig` (com `c.la` como alias, para não quebrar as obras latinas); `build.mjs` e `validar.mjs` tiram o rótulo e o `lang` de `idiomas`. As obras latinas não mudam nada.
2. **Notas do autor**: um marcador novo, `@r` com âncora `{r1}`, `{r2}`… (mesmo mecanismo do `@a`, outro rótulo: "Nota do autor"), conferido pelo validador como o `@a` (mesmo número de notas no original e na tradução). Usar o `@a` direto não serve: ele significa acréscimo de editor posterior.
3. **Concordância** no rodapé do capítulo, a partir do catálogo (se o Pedro aprovar).
4. **Glossário com lema alemão**: o formato atual serve (`lema`, `formas`, `pt`, `nota`); falta só o `lang` do lema sair de `idiomas`.

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
| 0. Estrutura | Mudanças em `tools/` e `site/` (acima); fontes baixadas; `catalogo.json` das duas obras (§, título, volume, páginas, palavras, páginas em cada tradução) | validador e site funcionam com uma obra alemã de teste |
| 1. Calibração | Savigny §§ 4–5 (relação jurídica, instituto jurídico) e § 52 (essência das relações jurídicas), e Windscheid §§ 37–37a (conceito de direito) e 43–44 (pretensão), de ponta a ponta; conferir a edição alemã seguida por Fadda e Bensa | o Pedro leu, aprovou glossário e forma, e disse "pode seguir" |
| 2. Produção | § a §, na ordem; ponto de controle ao fim de cada volume | |
| 3. Fechamento | auditoria de uniformidade dos termos | relatório ao Pedro |

Tamanho: cerca de 4.300 páginas de scan no Savigny e 2.150 no Windscheid, com notas extensas; a contagem de palavras sai do OCR na etapa 0. Lote de sessão sugerido: até 10 mil palavras alemãs, terminando no fim de um §.

## Decisões em aberto (perguntar ao Pedro antes da etapa 0)

1. **Mudanças em `tools/` e `site/`** para o original alemão e as notas do autor: aprovar o desenho acima e escolher o momento (outras sessões produzem no mesmo repositório).
2. **Concordância com as traduções no site** (links por §) ou só cotejo interno.
3. **Ordem**: Savigny primeiro (fixa a terminologia que Windscheid herda), Windscheid primeiro, ou as duas em paralelo.
4. **Glossário**: aprovar as formas propostas, sobretudo *Rechtsfähigkeit*, *Handlungsfähigkeit* e *Anspruch*.
5. **Apêndices de Savigny** (*Beylagen*): entram, na ordem dos volumes (proposta), ou ficam para o fim.
6. **Windscheid com uma só tradução**: fica `cotejada` com Fadda e Bensa (regra atual) ou, por exceção, recebe também o debate.

## Prompt para retomar em outra sessão

```text
Bibliotheca Barroca: Savigny (System des heutigen römischen Rechts) e Windscheid (Lehrbuch des Pandektenrechts), do alemão, com cotejo das traduções históricas. Projeto em estudo.

Leia antes: CLAUDE.md, CRITERIOS.md, README.md, docs/plano-pandectistica.md e docs/pandectistica/fontes.json. Não crie obras/ para Savigny ou Windscheid nem mexa em tools/ ou site/ sem que eu tenha decidido as questões em aberto do plano.

1. Diga em poucas linhas o estado do projeto e quais decisões em aberto ainda dependem de mim.
2. Faça o que eu pedir ao final desta mensagem, pelo plano.
3. Ao terminar, atualize docs/plano-pandectistica.md (o que mudou, decisões, próximos passos), commit só dele e de docs/pandectistica/ (nunca git add -A) e push.

Tarefa desta sessão:
```

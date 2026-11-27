# Progresso: Digesto de Justiniano

**Etapa atual:** 2. Produção (calibração aprovada pelo Pedro em 2026-11-26: "Pode seguir"; ficam as escolhas propostas: inscrição "*Ulpiano, Instituições, livro 1.*", *iuris prudentia* "jurisprudência" com nota, leitura da impressão de 1889 prevalecendo).

## 2026-11-26 — fontes, catálogo e calibração

- Fontes montadas em `~/bibliotheca-fontes/iustinianus-digesta/` (latim de Lassard e Koptev estruturado; Scott em texto por livro) e catálogo dos 432 títulos com a página da edição de 1889 (Internet Archive, `corpusjuriscivil01krueuoft`).
- `tools/digesto.py` (latim, apoio, situação); `tools/build.mjs` passa a aceitar `referencia: lei` (gutter "D. 1.1.1 pr.").
- D. 1.1, *De iustitia et iure* (772 palavras, 20 trechos): latim conferido contra o scan (p. 1-2), tradução em rascunho, sem debate.
- Glossário inicial: 28 termos (direito, justiça, direito natural/das gentes/civil/honorário, pretor, senatus-consulto, jurisconsultos, manumissão, escravo, liberto, domínio, obrigação, compra e venda, locação, estipulação, pacto, ação, exceção, boa-fé, dolo, herdeiro, legado, posse, usufruto, tutela).

### Pontos para o Pedro

- **Forma das inscrições:** `*Ulpiano, Instituições, livro 1.*` Alternativa mais próxima do latim: "Ulpiano, no livro primeiro das Instituições".
- **Base do latim:** a transcrição digital segue em alguns pontos as edições estereotípicas posteriores a 1889 (*constitit*, *libro secundo regularum*) e regulariza as maiúsculas. Proposta: prevalece a impressão de 1889, que é o scan ligado no site; as divergências de sentido vão em nota.
- *Iuris prudentia* como "jurisprudência" (com nota) ou "ciência do direito"?
- *Aequum*: "equitativo" (*ars boni et aequi*, "a arte do bom e do equitativo").
- Espanhol (García del Corral) e alemão (Otto, Schilling e Sintenis) da pasta são volumes do **Código**: não servem ao Digesto. Se quiser esse apoio, os volumes do Digesto dessas coleções estão no Internet Archive e na BIU Cujas.

### Nomes das obras nas inscrições (manter sempre iguais)

| Latim | Português |
|---|---|
| *institutionum* | Instituições |
| *regularum* | Regras |
| *definitionum* | Definições |
| *enchiridii* | Manual |
| *iuris epitomarum* | Epítomes do direito |
| *ad Sabinum* | Comentários a Sabino |

## 2026-11-26 — traduções de apoio completas

O Pedro pediu cotejo com as edições francesa, alemã, italiana e espanhola, obtidas na web, com OCR onde faltasse. Baixados: Hulot completo (7 tomos, BIU Cujas), Otto-Schilling-Sintenis (4 vols.) e García del Corral (3 tomos), com índices por título; Vignali só em parte (livros 20-23): os demais volumes estão no Google Books atrás de CAPTCHA. A instalação do tesseract foi bloqueada pela política da sessão; o OCR do Hulot é visual, por título, gravado em `apoio/ocr/hulot/`. D. 1.1 recotejado com Hulot, alemão e espanhol: sem mudança de sentido.

## 2026-11-26 — italiano, OCR e revisão do D. 1.1

- Vignali baixado do Google Books (CAPTCHAs resolvidos pelo Pedro): livros 1-23 e 44-50; depois também os vols. 4 e 5 (livros 24-43): italiano completo.
- O Pedro instalou o tesseract (deu, fra, ita, lat, spa) e o ocrmypdf: OCR completo dos 7 tomos do Hulot em andamento.
- Página da obra no site passa a listar o texto latino e as traduções cotejadas (`texto_latino` e `traducoes_cotejadas` em `obra.json`, exibidos por `tools/build.mjs`).
- D. 1.1 revisto contra as seis traduções: *cuius merito* ("em razão dele"), *positiones* ("vertentes"), *affectantes* ("aspirando"), *nefas* ("ímpio"), *servit* ("se submete"), com notas sobre as divergências entre as traduções.

## 2026-11-26 — D. 1.2 e D. 1.3

- Cartão da obra no site: *Digesta seu Pandectae* · 533 · ed. Mommsen e Krueger, Berlim, 1889 (campo `rotulo_edicao` em `obra.json`).
- Inscrições seguem a impressão (*Idem*, numerais romanos como impressos); a transcrição digital as normaliza e, em D. 1.3, erra várias (*libro secundo regularum* por *libro I*, *aedilis curulis* por *aedilium curulium*).
- D. 1.2 (3.402 palavras, 55 trechos) e D. 1.3 (42 trechos): latim conferido contra o scan (p. 2-5 e 5-7), com cerca de 140 correções, entre elas erros de sentido da fonte digital (*constitit*/*consistit*, *contradictio*/*contradicto iudicio*, *admittat*/*amittat*, *poterant*/*poterat*, *utique*/*utrique*, *e litteram*/*R litteram*, *articuli* omitido) e o grego restituído (Demóstenes, Crisipo, Teofrasto). Traduções em rascunho, cotejadas com o alemão, o italiano, o espanhol e o Scott.
- **Pendente:** cotejo do Hulot em D. 1.2 e D. 1.3 (OCR das páginas em curso); deslocamento do tomo I corrigido para +33.
- Glossário: acrescentada a forma "ações" a *actio* (mesma versão, plural).

## 2026-11-26 — produção em paralelo (livros I a V)

- O Pedro pediu para ir até o fim do Digesto, sem trabalho porco. A produção passou a ser feita por agentes em paralelo, cada um com um bloco de títulos, pelo roteiro `docs/brief-digesto-titulo.md` (latim conferido no scan de 1889; cotejo trecho a trecho com Hulot, Otto-Schilling-Sintenis, Vignali, García del Corral, Monro e Scott; formas fixadas). O coordenador revisa cada entrega, devolve as que tiverem cotejo incompleto, uniformiza termos e publica.
- Gateway RBSA: o Pedro autorizou o escopo `bibliotheca-digesto` para ler arquivos grandes (2026-11-26).
- Hulot: OCR por tesseract (instalado pelo Pedro); tomos I, II e V prontos, III-VII em andamento. Livros I a III revistos com o Hulot. O exemplar da BIU Cujas não tem as pp. 117-118 do tomo I (D. 2.4.4.3-10.5 sem o francês): buscar outro exemplar.
- Uniformizações decididas pelo coordenador: *libertinus* "liberto"; *imperium* "império"; *ius reddere* "declarar o direito"; *lex Iulia repetundarum* "Lei Júlia de repetundas"; *capitis deminutio* "diminuição de cabeça"; *actor* (de coletividade) "agente"; grafia Pomponio, Emílio Macro. Glossário: acrescentados plurais/flexões (ações, estipulações, herdeira, herdeiros).
- Publicados até agora: livros I a IV completos e D. 5.1-5.2.

## 2026-11-26 — pausa no fim do livro XIX

- Publicados: livros I a XIX completos (133 de 432 títulos; 29,9% das palavras latinas). Revisão independente feita e aplicada nos livros I a VII (relatórios em `docs/revisao/`); a partir do livro VIII, ainda sem revisão.
- O Pedro pediu para deixar os agentes terminarem e parar. Nada em curso.
- Monro: OCR completo pronto e indexado no gateway (`apoio/ocr/monro/`). O cotejo do Monro feito antes por imagem das páginas (livros 4-12, D. 14.5, D. 15.2-15.4) foi aceito pelo Pedro.
- Pendências:
  - 11 pontos a decidir na revisão dos livros VI e VII (`docs/revisao/livro-06.md`, `livro-07.md`).
  - Uniformizar: "Basílicas" → "Basílicos" (14 títulos); "Aríston" → "Aristão" (D. 17.1); "ação *pro socio*" (D. 17.2) × "ação de sociedade (*pro socio*)" (títulos anteriores); "ação de condução" para *ex conducto* (D. 12.7, 14.1, 14.2 usam "ação de locação"); "afiançar" (D. 16.1) × "fazer-se fiador"; "Coisas cotidianas" × "Coisas cotidianas ou Áureos" nas inscrições (seguir a impressão de cada lei).
  - D. 19.5, leis 18-26: cotejo do italiano (Vignali) só parcial; completar abrindo as páginas como imagem.
  - D. 19.1: Hulot sem a p. 6 do tomo III (folha em branco no scan da BIU Cujas); D. 2.4.4.3-10.5 sem Hulot (pp. 117-118 do tomo I).
  - Remissões em nota não conferidas em D. 19.2-19.5 (lista no relatório do agente: D. 1.22.4, D. 9.2.5.3, D. 16.3.6, Gaio 3.141, D. 18.1.1.1).
  - Índice alemão (`de-indice.json`) começa alguns parágrafos depois do início em vários títulos (D. 17.1, 17.2, 18.1, 19.1); índice do Hulot sem D. 16.3.

**Próximo passo:** D. 20.1 em diante (`python3 tools/digesto.py situacao`), e revisão independente a partir do livro VIII.

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

- Vignali baixado do Google Books (CAPTCHAs resolvidos pelo Pedro): livros 1-23 e 44-50; faltam os volumes dos livros 24-43, ainda não localizados com visualização integral.
- O Pedro instalou o tesseract (deu, fra, ita, lat, spa) e o ocrmypdf: OCR completo dos 7 tomos do Hulot em andamento.
- Página da obra no site passa a listar o texto latino e as traduções cotejadas (`texto_latino` e `traducoes_cotejadas` em `obra.json`, exibidos por `tools/build.mjs`).
- D. 1.1 revisto contra as seis traduções: *cuius merito* ("em razão dele"), *positiones* ("vertentes"), *affectantes* ("aspirando"), *nefas* ("ímpio"), *servit* ("se submete"), com notas sobre as divergências entre as traduções.

**Próximo passo:** com o "pode seguir" do Pedro, D. 1.2 (*De origine iuris*, 3.469 palavras) em diante, livro I inteiro até o ponto de controle.

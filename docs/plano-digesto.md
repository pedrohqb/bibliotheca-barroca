# Plano: o Digesto de Justiniano, obra inteira

Obra no repositório: `obras/iustinianus-digesta/`. Pedido do Pedro (2026-11-26): tradução portuguesa do Digesto **sem debate com IA**, a partir do latim de Mommsen tomado da web, com as traduções da pasta do escritório e uma tradução inglesa como apoio. Cada sessão retoma de onde a anterior parou, pelo repositório e por `docs/progresso-digesto.md`.

## Diferenças em relação às outras obras

| | *Augustinus*, *De Contractibus* | Digesto |
|---|---|---|
| Latim | transcrito das imagens do scan | gerado da transcrição digital de Lassard e Koptev (Mommsen-Krueger) por `tools/digesto.py latim`, depois **conferido contra o scan de 1889** |
| Debate | Codex e Gemini, perfil `traducao` | **nenhum** (decisão do Pedro); o passo 6 da skill não se aplica |
| Estado final da sessão | `debatida` | `rascunho`, com `processo` que diz "sem debate" |
| Referência do trecho | coluna ou página | a citação usual (`referencia: lei` em `obra.json`): `@s5 1.1.1.4`, que o site mostra como "D. 1.1.1.4" |

## Fontes

Fora do repositório, em `~/bibliotheca-fontes/iustinianus-digesta/`:

- `mommsen-krueger.json`: o latim dos 50 livros (432 títulos, 9.134 leis), estruturado em livro → título → lei (com a inscrição) → parágrafo. Vem das páginas `d-01.htm` a `d-50.htm` de `https://droitromain.univ-grenoble-alpes.fr/Corpus/digest.htm` (cópia em `lassard/`). O grego, transliterado na fonte digital, vem marcado em itálico (`*twn nomwn ...*`).
- `paginas-scan.json`: a página do scan de cada título (localizada pelo OCR do Internet Archive), já copiada para `catalogo.json`.
- `scott/` e `scott-txt/livro-NN.txt`: S. P. Scott, *The Civil Law* (Cincinnati, 1932), vols. II a XI, de constitution.org, em texto por livro. Os livros 14, 27, 28, 32, 37 e 47 ficaram no arquivo do livro anterior.

Traduções de apoio (todas de domínio público), em `~/bibliotheca-fontes/iustinianus-digesta/apoio/`:

| Língua | Edição | Onde | Cobre | Como se consulta |
|---|---|---|---|---|
| francês | Hulot e Berthelot, *Les cinquante livres du Digeste*, 7 tomos (Metz e Paris, 1803-1805) | BIU Cujas, `pdf/hulot-tomo1..7.pdf` (tomo I = o PDF da pasta do escritório) | livros 1 a 50 | scan sem texto: `hulot-indice.json` dá tomo e página de cada título (pelo sumário digitado da BIU Cujas); a página é lida como imagem (OCR visual) e a transcrição fica em `ocr/hulot/<id>.txt` para reuso. D. 1.1 a 1.5 vêm do Wikisource (texto revisto) |
| alemão | Otto, Schilling e Sintenis, *Das Corpus Juris Civilis ins Deutsche übersetzt*, vols. 1-4 (Leipzig, 1830-1832; vol. 1 na 2. ed., 1839) | Internet Archive (`dascorpusjurisci01otto`…`04otto`), `txt/` e `pdf/` | livros 1 a 50 | OCR do Internet Archive; `de-indice.json` (pelos cabeçalhos correntes) |
| espanhol | García del Corral, *Cuerpo del derecho civil romano*, 1ª parte, tomos 1-3 (Barcelona, 1889-1897), bilíngue | Internet Archive (`cuerpodelderechocivilromanoP1T1..T3`) | livros 1 a 50 | OCR do Internet Archive; `es-indice.json` (pelo latim de cada título) |
| italiano | Vignali, *Corpo del diritto*, Digesto, 6 vols. (Nápoles, 1856-1862), bilíngue | Google Books, baixado pelo Chrome (CAPTCHA resolvido pelo Pedro): `vignali-8w1RAQAAIAAJ` (livros 1-8), `vignali-LQ5RAQAAIAAJ` (9-18), `vignali-P8YLAAAAYAAJ` (19-23), `vignali-OE_7eucfV0UC` (24-33), `vignali-JQh8IAKaRqAC` (34-43), `vignali-4jyi-asm2bgC` (44-50; `MxBRAQAAIAAJ` é outro exemplar) | livros 1 a 50 | OCR do Google; `it-indice.json` (pelos cabeçalhos "LIB. TIT.", `tools/digesto-apoio/indice_cabecalho.py`) |
| inglês | Monro, *The Digest of Justinian*, 2 vols. (Cambridge, 1904-1909) | pasta do escritório | livros 1 a 15 | PDF com texto |
| inglês | Scott, *The Civil Law*, vols. II-XI (Cincinnati, 1932) | constitution.org, `scott-txt/` | livros 1 a 50 | texto |
| português | TRF1, *Digesto*, 2. ed. (2017) | pasta do escritório | livros 1 e 50 | obra protegida: só consulta |

Não servem: o italiano da pasta (*Digesta in traduzione italiana*, 2022) é versão automática do Scott; o espanhol e o alemão da pasta (`BRes1411171.pdf`, `bub_gb_wlFHAAAAYAAJ.pdf`) são volumes do Código.

`python3 tools/digesto.py apoio <id> [de|es|it|en]` imprime o título no alemão, no espanhol, no italiano (se houver) e no Scott, e diz onde estão o Hulot (tomo, página impressa e do PDF) e o Monro. Os índices se refazem com os scripts de `tools/digesto-apoio/`. O Hulot passa por OCR completo (tesseract fra+lat, instalado pelo Pedro; `ocrmypdf --sidecar`), gravado em `apoio/ocr/hulot-pdf/`; a leitura da imagem continua obrigatória nas passagens em que o OCR falha. O deslocamento entre página impressa e página do PDF do Hulot está conferido só no tomo I (+19); confira-o na primeira consulta de cada tomo e registre-o em `HULOT_DESLOC` (`tools/digesto.py`).

**Cotejo obrigatório, trecho a trecho:** francês (Hulot), alemão, espanhol e, onde houver, italiano e Monro; Scott como conferência final. Onde as traduções divergem entre si num ponto de sentido, a escolha é justificada em `@n`. O campo `processo` do cabeçalho lista as edições efetivamente cotejadas no título.

Regra: a tradução é feita **do latim**. As traduções de apoio servem para conferir o sentido e resolver passagens difíceis; nada se copia delas, e uma divergência de sentido que dependa da leitura vai em `@n`.

## Fluxo de cada título

1. `python3 tools/digesto.py latim <id>` grava `la/<id>.md` a partir do JSON (cabeçalho, inscrições em itálico no início de cada lei, um trecho por parágrafo, `@p` em cada lei nova).
2. **Conferência contra o scan de 1889** (o `scan` do catálogo abre a primeira página do título; as seguintes são `n<leaf+1>`…). Imagem da página: `https://archive.org/download/corpusjuriscivil01krueuoft/page/n<leaf>_w1600.jpg`, recortada em metades com Pillow e lida com Read. Corrija pela impressão:
   - maiúsculas: Mommsen só põe maiúscula no início do parágrafo e nos nomes próprios (`est autem`, `Celsus`); a fonte digital as regulariza;
   - palavras e números em que a fonte digital segue edição posterior (em D. 1.1: *consistit*, não *constitit*; *libro primo regularum*, não *secundo*; *libro quarto decimo*, não *libro 14*);
   - **grego**: redigite-o da impressão, com acentos e espíritos (a fonte digital o translitera);
   - aspas da impressão (‘…’).
   A diferença que mude o sentido vai em `@n` na tradução. `transcricao: provisoria` (só o Pedro marca `conferida`).
3. Glossário (`glossario.json`), como na skill: versão fixada; termo novo recorrente entra; entrada existente não muda sem o Pedro.
4. Tradução em `pt/<id>.md`, pelo `CRITERIOS.md`, com `python3 tools/digesto.py apoio <id>` à vista. Cabeçalho: `livro: Livro primeiro`…, `livro_curto: Livro I`, `capitulo: Título I`, `titulo` em português, `tradutor: Pedro H. Q. Barreto`, `processo: Primeira versão com Claude, feita do latim e cotejada com as traduções de <as usadas>, sem debate, para revisão`, `estado: rascunho`.
   - Inscrição: `*Ulpiano, Instituições, livro 1.*` (autor em português, obra em português e em itálico com o resto, livro em algarismo; *libro singulari*, "livro único"; *ad Sabinum*, "Comentários a Sabino"; *ad edictum*, "Comentários ao edito"). Mantenha uma lista das obras já vertidas em `docs/progresso-digesto.md` para que cada uma tenha sempre o mesmo nome.
   - Nomes de ações e fórmulas: em latim na primeira ocorrência do título, com a tradução.
5. `node tools/validar.mjs` (nenhum erro; aviso de glossário resolvido ou explicado em `@n`) e `node tools/build.mjs`.
6. Commit direto na `main` só dos arquivos da obra (`git add obras/iustinianus-digesta docs/progresso-digesto.md`; nunca `git add -A`, porque outras sessões trabalham no mesmo repositório) e push.

## Etapas

| Etapa | O que se faz | Termina quando |
|---|---|---|
| 0. Fontes e catálogo | Latim, scans, apoio e `catalogo.json` (432 títulos, com página) | feito em 2026-11-26 |
| 1. Calibração | D. 1.1 de ponta a ponta e glossário inicial | o Pedro leu D. 1.1, o glossário e a forma das inscrições e disse "pode seguir" |
| 2. Produção | Livro a livro, na ordem, em lotes de títulos | ponto de controle ao fim de cada livro |
| 3. Fechamento | Auditoria de uniformidade (termos, nomes de obras nas inscrições) | relatório final ao Pedro |

Tamanho: cerca de 920 mil palavras latinas. `python3 tools/digesto.py situacao` dá o andamento. Lote de sessão: até 15 mil palavras latinas, terminando no fim de um título.

**Ponto de controle (fim de cada livro):** auditoria de uniformidade dos termos e das inscrições no livro, propostas de glossário com os trechos afetados; a sessão para até a resposta do Pedro.

## Prompt de cada sessão

Na VM: `cd ~/bibliotheca-barroca && claude`, e cole:

```text
Produção da Bibliotheca Barroca: Digesto de Justiniano, obra inteira, sem debate.

Leia antes: CLAUDE.md, CRITERIOS.md, docs/plano-digesto.md e docs/progresso-digesto.md. Eles mandam; a skill traduzir-capitulo vale só nos passos de glossário e tradução (o debate não se aplica a esta obra). A obra é iustinianus-digesta; não mexa nas outras.

1. Situação: git pull --ff-only, node tools/validar.mjs, python3 tools/digesto.py situacao. Diga em três linhas a etapa atual, o último título feito e se há ponto de controle esperando resposta minha; se houver e eu não tiver respondido aqui, pare.
2. Produza o lote desta sessão, título a título, na ordem do catálogo, pelo fluxo do plano: latim gerado, conferência contra o scan de 1889 (com o grego redigitado da impressão), glossário, tradução do latim com o apoio, validação, build, commit só dos arquivos da obra e push.
3. Fim de livro: ponto de controle do plano, e pare.
4. Ao terminar, atualize docs/progresso-digesto.md (títulos feitos, palavras, pontos em aberto, propostas de glossário, nomes de obras das inscrições, próximo passo), commit e push, e me dê o resumo em poucas linhas.

Lote desta sessão: até 15 mil palavras latinas.
```

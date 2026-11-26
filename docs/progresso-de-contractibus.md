# Progresso: *De Contractibus* de Pedro de Oñate

## Etapa atual

**0. Fontes**, parada à espera do Pedro: edição de base identificada e três dos quatro volumes baixados e conferidos; faltam a parte primeira do tomo III e a tradução (`.docx`).

## Sessões

### 2026-11-26

- Pré-checagem: `git pull --ff-only` (trouxe o plano e a seção "Capítulo importado" da skill); `validar.mjs` sem erro; motor de debate 4.4.15-rbsa com perfil `traducao`.
- Falta instalar `python3-docx` (necessário na etapa 1): `sudo apt install python3-docx` (`docs/producao.md`).
- Busca dos `.docx` dos três volumes e do projeto Node que os gerou, em `~` e em `/mnt/rbsa/dados`, por nome (*contract*, *oñate/onate*, *tract*, *latim/latin*, *tradu*, *bilingu*, *disput*, *barroc*) e, na pasta pessoal, pelo conteúdo dos `.docx` (*Oñate*, *Contractibus*): nada encontrado. `~/thinclient_drives` está vazio (unidade da sessão remota não montada).
- Capítulos revistos e debatidos: nenhum. Consumo: só a busca.

- Depois, o Pedro indicou três PDFs em `~/RBSA/dados/Troca IA/Obras/` (`1.pdf`, `2.pdf`, `3.pdf`). São scans do Google Books, do exemplar da Biblioteca Nazionale Centrale Vittorio Emanuele II (Roma), da **edição de base**: Pedro de Oñate, *De contractibus tomi tres*, Roma, Francesco Caballi.
  - `1.pdf`: tomo I, *De contractibus in genere*, 1646, 736 p., tratados I–VII.
  - `2.pdf`: tomo II, *De contractibus lucrativis*, 1647, 1090 p., tratados VIII–XX (a conferir: o OCR mostra cabeçalhos "Tractatus XX" no fim).
  - `3.pdf`: tomo III, **parte segunda**, *De contractibus onerosis*, 800 p., tratados XXVIII–XXXV (1654, segundo o Google Books).
  - Por volta das 10:39 os três PDFs saíram da pasta, antes de serem copiados para `~/bibliotheca-fontes/` e antes de conferida a folha de rosto na imagem; só ficaram o `pdfinfo` e o OCR, no scratchpad da sessão.
  - Nenhum dos três traz texto em português: não são a edição bilíngue.
- O Pedro recolocou os PDFs em `Troca IA/Obras/De contractibus - Oñate/` (mesmos tamanhos). Copiados para `~/bibliotheca-fontes/onate-de-contractibus/`, com `SHA256SUMS`:
  - `tomo1-1646.pdf` (736 p.): folha de rosto conferida na imagem (p. 5 do PDF), *De contractibus tomi tres … Primus tomus. De contractibus in genere*, Romae, ex typographia Francisci Caballi, 1646. Cota BNCR 13.12.g.33. Na p. 6, o índice dos tratados da obra inteira: tomo I, 1–7; tomo II, 8–20; tomo III, 21–36.
  - `tomo2-1647.pdf` (1090 p.): folha de rosto conferida (p. 5), *De contractibus lucrativis, tomus secundus*, Romae, Caballi, 1647. Cota 13.12.g.34. Tratados VIII–XX.
  - `tomo3-parte2.pdf` (800 p.): falsa folha de rosto sem lugar nem data (p. 7), *De contractibus onerosis tomi tertii pars secunda*; o texto começa na p. 9 com o *Tractatus vigesimus octavus. De societatis contractu*. Cota 13.12.g.36. Tratados XXVIII–XXXVI.
  - A impressão é paginada (o índice remete a páginas, e há letras de seção na margem): `"referencia": "pagina"`.
- Parte primeira do tomo III (tratados XXI–XXVII, 1654): falta. O exemplar da BNCR deve ser a cota 13.12.g.35, pela sequência. No Google Books há dois volumes de 1654 com leitura completa, candidatos a essa parte: `LUJB2PCwEGYC` e `LmmRZSrTfgYC` (e ainda `m2YktiXcvf0C`, sem data na lista). A verificação anti-robô do Google (CAPTCHA) interrompeu a conferência; não foi contornada.

## Pontos em aberto para o Pedro

- A tradução: caminho dos `.docx` (três volumes) e do projeto Node da edição bilíngue. Sem eles, as etapas 1 e 2 não começam.
- A parte primeira do tomo III: se o Pedro tiver o PDF, colocá-lo junto com os outros; se não, baixar por um dos ids do Google Books acima, numa sessão em que o Google não peça a verificação.

## Propostas de glossário

Nenhuma ainda (etapa 2).

## Próximo passo

Completar o tomo III com a parte primeira e confirmar pelos `.docx` que a tradução segue esta edição. Depois, a etapa 1 (importação).

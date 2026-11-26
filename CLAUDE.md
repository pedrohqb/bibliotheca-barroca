# Bibliotheca Barroca

Site estático de clássicos latinos em edição bilíngue (latim ao lado do português, trecho a trecho), publicado no GitHub Pages a cada push na `main`. Primeira obra: Jansênio, *Augustinus* (Lovaina, 1640). Dono do projeto e tradutor responsável: Pedro H. Q. Barreto.

- Produzir capítulos: skill `traduzir-capitulo` (transcrição, tradução, debate com Codex e Gemini, publicação).
- Critérios de transcrição, registro e fidelidade: `CRITERIOS.md`. Valem para todo texto em `obras/`.
- Formato dos capítulos e comandos: `README.md`.

Regras:

- A tradução é em português culto, mas legível e atual, e cada termo técnico tem uma forma só ao longo de todo o texto, a de `glossario.json`.
- Nunca altere o latim sem conferir a imagem do scan; nunca mude uma entrada do glossário sem o Pedro.
- Não edite `_site/` (gerado). Antes de cada commit: `node tools/validar.mjs` e `node tools/build.mjs` sem erro.
- Capítulos debatidos vão direto para a `main` com `estado: debatida`; só o Pedro marca `revisada` e `transcricao: conferida`.
- Os textos são de domínio público: no debate, `--dados publicos`.

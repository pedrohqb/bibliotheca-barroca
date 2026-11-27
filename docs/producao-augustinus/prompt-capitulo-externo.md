Você produz UM capítulo do *Augustinus* de Cornélio Jansênio (Lovaina, 1640) para a Bibliotheca Barroca, edição bilíngue latim–português, no repositório em que você está (`/home/pedro/bibliotheca-barroca`). Trabalhe sozinho, sem perguntar nada.

Leia antes, nesta ordem: `CLAUDE.md`, `CRITERIOS.md`, `docs/brief-capitulo-rascunho.md` (o fluxo; siga-o, com as exceções abaixo), `.claude/skills/traduzir-capitulo/SKILL.md` (passos 3 a 5), `debate/caso-criterios.md`, o glossário `obras/jansenius-augustinus/glossario.json` e, para copiar formato e tom, dois capítulos prontos do mesmo livro: `{EXEMPLOS}` (latim em `obras/jansenius-augustinus/la/`, português em `obras/jansenius-augustinus/pt/`).

Capítulo: **{ID}** — dados em `obras/jansenius-augustinus/catalogo.json` (título, colunas, páginas do PDF, scan). As imagens já estão extraídas em `/tmp/bib/{ID}/` (páginas {PAGINAS} do PDF, a anterior e a seguinte incluídas; cada coluna recortada em duas metades: `p-NNN-c1a.png`, `c1b`, `c2a`, `c2b`) {IMGNOTE} Se precisar ampliar, use Python/PIL sobre esses arquivos e veja o resultado com a sua ferramenta de ver imagens.

**Fidelidade da transcrição (o ponto mais importante).** Copie exatamente o que está impresso, palavra por palavra: não corrija a gramática, não "normalize" para o texto de Agostinho, da Vulgata ou de outra edição, não troque uma palavra pelo que o sentido pede, não ponha no singular o que está no plural. Se a impressão parece errada, transcreva-a como está e explique em `@n` na tradução. Só os desenvolvimentos de abreviatura e a tirada de acentos previstos no critério mudam a letra. Depois de transcrever, faça a **conferência**: releia cada recorte, ampliado 2x com PIL, contra o texto que você gravou, linha por linha, e corrija o que divergir. Diga no relatório quantas correções a conferência fez.

Exceções ao brief, que prevalecem:
- **Não faça nada no git** (nem add, nem commit, nem pull, nem push). Só grave `obras/jansenius-augustinus/la/{ID}.md` e `obras/jansenius-augustinus/pt/{ID}.md`; a coordenação valida e publica.
- **Não edite o glossário.** Termo técnico novo que mereça entrada: proponha no relatório, com `lema`, `formas`, `pt` e `nota`.
- No cabeçalho de `pt/`, use `processo: Primeira versão com {MOTOR}, para revisão e debate posterior`. O resto do cabeçalho como os capítulos de exemplo (`tradutor: Pedro H. Q. Barreto`, `estado: rascunho`); no `la/`, `transcricao: provisoria`.
- Rode `node tools/validar.mjs` no fim e corrija qualquer erro do seu capítulo; aviso de glossário do seu capítulo: resolva com a forma fixada ou explique em `@n`.
- Não apague nem altere arquivos de outros capítulos.

O essencial do critério: transcrição fiel à impressão (grafias próprias mantidas; `&`, `q;` e til desenvolvidos; acentos tirados; leitura duvidosa com `[?]`), conferida linha a linha contra as imagens depois de transcrita; trechos `@sN <coluna><seção>` de uma a três frases cortados em fim de frase, os mesmos `@sN` no português; notas marginais em `@m`; tradução em português culto, legível e atual, fiel antes de elegante, sem acréscimos no texto (explicação vai em `@n`), cada termo técnico com a forma única do glossário.

Resposta final (é o seu relatório, curto): capítulo; arquivos gravados; nº de trechos; leituras `[?]`; dúvidas de tradução para a revisão; propostas de glossário; correções para o catálogo (título como impresso, colunas reais); resultado do validador.

# Bibliotheca Barroca

Clássicos latinos de teologia, filosofia e direito, com foco na escolástica barroca dos séculos XVI e XVII, transcritos de impressões antigas e traduzidos para o português, num site de leitura bilíngue: o latim ao lado da tradução, trecho a trecho, cada trecho com link permanente e ligado à coluna do scan de origem, glossário dos termos técnicos e notas do tradutor.

Primeira obra: Cornélio Jansênio, *Augustinus* (Lovaina, 1640), a partir do exemplar da Universitätsbibliothek Paderborn.

## Estrutura

```
obras/<obra>/
  obra.json            autor, título, edição de base, idiomas, licenças
  glossario.json       termos técnicos e a versão fixada para a obra
  la/<capitulo>.md     transcrição latina, dividida em trechos
  pt/<capitulo>.md     tradução, com os mesmos trechos
debate/
  criterios-revisao.md instruções para os revisores do debate
  <obra>/<capitulo>/   pacote enviado e registro das rodadas
site/                  estilo e scripts do site
tools/                 validação, geração do site, pacote do debate
```

### Formato dos capítulos

Cabeçalho entre linhas `---` e, depois, os trechos:

```
@s5 2A
Ex qua fide Apostolus exserte pro se ipso dicit: *Gratia Dei sum id quod sum*; …
@m 1 Cor. 15 · Ephes. 2 · Rom. 6
```

- `@s5 2A` abre o trecho 5, que começa na coluna 2, seção A da impressão (no arquivo da tradução, só `@s5`);
- `@m` registra nota marginal da impressão; `@n`, nota do tradutor;
- `@p` sozinho numa linha faz o trecho seguinte abrir parágrafo;
- `*…*` marca itálico (citações).

O latim e a tradução precisam ter os mesmos trechos, na mesma ordem: é isso que alinha as colunas do leitor, e o validador recusa o que estiver desalinhado.

## Comandos

Só precisa do Node.js 20 ou mais novo; não há dependências.

```bash
node tools/validar.mjs                     # confere alinhamento, cabeçalhos e glossário
node tools/build.mjs                       # gera o site em _site/
python3 -m http.server -d _site 8000       # abre em http://localhost:8000
node tools/pacote-debate.mjs jansenius-augustinus t2-lp-01   # pacote para o debate
```

## Fluxo de cada capítulo

1. **Transcrição.** Leitura do scan, normalização conforme [CRITERIOS.md](CRITERIOS.md), divisão em trechos; `transcricao: provisoria`.
2. **Conferência.** Releitura integral contra a imagem; `transcricao: conferida`.
3. **Tradução.** Primeira versão e notas; `estado: rascunho`.
4. **Debate.** `tools/pacote-debate.mjs` monta o pacote; o motor de debate (Claude × Codex × Gemini) roda as rodadas e o registro fica em `debate/<obra>/<capitulo>/`; `estado: debatida`.
5. **Revisão humana.** Decisão sobre cada objeção, conferência das remissões na fonte; `estado: revisada`.
6. **Pull request.** O GitHub valida e, depois do merge, publica o site.

## Publicação

O workflow `.github/workflows/site.yml` valida a cada pull request e, a cada push em `main`, gera e publica o site no GitHub Pages. No repositório: Settings → Pages → Source: **GitHub Actions**.

## Licenças

- Transcrições: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- Traduções, notas e glossários: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Código (`tools/`, `site/`): MIT.

Os textos latinos de base são de domínio público.

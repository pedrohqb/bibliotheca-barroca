# Bibliotheca Barroca

Clássicos latinos de teologia, filosofia e direito, com foco na escolástica barroca dos séculos XVI e XVII, transcritos de impressões antigas e traduzidos para o português, num site de leitura bilíngue: o latim ao lado da tradução, trecho a trecho, cada trecho com link permanente e ligado à coluna do scan de origem, glossário dos termos técnicos e notas do tradutor.

Primeira obra: Cornélio Jansênio, *Augustinus* (Lovaina, 1640), a partir do exemplar da Universitätsbibliothek Paderborn.

**Site:** https://pedrohqb.github.io/bibliotheca-barroca/

Planos de produção, com o prompt de cada sessão:

- Jansênio, *Augustinus*: [docs/plano-augustinus.md](docs/plano-augustinus.md)
- Pedro de Oñate, *De Contractibus* (tradução nova, a partir da edição de Roma): [docs/plano-de-contractibus.md](docs/plano-de-contractibus.md)
- Diego de Covarrubias, *Opera omnia* (Antuérpia, 1610, começando pelas *relectiones* sobre boa-fé, pactos e restituição): [docs/plano-covarrubias.md](docs/plano-covarrubias.md)

## Estrutura

```
obras/<obra>/
  obra.json            autor, título, edição de base, idiomas, licenças
  glossario.json       termos técnicos e a versão fixada para a obra
  la/<capitulo>.md     transcrição latina, dividida em trechos
  pt/<capitulo>.md     tradução, com os mesmos trechos
  catalogo.json        capítulos na ordem de produção, com colunas e páginas do scan
  caso-extra.md        instruções de debate próprias da obra (opcional)
debate/
  caso-criterios.md    critérios da edição que entram no caso de cada debate
  <obra>/<capitulo>/   resumo para a revisão, registro e consumo do debate
docs/producao.md       instalação e uso da produção na VM
site/                  estilo e scripts do site
tools/                 validação, site, imagens do scan, catálogo, ponte com o debate
.claude/skills/        skill traduzir-capitulo, para o Claude Code
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
- `@a` registra acréscimo de editor posterior (como os de Brederode na edição de 1610 do Covarrubias): o texto acrescentado sai do corpo do trecho, que guarda no lugar dele a âncora `{a1}`, `{a2}`… (colada à palavra anterior), e cada `@a` traz, na ordem das âncoras, o acréscimo em latim ou a tradução dele; o latim e a tradução têm os mesmos acréscimos, e a obra declara o rótulo em `obra.json` → `acrescimos`;
- `@p` sozinho numa linha faz o trecho seguinte abrir parágrafo;
- `*…*` marca itálico (citações).

O latim e a tradução precisam ter os mesmos trechos, na mesma ordem: é isso que alinha as colunas do leitor, e o validador recusa o que estiver desalinhado.

## Comandos

Só precisa do Node.js 20 ou mais novo; não há dependências.

```bash
node tools/validar.mjs                     # confere alinhamento, cabeçalhos e glossário
node tools/build.mjs                       # gera o site em _site/
python3 -m http.server -d _site 8000       # abre em http://localhost:8000
node tools/situacao.mjs jansenius-augustinus                # situação dos capítulos do catálogo
python3 tools/paginas.py <volume.pdf> /tmp/x --paginas 5-6  # imagens e colunas ampliadas do scan
python3 tools/catalogo.py <volume.pdf> --filtro "Liber"     # estrutura do volume pelos marcadores
node tools/debate.mjs preparar|aplicar <obra> <cap> <pasta> # caso e minuta do debate; aplicação do resultado
```

Os scripts em Python precisam de poppler-utils, Pillow e pypdf (ver `docs/producao.md`).

## Fluxo de cada capítulo

A produção roda na VM do escritório com o Claude Code, pela skill `traduzir-capitulo` (instalação e uso em [docs/producao.md](docs/producao.md)):

1. **Transcrição** das imagens do scan, com conferência linha a linha; `transcricao: provisoria`.
2. **Tradução**, em português culto, mas legível e atual, com o glossário da obra; `estado: rascunho`.
3. **Debate** com Codex e Gemini pelo motor `~/.debates-ia` (perfil `traducao`, regra de aceite), registro em `debate/<obra>/<capitulo>/`; `estado: debatida`, publicado com esse selo.
4. **Revisão humana**, pelo `resumo.md` do debate, com remissões conferidas na fonte; `estado: revisada` e, conferido o latim, `transcricao: conferida`.

## Publicação

O workflow `.github/workflows/site.yml` valida a cada pull request e, a cada push em `main`, gera e publica o site no GitHub Pages. No repositório: Settings → Pages → Source: **GitHub Actions**.

## Licenças

- Transcrições: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
- Traduções, notas e glossários: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Código (`tools/`, `site/`): MIT.

Os textos latinos de base são de domínio público.

# Bibliotheca Barroca

Clássicos latinos de teologia, filosofia e direito, com foco na escolástica barroca dos séculos XVI e XVII, transcritos de impressões antigas e traduzidos para o português, num site de leitura bilíngue: o latim ao lado da tradução, trecho a trecho, cada trecho com link permanente e ligado à coluna do scan de origem, glossário dos termos técnicos e notas do tradutor.

Primeira obra: Cornélio Jansênio, *Augustinus* (Lovaina, 1640), a partir do exemplar da Universitätsbibliothek Paderborn.

**Site:** https://pedrohqb.github.io/bibliotheca-barroca/

Planos de produção, com o prompt de cada sessão:

- Jansênio, *Augustinus*: [docs/plano-augustinus.md](docs/plano-augustinus.md)
- Pedro de Oñate, *De Contractibus* (tradução nova, a partir da edição de Roma): [docs/plano-de-contractibus.md](docs/plano-de-contractibus.md)
- Diego de Covarrubias, *Opera omnia* (Antuérpia, 1610, começando pelas *relectiones* sobre boa-fé, pactos e restituição): [docs/plano-covarrubias.md](docs/plano-covarrubias.md)
- Justiniano, *Digesto* (latim de Mommsen e Krueger, Berlim, 1889; tradução sem debate, com traduções de apoio): [docs/plano-digesto.md](docs/plano-digesto.md)
- Calvino, *Institutio christianae religionis* (1559), com contraponto católico capítulo a capítulo (em estudo): [docs/plano-institutio.md](docs/plano-institutio.md)

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

Histórico da tradução, no cabeçalho de `pt/`: `estado` (`rascunho`, `debatida`, `revisada`, `publicada`) dá o selo da lista de capítulos; `processo` diz só como a versão foi feita (ex.: "Primeira versão com Claude, revista por um segundo agente"), sem falar de debate nem de revisão pendente; `debate: AAAA-MM-DD` é gravado pelo `tools/debate.mjs aplicar`. A linha do capítulo ("Debatida com Codex e Gemini em …, N rodadas" ou "Ainda sem debate") sai desses campos e de `debate/<obra>/<id>/`, e o validador recusa `estado: debatida` sem o resumo do debate.

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

1. **Transcrição** das imagens do scan, com conferência linha a linha pelo agente; `transcricao: provisoria`.
2. **Tradução**, em português culto, mas legível e atual, com o glossário da obra; `estado: rascunho`.
3. **Debate** com Codex e Gemini pelo motor `~/.debates-ia` (perfil `traducao`, regra de aceite), que revê a tradução e também a transcrição (leitura suspeita apontada pelos revisores é conferida na imagem do scan antes de corrigir o latim); registro em `debate/<obra>/<capitulo>/`; `estado: debatida`.
4. **Pontos de dúvida**: o que o debate não resolver fica em nota ou no `resumo.md` para o tradutor. Correção humana só quando há defeito perceptível ou dúvida pontual. Os pontos que o debate deixou em aberto estão reunidos em [docs/pontos-de-duvida.md](docs/pontos-de-duvida.md), gerada por `node tools/duvidas.mjs` (rode de novo para atualizá-la); capítulos não debatidos não entram.

### Limitações do projeto

- As transcrições são feitas e conferidas por modelos de IA (pelo agente que transcreve e no debate); não há conferência humana integral contra o scan. Só se corrige à mão o defeito que se perceber na leitura.
- As traduções são primeiras versões feitas e debatidas por modelos de IA; os pontos de dúvida ficam indicados nas notas.

## Publicação

O workflow `.github/workflows/site.yml` valida a cada pull request e, a cada push em `main`, gera e publica o site no GitHub Pages. No repositório: Settings → Pages → Source: **GitHub Actions**.

## Licenças

Nenhum conteúdo deste repositório pode ser usado para fins comerciais (detalhes em `LICENSE`).

- Transcrições, traduções, notas, glossários e registros de debate: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.pt-br) (atribuição, sem uso comercial, sem obras derivadas).
- Código (`tools/`, `site/`): [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0).

Os textos latinos de base são de domínio público.

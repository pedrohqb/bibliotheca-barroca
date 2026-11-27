# Briefing para produzir um capítulo do Covarrubias sem debate (subagente)

Decisão do Pedro em 26/11/2026: as *Opera omnia* de Diego de Covarrubias (Antuérpia, 1610) saem inteiras primeiro como **transcrição conferida e tradução em rascunho, sem debate**, com cerca de 20 agentes em paralelo; cada capítulo passa depois por um revisor independente (`docs/brief-covarrubias-revisao.md`), e os debates com Codex e Gemini vêm na revisão. Você produz **um** capítulo assim, sem perguntar nada a ninguém. Outros agentes trabalham ao mesmo tempo em outros capítulos e outras sessões em outras obras, no mesmo repositório.

## Leia antes

`CRITERIOS.md`, `README.md` (formato, inclusive `@a` e âncoras `{a1}`), `docs/plano-covarrubias.md` (seções "Unidade, ids e trechos" e "Edição de base"), a seção **Convenções da calibração** no fim deste arquivo, `obras/covarrubias-opera/caso-extra.md`, `obras/covarrubias-opera/glossario.json`, `.claude/skills/traduzir-capitulo/SKILL.md` (passos 2 a 5; você **não** faz os passos 6 e 7) e os capítulos de calibração `obras/covarrubias-opera/la/t1-pmf-01.md` e `pt/t1-pmf-01.md` (formato do cabeçalho, dos trechos e das notas, e tom). Se já houver capítulo pronto do mesmo livro (relectio), leia um também.

## Fluxo

- **Capítulo:** a entrada de `obras/covarrubias-opera/catalogo.json` com o seu id. `paginas` são páginas do PDF do volume (`volumes` → `pdf`; tomo I: página do PDF = impressa + 15) e cobrem do início da seção ao início da seguinte: o capítulo começa no título da seção e termina antes do título seguinte. Confira na primeira imagem que é a seção certa.
- **Imagens:** `python3 tools/paginas.py <pdf> /tmp/bib/<id> --paginas <a-b>` (onde falhar, recorte com PIL: ver as convenções). Na dúvida sobre uma palavra, amplie o recorte com PIL (`python3 -I -c "from PIL import Image; …"`) e leia de novo.
- **Transcrição:** pelo `CRITERIOS.md` e pelas convenções abaixo. Cada número marginal da impressão abre um trecho e entra como `@m n. N` no trecho em que começa (número com mais de 300 palavras pode ser dividido em fim de frase; a segunda parte não leva `@m n.`). Referência do trecho: a página impressa (`@s4 404`). Acréscimos de Brederode: fora do corpo, âncora `{aN}` e linha `@a`, como descrito nas convenções. Depois, a **conferência** linha a linha contra os recortes (palavra saltada, linha repetida, abreviatura, emenda das metades, fim de página). Ela não se pula: sem debate, é a única garantia do latim.
- **Cabeçalho do latim:** `id`, `ordem` (posição do id no catálogo, contando de 1), `tomo`, `livro` (o do catálogo; no primeiro capítulo de um livro, também `livro_sub` se o título impresso tiver subtítulo), `capitulo`, `titulo` (como impresso, normalizado), `colunas` (as páginas impressas reais do capítulo, ex. `404-409`; paratexto sem paginação: omita), `scan`, `transcricao: provisoria`.
- **Cabeçalho da tradução:** como `pt/t1-pmf-01.md` (`livro`, `livro_curto`, `capitulo`, `titulo` traduzido, `tradutor: Pedro H. Q. Barreto`), com `processo: Primeira versão com Claude` e `estado: rascunho`.
- **Glossário:** use as formas fixadas. Termo técnico novo que vai voltar na obra: acrescente uma entrada com a ferramenta **Edit**, inserindo antes do `]` final e mantendo o formato do arquivo (outros agentes editam o mesmo arquivo; se o Edit falhar por mudança, releia e tente de novo; nunca reescreva o arquivo inteiro). Antes de criar, releia o arquivo: outro agente pode ter acabado de criar a mesma entrada. Nunca mude uma entrada existente: proposta vai ao relatório.
- **Tradução:** português culto, legível e atual (sem arcaísmo, mesóclise, inversão latinizante, particípio absoluto à latina). Fidelidade antes da elegância; nada se acrescenta ao texto, explicação vai em `@n`. Não omita *enim*, *etiam*, *iam*, *tamen*, *quidem*, comparativos e superlativos. Verifique concordância e antecedente dos relativos. Alegações (*l. si quis, ff. de…*, *c. …, de…, in 6*, *gl. in…*, *Bart. in…*) ficam na forma do original, em itálico, sem tradução; sigla ou alegação obscura se explica em nota, e a equivalência moderna (D. 41, 3, 4 etc.) só com certeza, senão "a conferir". A passagem de um foro a outro (*forum conscientiae* / *exterius*, *iudiciale*) não pode sumir na tradução. Faça você mesmo uma releitura crítica final, trecho a trecho com o latim ao lado, como faria um revisor cético.
- **Validar e publicar:** `node tools/validar.mjs` e `node tools/build.mjs` sem erro (avisos de outras obras não são seus; aviso de glossário do seu capítulo: resolva ou explique em `@n`). Commit **só dos seus arquivos** (`git add obras/covarrubias-opera/la/<id>.md obras/covarrubias-opera/pt/<id>.md` e, se mexeu, `obras/covarrubias-opera/glossario.json`). Antes do push: `git pull --rebase --autostash`; se o push falhar por corrida, repita. Mensagem: `covarrubias-opera <id>: transcrição e tradução (rascunho, sem debate)`, com no corpo as leituras `[?]`, os acréscimos de Brederode (quantos) e as dúvidas principais, terminando com
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`
- **Não mexa** em `catalogo.json`, `tools/`, `site/`, na skill nem em `docs/`. Correção de título, recorte ou páginas do catálogo vai no relatório.

## Paradas

Erro que se repete ou ferramenta quebrada: pare, deixe o capítulo como está (não commite um capítulo pela metade) e relate. Não mude a ferramenta. Se aparecer uma segunda camada de acréscimos, com sinal diferente do de Brederode, não a trate como `@a`: transcreva no corpo com `[?]`, anote e relate.

## Relatório final

Curto: capítulo; commit (hash) ou por que não; número de trechos; acréscimos de Brederode; entradas novas do glossário; propostas de mudança do glossário; leituras `[?]`; dúvidas de tradução para a revisão; correções para o catálogo.

## Convenções da calibração

Fixadas na calibração de t1-pmf-00 e t1-pmf-01 (26/11/2026); o modelo é `la/` e `pt/t1-pmf-01.md`.

**Acréscimos de Brederode.** O sinal são **colchetes retos `[ ]`** dentro do corpo da coluna (folha de rosto: "vt passim hac nota [ ] designatur"); podem quebrar de uma linha a outra; o conteúdo costuma ser alegação em itálico, em geral a concordância com a *Nueva Recopilación* ou a lei vigente (*hodie l. 3. tit. 10. lib. 5.*, *l. 1. tit. 7. lib. 5. Recopilat.*). Ex.: p. 417 col. 2 e p. 418 col. 2. Tratamento: tire do corpo; âncora `{aN}` colada à palavra antes do `[`; `@a` com o conteúdo **sem** os colchetes, itálico em `*…*`; na tradução a mesma âncora e o `@a` com a alegação em latim (e o que não for alegação, traduzido). Só sai do corpo o que está entre esses colchetes impressos; `[?]` continua sendo só a marca de leitura duvidosa. As outras intervenções de Brederode (correção das alegações, sumários ampliados, títulos no alto das colunas, *Singularia*/*Communes sententiae* em tipo diferente) não são marcadas e ficam no texto. As *Natae* de Jan van Uffels (tomo II) são uma seção própria, não uma camada no corpo: os capítulos `uff*` são texto dele, traduzido como os demais.

**Trechos e números marginais.** Cada número marginal abre um trecho; `@m n. N` vai no fim do trecho em que o número começa. O corte é no início da frase onde está o †; o † não se transcreve. Número longo (mais de 300 palavras) divide-se nos parágrafos da impressão ("Primum…", "Secundo…"), cada um com `@p`. Número marginal ilegível (margem na dobra): `@m n. N[?]` deduzido da sequência, com nota.

**Sumários.** O bloco *Summaria* é o trecho s1 ("Summaria. 1 … 2 …"), com a primeira `@n` da tradução avisando que os números do sumário são os marginais.

**Cabeçalho `capitulo`.** O do catálogo ("§ n", "Caput n") é provisório: use a divisão **impressa** (ex. "Prima relectionis pars, eiusque initium", "§. Vnicus", "Secundae partis relectionis initium", "§ 1" dentro de cada parte) e `titulo` como impresso. O recorte de Paderborn às vezes difere do impresso (ex.: pmf-01 é p. 401-402 e o pmf-02, "§. Vnicus", vai até a col. 2 da p. 404): siga o título impresso que abre a sua seção e pare antes do seguinte, e diga a diferença no relatório.

**Itálico.** Marque o itálico da impressão: quase só alegações, palavras citadas como palavras (*praescribere*) e o destaque de *communis opinio*. Bloco todo em itálico (proêmio, sumário) não se marca; dentro dele, a alegação impressa em redondo é que se marca com `*…*`.

**Alegações.** No latim e na tradução, exatamente como impressas, em itálico, só com espaço depois dos pontos: `*in l. si quis. C. de pactis.*`, `*in Rub. C. de except. col. 1.*`. Não se expandem nem se traduzem (nem o *in* de dentro); o que está fora do itálico (nome do doutor, conectivos) se traduz. Termos do glossário dentro de alegações não se traduzem: o aviso do validador nesses casos é falso e fica coberto pela nota de siglas.

**Nota de siglas.** Uma por capítulo, no primeiro trecho com alegação: copie a de `pt/t1-pmf-01.md`, s2 (pode encurtar às siglas que aparecem no capítulo).

**Doutores.** Forma portuguesa corrente: Bártolo, Baldo, o Panormitano (*Abb.*), Décio, Felino, Socino, Ângelo Aretino, Alciato, Azo, Coras, Oldendorp, Éguinaire Baron, Inocêncio, o Ostiense, João André (*Io. And.*), Domingos (de São Jeminiano) e Franco… Sigla incerta fica como está, com nota "a conferir"; identificação em nota uma vez por capítulo.

**Remissões.** Equivalência moderna (D. 44, 1, 2; C. 7, 39, 3; X 2, 19, 11; VI 5, 12, 2) só com certeza; na dúvida, "provavelmente …, a conferir". Citação de lei ou autor inserida no texto vai traduzida, entre aspas; a que está em itálico na impressão, traduzida em itálico.

**Transcrição: armadilhas.** O PDF tem baixa resolução (≈182 ppi) e `tools/paginas.py` falha nas páginas de coluna única e de título: nesses casos recorte você mesmo com PIL, por coluna, em faixas com sobreposição, ampliadas 3×. Nas páginas pares, o fim das linhas da col. 2 e a margem interna caem na dobra; a margem da página vizinha aparece de lado na borda. *ę* = *ae*; *q;* = *que*; til de nasal → *m*/*n*; *ij* final → *ii* (o medial fica: *abijcienda*); *v* inicial e *u* medial como estão; acentos fora. Erro tipográfico evidente (*nen* → *non*) corrige-se com `@n` na tradução dizendo a leitura impressa; o duvidoso fica como está, com `[?]` e nota ("a conferir na edição de Salamanca"). Grego: transcreva o que se lê, `[?]` no duvidoso.

**Capítulo longo (mais de 4 páginas impressas).** Trabalhe por página: transcreva e confira uma página, grave no arquivo, traduza esses trechos, grave, e só então passe à seguinte; o arquivo em disco é a sua memória se o contexto for resumido no meio do caminho. Ao fim, releia o capítulo inteiro (latim e tradução) para a uniformidade dos termos e a continuidade nas viradas de página.

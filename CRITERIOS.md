# Critérios da edição

## Edição de base

Só impressões antigas digitalizadas, em domínio público. Cada obra registra em `obra.json` a impressão (lugar, impressor, ano) e o exemplar digitalizado; cada capítulo registra o link do scan e as colunas ou páginas que ocupa. Edições críticas modernas servem para conferir leituras difíceis, nunca como texto de base, porque o aparato e as emendas delas podem ter direitos.

As imagens não são copiadas para o repositório: o site aponta para o scan na biblioteca de origem.

## Transcrição

O texto latino é uma transcrição normalizada para leitura, não diplomática:

- abreviaturas e sinais tironianos desenvolvidos (*&* → *et*, *q;* → *que*, til de nasal → *m*/*n*);
- *ſ* longo → *s*; *æ*, *œ* → *ae*, *oe*; *ij* final → *ii* (*alijs* → *aliis*);
- acentos gráficos da época retirados (*quàm*, *ergò*, *reipsâ* → *quam*, *ergo*, *reipsa*);
- grafia da impressão mantida em tudo o mais: *j* e *v* como estão (*hujus*, *jam*), *lachrymarum*, *caeteris*, *coelo*, e as variações do próprio impressor (*hujusmodi* e *huiusmodi*);
- versaletes do nome de Jesus (IESV) → *Iesu*, *Iesus*;
- pontuação da impressão mantida, sem o espaço antes de sinais;
- itálico da impressão (citações) marcado com `*…*`;
- notas marginais da impressão registradas com `@m`, tal como impressas; leitura duvidosa marcada com `[?]`;
- acréscimos de editor posterior que a própria impressão marca como tais (por exemplo, os de Brederode na edição de Antuérpia de 1610 do Covarrubias) saem do corpo do texto e vão para o rodapé do trecho com `@a`, deixando a âncora `{a1}`, `{a2}`… no ponto em que estavam; são transcritos e traduzidos com os mesmos critérios. Só sai do corpo o que a impressão marca; na dúvida sobre onde a marca começa ou termina, `[?]` e nota.

O estado de cada capítulo vai no cabeçalho: `transcricao: provisoria` até a conferência integral contra o scan; depois, `conferida`.

## Tradução

**Registro.** Português culto, mas legível e atual: o de um bom ensaio de hoje, não o de um texto do século XIX.

- Nada de arcaísmos, mesóclises ou inversões latinizantes (*conhece-a todo aquele*, *se nos ensina*, *há de ser livrado*); a ordem das palavras é a natural do português.
- Período latino muito longo pode ser dividido em dois ou mais quando isso não muda o sentido nem a ênfase; a divisão é anotada se a estrutura do argumento depender dela.
- Vocabulário corrente sempre que existir equivalente exato; a palavra rara só entra quando é termo técnico ou quando a corrente perderia sentido.
- Termos técnicos (teológicos, filosóficos, jurídicos) com uma forma só ao longo de todo o texto, a do glossário: o mesmo termo latino, no mesmo sentido, tem sempre a mesma tradução, em todos os capítulos. Quando o autor usa a palavra noutro sentido, a tradução muda e o motivo vai em nota.

**Fidelidade.**

- Fidelidade antes da elegância: nada se acrescenta ao texto; explicação vai para nota (`@n`).
- O glossário (`glossario.json`) fixa a versão dos termos técnicos para a obra inteira, e o validador avisa quando um trecho foge dele.
- Citações da Escritura: tradução direta do latim citado pelo autor, porque o argumento costuma depender da palavra latina; a divergência com as versões correntes vai em nota.
- Remissões (Agostinho, concílios, Escritura) são conferidas na fonte antes de passar a tradução para `revisada`; numeração antiga (por exemplo, cartas de Agostinho antes dos Maurinos) é indicada como tal.
- Jogos de palavras e ambiguidades do latim são conservados quando possível; quando não, nota.

Estados da tradução (`estado:` no cabeçalho):

| Estado | O que significa |
|---|---|
| `rascunho` | primeira versão, sem revisão |
| `debatida` | passou pelo debate entre modelos; objeções registradas em `debate/` |
| `revisada` | revista pelo tradutor, com remissões conferidas |
| `publicada` | revisão final concluída |

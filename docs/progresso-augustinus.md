# Progresso: o *Augustinus* inteiro

Estado da produção, atualizado ao fim de cada sessão. O plano está em `docs/plano-augustinus.md`.

## Etapa atual

**1. Calibração — aguardando o Pedro.** O t2-lp-02 foi produzido de ponta a ponta; a etapa 2 (*Liber prooemialis*) só começa depois de o Pedro ler o resumo e o registro do debate e dizer "pode seguir".

## Sessões

### 26/11/2026

- **Preparação (etapa 0), concluída.** PDF do tomo II baixado pelo Chromium da VM (532 páginas, 170 MB) e gravado em `~/bibliotheca-fontes/jansenius-augustinus/tomo-2.pdf`. Catálogo do tomo II inteiro em `catalogo.json`: 215 capítulos em 9 livros (lp 30, ni 21, nl1 23, nl2 25, nl3 24, nl4 27, np1 21, np2 22, np3 22), com colunas e páginas dos marcadores do PDF e o link de cada capítulo lido na estrutura do visualizador de Paderborn (232 links, alinhados um a um com os marcadores). Conferidos nas páginas indicadas: t2-nl2-01 (p. 148, col. 281), t2-np1-01 (p. 345, col. 679) e t2-np3-22 (p. 493, col. 975). Siglas novas anotadas na skill.
- **Calibração (etapa 1):** t2-lp-02 publicado, `estado: debatida`. 3 rodadas; `decidir.py`: R1 CONTINUAR, R2 FINAL_UNANIMIDADE, R3 final sem objeção dos dois. 6 objeções na R1 (3 do Codex, 3 do Gemini), todas acolhidas; nenhuma divergência. Roteiro em `debate/jansenius-augustinus/t2-lp-02/resumo.md`.

## Pontos em aberto para o Pedro

1. **Calibração:** ler o resumo e o registro do t2-lp-02 e dizer se pode seguir para o resto do *Liber prooemialis*.
2. **Glossário:** confirmar as quatro entradas novas do t2-lp-02 (*gratia medicinalis* → graça medicinal; *charitas* → caridade; *mysterium* → mistério; *recentiores* → os modernos). A de *recentiores* é a que mais pesa.
3. **t2-lp-01** continua em `rascunho`: foi feito antes da ponte com o debate e nunca passou por ele. Proposta: debatê-lo (passo 6 da skill) no começo da próxima sessão, antes do t2-lp-03; `situacao.mjs --proximo` já o aponta como próximo.
4. **Catálogo:** títulos e colunas dos capítulos ainda não transcritos vêm da estrutura da biblioteca e cobrem páginas inteiras (o capítulo pode começar ou terminar no meio delas); acertam-se na transcrição de cada um.

## Propostas de glossário acumuladas no livro (*Liber prooemialis*)

Nenhuma proposta de mudança de entrada existente. Entradas novas a confirmar: ver ponto 2.

## Problemas de ferramenta

- O campo `scan_colunas` do t2-lp-01 não é lido por nenhuma ferramenta; não o repeti no t2-lp-02.

## Consumo

- 26/11/2026 (sessão inteira, até a exportação do debate): 65 chamadas do Claude (Opus 5.5), US$ 3,92 a preço de API; no debate do t2-lp-02, 14 chamadas, US$ 0,95. Revisores no t2-lp-02: Codex 844 mil tokens de entrada (670 mil em cache), 41 buscas; Gemini 74 mil de entrada, 4 buscas. Detalhe em `debate/jansenius-augustinus/t2-lp-02/consumo.csv`.

## Próximo capítulo

Depois do "pode seguir": t2-lp-01 (debate do rascunho) e, em seguida, t2-lp-03.

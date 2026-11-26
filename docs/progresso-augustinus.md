# Progresso: o *Augustinus* inteiro

Estado da produção, atualizado ao fim de cada sessão. O plano está em `docs/plano-augustinus.md`.

## Etapa atual

**2. *Liber prooemialis*: em produção.** Capítulos 1 a 6 publicados (`debatida`); faltam 24 (t2-lp-07 a t2-lp-30). O ponto de controle do livro vem depois do t2-lp-30.

## Sessões

### 26/11/2026

- **Preparação (etapa 0), concluída.** O PDF do tomo II (532 páginas, 170 MB) foi baixado pelo Chromium da VM e gravado em `~/bibliotheca-fontes/jansenius-augustinus/tomo-2.pdf`. O catálogo do tomo II inteiro está em `catalogo.json`: 215 capítulos em 9 livros (lp 30, ni 21, nl1 23, nl2 25, nl3 24, nl4 27, np1 21, np2 22, np3 22). Colunas e páginas vêm dos marcadores do PDF, e o link de cada capítulo foi lido na estrutura do visualizador de Paderborn (232 links, alinhados um a um com os marcadores). Conferidos nas páginas indicadas: t2-nl2-01, t2-np1-01 e t2-np3-22.
- **Calibração (etapa 1):** t2-lp-02 publicado. 3 rodadas; R1 CONTINUAR, R2 FINAL_UNANIMIDADE, R3 final sem objeção; 6 objeções acolhidas. O Pedro aprovou ("vai embora") e pediu que a produção siga sem novas perguntas.
- **Lote (etapa 2), 5 capítulos.** Debates em paralelo; cada um com transcrição conferida nos recortes, debate completo, resumo, commit e push.

| Capítulo | Trabalho | Rodadas | `decidir.py` | Objeções acolhidas | Em aberto |
|---|---|---|---|---|---|
| t2-lp-01 | só debate (o rascunho já existia) | 4 | R1 CONTINUAR, R2 CONTINUAR, R3 FINAL_UNANIMIDADE, R4 final com 1 pendência do Codex | 14 | divergência sobre o paralelo em *De catech. rud.* 21,37 (nota do § 15) |
| t2-lp-03 | completo | 3 | R1 CONTINUAR, R2 FINAL_UNANIMIDADE, R3 sem objeção | 10 | *nostri amoris* (impressão) × *nostri erroris* (Agostinho), § 6 |
| t2-lp-04 | completo | 3 | R1 CONTINUAR, R2 FINAL_UNANIMIDADE, R3 sem objeção | 16 (2 em parte); 1 rejeitada | *sive scripto* (impressão, conferido) × conjectura *sine scripto*, § 12 |
| t2-lp-05 | completo | 3 | R1 CONTINUAR, R2 FINAL_UNANIMIDADE, R3 sem objeção | 3 | margem cortada no § 5 |
| t2-lp-06 | completo | 4 | R1 CONTINUAR, R2 CONTINUAR, R3 FINAL_UNANIMIDADE, R4 sem objeção | 19 | *vides*/*videas* no § 7; margens cortadas |

## Pontos em aberto para o Pedro

1. **Glossário: entradas novas a confirmar.** Todas valem para a obra inteira; os capítulos já usam essas formas.
   - t2-lp-02: *gratia medicinalis* → graça medicinal; *charitas* → caridade; *mysterium* → mistério; *recentiores* → os modernos.
   - t2-lp-03: *status purae naturae* → estado de natureza pura; *praedestinatio* → predestinação; *Scholastici* → escolásticos; *dilectio* → dileção; *concursus Dei* → concurso de Deus; *habitus* → hábito.
   - t2-lp-04: *traditio* → tradição (*tradere* → transmitir); *intellectus* → intelecto; *lex nova* → lei nova (*lex gratiae* → lei da graça).
   - As que mais pesam são *recentiores* ("os modernos") e *dilectio* ("dileção").
2. **Leituras do texto a decidir:**
   - t2-lp-03, § 6: a tradução segue o impresso (*amoris*) ou o texto de Agostinho (*erroris*)?
   - t2-lp-04, § 12: *sive* × *sine scripto*.
3. **t2-lp-01, § 15:** os revisores divergem sobre *De catech. rud.* 21,37. Ainda no § 15, a ressalva "a conferir" sobre *Contra Iulianum* 4,3,15 pode sair, porque os dois revisores confirmaram a passagem.
4. **Margens cortadas na encadernação** (t2-lp-04, 05 e 06): leituras com `[?]` a conferir no scan, se houver outro exemplar.
5. **Catálogo:** títulos e colunas dos capítulos ainda não transcritos vêm da estrutura da biblioteca e acertam-se na transcrição.

## Propostas de glossário acumuladas no livro (*Liber prooemialis*)

Nenhuma proposta de mudança de entrada existente. As entradas novas estão no ponto 1 acima.

## Problemas de ferramenta e observações

- O campo `scan_colunas` do t2-lp-01 não é lido por nenhuma ferramenta; não o repeti nos demais.
- O validador avisa *gratia* em *exempli gratia* (t2-lp-06, § 4), que não é termo técnico; está explicado em nota.
- A medição de consumo por debate (`consumo_claude.py`, recorte "debate") é por tempo. Com debates em paralelo, cada recorte inclui o trabalho dos outros capítulos; vale a medição da sessão inteira.
- Outra sessão criou neste repositório a obra `onate-de-contractibus` (commit 7d9ec64, 26/11, 10:53). O validador avisa "nenhum capítulo" para ela. Não é desta produção e não mexi nela.

## Consumo

- 26/11/2026, sessão inteira: 173 chamadas do Claude (Opus 5.5), US$ 16,15 a preço de API (medido antes do commit final).
- Revisores no lote (t2-lp-01, 03 a 06), 17 rodadas cada: Codex com 12,0 milhões de tokens de entrada (a maior parte em cache), 389 buscas e cerca de 133 créditos estimados; Gemini com 2,4 milhões de tokens de entrada e 153 buscas. A calibração (t2-lp-02) gastou à parte cerca de 0,9 milhão (Codex) e 0,07 milhão (Gemini).
- Nenhum LIMITE DE USO nesta sessão.

## Próximo capítulo

t2-lp-07 (col. 15–20, p. 15–17).

# Prompt-padrão para um agente de produção do Digesto

(Substitua TITULOS, TEMA, PASTA, TERMOS.)

Você vai produzir os títulos TITULOS da tradução portuguesa do Digesto de Justiniano no repositório /home/pedro/bibliotheca-barroca (site Bibliotheca Barroca, latim ao lado do português) — TEMA. Divida com subagentes que sigam estas mesmas instruções, por blocos de leis, quando o volume passar de ~4.000 palavras, e confira você mesmo, no fim, a uniformidade dos termos e das inscrições.

Siga à risca o roteiro /home/pedro/bibliotheca-barroca/docs/brief-digesto-titulo.md (leia-o primeiro: gateway RBSA para arquivos grandes com o escopo autorizado `bibliotheca-digesto` — nunca leia por outro caminho o que o hook recusar —, nomes de juristas, formas fixadas, nomes de obras, cotejo integral obrigatório, abrir a página como imagem quando o OCR de apoio falhar, siglas do aparato, erros tipográficos). Leia também CRITERIOS.md e docs/plano-digesto.md. Modelos prontos: obras/iustinianus-digesta/la/d01-03.md, pt/d01-03.md, pt/d09-02.md, pt/d10-02.md, pt/d10-03.md.

Essencial: (1) latim conferido linha a linha contra o scan de 1889 (python3 tools/digesto.py paginas <id> <pasta>); a impressão prevalece. (2) Tradução do latim, cotejada TRECHO A TRECHO, em todos os trechos, com Hulot (confira a página; datas no roteiro), alemão, italiano, espanhol e Scott (python3 tools/digesto.py apoio <id> fr|de|it|es|en > <pasta>/<id>-xx.txt) e com Monro vol. 2 (só livros 1-15; /mnt/rbsa/dados/Conhecimento jurídico/Digesta/digestofjustinia02monruoft.pdf; extraia só as páginas dos títulos). O processo lista só o que foi cotejado de fato. (3) Glossário e formas fixadas sempre. Termos novos: TERMOS — escolha, mantenha e informe.

Pasta de trabalho: /home/pedro/bibliotheca-fontes/iustinianus-digesta/trabalho/PASTA (apague as imagens no fim). Só os seus arquivos; sem git (outros agentes trabalham em paralelo). Ao final rode node tools/validar.mjs e entregue o relatório curto do roteiro.

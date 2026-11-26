# Revisão independente do Digesto

Pedido do Pedro (2026-11-26): um revisor independente sobre o que já foi publicado. O revisor não participou da produção e não recebe as conclusões de quem traduziu: lê o latim, a tradução e as fontes, e julga por si.

## Unidade e saída

Um livro por vez. O relatório vai em `docs/revisao/livro-NN.md`, com uma seção por título.

## O que o revisor faz, em cada título

1. **Tradução contra o latim, trecho a trecho, em todos os trechos.** Procura erro de sentido, omissão, acréscimo, negação invertida, sujeito trocado, tempo verbal errado, número errado, inscrição mal vertida.
2. **Latim contra a impressão de 1889, por amostragem.** Confere pelo menos um trecho em cada cinco, e mais onde a nota fala em correção ou onde o texto soar estranho (`python3 tools/digesto.py paginas <id> <pasta>`).
3. **Cotejo de controle.** Nos pontos em que suspeitar de erro, consulta as traduções de apoio (`apoio <id> fr|de|it|es|en`) antes de concluir.
4. **Uniformidade.** Glossário (`glossario.json`) e formas fixadas do roteiro (`docs/brief-digesto-titulo.md`); nomes de juristas e de obras nas inscrições.
5. **Registro.** `CRITERIOS.md`: sem mesóclises, arcaísmos ou inversões latinizantes; português culto e atual.
6. **Notas.** Exatas, úteis, sem afirmação que o aparato ou as fontes não sustentem; sem notas óbvias.

## Como trata o que achou

- **Erro claro** (de sentido, de latim confirmado na imagem, de forma fixada, de registro): corrige no arquivo e registra no relatório, em uma linha: trecho, antes, depois, motivo.
- **Ponto discutível** (interpretação defensável, leitura do aparato, escolha de termo nova): não corrige; registra no relatório como "a decidir", com as duas leituras.
- Não muda `glossario.json`, `catalogo.json`, `tools/` nem `docs/` além do seu relatório. Sem git.
- Ao fim, `node tools/validar.mjs` sem erro, e no relatório um resumo: trechos lidos, erros corrigidos por tipo, pontos a decidir.

## Depois da revisão

O coordenador lê o relatório, decide os pontos em aberto, publica e acrescenta ao `processo` de cada título revisto: "revista por revisor independente (Claude)".

O gateway RBSA vale também aqui (escopo `bibliotheca-digesto`; nunca ler por outro caminho o que o hook recusar).

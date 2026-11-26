# Roteiro: produzir um título do Digesto

Para cada sessão ou agente que produz títulos de `obras/iustinianus-digesta/`. Leia antes `CRITERIOS.md` e `docs/plano-digesto.md`, e veja como modelo `la/d01-03.md`, `pt/d01-03.md` e `pt/d01-05.md`. **Sem debate com IA** (decisão do Pedro). Fidelidade e cuidado acima da velocidade: "não é trabalho porco".

## Regras de convivência (vários agentes ao mesmo tempo)

- Mexa **só** em `obras/iustinianus-digesta/la/<id>.md` e `pt/<id>.md` dos títulos que lhe foram dados. Não edite `glossario.json`, `catalogo.json`, `tools/`, `docs/`, nem outros títulos.
- **Não faça commit, pull nem push.** Quem coordena revisa e publica.
- Arquivos de trabalho (imagens) numa pasta própria em `~/bibliotheca-fontes/iustinianus-digesta/trabalho/<sua-sigla>/` (o `/tmp` é pequeno e enche); apague as imagens ao terminar.

## Arquivos grandes e o gateway RBSA

O plugin RBSA bloqueia o Read de arquivos grandes sem escopo de matéria. O Pedro autorizou (2026-11-26) o escopo **`bibliotheca-digesto`** para este projeto. Para ler um arquivo grande (o latim do título, um trecho de apoio gravado em arquivo, o texto do Monro), use o próprio gateway, que é o caminho que o hook indica:

```bash
G=/home/pedro/.config/Claude/local-agent-mode-sessions/23ada305-0089-46dc-a243-480414eaf0ab/41c28055-8a47-48f2-af87-b710a99f52c8/rpm/plugin_012XZmQG5sC1KBYb8AYbbbsF/context_gateway_cli.py
python3 $G --matter bibliotheca-digesto index <arquivo>
python3 $G --matter bibliotheca-digesto read <arquivo> --start 0 --limit 10
```

Reindexe depois de alterar o arquivo. Para corrigir o latim de um arquivo grande, aplique as substituições por um script Python (pares "antes"/"depois", com `assert antes in texto`). Nunca contorne o hook por outro caminho (cat, cópia, pdftotext para ler o que ele barrou).

## Passos

1. **Latim:** `python3 tools/digesto.py latim <id>`.
2. **Scan:** `python3 tools/digesto.py paginas <id> <pasta>`; leia os recortes com Read, na ordem (página por página: `c1a`, `c1b`, `c2a`, `c2b`, e `pe` para o fim das colunas e o aparato). As páginas pares e ímpares têm margens diferentes; se um recorte cortar letras, refaça o recorte com Pillow.
3. **Conferência do latim, linha a linha, contra a impressão de 1889, que prevalece.** A transcrição digital erra com frequência:
   - maiúscula depois de ponto: a impressão só usa maiúscula no início de cada parágrafo (pr., §) e nos nomes próprios (`est autem`, `Celsus`, `Titius`, `Arescusa`);
   - inscrições: siga a impressão (*Idem* quando é o mesmo autor da lei anterior; numerais como impressos: `libro XVII`, `libro vicensimo quinto`, `libro tertio decimo`), e corrija *opinionem*/*opinionum* e afins;
   - palavras erradas ou omitidas, variantes de edições posteriores, `[sic]` e glosas entre aspas da fonte digital (ex.: `necessariam "necessarium"` → `necessariam`), duplicações;
   - `*potius*` e outros itálicos espúrios: tire os asteriscos (o itálico só marca a inscrição, no início da lei);
   - **grego**: a fonte digital o translitera; redigite-o da impressão, com acentos e espíritos, sem asteriscos;
   - aspas da impressão: ‘…’; `v`/`u` como na impressão (`firmauit`, `ueluti`, quando impressos assim);
   - ajuste `colunas:` no cabeçalho para as páginas impressas que o título ocupa (ex.: `7-8`).
   Mantenha `transcricao: provisoria`. Divergência que mude o sentido: nota na tradução (`@n`), dizendo o que a fonte digital lia.
4. **Apoio (obrigatório, trecho a trecho, não só nos passos difíceis):** `python3 tools/digesto.py apoio <id> de`, `... es`, `... it`, `... en` (alemão Otto-Schilling-Sintenis, espanhol García del Corral, italiano Vignali, Scott). Leia os trechos correspondentes a cada lei, sobretudo nos passos difíceis. Monro (livros 1-15) está em PDF com texto. Nas edições bilíngues (espanhol, italiano) o vernáculo de um título pode vir depois do latim do título seguinte; o `apoio` mostra uma margem de 600 linhas além do título seguinte: procure ali o fim do seu título. No italiano, o OCR mistura latim, italiano e notas de Gotofredo: leia com atenção, e mais devagar. O Hulot ainda está em OCR: por ora não entra. No `processo`, liste **só** as traduções efetivamente cotejadas; Otto-Schilling-Sintenis: 1839 para os livros 1-11 (vol. 1, 2. ed.), 1830-1832 para os demais.
5. **Tradução** em `pt/<id>.md`, trecho a trecho, com os mesmos `@sN` (sem a referência):
   - cabeçalho: `id`, `livro: Livro <ordinal por extenso>` (Livro primeiro, Livro segundo… Livro quinquagésimo), `livro_curto: Livro <romano>`, `capitulo: Título <romano>` (livros 30-32: `Título único`), `titulo` em português, `tradutor: Pedro H. Q. Barreto`, `processo: Primeira versão com Claude, feita do latim e cotejada com as traduções de <as efetivamente usadas, com ano>, sem debate, para revisão`, `estado: rascunho`;
   - inscrição no início do primeiro trecho de cada lei, em itálico: `*Ulpiano, Comentários ao edito, livro 11.*` — autor em português, obra em português, livro em algarismo arábico; `livro único` para *libro singulari*; *Idem* vira o nome do autor;
   - registro do `CRITERIOS.md`: português culto, legível, atual; sem arcaísmos nem inversões; fidelidade antes da elegância; nada se acrescenta ao texto (explicação vai em `@n`); grego traduzido no corpo e citado em nota;
   - termos do `glossario.json` sempre na forma fixada; termo técnico recorrente fora do glossário: escolha uma forma, use-a sempre e **informe-a no relatório** (não edite o glossário);
   - notas (`@n`) curtas e úteis: instituto pouco conhecido, etimologia, leitura divergente, divergência entre as traduções de apoio que dependa da interpretação, ponto em que o texto está corrompido (use o aparato do rodapé). Não encha de notas óbvias;
   - nomes de ações: em latim na primeira ocorrência do título, com tradução.
6. `node tools/validar.mjs`: nenhum erro no seu título; aviso de glossário resolvido (forma fixada) ou explicado em `@n`.

## Nomes das obras nas inscrições (use sempre estes)

| Latim | Português |
|---|---|
| institutionum | Instituições |
| regularum | Regras |
| definitionum | Definições |
| enchiridii | Manual |
| iuris epitomarum / epitomarum | Epítomes do direito |
| ad Sabinum | Comentários a Sabino |
| ad edictum | Comentários ao edito |
| ad edictum provinciale | Comentários ao edito provincial |
| ad edictum aedilium curulium | Comentários ao edito dos edis curuis |
| ad legem duodecim tabularum | Comentários à Lei das Doze Tábuas |
| ad legem Iuliam et Papiam | Comentários à Lei Júlia e Pápia |
| ad legem Cinciam | Comentários à Lei Cíncia |
| ad Plautium | Comentários a Plaucio |
| ad Quintum Mucium | Comentários a Quinto Múcio |
| digestorum | Digestos |
| quaestionum | Questões |
| responsorum | Respostas |
| disputationum | Disputas |
| sententiarum | Sentenças |
| membranarum | Pergaminhos |
| pandectarum | Pandectas |
| opinionum | Pareceres |
| fideicommissorum | Fideicomissos |
| excusationum | Escusas |
| epistularum | Cartas |
| de officio proconsulis | Do ofício do procônsul |
| de iure singulari | Do direito singular |
| de portionibus, quae liberis damnatorum conceduntur | Das porções concedidas aos filhos dos condenados |
| ex Cassio | Extratos de Cássio |
| ex Plautio | Extratos de Plaucio |
| differentiarum | Diferenças |
| de officio consulis | Do ofício do cônsul |
| rerum cottidianarum sive aureorum | Coisas cotidianas ou Áureos |
| ex variis lectionibus | Leituras várias |
| de censibus | Dos censos |
| de officio praefecti praetorio / urbi / vigilum | Do ofício do prefeito do pretório / da cidade / dos vigias |
| de officio quaestoris | Do ofício do questor |
| de omnibus tribunalibus | De todos os tribunais |
| de officio praesidis | Do ofício do governador |
| de cognitionibus / cognitionum | Das cognições / Cognições |
| de iudiciis publicis | Dos juízos públicos |
| de officio adsessorum | Do ofício dos assessores |
| ad edictum monitorium | Comentários ao edito monitório |
| de poenis | Das penas |
| de appellationibus | Das apelações |
| Iuliani digestorum notae | Notas aos Digestos de Juliano |
| publicorum (iudiciorum) | Dos juízos públicos |
| ad legem vicensimam hereditatium | Comentários à Lei do vigésimo das heranças |

Obra que não esteja na tabela: escolha a forma (título em português, sem "Livro de"), use-a e informe-a no relatório.

## Formas já fixadas fora do glossário (use-as)

Nomes de juristas: Pomponio (sem acento, como em todas as inscrições já publicadas), Emílio Macro (*Aemilius Macer*), Cévola, Mauriciano, Venuleio Saturnino, Licínio Rufino, Calístrato, Hermogeniano, Próculo, Trifonino, Paulo, Ulpiano, Papiniano, Juliano, Celso, Marciano, Modestino, Gaio, Florentino, Javoleno, Africano, Nerácio, Marcelo, Labeão.


*libertinus* e *libertus*: liberto · *ingenuus*: ingênuo · *adrogatio*, *adrogare*, *adrogator*: ad-rogação, ad-rogar, ad-rogante · *adoptio*: adoção · *emancipatio*: emancipação · *adgnatio*, *adgnatus*: agnação, agnado · *cognatio*, *cognatus*: cognação, cognado · *adfinitas*: afinidade · *suus heres*: herdeiro seu · *satisdatio*: satisdação · *cautio*: caução · *servus publicus*: escravo público · *actio utilis*: ação útil · *legis actio*: ação da lei · *postliminium*: pós-limínio · *pupillus*: pupilo · *impubes*: impúbere · *fideicommissum*: fideicomisso · *divi fratres*: os divinos irmãos · *res sacrae/religiosae/sanctae*: coisas sagradas/religiosas/santas · *universitas*: coletividade · *in bonis*: no patrimônio · *res corporales/incorporales*: coisas corpóreas/incorpóreas · *praedium*: prédio · *fundus*: terreno · *servitus* (predial): servidão; (da pessoa): escravidão · *praeses*: governador · *potestas*: poder · *patria potestas*: poder paterno · *pater/filius familias*: pai/filho de família · *iustae nuptiae*: justas núpcias · *vulgo concepti*: concebidos fora do casamento · *furiosus*: louco · *imperium*: poder de mando · *iurisdictio*: jurisdição · *edictum*: edito · *ius dicere/reddere*: declarar o direito · *in ius vocare*: chamar a juízo · *prudentes*: jurisconsultos · *res iudicata*: coisa julgada · *senatus consultum*: senatus-consulto · *princeps*: príncipe · *divus*: divino · *imperator*: imperador · *consularis*: consular · *praefectus praetorio*: prefeito do pretório · *praefectus urbi*: prefeito da cidade · *praefectus vigilum*: prefeito dos vigias · *magister equitum*: mestre da cavalaria · *a libellis*/*magister libellorum*: (mestre) das petições · *clarissimus*: claríssimo · *officium*: ofício · *relegatio*, *deportatio*: relegação, deportação · *in metallum*: (condenação) às minas · *quaestio* (tortura): tortura · *in integrum restitutio*: restituição integral · *interdictum*: interdito · *argentarius*: banqueiro · *nummularius*: cambista · *insula*: prédio de aluguel · *lex Iulia repetundarum*: Lei Júlia de repetundas · *imperium*: império · *merum/mixtum imperium*: mero/misto império · *ius reddere*: declarar o direito (como *ius dicere*) · *iudicium*: juízo · *iudex*: juiz · *bonorum possessio*: posse dos bens · *missio in possessionem*: imissão na posse · *causa cognita*: com conhecimento de causa · *mandata* (do príncipe): instruções · *cognitio*: cognição · *adsessor*: assessor · *procurator Caesaris*: procurador de César · *iuridicus*: jurídico · *legatus* (cargo): legado · *proconsul*: procônsul · *praefectus Augustalis*: prefeito augustal · *feriae*: férias · *dilatio*: dilação · *edere/editio*: exibir/exibição · *argentarius*: banqueiro · *rationes*: contas · *instrumentum*: documento · *transactio*: transação · *oratio* (do príncipe): discurso · *acceptilatio*: aceitilação · *constitutum*: constituto · *cautio de rato*: caução de ratificação · *condictio*: em latim, com nota · *in solidum*: pelo todo · *satisdatio/satisdare*: satisdação/prestar satisdação · *fideiussor*: fiador · *iudicio sisti*: comparecer em juízo · *iudicatum solvi*: de que se pagará o julgado · *actio noxalis*: ação noxal · *actio in factum*: ação *in factum* · *actio iniuriarum*: ação de injúrias · *duo rei*: correus · *dominus litis*: dono da lide · *metus*: medo · *vis*: violência · *actio quod metus causa*: ação por causa do medo · *quadruplum/simplum*: quádruplo/simples · *actio arbitraria*: ação arbitrária · *hereditatis petitio*: petição de herança · *actio ad exhibendum*: ação de exibição · *replicatio*: réplica · *noxae deditio*: abandono noxal · *actio in rem/in personam*: ação real/pessoal · *ratum habere*: ter por válido · *pollicitatio*: promessa unilateral · *postulare*: postular · *advocatus*: advogado · *infamia*: infâmia · *ignominia*: ignomínia · *existimatio*: reputação · *sponsalia*: esponsais · *iudex pedaneus*: juiz pedâneo · *stellionatus*: estelionato.

## Relatório final (curto)

Para cada título: número de trechos; correções de latim que mudam o sentido (uma linha cada); leituras duvidosas (`[?]`); formas novas de termos técnicos e de nomes de obras; problemas que você não resolveu.

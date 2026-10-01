# Padrões · Genos Group

Os manuais que valem para todo trabalho da Genos, nosso e de cliente. Este
repositório existe para ter **um lugar com nome óbvio**: padrão espalhado dentro
do repositório de um projeto é padrão que ninguém acha seis meses depois.

| Padrão | O que cobre |
| --- | --- |
| [**Checklist de LP**](checklist-lp.md) | Tudo que uma landing page da Genos precisa ter antes de ir ao ar, em quatro frentes: **medição** (GA4, Pixel, eventos, UTM, Search Console), **SEO técnico**, **performance** e **conteúdo**. Com o roteiro em fases, as armadilhas que já custaram caro, o inventário das páginas no ar e a lista de verificação final. |

## O inventário vive numa planilha

O que está no ar, a convenção de UTM e o histórico de links ficam em
[**UTMs e páginas · Genos**](https://docs.google.com/spreadsheets/d/16Imi0K-b4Vb7sijtPDagR8-5IAbJ4YQ8177BRfNpAzc/edit).
Lá a lista de origens é fechada e o link se monta por fórmula, então não dá para
escrever `ig` num dia e `instagram` no outro — que é o que cria dois canais no
GA4 que nunca somam.

O checklist aqui guarda o porquê; a planilha guarda o estado. Quando as duas
divergirem, vale a planilha.

## Para começar uma LP nova

A pasta [`template-lp/`](template-lp/) tem os arquivos para copiar: as tags, o
evento de conversão, o `AGENTS.md` e o `robots.txt`. São três valores a trocar,
e o resto é igual em toda LP da Genos.

Copiar o template é o que faz o padrão valer **em qualquer ferramenta** — Claude,
Antigravity, ou editor nenhum. O `AGENTS.md` vai junto no repositório novo, então
não depende de ninguém lembrar de nada.

E para não depender nem de lembrar de copiar o template, existe a
[skill `medicao-genos`](skill-medicao-genos.md): ela fica na conta da Claude e
dispara sozinha em qualquer repositório. As duas se completam — a skill cobre o
dia a dia na Claude, o template cobre qualquer ferramenta.

## Como usar

O manual tem quatro partes. **A Parte 1 é o roteiro: siga na ordem**, porque cada
passo destrava o seguinte. A Parte 2 explica o porquê de cada decisão, para
quando alguém precisar decidir diferente — e aí decidir sabendo o que está
trocando. A Parte 3 é o inventário do que existe hoje, e precisa ser mantida
viva: página nova entra ali antes do primeiro anúncio. **A Parte 4 é a lista
final**, a que alguém roda antes de apontar o primeiro anúncio para uma LP.

As quatro frentes falham do mesmo jeito: **nenhuma quebra a tela.** Medição
errada parece pouco tráfego, SEO errado some da busca sem aviso, performance
ruim aparece no custo e conteúdo desalinhado aparece na conversão. É por isso
que existe uma lista — sem ela, o único jeito de descobrir é pelo prejuízo.

Cada repositório de LP tem um `AGENTS.md` curto que aponta para cá, com as
regras que não se decidem de novo caso a caso. É esse arquivo que a Claude lê
sozinha ao abrir a base — o manual aqui é a consulta, o `AGENTS.md` é o que faz
a regra ser seguida sem ninguém pedir.

# A skill `medicao-genos`

O `AGENTS.md` só vale dentro de um repositório que já existe. LP nova nasce em
repositório novo, sem `AGENTS.md` nenhum — e aí o padrão só vale se alguém
lembrar de copiar o template.

Uma skill fica na **conta**, não no repositório. Dispara em qualquer conversa,
em qualquer repositório, sem ninguém pedir. É o que fecha o buraco.

> **Limite honesto:** skill só funciona na Claude. Para o padrão valer no
> Antigravity ou em qualquer outra ferramenta, o que serve é o
> [`template-lp/`](template-lp/), porque o `AGENTS.md` viaja dentro do
> repositório.

## Como criar

No claude.ai, em **Configurações → Skills → Criar uma habilidade**. A tela tem
**três campos separados**, e é importante saber disso: ela recusa um texto que
comece com o bloco `---` de frontmatter, porque o nome e a descrição que você
digita nos campos de cima já viram o frontmatter. Cole cada bloco no campo
certo.

### Campo "Nome da skill"

```
[Genos] LPs
```

### Campo "Descrição"

É ele que faz a skill disparar sozinha. Descrição genérica significa skill que
nunca ativa na hora certa — por isso ela nomeia as situações, e diz
explicitamente que vale mesmo quando ninguém fala em medição.

```
Padrão de medição e qualidade das landing pages do Genos Group. Use SEMPRE que for criar, revisar ou colocar no ar uma landing page, site ou formulário de captura, da Genos ou de cliente. Use também ao mexer em GA4, Pixel da Meta, GTM, Search Console, UTM, evento de conversão ou qualquer tag de rastreamento. Dispara mesmo que a pessoa não cite medição: toda LP nova precisa disto antes de receber o primeiro anúncio.
```

### Campo de instruções (a caixa grande)

Apague o texto de exemplo e cole o conteúdo abaixo. **Sem `---` no começo.**

---

```
# Medição e qualidade de LP · Genos

O padrão completo, com o porquê de cada decisão, está em
https://github.com/genosgroup/padroes/blob/main/checklist-lp.md
Leia antes de decidir diferente de qualquer coisa abaixo.
Os arquivos para copiar numa LP nova estão em template-lp/ do mesmo repositório.

## O que nunca se decide caso a caso

- GA4 G-X2G6KW4TNY e Pixel 624880005754303, os mesmos em toda LP da Genos.
  Propriedade por LP parte o funil em pedaços que não somam; Pixel por LP
  fragmenta o aprendizado e deixa cada público pequeno demais para otimizar.
- content_group com o nome da LP no gtag('config'). É o que separa as LPs nos
  relatórios sem depender de filtro por URL.
- Tags no template compartilhado (layout raiz), nunca página a página.
- <html lang="pt-BR">. Todo boilerplate nasce com "en" e ninguém repara,
  porque a página continua funcionando.
- Conversão em código, nunca só dentro de um GTM: generate_lead no GA4 e Lead
  na Meta, disparados DEPOIS da resposta de sucesso da API e ANTES de qualquer
  redirect. Nome inventado não conta como conversão otimizável.
- Clique em WhatsApp é Contact, não Lead. Lead é só para quem entregou contato.
- Todo disparo em try/catch. Bloqueador de anúncio é comum no público de
  tráfego pago, e medição bloqueada não pode derrubar o envio do lead.
- robots.txt em ASCII puro, sem acento: ele é servido como text/plain sem
  charset e acento aparece embaralhado, sem jeito de declarar codificação.

## A regra que mais gera erro

Cobertura é por DEPLOY, não por domínio. O GA4 não varre site: ele só recebe o
que cada página manda. LP nova em repositório novo precisa das tags no código
dela, mesmo que o domínio já esteja coberto. A pergunta certa não é "o domínio
está medido?", é "quantos deploys servem este domínio, e cada um tem a tag?".

Corolário: robots.txt e sitemap.xml do apex ficam só no repositório da raiz. A
rota casa por prefixo, então a requisição de /robots.txt nunca chega ao Worker
de uma LP servida sob um caminho — o arquivo ficaria no ar inalcançável.

## Antes de apontar o primeiro anúncio

Rode a Parte 4 do checklist. Os itens que mais pegam erro:

1. Envie um lead de TESTE REAL e confirme generate_lead no GA4 > Tempo real.
   É o único teste que pega conversão quebrada.
2. Confirme SEPARADAMENTE que o lead chegou no destino (planilha, CRM). O
   evento sair e o lead chegar são duas falhas diferentes.
3. Complete o funil com as tags bloqueadas. Tem que enviar igual.
4. Pixel da Meta se confere no Meta Pixel Helper. O Tag Assistant é ferramenta
   do Google e NUNCA mostra Pixel — ausência ali não é evidência de ausência.

## Se encontrar tag que não é da Genos

GT-, GTM- ou G- diferente dos IDs acima costuma ser herança de migração de
WordPress, apontando para propriedade de terceiro. Antes de remover, procure a
conversão dentro dela: varra o repositório por fbq('track', gtag('event' e
dataLayer.push. Se não houver nenhum, a conversão morava no contêiner, e
removê-lo apaga o evento de Lead em silêncio. Nesse caso a remoção não é
subtração: é mudar a conversão de casa.

## Ao terminar

Atualize o inventário na Parte 3 do checklist com a página nova.
```

# Template de LP

O que uma landing page da Genos precisa ter antes da primeira linha de código
própria. Copie estes arquivos para o repositório novo e troque o que o comentário
mandar — são três valores.

| Arquivo | Para onde vai | O que trocar |
| --- | --- | --- |
| `AGENTS.md` | raiz do repositório | nada |
| `CLAUDE.md` | raiz do repositório | nada |
| `Tracking.tsx` | `src/components/` | o `CONTENT_GROUP` |
| `conversao.ts` | `src/lib/` | nada |
| `robots.txt` | `public/` | o domínio, **só se for subdomínio próprio** |

E duas edições no código que já existe:

1. **`<html lang="pt-BR">`** no layout raiz. Todo boilerplate nasce com `en`, e
   ninguém repara porque a página continua funcionando.
2. **Montar o `Tracking`** no layout raiz, dentro do `<body>`:

```jsx
import Tracking, { TrackingNoScript } from "@/components/Tracking";
// ...
<body>
  <Tracking />
  <TrackingNoScript />
  {children}
</body>
```

## Por que no layout raiz, e não na página

O layout raiz é o template compartilhado: toda rota do app herda dele, **inclusive
as que ainda não existem**. Tag colada página a página é tag que a próxima página
não tem — e o erro não dá sinal nenhum, só um relatório incompleto.

## O que este template NÃO cobre

`robots.txt` e `sitemap.xml` do apex ficam **só no repositório da raiz**
(`lp-genos-principal`). A rota casa por prefixo: a requisição de `/robots.txt`
chega ao Worker da raiz e nunca ao de uma LP servida sob um caminho. Arquivo
desses numa LP de sub-caminho fica no ar inalcançável, sem avisar.

Subdomínio próprio é outra história — esse precisa dos seus.

> Antes de apontar o primeiro anúncio, rode a **Parte 4** do
> [checklist](../checklist-lp.md). Ela leva 15 minutos e pega o que este template
> não garante sozinho.

/**
 * Evento de Lead do formulario.
 *
 * Ate a remocao do GTM-WBJTM4T2, a conversao desta LP era disparada de
 * dentro daquele conteiner, que a Genos nao administra. Nenhum evento
 * existia no codigo: o Pixel so mandava PageView e o GA4, nada. Com o
 * conteiner fora, o evento passa a morar aqui.
 *
 * Os nomes nao sao escolha de estilo. "Lead" e o nome padrao da Meta e
 * "generate_lead" o do GA4: so com eles o evento aparece como conversao
 * otimizavel nas duas plataformas. Nome inventado vira evento solto, que
 * nenhuma campanha consegue usar para otimizar.
 *
 * Tudo dentro de try/catch e com checagem de existencia porque bloqueador
 * de anuncio e comum no publico de trafego pago: com o gtag ou o fbq
 * barrado, a funcao vira no-op e o formulario segue normal. Medicao nunca
 * pode derrubar o envio do lead.
 */

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

export function registrarLead(origem: string) {
  try {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "generate_lead", { origem });
    }
  } catch {
    // medicao bloqueada: segue o jogo
  }

  try {
    const fbq = (window as unknown as { fbq?: Fbq }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead", { content_name: origem });
    }
  } catch {
    // medicao bloqueada: segue o jogo
  }
}

/**
 * Google Tag Manager — ID do container e disparo de eventos de conversão.
 */

export const GTM_ID = "GTM-TH3LVG5X";

/**
 * Nomes dos eventos empurrados para o dataLayer.
 *
 * Estes valores são o contrato com o GTM: os gatilhos do container esperam
 * exatamente estas strings. Não renomeie sem ajustar o container também.
 */
export const EVENTO_LIGACAO = "click_ligacao";
export const EVENTO_WHATSAPP = "click_whatsapp";

export type EventoConversao =
  | typeof EVENTO_LIGACAO
  | typeof EVENTO_WHATSAPP;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Empurra um evento de conversão para o dataLayer.
 *
 * O push é síncrono e acontece antes de o navegador seguir o link — como não
 * chamamos `preventDefault()`, a navegação para `tel:` / `wa.me` ocorre
 * normalmente logo em seguida.
 *
 * A reatribuição de `window.dataLayer` é defensiva: se por qualquer motivo o
 * script do GTM ainda não tiver rodado, o evento é enfileirado no array e o
 * GTM o consome assim que carrega — nada se perde.
 */
export function rastrearConversao(evento: EventoConversao) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: evento });
}

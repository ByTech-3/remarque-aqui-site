"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { rastrearConversao, type EventoConversao } from "@/lib/gtm";

type LinkConversaoProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  evento: EventoConversao;
};

/**
 * Âncora de conversão: dispara o evento no dataLayer e segue o link.
 *
 * Este é o **único** componente de cliente do site. Todo link de ligação ou
 * WhatsApp precisa passar por aqui — assim o push nunca depende de alguém
 * lembrar de repetir o handler, e Header, Footer e as seções continuam sendo
 * Server Components.
 *
 * Repare que não há `preventDefault()` nem `setTimeout`: o push é síncrono e
 * termina antes de o navegador processar a navegação, então o usuário vai para
 * o telefone/WhatsApp normalmente. Segurar o clique para "garantir" o envio
 * quebraria a conversão — que é justamente o que estamos medindo.
 */
export default function LinkConversao({
  evento,
  onClick,
  children,
  ...rest
}: LinkConversaoProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    rastrearConversao(evento);
    onClick?.(e);
  }

  return (
    <a {...rest} data-evento={evento} onClick={handleClick}>
      {children}
    </a>
  );
}

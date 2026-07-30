import { MessageCircle } from "lucide-react";
import LinkConversao from "./LinkConversao";
import { WHATSAPP_HREF } from "@/lib/contato";
import { EVENTO_WHATSAPP } from "@/lib/gtm";

/**
 * Botão flutuante de WhatsApp, sempre visível durante a rolagem.
 * Dispara `click_whatsapp` como qualquer outro CTA do site.
 */
export default function WhatsappFloat() {
  return (
    <LinkConversao
      href={WHATSAPP_HREF}
      evento={EVENTO_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className="fixed bottom-5 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/50 sm:bottom-7 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle size={28} strokeWidth={2.3} aria-hidden="true" />
    </LinkConversao>
  );
}

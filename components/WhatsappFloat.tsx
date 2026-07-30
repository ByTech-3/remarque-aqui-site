import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF, EVENTO_WHATSAPP } from "@/lib/contato";

/**
 * Botão flutuante de WhatsApp, sempre visível durante a rolagem.
 *
 * Fica acima do canto inferior direito e não depende de JavaScript. O
 * `pb-safe` via padding manual evita que ele encoste na barra de gestos do
 * iOS em telas sem botão físico.
 */
export default function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      data-evento={EVENTO_WHATSAPP}
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className="fixed bottom-5 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/50 sm:bottom-7 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle size={28} strokeWidth={2.3} aria-hidden="true" />
    </a>
  );
}

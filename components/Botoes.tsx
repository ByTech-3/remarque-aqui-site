import { Phone, MessageCircle } from "lucide-react";
import {
  TELEFONE_HREF,
  TELEFONE_EXIBICAO,
  WHATSAPP_HREF,
  EVENTO_LIGACAO,
  EVENTO_WHATSAPP,
} from "@/lib/contato";

type Tamanho = "sm" | "md" | "lg";

const dimensoes: Record<Tamanho, string> = {
  sm: "px-4 py-2.5 text-sm gap-1.5",
  md: "px-6 py-3.5 text-base gap-2",
  lg: "px-7 py-4 text-base sm:text-lg gap-2.5",
};

const iconeTamanho: Record<Tamanho, number> = {
  sm: 16,
  md: 20,
  lg: 22,
};

const base =
  "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 active:scale-[0.98]";

type BotaoProps = {
  tamanho?: Tamanho;
  /** Ocupa toda a largura disponível (útil no mobile). */
  bloco?: boolean;
  /** Texto alternativo ao padrão do botão. */
  rotulo?: string;
  className?: string;
};

/**
 * CTA primário de ligação. Usa o verde da marca, conforme o CLAUDE.md.
 * O `data-evento` é lido pelo GTM para disparar a conversão de chamada.
 */
export function BotaoLigar({
  tamanho = "md",
  bloco = false,
  rotulo,
  className = "",
}: BotaoProps) {
  return (
    <a
      href={TELEFONE_HREF}
      data-evento={EVENTO_LIGACAO}
      aria-label={`Ligar agora para ${TELEFONE_EXIBICAO}`}
      className={`${base} ${dimensoes[tamanho]} ${
        bloco ? "w-full" : ""
      } bg-green text-white shadow-cta hover:bg-green-deep hover:shadow-lg focus-visible:ring-green-lime/60 ${className}`}
    >
      <Phone size={iconeTamanho[tamanho]} strokeWidth={2.5} aria-hidden="true" />
      {rotulo ?? "Ligar Agora"}
    </a>
  );
}

/**
 * CTA secundário de WhatsApp. Usa o verde oficial do WhatsApp para
 * reconhecimento imediato do canal.
 */
export function BotaoWhatsapp({
  tamanho = "md",
  bloco = false,
  rotulo,
  className = "",
}: BotaoProps) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      data-evento={EVENTO_WHATSAPP}
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className={`${base} ${dimensoes[tamanho]} ${
        bloco ? "w-full" : ""
      } bg-whatsapp text-white shadow-cta hover:brightness-95 hover:shadow-lg focus-visible:ring-whatsapp/60 ${className}`}
    >
      <MessageCircle
        size={iconeTamanho[tamanho]}
        strokeWidth={2.5}
        aria-hidden="true"
      />
      {rotulo ?? "WhatsApp"}
    </a>
  );
}

/**
 * Variante de contorno do botão de WhatsApp, para usar sobre fundo escuro
 * quando o verde sólido competiria com o CTA primário de ligação.
 */
export function BotaoWhatsappContorno({
  tamanho = "md",
  bloco = false,
  rotulo,
  className = "",
}: BotaoProps) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      data-evento={EVENTO_WHATSAPP}
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className={`${base} ${dimensoes[tamanho]} ${
        bloco ? "w-full" : ""
      } border-2 border-white/70 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/20 focus-visible:ring-white/50 ${className}`}
    >
      <MessageCircle
        size={iconeTamanho[tamanho]}
        strokeWidth={2.5}
        aria-hidden="true"
      />
      {rotulo ?? "WhatsApp"}
    </a>
  );
}

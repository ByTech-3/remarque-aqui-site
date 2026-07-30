import { Phone } from "lucide-react";
import Logo from "./Logo";
import { BotaoLigar } from "./Botoes";
import {
  TELEFONE_HREF,
  TELEFONE_EXIBICAO,
  EVENTO_LIGACAO,
} from "@/lib/contato";

/**
 * Header fixo. Sem JavaScript: é uma landing de uma dobra só, não há menu de
 * navegação — o único elemento interativo é o CTA de ligação, que fica sempre
 * visível durante a rolagem.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-light/60 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        {/* No mobile o subtítulo é omitido: o espaço é curto e o selo
            "Credenciada DETRAN-PR" já aparece em destaque no hero. */}
        <Logo tamanho={38} priority subtitulo={false} className="sm:hidden" />
        <Logo tamanho={52} priority className="hidden sm:flex" />

        {/* Mobile: botão compacto, só com o ícone e o número. */}
        <a
          href={TELEFONE_HREF}
          data-evento={EVENTO_LIGACAO}
          aria-label={`Ligar agora para ${TELEFONE_EXIBICAO}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-green px-3.5 py-2.5 text-sm font-bold text-white shadow-cta transition-all duration-200 hover:bg-green-deep active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-lime/60 sm:hidden"
        >
          <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
          Ligar
        </a>

        {/* Desktop: CTA completo com o número visível. */}
        <div className="hidden items-center gap-4 sm:flex">
          <span className="text-right leading-tight">
            <span className="block text-[0.65rem] font-medium uppercase tracking-wider text-gray">
              Atendimento imediato
            </span>
            <a
              href={TELEFONE_HREF}
              data-evento={EVENTO_LIGACAO}
              className="block text-lg font-extrabold text-navy transition-colors hover:text-blue"
            >
              {TELEFONE_EXIBICAO}
            </a>
          </span>
          <BotaoLigar tamanho="md" />
        </div>
      </div>
    </header>
  );
}

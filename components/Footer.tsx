import { Phone, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import {
  MARCA,
  TELEFONE_HREF,
  TELEFONE_EXIBICAO,
  WHATSAPP_HREF,
  LOCALIZACAO_COMPLETA,
  EVENTO_LIGACAO,
  EVENTO_WHATSAPP,
} from "@/lib/contato";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep pb-24 pt-12 text-white sm:pb-12 sm:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {/* Marca */}
          <div>
            <p className="text-xl font-extrabold uppercase tracking-tight">
              Remarque <span className="text-green-lime">Aqui</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-blue-glow">
              Base credenciada ao DETRAN-PR para remarcação de chassi e motor em
              Curitiba.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-lime/40 bg-green-lime/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-green-lime">
              <ShieldCheck size={14} strokeWidth={2.5} aria-hidden="true" />
              Credenciada DETRAN-PR
            </p>
          </div>

          {/* Contato */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white">
              Contato
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={TELEFONE_HREF}
                  data-evento={EVENTO_LIGACAO}
                  className="inline-flex items-center gap-2.5 text-blue-glow transition-colors hover:text-white"
                >
                  <Phone size={17} strokeWidth={2.3} aria-hidden="true" />
                  {TELEFONE_EXIBICAO}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-evento={EVENTO_WHATSAPP}
                  className="inline-flex items-center gap-2.5 text-blue-glow transition-colors hover:text-white"
                >
                  <MessageCircle
                    size={17}
                    strokeWidth={2.3}
                    aria-hidden="true"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white">
              Localização
            </h2>
            <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-blue-glow">
              <MapPin
                size={17}
                strokeWidth={2.3}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              {LOCALIZACAO_COMPLETA}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="text-xs text-blue-glow/80">
            © {ano} {MARCA}. Todos os direitos reservados.
          </p>
          {/*
            TODO (Luiz): o CLAUDE.md marca a associação pública com a Maxilaudo
            como opcional e pendente de confirmação. Se quiser exibi-la,
            descomente a linha abaixo:

            <p className="mt-1.5 text-xs text-blue-glow/60">
              Uma unidade Maxilaudo.
            </p>
          */}
        </div>
      </div>
    </footer>
  );
}

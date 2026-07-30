import { ShieldCheck, MapPin, Clock } from "lucide-react";
import { BotaoLigar, BotaoWhatsappContorno } from "./Botoes";
import { TELEFONE_EXIBICAO } from "@/lib/contato";

/**
 * Dobra principal. Toda a proposta de valor precisa caber aqui: o que é feito,
 * que é credenciado ao DETRAN, onde fica, e como entrar em contato.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-marca">
      {/* Brilho sutil que remete ao azul metálico da logo. */}
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-glow/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-green-lime/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
        {/* Selo de credenciamento */}
        <div className="inline-flex items-center gap-2 rounded-full border border-green-lime/40 bg-green-lime/15 px-4 py-1.5">
          <ShieldCheck
            size={16}
            strokeWidth={2.5}
            className="text-green-lime"
            aria-hidden="true"
          />
          <span className="text-xs font-bold uppercase tracking-wide text-green-lime sm:text-sm">
            Base Credenciada DETRAN-PR
          </span>
        </div>

        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Remarcação de Chassi e Motor em{" "}
          <span className="text-green-lime">Curitiba</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-glow sm:text-xl">
          Base credenciada ao DETRAN-PR,{" "}
          <strong className="font-semibold text-white">
            em frente ao DETRAN do Tarumã
          </strong>
          . Procedimento 100% legal, com agilidade e atendimento no mesmo dia.
        </p>

        {/* CTAs principais */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <BotaoLigar tamanho="lg" bloco className="sm:w-auto" />
          <BotaoWhatsappContorno tamanho="lg" bloco className="sm:w-auto" />
        </div>

        <p className="mt-4 text-sm text-blue-glow">
          Ou ligue direto:{" "}
          <span className="font-bold text-white">{TELEFONE_EXIBICAO}</span>
        </p>

        {/* Reforços rápidos de confiança */}
        <ul className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-6">
          <li className="flex items-start gap-3">
            <MapPin
              size={22}
              strokeWidth={2.2}
              className="mt-0.5 shrink-0 text-green-lime"
              aria-hidden="true"
            />
            <span className="text-sm leading-snug text-white">
              <strong className="block font-bold">Localização estratégica</strong>
              <span className="text-blue-glow">
                Em frente ao DETRAN do Tarumã
              </span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck
              size={22}
              strokeWidth={2.2}
              className="mt-0.5 shrink-0 text-green-lime"
              aria-hidden="true"
            />
            <span className="text-sm leading-snug text-white">
              <strong className="block font-bold">Procedimento legal</strong>
              <span className="text-blue-glow">Credenciada e autorizada</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Clock
              size={22}
              strokeWidth={2.2}
              className="mt-0.5 shrink-0 text-green-lime"
              aria-hidden="true"
            />
            <span className="text-sm leading-snug text-white">
              <strong className="block font-bold">Serviço rápido</strong>
              <span className="text-blue-glow">Sem burocracia desnecessária</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

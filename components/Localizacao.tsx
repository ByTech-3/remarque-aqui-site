import { MapPin, Navigation, Clock, ExternalLink } from "lucide-react";
import { BotaoLigar, BotaoWhatsapp } from "./Botoes";
import { LOCALIZACAO_COMPLETA } from "@/lib/contato";

/**
 * TODO (Luiz): substituir pela busca exata quando o endereço completo
 * (rua, número e CEP) estiver definido. Hoje aponta para o DETRAN do Tarumã,
 * que é a referência usada nos anúncios.
 */
const BUSCA_MAPS =
  "https://www.google.com/maps/search/?api=1&query=DETRAN+Taruma+Curitiba+PR";

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="scroll-offset bg-off-white py-14 sm:py-20"
      aria-labelledby="localizacao-titulo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Conteúdo */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
              Onde estamos
            </span>
            <h2
              id="localizacao-titulo"
              className="mt-2 text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              Em frente ao{" "}
              <span className="text-blue">DETRAN do Tarumã</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray sm:text-lg">
              Nossa base fica exatamente em frente ao DETRAN do Tarumã, em
              Curitiba. Você faz a remarcação e já segue para a vistoria no
              mesmo trajeto — sem deslocamento extra e sem perder o dia.
            </p>

            <ul className="mt-7 space-y-4">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <MapPin size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug sm:text-base">
                  <strong className="block font-bold text-ink">Endereço</strong>
                  <span className="text-gray">{LOCALIZACAO_COMPLETA}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Navigation size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug sm:text-base">
                  <strong className="block font-bold text-ink">
                    Fácil de chegar
                  </strong>
                  <span className="text-gray">
                    Mesma região do DETRAN, com acesso direto
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Clock size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug sm:text-base">
                  <strong className="block font-bold text-ink">
                    Atendimento
                  </strong>
                  <span className="text-gray">
                    Ligue e confirme o melhor horário para o seu caso
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BotaoLigar tamanho="md" bloco className="sm:w-auto" />
              <BotaoWhatsapp tamanho="md" bloco className="sm:w-auto" />
            </div>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-2xl border border-gray-light/70 bg-white shadow-card">
            {/*
              Placeholder do mapa. Quando o endereço definitivo estiver
              confirmado, basta trocar este bloco pelo iframe do Google Maps:

              <iframe
                src="https://www.google.com/maps/embed?pb=SEU_CODIGO_AQUI"
                title="Localização da Remarque Aqui"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen
              />

              Mantivemos um placeholder estático por enquanto porque um iframe
              do Maps carrega bastante JavaScript de terceiros e prejudica o
              LCP — o que encarece o CPC da campanha.
            */}
            <a
              href={BUSCA_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-gradient-marca p-8 text-center transition-opacity hover:opacity-95 sm:aspect-[16/11]"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-[0.13]"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />
              <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-lime text-navy-deep shadow-lg transition-transform group-hover:scale-105">
                <MapPin size={32} strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="relative text-lg font-extrabold uppercase leading-tight tracking-tight text-white sm:text-xl">
                Em frente ao DETRAN do Tarumã
              </span>
              <span className="relative text-sm text-blue-glow">
                Curitiba — Paraná
              </span>
              <span className="relative mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors group-hover:bg-white/25">
                Ver no Google Maps
                <ExternalLink size={15} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

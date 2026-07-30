import { PhoneCall } from "lucide-react";
import { BotaoLigar, BotaoWhatsappContorno } from "./Botoes";
import { TELEFONE_EXIBICAO } from "@/lib/contato";

/**
 * Última faixa de conversão antes do rodapé, para quem leu a página inteira
 * e ainda não clicou em nenhum CTA.
 */
export default function CtaFinal() {
  return (
    <section
      className="relative overflow-hidden bg-navy-deep py-14 sm:py-20"
      aria-labelledby="cta-final-titulo"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-blue/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-lime/40 bg-green-lime/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-green-lime sm:text-sm">
          <PhoneCall size={15} strokeWidth={2.5} aria-hidden="true" />
          Atendimento imediato
        </span>

        <h2
          id="cta-final-titulo"
          className="mt-5 text-2xl font-extrabold uppercase leading-[1.15] tracking-tight text-white sm:text-4xl"
        >
          Regularize seu veículo{" "}
          <span className="text-green-lime">ainda hoje</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-glow sm:text-lg">
          Fale agora com a nossa equipe e descubra em minutos o que o seu caso
          precisa. Orçamento sem compromisso.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <BotaoLigar tamanho="lg" bloco className="sm:w-auto" />
          <BotaoWhatsappContorno tamanho="lg" bloco className="sm:w-auto" />
        </div>

        <p className="mt-5 text-sm text-blue-glow">
          <span className="font-bold text-white">{TELEFONE_EXIBICAO}</span> ·{" "}
          Em frente ao DETRAN do Tarumã, Curitiba
        </p>
      </div>
    </section>
  );
}

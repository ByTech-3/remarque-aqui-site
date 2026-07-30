import { Car, Cog, FileCheck, ArrowRight } from "lucide-react";
import { BotaoLigar, BotaoWhatsapp } from "./Botoes";

const servicos = [
  {
    icone: Car,
    titulo: "Remarcação de Chassi",
    descricao:
      "Regravação do número do chassi em veículos com numeração danificada, corroída, adulterada ou ilegível. Procedimento autorizado e registrado junto ao DETRAN-PR.",
  },
  {
    icone: Cog,
    titulo: "Remarcação de Motor",
    descricao:
      "Regravação da numeração do motor em casos de troca, desgaste natural ou perda de legibilidade — deixando o veículo apto à vistoria e à transferência.",
  },
  {
    icone: FileCheck,
    titulo: "Regularização Veicular",
    descricao:
      "Orientação e execução do processo completo para regularizar a situação do seu veículo e liberar a documentação sem dor de cabeça.",
  },
];

/**
 * Cards de serviço. Cada card fecha em um CTA implícito — a seção inteira
 * termina com os botões de contato para não exigir rolagem extra.
 */
export default function Servicos() {
  return (
    <section
      id="servicos"
      className="scroll-offset bg-off-white py-14 sm:py-20"
      aria-labelledby="servicos-titulo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Nossos serviços
          </span>
          <h2
            id="servicos-titulo"
            className="mt-2 text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            O que resolvemos para você
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray sm:text-lg">
            Serviços executados em base credenciada, com validade legal e
            registro junto ao DETRAN-PR.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {servicos.map(({ icone: Icone, titulo, descricao }) => (
            <li
              key={titulo}
              className="group flex flex-col rounded-2xl border border-gray-light/70 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-card-hover sm:p-7"
            >
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-marca text-white shadow-md">
                <Icone size={28} strokeWidth={2.1} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-xl">
                {titulo}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray sm:text-base">
                {descricao}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-green transition-colors group-hover:text-green-deep">
                Consulte valores
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center shadow-card sm:flex-row sm:justify-between sm:p-7 sm:text-left">
          <p className="text-base font-semibold text-ink sm:text-lg">
            Não sabe qual serviço o seu caso exige?
            <span className="mt-1 block text-sm font-normal text-gray">
              Fale com a gente e receba a orientação certa em minutos.
            </span>
          </p>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <BotaoLigar tamanho="md" bloco className="sm:w-auto" />
            <BotaoWhatsapp tamanho="md" bloco className="sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

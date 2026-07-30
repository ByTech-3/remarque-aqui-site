import { BadgeCheck, FileCheck2, Scale, Zap } from "lucide-react";

const itens = [
  {
    icone: BadgeCheck,
    titulo: "Credenciada DETRAN-PR",
    texto: "Base oficialmente autorizada para remarcação",
  },
  {
    icone: FileCheck2,
    // Número herdado da experiência da Maxilaudo (ver CLAUDE.md).
    titulo: "+60.000 laudos",
    texto: "Experiência consolidada em vistoria veicular",
  },
  {
    icone: Scale,
    titulo: "100% legal",
    texto: "Procedimento dentro das normas do DETRAN",
  },
  {
    icone: Zap,
    titulo: "Atendimento rápido",
    texto: "Sem filas e sem burocracia desnecessária",
  },
];

/**
 * Faixa de prova social logo abaixo da dobra: reduz a objeção de confiança
 * antes de o visitante chegar aos serviços.
 */
export default function Credibilidade() {
  return (
    <section
      className="border-b border-gray-light/50 bg-white py-10 sm:py-14"
      aria-label="Diferenciais de credibilidade"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-8">
          {itens.map(({ icone: Icone, titulo, texto }) => (
            <li key={titulo} className="flex flex-col items-center text-center">
              <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy sm:h-14 sm:w-14">
                <Icone size={26} strokeWidth={2.1} aria-hidden="true" />
              </span>
              <h3 className="text-sm font-extrabold uppercase tracking-tight text-ink sm:text-base">
                {titulo}
              </h3>
              <p className="mt-1 text-xs leading-snug text-gray sm:text-sm">
                {texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

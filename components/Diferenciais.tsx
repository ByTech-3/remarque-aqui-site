import { MapPin, ShieldCheck, Timer, Award } from "lucide-react";

const diferenciais = [
  {
    icone: MapPin,
    titulo: "Em frente ao DETRAN do Tarumã",
    texto:
      "Você resolve a remarcação e já segue direto para o DETRAN, sem atravessar a cidade e sem perder o dia.",
  },
  {
    icone: ShieldCheck,
    titulo: "Base credenciada ao DETRAN-PR",
    texto:
      "Procedimento oficial, com respaldo legal e registro correto. Seu veículo fica regular de verdade.",
  },
  {
    icone: Timer,
    titulo: "Agilidade no atendimento",
    texto:
      "Processo objetivo, sem filas e sem etapas desnecessárias. A maioria dos casos é resolvida rapidamente.",
  },
  {
    icone: Award,
    titulo: "Experiência comprovada",
    texto:
      "Mais de 60.000 laudos de vistoria veicular realizados — a mesma equipe e o mesmo rigor técnico.",
  },
];

/**
 * Bloco de diferenciais sobre fundo escuro: cria contraste visual entre as
 * seções claras e reforça os quatro argumentos centrais de venda.
 */
export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="scroll-offset relative overflow-hidden bg-gradient-marca py-14 sm:py-20"
      aria-labelledby="diferenciais-titulo"
    >
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-glow/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-lime">
            Por que a Remarque Aqui
          </span>
          <h2
            id="diferenciais-titulo"
            className="mt-2 text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl"
          >
            A escolha mais prática de Curitiba
          </h2>
          <p className="mt-3 text-base leading-relaxed text-blue-glow sm:text-lg">
            Credenciamento, localização e agilidade no mesmo lugar.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {diferenciais.map(({ icone: Icone, titulo, texto }) => (
            <li
              key={titulo}
              className="flex gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm sm:p-6"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-lime/20 text-green-lime">
                <Icone size={22} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-extrabold leading-tight text-white sm:text-lg">
                  {titulo}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-blue-glow sm:text-base">
                  {texto}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { BotaoLigar, BotaoWhatsapp } from "./Botoes";

const passos = [
  {
    numero: "01",
    titulo: "Entre em contato",
    texto:
      "Ligue ou chame no WhatsApp. Explicamos o que é necessário e tiramos suas dúvidas na hora.",
  },
  {
    numero: "02",
    titulo: "Avaliação do veículo",
    texto:
      "Você traz o veículo até a base e nossa equipe avalia o caso e a documentação necessária.",
  },
  {
    numero: "03",
    titulo: "Procedimento autorizado",
    texto:
      "Executamos a remarcação seguindo integralmente as normas e o registro exigidos pelo DETRAN-PR.",
  },
  {
    numero: "04",
    titulo: "Veículo regularizado",
    texto:
      "Com o procedimento concluído, seu veículo segue para a vistoria e a documentação é liberada.",
  },
];

/**
 * Passo a passo. Reduz o atrito de quem nunca passou pelo processo e não sabe
 * o que esperar — principal objeção depois do preço.
 */
export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="scroll-offset bg-white py-14 sm:py-20"
      aria-labelledby="como-funciona-titulo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Como funciona
          </span>
          <h2
            id="como-funciona-titulo"
            className="mt-2 text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            Simples do começo ao fim
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray sm:text-lg">
            Quatro etapas, sem surpresa e sem burocracia inventada.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {passos.map(({ numero, titulo, texto }) => (
            <li
              key={numero}
              className="relative rounded-2xl border border-gray-light/70 bg-off-white p-6 sm:p-7"
            >
              <span
                className="block text-3xl font-extrabold leading-none text-blue/25 sm:text-4xl"
                aria-hidden="true"
              >
                {numero}
              </span>
              <h3 className="mt-3 text-base font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-lg">
                {titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">{texto}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <BotaoLigar tamanho="lg" bloco rotulo="Começar agora" className="sm:w-auto" />
          <BotaoWhatsapp tamanho="lg" bloco className="sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

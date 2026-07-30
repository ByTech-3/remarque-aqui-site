import Image from "next/image";

type LogoProps = {
  /** `escuro` = wordmark em azul (fundo claro). `claro` = wordmark branco (fundo escuro). */
  variante?: "escuro" | "claro";
  /** Diâmetro do pin em pixels. O wordmark acompanha proporcionalmente. */
  tamanho?: number;
  /** Prioriza o carregamento da imagem (usar no header, que fica acima da dobra). */
  priority?: boolean;
  /** Exibe a linha "Credenciada DETRAN-PR" abaixo do nome. */
  subtitulo?: boolean;
  className?: string;
};

/**
 * Marca da Remarque Aqui.
 *
 * O arquivo `logo.png` é quadrado (1080x1080) e contém o pin na parte de cima e
 * o wordmark embaixo. Em tamanhos pequenos o wordmark embutido fica ilegível,
 * então recortamos apenas o pin da imagem e renderizamos o nome em texto — que
 * permanece nítido em qualquer tamanho e se adapta ao fundo.
 */
export default function Logo({
  variante = "escuro",
  tamanho = 44,
  priority = false,
  subtitulo = true,
  className = "",
}: LogoProps) {
  const corPrincipal = variante === "claro" ? "text-white" : "text-navy";
  const corSecundaria =
    variante === "claro" ? "text-green-lime" : "text-green";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* Janela de recorte: mostra somente o pin da logo. */}
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: tamanho, height: tamanho }}
        aria-hidden="true"
      >
        <Image
          src="/logo.png"
          alt=""
          width={1080}
          height={1080}
          priority={priority}
          className="max-w-none -translate-x-[26%] -translate-y-[14%]"
          style={{ width: tamanho * 2.08, height: tamanho * 2.08 }}
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap text-[0.95rem] font-extrabold uppercase tracking-tight sm:text-lg ${corPrincipal}`}
        >
          Remarque <span className={corSecundaria}>Aqui</span>
        </span>
        {subtitulo && (
          <span
            className={`mt-0.5 whitespace-nowrap text-[0.55rem] font-medium uppercase tracking-[0.14em] sm:text-[0.6rem] ${
              variante === "claro" ? "text-blue-glow" : "text-gray"
            }`}
          >
            Credenciada DETRAN-PR
          </span>
        )}
      </span>
    </span>
  );
}

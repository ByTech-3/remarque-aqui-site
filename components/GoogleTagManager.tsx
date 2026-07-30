import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

/**
 * Scripts do Google Tag Manager.
 *
 * Carregado via `next/script` (nunca uma tag <script> crua), para que o Next
 * controle a ordem de carregamento e o GTM não bloqueie a renderização.
 */
export function GoogleTagManager() {
  return (
    <>
      {/*
        Inicializa o dataLayer antes de tudo. Garante que qualquer push
        disparado cedo — inclusive antes de o gtm.js baixar — fique enfileirado
        em vez de se perder.

        A regra do ESLint abaixo é herdada do Pages Router, onde
        `beforeInteractive` só valia em `pages/_document.js`. No App Router esta
        é a forma documentada de usar a estratégia, e ela exige justamente estar
        no root layout — que é onde este componente é montado.
      */}
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script id="gtm-datalayer" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];`}
      </Script>

      {/* Snippet oficial do GTM. `afterInteractive` = carrega logo após a
          página ficar interativa, sem competir com o LCP. */}
      <Script id="gtm-base" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </>
  );
}

/**
 * Fallback do GTM para quando o JavaScript está desativado.
 * Deve ficar imediatamente após a abertura do <body>.
 */
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Remarque Aqui | Remarcação de Chassi e Motor em Curitiba — Credenciada DETRAN-PR",
  description:
    "Remarcação de chassi e remarcação de motor em Curitiba. Base credenciada ao DETRAN-PR, em frente ao DETRAN do Tarumã. Procedimento 100% legal, rápido e com atendimento imediato. Ligue agora.",
  keywords: [
    "remarcação de chassi",
    "remarcação de chassi Curitiba",
    "remarcação de motor",
    "remarcação de motor Curitiba",
    "regularização veicular Curitiba",
    "credenciada DETRAN-PR",
    "DETRAN Tarumã",
    "base de remarcação Curitiba",
  ],
  authors: [{ name: "Remarque Aqui" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Remarque Aqui",
    title:
      "Remarque Aqui | Remarcação de Chassi e Motor em Curitiba — Credenciada DETRAN-PR",
    description:
      "Base credenciada ao DETRAN-PR para remarcação de chassi e motor, em frente ao DETRAN do Tarumã, em Curitiba. Procedimento 100% legal e atendimento rápido.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Remarque Aqui — Remarcação de Chassi e Motor credenciada DETRAN-PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Remarque Aqui | Remarcação de Chassi e Motor em Curitiba — Credenciada DETRAN-PR",
    description:
      "Base credenciada ao DETRAN-PR para remarcação de chassi e motor, em frente ao DETRAN do Tarumã, em Curitiba.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#003078",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        {/*
          ==========================================================
          GOOGLE TAG MANAGER — SNIPPET DO <head>
          ----------------------------------------------------------
          Luiz: quando o container ID (GTM-XXXXXXX) estiver pronto,
          descomente o bloco abaixo e substitua GTM-XXXXXXX.

          Em Next.js 14 o caminho recomendado é o componente <GoogleTagManager />
          do pacote @next/third-parties (npm i @next/third-parties), que carrega
          o script de forma otimizada e não prejudica o LCP:

            import { GoogleTagManager } from '@next/third-parties/google'
            ...
            <GoogleTagManager gtmId="GTM-XXXXXXX" />

          Alternativa manual (snippet oficial do GTM):

          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
          </Script>
          ==========================================================
        */}
      </head>
      <body className="font-sans antialiased">
        {/*
          ==========================================================
          GOOGLE TAG MANAGER — SNIPPET DO <body> (noscript)
          ----------------------------------------------------------
          Luiz: descomente junto com o bloco do <head> e use o mesmo
          container ID.

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          ==========================================================
        */}
        {children}
      </body>
    </html>
  );
}

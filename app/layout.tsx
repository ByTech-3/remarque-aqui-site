import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
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
      <body className="font-sans antialiased">
        {/* Fallback do GTM — precisa ser o primeiro elemento do <body>. */}
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}

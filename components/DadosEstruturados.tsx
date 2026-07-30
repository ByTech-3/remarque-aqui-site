import { MARCA, LOCALIZACAO_COMPLETA, WHATSAPP_NUMERO } from "@/lib/contato";

/**
 * JSON-LD de negócio local. Ajuda o Google a entender que a Remarque Aqui é um
 * estabelecimento físico em Curitiba que presta remarcação de chassi e motor —
 * o que reforça a relevância local da landing para os termos da campanha.
 *
 * TODO (Luiz): quando o endereço completo (rua, número e CEP) estiver definido,
 * preencher `streetAddress` e `postalCode` abaixo. Também vale adicionar
 * `geo` com latitude/longitude.
 */
export default function DadosEstruturados({ siteUrl }: { siteUrl: string }) {
  const dados = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: MARCA,
    description:
      "Base credenciada ao DETRAN-PR para remarcação de chassi e motor em Curitiba, localizada em frente ao DETRAN do Tarumã.",
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    telephone: "+5541995762174",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Curitiba",
    },
    knowsAbout: [
      "Remarcação de chassi",
      "Remarcação de motor",
      "Regularização veicular",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remarcação de Chassi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remarcação de Motor",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Regularização Veicular",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMERO}`,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    slogan: LOCALIZACAO_COMPLETA,
  };

  return (
    <script
      type="application/ld+json"
      // O conteúdo é estático e definido em build time — não há entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credibilidade from "@/components/Credibilidade";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import ComoFunciona from "@/components/ComoFunciona";
import Localizacao from "@/components/Localizacao";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import DadosEstruturados from "@/components/DadosEstruturados";
import { SITE_URL } from "@/lib/site";

export default function Home() {
  return (
    <>
      <DadosEstruturados siteUrl={SITE_URL} />
      <Header />
      <main>
        <Hero />
        <Credibilidade />
        <Servicos />
        <Diferenciais />
        <ComoFunciona />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { History } from "@/components/site/History";
import { Squad } from "@/components/site/Squad";
import { Blog } from "@/components/site/Blog";
import { Academy } from "@/components/site/Academy";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <History />
        <Squad />
        <Blog />
        <Academy />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
};

export default Index;

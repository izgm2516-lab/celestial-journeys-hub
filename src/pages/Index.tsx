import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EclipseCountdown from "@/components/EclipseCountdown";
import Experience from "@/components/Experience";
import Accommodation from "@/components/Accommodation";
import Observatory from "@/components/Observatory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Finca Invernalia | Total Solar Eclipse Experience Spain 2026</title>
        <meta
          name="description"
          content="Experience the August 12, 2026 total solar eclipse at Finca Invernalia in Spain. All-inclusive stay at 1300m altitude with professional observatory and dark sky conditions."
        />
        <meta
          name="keywords"
          content="solar eclipse 2026, Spain eclipse, astrophotography, dark sky, Bortle 2, eclipse viewing, astronomy vacation"
        />
        <link rel="canonical" href="https://www.fincainvernalia.com/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <EclipseCountdown />
          <Experience />
          <Accommodation />
          <Observatory />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

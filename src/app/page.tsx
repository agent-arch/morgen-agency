import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMorgen from "@/components/WhyMorgen";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import AIAdvantage from "@/components/AIAdvantage";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Results />
        <WhyMorgen />
        <Pricing />
        <AIAdvantage />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

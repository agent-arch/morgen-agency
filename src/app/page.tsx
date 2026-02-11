import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMorgen from "@/components/WhyMorgen";
import HowItWorks from "@/components/HowItWorks";
import AIAdvantage from "@/components/AIAdvantage";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyMorgen />
        <HowItWorks />
        <AIAdvantage />
        <Pricing />
        <SocialProof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import VecuraSection from "@/components/landing/VecuraSection";
import LigoSpace from "@/components/landing/LigoSpace";
import Vecurate from "@/components/landing/Vecurate";
import News from "@/components/landing/News";
import CustomerVoice from "@/components/landing/CustomerVoice";

import Security from "@/components/landing/Security";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Header />
      <Hero />
      <TrustedBy />
      <VecuraSection />
      <LigoSpace />
      <Vecurate />
      <News />
      <CustomerVoice />
      <Security />
      <CTA />
      <Footer />
    </main>
  );
}

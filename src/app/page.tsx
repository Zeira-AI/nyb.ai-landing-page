import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import VecuraSection from "@/components/landing/VecuraSection";
import {
  LigoSpaceSection,
  VecurateSection,
} from "@/components/landing/OtherSections";
import News from "@/components/landing/News";
import CustomerVoice from "@/components/landing/CustomerVoice";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Header />
      <Hero />
      <TrustedBy />
      <VecuraSection />
      <LigoSpaceSection />
      <VecurateSection />
      <News />
      <CustomerVoice />
      <Footer />
    </main>
  );
}

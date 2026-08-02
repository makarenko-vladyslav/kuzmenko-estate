
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import PricingCalculator from "@/components/PricingCalculator";
import Process from "@/components/Process";
import VideoShowcase from "@/components/VideoShowcase";
import Advantages from "@/components/Advantages";
import PortfolioGallery from "@/components/PortfolioGallery";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <SocialProof />
        <Philosophy />
        
        {/* Interstitial 1: Standalone Statement Band */}
        <div className="bg-primary py-12 border-y border-white/10 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent pointer-events-none" />
          <p className="font-display italic text-2xl sm:text-3xl text-accent px-6 tracking-wide max-w-4xl mx-auto">
            «Проєктування — це мистецтво передбачення витрат до першого залиття фундаменту»
          </p>
        </div>

        <Services />
        <PricingCalculator />

        {/* Interstitial 2: Labeled Hairline */}
        <div className="bg-bg-light py-4 relative">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
            <span className="text-[10px] tracking-[0.3em] font-body text-text-muted uppercase shrink-0">ТЕХНОЛОГІЧНИЙ РЕГЛАМЕНТ K-ESTATE</span>
            <div className="h-[1px] bg-primary/10 w-full" />
            <span className="text-[10px] tracking-[0.3em] font-body text-accent uppercase shrink-0">0% ПЕРЕПЛАТ</span>
          </div>
        </div>

        <Process />
        <VideoShowcase />

        {/* Interstitial 3: Text Marquee/Ticker (Drifts slowly) */}
        <div className="bg-accent/5 py-8 overflow-hidden whitespace-nowrap border-y border-accent/10 relative">
          <div className="flex animate-marquee-slide gap-16 text-xs tracking-[0.35em] font-body text-primary uppercase select-none">
            <span className="shrink-0">ФІКСОВАНИЙ КОШТОРИС ДЛЯ КОЖНОЇ ВІЛЛИ · 100% ГАРАНТІЯ ТЕРМІНІВ · ВЛАСНИЙ ТЕХНІЧНИЙ НАГЛЯД · ОБУХІВКА · ПІЩАНКА · ДНІПРО · 15 РОКІВ ПРАКТИКИ · ФІКСОВАНИЙ КОШТОРИС ДЛЯ КОЖНОЇ ВІЛЛИ · 100% ГАРАНТІЯ ТЕРМІНІВ · ВЛАСНИЙ ТЕХНІЧНИЙ НАГЛЯД</span>
            <span className="shrink-0">ФІКСОВАНИЙ КОШТОРИС ДЛЯ КОЖНОЇ ВІЛЛИ · 100% ГАРАНТІЯ ТЕРМІНІВ · ВЛАСНИЙ ТЕХНІЧНИЙ НАГЛЯД · ОБУХІВКА · ПІЩАНКА · ДНІПРО · 15 РОКІВ ПРАКТИКИ · ФІКСОВАНИЙ КОШТОРИС ДЛЯ КОЖНОЇ ВІЛЛИ · 100% ГАРАНТІЯ ТЕРМІНІВ · ВЛАСНИЙ ТЕХНІЧНИЙ НАГЛЯД</span>
          </div>
        </div>

        <Advantages />
        <PortfolioGallery />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

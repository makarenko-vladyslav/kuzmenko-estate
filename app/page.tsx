import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CalculatorSection from "@/components/CalculatorSection";
import WhyUsSection from "@/components/WhyUsSection";
import TrustSection from "@/components/TrustSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        
        {/* Layered Hero Section */}
        <Hero />
        
        {/* Interstitial Thin Strip 1: Labeled Hairline */}
        <div className="bg-primary py-4 border-t border-b border-white/5 z-20 relative">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[0.65rem] tracking-[0.3em] text-white/40 font-body">
            <span>KUZMENKO ESTATE — ENGINEERING AND CONSTRUCTION</span>
            <span className="hidden md:inline">FOUNDED IN 2009 • DESIGN & BUILD</span>
          </div>
        </div>

        <StatsStrip />

        {/* Interstitial Thin Strip 2: Standalone Statement Band */}
        <div className="bg-bg-light py-8 border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="font-display text-xl sm:text-2xl text-accent/80 font-medium tracking-wide">
              ПОВНИЙ ЦИКЛ КАПІТАЛЬНОГО БУДІВНИЦТВА РЕЗИДЕНЦІЙ ТА FIT-OUT КОМЕРЦІЙНОЇ НЕРУХОМОСТІ
            </p>
          </div>
        </div>

        <AboutSection />
        
        {/* Interstitial Thin Strip 3: Press/Rating Strip - Inverted to Light */}
        <div className="bg-bg-light py-6 border-t border-b border-primary/10 z-20 relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-[0.65rem] tracking-widest text-accent font-semibold font-display">
            <div>РЕЙТИНГ 4.9 • GOOGLE REVIEWS</div>
            <div>ЛІЦЕНЗІЯ СС3 • НАЙВИЩИЙ КЛАС</div>
            <div>15 РОКІВ НАУКОВОГО НАГЛЯДУ</div>
            <div>0% ВІДХИЛЕННЯ ВІД КОШТОРИСУ</div>
          </div>
        </div>

        <ServicesSection />
        <CalculatorSection />
        <WhyUsSection />
        
        {/* Interstitial Thin Strip 4: Textured Statement */}
        <div className="bg-bg-light py-10 border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
            <span className="text-[0.6rem] tracking-[0.3em] text-accent uppercase font-bold block">КУЛЬТУРА ВИРОБНИЦТВА</span>
            <p className="font-display text-2xl text-primary font-bold">
              ВІДКРИТІСТЬ ПРОЦЕСІВ ЯК ОСНОВА ДОВІРИ НАШИХ ПАРТНЕРІВ
            </p>
          </div>
        </div>

        <TrustSection />
        <LiveStreamSection />
        <GallerySection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
"use client";
import { useLocale } from '@/lib/i18n';

interface StatItem {
  value: string;
  label: string;
}

export default function AboutSection() {
  const { t } = useLocale();
  const stats = t('stats') as StatItem[];

  return (
    <section id="philosophy" className="py-24 relative bg-bg-light overflow-hidden border-b border-primary/5">
      
      {/* Background large decorative initial watermark */}
      <div className="absolute -left-12 bottom-12 watermark text-[15rem] leading-none opacity-20 select-none pointer-events-none z-0">
        KUZMENKO
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading Setup */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-bold block">
            {t('about.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-primary">
            {t('about.title')}
          </h2>
          <p className="font-display text-lg sm:text-xl leading-relaxed text-accent font-medium italic">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Body Copy + Pull-Quote + Stats */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Pull Quote Layer */}
            <div className="relative pl-6 border-l-4 border-accent">
              <p className="font-display text-xl sm:text-2xl text-primary font-semibold leading-relaxed">
                "Архітектура — це не пошук компромісів між кошторисом та естетикою. Це точний інженерний розрахунок ризиків."
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-text-muted font-body max-w-2xl">
              {t('about.description')}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-primary/5">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-display text-3xl font-bold text-accent tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] tracking-wider text-text-muted font-body block uppercase leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block bg-primary hover:bg-accent hover:text-white text-white text-xs tracking-widest font-display py-4 px-8 transition-colors duration-300 font-semibold uppercase"
              >
                {t('about.cta')}
              </a>
            </div>

          </div>

          {/* Right Column: 2-Photo Cluster with Overlaps and Rules */}
          <div className="lg:col-span-5 relative pt-12 lg:pt-0">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              
              {/* Main Photo (Base Layer) */}
              <div className="absolute inset-0 w-[85%] h-[85%] overflow-hidden shadow-2xl border border-primary/10 z-10 bg-primary">
                <img
                  src="https://images.pexels.com/photos/14377337/abstract-architect-architectural-architecture-14377337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt={t('about.mediaAlt')}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlapped/Tilted Photo Layer */}
              <div className="absolute right-0 bottom-0 w-[55%] h-[55%] overflow-hidden shadow-2xl border border-primary/15 z-20 rotate-3 bg-primary transition-transform duration-500 hover:rotate-0">
                <img
                  src="https://images.pexels.com/photos/28698339/pexels-photo-28698339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400"
                  alt="Будівельний майданчик резиденції"
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>

              {/* Photo Caption-with-Rule Layer */}
              <div className="absolute -bottom-10 left-0 right-0 z-30 px-4">
                <div className="h-[1px] w-12 bg-accent mb-2" />
                <p className="text-[0.65rem] tracking-wider text-text-muted font-body">
                  <strong className="text-primary font-semibold uppercase">СЕРГІЙ КУЗЬМЕНКО</strong> — засновник компанії Kuzmenko Estate, головний архітектор та керівник авторського нагляду.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

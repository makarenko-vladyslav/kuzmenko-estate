"use client";
import { useLocale } from '@/lib/i18n';

export default function Philosophy() {
  const { t } = useLocale();

  return (
    <section id="philosophy" className="py-12 md:py-20 lg:py-28 bg-bg-light relative overflow-hidden border-b border-primary/5">
      
      {/* Background Watermark (Layer 7: Decorative Type) */}
      <div className="absolute -bottom-10 right-0 pointer-events-none select-none text-[20vw] font-display font-bold text-primary/[0.01]" aria-hidden="true">
        CRAFT
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Kicker, Heading, Body & Visual Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Layer 1: Kicker */}
              <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
                {t('philosophy.kicker')}
              </span>
              {/* Layer 2: Display Heading */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight mb-6 text-balance">
                {t('philosophy.title')}
              </h2>
              {/* Layer 3: Body Copy */}
              <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed mb-8">
                {t('philosophy.description')}
              </p>
            </div>

            {/* Layer 4: Pull-Quote */}
            <div className="border-l-2 border-accent pl-6 py-2 bg-accent/[0.02] mb-8">
              <span className="block font-display text-lg sm:text-xl italic text-primary font-medium leading-relaxed">
                «{t('philosophy.quote')}»
              </span>
              {/* Layer 5: Named Person + Role Caption */}
              <span className="block font-body text-xs text-accent uppercase tracking-wider mt-2 font-bold">
                — {t('philosophy.author')}
              </span>
            </div>

            {/* Layer 6: Stat Row of 3-4 Real Numerals */}
            <div className="grid grid-cols-3 gap-4 border-t border-primary/10 pt-8">
              <div>
                <span className="block font-display text-3xl sm:text-4xl font-bold text-primary tabular-nums">{t('philosophy.stat1Val')}</span>
                <span className="block font-body text-[10px] text-text-muted uppercase tracking-wider mt-1 leading-tight">{t('philosophy.stat1Lbl')}</span>
              </div>
              <div>
                <span className="block font-display text-3xl sm:text-4xl font-bold text-primary tabular-nums">{t('philosophy.stat2Val')}</span>
                <span className="block font-body text-[10px] text-text-muted uppercase tracking-wider mt-1 leading-tight">{t('philosophy.stat2Lbl')}</span>
              </div>
              <div>
                <span className="block font-display text-3xl sm:text-4xl font-bold text-primary tabular-nums">{t('philosophy.stat3Val')}</span>
                <span className="block font-body text-[10px] text-text-muted uppercase tracking-wider mt-1 leading-tight">{t('philosophy.stat3Lbl')}</span>
              </div>
            </div>

            {/* Secondary Action Link */}
            <div className="mt-8">
              <a href="#services" className="font-body text-xs font-bold text-primary hover:text-accent uppercase tracking-wider transition-colors inline-block border-b border-primary/20 hover:border-accent pb-1">
                {t('philosophy.linkText')}
              </a>
            </div>
          </div>

          {/* Right Visual Frame: Layer 7 Photo Cluster (Two overlapped/tilted images) */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 min-h-[500px] flex items-center justify-center">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-accent/[0.01] rounded-3xl -rotate-1 pointer-events-none" />
            
            {/* Base Image (Larger) */}
            <div className="w-[75%] aspect-[4/5] overflow-hidden shadow-2xl relative border border-primary/5">
              <img 
                src="https://picsum.photos/seed/kzm-philosophy-base/800/1000" 
                alt="Architectural detailing" 
                loading="lazy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>

            {/* Overlapped tilted image */}
            <div className="absolute -bottom-6 -left-4 w-[55%] aspect-square overflow-hidden shadow-2xl border-4 border-bg-light rotate-3 transition-transform duration-500 hover:rotate-0">
              <img 
                src="https://picsum.photos/seed/kzm-philosophy-overlay/600/600" 
                alt="On-site planning" 
                loading="lazy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            {/* Photo caption with rule (Marginalia) */}
            <div className="absolute bottom-4 right-4 max-w-[200px] text-right bg-bg-light/90 backdrop-blur-sm p-3 border-r-2 border-accent">
              <p className="font-body text-[10px] text-text-muted leading-normal">
                {t('philosophy.photoCaption')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

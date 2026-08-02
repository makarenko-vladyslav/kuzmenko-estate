"use client";
import { useLocale } from '@/lib/i18n';

interface AdvantageItem {
  title: string;
  desc: string;
}

export default function Advantages() {
  const { t } = useLocale();
  const items = t('advantages.items') as AdvantageItem[];

  return (
    <section id="advantages" className="py-12 md:py-20 lg:py-28 bg-bg-card relative overflow-hidden border-b border-primary/5">
      
      {/* Background Watermark */}
      <div className="absolute top-24 right-0 pointer-events-none select-none text-[22vw] font-display font-bold text-primary/[0.01]" aria-hidden="true">
        STANDARDS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layer 1 & 2: Kicker and Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
            {t('advantages.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight">
            {t('advantages.title')}
          </h2>
        </div>

        {/* Dual Layout: Left editorial cards, Right massive Proof Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Columns of Advantages */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div key={index} className="border-l-2 border-accent pl-6 py-2 bg-primary/[0.01] hover:bg-accent/[0.01] transition-colors duration-300">
                <h3 className="font-display text-xl sm:text-2xl text-primary font-bold mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Layer 3 & 4 & 5 & 6 Proof Block */}
          <div className="lg:col-span-5 bg-bg-light border border-primary/10 p-8 sm:p-10 relative">
            {/* Giant quotation mark as text ornament */}
            <span className="absolute -top-6 -left-2 text-[8rem] font-display font-bold text-accent/10 leading-none select-none" aria-hidden="true">
              “
            </span>

            {/* Testimonial Quote in Display Type */}
            <blockquote className="relative z-10">
              <p className="font-display text-2xl italic text-primary font-semibold leading-relaxed mb-6">
                «{t('advantages.proofQuote')}»
              </p>
              {/* Attribution with Descriptor */}
              <cite className="block not-italic font-body text-xs text-accent uppercase tracking-wider font-bold">
                {t('advantages.proofAuthor')}
              </cite>
            </blockquote>

            {/* Rating plain text + named source */}
            <div className="border-t border-primary/10 mt-6 pt-6 flex items-center justify-between text-xs font-body text-text-muted">
              <span className="font-bold text-primary">{t('advantages.proofRating')}</span>
            </div>

            {/* Pagination simulated dots */}
            <div className="flex gap-1.5 justify-end mt-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";
import { useLocale } from '@/lib/i18n';

interface AdvantageItem {
  title: string;
  desc: string;
}

export default function WhyUsSection() {
  const { t } = useLocale();
  const advantages = t('whyUs.items') as AdvantageItem[];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      
      {/* Structural layout decorations */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Background large decorative initial watermark */}
      <div className="absolute left-4 top-4 watermark text-[15rem] leading-none opacity-5 select-none pointer-events-none z-0">
        ASSURANCE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold block">
            {t('whyUs.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            {t('whyUs.title')}
          </h2>
          <p className="text-white/60 font-body text-sm sm:text-base tracking-wider">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* 4 elements Grid layout with thin structural rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="space-y-4 p-6 border-l border-white/10 relative hover:border-accent transition-colors duration-500"
            >
              {/* Massive index number */}
              <span className="font-display text-xs text-accent font-bold tracking-widest block uppercase">
                — {String(idx + 1).padStart(2, '0')}
              </span>
              
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                {item.title}
              </h3>
              
              <p className="text-xs text-white/60 leading-relaxed font-body">
                {item.desc}
              </p>

              {/* Micro-label at card footer for density */}
              <div className="pt-2 border-t border-white/5">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase font-bold text-white/30 block">
                  ГАРД ТЕХНОЛОГІЇ
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional marginalia for density */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] tracking-wider text-white/40">
          <div>СПЕЦІАЛІЗОВАНА ЛІЦЕНЗІЯ КЛАСУ СС3 • ДП "УКРБУДВЕРДИКТ"</div>
          <div>ESTABLISHED 2009 • DNIPRO REGION</div>
        </div>

      </div>
    </section>
  );
}


"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="relative bg-primary text-white py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
          <div className="text-center md:border-r border-white/10 last:border-0">
            <span className="block font-display text-4xl lg:text-5xl font-bold text-accent mb-2 tabular-nums">15 років</span>
            <span className="block font-body text-xs tracking-wider uppercase text-white/60">{t('socialProof.experience')}</span>
          </div>
          <div className="text-center md:border-r border-white/10 last:border-0">
            <span className="block font-display text-4xl lg:text-5xl font-bold text-accent mb-2 tabular-nums">100+</span>
            <span className="block font-body text-xs tracking-wider uppercase text-white/60">{t('socialProof.completed')}</span>
          </div>
          <div className="text-center md:border-r border-white/10 last:border-0">
            <span className="block font-display text-lg lg:text-xl font-medium text-white max-w-[200px] mx-auto mb-2 truncate">Heisenberg, Mur Mur</span>
            <span className="block font-body text-xs tracking-wider uppercase text-white/60">{t('socialProof.trackRecord')}</span>
          </div>
          <div className="text-center">
            <span className="block font-display text-4xl lg:text-5xl font-bold text-accent mb-2 tabular-nums">24/7</span>
            <span className="block font-body text-xs tracking-wider uppercase text-white/60">{t('socialProof.surveillance')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

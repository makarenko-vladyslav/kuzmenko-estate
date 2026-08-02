
"use client";
import { useLocale } from '@/lib/i18n';

interface TrustItem {
  title: string;
  desc: string;
}

export default function TrustSection() {
  const { t } = useLocale();
  const items = t('trust.items') as TrustItem[];

  return (
    <section id="trust" className="py-24 bg-bg-light relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header left */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
              {t('trust.kicker')}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-primary">
              {t('trust.title')}
            </h2>
            <p className="text-text-muted font-body text-sm sm:text-base tracking-wider">
              {t('trust.subtitle')}
            </p>
          </div>

          {/* Core content grid right */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-card p-6 border border-primary/5 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-accent">
                    <span className="font-display font-bold text-xs">{idx + 1}</span>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-text-muted leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
  
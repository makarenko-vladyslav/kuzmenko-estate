"use client";
import { useLocale } from '@/lib/i18n';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as FAQItem[];

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-bg-card relative overflow-hidden border-b border-primary/5">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
            {t('faq.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight">
            {t('faq.title')}
          </h2>
        </div>

        {/* HTML details/summary accordions */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <details key={index} className="group bg-bg-light border border-primary/5 p-6 transition-all duration-300">
              <summary className="flex justify-between items-center font-display text-lg sm:text-xl text-primary font-bold cursor-pointer list-none focus:outline-none">
                <span>{item.q}</span>
                {/* Numeric indicators instead of symbols */}
                <span className="text-accent text-sm font-body transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 font-body text-text-muted text-base leading-relaxed border-t border-primary/5 pt-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

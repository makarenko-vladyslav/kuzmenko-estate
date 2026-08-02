
"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const { t } = useLocale();
  const items = t('faq.items') as FAQItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-light relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
            {t('faq.kicker')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-primary">
            {t('faq.title')}
          </h2>
          <p className="text-text-muted font-body text-sm sm:text-base tracking-wider">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Full-width accordion structure sharing left edge alignment */}
        <div className="w-full space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-primary/10 pb-4 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {item.question}
                  </span>
                  
                  {/* Subtle clean vertical/horizontal outline marker */}
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <div className="absolute w-4 h-[1.5px] bg-primary transition-transform duration-300" />
                    <div className={`absolute w-[1.5px] h-4 bg-primary transition-transform duration-300 ${isOpen ? 'rotate-90 scale-y-0' : ''}`} />
                  </div>
                </button>

                {/* Animated expandable content height area */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed text-text-muted font-body pt-2 pb-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
  
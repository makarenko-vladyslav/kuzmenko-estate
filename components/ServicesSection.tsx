"use client";
import { useLocale } from '@/lib/i18n';

interface ServiceItem {
  title: string;
  category: string;
  desc: string;
}

export default function ServicesSection() {
  const { t } = useLocale();
  const items = t('services.items') as ServiceItem[];

  // Define static list prices corresponding to services from layout instructions
  const pricingRates = [
    { price: "1,200", unit: "м²", tag: "РЕКОМЕНДОВАНО", spec: "Ескізний проєкт + КР розрахунок фундаменту" },
    { price: "1,000", unit: "м²", tag: "ПРЕМІУМ Fit-Out", spec: "Авторське планування та специфікація Poliform" },
    { price: "18,000", unit: "м²", tag: "ГАРАНТІЯ 15 РОКІВ", spec: "Капітальні стіни, монолітне перекриття, інженерія" }
  ];

  return (
    <section id="services" className="py-24 bg-bg-light text-primary relative overflow-hidden border-b border-primary/5">
      
      {/* Decorative vertical structure line */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-primary/5 pointer-events-none" />

      {/* Decorative large background text layer */}
      <div className="absolute right-4 bottom-4 watermark text-[14rem] opacity-5 select-none pointer-events-none whitespace-nowrap leading-none font-display text-primary">
        SPECIFICATION
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header content */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
            {t('services.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            {t('services.title')}
          </h2>
          <p className="text-text-muted font-body text-sm sm:text-base tracking-wider">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Editorial Price/Offer List (Rows Layout with Dotted Leaders) */}
        <div className="space-y-12">
          
          <div className="divide-y divide-primary/10 border-t border-b border-primary/10">
            {items.map((item, idx) => {
              const rates = pricingRates[idx] || { price: "По запиту", unit: "", tag: "", spec: "" };
              const isSignature = idx === 2; // Full turnkey construction is signature item

              return (
                <div
                  key={idx}
                  className={`py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-all duration-300 px-4 ${
                    isSignature ? 'bg-primary/[0.03] border-l-2 border-accent' : 'hover:bg-primary/[0.02]'
                  }`}
                >
                  {/* Category & Status tags columns */}
                  <div className="lg:col-span-3 space-y-1">
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-accent block">
                      {item.category}
                    </span>
                    {rates.tag && (
                      <span className="inline-block bg-accent/10 border border-accent/30 text-[0.55rem] text-accent tracking-widest font-bold px-2 py-0.5 uppercase">
                        {rates.tag}
                      </span>
                    )}
                  </div>

                  {/* Service Title & Detailed Specs description */}
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="font-display text-lg sm:text-2xl font-bold text-primary tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-text-muted font-body">
                      {item.desc}
                    </p>
                    <p className="text-[0.65rem] text-accent/80 font-body tracking-wider uppercase font-semibold">
                      СПЕЦИФІКАЦІЯ: {rates.spec}
                    </p>
                  </div>

                  {/* Dynamic dotted leader representation and Pricing right-aligned column */}
                  <div className="lg:col-span-4 flex items-baseline justify-between lg:justify-end gap-2 lg:text-right">
                    <span className="lg:hidden text-xs text-text-muted/60 tracking-wider font-body">ВАРТІСТЬ:</span>
                    <div className="flex-grow border-b border-dotted border-primary/10 mx-2 hidden lg:block" />
                    <div className="text-right flex items-baseline gap-1">
                      <span className="text-[0.7rem] text-text-muted/60 tracking-wider font-body">від</span>
                      <span className="font-display text-xl sm:text-3xl font-bold tracking-tight text-primary tabular-nums">
                        {rates.price}
                      </span>
                      <span className="text-xs text-text-muted/80 tracking-wider font-body">UAH/{rates.unit}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Footnote and secondary action block */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs text-text-muted">
            <p className="font-body max-w-xl text-center sm:text-left">
              * Вказані ціни є базовими індикаторами Дніпровського будівельного ринку та фіксуються в офіційному договорі після геологічних вишукувань.
            </p>
            <a
              href="#calculator"
              className="text-xs tracking-widest uppercase font-display text-accent hover:text-primary font-bold transition-colors duration-300"
            >
              ПЕРЕЙТИ ДО ОНЛАЙН РОЗРАХУНКУ —&gt;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
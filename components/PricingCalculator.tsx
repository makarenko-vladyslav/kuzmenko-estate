"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

export default function PricingCalculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(150);
  const [objectType, setObjectType] = useState('residential');
  const [serviceType, setServiceType] = useState('full');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(() => {
    // Pricing calculation logic
    let baseRate = pricing.basePrices.architectural;
    if (serviceType === 'interior') baseRate = pricing.basePrices.interior;
    else if (serviceType === 'full') baseRate = pricing.basePrices.architectural + pricing.basePrices.interior;

    const multiplier = pricing.multipliers[objectType as keyof typeof pricing.multipliers] || 1.0;
    const rawPrice = area * baseRate * multiplier;
    setEstimatedPrice(Math.round(rawPrice));
  }, [area, objectType, serviceType]);

  return (
    <section id="calculator" className="py-12 md:py-20 lg:py-28 bg-bg-light relative overflow-hidden border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
            {t('calculator.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight">
            {t('calculator.title')}
          </h2>
          <p className="mt-4 font-body text-text-muted text-base sm:text-lg">
            {t('calculator.intro')}
          </p>
        </div>

        {/* Calculator layout with crisp cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 bg-bg-card border border-primary/5 p-8 sm:p-10 shadow-lg">
            {/* Input Range Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="font-display text-lg text-primary font-bold">
                  {t('calculator.labels.area')}
                </label>
                <span className="font-display text-2xl text-accent font-bold">
                  {area} m²
                </span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="1000" 
                step="10"
                value={area} 
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full accent-accent bg-bg-light h-2 rounded-lg cursor-pointer" 
              />
              <div className="flex justify-between text-xs font-body text-text-muted mt-2">
                <span>50 m²</span>
                <span>1000 m²</span>
              </div>
            </div>

            {/* Object Type Select */}
            <div className="mb-8">
              <label className="block font-display text-lg text-primary font-bold mb-3">
                {t('calculator.labels.type')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.keys(pricing.multipliers).map((key) => (
                  <button 
                    key={key}
                    type="button"
                    onClick={() => setObjectType(key)}
                    className={`p-4 border font-body text-sm text-left transition-all ${
                      objectType === key 
                        ? 'border-accent bg-accent/5 text-primary' 
                        : 'border-primary/10 hover:border-primary/30 text-text-muted'
                    }`}
                  >
                    {t(`calculator.types.${key}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Type Select */}
            <div>
              <label className="block font-display text-lg text-primary font-bold mb-3">
                {t('calculator.labels.service')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['architectural', 'interior', 'full'].map((key) => (
                  <button 
                    key={key}
                    type="button"
                    onClick={() => setServiceType(key)}
                    className={`p-4 border font-body text-sm text-left transition-all ${
                      serviceType === key 
                        ? 'border-accent bg-accent/5 text-primary' 
                        : 'border-primary/10 hover:border-primary/30 text-text-muted'
                    }`}
                  >
                    {t(`calculator.services.${key}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Block Side */}
          <div className="lg:col-span-5 bg-primary text-white p-8 sm:p-10 flex flex-col justify-between border border-white/5 relative h-full min-h-[400px]">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-body block mb-2">
                Ваш кошторис проєктування
              </span>
              <p className="font-display text-xl text-white/80 leading-relaxed mb-6">
                Попередній обсяг інвестицій розраховано на базі офіційних інженерних розцінок Дніпра
              </p>
            </div>

            <div className="my-8">
              <span className="block text-sm text-white/50 font-body mb-2">
                {t('calculator.labels.result')}
              </span>
              <span className="font-display text-4xl sm:text-5xl font-bold text-accent">
                ~ {estimatedPrice.toLocaleString('uk-UA')} {pricing.currency}
              </span>
              <p className="text-xs text-white/40 mt-2 font-body">
                * Кінцева вартість фіксується у договорі після аналізу ділянки.
              </p>
            </div>

            <a 
              href="#contact" 
              className="block text-center bg-accent hover:bg-accent/90 text-white font-body text-xs uppercase tracking-widest font-semibold py-4 transition-colors duration-200"
            >
              {t('calculator.labels.submit')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

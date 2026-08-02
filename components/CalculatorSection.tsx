
"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

export default function CalculatorSection() {
  const { t } = useLocale();

  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [area, setArea] = useState<number>(pricing.limits.defaultArea);
  
  const [serviceArch, setServiceArch] = useState(true);
  const [serviceInterior, setServiceInterior] = useState(false);
  const [serviceBuild, setServiceBuild] = useState(false);
  
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let rate = 0;
    if (serviceArch) rate += pricing.basePrices.architectural;
    if (serviceInterior) rate += pricing.basePrices.interior;
    if (serviceBuild) rate += pricing.basePrices.turnkey;

    const multiplier = pricing.multipliers[propertyType];
    const total = area * rate * multiplier;
    setTotalPrice(total);
  }, [propertyType, area, serviceArch, serviceInterior, serviceBuild]);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('uk-UA', { maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-bg-light relative overflow-hidden">
      
      {/* Decorative large numbers watermark */}
      <div className="absolute right-0 top-1/4 watermark text-[18rem] opacity-30 select-none">
        01001
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
            {t('calculator.kicker')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-primary">
            {t('calculator.title')}
          </h2>
          <p className="text-text-muted font-body text-sm sm:text-base tracking-wider">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Form Container: solid limestone cards, no glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-bg-card p-8 md:p-10 shadow-xl border border-primary/5 space-y-8">
            
            {/* Property Type Toggle */}
            <div className="space-y-4">
              <span className="block text-xs uppercase tracking-widest font-semibold text-text-muted">
                {t('calculator.propertyTypeLabel')}
              </span>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`py-4 text-xs tracking-widest font-display uppercase border transition-all ${
                    propertyType === 'residential'
                      ? 'bg-primary text-white border-primary'
                      : 'border-primary/20 text-text-main hover:border-primary/60'
                  }`}
                >
                  {t('calculator.residential')}
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`py-4 text-xs tracking-widest font-display uppercase border transition-all ${
                    propertyType === 'commercial'
                      ? 'bg-primary text-white border-primary'
                      : 'border-primary/20 text-text-main hover:border-primary/60'
                  }`}
                >
                  {t('calculator.commercial')}
                </button>
              </div>
            </div>

            {/* Area m2 Range Input slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-text-muted">
                  {t('calculator.areaLabel')}
                </span>
                <span className="font-display text-xl font-bold text-accent">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min={pricing.limits.minArea}
                max={pricing.limits.maxArea}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[0.65rem] text-text-muted">
                <span>{pricing.limits.minArea} m²</span>
                <span>{pricing.limits.maxArea} m²</span>
              </div>
            </div>

            {/* Custom checkboxes for services selection */}
            <div className="space-y-4">
              <span className="block text-xs uppercase tracking-widest font-semibold text-text-muted">
                {t('calculator.servicesLabel')}
              </span>
              <div className="space-y-3">
                <label className="flex items-start gap-4 p-4 border border-primary/5 cursor-pointer hover:bg-primary/5 transition-colors">
                  <input
                    type="checkbox"
                    checked={serviceArch}
                    onChange={(e) => setServiceArch(e.target.checked)}
                    className="mt-1 accent-accent h-4 w-4"
                  />
                  <div>
                    <span className="text-xs font-display font-semibold block">{t('calculator.serviceArch')}</span>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-4 border border-primary/5 cursor-pointer hover:bg-primary/5 transition-colors">
                  <input
                    type="checkbox"
                    checked={serviceInterior}
                    onChange={(e) => setServiceInterior(e.target.checked)}
                    className="mt-1 accent-accent h-4 w-4"
                  />
                  <div>
                    <span className="text-xs font-display font-semibold block">{t('calculator.serviceInterior')}</span>
                  </div>
                </label>

                <label className="flex items-start gap-4 p-4 border border-primary/5 cursor-pointer hover:bg-primary/5 transition-colors">
                  <input
                    type="checkbox"
                    checked={serviceBuild}
                    onChange={(e) => setServiceBuild(e.target.checked)}
                    className="mt-1 accent-accent h-4 w-4"
                  />
                  <div>
                    <span className="text-xs font-display font-semibold block">{t('calculator.serviceBuild')}</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Results Display */}
          <div className="lg:col-span-5 bg-primary text-white p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-accent">
                {t('calculator.resultLabel')}
              </span>
              
              <div className="space-y-2">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-accent">
                  {formatPrice(totalPrice)}
                </span>
                <span className="font-display text-lg tracking-wider text-white/60 ml-2">
                  {pricing.currency}
                </span>
              </div>

              <p className="text-xs text-white/60 leading-relaxed font-body">
                {t('calculator.resultDesc')}
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <a
                href="#contact"
                className="block bg-accent hover:bg-accent/90 text-white text-center text-xs tracking-widest font-display py-4 font-bold transition-all"
              >
                {t('calculator.cta')}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
  
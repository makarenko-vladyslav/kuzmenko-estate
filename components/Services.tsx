"use client";
import { useLocale } from '@/lib/i18n';

export default function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="py-12 md:py-20 lg:py-28 bg-bg-card relative overflow-hidden border-b border-primary/5">
      
      {/* Background Layer watermark */}
      <div className="absolute top-20 left-0 pointer-events-none select-none text-[22vw] font-display font-bold text-primary/[0.01]" aria-hidden="true">
        PRICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layer 1 & 2 & 3: Kicker, Heading, Lede */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
            {t('services.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight">
            {t('services.title')}
          </h2>
          <p className="mt-4 font-body text-text-muted text-base sm:text-lg">
            {t('services.lede')}
          </p>
        </div>

        {/* Categories, Tabular rows, Footnotes, Highlight box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main List Column (Architectural Table) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Category block 1 */}
            <div>
              <span className="text-accent text-xs tracking-wider uppercase font-body font-bold block mb-4 pb-2 border-b border-primary/10">
                — {t('services.category1')}
              </span>
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row1Title')}
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row1Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row1Desc')}</p>
                </div>
                {/* Row 2 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row2Title')}
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row2Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row2Desc')}</p>
                </div>
                {/* Row 3 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row3Title')}
                      <span className="inline-block ml-3 px-2 py-0.5 bg-accent/10 text-accent text-[9px] uppercase tracking-wider font-body font-bold rounded-sm">Базовий</span>
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row3Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row3Desc')}</p>
                </div>
              </div>
            </div>

            {/* Category block 2 */}
            <div>
              <span className="text-accent text-xs tracking-wider uppercase font-body font-bold block mb-4 pb-2 border-b border-primary/10">
                — {t('services.category2')}
              </span>
              <div className="space-y-6">
                {/* Row 4 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row4Title')}
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row4Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row4Desc')}</p>
                </div>
                {/* Row 5 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row5Title')}
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row5Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row5Desc')}</p>
                </div>
                {/* Row 6 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row6Title')}
                      <span className="inline-block ml-3 px-2 py-0.5 bg-primary text-white text-[9px] uppercase tracking-wider font-body font-bold rounded-sm">Premium</span>
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row6Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row6Desc')}</p>
                </div>
              </div>
            </div>

            {/* Category block 3 */}
            <div>
              <span className="text-accent text-xs tracking-wider uppercase font-body font-bold block mb-4 pb-2 border-b border-primary/10">
                — {t('services.category3')}
              </span>
              <div className="space-y-6">
                {/* Row 7 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row7Title')}
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row7Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row7Desc')}</p>
                </div>
                {/* Row 8 */}
                <div className="group">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl text-primary font-bold group-hover:text-accent transition-colors">
                      {t('services.row8Title')}
                    </h4>
                    <span className="grow border-b border-dotted border-primary/20 mx-2" aria-hidden="true"></span>
                    <span className="font-display text-lg font-bold text-primary tabular-nums shrink-0">{t('services.row8Price')}</span>
                  </div>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xl">{t('services.row8Desc')}</p>
                </div>
              </div>
            </div>

            {/* Footnote Line */}
            <p className="text-[10px] font-body text-text-muted italic border-t border-primary/5 pt-4">
              {t('services.footnote')}
            </p>

          </div>

          {/* Highlight Signature Box Sidebar (ONE signature item) */}
          <div className="lg:col-span-4 bg-primary text-white p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between h-full min-h-[460px]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <span className="inline-block px-3 py-1 bg-accent text-white font-body text-[9px] uppercase tracking-widest font-bold mb-6">
                Комплексний вибір
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold mb-4 leading-tight">
                {t('services.signatureTitle')}
              </h3>
              <p className="font-body text-xs text-white/70 leading-relaxed mb-6">
                {t('services.signatureDesc')}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <span className="block text-white/50 text-[10px] font-body uppercase tracking-wider mb-1">
                Генеральний кошторис
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-accent tabular-nums">
                {t('services.signaturePrice')}
              </span>
              <p className="text-[9px] text-white/40 font-body mt-2">
                * Включає інженерний нагляд, логістику та повну юридичну відповідальність бюро.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="block text-center bg-accent hover:bg-accent/90 text-white font-body text-xs uppercase tracking-widest font-bold py-4 transition-colors"
              >
                Отримати комерційну пропозицію
              </a>
              <a 
                href="#gallery" 
                className="block text-center text-white/60 hover:text-white font-body text-[10px] uppercase tracking-wider font-bold mt-4 underline decoration-white/20"
              >
                {t('services.cta')}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

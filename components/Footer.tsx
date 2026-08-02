"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  const handleNavClick = (path: string) => {
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { key: 'services', path: '#services' },
    { key: 'philosophy', path: '#philosophy' },
    { key: 'calculator', path: '#calculator' },
    { key: 'trust', path: '#trust' },
    { key: 'portfolio', path: '#portfolio' },
    { key: 'process', path: '#process' },
    { key: 'faq', path: '#faq' }
  ];

  return (
    <footer className="relative bg-primary text-white pt-24 pb-20 overflow-hidden border-t border-white/5 z-20">
      
      {/* Decorative vertical structure line */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Content block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-24 border-b border-white/10 relative z-10">
          
          {/* Brand Wordmark Column */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3 group text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 32 32">
                <path d="M10 24V10L16 16L22 10V24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="square" />
                <path d="M10 24H22" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-widest text-white">KUZMENKO</span>
                <span className="text-[0.55rem] tracking-[0.3em] text-accent font-semibold">ESTATE</span>
              </div>
            </a>
            
            <p className="text-xs text-white/60 leading-relaxed font-body max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="text-[0.65rem] tracking-wider text-white/40 space-y-1">
              <p>ЛІЦЕНЗІЯ ДЕРЖАРХБУДІНСПЕКЦІЇ №201489020</p>
              <p>SATELLITE TELEMETRY SYSTEMS ACTIVE • SECURE CONNECTION</p>
            </div>
          </div>

          {/* Quick links navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-accent block">НАВІГАЦІЯ</span>
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.path)}
                  className="text-left font-display text-xs tracking-wider text-white/70 hover:text-accent transition-colors duration-200 uppercase"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Business Credentials contacts */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-accent block">КОНТАКТИ ТА ОФІС</span>
            <div className="space-y-3 text-xs text-white/70 font-body">
              <p>
                <strong>{t('footer.office')}:</strong> Дніпро, вул. Архітектурна, 15
              </p>
              <p>
                <strong>{t('footer.hours')}:</strong> {t('footer.hoursVal')}
              </p>
              <p>
                <strong>Електронна пошта:</strong> info@kzmestate.com
              </p>
              <p>
                <strong>Контактний телефон:</strong> +38 067 770 02 75
              </p>
            </div>
          </div>

        </div>

        {/* Legal credits and developer links */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[0.65rem] tracking-wider text-white/40 relative z-10">
          <div>
            &copy; {new Date().getFullYear()} KUZMENKO ESTATE. {t('footer.rights')}
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/kzmestate/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              FACEBOOK
            </a>
            <a href="https://www.instagram.com/kuzmenkoestate/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              INSTAGRAM
            </a>
            <a href="https://makarich.framer.website" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">
              {t('footer.developer')}
            </a>
          </div>
        </div>

      </div>

      {/* Giant Bleeding Watermark Wordmark at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <h2 className="font-display text-[15vw] font-bold text-white/2 select-none leading-none tracking-[0.05em] text-center whitespace-nowrap translate-y-1/3">
          KUZMENKO ESTATE
        </h2>
      </div>

    </footer>
  );
}

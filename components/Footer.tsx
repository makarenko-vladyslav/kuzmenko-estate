
"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Logo & Tagline column */}
          <div className="lg:col-span-4">
            <span className="font-display font-bold text-2xl uppercase tracking-widest block mb-4">
              Kuzmenko Estate
            </span>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              {t('footer.tagline')}
            </p>
            <p className="text-white/40 text-xs font-body">
              Est. 2009 · м. Дніпро, Україна
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-3">
            <span className="block font-display text-lg font-bold mb-4">Навігація</span>
            <ul className="space-y-3 font-body text-sm text-white/60">
              <li><a href="#philosophy" className="hover:text-accent transition-colors">Філософія бренду</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Перелік послуг</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Калькулятор кошторису</a></li>
              <li><a href="#advantages" className="hover:text-accent transition-colors">Наші переваги</a></li>
            </ul>
          </div>

          {/* Working Hours Column */}
          <div className="lg:col-span-2">
            <span className="block font-display text-lg font-bold mb-4">{t('footer.hours')}</span>
            <p className="font-body text-sm text-white/60 leading-relaxed">{t('footer.hoursVal')}</p>
          </div>

          {/* Contacts Column */}
          <div className="lg:col-span-3">
            <span className="block font-display text-lg font-bold mb-4">{t('footer.contacts')}</span>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
              {t('footer.addressVal')}
            </p>
            <a href="tel:+380677700275" className="block font-body text-sm text-white/60 hover:text-accent mb-2">
              +38 067 770 02 75
            </a>
            <a href="mailto:info@kzmestate.com" className="block font-body text-sm text-white/60 hover:text-accent">
              info@kzmestate.com
            </a>
          </div>

        </div>

        {/* Text social links as row */}
        <div className="flex gap-6 border-t border-white/5 py-6 font-body text-xs text-white/50 uppercase tracking-widest">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">YouTube</a>
        </div>

        {/* Thick divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs font-body text-white/40">
            © {new Date().getFullYear()} Kuzmenko Estate. {t('footer.allRights')}
          </p>
          
          <p className="text-xs font-body text-white/40">
            {/* Studio credit connected directly as mandatory link */}
            <a 
              href="https://makarich.framer.website" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors underline decoration-white/20"
            >
              {t('footer.studio')}
            </a>
          </p>
        </div>

        {/* Giant full-width brand wordmark bleeding off the bottom edge */}
        <div className="text-[12vw] sm:text-[15vw] font-bold text-white/[0.02] select-none font-display uppercase tracking-widest text-center leading-none mt-12 block pointer-events-none select-none" aria-hidden="true">
          {t('footer.wordmark')}
        </div>

      </div>
    </footer>
  );
}

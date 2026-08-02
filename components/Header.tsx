
"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'uk' ? 'en' : 'uk');
  };

  const navItems = [
    { label: t('nav.philosophy'), href: '#philosophy' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.calculator'), href: '#calculator' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.advantages'), href: '#advantages' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 border-b border-white/5 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Typographic wordmark logo (NO SVG LOGOMARK) */}
        <a href="#" className="flex flex-col text-white select-none">
          <span className="font-display font-bold tracking-[0.25em] text-lg sm:text-xl uppercase">KUZMENKO</span>
          <span className="font-body text-[8px] tracking-[0.6em] text-accent uppercase leading-none">ESTATE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 hover:text-accent font-body text-sm tracking-wide transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="text-white/80 hover:text-accent font-body text-xs tracking-wider uppercase border border-white/20 px-3 py-1 rounded transition-colors cursor-pointer"
          >
            {locale === 'uk' ? 'EN' : 'UA'}
          </button>
          
          <a href="tel:+380677700275" className="text-white font-body text-sm tracking-wide font-medium hover:text-accent transition-colors">
            +38 067 770 02 75
          </a>

          <a href="#calculator" className="bg-accent hover:bg-accent/90 text-white font-body text-xs uppercase tracking-widest font-medium px-5 py-3 transition-colors duration-200">
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-white/85 hover:text-accent font-body text-xs border border-white/20 px-2.5 py-1 rounded"
          >
            {locale === 'uk' ? 'EN' : 'UA'}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
            className="text-white focus:outline-none cursor-pointer"
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></span>
            <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-primary/98 z-50 flex flex-col justify-between p-8 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-lg text-white uppercase tracking-widest">Kuzmenko Estate</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl font-light hover:text-accent focus:outline-none cursor-pointer"
            >
              ✕
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 my-auto text-left">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-display text-3xl hover:text-accent transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a href="tel:+380677700275" className="text-white font-body text-lg font-medium hover:text-accent transition-colors">
              +38 067 770 02 75
            </a>
            <p className="text-white/50 font-body text-sm">Дніпро, Україна · Est. 2009</p>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'services', path: '#services' },
    { key: 'philosophy', path: '#philosophy' },
    { key: 'calculator', path: '#calculator' },
    { key: 'trust', path: '#trust' },
    { key: 'portfolio', path: '#portfolio' },
    { key: 'process', path: '#process' },
    { key: 'faq', path: '#faq' },
    { key: 'contact', path: '#contact' }
  ];

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-primary/95 shadow-[0_4px_30px_rgba(0,0,0,0.15)] py-4 backdrop-blur-md border-b border-white/5' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand wordmark + minimalist custom SVG logomark */}
          <a href="#" className="flex items-center gap-3 group text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 32 32">
              <path d="M10 24V10L16 16L22 10V24" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="square" />
              <path d="M10 24H22" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-widest text-white">KUZMENKO</span>
              <span className="text-[0.55rem] tracking-[0.3em] text-accent font-semibold">ESTATE</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.path)}
                className="font-display text-xs tracking-widest text-white/80 hover:text-accent transition-colors duration-200 uppercase"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Actions & Locale switcher */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center border border-white/20 p-0.5">
              <button
                onClick={() => setLocale('uk')}
                className={`text-[0.65rem] px-2 py-1 tracking-wider transition-all duration-300 ${locale === 'uk' ? 'bg-accent text-white font-semibold' : 'text-white/60 hover:text-white'}`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`text-[0.65rem] px-2 py-1 tracking-wider transition-all duration-300 ${locale === 'en' ? 'bg-accent text-white font-semibold' : 'text-white/60 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            
            <a
              href="tel:+380677700275"
              className="text-xs tracking-widest text-white hover:text-accent font-medium font-display transition-colors duration-300"
            >
              +38 067 770 02 75
            </a>

            <button
              onClick={() => handleNavClick('#contact')}
              className="border border-accent/40 bg-accent/10 backdrop-blur-sm px-5 py-2.5 text-xs text-white hover:bg-accent tracking-widest font-display transition-all duration-300"
            >
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex items-center border border-white/20 p-0.5">
              <button
                onClick={() => setLocale('uk')}
                className={`text-[0.6rem] px-1.5 py-0.5 tracking-wider ${locale === 'uk' ? 'bg-accent text-white font-semibold' : 'text-white/60'}`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`text-[0.6rem] px-1.5 py-0.5 tracking-wider ${locale === 'en' ? 'bg-accent text-white font-semibold' : 'text-white/60'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Full-screen Overlay Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-between p-8 pt-32 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.key}
                  onClick={() => handleNavClick(item.path)}
                  className="font-display text-2xl tracking-widest text-left text-white/90 hover:text-accent border-b border-white/5 pb-2 transition-all duration-300 uppercase"
                >
                  {t(`nav.${item.key}`)}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-6 pt-12 border-t border-white/10">
              <a
                href="tel:+380677700275"
                className="text-xl tracking-widest text-white/95 font-display"
              >
                +38 067 770 02 75
              </a>
              <p className="text-xs tracking-wider text-white/40">info@kzmestate.com</p>
              
              <button
                onClick={() => handleNavClick('#contact')}
                className="bg-accent text-white py-4 text-center text-xs tracking-widest font-display font-semibold transition-all hover:bg-accent/90"
              >
                {t('nav.cta')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { useState, type FormEvent } from 'react';
import { useLocale } from '@/lib/i18n';

export default function ContactSection() {
  const { t } = useLocale();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [type, setType] = useState('residential');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setName('');
      setPhone('');
      setArea('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Decorative giant watermark */}
      <div className="absolute right-0 bottom-4 watermark text-[16rem] opacity-5 select-none pointer-events-none font-display">
        INQUIRE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Column (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold block">
                {t('contact.kicker')}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
                {t('contact.title')}
              </h2>
              <p className="text-white/60 font-body text-sm sm:text-base tracking-wider leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Structured Hours Mini-Table & NAP Credentials */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[0.6rem] tracking-wider text-white/40 uppercase block">ГОЛОВНИЙ ОФІС</span>
                  <p className="font-display text-sm text-white/90 leading-snug">
                    Україна, м. Дніпро, вул. Архітектурна, 15
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[0.6rem] tracking-wider text-white/40 uppercase block">КОНТАКТНІ ДАНІ</span>
                  <a href="tel:+380677700275" className="font-display text-sm font-bold text-accent hover:underline block">
                    +38 067 770 02 75
                  </a>
                  <p className="text-[0.7rem] text-white/60">info@kzmestate.com</p>
                </div>
              </div>

              {/* Working Hours Mini-table */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="text-[0.6rem] tracking-wider text-white/40 uppercase block">ГРАФІК КОНСУЛЬТАЦІЙ</span>
                <div className="space-y-1 text-xs font-body text-white/70">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Понеділок — П'ятниця</span>
                    <span>09:00 — 19:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Субота</span>
                    <span>10:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between text-white/40">
                    <span>Неділя</span>
                    <span>ЗАЧИНЕНО (Черговий інженер)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[0.65rem] text-accent/80 font-body leading-relaxed">
                  * ЮРИДИЧНА БЕЗПЕКА: Всі дані шифруються за протоколом SSL та захищені внутрішнім регламентом конфіденційності.
                </p>
              </div>

            </div>
          </div>

          {/* Form Column (Right) - Solid limestone container */}
          <div className="lg:col-span-7 bg-bg-card text-primary p-8 md:p-10 shadow-2xl border border-white/5 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-text-muted block">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-primary/20 focus:border-accent py-2 outline-none font-body text-sm text-primary transition-all bg-transparent"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-text-muted block">
                    {t('contact.formPhone')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+38 (067) ..."
                    className="w-full border-b border-primary/20 focus:border-accent py-2 outline-none font-body text-sm text-primary transition-all bg-transparent"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Area input */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-text-muted block">
                    {t('contact.formArea')}
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="150"
                    className="w-full border-b border-primary/20 focus:border-accent py-2 outline-none font-body text-sm text-primary transition-all bg-transparent"
                  />
                </div>

                {/* Property Type selection dropdown */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-text-muted block">
                    {t('contact.formType')}
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border-b border-primary/20 focus:border-accent py-2 outline-none font-body text-sm text-primary transition-all bg-transparent"
                  >
                    <option value="residential">{t('calculator.residential')}</option>
                    <option value="commercial">{t('calculator.commercial')}</option>
                  </select>
                </div>

              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-text-muted block">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-primary/20 focus:border-accent py-2 outline-none font-body text-sm text-primary transition-all bg-transparent resize-none"
                />
              </div>

              {/* Form alerts */}
              {status === 'success' && (
                <div className="p-4 bg-emerald-50 text-emerald-800 text-xs font-body">
                  {t('contact.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-rose-50 text-rose-800 text-xs font-body">
                  {t('contact.error')}
                </div>
              )}

              {/* Submit CTA button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-accent text-white py-4 font-display text-xs tracking-widest font-bold uppercase transition-all duration-300 cursor-pointer"
                >
                  {status === 'loading' ? 'ОБРОБКА ДАНИХ...' : t('contact.formSubmit')}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function ContactForm() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', area: '', date: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none text-[22vw] font-display font-bold text-white/[0.01]" aria-hidden="true">
        CONTACT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layer 1: Kicker */}
        <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4 text-center lg:text-left">
          {t('contact.kicker')}
        </span>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (Structured details) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Layer 2: Invitation Heading */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight text-center lg:text-left">
              {t('contact.invitationTitle')}
            </h2>

            {/* Layer 3: Lede */}
            <p className="font-body text-white/70 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              {t('contact.description')}
            </p>

            {/* Layer 5: Structured Hours Table */}
            <div className="border-t border-white/10 pt-6">
              <span className="block text-xs uppercase text-accent font-body tracking-wider mb-3">
                {t('contact.hoursTitle')}
              </span>
              <table className="w-full font-body text-xs text-white/70 leading-relaxed border-collapse">
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-bold text-white">Понеділок — П'ятниця</td>
                    <td className="py-2 text-right tabular-nums">09:00 — 18:00</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-bold text-white">Субота</td>
                    <td className="py-2 text-right tabular-nums">10:00 — 16:00</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-white">Неділя</td>
                    <td className="py-2 text-right text-accent">Зачинено</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Layer 6: Address + Map link line */}
            <div className="space-y-4">
              <div>
                <span className="block text-xs uppercase text-accent font-body tracking-wider">
                  {t('contact.addressLabel')}
                </span>
                <p className="font-display text-xl text-white font-bold mt-1">
                  {t('contact.addressVal')}
                </p>
                <a 
                  href="https://maps.google.com/?q=Dnipro+Shevchenka+12" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-body text-xs text-accent hover:underline inline-block mt-2"
                >
                  {t('contact.mapLinkText')} →
                </a>
              </div>
            </div>

          </div>

          {/* Form Card (Non-neutral ground wrapper) */}
          <div className="lg:col-span-7 bg-primary border border-white/10 p-8 sm:p-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            {status === 'success' ? (
              <div className="bg-accent/10 border border-accent/30 p-8 text-center rounded-lg">
                <span className="block font-display text-2xl text-accent font-bold mb-2">Надіслано успішно</span>
                <p className="font-body text-white/80">{t('contact.form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-white/50 font-body tracking-wider mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-white/50 font-body tracking-wider mb-2">
                      {t('contact.form.phone')} *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-white/50 font-body tracking-wider mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-white/50 font-body tracking-wider mb-2">
                      {t('contact.form.area')}
                    </label>
                    <input 
                      type="number" 
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-white/50 font-body tracking-wider mb-2">
                    {t('contact.form.date')}
                  </label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-white/50 font-body tracking-wider mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-accent resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-sm font-body text-red-400">{t('contact.form.error')}</p>
                )}

                {/* Layer 4: CTA Pair + Layer 7: Trust Micro-line */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-body text-xs uppercase tracking-widest font-semibold px-8 py-4 transition-colors cursor-pointer"
                    >
                      {status === 'loading' ? 'Надсилання...' : 'Надіслати запит'}
                    </button>
                    <a href="tel:+380677700275" className="text-white/80 hover:text-accent font-body text-xs tracking-wider uppercase font-bold transition-colors">
                      +38 067 770 02 75
                    </a>
                  </div>
                  
                  <p className="text-[10px] font-body text-white/40 leading-relaxed pt-2">
                    {t('contact.trustLine')}
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

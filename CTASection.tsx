
import React, { useState } from 'react';
import { View } from '../App';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface CTASectionProps {
  onNavigate?: (view: View) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 lg:py-40 bg-background-light" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Consultant Trust Block */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-grow overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] p-10 lg:p-14 flex flex-col h-full">
              {/* Subtle Background Gradients */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent"></div>
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full text-left">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-medium text-slate-500 leading-relaxed mb-6">
                    <span className="font-bold text-primary">Digitech Solutions</span> wordt geleid door <br />
                    <span className="text-slate-900 font-extrabold">Subor Cheung</span>, fractional CTO en IT-consultant. 
                    Een unieke combinatie van technische expertise en business ervaring.
                  </h2>
                  <p className="text-slate-400 font-medium text-lg italic">
                    Pragmatische oplossingen die werken en schaalbaar zijn
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {/* IT Badge */}
                  <div className="bg-blue-50/80 backdrop-blur-sm p-5 rounded-3xl border border-blue-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-primary">
                      <span className="material-icons text-xl">laptop</span>
                    </div>
                    <div>
                      <p className="text-xl font-black text-primary leading-none">9+</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight mt-1">jaar IT</p>
                    </div>
                  </div>

                  {/* Finance Badge */}
                  <div className="bg-orange-50/80 backdrop-blur-sm p-5 rounded-3xl border border-orange-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-accent">
                      <span className="material-icons text-xl">account_balance</span>
                    </div>
                    <div>
                      <p className="text-xl font-black text-accent leading-none">11</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight mt-1">jaar finance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <button 
                    onClick={() => onNavigate?.('over-mij')}
                    className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-primary/10 hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 group w-full sm:w-auto justify-center"
                  >
                    Over mij
                    <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>

                  <div className="flex gap-6">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-slate-300 text-lg">email</span>
                      <span className="text-xs font-bold text-slate-500">hello@digitech-solutions.nl</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-slate-300 text-lg">location_on</span>
                      <span className="text-xs font-bold text-slate-500">Amsterdam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 h-full flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-icons text-4xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Bedankt!</h3>
                  <p className="text-slate-500 mb-8 font-medium text-left">We nemen binnen 24 uur contact met u op.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-primary font-bold hover:underline">Stuur nog een bericht</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Direct Contact</h3>
                    <p className="text-sm text-slate-400 font-medium">Laten we samen kijken naar de volgende fase.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Uw Naam</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jansen & Co"
                      className="w-full bg-slate-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 transition-all outline-none font-medium"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Zakelijk E-mail</label>
                    <input 
                      required
                      type="email" 
                      placeholder="naam@bedrijf.nl"
                      className="w-full bg-slate-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 transition-all outline-none font-medium"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Uw Uitdaging</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Vertel ons kort waar u tegenaan loopt..."
                      className="w-full bg-slate-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 transition-all outline-none resize-none font-medium"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-slate-900/20 hover:bg-primary transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                  >
                    {isSubmitting ? 'Verzenden...' : 'Verstuur aanvraag'}
                    {!isSubmitting && <span className="material-icons text-sm">send</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

'use client';

import { useScrollReveal } from '../components/scroll-reveal';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';
import Link from 'next/link';
import { useState, FormEvent } from 'react';

// ScrollReveal wrapper component
function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, isIntersecting] = useScrollReveal();

  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const baseClass = `scroll-reveal${isIntersecting ? ' revealed' : ''}${delayClass}`;

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    const formData = new FormData(e.currentTarget);
    const errors: {[key: string]: string} = {};

    if (!formData.get('name')?.toString().trim()) {
      errors.name = 'Kun je je naam invullen? Dan weet ik met wie ik spreek.';
    }
    if (!formData.get('email')?.toString().trim()) {
      errors.email = 'Kun je dit veld nog even aanvullen? Dan kan ik je beter helpen.';
    }
    if (!formData.get('service')?.toString().trim()) {
      errors.service = 'Kun je aangeven waar je hulp bij nodig hebt?';
    }
    if (!formData.get('message')?.toString().trim()) {
      errors.message = 'Kun je kort beschrijven waar je tegenaan loopt?';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    // In production, this would send to a backend or service
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - matching homepage structure */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-6 text-balance">
            Neem <span className="text-white/70">contact op</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 leading-relaxed text-balance">
            Klaar om jouw technische uitdagingen aan te pakken? Plan een gratis intake of stuur een bericht.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {!formSubmitted ? (
        <>
          {/* Contact Form Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
              <ScrollReveal>
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12">

                    {/* 1️⃣ Microcopy above form */}
                    <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>In een korte intake bespreken we je situatie, doelen en context.</strong><br />
                        Je krijgt eerlijk advies — ook als dat betekent dat we niet samenwerken.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Intake formulier</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Company */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Naam *
                          </label>
                          <p className="text-xs text-gray-500 mb-2">Zodat ik weet met wie ik spreek.</p>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Je naam"
                          />
                          {formErrors.name && (
                            <p className="text-sm text-red-600 mt-1">{formErrors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Bedrijf (optioneel)
                          </label>
                          <p className="text-xs text-gray-500 mb-2">Handig om je context beter te begrijpen.</p>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Bedrijfsnaam"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mailadres *
                        </label>
                        <p className="text-xs text-gray-500 mb-2">Voor een korte terugkoppeling of voorstel.</p>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                          placeholder="naam@bedrijf.nl"
                        />
                        {formErrors.email && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>
                        )}
                      </div>

                      {/* Service Dropdown */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Waar kunnen we je bij helpen? *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className={`w-full px-4 py-2 border ${formErrors.service ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        >
                          <option value="">Selecteer een dienst</option>
                          <option value="fractional-cto">Fractional CTO / Technisch Advies</option>
                          <option value="it-consultancy">IT-consultancy & Applicatieadvies</option>
                          <option value="full-stack">Full-Stack Development</option>
                          <option value="projectmanagement">Projectmanagement</option>
                          <option value="product-consultatie">Product & Business Consultatie</option>
                          <option value="support-itsm">Support & IT-Servicemanagement</option>
                          <option value="research">Research & Documentatie</option>
                          <option value="anders">Anders</option>
                        </select>
                        {formErrors.service && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.service}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Bericht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                          placeholder="Beschrijf kort je situatie, vraag of uitdaging."
                        />
                        {formErrors.message && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.message}</p>
                        )}
                      </div>

                      {/* Optional fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                            Budgetrange (optioneel)
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Selecteer indien van toepassing</option>
                            <option value="< 2.500">€0 - €2.500</option>
                            <option value="2.500 - 5.000">€2.500 - €5.000</option>
                            <option value="5.000 - 10.000">€5.000 - €10.000</option>
                            <option value="10.000 - 25.000">€10.000 - €25.000</option>
                            <option value="> 25.000">€25.000+</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                            Tijdlijn (optioneel)
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Selecteer indien van toepassing</option>
                            <option value="asap">Z.s.m.</option>
                            <option value="1-2 weken">1-2 weken</option>
                            <option value="1-2 maanden">1-2 maanden</option>
                            <option value="3+ maanden">3+ maanden</option>
                            <option value="flexibel">Flexibel</option>
                          </select>
                        </div>
                      </div>

                      {/* Submit with microcopy below */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-accent hover:bg-warmOrange text-white font-semibold px-8 py-3 rounded-full text-base transition-colors"
                        >
                          Verstuur bericht
                        </button>
                        {/* Microcopy below submit button */}
                        <p className="text-xs text-gray-500 text-center mt-3">
                          Geen verplichtingen • Geen verkooppraat • Wel duidelijkheid
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Direct Contact Options */}
          <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <ScrollReveal>
                <header className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                    Of neem direct contact op
                  </h2>
                </header>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <ScrollReveal delay={100}>
                  <Link
                    href="mailto:info@digitechsolutions.nl"
                    className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">E-mail</h3>
                    <p className="text-sm text-gray-600">info@digitechsolutions.nl</p>
                  </Link>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <Link
                    href="tel:+31643983420"
                    className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Telefoon (op afspraak)</h3>
                    <p className="text-sm text-gray-600">+31 6 43983420</p>
                  </Link>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <Link
                    href="https://www.linkedin.com/in/subor-cheung-3baab21a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">LinkedIn</h3>
                    <p className="text-sm text-gray-600">Connect via LinkedIn</p>
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Thank You Message with updated microcopy */}
          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 text-center">
              <ScrollReveal>
                <div className="max-w-2xl mx-auto">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Dank je.
                  </h2>
                  <p className="text-gray-600 text-lg mb-4">
                    Ik neem meestal binnen één werkdag contact met je op.
                  </p>
                  {/* Phone option for urgent cases */}
                  <p className="text-sm text-gray-500 mb-8">
                    Heb je haast? Dan mag je ook bellen: <a href="tel:+31643983420" className="text-techOrange hover:underline font-medium">+31 6 43983420</a> (op afspraak)
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/"
                      className="bg-accent hover:bg-warmOrange text-white font-semibold px-8 py-3 rounded-full text-base"
                    >
                      Terug naar home
                    </Link>
                    <Link
                      href="/diensten"
                      className="border-2 border-deepBlue text-slate-900 hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full text-base transition-all"
                    >
                      Bekijk diensten
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

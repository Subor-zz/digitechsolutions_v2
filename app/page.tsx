'use client';

import Link from 'next/link';
import Navigation from './components/navigation';
import Footer from './components/footer';
import ScrollToTop from './components/scroll-to-top';

// Service data - new positioning
const servicesData = [
  {
    id: 'technical-strategy',
    title: 'IT Consultancy & Technical Strategy',
    slug: '/diensten/technical-strategy',
    shortDescription: 'Architectuurreview, technische roadmap, stack evaluatie en strategische besluitvorming voor schaalbare groei.',
    icon: 'explore',
    accent: 'from-blue-400 to-primary',
    points: ['Architectuurreview & advies', 'Technische roadmap planning', 'Stack evaluatie & keuzes'],
  },
  {
    id: 'cto-sparring',
    title: 'CTO-Level Sparring',
    slug: '/diensten/cto-sparring',
    shortDescription: 'Strategische reflectie en second opinion voor bestaande tech leads en founders die een klankbord nodig hebben.',
    icon: 'psychology',
    accent: 'from-emerald-400 to-emerald-600',
    points: ['Strategisch klankbord', 'Second opinion bij beslissingen', 'Onafhankelijke reflectie'],
  },
  {
    id: 'technical-audit',
    title: 'Technische Audit & Due Diligence',
    slug: '/diensten/technical-audit',
    shortDescription: 'Onafhankelijke analyse van codebase, schaalbaarheid en risico\'s bij overnames, investeringen of before-scale.',
    icon: 'fact_check',
    accent: 'from-purple-400 to-purple-600',
    points: ['Codebase analyse', 'Schaalbaarheid assessment', 'Risico-inventarisatie'],
  },
];

// Problem scenarios
const problemsData = [
  {
    icon: 'warning',
    title: 'Complex wordende codebase',
    description: 'De codebase wordt complexer en moeilijker onderhoudbaar',
  },
  {
    icon: 'route',
    title: 'Ontbrekende roadmap',
    description: 'Er ontbreekt een duidelijke technische roadmap',
  },
  {
    icon: 'trending_down',
    title: 'Niet-schaalbare architectuur',
    description: 'De architectuur schaalt niet mee met groei',
  },
  {
    icon: 'shuffle',
    title: 'Ad-hoc beslissingen',
    description: 'Beslissingen worden ad-hoc genomen',
  },
];

// Approach steps
const approachData = [
  {
    number: '01',
    title: 'Analyse',
    description: 'We brengen de huidige technische situatie in kaart: architectuur, team, stack en risico\'s.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Strategie',
    description: 'We definiëren een realistische roadmap en prioriteiten die aansluiten bij de groeifase.',
    icon: 'map',
  },
  {
    number: '03',
    title: 'Begeleiding',
    description: 'Ik ondersteun bij besluitvorming, evaluaties en technische keuzes waar nodig.',
    icon: 'support_agent',
  },
];

// Target audience
const audienceData = [
  {
    icon: 'rocket_launch',
    title: 'Startups in groei',
    description: 'Die willen opschalen zonder technische chaos',
  },
  {
    icon: 'trending_up',
    title: 'Scale-ups',
    description: 'Zonder senior technische strategie aan boord',
  },
  {
    icon: 'person',
    title: 'Founders',
    description: 'Zonder technische achtergrond',
  },
  {
    icon: 'block',
    title: 'Bedrijven',
    description: 'Die vastlopen op technische keuzes',
  },
];

// Spotlight Card Component
function SpotlightCard({ service, onNavigate }: { service: typeof servicesData[0]; onNavigate: (slug: string) => void }) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={() => onNavigate(service.slug)}
      className="spotlight-card group relative bg-white p-10 rounded-[3rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(17,82,212,0.06)] hover:-translate-y-2 flex flex-col overflow-hidden cursor-pointer"
    >
      <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm relative z-10`}>
        <span className="material-icons text-3xl">{service.icon}</span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight relative z-10 text-left">{service.title}</h3>
      <p className="text-slate-500 mb-10 leading-relaxed font-medium relative z-10 text-left">
        {service.shortDescription}
      </p>

      <div className="mt-auto pt-8 border-t border-slate-100 relative z-10">
        <ul className="space-y-4">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-600 group-hover:text-slate-500 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-all group-hover:scale-125"></div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Import React for useRef
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-to-br from-primary via-primary to-[#0a3d9c]">
          {/* Animated blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[12px] font-bold tracking-widest uppercase mb-10 backdrop-blur-xl opacity-0 animate-fade-in shadow-2xl">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Nu beschikbaar voor nieuwe projecten
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
                IT Consultancy & <br className="hidden lg:block" />
                <span className="text-white/80">Technical Strategy</span>
              </h1>

              {/* Hero Subtitle */}
              <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-6 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
                Voor groeiende bedrijven
              </p>

              <p className="max-w-3xl mx-auto text-base lg:text-lg text-blue-100/70 font-normal mb-12 opacity-0 animate-fade-in-up animation-delay-300 leading-relaxed text-balance">
                Strategische technische begeleiding voor founders en teams die willen opschalen zonder architectuurfouten, technische schuld of verkeerde keuzes.
              </p>

              {/* Short intro */}
              <p className="max-w-2xl mx-auto text-blue-50/60 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-400 text-sm">
                Ik help startups en scale-ups bij het maken van technische beslissingen die schaalbaar, realistisch en toekomstbestendig zijn — van architectuurreview tot roadmap en teambegeleiding.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up animation-delay-500">
                <a
                  href="mailto:info@digitechsolutions.nl?subject=Strategische%20Intake"
                  className="shimmer-btn animate-shimmer text-white text-lg px-12 py-5 rounded-[1.25rem] font-bold shadow-[0_20px_60px_rgba(245,158,11,0.4)] w-full sm:w-auto hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center justify-center"
                >
                  Plan een strategische intake
                </a>
                <a
                  href="#aanpak"
                  className="px-10 py-5 rounded-[1.25rem] text-white font-bold border-2 border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto text-center"
                >
                  Bekijk mijn aanpak
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 via-40% to-transparent"></div>
        </section>

        {/* Problem Section - Herkenbaarheid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Probleem</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
                Wanneer techniek je groei vertraagt
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Veel bedrijven lopen niet vast op ideeën, maar op technische keuzes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {problemsData.map((problem, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-red-500 mb-6 shadow-sm transition-colors">
                    <span className="material-icons text-3xl">{problem.icon}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">{problem.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-10 lg:p-14 text-center">
              <p className="text-white/90 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                Zonder duidelijke technische strategie ontstaan technische schuld, vertraging en onnodige kosten.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Oplossing</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
                Heldere technische richting
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Digitech Solutions biedt IT consultancy en technische strategie voor bedrijven die:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {[
                'Willen groeien zonder instabiele systemen',
                'Strategische technische beslissingen moeten nemen',
                'Externe, onafhankelijke reflectie nodig hebben',
                'Hun architectuur willen laten reviewen',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">check</span>
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                Ik werk als strategische sparringpartner voor founders, tech leads en teams.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 text-lg text-slate-600">
                <span className="font-medium text-slate-400">Geen over-engineering.</span>
                <span className="font-medium text-slate-400">Geen buzzwords.</span>
                <span className="font-bold text-primary">Wel doordachte keuzes.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl text-left">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Diensten</span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter leading-[1.1]">
                  IT Consultancy & <span className="text-primary">Technical Strategy</span>
                </h2>
                <p className="mt-6 text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                  Architectuurreview, technische roadmap, stack evaluatie en besluitvorming.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <SpotlightCard
                  key={service.id}
                  service={service}
                  onNavigate={(slug) => (window.location.href = slug)}
                />
              ))}
            </div>

            {/* View all services CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/diensten"
                className="inline-flex items-center gap-3 text-base font-bold text-primary hover:text-accent transition-colors group"
              >
                Bekijk alle diensten
                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Approach Section - Aanpak */}
        <section id="aanpak" className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Aanpak</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
                Hoe ik werk
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {approachData.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-6xl font-black text-slate-100">{step.number}</span>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="material-icons text-primary text-2xl">{step.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                  {index < approachData.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-slate-200">
                      <span className="material-icons text-4xl">arrow_forward</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voor Wie Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Voor Wie</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
                Ik help diverse bedrijven
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audienceData.map((audience, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-6 shadow-sm transition-all">
                    <span className="material-icons text-3xl">{audience.icon}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">{audience.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Positioning Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
              Positionering
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight">
              CTO-denkniveau zonder politieke ballast
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Soms is een fulltime CTO te vroeg.<br />
              Soms is alleen development niet genoeg.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-10 lg:p-14 border border-white/10">
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Digitech Solutions biedt strategische technische begeleiding op senior niveau, zonder de verplichtingen van een fulltime executive rol.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Start Vandaag</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
              Klaar om je technische strategie helder te krijgen?
            </h2>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              In een vrijblijvend gesprek leren we elkaar kennen en kijken we of er een klik is.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:info@digitechsolutions.nl?subject=Strategische%20Intake"
                className="shimmer-btn animate-shimmer text-white text-lg px-12 py-5 rounded-[1.25rem] font-bold shadow-[0_20px_60px_rgba(245,158,11,0.4)] w-full sm:w-auto hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center justify-center"
              >
                Plan een strategische intake
              </a>
              <Link
                href="/contact"
                className="px-10 py-5 rounded-[1.25rem] text-slate-700 font-bold border-2 border-slate-200 hover:border-primary hover:text-primary transition-all w-full sm:w-auto text-center"
              >
                Of neem direct contact op
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm mt-12">
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">check_circle</span>
                <span>9+ Jaar IT-ervaring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">check_circle</span>
                <span>11 Jaar Finance & Banking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">check_circle</span>
                <span>Remote-First, EU-gebaseerd</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

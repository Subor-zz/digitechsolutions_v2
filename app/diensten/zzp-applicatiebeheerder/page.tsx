'use client';

import { useScrollReveal } from '../../components/scroll-reveal';
import FAQSection, { FAQSchema } from '../../components/faq-section';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'ZZP Applicatiebeheerder | Digitech Solutions',
  description: 'Ervaren ZZP applicatiebeheerder voor stabiele bedrijfsapplicaties. Inzetbaar voor interim beheer, incidentafhandeling en optimalisatie.',
  keywords: [
    'ZZP applicatiebeheerder',
    'applicatiebeheerder ZZP',
    'interim applicatiebeheerder',
    'applicatiebeheer',
    'ITIL applicatiebeheer',
    'incidentbeheer',
    'applicatie monitoring',
    'release management',
    'ZZP IT specialist'
  ],
  alternates: {
    canonical: 'https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder',
  },
  openGraph: {
    title: 'ZZP Applicatiebeheerder | Digitech Solutions',
    description: 'Ervaren ZZP applicatiebeheerder voor stabiele bedrijfsapplicaties. Inzetbaar voor interim beheer, incidentafhandeling en optimalisatie.',
    url: 'https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder',
  },
};

// FAQ Schema for structured data
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat kost een ZZP applicatiebeheerder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De tarieven voor een ZZP applicatiebeheerder variëren afhankelijk van de complexiteit van de applicaties, de benodigde expertise en de duur van de opdracht. Neem contact op voor een maatwerkopgave op basis van jouw situatie."
      }
    },
    {
      "@type": "Question",
      "name": "Werk je volgens ITIL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, ik werk volgens ITIL-best practices voor incidentmanagement, changemanagement en probleemmanagement. Dit zorgt voor een gestructureerde aanpak en professionele documentatie van alle beheeractiviteiten."
      }
    },
    {
      "@type": "Question",
      "name": "Ben je inzetbaar op locatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ik ben flexibel inzetbaar, zowel op locatie als remote. Afhankelijk van de wensen en de aard van het werk kan er een hybride vorm van samenwerking worden afgesproken."
      }
    },
    {
      "@type": "Question",
      "name": "Kun je samenwerken met interne teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absoluut. Ik heb ervaring met het integreren in bestaande teams en werk graag samen met functioneel beheerders, developers en andere stakeholders. De focus ligt op kennisoverdracht en het versterken van het team."
      }
    }
  ]
};

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; }) {
  const [ref, isIntersecting] = useScrollReveal();
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const baseClass = `scroll-reveal reveal-pending${isIntersecting ? ' revealed' : ''}${delayClass}`;
  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

const faqs: { question: string; answer: string; }[] = [
  {
    question: 'Wat kost een ZZP applicatiebeheerder?',
    answer: 'De tarieven voor een ZZP applicatiebeheerder variëren afhankelijk van de complexiteit van de applicaties, de benodigde expertise en de duur van de opdracht. Neem contact op voor een maatwerkopgave op basis van jouw situatie.'
  },
  {
    question: 'Werk je volgens ITIL?',
    answer: 'Ja, ik werk volgens ITIL-best practices voor incidentmanagement, changemanagement en probleemmanagement. Dit zorgt voor een gestructureerde aanpak en professionele documentatie van alle beheeractiviteiten.'
  },
  {
    question: 'Ben je inzetbaar op locatie?',
    answer: 'Ik ben flexibel inzetbaar, zowel op locatie als remote. Afhankelijk van de wensen en de aard van het werk kan er een hybride vorm van samenwerking worden afgesproken.'
  },
  {
    question: 'Kun je samenwerken met interne teams?',
    answer: 'Absoluut. Ik heb ervaring met het integreren in bestaande teams en werk graag samen met functioneel beheerders, developers en andere stakeholders. De focus ligt op kennisoverdracht en het versterken van het team.'
  }
];

export default function ZZPApplicatiebeheerderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 block opacity-0 animate-fade-in">
            ZZP Applicatiebeheer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ZZP Applicatiebeheerder voor stabiele en betrouwbare applicaties
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Als ervaren ZZP applicatiebeheerder breng ik rust en structuur in jouw applicatielandschap. Interim inzetbaar met focus op continuïteit, stabiliteit van bedrijfskritische applicaties en voorspelbare beheerprocessen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Beschikbaarheid bespreken
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Vraag CV op
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wat doet een ZZP Applicatiebeheerder? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat doet een ZZP Applicatiebeheerder?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Een applicatiebeheerder zorgt ervoor dat jouw bedrijfsapplicaties stabiel, veilig en beschikbaar blijven. Mijn focus ligt op technische continuïteit volgens ITIL-principles.
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Incident- en probleembeheer', desc: 'Snelle diagnose en oplossing van storingen volgens ITIL incidentmanagement processen.' },
                { title: 'Monitoring van applicaties', desc: 'Proactieve bewaking van applicatieperformance en beschikbaarheid.' },
                { title: 'Release ondersteuning', desc: 'Gestructureerde uitrol van updates en nieuwe versies met minimale downtime.' },
                { title: 'Configuratiebeheer', desc: 'Beheer van applicatieconfiguraties en omgevingsvariabelen.' },
                { title: 'Gebruikersbeheer', desc: 'Toegangsrechten, rollen en gebruikersadministratie.' },
                { title: 'Performance analyse', desc: 'Identificeren en verhelpen van performance-gerelateerde issues.' },
                { title: 'Documentatie en procesverbetering', desc: 'Up-to-date documentatie en continue verbetering van beheerprocessen.' },
                { title: 'Samenwerking met functioneel beheer en development teams', desc: 'Korte lijnen met zowel business als technisch voor optimale oplossingen.' }
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">{index + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wanneer heb je een ZZP Applicatiebeheerder nodig? */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ZZP Applicatiebeheerder nodig?
              </h2>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: '⚠️',
                  title: 'Applicaties veroorzaken verstoringen',
                  desc: 'Frequente crashes, trage performance of onverwacht gedrag wijzen op gebrek aan structureel beheer.'
                },
                {
                  icon: '📋',
                  title: 'Gebrek aan structureel beheer',
                  desc: 'Applicaties draaien wel, maar er is geen duidelijke eigenaar of gestructureerd beheerproces.'
                },
                {
                  icon: '📄',
                  title: 'Achterstallige documentatie',
                  desc: 'Wanneer kennis niet is gedocumenteerd en afhankelijk is van één persoon.'
                },
                {
                  icon: '🔄',
                  title: 'Tijdelijke vervanging',
                  desc: 'Bij ziekte, verloop of tijdens vakantieperiodes van vaste medewerkers.'
                },
                {
                  icon: '📈',
                  title: 'Groei zonder beheerstructuur',
                  desc: 'Organisaties die groeien maar nog geen volwassen applicatiebeheerfunctie hebben.'
                },
                {
                  icon: '🚀',
                  title: 'Migratie of implementatie',
                  desc: 'Bij overgang naar nieuwe applicaties of during implementatietrajecten.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mijn aanpak */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mijn aanpak
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Een gestructureerde, praktische aanpak die resultaat oplevert.
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Analyse van huidige applicatieomgeving',
                  desc: 'Eerst breng ik de huidige situatie in kaart: welke applicaties zijn er, hoe zijn ze gekoppeld, wat zijn de knelpunten? Deze analyse vormt de basis voor een gericht verbeterplan.'
                },
                {
                  step: '02',
                  title: 'Stabiliseren en optimaliseren',
                  desc: 'Na de analyse pakken we de meest kritische issues aan. We richten monitoring in, stellen prioriteiten en voeren structurele verbeteringen door om stabiliteit te waarborgen.'
                },
                {
                  step: '03',
                  title: 'Structurele borging en overdracht',
                  desc: 'Tot slot zorgen we voor duurzame borging: documentatie, processen en kennisoverdracht zodat de organisatie zelfstandig verder kan, of met minimale begeleiding.'
                }
              ].map((item, index) => (
                <div key={index} className={`flex gap-6 ${index !== 2 ? 'pb-12' : ''}`}>
                  <div className="flex-shrink-0">
                    <span className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Verschil tussen Applicatiebeheer en Functioneel Beheer */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Verschil tussen Applicatiebeheer en Functioneel Beheer
              </h2>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-blue-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Applicatiebeheer (Technisch)</h3>
                </div>
                <p className="text-slate-600 mb-4">Focus op de technische kant van applicaties:</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Incidenten oplossen en technische oorzaken analyseren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Configuraties en parameters beheren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Releases en updates uitrollen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Performance en security monitoren</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Functioneel Beheer</h3>
                </div>
                <p className="text-slate-600 mb-4">Focus op de business kant van applicaties:</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Brongebruikers ondersteunen en trainen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Functionele eisen vertalen naar specificaties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Beheer van workflows en processen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Business requirements en verandermanagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 text-center">
              <p className="text-slate-600 mb-4">Voor een compleet overzicht van mijn diensten:</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/diensten/zzp-functioneel-beheerder" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-medium transition-colors">
                  <span>ZZP Functioneel Beheerder</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/diensten/support-itsm" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-medium transition-colors">
                  <span>Support & ITSM</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Samenwerking en inzetbaarheid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Samenwerking en inzetbaarheid
              </h2>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Inzetvormen
                </h3>
                <ul className="space-y-3">
                  {[
                    'Interim: tijdelijke vervanging of versterking',
                    'Projectmatig: specifieke implementaties of migraties',
                    'Tijdelijke vervanging: bij ziekte of vakantie',
                    'Ad-hoc: bij acute incidenten of verstoringen'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Organisaties
                </h3>
                <ul className="space-y-3">
                  {[
                    'MKB: no-nonsense aanpak met direct resultaat',
                    'Grotere organisaties: ervaren senior inzetbaarheid',
                    'Onsite: werkzaam op locatie bij de klant',
                    'Remote: hybride of volledig op afstand mogelijk'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Veelgestelde vragen
              </h2>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto">
              <FAQSection faqs={faqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSchema faqs={faqs} />

      {/* Call to Action */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Op zoek naar een betrouwbare ZZP applicatiebeheerder?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Neem contact op om de mogelijkheden te bespreken. Ik denk graag mee over de stabiliteit en continuïteit van jouw applicaties.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Beschikbaarheid bespreken
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                Vraag CV op
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

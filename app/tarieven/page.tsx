'use client';

import { useScrollReveal } from '../components/scroll-reveal';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';
import Link from 'next/link';
import { useState } from 'react';

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

const pricing = [
  {
    service: "ZZP Applicatiebeheerder",
    model: "Maandelijkse retainer of uurtarief",
    rate: "€100 – €150 / uur",
    context: "Inclusief incident- en change management"
  },
  {
    service: "ZZP Functioneel Beheerder",
    model: "Maandelijkse retainer of uurtarief",
    rate: "€100 – €150 / uur",
    context: "Brug tussen business en IT, requirements en UAT"
  },
  {
    service: "IT Support & ITSM",
    model: "Maandelijkse retainer",
    rate: "€1.500 – €3.000 / maand",
    context: "Inclusief vaste responstijden en prioritering"
  },
  {
    service: "Full Stack Developer",
    model: "Vaste prijs of dagtarief",
    rate: "€750 – €1.000 / dag",
    context: "Scope en doorlooptijd bepalend"
  },
  {
    service: "IT Project Manager",
    model: "Maandelijkse retainer of per project",
    rate: "€3.000 – €6.000 / maand",
    context: "Afhankelijk van complexiteit en stakeholderaantal"
  },
  {
    service: "Productconsultatie & Technische Validatie",
    model: "Per opdracht of uurtarief",
    rate: "€100 – €150 / uur",
    context: "Voor validatie vóór ontwikkeling"
  },
];

const collaborationForms = [
  {
    icon: "🟦",
    title: "Quickscan / adviestraject",
    subtitle: "Voor situaties wherein snel duidelijkheid nodig is.",
    suitableFor: [
      "technische of productmatige vraagstukken",
      "second opinion of validatie",
      "risico- of haalbaarheidsanalyse"
    ],
    features: [
      "vaste scope",
      "korte doorlooptijd",
      "concreet advies of rapportage"
    ],
    note: "Vaak ingezet vóór een groter traject of project."
  },
  {
    icon: "🟦",
    title: "Retainer (maandelijks)",
    subtitle: "Voor structurele betrokkenheid en continuïteit.",
    suitableFor: [
      "applicatiebeheer en functioneel beheer",
      "technisch projectmanagement",
      "support & ITSM"
    ],
    features: [
      "vaste maandelijkse investering",
      "voorspelbaarheid in capaciteit",
      "korte lijnen en prioriteit"
    ],
    note: "Ideaal voor ZZP inzetbaarheid met flexibele beschikbaarheid."
  },
  {
    icon: "🟦",
    title: "Project / vaste prijs",
    subtitle: "Voor afgebakende trajecten met duidelijke deliverables.",
    suitableFor: [
      "softwareontwikkeling",
      "productvalidatie",
      "research & documentatie"
    ],
    features: [
      "vooraf gedefinieerde scope",
      "vaste prijsafspraak",
      "heldere oplevermomenten"
    ],
    note: "Geen open eind, wel duidelijke afspraken."
  }
];

const included = [
  "intake en afstemming vooraf",
  "duidelijke scope en verwachtingen",
  "professionele documentatie",
  "transparante communicatie"
];

const notIncluded = [
  "spoedwerk buiten afspraken",
  "24/7 beschikbaarheid (tenzij overeengekomen)",
  "onbeperkte iteraties buiten scope"
];

// Tooltip component
function Tooltip({ content }: { content: string }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <button
        className="text-gray-400 hover:text-gray-600 cursor-help text-xs"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Meer informatie"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </button>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default function TarievenPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 text-balance">
            Tarieven &<br className="hidden lg:block" />
            <span className="text-white/70">samenwerkingsvormen</span>
          </h1>
          <p className="text-lg lg:text-xl text-blue-50/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            De dienstverlening van Digitech Solutions is flexibel inzetbaar en afgestemd op de fase en complexiteit van jouw organisatie.
            Onderstaande tarieven zijn richtprijzen ter indicatie.
          </p>
          <p className="text-xl font-semibold text-accent">
            Geen verrassingen achteraf — wél maatwerk.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Samenwerkingsvormen */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Samenwerkingsvormen
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-8">
            {collaborationForms.map((form, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-deepBlue to-midBlue p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{form.icon}</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{form.title}</h3>
                        <p className="text-blue-100 mt-1">{form.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Geschikt voor */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          Geschikt voor
                        </h4>
                        <ul className="space-y-2">
                          {form.suitableFor.map((item, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Kenmerken */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          Kenmerken
                        </h4>
                        <ul className="space-y-2">
                          {form.features.map((feature, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Note */}
                    {form.note && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <span>👉</span>
                          <span>{form.note}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Richtprijzen Table */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Richtprijzen per dienst
              </h2>
            </header>
          </ScrollReveal>

          {/* 1️⃣ Microcopy above the table */}
          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-gray-700 text-center leading-relaxed">
                <strong>Onderstaande bedragen zijn richtprijzen ter indicatie.</strong><br />
                De uiteindelijke investering hangt af van scope, verantwoordelijkheden en gewenste betrokkenheid.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full" role="table" aria-label="Dienst tarieven">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left font-semibold">Dienst</th>
                      <th scope="col" className="px-6 py-4 text-left font-semibold">Model</th>
                      <th scope="col" className="px-6 py-3 text-right font-semibold">
                        Richtprijs
                        {/* 2️⃣ Microcopy under Richtprijs column */}
                        <span className="block text-xs font-normal text-blue-200 mt-1">
                          Indicatief, afhankelijk van scope
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {pricing.map((item, index) => (
                      <tr key={index} className={`transition-all duration-200 ${index % 2 === 0 ? "bg-gray-50 hover:bg-blue-50" : "bg-white hover:bg-blue-50"}`}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.service}
                          {/* 3️⃣ Tooltip with context per service */}
                          <Tooltip content={item.context} />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.model}</td>
                        <td className="px-6 py-4 text-sm text-right font-semibold text-slate-900">{item.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* 4️⃣ Microcopy under the table */}
          <ScrollReveal delay={300}>
            <div className="max-w-4xl mx-auto mt-6 p-5 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                Deze tarieven zijn bedoeld om een realistische verwachting te schetsen.<br />
                In de praktijk werken we vrijwel altijd met een duidelijke scope en afspraken vooraf.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wat is inbegrepen */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat is inbegrepen (en wat niet)
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Altijd inbegrepen */}
            <ScrollReveal delay={100}>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  Altijd inbegrepen
                </h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="text-sm text-green-900 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Niet standaard inbegrepen */}
            <ScrollReveal delay={200}>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h3 className="font-bold text-lg text-amber-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">–</span>
                  Niet standaard inbegrepen
                </h3>
                <ul className="space-y-3">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="text-sm text-amber-900 flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
              Dit voorkomt ruis en zorgt voor een gezonde samenwerking.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Twijfel over de juiste vorm */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Twijfel over de juiste vorm of investering?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                In een korte intake bespreken we:
              </p>
              <ul className="text-gray-600 space-y-2 mb-8 max-w-md mx-auto">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  je situatie en doelen
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  wat logisch is qua aanpak
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  welke samenwerkingsvorm het beste past
                </li>
              </ul>
              <p className="text-gray-700 mb-8">
                Zo weet je snel of er een goede fit is — inhoudelijk én financieel.
              </p>

              {/* 5️⃣ Microcopy before CTA */}
              <p className="text-sm text-gray-500 mb-6 italic">
                Twijfel je welke dienst of samenwerkingsvorm past?<br />
                In een korte intake maken we dit meestal binnen 15 minuten duidelijk.
              </p>

              {/* 6️⃣ Updated CTA with subtext */}
              <div className="flex flex-col items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-accent hover:bg-warmOrange text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  👉 Bespreek jouw situatie
                </Link>
                <p className="text-sm text-gray-500">
                  We kijken samen of er een inhoudelijke en financiële fit is.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

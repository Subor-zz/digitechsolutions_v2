'use client';

import { useScrollReveal } from '../components/scroll-reveal';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';
import Link from 'next/link';

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

const timeline = [
  {
    period: "2017 – 2023",
    title: "Service Desk Expert",
    description: "IT servicemanagement, incidentafhandeling, escalatiemanagement, ITIL-praktijken, eindgebruikerssupport, SLA-beheer, root cause analyse, kennis van enterprise IT-landschap.",
  },
  {
    period: "2023 – 2025",
    title: "Application Consultant",
    description: "Softwareselectie & implementatie, requirement gathering, stakeholdermanagement, gap analyse, changemanagement, user adoption, integratieconsultatie, bedrijfsprocesoptimalisatie.",
  },
  {
    period: "2025 – Heden",
    title: "Onafhankelijk Consultant & Developer",
    description: "Fractional CTO werkzaamheden, full-stack ontwikkeling, projectmanagement, productconsultatie, AI-versterkte levering, startup advies, end-to-end productontwikkeling.",
  },
];

const skills = [
  { category: "Frontend", items: "React · Next.js · TypeScript · HTML/CSS · Tailwind" },
  { category: "Backend", items: "Node.js · Python · REST APIs · Database design" },
  { category: "Mobile", items: "React Native · Expo" },
  { category: "Game Dev", items: "Godot 4 (GDScript) · Phaser.js" },
  { category: "DevOps", items: "Git · GitHub Actions · CI/CD · Linux" },
  { category: "AI Tooling", items: "Cursor · Claude Code · AI-augmented development workflows" },
  { category: "Project Tools", items: "Asana · Jira · Notion · Linear · GitHub Projects" },
  { category: "Methodology", items: "Agile · Scrum · ITIL · Kanban" },
];

const waarden = [
  {
    title: "Strategisch inzicht",
    description: "Ik begrijp niet alleen de technologie, maar ook het bedrijfscontext en strategische doelen.",
    icon: "🎯"
  },
  {
    title: "Praktische uitvoering",
    description: "Theorie is belangrijk, maar resultaat komt van doen. Ik lever concrete, werkende oplossingen.",
    icon: "⚙️"
  },
  {
    title: "Transparante communicatie",
    description: "Duidelijkheid over verwachtingen, voortgang en uitdagingen. Geen verrassingen.",
    icon: "💬"
  },
  {
    title: "Lange termijn focus",
    description: "Schaalbare architectuur en processen die meegroeien met je organisatie.",
    icon: "📈"
  }
];

export default function OverMijPage() {
  return (
    <>
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
          <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Over Subor Cheung
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Fractional CTO, full-stack developer en projectmanager met 9+ jaar IT-ervaring en 11 jaar finance-achtergrond.
              Strategisch én hands-on, voor startups en MKB.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Wie is Subor Cheung */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-sm">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Wie is Subor Cheung?</h2>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Ik ben <strong>Subor Cheung</strong>: fractional CTO, IT-consultant, full-stack developer en projectmanager met
                      9+ jaar ervaring in IT-consultancy en 11 jaar in de finance- en bankensector. Gevestigd in Breda,
                      actief voor startups en MKB-bedrijven door heel Nederland en de EU.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mijn unieke achtergrond in zowel IT als finance geeft me een bredere kijk op technische
                      projecten. Ik begrijp niet alleen hoe je software bouwt, maar ook waarom bedrijven het nodig
                      hebben en hoe het bijdraagt aan bedrijfsdoelen.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mijn aanpak combineert strategisch inzicht met praktische uitvoering. Ik werk hands-on mee
                      aan development, adviseer over architectuur en roadmap, en help teams om efficiënter te werken.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Remote-first, flexibel en resultaatgericht — van MVP-ontwikkeling tot fractional CTO-diensten.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-gray-200">
                    {[
                      { label: "IT-ervaring", value: "9+ Jaar" },
                      { label: "Finance ervaring", value: "11 Jaar" },
                      { label: "Locatie", value: "Breda, NL" },
                      { label: "Werkgebied", value: "EU- breed" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">{item.value}</div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ervaring in IT en finance */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Ervaring in IT en finance
                </h2>
                <p className="text-darkGray max-w-2xl mx-auto">
                  Een unieke combinatie van technische expertise en bedrijfskundig inzicht
                </p>
              </header>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              <ol className="space-y-8" role="list">
                {timeline.map((item, index) => (
                  <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                    <li className="relative pl-8 border-l-2 border-midBlue">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                      <time className="inline-block text-sm font-semibold text-azureBlue mb-1">
                        {item.period}
                      </time>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Mijn Aanpak */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Mijn aanpak
                </h2>
                <p className="text-darkGray max-w-2xl mx-auto">
                  Waarom klanten samenwerken met Digitech Solutions
                </p>
              </header>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {waarden.map((item, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technische Expertise */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Technische Expertise
                </h2>
                <p className="text-darkGray max-w-2xl mx-auto">
                  Technologischeën en methodieken waarmee ik werk
                </p>
              </header>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4" role="list">
              {skills.map((skill, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800}>
                  <article className="flex items-start gap-4 p-4 rounded-lg bg-white hover:bg-blue-50 transition-colors">
                    <div className="w-28 flex-shrink-0">
                      <dt className="font-bold text-slate-900 text-sm">{skill.category}</dt>
                    </div>
                    <dd className="flex-1">
                      <p className="text-sm text-gray-700">{skill.items}</p>
                    </dd>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-deepBlue via-midBlue to-azureBlue">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Laten we samenwerken
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Klaar om jouw technische uitdagingen aan te pakken? Plan een gratis intake en ontdek hoe ik kan helpen.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-accent hover:bg-warmOrange text-white font-semibold px-8 py-3 rounded-full text-base"
                >
                  Plan een gratis intake
                </Link>
                <Link
                  href="/diensten"
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-3 rounded-full text-base transition-all duration-200"
                >
                  Bekijk diensten
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

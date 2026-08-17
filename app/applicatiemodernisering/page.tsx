import type { Metadata } from "next";

import { ServicePage } from "@/components/rebrand/ServicePage";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://digitechsolutions.nl/applicatiemodernisering#service",
    name: "Applicatiemodernisering",
    serviceType: "Applicatiemodernisering",
    url: "https://digitechsolutions.nl/applicatiemodernisering",
    description: "Bepaal gericht wat aan verouderde of moeilijk aanpasbare bedrijfssoftware moet worden behouden, verbeterd of vervangen.",
    provider: { "@id": "https://digitechsolutions.nl/#organization" },
    areaServed: ["Nederland", "België"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Directie-, operations- en IT-verantwoordelijken bij mkb-bedrijven en scale-ups",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://digitechsolutions.nl/" },
      { "@type": "ListItem", position: 2, name: "Applicatiemodernisering", item: "https://digitechsolutions.nl/applicatiemodernisering" },
    ],
  },
] as const;

export const metadata: Metadata = { title: "Applicatiemodernisering", description: "Bepaal gericht wat aan verouderde of moeilijk aanpasbare bedrijfssoftware moet worden behouden, verbeterd of vervangen.", alternates: { canonical: "/applicatiemodernisering" } };

export default function ApplicationModernizationPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><ServicePage kicker="Applicatiemodernisering" title="Maak belangrijke software weer beheersbaar en aanpasbaar." intro="We onderzoeken welke onderdelen waardevol blijven en waar aanpassen, koppelen, vervangen of opnieuw bouwen verstandiger is." situations={["Kleine wijzigingen zijn risicovol of onverwacht duur.", "Integraties en afhankelijkheden zijn onvoldoende zichtbaar.", "De applicatie ondersteunt het huidige bedrijfsproces niet meer goed.", "Continuïteit hangt af van verouderde techniek of één kennisdrager."]} approach={[{ title: "Functie en risico", description: "We beginnen bij het bedrijfsproces, de gebruikers en wat er niet mag uitvallen." }, { title: "Technische werkelijkheid", description: "Architectuur, data, integraties, beheer en testbaarheid worden op hoofdlijnen onderzocht." }, { title: "Gefaseerde keuze", description: "Behouden, verbeteren en vervangen worden bewust tegen elkaar afgewogen." }]} deliverables={["Een overzicht van applicatie, data en belangrijkste afhankelijkheden.", "Risico's, aannames en ontbrekende kennis.", "Een gefaseerde moderniseringsroute met beslismomenten.", "Een afgebakende eerste uitvoeringsstap met acceptatiecriteria."]} boundary="Een volledige herbouw is nooit automatisch het vertrekpunt en wordt niet geadviseerd zonder analyse van proces, data, risico en continuïteit." /></>;
}

import type { Metadata } from "next";

import { ServicePage } from "@/components/rebrand/ServicePage";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://digitechsolutions.nl/workflowmodernisering#service",
    name: "Workflowmodernisering",
    serviceType: "Workflowmodernisering",
    url: "https://digitechsolutions.nl/workflowmodernisering",
    description: "Vereenvoudig handmatige overdrachten, dubbele invoer en processen die niet meer met de organisatie meegroeien.",
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
      { "@type": "ListItem", position: 2, name: "Workflowmodernisering", item: "https://digitechsolutions.nl/workflowmodernisering" },
    ],
  },
] as const;

export const metadata: Metadata = { title: "Workflowmodernisering", description: "Vereenvoudig handmatige overdrachten, dubbele invoer en processen die niet meer met de organisatie meegroeien.", alternates: { canonical: "/workflowmodernisering" } };

export default function WorkflowModernizationPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><ServicePage kicker="Workflowmodernisering" title="Van handmatig herstelwerk naar een beheersbaar proces." intro="We brengen de werkwijze van begin tot eind in beeld, verwijderen onnodige stappen en bepalen waar automatisering daadwerkelijk waarde toevoegt." situations={["Dezelfde gegevens worden in meerdere systemen bijgehouden.", "Aanvragen bewegen via e-mail, spreadsheets en losse overdrachten.", "Uitzonderingen worden laat ontdekt of hebben geen duidelijke eigenaar.", "Meer omzet of klanten zorgen vooral voor meer handmatig werk."]} approach={[{ title: "Proces zichtbaar maken", description: "We volgen informatie, beslissingen en uitzonderingen door het volledige proces." }, { title: "Eerst vereenvoudigen", description: "Overbodige stappen en controles worden niet klakkeloos geautomatiseerd." }, { title: "Gericht uitvoeren", description: "We verbeteren overdrachten, koppelingen of automatisering binnen een afgebakende scope." }]} deliverables={["Een visuele kaart van het huidige proces.", "Knelpunten, risico's en afhankelijkheden met prioriteit.", "Een voorstel voor de kleinste zinvolle verbetering.", "Acceptatiecriteria, documentatie en overdracht bij uitvoering."]} boundary="Digitech automatiseert niet voordat duidelijk is wie eigenaar blijft van het proces en hoe uitzonderingen worden afgehandeld." /></>;
}

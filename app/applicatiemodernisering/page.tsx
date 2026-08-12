import type { Metadata } from "next";

import { ServicePage } from "@/components/rebrand/ServicePage";

export const metadata: Metadata = { title: "Applicatiemodernisering", description: "Bepaal gericht wat aan verouderde of moeilijk aanpasbare bedrijfssoftware moet worden behouden, verbeterd of vervangen.", alternates: { canonical: "/applicatiemodernisering" } };

export default function ApplicationModernizationPage() {
  return <ServicePage kicker="Applicatiemodernisering" title="Maak belangrijke software weer beheersbaar en aanpasbaar." intro="We onderzoeken welke onderdelen waardevol blijven en waar aanpassen, koppelen, vervangen of opnieuw bouwen verstandiger is." situations={["Kleine wijzigingen zijn risicovol of onverwacht duur.", "Integraties en afhankelijkheden zijn onvoldoende zichtbaar.", "De applicatie ondersteunt het huidige bedrijfsproces niet meer goed.", "Continuïteit hangt af van verouderde techniek of één kennisdrager."]} approach={[{ title: "Functie en risico", description: "We beginnen bij het bedrijfsproces, de gebruikers en wat er niet mag uitvallen." }, { title: "Technische werkelijkheid", description: "Architectuur, data, integraties, beheer en testbaarheid worden op hoofdlijnen onderzocht." }, { title: "Gefaseerde keuze", description: "Behouden, verbeteren en vervangen worden bewust tegen elkaar afgewogen." }]} deliverables={["Een overzicht van applicatie, data en belangrijkste afhankelijkheden.", "Risico's, aannames en ontbrekende kennis.", "Een gefaseerde moderniseringsroute met beslismomenten.", "Een afgebakende eerste uitvoeringsstap met acceptatiecriteria."]} boundary="Een volledige herbouw is nooit automatisch het vertrekpunt en wordt niet geadviseerd zonder analyse van proces, data, risico en continuïteit." />;
}

export type ModernizationRoute = {
  id: "workflow" | "application";
  title: string;
  statement: string;
  context: string;
  signals: readonly string[];
  visibleSignals: readonly string[];
  output: string;
  cta: string;
  ctaHref: "/probleemverkenning";
};

export type MethodStep = {
  id: "scope" | "map" | "simplify" | "build" | "verify" | "transfer";
  number: string;
  title: string;
  description: string;
  artifact: string;
};

const modernizationRoutes = [
  {
    id: "workflow",
    title: "Workflowmodernisering",
    statement: "Van handwerk naar een beheersbaar proces.",
    context: "We maken de procesroute zichtbaar en bepalen welke stappen eenvoudiger, beter verbonden of gecontroleerd geautomatiseerd kunnen worden. Daarbij leggen we uitzonderingen, overdrachten en eigenaarschap vast, zodat verbetering niet afhankelijk blijft van impliciete kennis.",
    signals: [
      "Informatie beweegt via inboxen, spreadsheets en losse overdrachten.",
      "Uitzonderingen worden te laat zichtbaar.",
      "Dezelfde gegevens worden op meerdere plekken bijgehouden.",
      "Proceskennis is afhankelijk van één persoon.",
    ],
    visibleSignals: [
      "Processtappen vereenvoudigen",
      "Overdrachten en controles automatiseren",
      "Systemen en databronnen koppelen",
    ],
    output: "Een duidelijke route met zichtbare controles, helder eigenaarschap en een overdraagbare werkwijze.",
    cta: "Start de probleemverkenning",
    ctaHref: "/probleemverkenning",
  },
  {
    id: "application",
    title: "Applicatiemodernisering",
    statement: "Van kwetsbare software naar een veranderbare applicatie.",
    context: "We onderzoeken architectuur, data, integraties en beheer om te bepalen wat kan blijven en wat gefaseerd moet worden vernieuwd. Zo ontstaat een realistische route die continuïteit beschermt en toekomstige wijzigingen beter voorspelbaar en beheersbaar maakt.",
    signals: [
      "Kleine wijzigingen zijn risicovol of disproportioneel duur.",
      "Integraties en afhankelijkheden zijn onvoldoende zichtbaar.",
      "Continuïteit hangt af van verouderde techniek of één kennisdrager.",
      "De applicatie ondersteunt het huidige proces niet meer goed.",
    ],
    visibleSignals: [
      "Architectuur en afhankelijkheden inzichtelijk maken",
      "Technische schuld gericht terugbrengen",
      "Integraties en datastromen verbeteren",
    ],
    output: "Een gefaseerde route die behoud, verbetering en vervanging bewust tegen elkaar afweegt.",
    cta: "Start de probleemverkenning",
    ctaHref: "/probleemverkenning",
  },
] as const satisfies readonly ModernizationRoute[];

const methodSteps = [
  { id: "scope", number: "01", title: "Scope", description: "We bepalen doel, probleemgebied, betrokkenen en randvoorwaarden.", artifact: "Een helder scopekader" },
  { id: "map", number: "02", title: "Map", description: "We brengen proces, data, systemen, risico en eigenaarschap samen.", artifact: "Een gedeeld beeld van de huidige situatie" },
  { id: "simplify", number: "03", title: "Simplify", description: "We verwijderen onnodige stappen voordat we automatiseren of bouwen.", artifact: "Een eenvoudiger ontwerp met bewuste keuzes" },
  { id: "build", number: "04", title: "Build", description: "We realiseren de afgebakende verbetering in controleerbare iteraties.", artifact: "Werkende software, integratie of workflowverbetering" },
  { id: "verify", number: "05", title: "Verify", description: "We toetsen functionaliteit, kwaliteit, risico en acceptatie.", artifact: "Aantoonbaar werkende en beheerbare verandering" },
  { id: "transfer", number: "06", title: "Transfer", description: "We documenteren besluiten, techniek en beheer en dragen kennis over.", artifact: "Een oplossing waarmee de organisatie verder kan" },
] as const satisfies readonly MethodStep[];

export const homepageCopy = {
  brand: { ariaLabel: "Digitech Solutions", firstLine: "Digitech", secondLine: "Solutions", homeHref: "/#top" },
  navigation: {
    skipLink: "Ga naar de hoofdinhoud",
    ariaLabel: "Hoofdnavigatie",
    mobileAriaLabel: "Mobiele navigatie",
    mobileOpen: "Navigatie",
    mobileClose: "Sluiten",
    links: [
      { href: "/#probleem", label: "Waar het vastloopt" },
      { href: "/#scan", label: "De scan" },
      { href: "/#routes", label: "Expertise" },
      { href: "/#werkwijze", label: "Werkwijze" },
      { href: "/#over-digitech", label: "Over Digitech" },
    ],
    primaryCta: { href: "/kennismaking", label: "Plan een kennismaking" },
  },
  hero: {
    kicker: "Workflow- en applicatiemodernisering",
    headline: "Laat verouderde processen en software je groei niet afremmen.",
    lead: "Dubbele invoer, handmatige overdrachten en moeilijk aanpasbare software kosten tijd en maken groei onnodig complex.",
    mobileLead: "Handmatig werk en moeilijk aanpasbare software remmen groei en verandering.",
    supporting: "Digitech Solutions brengt vastgelopen workflows en kwetsbare applicaties in kaart. Daarna verbeteren we gericht wat tijd, controle of schaalbaarheid in de weg zit — zonder automatisch alles opnieuw te bouwen.",
    primaryCta: { href: "/kennismaking", label: "Plan een kennismaking" },
    secondaryCta: { href: "#scan", label: "Bekijk de Modernization Scan" },
    founderTrustLine: "Van eerste analyse tot werkende oplossing, met één aanspreekpunt en duidelijke verantwoordelijkheid.",
    systemVisual: {
      caption: "Waar proces en techniek elkaar vertragen.",
      ariaLabel: "Workflow, data en applicatie komen samen in één beheersbare route.",
      fragments: [
        { label: "Workflow", text: "Handmatige overdrachten" },
        { label: "Data", text: "Meerdere versies" },
        { label: "Applicatie", text: "Moeilijk aanpasbaar" },
      ],
      decision: { label: "Gevolg", text: "Een groeiende backlog" },
      outcome: { label: "Richting", text: "Eén beheersbare route" },
      mobileSteps: [
        { label: "Frictie", text: "Workflow, data en applicatie" },
        { label: "Gevolg", text: "Een groeiende backlog" },
        { label: "Richting", text: "Eén beheersbare route" },
      ],
    },
  },
  hiddenDrag: {
    kicker: "Waar het vastloopt",
    headline: "Groei wordt lastig wanneer processen en systemen niet meegroeien.",
    intro: "Informatie wordt meerdere keren ingevoerd, medewerkers houden eigen spreadsheets bij en belangrijke kennis zit bij enkele mensen. Wat ooit een tijdelijke oplossing was, zorgt zo voor vertraging, fouten en afhankelijkheid.",
    mobileIntro: "Dubbele invoer, losse spreadsheets en handmatig herstelwerk maken groei onnodig lastig.",
    currentFlow: ["Klantaanvraag", "Gedeelde inbox", "Excel-overzicht", "Handmatige controle", "ERP-invoer", "Maandrapportage"],
    visibleCurrentFlow: ["Klantaanvraag", "Inbox en Excel", "Handmatige ERP-invoer", "Maandrapportage"],
    targetFlow: ["Klantaanvraag", "Automatische validatie", "Menselijke uitzondering", "Actuele rapportage"],
    signals: ["Dubbele invoer", "Lange wachttijden", "Foutgevoelige overdrachten", "Onduidelijk eigenaarschap", "Beperkte ruimte om te veranderen"],
    visibleSignals: ["Dubbele invoer", "Lange wachttijden", "Foutgevoelige overdrachten", "Onduidelijk eigenaarschap"],
    signalsAriaLabel: "Veelvoorkomende gevolgen",
    caption: "Illustratief voorbeeld: een aanvraag wordt vanuit e-mail via Excel in een ERP verwerkt en later opnieuw voor rapportage gebruikt. Geen klantcase of gemeten resultaat.",
    currentLabel: "Huidige situatie",
    currentSummary: "Versnipperde route",
    transition: "gericht moderniseren",
    targetLabel: "Beheersbare situatie",
    targetSummary: "Automatisering waar het helpt, menselijke controle waar die waarde toevoegt",
    exitLine: "Wat kleine irritaties lijken, kan samen een structurele rem op de organisatie vormen.",
    cta: "Start de probleemverkenning",
  },
  diagnosis: {
    headline: "Stel eerst vast waar het werkelijk misgaat.",
    intro: "Niet ieder probleem vraagt om nieuwe software. We onderzoeken waar werk vastloopt, welke systemen daarbij betrokken zijn en waar de grootste risico's en afhankelijkheden zitten.",
    mobileIntro: "Eerst bepalen waar werk vastloopt en welke investering werkelijk nodig is.",
    layers: [
      { title: "Proces", description: "Waar ontstaan wachttijd, herstelwerk en uitzonderingen?" },
      { title: "Data", description: "Welke gegevens zijn leidend en waar ontstaan dubbele versies?" },
      { title: "Systemen", description: "Welke applicaties en koppelingen ondersteunen of beperken het proces?" },
      { title: "Risico", description: "Wat zijn de gevolgen voor continuïteit, beveiliging en beheer?" },
      { title: "Eigenaarschap", description: "Wie neemt besluiten en beheert de oplossing?" },
    ],
    asideHeading: "Investeer op basis van inzicht, niet op basis van aannames.",
    asideCopy: "We maken duidelijk wat eerst moet worden aangepakt, wat voorlopig kan blijven en waar de meeste operationele verbetering te behalen is.",
    cta: { href: "#routes", label: "Bekijk de mogelijke routes" },
    transition: "Eerst begrijpen. Daarna gericht afbakenen.",
  },
  scan: {
    kicker: "Modernization Scan",
    headline: "Weet wat er moet gebeuren voordat u een groter traject start.",
    copy: "De Modernization Scan onderzoekt één afgebakend proces, applicatie of probleemgebied. In twee werkdagen maken we zichtbaar waar tijd verloren gaat, welke afhankelijkheden risico geven en welke eerste stap het meest logisch is.",
    decisionCopy: "Voor mkb-bedrijven en scale-ups die eerst willen weten wat prioriteit heeft, wat kan blijven en welke investering verantwoord is. U ontvangt een zelfstandig bruikbaar rapport; een vervolgopdracht is niet verplicht.",
    mobileCopy: "In twee werkdagen van een terugkerend probleem naar een onderbouwde eerste investering.",
    days: [
      { title: "Dag 1: begrijpen", items: ["Intake en maximaal drie interviews", "Proces, systemen en afhankelijkheden", "Tussentijdse terugkoppeling"] },
      { title: "Dag 2: adviseren", items: ["Routes beoordelen en prioriteren", "Aanbevolen eerste stap", "Rapportage en eindbespreking"] },
    ],
    deliverables: ["Visuele kaart van de huidige situatie", "Knelpunten, risico's en afhankelijkheden", "Onderbouwde oplossingsrichtingen", "Gefaseerd advies voor de eerste stap"],
    investment: "Vaste investering: €1.499 exclusief btw.",
    outputs: [
      { title: "Huidige staat", description: "Proces, systemen, afhankelijkheden en eigenaarschap in één overzicht." },
      { title: "Beslissingen", description: "Frictie, risico, opties, aannames en bewuste uitsluitingen." },
      { title: "Eerste stap", description: "Een gefaseerde route met duidelijke grenzen en beslismomenten." },
    ],
    outputsAriaLabel: "Output van de Modernization Scan",
    primaryCta: { href: "/probleemverkenning", label: "Start de probleemverkenning" },
    fallbackCta: { href: "mailto:subor@digitechsolutions.nl?subject=Probleemverkenning%20modernisering", label: "Neem direct contact op" },
  },
  routes: {
    kicker: "Twee moderniseringsroutes",
    headline: "Verbeter het proces, de applicatie of beide.",
    intro: "Soms moet een werkwijze eenvoudiger. Soms moeten systemen beter samenwerken. En soms is een applicatie daadwerkelijk aan vervanging toe. We bepalen welke ingreep het probleem structureel oplost zonder het traject onnodig groot te maken.",
    mobileIntro: "We bepalen of het proces, de software of de samenhang moet veranderen.",
    items: modernizationRoutes,
  },
  method: {
    headline: "Van onduidelijk probleem naar beheersbare uitvoering.",
    intro: "We bakenen het bedrijfsprobleem af, brengen de werkelijke situatie in kaart en voeren alleen de noodzakelijke verbetering uit. Iedere fase levert een concrete uitkomst op.",
    mobileIntro: "Afbakenen, in kaart brengen, verbeteren en zorgvuldig overdragen.",
    steps: methodSteps,
    phases: [
      { title: "Begrijpen", stepIds: ["scope", "map"], description: "We brengen proces, data, systemen, risico en doel samen tot een gedeeld beeld en duidelijke grenzen.", artifact: "Scopekader en kaart van de huidige situatie" },
      { title: "Gericht moderniseren", stepIds: ["simplify", "build"], description: "We vereenvoudigen eerst en bouwen daarna alleen de afgebakende verbetering in controleerbare iteraties.", artifact: "Beslislog en werkende moderniseringsstap" },
      { title: "Borgen en overdragen", stepIds: ["verify", "transfer"], description: "We testen, leggen belangrijke besluiten vast en dragen kennis zorgvuldig over voor blijvende beheerbaarheid.", artifact: "Controlebewijs en overdrachtsset" },
    ],
    closing: "Het resultaat is geen los advies, maar een werkende verandering die uw organisatie begrijpt en zelfstandig kan beheren.",
  },
  evidence: {
    kicker: "Tastbaar werkproduct",
    headline: "U ziet waarop het advies is gebaseerd.",
    intro: "Een moderniseringstraject moet controleerbaar zijn. Daarom leggen we observaties, keuzes en acceptatiecriteria vast. Onderstaande onderdelen zijn voorbeelden van de vorm van een oplevering, niet van een klantresultaat.",
    disclaimer: "Illustratief werkproduct — geen klantcase en geen gemeten resultaat.",
    items: [
      { title: "Kaart van de huidige situatie", description: "Processtappen, systemen, overdrachten en afhankelijkheden in één leesbaar overzicht." },
      { title: "Beslis- en risicolog", description: "Belangrijkste aannames, risico's, uitsluitingen en onderbouwing van de gekozen route." },
      { title: "Afgebakende eerste stap", description: "Doel, scope, acceptatiecriteria en overdracht voor een beheersbare uitvoering." },
    ],
  },
  founder: {
    kicker: "Over Digitech Solutions",
    headline: "Eén aanspreekpunt. Duidelijke eindverantwoordelijkheid.",
    lead: "Digitech Solutions is opgericht door Subor Cheung en werkt founder-led. U heeft vanaf de eerste analyse rechtstreeks contact met degene die verantwoordelijk blijft voor de opdracht.",
    supporting: "Subor combineert applicatiebeheer, functioneel beheer en procesverbetering met technische kennis van automatisering, koppelingen en AI-ondersteunde softwareontwikkeling. Voor specialistische uitvoering werkt Digitech waar nodig met zorgvuldig geselecteerde professionals. Scope, communicatie, kwaliteitscontrole en oplevering blijven centraal bij Digitech Solutions.",
    capabilities: [],
    publicBioPlaceholder: "",
    faqAriaLabel: "Veelgestelde vragen",
    faqs: [
      { question: "Is de Modernization Scan een verkoopgesprek?", answer: "Nee. De scan is een betaalde, afgebakende analyse met een zelfstandig bruikbaar rapport. Een vervolgopdracht is niet verplicht en stuurt het advies niet." },
      { question: "Kunnen jullie de modernisering na de scan ook uitvoeren?", answer: "Ja. Digitech Solutions kan de aanbevolen modernisering ontwerpen, bouwen en begeleiden. De eerste uitvoeringsstap krijgt een eigen scope en acceptatiecriteria." },
      { question: "Welke rol speelt AI?", answer: "AI is één van de beschikbare middelen, geen product op zichzelf. We zetten het alleen in bij voldoende waarde en beheersbare risico's. Review, testing en documentatie blijven onderdeel van de uitvoering." },
    ],
    cta: { href: "/kennismaking", label: "Plan een kennismaking" },
  },
  result: { rendered: false, kicker: "", headline: "", intro: "", outcomes: [], proof: { label: "", anatomy: [] } },
  contact: {
    headline: "Begin bij het probleem, niet bij de oplossing.",
    intro: "U hoeft nog niet te weten wat er gebouwd moet worden. Beschrijf waar werk vastloopt, welke mensen en systemen betrokken zijn en wat de organisatie wil verbeteren. Daarmee bereiden we de eerste kennismaking gericht voor.",
    primaryCta: { href: "/kennismaking", label: "Plan een kennismaking" },
    directLabel: "Of neem direct contact op",
  },
  form: {
    kicker: "Probleemverkenning",
    headline: "Beschrijf het probleem in context.",
    intro: "Na verzending verdiepen we ons vooraf in je organisatie. De eerste kennismaking is bedoeld om de situatie te verkennen, niet om direct een oplossing te verkopen. Deel geen wachtwoorden, broncode of andere gevoelige informatie.",
    submitLabel: "Verstuur de probleemverkenning",
    success: "Bedankt. Je probleemverkenning is ontvangen. Subor neemt contact met je op om de passende vervolgstap te bespreken.",
    privacyCopy: "We gebruiken je gegevens uitsluitend om je aanvraag te beoordelen en contact met je op te nemen.",
    unavailable: "Online verzending is nog niet geconfigureerd. Je invoer is niet verzonden. Neem voor nu rechtstreeks contact op via e-mail of telefoon.",
    directHeading: "Liever direct overleggen?",
    email: "subor@digitechsolutions.nl",
    phoneDisplay: "+31 6 43983420",
    phoneHref: "tel:+31643983420",
    privacyHref: "/privacy",
  },
  problemExploration: {
    title: "Start de probleemverkenning",
    lead: "Geef ons voldoende context om het eerste gesprek inhoudelijk voor te bereiden.",
    metadata: {
      title: "Probleemverkenning | Digitech Solutions",
      description: "Beschrijf het proces- of applicatieprobleem dat verandering vertraagt. Digitech Solutions bereidt een gerichte eerste kennismaking voor.",
      canonical: "https://digitechsolutions.nl/probleemverkenning",
    },
  },
  footer: {
    descriptor: "Workflow- en applicatiemodernisering voor mkb-bedrijven en scale-ups die weer grip willen op verandering.",
    links: [
      { href: "/#routes", label: "Expertise" },
      { href: "/#scan", label: "Modernization Scan" },
      { href: "/over", label: "Over Digitech Solutions" },
      { href: "/#contact", label: "Contact" },
      { href: "/privacy", label: "Privacyverklaring" },
      { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
    ],
    backToTop: { href: "/#top", label: "Terug naar boven" },
    location: "Nederland en België. Op locatie en op afstand.",
    rights: "Digitech Solutions. Alle rechten voorbehouden.",
  },
  metadata: {
    title: "Workflow- en applicatiemodernisering | Digitech Solutions",
    description: "Digitech Solutions helpt mkb-bedrijven en scale-ups in Nederland en België workflows en applicaties gericht te moderniseren. Start met de Modernization Scan.",
    canonical: "https://digitechsolutions.nl/",
  },
} as const;

export const bannedMarketingPhrases = [
  "Transformeer je bedrijf met AI",
  "AI-bureau",
  "AI-first agency",
  "AI lost alles op",
  "Rebrandprototype",
  "geen formulierdata",
] as const;

export { methodSteps, modernizationRoutes };

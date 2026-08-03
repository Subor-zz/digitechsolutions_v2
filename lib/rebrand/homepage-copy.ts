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
    statement: "Van handwerk en losse overdrachten naar een beheersbaar proces.",
    context: "We maken de echte procesroute zichtbaar en bepalen welke stappen eenvoudiger, beter verbonden of gecontroleerd geautomatiseerd kunnen worden.",
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
      "Interne tools gericht ontwikkelen",
    ],
    output: "Een duidelijke route met zichtbare controles, helder eigenaarschap en een overdraagbare werkwijze.",
    cta: "Start de probleemverkenning",
    ctaHref: "/probleemverkenning",
  },
  {
    id: "application",
    title: "Applicatiemodernisering",
    statement: "Van kwetsbare of moeilijk aanpasbare software naar een applicatie die weer kan veranderen.",
    context: "We onderzoeken architectuur, data, integraties en beheer om gericht te bepalen wat kan blijven en wat gefaseerd moet worden vernieuwd.",
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
      "Functionaliteit modulair vernieuwen of vervangen",
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
    primaryCta: { href: "/probleemverkenning", label: "Start de probleemverkenning" },
  },
  hero: {
    kicker: "Workflow- en applicatiemodernisering",
    headline: "Moderniseer wat verandering tegenhoudt.",
    lead: "Verouderde processen, versnipperde systemen en moeilijk aanpasbare software maken iedere volgende verbetering ingewikkelder. Teams verliezen tijd aan overdrachten en herstelwerk.",
    mobileLead: "Verouderde processen en moeilijk aanpasbare software maken iedere verbetering ingewikkelder.",
    supporting: "Digitech Solutions brengt proces, data, systemen, risico en eigenaarschap samen. Zo wordt duidelijk waar de echte beperking zit. Daarna moderniseren we gericht wat nodig is, zonder automatisch voor een volledige herbouw te kiezen.",
    primaryCta: { href: "/probleemverkenning", label: "Start de probleemverkenning" },
    secondaryCta: { href: "#scan", label: "Bekijk de Modernization Scan" },
    founderTrustLine: "Procesanalyse, productdenken en technische uitvoering in één samenwerking.",
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
    headline: "De grootste vertraging zit vaak tussen mensen, processen en systemen.",
    intro: "Frictie ontstaat in handmatige overdrachten, dubbele invoer, uitzonderingen zonder eigenaar en software die niet meer met de organisatie meebeweegt. Samen maken deze knelpunten verandering traag, foutgevoelig en afhankelijk van individuele kennis.",
    mobileIntro: "Frictie ontstaat in overdrachten, dubbel werk en uitzonderingen zonder duidelijke eigenaar.",
    currentFlow: ["Aanvraag", "Inbox", "Spreadsheet", "Controle", "Oude applicatie", "Rapportage"],
    visibleCurrentFlow: ["Aanvraag", "Inbox en spreadsheet", "Oude applicatie", "Rapportage"],
    targetFlow: ["Aanvraag", "Validatie", "Menselijke controle", "Resultaat"],
    signals: ["Dubbele invoer", "Lange wachttijden", "Foutgevoelige overdrachten", "Onduidelijk eigenaarschap", "Beperkte ruimte om te veranderen"],
    visibleSignals: ["Dubbele invoer", "Lange wachttijden", "Foutgevoelige overdrachten", "Onduidelijk eigenaarschap"],
    signalsAriaLabel: "Veelvoorkomende gevolgen",
    caption: "Illustratief procespatroon. Geen klantcase of gemeten resultaat.",
    currentLabel: "Huidige situatie",
    currentSummary: "Versnipperde route",
    transition: "gericht moderniseren",
    targetLabel: "Beheersbare situatie",
    targetSummary: "Automatisering waar het helpt, menselijke controle waar die waarde toevoegt",
    exitLine: "Losse irritaties kunnen samen een structurele beperking vormen.",
    cta: "Start de probleemverkenning",
  },
  diagnosis: {
    headline: "Bouw niet sneller voordat duidelijk is wat je moet oplossen.",
    intro: "We onderzoeken waar vertraging ontstaat, welke afhankelijkheden worden geraakt en wat behouden moet blijven.",
    mobileIntro: "Onderzoek eerst proces, data, systemen, risico en eigenaarschap.",
    layers: [
      { title: "Proces", description: "Waar ontstaan wachttijd, herstelwerk en uitzonderingen?" },
      { title: "Data", description: "Welke gegevens zijn leidend en waar ontstaan dubbele versies?" },
      { title: "Systemen", description: "Welke applicaties en koppelingen ondersteunen of beperken het proces?" },
      { title: "Risico", description: "Wat zijn de gevolgen voor continuïteit, beveiliging en beheer?" },
      { title: "Eigenaarschap", description: "Wie neemt besluiten en beheert de oplossing?" },
    ],
    asideHeading: "De oplossing volgt uit de analyse.",
    asideCopy: "Een volledige herbouw is nooit automatisch het vertrekpunt.",
    cta: { href: "#routes", label: "Bekijk de mogelijke routes" },
    transition: "Eerst begrijpen. Daarna gericht afbakenen.",
  },
  scan: {
    kicker: "Modernization Scan",
    headline: "Van een terugkerend probleem naar een onderbouwde eerste stap.",
    copy: "De Modernization Scan onderzoekt één afgebakend proces, applicatie of probleemgebied. In twee werkdagen brengen we de huidige situatie, belangrijkste beperkingen en realistische oplossingsrichtingen in kaart. Maximaal drie interviews brengen de relevante perspectieven samen.",
    decisionCopy: "Bedoeld voor mkb-bedrijven en scale-ups die eerst scope, risico en een verstandige route willen begrijpen. Je ontvangt een zelfstandig bruikbaar rapport met observaties, aannames en bewuste uitsluitingen.",
    mobileCopy: "In twee werkdagen van een afgebakend probleem naar een bruikbaar besliskader.",
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
    headline: "Moderniseer het proces, de applicatie of de samenhang.",
    intro: "We onderzoeken proces, data, systemen, risico en eigenaarschap in samenhang. Zo voorkomen we dat de oplossing vooraf wordt gekozen en bepalen we de kleinste route die het probleem structureel oplost.",
    mobileIntro: "We starten bij het zichtbare knelpunt en bepalen waar de kern ligt.",
    items: modernizationRoutes,
    combined: {
      heading: "Nog niet duidelijk waar het probleem zit?",
      copy: "Dat hoeft ook niet. We beginnen bij het zichtbare knelpunt en bepalen of de kern in het proces, de applicatie of de samenhang ligt.",
      cta: { href: "/probleemverkenning", label: "Start de probleemverkenning" },
    },
  },
  method: {
    headline: "Eerst begrijpen. Dan gericht moderniseren.",
    intro: "Drie heldere fasen houden probleem, uitvoering en overdracht met elkaar verbonden. Iedere fase heeft een concrete uitkomst.",
    mobileIntro: "Begrijpen, gericht moderniseren en zorgvuldig overdragen.",
    steps: methodSteps,
    phases: [
      { title: "Begrijpen", stepIds: ["scope", "map"], description: "We brengen proces, data, systemen, risico en doel samen tot een gedeeld beeld en duidelijke grenzen.", artifact: "Scopekader en kaart van de huidige situatie" },
      { title: "Gericht moderniseren", stepIds: ["simplify", "build"], description: "We vereenvoudigen eerst en bouwen daarna alleen de afgebakende verbetering in controleerbare iteraties.", artifact: "Beslislog en werkende moderniseringsstap" },
      { title: "Borgen en overdragen", stepIds: ["verify", "transfer"], description: "We testen, leggen belangrijke besluiten vast en dragen kennis zorgvuldig over voor blijvende beheerbaarheid.", artifact: "Controlebewijs en overdrachtsset" },
    ],
    closing: "Het doel is een werkende verandering die de organisatie begrijpt en zelfstandig kan beheren.",
  },
  founder: {
    kicker: "Over Digitech Solutions",
    headline: "Analyse en uitvoering blijven verbonden.",
    lead: "Digitech Solutions combineert procesanalyse, productdenken en technische uitvoering. Zo blijft de zakelijke vraag verbonden met keuzes in ontwerp en techniek.",
    supporting: "We werken met een vaste kern en breiden gericht uit met vaste samenwerkingspartners. Scope, verantwoordelijkheid en communicatie blijven centraal georganiseerd. Na de scan kunnen we ontwerpen, bouwen en begeleiden, of het rapport overdragen aan een ander uitvoeringsteam.",
    capabilities: [],
    publicBioPlaceholder: "",
    faqAriaLabel: "Veelgestelde vragen",
    faqs: [
      { question: "Is de Modernization Scan een verkoopgesprek?", answer: "Nee. De scan is een betaalde, afgebakende analyse met een zelfstandig bruikbaar rapport. Een vervolgopdracht is niet verplicht en stuurt het advies niet." },
      { question: "Kunnen jullie de modernisering na de scan ook uitvoeren?", answer: "Ja. Digitech Solutions kan de aanbevolen modernisering ontwerpen, bouwen en begeleiden. De eerste uitvoeringsstap krijgt een eigen scope en acceptatiecriteria." },
      { question: "Welke rol speelt AI?", answer: "AI is één van de beschikbare middelen, geen product op zichzelf. We zetten het alleen in bij voldoende waarde en beheersbare risico's. Review, testing en documentatie blijven onderdeel van de uitvoering." },
    ],
    cta: { href: "/probleemverkenning", label: "Start de probleemverkenning" },
  },
  result: { rendered: false, kicker: "", headline: "", intro: "", outcomes: [], proof: { label: "", anatomy: [] } },
  contact: {
    headline: "Je hoeft nog niet te weten wat er gebouwd moet worden.",
    intro: "Beschrijf het terugkerende probleem, de mensen die er hinder van ondervinden, de betrokken systemen en de gewenste uitkomst. We gebruiken die context om ons vooraf in de organisatie te verdiepen en de eerste kennismaking gericht voor te bereiden.",
    primaryCta: { href: "/probleemverkenning", label: "Start de probleemverkenning" },
    directLabel: "Of neem direct contact op",
  },
  form: {
    kicker: "Probleemverkenning",
    headline: "Beschrijf het probleem in context.",
    intro: "Na verzending verdiepen we ons vooraf in je organisatie. De eerste kennismaking is bedoeld om de situatie te verkennen, niet om direct een oplossing te verkopen. Deel geen wachtwoorden, broncode of andere gevoelige informatie.",
    submitLabel: "Verstuur de probleemverkenning",
    privacyCopy: "We gebruiken je gegevens uitsluitend om je aanvraag te beoordelen en contact met je op te nemen.",
    unavailable: "Online verzending is nog niet geconfigureerd. Je invoer is niet verzonden. Neem voor nu rechtstreeks contact op via e-mail of telefoon.",
    directHeading: "Liever direct overleggen?",
    email: "subor@digitechsolutions.nl",
    phoneDisplay: "+31 6 43983420",
    phoneHref: "tel:+31643983420",
    privacyHref: "https://digitechsolutions.nl/privacy",
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
      { href: "/#over-digitech", label: "Over Digitech Solutions" },
      { href: "/#contact", label: "Contact" },
      { href: "https://digitechsolutions.nl/privacy", label: "Privacyverklaring" },
      { href: "https://digitechsolutions.nl/algemene-voorwaarden", label: "Algemene voorwaarden" },
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

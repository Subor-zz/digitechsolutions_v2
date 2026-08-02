export type ModernizationRoute = {
  id: "workflow" | "application";
  title: string;
  statement: string;
  signals: readonly string[];
  visibleSignals: readonly string[];
  output: string;
  cta: string;
  ctaHref: "#probleemverkenning";
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
      "Interne tools of dashboards ontwikkelen",
      "AI inzetten waar dat aantoonbaar helpt",
    ],
    output:
      "Een duidelijke route met zichtbare controles, helder eigenaarschap en overdraagbare werkwijzen.",
    cta: "Start de probleemverkenning",
    ctaHref: "#probleemverkenning",
  },
  {
    id: "application",
    title: "Applicatiemodernisering",
    statement: "Van kwetsbare software naar een applicatie die weer kan veranderen.",
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
      "Functionaliteit modulair vernieuwen",
      "Een applicatie gefaseerd vervangen",
    ],
    output:
      "Een gefaseerde route die behoud, verbetering en vervanging bewust tegen elkaar afweegt.",
    cta: "Start de probleemverkenning",
    ctaHref: "#probleemverkenning",
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
  brand: { ariaLabel: "Digitech Solutions", firstLine: "Digitech", secondLine: "Solutions", homeHref: "#top" },
  navigation: {
    skipLink: "Ga naar de hoofdinhoud",
    ariaLabel: "Hoofdnavigatie",
    mobileAriaLabel: "Mobiele navigatie",
    mobileOpen: "Navigatie",
    mobileClose: "Sluiten",
    links: [
      { href: "#probleem", label: "Waar het vastloopt" },
      { href: "#scan", label: "De scan" },
      { href: "#routes", label: "Expertise" },
      { href: "#werkwijze", label: "Werkwijze" },
      { href: "#over-digitech", label: "Over Digitech" },
    ],
    primaryCta: { href: "#probleemverkenning", label: "Start de probleemverkenning" },
  },
  hero: {
    kicker: "Workflow- en applicatiemodernisering",
    headline: "Moderniseer wat verandering tegenhoudt.",
    lead:
      "Verouderde processen, versnipperde systemen en moeilijk aanpasbare software maken iedere volgende verbetering ingewikkelder.",
    mobileLead:
      "Verouderde processen en moeilijk aanpasbare software maken iedere verbetering ingewikkelder.",
    supporting:
      "Digitech Solutions brengt de oorzaken in kaart en vertaalt ze naar een beheersbare moderniseringsroute. Daarna vereenvoudigen, automatiseren of vernieuwen we precies wat nodig is, met AI waar het aantoonbaar waarde toevoegt.",
    primaryCta: { href: "#probleemverkenning", label: "Start de probleemverkenning" },
    secondaryCta: { href: "#scan", label: "Bekijk de Modernization Scan" },
    founderTrustLine:
      "Van analyse en architectuur tot uitvoering en overdracht. Eén aanpak, met een vaste kern en specialistische versterking wanneer de opdracht daarom vraagt.",
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
    intro:
      "Niet ieder knelpunt vraagt om nieuwe software. Vaak ontstaat vertraging in de verbindingen: informatie wordt handmatig overgenomen, uitzonderingen blijven liggen en tijdelijke oplossingen worden vaste werkwijzen.",
    mobileIntro: "Frictie ontstaat in overdrachten, dubbel werk en uitzonderingen zonder duidelijke eigenaar.",
    currentFlow: ["Aanvraag", "Inbox", "Spreadsheet", "Controle", "Oude applicatie", "Rapportage"],
    visibleCurrentFlow: ["Aanvraag", "Inbox", "Spreadsheet", "Controle", "Oude applicatie", "Rapportage"],
    targetFlow: ["Aanvraag", "Validatie", "Verwerking", "Menselijke controle", "Resultaat"],
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
    intro:
      "Een nieuw systeem kan een slecht proces versnellen zonder het te verbeteren. Daarom onderzoeken we waar vertraging ontstaat, welke afhankelijkheden worden geraakt en wat behouden moet blijven.",
    mobileIntro: "Onderzoek eerst proces, data, systemen, risico en eigenaarschap. Kies daarna pas een route.",
    layers: [
      { title: "Proces", description: "Waar ontstaan wachttijd, herstelwerk en uitzonderingen? Welke stappen leveren werkelijk waarde op?" },
      { title: "Data", description: "Welke gegevens zijn leidend, waar ontstaan dubbele versies en hoe betrouwbaar is de informatie?" },
      { title: "Systemen", description: "Welke applicaties, koppelingen en technische afhankelijkheden ondersteunen of beperken het proces?" },
      { title: "Risico", description: "Wat zijn de gevolgen voor continuïteit, beveiliging, privacy, kwaliteit en beheer?" },
      { title: "Eigenaarschap", description: "Wie neemt besluiten, wie beheert de oplossing en waar is kennis onvoldoende overdraagbaar?" },
    ],
    asideHeading: "De oplossing volgt uit de analyse.",
    asideCopy: "Vereenvoudigen, integreren, automatiseren, beveiligen en gericht vernieuwen zijn mogelijke routes. Een volledige herbouw is nooit automatisch het vertrekpunt.",
    cta: { href: "#routes", label: "Bekijk de mogelijke routes" },
    transition: "Eerst begrijpen. Daarna gericht afbakenen.",
  },
  routes: {
    kicker: "Eén vraagstuk, twee expertisegebieden",
    headline: "Proces en applicatie zijn zelden los van elkaar te moderniseren.",
    intro: "Je hoeft vooraf niet te bepalen welke expertise nodig is. We starten bij wat je organisatie dagelijks merkt.",
    mobileIntro: "We starten bij het zichtbare knelpunt en bepalen waar de kern ligt.",
    items: modernizationRoutes,
    combined: {
      heading: "Nog niet duidelijk waar het probleem zit?",
      copy: "Dat hoeft ook niet. De probleemverkenning begint bij het zichtbare knelpunt. We bepalen of de kern in het proces, de applicatie of de samenhang ligt.",
      cta: { href: "#probleemverkenning", label: "Start de probleemverkenning" },
    },
  },
  method: {
    headline: "Een moderniseringsroute met duidelijke beslismomenten.",
    intro: "Iedere opdracht vraagt een andere technische ingreep, maar dezelfde discipline: heldere grenzen, zichtbare besluiten, toetsbare kwaliteit en professionele overdracht.",
    mobileIntro: "Heldere grenzen, zichtbare besluiten, toetsbare kwaliteit en overdracht.",
    steps: methodSteps,
    phases: [
      { title: "Begrijpen", stepIds: ["scope", "map"], description: "Doel, proces, data, systemen en risico komen samen in één gedeeld beeld.", artifact: "Scopekader en kaart van de huidige situatie" },
      { title: "Gericht moderniseren", stepIds: ["simplify", "build"], description: "Onnodige complexiteit verdwijnt eerst. Daarna bouwen we alleen de afgebakende verbetering.", artifact: "Beslislog en werkende moderniseringsstap" },
      { title: "Borgen", stepIds: ["verify", "transfer"], description: "Acceptatie, risico, documentatie en overdracht maken de verandering controleerbaar.", artifact: "Controlebewijs en overdrachtsset" },
    ],
    closing: "Het doel is een werkende verandering die de organisatie begrijpt en zelfstandig kan beheren.",
  },
  founder: {
    kicker: "Compacte kern, directe samenwerking",
    headline: "De mensen die meedenken, blijven betrokken bij de uitvoering.",
    lead: "Digitech Solutions combineert procesanalyse, productdenken en technische uitvoering. Zo verdwijnt de oorspronkelijke vraag niet tussen advies, ontwerp en development.",
    supporting: "We werken met een vaste kern. Wanneer extra capaciteit of specialistische expertise nodig is, breiden we gericht uit met vaste samenwerkingspartners. Scope, verantwoordelijkheid en communicatie blijven centraal georganiseerd.",
    capabilities: ["Procesanalyse", "Functionele vertaling", "Product- en architectuurkeuzes", "Workflowautomatisering", "Applicatiemodernisering", "Kwaliteit en overdracht"],
    publicBioPlaceholder: "",
    faqAriaLabel: "Veelgestelde vragen",
    faqs: [
      { question: "Is de Modernization Scan een verkoopgesprek?", answer: "Nee. De scan is een betaalde, afgebakende analyse met een zelfstandig bruikbaar rapport. Een vervolgopdracht is niet verplicht." },
      { question: "Moet een oude applicatie volledig opnieuw worden gebouwd?", answer: "Meestal niet. We beoordelen eerst of vereenvoudiging, betere integraties of modulaire vernieuwing voldoende zijn." },
      { question: "Welke rol speelt AI?", answer: "AI is één van de beschikbare middelen. We zetten het alleen in bij voldoende waarde, betrouwbare input en beheersbare risico's." },
      { question: "Kunnen jullie de verbetering na de scan uitvoeren?", answer: "Ja. Digitech Solutions kan de aanbevolen modernisering ontwerpen, bouwen en begeleiden. Voor specialistische trajecten schalen we gericht op." },
      { question: "Voor welke organisaties is de scan bedoeld?", answer: "Voor mkb-bedrijven en scale-ups met een concreet proces- of applicatieprobleem en een betrokken eigenaar binnen de organisatie." },
      { question: "Wat moet vooraf beschikbaar zijn?", answer: "Een contactpersoon, maximaal drie relevante stakeholders en beschikbare informatie over het gekozen probleemgebied." },
    ],
    cta: { href: "#probleemverkenning", label: "Start de probleemverkenning" },
  },
  result: { rendered: false, kicker: "", headline: "", intro: "", outcomes: [], proof: { label: "", anatomy: [] } },
  scan: {
    kicker: "Modernization Scan",
    headline: "Van een terugkerend probleem naar een onderbouwde eerste stap.",
    copy: "De Modernization Scan onderzoekt één afgebakend proces, applicatie of probleemgebied. In twee werkdagen brengen we de huidige situatie, belangrijkste beperkingen en realistische oplossingsrichtingen in kaart.",
    decisionCopy: "Je krijgt geen vooraf gekozen technologie of generiek AI-advies, maar een concreet besliskader dat ook zonder vervolgopdracht bruikbaar blijft.",
    mobileCopy: "In twee werkdagen van een afgebakend probleem naar een bruikbaar besliskader.",
    days: [
      { title: "Dag 1: begrijpen en afbakenen", items: ["Intake en beschikbare informatie", "Maximaal drie interviews", "Proces, systemen, data en afhankelijkheden", "Knelpunten, risico's en aannames", "Tussentijdse terugkoppeling"] },
      { title: "Dag 2: beoordelen en adviseren", items: ["Vergelijking van moderniseringsroutes", "Beoordeling van automatisering en AI", "Prioritering op impact, risico en uitvoerbaarheid", "Aanbevolen eerste stap", "Rapportage, eindbespreking en overdracht"] },
    ],
    deliverables: ["Overzicht van de huidige situatie", "Visuele proces- of applicatiekaart", "Knelpunten en afhankelijkheden", "Risico- en impactanalyse", "Oplossingsrichtingen en uitsluitingen", "Automatiserings- en AI-kansen", "Prioriteitenmatrix", "Gefaseerd advies"],
    investment: "De scan behandelt één duidelijk afgebakend probleemgebied en omvat maximaal drie interviews. De vaste investering bedraagt €1.499 exclusief btw. Voor een bredere scope bespreken we vooraf een passende uitbreiding.",
    outputs: [
      { title: "Huidige staat", description: "Proces, systemen, afhankelijkheden en eigenaarschap in één overzicht." },
      { title: "Beslissingen", description: "Frictie, risico, opties, aannames en bewuste uitsluitingen." },
      { title: "Eerste stap", description: "Een gefaseerde route met duidelijke grenzen en beslismomenten." },
    ],
    outputsAriaLabel: "Output van de Modernization Scan",
    primaryCta: { href: "#probleemverkenning", label: "Start de probleemverkenning" },
    fallbackCta: { href: "mailto:subor@digitechsolutions.nl?subject=Probleemverkenning%20modernisering", label: "Neem direct contact op" },
  },
  form: {
    kicker: "Volgende stap",
    headline: "Je hoeft nog niet te weten wat er gebouwd moet worden.",
    intro: "Deel waar het werk vertraagt, welke systemen betrokken zijn en wat je al hebt geprobeerd. We gebruiken de kennismaking om de situatie gericht te verkennen.",
    submitLabel: "Verstuur de probleemverkenning",
    privacyCopy: "We gebruiken je gegevens uitsluitend om je aanvraag te beoordelen en contact met je op te nemen.",
    unavailable: "Online verzending is nog niet geconfigureerd. Je invoer is niet verzonden. Neem voor nu rechtstreeks contact op via e-mail of telefoon.",
    directHeading: "Liever direct overleggen?",
    email: "subor@digitechsolutions.nl",
    phoneDisplay: "+31 6 43983420",
    phoneHref: "tel:+31643983420",
    privacyHref: "https://digitechsolutions.nl/privacy",
  },
  footer: {
    descriptor: "Workflow- en applicatiemodernisering voor mkb-bedrijven en scale-ups die weer grip willen op verandering.",
    links: [
      { href: "#routes", label: "Expertise" },
      { href: "#scan", label: "Modernization Scan" },
      { href: "#over-digitech", label: "Over Digitech Solutions" },
      { href: "#probleemverkenning", label: "Contact" },
      { href: "https://digitechsolutions.nl/privacy", label: "Privacyverklaring" },
      { href: "https://digitechsolutions.nl/algemene-voorwaarden", label: "Algemene voorwaarden" },
    ],
    backToTop: { href: "#top", label: "Terug naar boven" },
    location: "Nederland en België. Op locatie en op afstand.",
    rights: "Digitech Solutions. Alle rechten voorbehouden.",
  },
  metadata: {
    title: "Workflow- en applicatiemodernisering | Digitech Solutions",
    description: "Digitech Solutions helpt mkb-bedrijven en scale-ups verouderde processen en applicaties gericht te moderniseren. Start met een concrete probleemverkenning of Modernization Scan.",
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

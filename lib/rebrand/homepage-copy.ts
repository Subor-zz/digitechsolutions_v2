export type ModernizationRoute = {
  id: "workflow" | "application";
  title: string;
  statement: string;
  signals: readonly string[];
  visibleSignals: readonly string[];
  output: string;
  cta: string;
  ctaHref: "/modernization-scan";
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
    statement: "Van handwerk naar een beheersbare workflow.",
    signals: [
      "Informatie beweegt via inboxen, spreadsheets en losse overdrachten.",
      "Uitzonderingen worden laat zichtbaar of blijven bij één medewerker liggen.",
      "Dezelfde gegevens worden op meerdere plekken bijgehouden.",
      "Proceskennis zit vooral in hoofden en tijdelijke afspraken.",
    ],
    visibleSignals: [
      "Informatie beweegt via inboxen, spreadsheets en losse overdrachten.",
      "Uitzonderingen worden laat zichtbaar of blijven bij één medewerker liggen.",
      "Dezelfde gegevens worden op meerdere plekken bijgehouden.",
    ],
    output:
      "Een eenvoudiger proces met zichtbare controles, duidelijk eigenaarschap en overdraagbare werkwijzen.",
    cta: "Bespreek deze route",
    ctaHref: "/modernization-scan",
  },
  {
    id: "application",
    title: "Applicatiemodernisering",
    statement: "Van kwetsbare legacy naar software die weer kan veranderen.",
    signals: [
      "Kleine wijzigingen zijn risicovol, traag of disproportioneel duur.",
      "Integraties, afhankelijkheden en documentatie zijn onvoldoende zichtbaar.",
      "Continuïteit hangt van één persoon, leverancier of verouderde techniek af.",
      "De applicatie ondersteunt het huidige proces niet meer goed.",
    ],
    visibleSignals: [
      "Kleine wijzigingen zijn risicovol, traag of disproportioneel duur.",
      "Integraties, afhankelijkheden en documentatie zijn onvoldoende zichtbaar.",
      "Continuïteit hangt van één persoon, leverancier of verouderde techniek af.",
    ],
    output:
      "Een gefaseerde moderniseringsroute die behoud, aanpassing en vervanging bewust tegen elkaar afweegt.",
    cta: "Bespreek deze route",
    ctaHref: "/modernization-scan",
  },
] as const satisfies readonly ModernizationRoute[];

const methodSteps = [
  {
    id: "scope",
    number: "01",
    title: "Scope",
    description:
      "Maak doel, context, beslissers en grenzen expliciet voordat onderzoek of uitvoering begint.",
    artifact: "Scopekader en beslisvraag",
  },
  {
    id: "map",
    number: "02",
    title: "Map",
    description:
      "Breng proces, data, systemen, risico’s en eigenaarschap samen in één current-state beeld.",
    artifact: "Proces- en afhankelijkhedenkaart",
  },
  {
    id: "simplify",
    number: "03",
    title: "Simplify",
    description:
      "Verwijder onnodige stappen en aannames voordat techniek extra complexiteit toevoegt.",
    artifact: "Beslislog en oplossingsrichtingen",
  },
  {
    id: "build",
    number: "04",
    title: "Build",
    description:
      "Voer alleen de afgebakende verbetering uit die aantoonbaar bijdraagt aan het gekozen doel.",
    artifact: "Begrensde moderniseringsstap",
  },
  {
    id: "verify",
    number: "05",
    title: "Verify",
    description:
      "Toets gedrag, risico’s, uitzonderingen en acceptatie aan vooraf afgesproken criteria.",
    artifact: "Acceptatie- en controlebewijs",
  },
  {
    id: "transfer",
    number: "06",
    title: "Transfer",
    description:
      "Leg besluiten en werking vast zodat het team niet afhankelijk blijft van een black box.",
    artifact: "Documentatie en overdrachtsset",
  },
] as const satisfies readonly MethodStep[];

export const homepageCopy = {
  brand: {
    ariaLabel: "Digitech Solutions",
    firstLine: "Digitech",
    secondLine: "Solutions",
    homeHref: "#top",
  },
  navigation: {
    skipLink: "Ga naar de hoofdinhoud",
    ariaLabel: "Hoofdnavigatie",
    mobileAriaLabel: "Mobiele navigatie",
    mobileOpen: "Navigatie",
    mobileClose: "Sluiten",
    links: [
      { href: "#probleem", label: "De frictie" },
      { href: "#diagnose", label: "Diagnose" },
      { href: "#routes", label: "Expertise" },
      { href: "#werkwijze", label: "Werkwijze" },
    ],
    primaryCta: { href: "/modernization-scan", label: "Modernization Scan" },
  },
  hero: {
    kicker: "Workflow- en applicatiemodernisering",
    headline: "Moderniseer wat je organisatie vertraagt.",
    lead:
      "Digitech Solutions maakt zichtbaar waar workflows en applicaties vastlopen. Eerst begrijpen, dan gericht en beheersbaar moderniseren.",
    mobileLead:
      "Zie waar processen en systemen vastlopen. Begrijp eerst wat nodig is, moderniseer daarna gericht.",
    primaryCta: { href: "/modernization-scan", label: "Start met de Modernization Scan" },
    secondaryCta: { href: "#werkwijze", label: "Bekijk de werkwijze" },
    founderTrustLine:
      "Je werkt rechtstreeks met Subor Cheung. Waar specialistische expertise nodig is, wordt die transparant toegevoegd.",
    systemVisual: {
      caption: "Waar operationele en technische frictie samenkomen.",
      ariaLabel:
        "Workflow, data en applicatie komen samen in een diagnose en een beheersbare route.",
      fragments: [
        { label: "Workflow", text: "Overdracht via inbox" },
        { label: "Data", text: "Meerdere versies" },
        { label: "Applicatie", text: "Moeilijk aanpasbaar" },
      ],
      decision: {
        label: "Diagnose",
        text: "Wat is de kleinste verstandige ingreep?",
      },
      outcome: { label: "Route", text: "Eén zichtbare route" },
      mobileSteps: [
        { label: "Frictie", text: "Workflow, data en applicatie" },
        { label: "Diagnose", text: "De kleinste verstandige ingreep" },
        { label: "Route", text: "Een beheersbare eerste stap" },
      ],
    },
  },
  hiddenDrag: {
    kicker: "Herken de verborgen frictie",
    headline: "De grootste vertraging zit vaak tussen je systemen.",
    intro:
      "Niet in één medewerker of één applicatie, maar in de overdrachten ertussen. Informatie wordt gekopieerd, uitzonderingen blijven liggen en tijdelijke workarounds groeien uit tot vaste werkwijzen.",
    mobileIntro:
      "Frictie ontstaat in overdrachten: kopiëren, wachten, herstellen en uitzonderingen zonder duidelijke eigenaar.",
    currentFlow: [
      "Aanvraag",
      "Inbox",
      "Spreadsheet",
      "Controle",
      "Oude applicatie",
      "Handmatige update",
      "Rapportage",
    ],
    visibleCurrentFlow: [
      "Aanvraag",
      "Inbox",
      "Spreadsheet",
      "Controle",
      "Oude applicatie",
      "Rapportage",
    ],
    targetFlow: [
      "Aanvraag",
      "Validatie",
      "Verwerking",
      "Menselijke controle",
      "Resultaat",
    ],
    signals: [
      "Dubbele invoer",
      "Wachttijd",
      "Foutgevoelige overdracht",
      "Ontbrekende controle",
      "Kennis bij één persoon",
    ],
    visibleSignals: [
      "Dubbele invoer",
      "Wachttijd",
      "Foutgevoelige overdracht",
      "Ontbrekende controle",
    ],
    signalsAriaLabel: "Zichtbare frictie",
    caption: "Illustratief procespatroon. Geen klantcase of gemeten resultaat.",
    currentLabel: "Versnipperde route",
    currentSummary: "Overdracht na overdracht",
    transition: "eerst begrijpen",
    targetLabel: "Beheersbare route",
    targetSummary: "Automatisering waar passend, controle waar nodig",
    exitLine:
      "Wat zichtbaar is als losse irritatie, kan samen een structurele beperking vormen.",
    cta: "Bekijk hoe Digitech workflows onderzoekt",
  },
  diagnosis: {
    headline: "Eerst begrijpen. Dan pas automatiseren of herbouwen.",
    intro:
      "Een oplossing is pas verantwoord wanneer duidelijk is waar de frictie ontstaat, welke afhankelijkheden geraakt worden en wat behouden moet blijven. De Modernization Scan onderzoekt daarom eerst vijf samenhangende lagen.",
    mobileIntro:
      "Onderzoek eerst proces, data, systemen, risico en eigenaarschap. Kies daarna pas een route.",
    layers: [
      {
        title: "Proces",
        description:
          "Waar ontstaan wachttijd, herstelwerk of uitzonderingen zonder duidelijke eigenaar?",
      },
      {
        title: "Data",
        description:
          "Welke informatie wordt gekopieerd, ontbreekt of wijkt tussen bronnen van elkaar af?",
      },
      {
        title: "Systemen",
        description:
          "Welke applicaties en integraties begrenzen verandering of vergroten afhankelijkheid?",
      },
      {
        title: "Risico",
        description:
          "Waar raakt een wijziging continuïteit, privacy, beveiliging of operationele controle?",
      },
      {
        title: "Eigenaarschap",
        description:
          "Wie neemt besluiten, beheert uitzonderingen en kan na overdracht zelfstandig verder?",
      },
    ],
    asideHeading: "De oplossing volgt uit wat we aantreffen.",
    asideCopy:
      "Vereenvoudigen, integreren, automatiseren, beveiligen of gericht vernieuwen zijn mogelijke routes. Een volledige herbouw is nooit automatisch het vertrekpunt.",
    cta: { href: "#routes", label: "Bekijk de mogelijke routes" },
    transition:
      "Zodra de huidige situatie begrijpelijk is, kan de modernisering gericht worden afgebakend.",
  },
  routes: {
    kicker: "Eén diagnose, twee expertise-routes",
    headline: "Waar zit de dragende beperking?",
    intro:
      "Je hoeft dat vooraf niet zeker te weten. De route is een werkhypothese die tijdens de analyse kan worden aangepast.",
    mobileIntro:
      "De route is een eerste hypothese. Je hoeft vooraf niet te weten of het probleem vooral in het proces, de applicatie of beide zit.",
    items: modernizationRoutes,
    combined: {
      heading: "Workflow en applicatie zitten samen vast",
      copy:
        "Soms ligt de frictie niet in één proces of één systeem. Kies dan gecombineerd of onzeker. De intake vertrekt vanuit wat je dagelijks merkt, niet vanuit een technische diagnose die je vooraf zelf moet stellen.",
      cta: { href: "/modernization-scan", label: "Ik weet nog niet welke route past" },
    },
  },
  method: {
    headline: "Gericht waar het kan. Gecontroleerd waar het moet.",
    intro:
      "Iedere modernisering vraagt een andere technische ingreep, maar dezelfde discipline: heldere grenzen, zichtbare besluiten, toetsbare kwaliteit en professionele overdracht.",
    mobileIntro: "Heldere grenzen, zichtbare besluiten, toetsbare kwaliteit en overdracht.",
    steps: methodSteps,
    phases: [
      {
        title: "Begrijpen",
        stepIds: ["scope", "map"],
        description:
          "Doel, proces, data, systemen en risico’s komen samen in één gedeeld beeld.",
        artifact: "Scopekader en current-state map",
      },
      {
        title: "Gericht moderniseren",
        stepIds: ["simplify", "build"],
        description:
          "Onnodige complexiteit verdwijnt eerst. Daarna wordt alleen de afgebakende verbetering gebouwd.",
        artifact: "Beslislog en begrensde moderniseringsstap",
      },
      {
        title: "Borgen",
        stepIds: ["verify", "transfer"],
        description:
          "Acceptatie, risico, documentatie en overdracht maken de verandering controleerbaar.",
        artifact: "Controlebewijs en overdrachtsset",
      },
    ],
    closing:
      "Het doel is niet alleen iets werkends opleveren, maar zorgen dat de organisatie begrijpt wat er is veranderd en hoe zij verder kan.",
  },
  founder: {
    headline: "Geen overdracht naar een anoniem deliveryteam.",
    lead:
      "Je werkt rechtstreeks met Subor Cheung: van analyse en functionele vertaling tot afstemming, uitvoering en overdracht.",
    supporting:
      "Waar specialistische diepgang nodig is, wordt die expertise transparant toegevoegd. De scope, verantwoordelijkheden en besluitvorming blijven zichtbaar. Digitech Solutions doet zich niet voor als een groot intern bureau.",
    capabilities: [
      "Procesanalyse",
      "Functionele vertaling",
      "Productdenken",
      "Technische uitvoering",
      "Deliverycontrole",
      "Overdracht",
    ],
    publicBioPlaceholder:
      "Meer over Subor en zijn relevante ervaring volgt na inhoudelijke verificatie.",
    faqAriaLabel: "Veelgestelde vragen",
    faqs: [
      {
        question: "Is de Modernization Scan een verkoopgesprek?",
        answer:
          "Nee. De scan is bedoeld om de huidige situatie, risico’s en mogelijke vervolgstappen inzichtelijk te maken. De exacte zelfstandige deliverable, commerciële vorm en grenzen worden nog definitief vastgesteld.",
      },
      {
        question: "Moet een oude applicatie volledig opnieuw worden gebouwd?",
        answer:
          "Niet automatisch. Vereenvoudigen, integreren, beveiligen, refactoren, replatformen en gericht vervangen worden eerst tegen elkaar afgewogen.",
      },
      {
        question: "Welke rol speelt AI?",
        answer:
          "AI kan onderdelen van analyse en uitvoering ondersteunen. Scope, menselijke review, testen, security en overdraagbaarheid blijven leidend.",
      },
    ],
    cta: { href: "https://digitechsolutions.nl/over-mij", label: "Over Subor" },
  },
  result: {
    rendered: true,
    kicker: "De beoogde eindtoestand",
    headline: "Niet alleen gemoderniseerd, maar weer onder controle.",
    intro:
      "Het doel is geen verzameling nieuwe tools. Het doel is een werkwijze en systeemlandschap waarin processen zichtbaar zijn, wijzigingen beheersbaar blijven en kennis overdraagbaar is.",
    outcomes: [
      {
        title: "Zichtbare flow",
        description:
          "Medewerkers zien waar werk zich bevindt, welke uitzondering aandacht vraagt en wie verantwoordelijk is voor de volgende stap.",
      },
      {
        title: "Aanpasbare systemen",
        description:
          "Applicaties en integraties kunnen gericht veranderen zonder dat iedere aanpassing een nieuwe noodoplossing veroorzaakt.",
      },
      {
        title: "Belegd eigenaarschap",
        description:
          "Besluiten, uitzonderingen en beheer zijn vastgelegd, zodat continuïteit niet afhankelijk blijft van één persoon of leverancier.",
      },
    ],
    proof: {
      label: "Voorbeeld van de rapportstructuur, geen klantcase",
      anatomy: [
        "Huidige situatie",
        "Frictie en risico’s",
        "Expliciete aannames",
        "Gekozen moderniseringsroute",
        "Scope en uitsluitingen",
        "Kwaliteitsgates",
        "Overdracht en openstaande besluiten",
      ],
    },
  },
  scan: {
    headline: "Je hoeft nog niet te weten wat er gebouwd moet worden.",
    copy:
      "Begin met het scherp krijgen van de huidige situatie, de grootste risico’s en de meest verstandige vervolgstap. De scan kiest de oplossing niet vooraf.",
    mobileCopy: "Breng eerst de situatie, risico’s en verstandigste vervolgstap in kaart.",
    outputs: [
      {
        title: "Huidige staat",
        description:
          "Processen, systemen, afhankelijkheden en eigenaarschap in één overzicht.",
      },
      {
        title: "Beslissingen",
        description: "Frictie, risico’s, opties, aannames en bewuste uitsluitingen.",
      },
      {
        title: "Eerste stap",
        description: "Een gefaseerde route met duidelijke grenzen en beslismomenten.",
      },
    ],
    outputsAriaLabel: "Beoogde output van de Modernization Scan",
    primaryCta: {
      href: "/modernization-scan",
      label: "Bekijk de Modernization Scan",
    },
    fallbackCta: {
      href: "mailto:info@digitechsolutions.nl?subject=Verkennend%20gesprek%20over%20modernisering",
      label: "Plan een verkennend gesprek",
    },
    privacyMicrocopy:
      "De intake vraagt niet om wachtwoorden, broncode of gevoelige persoonsgegevens.",
  },
  footer: {
    descriptor:
      "Workflow- en applicatiemodernisering voor organisaties die weer grip willen op verandering.",
    backToTop: { href: "#top", label: "Terug naar boven" },
    legalLabel: "Digitech Solutions",
    privacyStatus: "Geen analytics of formulierverwerking op deze website.",
    rights: "Digitech Solutions. Alle rechten voorbehouden.",
  },
  metadata: {
    title: "Workflow- en applicatiemodernisering",
    description:
      "Digitech Solutions helpt organisaties vastgelopen workflows en verouderde applicaties onderzoeken en gericht moderniseren, met heldere scope, kwaliteitscontrole en overdracht.",
  },
} as const;

export const bannedMarketingPhrases = [
  "Transformeer je bedrijf met AI",
  "Unlock the power of innovation",
  "Empowering businesses",
  "Seamless solutions",
  "Cutting-edge technology",
  "Future-proof je organisatie",
] as const;

export { methodSteps, modernizationRoutes };

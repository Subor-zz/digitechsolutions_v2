export type CopyStatus =
  | 'definitief'
  | 'voorlopig'
  | 'bewijs-nodig'
  | 'goedkeuring-nodig';

export type ModernizationRoute = {
  id: 'workflow' | 'application';
  anchor: 'workflowmodernisering' | 'applicatiemodernisering';
  label: string;
  headline: string;
  signals: readonly string[];
  output: string;
  cta: string;
};

export type MethodStep = {
  number: string;
  id: 'scope' | 'map' | 'simplify' | 'build' | 'verify' | 'transfer';
  name: string;
  description: string;
  artifact: string;
};

export type ScanRoute = {
  id: 'workflow' | 'application' | 'combined' | 'unsure';
  code: string;
  title: string;
  description: string;
};

const modernizationRoutes = [
  {
    id: 'workflow',
    anchor: 'workflowmodernisering',
    label: 'Workflowmodernisering',
    headline: 'Van handwerk naar een beheersbare workflow.',
    signals: [
      'Informatie beweegt via inboxen, spreadsheets en losse overdrachten.',
      'Uitzonderingen worden laat zichtbaar of blijven bij één medewerker liggen.',
      'Dezelfde gegevens worden op meerdere plekken bijgehouden.',
      'Proceskennis zit vooral in hoofden en tijdelijke afspraken.',
    ],
    output:
      'Een eenvoudiger proces met zichtbare controles, duidelijk eigenaarschap en overdraagbare werkwijzen.',
    cta: 'Verken workflowmodernisering',
  },
  {
    id: 'application',
    anchor: 'applicatiemodernisering',
    label: 'Applicatiemodernisering',
    headline: 'Van kwetsbare legacy naar software die weer kan veranderen.',
    signals: [
      'Kleine wijzigingen zijn risicovol, traag of disproportioneel duur.',
      'Integraties, afhankelijkheden en documentatie zijn onvoldoende zichtbaar.',
      'Continuïteit hangt van één persoon, leverancier of verouderde techniek af.',
      'De applicatie ondersteunt het huidige proces niet meer goed.',
    ],
    output:
      'Een gefaseerde moderniseringsroute die behoud, aanpassing en vervanging bewust tegen elkaar afweegt.',
    cta: 'Verken applicatiemodernisering',
  },
] as const satisfies readonly ModernizationRoute[];

const methodSteps = [
  {
    number: '01',
    id: 'scope',
    name: 'Scope',
    description:
      'Maak doel, context, beslissers en grenzen expliciet voordat onderzoek of uitvoering begint.',
    artifact: 'Scopekader en beslisvraag',
  },
  {
    number: '02',
    id: 'map',
    name: 'Map',
    description:
      'Breng proces, data, systemen, risico’s en eigenaarschap samen in één current-state beeld.',
    artifact: 'Proces- en afhankelijkhedenkaart',
  },
  {
    number: '03',
    id: 'simplify',
    name: 'Simplify',
    description:
      'Verwijder onnodige stappen en aannames voordat techniek extra complexiteit toevoegt.',
    artifact: 'Beslislog en oplossingsrichtingen',
  },
  {
    number: '04',
    id: 'build',
    name: 'Build',
    description:
      'Voer alleen de afgebakende verbetering uit die aantoonbaar bijdraagt aan het gekozen doel.',
    artifact: 'Begrensde moderniseringsstap',
  },
  {
    number: '05',
    id: 'verify',
    name: 'Verify',
    description:
      'Toets gedrag, risico’s, uitzonderingen en acceptatie aan vooraf afgesproken criteria.',
    artifact: 'Acceptatie- en controlebewijs',
  },
  {
    number: '06',
    id: 'transfer',
    name: 'Transfer',
    description:
      'Leg besluiten en werking vast zodat het team niet afhankelijk blijft van een black box.',
    artifact: 'Documentatie en overdrachtsset',
  },
] as const satisfies readonly MethodStep[];

const scanRoutes = [
  {
    id: 'workflow',
    code: '01',
    title: 'Mijn proces is handmatig of foutgevoelig',
    description:
      'Overdrachten, dubbele invoer, wachten, uitzonderingen of rapportage domineren.',
  },
  {
    id: 'application',
    code: '02',
    title: 'Mijn applicatie is verouderd of moeilijk aanpasbaar',
    description:
      'Onderhoud, afhankelijkheden, integraties, tests of documentatie begrenzen verandering.',
  },
  {
    id: 'combined',
    code: '03',
    title: 'Workflow en applicatie zitten samen vast',
    description:
      'Proces en softwarebeperkingen beïnvloeden elkaar en moeten samen worden onderzocht.',
  },
  {
    id: 'unsure',
    code: '04',
    title: 'Ik weet nog niet waar de oorzaak zit',
    description:
      'De symptomen zijn merkbaar, maar je hoeft de technische oorzaak niet zelf te bepalen.',
  },
] as const satisfies readonly ScanRoute[];

export const homepageCopy = {
  navigation: {
    skipLink: 'Ga naar het verhaal',
    brandLabel: 'Digitech Solutions — terug naar huidige homepage',
    brandName: 'Digitech Solutions',
    brandDescriptor: 'Workflow- en applicatiemodernisering',
    ariaLabel: 'Prototypehoofdnavigatie',
    links: [
      { href: '#act-chaos', label: 'De frictie' },
      { href: '#act-reflection', label: 'Diagnose' },
      { href: '#act-work', label: 'Expertise' },
      { href: '#delivery-flow', label: 'Werkwijze' },
    ],
    primaryCta: { href: '#scan-entry', label: 'Modernization Scan' },
    progressAriaLabel: 'Vier aktes',
    acts: [
      { href: '#act-chaos', number: '01', label: 'Chaos' },
      { href: '#act-reflection', number: '02', label: 'Bezinning' },
      { href: '#act-work', number: '03', label: 'Arbeid' },
      { href: '#act-result', number: '04', label: 'Resultaat' },
    ],
  },
  hero: {
    kicker: 'Workflow- en applicatiemodernisering',
    headline: 'Moderniseer wat je organisatie vertraagt.',
    lead:
      'Digitech Solutions maakt zichtbaar waar processen, systemen en verantwoordelijkheden vastlopen — en brengt ze terug naar een beheersbare route. Eerst begrijpen. Dan gericht moderniseren.',
    mobileLead:
      'Maak zichtbaar waar processen en systemen vastlopen. Begrijp eerst wat nodig is en moderniseer daarna gericht.',
    primaryCta: { href: '#scan-entry', label: 'Start met de Modernization Scan' },
    secondaryCta: { href: '#delivery-flow', label: 'Bekijk de werkwijze' },
    founderTrustLine:
      'Je werkt rechtstreeks met Subor Cheung. Waar specialistische expertise nodig is, wordt die transparant toegevoegd.',
    systemVisual: {
      ariaLabel: 'Illustratief systeemlandschap met gefragmenteerde overdrachten',
      kicker: 'Illustratief systeemlandschap',
      nodes: ['Inbox', 'Spreadsheet', 'Overdracht', 'Oude applicatie'],
      resultLabel: 'Eén zichtbare route',
      description: 'De vertraging zit zelden op één plek.',
      accessibleText:
        'Een versnipperd proces met losse overdrachten wordt teruggebracht naar een zichtbare en beheersbare route.',
    },
  },
  hiddenDrag: {
    kicker: 'Herken de verborgen frictie',
    headline: 'De grootste vertraging zit vaak tussen je systemen.',
    intro:
      'Niet in één medewerker of één applicatie, maar in de overdrachten ertussen. Informatie wordt gekopieerd, uitzonderingen blijven liggen en tijdelijke workarounds groeien uit tot vaste werkwijzen.',
    mobileIntro:
      'Frictie ontstaat in overdrachten: kopiëren, wachten, herstellen en uitzonderingen zonder duidelijke eigenaar.',
    currentFlow: [
      'Aanvraag',
      'Inbox',
      'Spreadsheet',
      'Controle',
      'Oude applicatie',
      'Handmatige update',
      'Rapportage',
    ],
    signals: [
      'Dubbele invoer',
      'Wachttijd',
      'Foutgevoelige overdracht',
      'Ontbrekende controle',
      'Kennis bij één persoon',
    ],
    targetFlow: [
      'Aanvraag',
      'Validatie',
      'Verwerking',
      'Menselijke controle',
      'Resultaat',
    ],
    currentLabel: 'Huidige toestand — illustratief',
    currentAriaLabel: 'Illustratief huidig proces',
    targetLabel: 'Beheersbare richting — illustratief',
    targetAriaLabel: 'Illustratieve beheersbare procesrichting',
    humanNote:
      'Menselijke controle blijft zichtbaar waar uitzonderingen en beslissingen dat vragen.',
    exitLine:
      'Wat zichtbaar is als losse irritatie, kan samen een structurele beperking vormen.',
    cta: { href: '#workflowmodernisering', label: 'Bekijk hoe Digitech workflows onderzoekt' },
    flowLine: {
      label: 'Gefragmenteerd',
      description:
        'Een onderbroken lijn verbindt losse overdrachten, spreadsheets en een oude applicatie.',
    },
  },
  diagnosis: {
    act: {
      number: '02',
      title: 'Bezinning',
      description:
        'Zet de flow stil. Scheid symptomen van oorzaken voordat een oplossing wordt gekozen.',
    },
    kicker: '02.1 — Diagnose',
    headline: 'Eerst begrijpen. Dan pas automatiseren of herbouwen.',
    intro:
      'Een oplossing is pas verantwoord wanneer duidelijk is waar de frictie ontstaat, welke afhankelijkheden geraakt worden en wat behouden moet blijven. De Modernization Scan onderzoekt daarom eerst vijf samenhangende lagen.',
    mobileIntro:
      'Onderzoek eerst proces, data, systemen, risico en eigenaarschap. Kies daarna pas een route.',
    layers: [
      {
        name: 'Proces',
        description:
          'Waar ontstaan wachttijd, herstelwerk of uitzonderingen zonder duidelijke eigenaar?',
      },
      {
        name: 'Data',
        description:
          'Welke informatie wordt gekopieerd, ontbreekt of wijkt tussen bronnen van elkaar af?',
      },
      {
        name: 'Systemen',
        description:
          'Welke applicaties en integraties begrenzen verandering of vergroten afhankelijkheid?',
      },
      {
        name: 'Risico',
        description:
          'Waar raakt een wijziging continuïteit, privacy, beveiliging of operationele controle?',
      },
      {
        name: 'Eigenaarschap',
        description:
          'Wie neemt besluiten, beheert uitzonderingen en kan na overdracht zelfstandig verder?',
      },
    ],
    asideHeading: 'De oplossing volgt uit wat we aantreffen.',
    asideCopy:
      'Vereenvoudigen, integreren, automatiseren, beveiligen of gericht vernieuwen zijn mogelijke routes. Een volledige herbouw is nooit automatisch het vertrekpunt.',
    decisionOptions: [
      'Vereenvoudigen',
      'Integreren',
      'Automatiseren',
      'Beveiligen',
      'Refactoren',
      'Replatformen',
      'Herbouwen',
      'Uitfaseren',
    ],
    cta: { href: '#act-work', label: 'Bekijk de mogelijke routes' },
    transition:
      'Zodra de huidige situatie begrijpelijk is, kan de modernisering gericht worden afgebakend.',
    pausedFlowLine: {
      label: 'Stilgezet',
      description:
        'De lijn is stilgezet zodat proces, data, systemen, risico en eigenaarschap kunnen worden onderzocht.',
    },
    mappedFlowLine: {
      label: 'In kaart gebracht',
      description: 'Meetpunten en labels maken de verschillende onderzoeksroutes zichtbaar.',
    },
  },
  routes: {
    scanBridge: {
      kicker: '02.2 — Routehypothese',
      headline: 'Waar zit de dragende beperking?',
      intro:
        'Je hoeft dat vooraf niet zeker te weten. De route is een werkhypothese die tijdens de analyse kan worden aangepast.',
      routes: scanRoutes,
      reassurance:
        'Twijfel je? Kies “Ik weet het nog niet”. De passende onderzoeksroute wordt pas na de intake bevestigd.',
      cta: { href: '#scan-entry', label: 'Bekijk de Modernization Scan' },
    },
    act: {
      number: '03',
      title: 'Arbeid',
      description:
        'Van een onderbouwde route naar afgebakende uitvoering met zichtbare beslismomenten.',
    },
    kicker: 'Eén diagnose, twee expertise-routes',
    headline: 'Waar zit de dragende beperking?',
    intro:
      'Je hoeft dat vooraf niet zeker te weten. De route is een werkhypothese die tijdens de analyse kan worden aangepast.',
    mobileIntro:
      'De route is een eerste hypothese. Je hoeft vooraf niet te weten of het probleem vooral in het proces, de applicatie of beide zit.',
    items: modernizationRoutes,
    combined: {
      heading: 'Workflow en applicatie zitten samen vast',
      copy:
        'Soms ligt de frictie niet in één proces of één systeem. Kies dan gecombineerd of onzeker. De intake vertrekt vanuit wat je dagelijks merkt, niet vanuit een technische diagnose die je vooraf zelf moet stellen.',
      cta: { href: '#scan-entry', label: 'Ik weet nog niet welke route past' },
    },
    organizedFlowLine: {
      label: 'Geordend',
      description:
        'De lijn splitst waar nodig, passeert afgebakende stappen en komt gecontroleerd samen.',
    },
  },
  method: {
    kicker: 'Van analyse naar gecontroleerde uitvoering',
    headline: 'Gericht waar het kan. Gecontroleerd waar het moet.',
    intro:
      'Iedere modernisering vraagt een andere technische ingreep, maar dezelfde discipline: heldere grenzen, zichtbare besluiten, toetsbare kwaliteit en professionele overdracht.',
    mobileIntro: 'Heldere grenzen, zichtbare besluiten, toetsbare kwaliteit en overdracht.',
    steps: methodSteps,
    closing:
      'Het doel is niet alleen iets werkends opleveren, maar zorgen dat de organisatie begrijpt wat er is veranderd en hoe zij verder kan.',
  },
  founder: {
    kicker: '03.3 — Founder-led verantwoordelijkheid',
    headline: 'Geen overdracht naar een anoniem deliveryteam.',
    lead:
      'Je werkt rechtstreeks met Subor Cheung: van analyse en functionele vertaling tot afstemming, uitvoering en overdracht.',
    supporting:
      'Waar specialistische diepgang nodig is, wordt die expertise transparant toegevoegd. De scope, verantwoordelijkheden en besluitvorming blijven zichtbaar. Digitech Solutions doet zich niet voor als een groot intern bureau.',
    publicBioPlaceholder:
      'Meer over Subor en zijn relevante ervaring volgt na inhoudelijke verificatie.',
    portraitPlaceholder: 'Founderbeeld volgt na inhoudelijke goedkeuring.',
    capabilities: [
      'Procesanalyse',
      'Functionele vertaling',
      'Productdenken',
      'Technische uitvoering',
      'Deliverycontrole',
      'Overdracht',
    ],
    trustLine: 'Eén aanspreekpunt. Heldere scope. Geen black box.',
    cta: { href: '/over-mij', label: 'Over Subor' },
    faqs: [
      {
        question: 'Is de Modernization Scan een verkoopgesprek?',
        answer:
          'Nee. De scan is bedoeld om de huidige situatie, risico’s en mogelijke vervolgstappen inzichtelijk te maken. De exacte zelfstandige deliverable, commerciële vorm en grenzen worden nog definitief vastgesteld.',
      },
      {
        question: 'Moet een oude applicatie volledig opnieuw worden gebouwd?',
        answer:
          'Niet automatisch. Vereenvoudigen, integreren, beveiligen, refactoren, replatformen en gericht vervangen worden eerst tegen elkaar afgewogen.',
      },
      {
        question: 'Welke rol speelt AI?',
        answer:
          'AI kan onderdelen van analyse en uitvoering ondersteunen. Scope, menselijke review, testen, security en overdraagbaarheid blijven leidend.',
      },
    ],
    conclusion:
      'Van inzicht naar een afgebakende oplossing met zichtbare besluiten en overdracht.',
  },
  result: {
    act: {
      number: '04',
      title: 'Resultaat',
      description:
        'De beoogde eindtoestand maakt flow, systemen en eigenaarschap weer beheersbaar.',
    },
    kicker: 'De beoogde eindtoestand',
    headline: 'Niet alleen gemoderniseerd, maar weer onder controle.',
    intro:
      'Het doel is geen verzameling nieuwe tools. Het doel is een werkwijze en systeemlandschap waarin processen zichtbaar zijn, wijzigingen beheersbaar blijven en kennis overdraagbaar is.',
    outcomes: [
      {
        title: 'Zichtbare flow',
        description:
          'Medewerkers zien waar werk zich bevindt, welke uitzondering aandacht vraagt en wie verantwoordelijk is voor de volgende stap.',
      },
      {
        title: 'Aanpasbare systemen',
        description:
          'Applicaties en integraties kunnen gericht veranderen zonder dat iedere aanpassing een nieuwe noodoplossing veroorzaakt.',
      },
      {
        title: 'Belegd eigenaarschap',
        description:
          'Besluiten, uitzonderingen en beheer zijn vastgelegd, zodat continuïteit niet afhankelijk blijft van één persoon of leverancier.',
      },
    ],
    proof: {
      kicker: 'Voorbeeld van de rapportstructuur — geen klantcase',
      headline: 'Wat later aantoonbaar moet worden vastgelegd.',
      intro:
        'Dit is een rapportanatomie, geen testimonial, statistiek of gepubliceerd klantresultaat.',
      anatomy: [
        'Huidige situatie',
        'Frictie en risico’s',
        'Expliciete aannames',
        'Gekozen moderniseringsroute',
        'Scope en uitsluitingen',
        'Kwaliteitsgates',
        'Overdracht en openstaande besluiten',
      ],
    },
    verifiedFlowLine: {
      label: 'Beheersbaar',
      description:
        'Een verbonden lijn met zichtbare controlepunten verbeeldt de gewenste beheersbare toestand.',
    },
  },
  scan: {
    kicker: '04.3 — Scan Entry',
    headline: 'Je hoeft nog niet te weten wat er gebouwd moet worden.',
    copy:
      'Begin met het scherp krijgen van de huidige situatie, de grootste risico’s en de meest verstandige vervolgstap. De scan kiest de oplossing niet vooraf.',
    mobileCopy: 'Breng eerst de situatie, risico’s en verstandigste vervolgstap in kaart.',
    outputLabel: 'Beoogde output — voorlopig',
    outputs: [
      {
        title: 'Huidige staat',
        description: 'Processen, systemen, afhankelijkheden en eigenaarschap in één overzicht.',
      },
      {
        title: 'Beslissingen',
        description: 'Frictie, risico’s, opties, aannames en bewuste uitsluitingen.',
      },
      {
        title: 'Eerste stap',
        description: 'Een gefaseerde route met duidelijke grenzen en beslismomenten.',
      },
    ],
    primaryCta: 'Start met de Modernization Scan',
    disabledCtaLabel: 'Start met de Modernization Scan — nog niet beschikbaar',
    fallbackCta: {
      href: 'mailto:info@digitechsolutions.nl?subject=Verkennend%20gesprek%20over%20modernisering',
      label: 'Plan een verkennend gesprek',
    },
    prototypeMicrocopy:
      'Prototype: er wordt op deze pagina nog geen formulierdata verzameld of verzonden.',
  },
  footer: {
    brandName: 'Digitech Solutions',
    descriptor:
      'Workflow- en applicatiemodernisering voor organisaties die weer grip willen op verandering.',
    links: [
      { href: '#workflowmodernisering', label: 'Workflowmodernisering' },
      { href: '#applicatiemodernisering', label: 'Applicatiemodernisering' },
      { href: '#scan-entry', label: 'Modernization Scan' },
      { href: '#delivery-flow', label: 'Werkwijze' },
      { href: '/over-mij', label: 'Over Subor' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/voorwaarden', label: 'Voorwaarden' },
    ],
    prototypeStatus:
      'Rebrandprototype — niet geïndexeerd, geen analytics en geen formulierverwerking.',
    rights: 'Digitech Solutions. Alle rechten voorbehouden.',
  },
  metadata: {
    title: 'Workflow- en applicatiemodernisering | Digitech Solutions',
    description:
      'Digitech Solutions helpt organisaties vastgelopen workflows en verouderde applicaties onderzoeken en gericht moderniseren — met heldere scope, kwaliteitscontrole en overdracht.',
    openGraphTitle: 'Moderniseer wat je organisatie vertraagt. | Digitech Solutions',
    openGraphDescription:
      'Van verborgen procesfrictie en kwetsbare legacy naar een beheersbare moderniseringsroute.',
  },
} as const;

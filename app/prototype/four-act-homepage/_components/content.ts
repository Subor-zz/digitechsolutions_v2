export const frictionSignals = [
  'Dubbele invoer',
  'Wachttijd',
  'Foutkans',
  'Ontbrekende audit trail',
  'Kennisafhankelijkheid',
] as const;

export const currentFlow = [
  'Aanvraag',
  'Inbox',
  'Excel',
  'Controle',
  'Legacy-app',
  'Update',
  'Rapportage',
] as const;

export const controlledFlow = [
  'Aanvraag',
  'Validatie',
  'Verwerking',
  'Menselijke controle',
  'Resultaat',
] as const;

export const diagnosticLayers = [
  { name: 'Proces', description: 'Waar ontstaan overdrachten, uitzonderingen en onnodige stappen?' },
  { name: 'Data', description: 'Welke informatie wordt gekopieerd, gewijzigd of te laat gezien?' },
  { name: 'Systemen', description: 'Welke applicaties en integraties begrenzen verandering?' },
  { name: 'Risico', description: 'Wat raakt continuïteit, veiligheid of betrouwbare uitvoering?' },
  { name: 'Eigenaarschap', description: 'Wie beslist, beheert en draagt kennis over?' },
] as const;

export const decisionOptions = [
  'Vereenvoudigen',
  'Integreren',
  'Automatiseren',
  'Beveiligen',
  'Refactoren',
  'Replatformen',
  'Herbouwen',
  'Uitfaseren',
] as const;

export const scanRoutes = [
  {
    id: 'workflow',
    code: '01',
    title: 'Mijn proces is handmatig of foutgevoelig',
    description: 'Overdrachten, dubbele invoer, wachten, uitzonderingen of rapportage domineren.',
  },
  {
    id: 'application',
    code: '02',
    title: 'Mijn applicatie is verouderd of moeilijk aanpasbaar',
    description: 'Onderhoud, dependencies, integraties, tests of documentatie begrenzen verandering.',
  },
  {
    id: 'combined',
    code: '03',
    title: 'Workflow en applicatie zitten samen vast',
    description: 'Proces en softwarebeperkingen beïnvloeden elkaar en moeten samen worden onderzocht.',
  },
  {
    id: 'unsure',
    code: '04',
    title: 'Ik weet nog niet waar de oorzaak zit',
    description: 'De symptomen zijn merkbaar, maar je hoeft de technische oorzaak niet zelf te bepalen.',
  },
] as const;

export const modernizationRoutes = [
  {
    label: 'Workflowmodernisering',
    headline: 'Van handwerk naar een beheersbare workflow.',
    points: ['Proces en uitzonderingen in kaart', 'Integraties en menselijke controles', 'Eigenaarschap en overdracht'],
  },
  {
    label: 'Applicatiemodernisering',
    headline: 'Van kwetsbare legacy naar software die weer vooruit kan.',
    points: ['Applicatielagen en dependencies', 'Gefaseerde opties zonder standaardrewrite', 'Testbaarheid, beheer en overdracht'],
  },
] as const;

export const deliverySteps = [
  { number: '01', name: 'Scope', description: 'Doel, context, grenzen en uitsluitingen expliciet maken.' },
  { number: '02', name: 'Map', description: 'Proces, data, systemen, risico en eigenaarschap begrijpen.' },
  { number: '03', name: 'Simplify', description: 'Onnodige complexiteit verwijderen vóór er wordt gebouwd.' },
  { number: '04', name: 'Build', description: 'Een afgebakende moderniseringsstap gericht uitvoeren.' },
  { number: '05', name: 'Verify', description: 'Review- en acceptatiegates vooraf benoemen en doorlopen.' },
  { number: '06', name: 'Transfer', description: 'Besluiten, kennis en beheerafspraken overdraagbaar vastleggen.' },
] as const;

export const founderCapabilities = [
  'Procesanalyse',
  'Functionele vertaling',
  'Productdenken',
  'AI-ondersteunde engineering',
  'Deliverycontrole',
  'Overdracht',
] as const;

export const outcomeDirections = [
  {
    title: 'Zichtbare flow',
    description: 'Minder verborgen overdrachten en duidelijkere beslismomenten als gewenste toestand.',
  },
  {
    title: 'Aanpasbare systemen',
    description: 'Software en integraties die gecontroleerd kunnen veranderen als moderniseringsdoel.',
  },
  {
    title: 'Belegd eigenaarschap',
    description: 'Documentatie, beheer en verantwoordelijkheden die niet bij één kennisdrager blijven.',
  },
] as const;

export const provisionalScanOutputs = [
  'Inzicht in de huidige situatie',
  'Risico’s en afhankelijkheden',
  'Een mogelijke gefaseerde route',
] as const;

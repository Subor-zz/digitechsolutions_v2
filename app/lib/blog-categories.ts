// Blog categories configuration for SEO, internal linking, and structured data

export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  relatedServices: Array<{ href: string; title: string; icon: string }>;
}

export const BLOG_CATEGORIES: Record<string, BlogCategory> = {
  fractionalCto: {
    id: "fractionalCto",
    slug: "fractional-cto",
    name: "Fractional CTO",
    title: "Fractional CTO",
    description: "Artikelen over fractional CTO dienstverlening voor startups en MKB",
    intro: "Een fractional CTO biedt strategische technische expertise zonder de kosten van een fulltime executive. Ontdek wanneer en hoe je deze rol inzet voor maximale impact op je technische roadmap en teamontwikkeling.",
    metaTitle: "Fractional CTO | StrategischTechnisch Leiderschap voor Startups",
    metaDescription: "Lees hoe een fractional CTO jouw startup helpt met technische roadmap, architectuur en teamontwikkeling. Senior expertise zonder fulltime kosten.",
    relatedServices: [
      { href: "/diensten/zzp-applicatiebeheerder", title: "ZZP Applicatiebeheerder", icon: "settings" },
      { href: "/diensten/zzp-functioneel-beheerder", title: "ZZP Functioneel Beheerder", icon: "sync_alt" },
    ],
  },
  zzpApplicatiebeheerder: {
    id: "zzpApplicatiebeheerder",
    slug: "zzp-applicatiebeheerder",
    name: "ZZP Applicatiebeheerder",
    title: "ZZP Applicatiebeheerder",
    description: "Inzichten en advies over applicatiebeheer voor MKB en overheid",
    intro: "Een ZZP applicatiebeheerder zorgt voor stabiliteit, continuïteit en structuur in je applicatielandschap. Ontdek best practices, valkuilen en wanneer je externe expertise nodig hebt.",
    metaTitle: "ZZP Applicatiebeheerder | Tips & Inzichten voor Applicatiebeheer",
    metaDescription: "Lees alles over applicatiebeheer, van het voorkomen van storingen tot het effectief inzetten van een ervaren ZZP applicatiebeheerder.",
    relatedServices: [
      { href: "/diensten/zzp-applicatiebeheerder", title: "ZZP Applicatiebeheerder", icon: "settings" },
      { href: "/diensten/zzp-functioneel-beheerder", title: "ZZP Functioneel Beheerder", icon: "sync_alt" },
      { href: "/diensten/support-itsm", title: "IT Support & ITSM", icon: "support_agent" },
    ],
  },
  zzpFunctioneelBeheerder: {
    id: "zzpFunctioneelBeheerder",
    slug: "zzp-functioneel-beheerder",
    name: "ZZP Functioneel Beheerder",
    title: "ZZP Functioneel Beheerder",
    description: "Kennisartikelen over functioneel beheer en de brug tussen business en IT",
    intro: "Functioneel beheer vertaalt business wensen naar IT oplossingen. Leer over requirements, adoptie en het optimaal inrichten van functioneel beheer.",
    metaTitle: "ZZP Functioneel Beheerder | Business & IT Vertaling",
    metaDescription: "Ontdek hoe functioneel beheer de brug slaat tussen gebruikers en systemen. Tips over adoptie, requirements en processen.",
    relatedServices: [
      { href: "/diensten/zzp-functioneel-beheerder", title: "ZZP Functioneel Beheerder", icon: "sync_alt" },
      { href: "/diensten/zzp-applicatiebeheerder", title: "ZZP Applicatiebeheerder", icon: "settings" },
    ],
  },
  itsmSupport: {
    id: "itsmSupport",
    slug: "itsm-support",
    name: "ITSM Support",
    title: "ITSM Support",
    description: "Artikelen over IT Service Management en professionalisering van support",
    intro: "Groei van een ad-hoc helpdesk naar professionele ITSM support. Lees over ITIL-processen, toolselectie en verbetering van je supportorganisatie.",
    metaTitle: "ITSM Support & ITIL | Professionaliseer je IT Helpdesk",
    metaDescription: "Tips en stappenplannen voor het professionaliseren van interne IT support met ITSM en ITIL best practices.",
    relatedServices: [
      { href: "/diensten/support-itsm", title: "ITSM Support", icon: "support_agent" },
      { href: "/diensten/zzp-applicatiebeheerder", title: "ZZP Applicatiebeheerder", icon: "settings" },
    ],
  },
  fullStack: {
    id: "fullStack",
    slug: "full-stack-mvp",
    name: "Full-Stack & MVP",
    title: "Full-Stack & MVP Development",
    description: "Articles over MVP development, React, Next.js en technische schuld",
    intro: "Van MVP tot schaalbaar product: leer hoe je software bouwt die meegroeit met je business. Onderwerpen variëren van technologische keuzes tot technische schuld beheer.",
    metaTitle: "Full-Stack & MVP Development | Software Bouwen voor Startups",
    metaDescription: "Gids voor MVP development, technologiekeuzes en technische schuld. Lees hoe je schaalbare software bouwt met React en Next.js.",
    relatedServices: [
      { href: "/diensten/full-stack-development", title: "Full Stack Developer", icon: "code" },
      { href: "/diensten/productconsultatie", title: "Productconsultatie & Technische Validatie", icon: "lightbulb" },
    ],
  },
  performanceSecurity: {
    id: "performanceSecurity",
    slug: "performance-security",
    name: "Performance & Security",
    title: "Performance & Security",
    description: "Tips voor webapp performance en security best practices",
    intro: "Performance en security zijn cruciaal voor het succes van webapplicaties. Ontdek hoe je problemen herkent, voorkomt en oplost voor een snelle en veilige gebruikerservaring.",
    metaTitle: "Performance & Security | Snelle en Veilige Webapplicaties",
    metaDescription: "Herken en los performanceproblemen en security-risico's op. Praktische tips voor het beveiligen en optimaliseren van webapplicaties.",
    relatedServices: [
      { href: "/diensten/zzp-applicatiebeheerder", title: "ZZP Applicatiebeheerder", icon: "settings" },
      { href: "/diensten/productconsultatie", title: "Productconsultatie & Technische Validatie", icon: "search" },
    ],
  },
  strategie: {
    id: "strategie",
    slug: "strategie-beslissingen",
    name: "Strategie & Beslissingen",
    title: "Strategie & Beslissingen",
    description: "Technische strategie, build vs buy en beslissingsframeworks",
    intro: "Technische beslissingen hebben grote impact op de toekomst van je bedrijf. Lees hoe je weloverwogen keuzes maakt over technologie, architectuur en partnerships.",
    metaTitle: "Technische Strategie & Build vs Buy Beslissingen",
    metaDescription: "Framework voor technische beslissingen: build vs buy, technologiekeuzes en strategische planning. Maak informed keuzes voor je tech stack.",
    relatedServices: [
      { href: "/diensten/zzp-functioneel-beheerder", title: "ZZP Functioneel Beheerder", icon: "sync_alt" },
      { href: "/diensten/it-project-manager", title: "IT Project Manager", icon: "assignment" },
      { href: "/diensten/productconsultatie", title: "Productconsultatie & Technische Validatie", icon: "lightbulb" },
    ],
  },
};

// Blog post slug to category mapping
export const BLOG_POST_CATEGORIES: Record<string, keyof typeof BLOG_CATEGORIES> = {
  // Fractional CTO posts
  "wanneer-heb-je-een-fractional-cto-nodig": "fractionalCto",
  "kosten-vs-fulltime-cto": "fractionalCto",
  "fractional-cto-vs-interim-cto": "fractionalCto",
  "fractional-cto-bij-due-diligence": "fractionalCto",
  "technische-fouten-zonder-cto": "fractionalCto",
  "tech-roadmap-voor-startups": "fractionalCto",

  // ZZP Applicatiebeheerder posts
  "wanneer-zzp-applicatiebeheerder-inhuren": "zzpApplicatiebeheerder",
  "applicatiebeheerder-binnen-overheidsorganisaties": "zzpApplicatiebeheerder",
  "wat-is-een-applicatie-audit": "zzpApplicatiebeheerder",
  "performanceproblemen-herkennen": "zzpApplicatiebeheerder",
  "security-risico's-bij-webapps": "zzpApplicatiebeheerder",

  // ZZP Functioneel Beheerder posts
  "verschil-functioneel-applicatiebeheer": "zzpFunctioneelBeheerder",

  // ITSM Support posts
  "van-ad-hoc-helpdesk-naar-itil-support": "itsmSupport",

  // Full-Stack & MVP posts
  "mvp-laten-bouwen-waar-op-letten": "fullStack",
  "react-vs-nextjs-voor-startups": "fullStack",
  "technische-schuld-voorkomen": "fullStack",
  "wanneer-herschrijven-vs-doorbouwen": "fullStack",

  // Strategie & Beslissingen posts
  "build-vs-buy-beslissingen": "strategie",
};

// Helper functions
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return Object.values(BLOG_CATEGORIES).find((cat) => cat.slug === slug);
}

export function getCategoryByPostSlug(postSlug: string): BlogCategory | undefined {
  const categoryKey = BLOG_POST_CATEGORIES[postSlug];
  return categoryKey ? BLOG_CATEGORIES[categoryKey] : undefined;
}

export function getPostsByCategory(categoryId: string): string[] {
  return Object.entries(BLOG_POST_CATEGORIES)
    .filter(([, cat]) => cat === categoryId)
    .map(([slug]) => slug);
}

// Get all categories as array
export function getAllCategories(): BlogCategory[] {
  return Object.values(BLOG_CATEGORIES);
}

// Generate category page URL
export function getCategoryUrl(slug: string): string {
  return `/blog/c/${slug}`;
}

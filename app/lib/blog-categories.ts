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
  itConsultancy: {
    id: "itConsultancy",
    slug: "it-consultancy-audits",
    name: "IT-Consultancy & Audits",
    title: "IT-Consultancy & Audits",
    description: "Advies over applicatie-audits, performance en security",
    intro: "IT-consultancy en audits geven inzicht in de kwaliteit, veiligheid en performance van je applicaties. Identificeer risico's, verbeterpunten en optimaliseer je technische landschap.",
    metaTitle: "IT-Consultancy & Applicatie Audits | Kwaliteit & Security",
    metaDescription: "Inzicht in de kwaliteit, veiligheid en performance van je applicaties. Ontdek wat een audit oplevert en welke verbeteringen mogelijk zijn.",
    relatedServices: [
      { href: "/diensten/zzp-applicatiebeheerder", title: "ZZP Applicatiebeheerder", icon: "settings" },
      { href: "/diensten/zzp-functioneel-beheerder", title: "ZZP Functioneel Beheerder", icon: "sync_alt" },
      { href: "/diensten/support-itsm", title: "IT Support & ITSM", icon: "support_agent" },
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

  // IT-Consultancy & Audits posts
  "wat-is-een-applicatie-audit": "itConsultancy",
  "performanceproblemen-herkennen": "performanceSecurity",
  "security-risico's-bij-webapps": "performanceSecurity",

  // Full-Stack & MVP posts
  "mvp-laten-bouwen-waar-op-letten": "fullStack",
  "react-vs-nextjs-voor-startups": "fullStack",
  "technische-schuld-voorkomen": "fullStack",
  "wanneer-herschrijven-vs-doorbouwen": "fullStack",
  "applicatiebeheerder-binnen-overheidsorganisaties": "fullStack",

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

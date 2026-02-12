// Meta validation configuration and utilities
// This file ensures all routes have proper meta titles and descriptions

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  minLength?: number;
  maxLength?: number;
}

// Minimum and maximum lengths for meta
export const META_MIN_TITLE_LENGTH = 30;
export const META_MAX_TITLE_LENGTH = 60;
export const META_MIN_DESCRIPTION_LENGTH = 140;
export const META_MAX_DESCRIPTION_LENGTH = 160;

// Route metadata registry - all routes MUST have an entry here
export const ROUTE_META_REGISTRY: RouteMeta[] = [
  // Homepage
  {
    path: "/",
    title: "Digitech Solutions | IT-consultancy, fractional CTO & development",
    description: "Senior IT-consultancy voor startups en MKB. Fractional CTO, IT-advies en schaalbare software. Transparant, inhoudelijk en zonder ruis.",
  },

  // Diensten
  {
    path: "/diensten",
    title: "Diensten | Digitech Solutions",
    description: "Onze diensten: Fractional CTO, IT-consultancy, full-stack development, projectmanagement en productconsultatie voor startups en MKB.",
  },
  {
    path: "/diensten/fractional-cto",
    title: "Fractional CTO | Strategisch Technisch Leiderschap",
    description: "Fractional CTO dienstverlening voor startups en MKB. Senior technische expertise zonder fulltime kosten. Roadmap, architectuur en teambegeleiding.",
  },
  {
    path: "/diensten/it-consultancy",
    title: "IT-Consultancy | Applicatie-audits & Advies",
    description: "IT-consultancy voor applicatie-audits, performance optimalisatie en security advies. Inzicht in jouw technische landschap.",
  },
  {
    path: "/diensten/full-stack-development",
    title: "Full-Stack Development | Web & Mobile Apps",
    description: "Full-stack development voor web en mobiele apps. React, Next.js, Node.js en meer. Van MVP tot schaalbare oplossing.",
  },
  {
    path: "/diensten/projectmanagement",
    title: "Technisch Projectmanagement | Agile & Scrum",
    description: "Technisch projectmanagement met Agile en Scrum. End-to-end levering, roadmapping en stakeholdercommunicatie.",
  },
  {
    path: "/diensten/product-business-consultatie",
    title: "Productconsultatie | Product Strategie & Advies",
    description: "Productconsultatie voor startups. PRDs, featurespecificaties, MVP-definitie en go-to-market advies.",
  },
  {
    path: "/diensten/support-itsm",
    title: "Support & IT-servicemanagement | SLA's & Incident Management",
    description: "Support en ITSM dienstverlening. SLA's, incident- en change management, supportstructuur & tooling.",
  },

  // Blog
  {
    path: "/blog",
    title: "IT & Technologie Blog | Digitech Solutions",
    description: "Artikelen over fractional CTO, IT-consultancy en software development voor startups en MKB.",
  },

  // Blog categories
  {
    path: "/blog/c/fractional-cto",
    title: "Fractional CTO | Strategisch Technisch Leiderschap voor Startups",
    description: "Lees hoe een fractional CTO jouw startup helpt met technische roadmap, architectuur en teamontwikkeling. Senior expertise zonder fulltime kosten.",
  },
  {
    path: "/blog/c/it-consultancy-audits",
    title: "IT-Consultancy & Applicatie Audits | Kwaliteit & Security",
    description: "Inzicht in de kwaliteit, veiligheid en performance van je applicaties. Ontdek wat een audit oplevert en welke verbeteringen mogelijk zijn.",
  },
  {
    path: "/blog/c/full-stack-mvp",
    title: "Full-Stack & MVP Development | Software Bouwen voor Startups",
    description: "Gids voor MVP development, technologiekeuzes en technische schuld. Lees hoe je schaalbare software bouwt met React en Next.js.",
  },
  {
    path: "/blog/c/performance-security",
    title: "Performance & Security | Snelle en Veilige Webapplicaties",
    description: "Herken en los performanceproblemen en security-risico's op. Praktische tips voor het beveiligen en optimaliseren van webapplicaties.",
  },
  {
    path: "/blog/c/strategie-beslissingen",
    title: "Technische Strategie & Build vs Buy Beslissingen",
    description: "Framework voor technische beslissingen: build vs buy, technologiekeuzes en strategische planning. Maak informed keuzes voor je tech stack.",
  },

  // Over mij
  {
    path: "/over-mij",
    title: "Over Mij | Subor Cheung | Digitech Solutions",
    description: "Kennis maken met Subor Cheung, IT consultant en full-stack developer. 9+ jaar ervaring in IT-consultancy en software development.",
  },

  // Tarieven
  {
    path: "/tarieven",
    title: "Tarieven | Digitech Solutions",
    description: "Transparante tarieven voor fractional CTO, IT-consultancy en full-stack development. Geen verrassingen, heldere afspraken.",
  },

  // Contact
  {
    path: "/contact",
    title: "Contact | Digitech Solutions",
    description: "Neem contact op met Digitech Solutions. Plan een gratis intake (15 min) om jouw situatie te bespreken en ontdek mogelijkheden.",
  },

  // Legal pages
  {
    path: "/privacy",
    title: "Privacyverklaring | Digitech Solutions",
    description: "Privacyverklaring van Digitech Solutions. Wij hechten groot belang aan jouw privacy en de bescherming van je persoonsgegevens.",
  },
  {
    path: "/cookiebeleid",
    title: "Cookiebeleid | Digitech Solutions",
    description: "Cookiebeleid van Digitech Solutions. Informatie over welke cookies wij gebruiken en hoe je deze kunt beheren.",
  },
  {
    path: "/voorwaarden",
    title: "Algemene Voorwaarden | Digitech Solutions",
    description: "Algemene voorwaarden van Digitech Solutions. Lees onze voorwaarden voor dienstverlening, betalingen en afspraken.",
  },

  // Local SEO
  {
    path: "/it-consultant-breda",
    title: "IT Consultant Breda | Digitech Solutions",
    description: "Zoek je een IT consultant in Breda? Digitech Solutions levert fractional CTO, IT-consultancy en development in Breda en omstreken.",
  },
];

/**
 * Validates if a meta title meets requirements
 */
export function validateTitle(title: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!title) {
    errors.push("Title is missing");
  }

  if (title && title.length < META_MIN_TITLE_LENGTH) {
    errors.push(`Title is too short (${title.length}/${META_MIN_TITLE_LENGTH})`);
  }

  if (title && title.length > META_MAX_TITLE_LENGTH) {
    errors.push(`Title is too long (${title.length}/${META_MAX_TITLE_LENGTH})`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates if a meta description meets requirements
 */
export function validateDescription(description: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!description) {
    errors.push("Description is missing");
  }

  if (description && description.length < META_MIN_DESCRIPTION_LENGTH) {
    errors.push(`Description is too short (${description.length}/${META_MIN_DESCRIPTION_LENGTH})`);
  }

  if (description && description.length > META_MAX_DESCRIPTION_LENGTH) {
    errors.push(`Description is too long (${description.length}/${META_MAX_DESCRIPTION_LENGTH})`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Gets all duplicate titles in the registry
 */
export function findDuplicateTitles(): string[] {
  const titles = ROUTE_META_REGISTRY.map(r => r.title);
  const duplicates = titles.filter((title, index) => titles.indexOf(title) !== index);
  return [...new Set(duplicates)];
}

/**
 * Gets all duplicate descriptions in the registry
 */
export function findDuplicateDescriptions(): string[] {
  const descriptions = ROUTE_META_REGISTRY.map(r => r.description);
  const duplicates = descriptions.filter((desc, index) => descriptions.indexOf(desc) !== index);
  return [...new Set(duplicates)];
}

/**
 * Validates all routes in the registry
 */
export function validateAllRoutes(): {
  valid: RouteMeta[];
  invalid: RouteMeta[];
  duplicates: { titles: string[]; descriptions: string[] };
} {
  const valid: RouteMeta[] = [];
  const invalid: RouteMeta[] = [];

  for (const route of ROUTE_META_REGISTRY) {
    const titleValid = validateTitle(route.title);
    const descValid = validateDescription(route.description);

    if (titleValid.valid && descValid.valid) {
      valid.push(route);
    } else {
      invalid.push(route);
    }
  }

  return {
    valid,
    invalid,
    duplicates: {
      titles: findDuplicateTitles(),
      descriptions: findDuplicateDescriptions(),
    },
  };
}

/**
 * Build-time validation function
 * Call this in a build script or next.config.mjs to fail build on validation errors
 */
export function validateMetaAtBuildTime(): void {
  const validation = validateAllRoutes();

  if (validation.invalid.length > 0) {
    console.error("\x1b[31m%s\x1b[0m", "❌ Meta Validation Failed!");
    console.error("\nInvalid routes:");

    for (const route of validation.invalid) {
      const titleResult = validateTitle(route.title);
      const descResult = validateDescription(route.description);

      console.error(`\n  📄 ${route.path}`);
      if (titleResult.errors.length > 0) {
        console.error(`     Title errors: ${titleResult.errors.join(", ")}`);
      }
      if (descResult.errors.length > 0) {
        console.error(`     Description errors: ${descResult.errors.join(", ")}`);
      }
    }
  }

  if (validation.duplicates.titles.length > 0) {
    console.warn("\n⚠️  Duplicate titles found:", validation.duplicates.titles);
  }

  if (validation.duplicates.descriptions.length > 0) {
    console.warn("\n⚠️  Duplicate descriptions found:", validation.duplicates.descriptions);
  }

  if (validation.invalid.length > 0) {
    throw new Error("Meta validation failed. Please fix the errors above.");
  }

  console.log("\x1b[32m%s\x1b[0m", "✅ Meta validation passed!");
}

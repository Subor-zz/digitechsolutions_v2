// Internal linking configuration for pillar/cluster strategy

export interface RelatedPost {
  slug: string;
  title: string;
}

export interface RelatedService {
  href: string;
  title: string;
  icon?: string;
}

// Blog posts grouped by topic for internal linking
export const blogPosts: Record<string, RelatedPost[]> = {
  fractionalCto: [
    { slug: 'wanneer-heb-je-een-fractional-cto-nodig', title: 'Wanneer heb je een fractional CTO nodig?' },
    { slug: 'kosten-vs-fulltime-cto', title: 'Kosten: fractional CTO vs fulltime CTO' },
    { slug: 'fractional-cto-bij-due-diligence', title: 'Fractional CTO bij due diligence' },
    { slug: 'fractional-cto-vs-interim-cto', title: 'Fractional CTO vs interim CTO' },
    { slug: 'technische-fouten-zonder-cto', title: 'Technische fouten zonder CTO' },
    { slug: 'tech-roadmap-voor-startups', title: 'Tech roadmap voor startups' },
  ],
  itConsultancy: [
    { slug: 'wat-is-een-applicatie-audit', title: 'Wat is een applicatie-audit?' },
    { slug: 'performanceproblemen-herkennen', title: 'Performanceproblemen herkennen' },
    { slug: 'security-risico\'s-bij-webapps', title: 'Security-risico\'s bij webapps' },
    { slug: 'build-vs-buy-beslissingen', title: 'Build vs buy beslissingen' },
    { slug: 'applicatiebeheerder-binnen-overheidsorganisaties', title: 'Applicatiebeheerder binnen overheidsorganisaties' },
  ],
  fullStack: [
    { slug: 'mvp-laten-bouwen-waar-op-letten', title: 'MVP laten bouwen: waar op letten?' },
    { slug: 'react-vs-nextjs-voor-startups', title: 'React vs Next.js voor startups' },
    { slug: 'technische-schuld-voorkomen', title: 'Technische schuld voorkomen' },
    { slug: 'wanneer-herschrijven-vs-doorbouwen', title: 'Wanneer herschrijven vs doorbouwen?' },
  ],
};

// Service pages with related blog posts
export const serviceToBlogMap: Record<string, string[]> = {
  'fractional-cto': blogPosts.fractionalCto.map(p => `/blog/${p.slug}`),
  'it-consultancy': blogPosts.itConsultancy.map(p => `/blog/${p.slug}`),
  'applicatieconsultatie': blogPosts.itConsultancy.map(p => `/blog/${p.slug}`),
  'full-stack-development': blogPosts.fullStack.map(p => `/blog/${p.slug}`),
  'projectmanagement': [
    '/blog/tech-roadmap-voor-startups',
    '/blog/wanneer-heb-je-een-fractional-cto-nodig',
  ],
  'product-business-consultatie': [
    '/blog/mvp-laten-bouwen-waar-op-letten',
    '/blog/build-vs-buy-beslissingen',
  ],
  'support-itsm': [
    '/blog/performanceproblemen-herkennen',
    '/blog/security-risico\'s-bij-webapps',
  ],
};

// Blog posts with related services
// PRIMARY PILLAR PAGES (SEO Money Pages)
const primaryPillarServices = {
  applicatiebeheerder: { href: '/diensten/zzp-applicatiebeheerder', title: 'ZZP Applicatiebeheerder', icon: 'settings_applications' },
  functioneelBeheerder: { href: '/diensten/zzp-functioneel-beheerder', title: 'ZZP Functioneel Beheerder', icon: 'sync_alt' },
  supportItsm: { href: '/diensten/support-itsm', title: 'IT Support & ITSM', icon: 'support_agent' },
};

// Category to secondary service mapping
const categoryToSecondaryService: Record<string, RelatedService | null> = {
  'Fractional CTO': { href: '/diensten/fractional-cto', title: 'Fractional CTO', icon: 'psychology' },
  'Full-Stack Development': { href: '/diensten/full-stack-development', title: 'Full-stack Development', icon: 'code' },
  'IT-Consultancy': { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
  'IT Project Manager': { href: '/diensten/it-project-manager', title: 'IT Project Manager', icon: 'assignment' },
  'Productconsultatie & Technische Validatie': { href: '/diensten/productconsultatie', title: 'Productconsultatie', icon: 'lightbulb' },
};

export const blogToServiceMap: Record<string, RelatedService[]> = {
  'wanneer-heb-je-een-fractional-cto-nodig': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['Fractional CTO']!,
  ],
  'kosten-vs-fulltime-cto': [
    primaryPillarServices.applicatiebeheerder,
    { href: '/tarieven', title: 'Tarieven', icon: 'payments' },
  ],
  'fractional-cto-vs-interim-cto': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT Project Manager']!,
  ],
  'technische-fouten-zonder-cto': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT-Consultancy']!,
  ],
  'tech-roadmap-voor-startups': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['Productconsultatie & Technische Validatie']!,
  ],
  'fractional-cto-bij-due-diligence': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['Full-Stack Development']!,
  ],
  'mvp-laten-bouwen-waar-op-letten': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['Full-Stack Development']!,
  ],
  'react-vs-nextjs-voor-startups': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT-Consultancy']!,
  ],
  'technische-schuld-voorkomen': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT-Consultancy']!,
  ],
  'wanneer-herschrijven-vs-doorbouwen': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT-Consultancy']!,
  ],
  'wat-is-een-applicatie-audit': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT-Consultancy']!,
  ],
  'performanceproblemen-herkennen': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT-Consultancy']!,
  ],
  'security-risico\'s-bij-webapps': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['IT-Consultancy']!,
  ],
  'build-vs-buy-beslissingen': [
    primaryPillarServices.applicatiebeheerder,
    categoryToSecondaryService['Productconsultatie & Technische Validatie']!,
  ],
};

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
export const blogToServiceMap: Record<string, RelatedService[]> = {
  'wanneer-heb-je-een-fractional-cto-nodig': [
    { href: '/diensten/fractional-cto', title: 'Fractional CTO', icon: 'psychology' },
  ],
  'kosten-vs-fulltime-cto': [
    { href: '/diensten/fractional-cto', title: 'Fractional CTO', icon: 'psychology' },
    { href: '/tarieven', title: 'Tarieven', icon: 'payments' },
  ],
  'fractional-cto-vs-interim-cto': [
    { href: '/diensten/fractional-cto', title: 'Fractional CTO', icon: 'psychology' },
    { href: '/diensten/projectmanagement', title: 'Projectmanagement', icon: 'assignment' },
  ],
  'technische-fouten-zonder-cto': [
    { href: '/diensten/fractional-cto', title: 'Fractional CTO', icon: 'psychology' },
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
  ],
  'tech-roadmap-voor-startups': [
    { href: '/diensten/fractional-cto', title: 'Fractional CTO', icon: 'psychology' },
    { href: '/diensten/product-business-consultatie', title: 'Productconsultatie', icon: 'lightbulb' },
  ],
  'fractional-cto-bij-due-diligence': [
    { href: '/diensten/fractional-cto', title: 'Fractional CTO', icon: 'psychology' },
    { href: '/diensten/full-stack-development', title: 'Full-stack Development', icon: 'code' },
  ],
  'mvp-laten-bouwen-waar-op-letten': [
    { href: '/diensten/full-stack-development', title: 'Full-stack Development', icon: 'code' },
    { href: '/diensten/product-business-consultatie', title: 'Productconsultatie', icon: 'lightbulb' },
  ],
  'react-vs-nextjs-voor-startups': [
    { href: '/diensten/full-stack-development', title: 'Full-stack Development', icon: 'code' },
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
  ],
  'technische-schuld-voorkomen': [
    { href: '/diensten/full-stack-development', title: 'Full-stack Development', icon: 'code' },
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
  ],
  'wanneer-herschrijven-vs-doorbouwen': [
    { href: '/diensten/full-stack-development', title: 'Full-stack Development', icon: 'code' },
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
  ],
  'wat-is-een-applicatie-audit': [
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
    { href: '/diensten/applicatieconsultatie', title: 'Applicatieconsultatie', icon: 'search' },
  ],
  'performanceproblemen-herkennen': [
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
    { href: '/diensten/applicatieconsultatie', title: 'Applicatieconsultatie', icon: 'search' },
  ],
  'security-risico\'s-bij-webapps': [
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
    { href: '/diensten/applicatieconsultatie', title: 'Applicatieconsultatie', icon: 'search' },
  ],
  'build-vs-buy-beslissingen': [
    { href: '/diensten/it-consultancy', title: 'IT-consultancy', icon: 'terminal' },
    { href: '/diensten/applicatieconsultatie', title: 'Applicatieconsultatie', icon: 'search' },
    { href: '/diensten/product-business-consultatie', title: 'Productconsultatie', icon: 'lightbulb' },
  ],
};

import Link from 'next/link';
import { getCategoryByPostSlug, BLOG_POST_CATEGORIES, BLOG_CATEGORIES } from '../lib/blog-categories';

// Blog post data (shared with main blog page)
const blogPosts: Record<
  string,
  {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
  }
> = {
  "wanneer-heb-je-een-fractional-cto-nodig": {
    slug: "wanneer-heb-je-een-fractional-cto-nodig",
    title: "Wanneer heb je een fractional CTO nodig?",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "5 min",
    excerpt: "Herken je situaties waarin een fractional CTO het verschil maakt: groeipijnen, technische schuld, of investeringsronde op komst?",
  },
  "kosten-vs-fulltime-cto": {
    slug: "kosten-vs-fulltime-cto",
    title: "Kosten fractional CTO vs fulltime CTO",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "4 min",
    excerpt: "Een vergelijking van de kosten en baten: wanneer is een fractional CTO financieel aantrekkelijker dan een fulltime CTO?",
  },
  "fractional-cto-vs-interim-cto": {
    slug: "fractional-cto-vs-interim-cto",
    title: "Fractional CTO vs interim CTO: wat zijn de verschillen?",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "6 min",
    excerpt: "Beide zijn parttime leiders, maar de focus en aanpak verschillen. Lees wat het beste bij jouw situatie past.",
  },
  "technische-fouten-zonder-cto": {
    slug: "technische-fouten-zonder-cto",
    title: "Veelgemaakte technische fouten zonder CTO",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "7 min",
    excerpt: "De 7 meest voorkomende strategische fouten die startups maken zonder technische leiding.",
  },
  "tech-roadmap-voor-startups": {
    slug: "tech-roadmap-voor-startups",
    title: "Tech roadmap voor startups: van MVP naar scale",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "8 min",
    excerpt: "Hoe bouw je een technische roadmap die meegroeit met je startup? Praktisch stappenplan.",
  },
  "fractional-cto-bij-due-diligence": {
    slug: "fractional-cto-bij-due-diligence",
    title: "Fractional CTO bij due diligence: wat investeerders willen zien",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "6 min",
    excerpt: "Voorbereiden op een investeringsronde? Zo overtuig je investeerders met een solide technische positie.",
  },
  "mvp-laten-bouwen-waar-op-letten": {
    slug: "mvp-laten-bouwen-waar-op-letten",
    title: "MVP laten bouwen: waar moet je op letten?",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "7 min",
    excerpt: "Een MVP is meer dan een mini-product. Lees wat je nodig hebt voor een succesvolle MVP ontwikkeling.",
  },
  "react-vs-nextjs-voor-startups": {
    slug: "react-vs-nextjs-voor-startups",
    title: "React vs Next.js voor startups: welke kies je?",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "5 min",
    excerpt: "Beide frameworks zijn populair, maar voor startups is er een duidelijke winnaar.",
  },
  "technische-schuld-voorkomen": {
    slug: "technische-schuld-voorkomen",
    title: "Technische schuld voorkomen vanaf dag 1",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "6 min",
    excerpt: "Hoe je technische schuld voorkomt tijdens snelle groei, zonder je development tempo te verliezen.",
  },
  "wanneer-herschrijven-vs-doorbouwen": {
    slug: "wanneer-herschrijven-vs-doorbouwen",
    title: "Wanneer herschrijven vs doorbouwen?",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "5 min",
    excerpt: "De lastige vraag: refactor of rewrite? Een beslissingsboom voor technische leiders.",
  },
  "wat-is-een-applicatie-audit": {
    slug: "wat-is-een-applicatie-audit",
    title: "Wat is een applicatie-audit?",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "5 min",
    excerpt: "Inzicht in de kwaliteit, veiligheid en performance van je applicatie. Wat houdt een audit precies in?",
  },
  "performanceproblemen-herkennen": {
    slug: "performanceproblemen-herkennen",
    title: "Performanceproblemen herkennen bij webapplicaties",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "6 min",
    excerpt: "Hoe signaleer je performance issues en welke stappen onderneem je?",
  },
  "security-risico's-bij-webapps": {
    slug: "security-risico's-bij-webapps",
    title: "Security risico's bij webapps: wat je moet weten",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "7 min",
    excerpt: "De meest voorkomende veiligheidslekken en hoe je ze voorkomt.",
  },
  "build-vs-buy-beslissingen": {
    slug: "build-vs-buy-beslissingen",
    title: "Build vs buy: hoe maak je de juiste keuze?",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "6 min",
    excerpt: "Software bouwen of kopen? Een beslissingsframework voor IT-managers en founders.",
  },
};

interface BlogRelatedArticlesProps {
  currentSlug: string;
  className?: string;
  maxArticles?: number;
}

export function BlogRelatedArticles({ currentSlug, className = '', maxArticles = 6 }: BlogRelatedArticlesProps) {
  const category = getCategoryByPostSlug(currentSlug);

  if (!category) {
    return null;
  }

  // Get all posts in the same category, excluding current post
  const relatedPosts = Object.entries(BLOG_POST_CATEGORIES)
    .filter(([slug, catId]) => catId === category.id && slug !== currentSlug)
    .map(([slug]) => blogPosts[slug])
    .filter(Boolean)
    .slice(0, maxArticles);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 lg:py-16 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Gerelateerde artikelen
            </h2>
            <Link
              href={`/blog/c/${category.slug}`}
              className="text-primary hover:text-midBlue font-medium text-sm flex items-center gap-1"
            >
              Bekijk alles
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons text-lg">article</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-600 font-medium">
                  {post.readTime} lezen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

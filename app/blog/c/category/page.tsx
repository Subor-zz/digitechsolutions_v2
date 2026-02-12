import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import Breadcrumbs from "../../../components/breadcrumbs";
import { BLOG_CATEGORIES, getCategoryBySlug, BLOG_POST_CATEGORIES } from "../../../lib/blog-categories";

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

// Generate static params for all category slugs
export async function generateStaticParams() {
  return Object.values(BLOG_CATEGORIES).map((category) => ({
    category: category.slug,
  }));
}

// Generate metadata for the category page
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return {
      title: "Categorie niet gevonden | Digitech Solutions",
      description: "Deze categorie bestaat niet.",
    };
  }

  return {
    title: categoryData.metaTitle,
    description: categoryData.metaDescription,
    openGraph: {
      title: `${categoryData.metaTitle} | Digitech Solutions`,
      description: categoryData.metaDescription,
      type: "website",
    },
  };
}

interface BreadcrumbItem {
  name: string;
  item?: string;
}

function generateBreadcrumbListSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

interface ItemListSchemaProps {
  categoryName: string;
  categoryUrl: string;
  posts: Array<{ title: string; url: string }>;
}

function generateItemListSchema({ categoryName, categoryUrl, posts }: ItemListSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: categoryName,
    description: `Artikelen in de categorie ${categoryName}`,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        name: post.title,
        url: `https://www.digitechsolutions.nl${post.url}`,
      },
    })),
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  // Filter posts by category
  const categoryPosts = Object.entries(BLOG_POST_CATEGORIES)
    .filter(([, catId]) => catId === categoryData.id)
    .map(([slug]) => blogPosts[slug])
    .filter(Boolean);

  // Generate breadcrumb data
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", item: "https://www.digitechsolutions.nl/" },
    { name: "Blog", item: "https://www.digitechsolutions.nl/blog" },
    { name: categoryData.name },
  ];

  // Generate ItemList schema
  const itemListSchema = generateItemListSchema({
    categoryName: categoryData.name,
    categoryUrl: `https://www.digitechsolutions.nl/blog/c/${categoryData.slug}`,
    posts: categoryPosts.map((post) => ({
      title: post.title,
      url: `/blog/${post.slug}`,
    })),
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6">
              {categoryData.title}
            </h1>
            <p className="text-lg lg:text-xl text-blue-50/90 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              {categoryData.intro}
            </p>

            {/* Related Services */}
            {categoryData.relatedServices.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-blue-100 text-sm font-medium mb-3">Gerelateerde diensten</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {categoryData.relatedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="inline-flex items-center gap-2 bg-white text-deepBlue px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <span className="material-icons text-lg">{service.icon}</span>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <Breadcrumbs categoryName={categoryData.name} />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categoryPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Category Badge */}
                <div className="relative">
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                    {categoryData.name}
                  </span>
                  <div className="aspect-video bg-gradient-to-br from-deepBlue/20 to-azureBlue/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-slate-900/30" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-midBlue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} lezen</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-deepBlue hover:text-midBlue font-medium transition-colors"
            >
              <span className="material-icons">arrow_back</span>
              Bekijk alle artikelen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-deepBlue/10 to-azureBlue/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Meer weten over deze onderwerpen?
            </h2>
            <p className="text-gray-600 mb-6">
              Plan een gratis intake (15 min) om je situatie te bespreken en ontdek hoe ik kan helpen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95"
            >
              <span className="material-icons">calendar_month</span>
              Plan gratis intake
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              generateBreadcrumbListSchema(breadcrumbs),
              itemListSchema,
            ],
          }),
        }}
      />

      <Footer />
    </div>
  );
}

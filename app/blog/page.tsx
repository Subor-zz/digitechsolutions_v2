import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { RelatedServices } from "../components/related-services";
import { BLOG_CATEGORIES, BLOG_POST_CATEGORIES } from "../lib/blog-categories";

// Blog post data - this will be populated with actual posts
const blogPosts = [
  {
    slug: "wanneer-heb-je-een-fractional-cto-nodig",
    title: "Wanneer heb je een fractional CTO nodig?",
    excerpt: "Herken je situaties waarin een fractional CTO het verschil maakt: groeipijnen, technische schuld, of investeringsronde op komst?",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "5 min",
    image: "/blog/fractional-cto-OG.jpg",
  },
  {
    slug: "kosten-vs-fulltime-cto",
    title: "Kosten fractional CTO vs fulltime CTO",
    excerpt: "Een vergelijking van de kosten en baten: wanneer is een fractional CTO financieel aantrekkelijker dan een fulltime CTO?",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "4 min",
    image: "/blog/costs-OG.jpg",
  },
  {
    slug: "fractional-cto-vs-interim-cto",
    title: "Fractional CTO vs interim CTO: wat zijn de verschillen?",
    excerpt: "Beide zijn parttime leiders, maar de focus en aanpak verschillen. Lees wat het beste bij jouw situatie past.",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "6 min",
    image: "/blog/comparison-OG.jpg",
  },
  {
    slug: "technische-fouten-zonder-cto",
    title: "Veelgemaakte technische fouten zonder CTO",
    excerpt: "De 7 meest voorkomende strategische fouten die startups maken zonder technische leiding.",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "7 min",
    image: "/blog/mistakes-OG.jpg",
  },
  {
    slug: "tech-roadmap-voor-startups",
    title: "Tech roadmap voor startups: van MVP naar scale",
    excerpt: "Hoe bouw je een technische roadmap die meegroeit met je startup? Praktisch stappenplan.",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "8 min",
    image: "/blog/roadmap-OG.jpg",
  },
  {
    slug: "fractional-cto-bij-due-diligence",
    title: "Fractional CTO bij due diligence: wat investeerders willen zien",
    excerpt: "Voorbereiden op een investeringsronde? Zo overtuig je investeerders met een solide technische positie.",
    category: "Fractional CTO",
    date: "2025-02-10",
    readTime: "6 min",
    image: "/blog/due-diligence-OG.jpg",
  },
  {
    slug: "mvp-laten-bouwen-waar-op-letten",
    title: "MVP laten bouwen: waar moet je op letten?",
    excerpt: "Een MVP is meer dan een mini-product. Lees wat je nodig hebt voor een succesvolle MVP ontwikkeling.",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "7 min",
    image: "/blog/mvp-OG.jpg",
  },
  {
    slug: "react-vs-nextjs-voor-startups",
    title: "React vs Next.js voor startups: welke kies je?",
    excerpt: "Beide frameworks zijn populair, maar voor startups is er een duidelijke winnaar.",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "5 min",
    image: "/blog/react-nextjs-OG.jpg",
  },
  {
    slug: "technische-schuld-voorkomen",
    title: "Technische schuld voorkomen vanaf dag 1",
    excerpt: "Hoe je technische schuld voorkomt tijdens snelle groei, zonder je development tempo te verliezen.",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "6 min",
    image: "/blog/tech-debt-OG.jpg",
  },
  {
    slug: "wanneer-herschrijven-vs-doorbouwen",
    title: "Wanneer herschrijven vs doorbouwen?",
    excerpt: "De lastige vraag: refactor of rewrite? Een beslissingsboom voor technische leiders.",
    category: "Full-Stack Development",
    date: "2025-02-10",
    readTime: "5 min",
    image: "/blog/refactor-OG.jpg",
  },
  {
    slug: "wat-is-een-applicatie-audit",
    title: "Wat is een applicatie-audit?",
    excerpt: "Inzicht in de kwaliteit, veiligheid en performance van je applicatie. Wat houdt een audit precies in?",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "5 min",
    image: "/blog/audit-OG.jpg",
  },
  {
    slug: "performanceproblemen-herkennen",
    title: "Performanceproblemen herkennen bij webapplicaties",
    excerpt: "Hoe signaleer je performance issues en welke stappen onderneem je?",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "6 min",
    image: "/blog/performance-OG.jpg",
  },
  {
    slug: "security-risico's-bij-webapps",
    title: "Security risico's bij webapps: wat je moet weten",
    excerpt: "De meest voorkomende veiligheidslekken en hoe je ze voorkomt.",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "7 min",
    image: "/blog/security-OG.jpg",
  },
  {
    slug: "build-vs-buy-beslissingen",
    title: "Build vs buy: hoe maak je de juiste keuze?",
    excerpt: "Software bouwen of kopen? Een beslissingsframework voor IT-managers en founders.",
    category: "IT-Consultancy",
    date: "2025-02-10",
    readTime: "6 min",
    image: "/blog/build-buy-OG.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - matching homepage structure */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-6 text-balance">
            IT &<span className="text-white/70">Technologie Blog</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium leading-relaxed text-balance">
            Artikelen over fractional CTO, IT-consultancy en software development voor startups en MKB.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-primary text-white"
            >
              Alle
            </Link>
            {Object.values(BLOG_CATEGORIES).map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/${cat.slug}`}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-white text-gray-700 hover:bg-gray-100 border"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Category Badge */}
                <div className="relative">
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                    {post.category}
                  </span>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
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
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} lezen</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

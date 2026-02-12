import type { Metadata } from "next";

// Blog post metadata (will be synced with page data)
const blogPostMetadata: Record<string, { title: string; description: string; category: string }> = {
  "wanneer-heb-je-een-fractional-cto-nodig": {
    title: "Wanneer heb je een fractional CTO nodig?",
    description: "Herken je situaties waarin een fractional CTO het verschil maakt: groeipijnen, technische schuld, of investeringsronde op komst?",
    category: "Fractional CTO",
  },
  "kosten-vs-fulltime-cto": {
    title: "Kosten fractional CTO vs fulltime CTO",
    description: "Een vergelijking van de kosten en baten: wanneer is een fractional CTO financieel aantrekkelijker dan een fulltime CTO?",
    category: "Fractional CTO",
  },
  "fractional-cto-vs-interim-cto": {
    title: "Fractional CTO vs interim CTO: wat zijn de verschillen?",
    description: "Beide zijn parttime leiders, maar de focus en aanpak verschillen. Lees wat het beste bij jouw situatie past.",
    category: "Fractional CTO",
  },
  "technische-fouten-zonder-cto": {
    title: "Veelgemaakte technische fouten zonder CTO",
    description: "De 7 meest voorkomende strategische fouten die startups maken zonder technische leiding.",
    category: "Fractional CTO",
  },
  "tech-roadmap-voor-startups": {
    title: "Tech roadmap voor startups: van MVP naar scale",
    description: "Hoe bouw je een technische roadmap die meegroeit met je startup? Praktisch stappenplan.",
    category: "Fractional CTO",
  },
  "fractional-cto-bij-due-diligence": {
    title: "Fractional CTO bij due diligence: wat investeerders willen zien",
    description: "Voorbereiden op een investeringsronde? Zo overtuig je investeerders met een solide technische positie.",
    category: "Fractional CTO",
  },
  "mvp-laten-bouwen-waar-op-letten": {
    title: "MVP laten bouwen: waar moet je op letten?",
    description: "Een MVP is meer dan een mini-product. Lees wat je nodig hebt voor een succesvolle MVP ontwikkeling.",
    category: "Full-Stack Development",
  },
  "react-vs-nextjs-voor-startups": {
    title: "React vs Next.js voor startups: welke kies je?",
    description: "Beide frameworks zijn populair, maar voor startups is er een duidelijke winnaar.",
    category: "Full-Stack Development",
  },
  "technische-schuld-voorkomen": {
    title: "Technische schuld voorkomen vanaf dag 1",
    description: "Hoe je technische schuld voorkomt tijdens snelle groei, zonder je development tempo te verliezen.",
    category: "Full-Stack Development",
  },
  "wanneer-herschrijven-vs-doorbouwen": {
    title: "Wanneer herschrijven vs doorbouwen?",
    description: "De lastige vraag: refactor of rewrite? Een beslissingsboom voor technische leiders.",
    category: "Full-Stack Development",
  },
  "wat-is-een-applicatie-audit": {
    title: "Wat is een applicatie-audit?",
    description: "Inzicht in de kwaliteit, veiligheid en performance van je applicatie. Wat houdt een audit precies in?",
    category: "IT-Consultancy",
  },
  "performanceproblemen-herkennen": {
    title: "Performanceproblemen herkennen bij webapplicaties",
    description: "Hoe signaleer je performance issues en welke stappen onderneem je?",
    category: "IT-Consultancy",
  },
  "security-risico's-bij-webapps": {
    title: "Security risico's bij webapps: wat je moet weten",
    description: "De meest voorkomende veiligheidslekken en hoe je ze voorkomt.",
    category: "IT-Consultancy",
  },
  "build-vs-buy-beslissingen": {
    title: "Build vs buy: hoe maak je de juiste keuze?",
    description: "Software bouwen of kopen? Een beslissingsframework voor IT-managers en founders.",
    category: "IT-Consultancy",
  },
};

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const postMeta = blogPostMetadata[slug];

  if (!postMeta) {
    return {
      title: "Artikel niet gevonden | Digitech Solutions",
      description: "Dit artikel bestaat niet.",
    };
  }

  return {
    title: `${postMeta.title} | Digitech Solutions`,
    description: postMeta.description,
    openGraph: {
      title: `${postMeta.title} | Digitech Solutions`,
      description: postMeta.description,
      type: "article",
      url: `https://www.digitechsolutions.nl/blog/${slug}`,
      publishedTime: "2025-02-10T00:00:00+00:00",
      modifiedTime: "2025-02-10T00:00:00+00:00",
      authors: ["Subor Cheung"],
      section: postMeta.category,
    },
    twitter: {
      card: "summary_large_image",
      title: `${postMeta.title} | Digitech Solutions`,
      description: postMeta.description,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

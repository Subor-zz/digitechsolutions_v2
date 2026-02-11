import type { Metadata } from "next";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Digitech Solutions`,
    description: "Artikel over IT-consultancy, fractional CTO of software development.",
    openGraph: {
      title: `${title} | Digitech Solutions`,
      type: "article",
      url: `https://digitechsolutions.nl/blog/${slug}`,
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

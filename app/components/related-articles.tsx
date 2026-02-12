import Link from 'next/link';
import { blogPosts, serviceToBlogMap } from '../lib/internal-links';

interface RelatedArticlesProps {
  serviceId: string;
  className?: string;
}

export function RelatedArticles({ serviceId, className = '' }: RelatedArticlesProps) {
  const relatedPosts = serviceToBlogMap[serviceId] || [];

  if (relatedPosts.length === 0) {
    return null;
  }

  // Get post titles from slugs
  const getPostTitle = (slug: string) => {
    for (const category of Object.values(blogPosts)) {
      const post = category.find(p => slug === `/blog/${p.slug}`);
      if (post) return post.title;
    }
    return slug;
  };

  return (
    <section className={`py-12 lg:py-16 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
            Gerelateerde artikelen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPosts.map((href) => {
              const slug = href.replace('/blog/', '');
              const title = getPostTitle(slug);

              return (
                <Link
                  key={href}
                  href={href}
                  className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-lg">article</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Lees artikel →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

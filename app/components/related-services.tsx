import Link from 'next/link';
import { blogToServiceMap } from '../lib/internal-links';

interface RelatedServicesProps {
  blogSlug: string;
  className?: string;
}

export function RelatedServices({ blogSlug, className = '' }: RelatedServicesProps) {
  const relatedServices = blogToServiceMap[blogSlug] || [];

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 lg:py-16 bg-blue-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
            Gerelateerde diensten
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  {service.icon && (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-icons text-xl">{service.icon}</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      Bekijk details
                    </p>
                  </div>
                  <div className="flex items-center text-primary">
                    <span className="material-icons">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95"
            >
              <span className="material-icons">calendar_month</span>
              Plan een gratis intake (15 min)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

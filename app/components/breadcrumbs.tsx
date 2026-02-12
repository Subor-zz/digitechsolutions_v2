'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  serviceName?: string;
  categoryName?: string;
  blogTitle?: string;
}

function getBreadcrumbs(pathname: string, options: BreadcrumbsProps): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = [{ label: 'Home', href: '/' }];

  // Blog post detail page
  if (options.blogTitle) {
    breadcrumbs.push({ label: 'Blog', href: '/blog' });
    if (options.categoryName) {
      breadcrumbs.push({ label: options.categoryName });
    }
    breadcrumbs.push({ label: options.blogTitle });
  }
  // Blog category page (not implemented yet, but prepared)
  else if (options.categoryName && !options.blogTitle) {
    breadcrumbs.push({ label: 'Blog', href: '/blog' });
    breadcrumbs.push({ label: options.categoryName });
  }
  // Blog overview
  else if (pathname === '/blog') {
    breadcrumbs.push({ label: 'Blog' });
  }
  // Service detail page
  else if (options.serviceName) {
    breadcrumbs.push({ label: 'Diensten', href: '/diensten' });
    breadcrumbs.push({ label: options.serviceName });
  }
  // Services overview
  else if (pathname === '/diensten') {
    breadcrumbs.push({ label: 'Diensten' });
  }
  // Over mij
  else if (pathname === '/over-mij') {
    breadcrumbs.push({ label: 'Over' });
  }
  // Tarieven
  else if (pathname === '/tarieven') {
    breadcrumbs.push({ label: 'Tarieven' });
  }
  // Contact
  else if (pathname === '/contact') {
    breadcrumbs.push({ label: 'Contact' });
  }

  return breadcrumbs;
}

export function useBreadcrumbs(options: BreadcrumbsProps): Breadcrumb[] {
  const pathname = usePathname();
  return getBreadcrumbs(pathname, options);
}

interface BreadcrumbsPropsOwn extends BreadcrumbsProps {
  className?: string;
}

export default function Breadcrumbs({ serviceName, categoryName, blogTitle, className = '' }: BreadcrumbsPropsOwn) {
  const breadcrumbs = useBreadcrumbs({ serviceName, categoryName, blogTitle });

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs for homepage only
  }

  return (
    <nav className={`flex items-center text-sm text-slate-500 ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="material-icons text-slate-300 text-sm" aria-hidden="true">
                chevron_right
              </span>
            )}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-primary transition-colors font-medium"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

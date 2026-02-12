'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbItemSchema {
  name: string;
  item?: string;
}

interface BreadcrumbsProps {
  serviceName?: string;
  categoryName?: string;
  categorySlug?: string;
  blogTitle?: string;
  structuredData?: boolean;
}

function getBreadcrumbs(pathname: string, options: BreadcrumbsProps): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = [{ label: 'Home', href: '/' }];

  // Blog post detail page
  if (options.blogTitle) {
    breadcrumbs.push({ label: 'Blog', href: '/blog' });
    if (options.categoryName && options.categorySlug) {
      breadcrumbs.push({ label: options.categoryName, href: `/blog/${options.categorySlug}` });
    }
    breadcrumbs.push({ label: options.blogTitle });
  }
  // Blog category page
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

// Generate BreadcrumbList structured data
function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]): string {
  const baseUrl = 'https://www.digitechsolutions.nl';
  let itemPath = '';

  const itemListElement = breadcrumbs.map((crumb, index) => {
    if (crumb.href) {
      itemPath = crumb.href === '/' ? '' : crumb.href;
    }
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(crumb.href && { item: `${baseUrl}${itemPath}` }),
    };
  });

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  });
}

interface BreadcrumbsPropsOwn extends BreadcrumbsProps {
  className?: string;
}

export default function Breadcrumbs({
  serviceName,
  categoryName,
  categorySlug,
  blogTitle,
  className = '',
  structuredData = true
}: BreadcrumbsPropsOwn) {
  const breadcrumbs = useBreadcrumbs({ serviceName, categoryName, categorySlug, blogTitle });

  // Inject structured data
  useEffect(() => {
    if (structuredData && breadcrumbs.length > 1) {
      const schema = generateBreadcrumbSchema(breadcrumbs);
      const existingScript = document.getElementById('breadcrumb-schema');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.id = 'breadcrumb-schema';
      script.type = 'application/ld+json';
      script.textContent = schema;
      document.head.appendChild(script);
    }
  }, [breadcrumbs, structuredData]);

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs for homepage only
  }

  return (
    <nav className={`flex items-center text-sm text-slate-500 ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbs.map((crumb, index) => (
          <li
            key={index}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            {index > 0 && (
              <span className="material-icons text-slate-300 text-sm" aria-hidden="true">
                chevron_right
              </span>
            )}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-primary transition-colors font-medium"
                itemProp="item"
              >
                <span itemProp="name">{crumb.label}</span>
              </Link>
            ) : (
              <span className="text-slate-900 font-medium" itemProp="name">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

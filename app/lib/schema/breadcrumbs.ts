// BreadcrumbList schema builder
import { SITE_CONFIG } from "./config";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbSchema {
  "@type": "BreadcrumbList";
  "@id"?: string;
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Creates a BreadcrumbList schema from an array of items
 * @param items - Array of breadcrumb items with name and url
 * @returns BreadcrumbList schema object
 */
export function createBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_CONFIG.url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

/**
 * Helper to create standard service page breadcrumbs
 * @param serviceName - Name of the service
 * @param serviceSlug - URL slug of the service
 */
export function createServiceBreadcrumbs(
  serviceName: string,
  serviceSlug: string
): BreadcrumbSchema {
  return createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: serviceName, url: `/diensten/${serviceSlug}` },
  ]);
}

/**
 * Helper to create standard blog post breadcrumbs
 * @param postTitle - Title of the blog post
 * @param postSlug - URL slug of the blog post
 */
export function createBlogBreadcrumbs(
  postTitle: string,
  postSlug: string
): BreadcrumbSchema {
  return createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: postTitle, url: `/blog/${postSlug}` },
  ]);
}

/**
 * Helper to create blog category breadcrumbs
 * @param categoryName - Name of the category
 * @param categorySlug - URL slug of the category
 */
export function createBlogCategoryBreadcrumbs(
  categoryName: string,
  categorySlug: string
): BreadcrumbSchema {
  return createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: categoryName, url: `/blog/c/${categorySlug}` },
  ]);
}

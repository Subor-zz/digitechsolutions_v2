# JSON-LD Schema Factory Implementation Plan

## Overview
Implement a scalable, centralized JSON-LD Schema Factory architecture for Next.js App Router to manage structured data across all service pages and blog posts.

---

## Phase 1: Core Infrastructure

### 1.1 Create Central Configuration
**File: `/lib/schema/config.ts`**

```typescript
// Central organization and site configuration
export const ORGANIZATION_CONFIG = {
  name: "Digitech Solutions",
  url: "https://www.digitechsolutions.nl/",
  logo: "https://digitechsolutions.nl/logo-transparent.png",
  phone: "+31-6-43983420",
  email: "info@digitechsolutions.nl",
  address: {
    street: "[Straat]",
    locality: "[Plaats]",
    postalCode: "[Postcode]",
    country: "NL"
  },
  sameAs: [
    // Social media links if available
  ]
};

export const SITE_CONFIG = {
  name: "Digitech Solutions",
  url: "https://www.digitechsolutions.nl",
  language: "nl-NL"
};
```

---

### 1.2 Create Schema Builders

**File: `/lib/schema/organization.ts`**
- `createOrganizationSchema()` - Base Organization schema
- `createLocalBusinessSchema()` - LocalBusiness extension if needed

**File: `/lib/schema/breadcrumbs.ts`**
- `createBreadcrumbSchema(items: BreadcrumbItem[])` - Dynamic breadcrumb builder
- Type: `BreadcrumbItem = { name: string; url: string }`

**File: `/lib/schema/service.ts`**
- `createServiceSchema(config: ServiceConfig)` - Service schema builder
- Type: `ServiceConfig = { name, description, url, provider, areaServed, offers? }`

**File: `/lib/schema/faq.ts`**
- `createFAQSchema(items: FAQItem[])` - FAQ schema builder
- Type: `FAQItem = { question: string; answer: string }`

**File: `/lib/schema/index.ts`**
- Export all schema builders
- `createGraphSchema(schemas: object[])` - Combines multiple schemas into @graph
- `createServicePageSchema(config)` - Composer for service pages (Org + Breadcrumb + Service + FAQ)

---

### 1.3 Create JsonLd Component

**File: `/components/JsonLd.tsx`**

```tsx
interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

---

## Phase 2: Service Page Implementations

### 2.1 ZZP Applicatiebeheerder
**File: `/diensten/zzp-applicatiebeheerder/page.tsx`**

- [ ] Import schema utilities
- [ ] Create service-specific config
- [ ] Generate breadcrumb items
- [ ] Create FAQ items
- [ ] Use `createServicePageSchema()` composer
- [ ] Render `<JsonLd data={schema} />`

### 2.2 ZZP Functioneel Beheerder
**File: `/diensten/zzp-functioneel-beheerder/page.tsx`**

- [ ] Same structure as 2.1
- [ ] Service-specific metadata and FAQs

### 2.3 ITSM Support
**File: `/diensten/support-itsm/page.tsx`**

- [ ] Replace existing inline schema with factory
- [ ] Ensure consistent structure

---

## Phase 3: Blog Schema Support

### 3.1 Blog Post Schema Builder
**File: `/lib/schema/blog.ts`**
- `createBlogPostSchema(config: BlogPostConfig)` - Article schema builder
- Type: `BlogPostConfig = { headline, description, datePublished, dateModified, author, image, url }`

### 3.2 Blog Category Schema
- `createCollectionPageSchema()` - For category pages

---

## File Structure

```
/lib/schema/
├── config.ts          # Central org/site config
├── organization.ts    # Organization schema builder
├── breadcrumbs.ts     # BreadcrumbList builder
├── service.ts         # Service schema builder
├── faq.ts             # FAQPage builder
├── blog.ts            # Article/BlogPosting builder
└── index.ts           # Exports + composers

/components/
└── JsonLd.tsx         # Reusable JSON-LD component
```

---

## Implementation Order

1. Create `/lib/schema/config.ts` with organization details
2. Create `/lib/schema/organization.ts`
3. Create `/lib/schema/breadcrumbs.ts`
4. Create `/lib/schema/service.ts`
5. Create `/lib/schema/faq.ts`
6. Create `/lib/schema/index.ts` with exports and composer
7. Create `/components/JsonLd.tsx`
8. Update `zzp-applicatiebeheerder/page.tsx` with new schema
9. Update `zzp-functioneel-beheerder/page.tsx` with new schema
10. Update `support-itsm/page.tsx` to use factory (refactor existing)
11. (Optional) Add blog schema support

---

## Benefits

- **DRY**: Single source of truth for organization data
- **Type-safe**: Full TypeScript support
- **Composable**: Mix and match schemas per page
- **Maintainable**: Update in one place, reflects everywhere
- **SEO-ready**: Consistent, valid structured data

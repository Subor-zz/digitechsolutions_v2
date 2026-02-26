# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Digitech Solutions is a Next.js website for an IT consultancy business based in Breda, Netherlands. The site is in Dutch and showcases IT services (ZZP applicatiebeheer, functioneel beheer, support & ITSM, full-stack development, project management, and product consultation).

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Font**: Manrope (Google Fonts)
- **Deployment**: Vercel

## Architecture

### App Router Structure

The project uses Next.js App Router with all routes under `app/`:

- `app/page.tsx` - Homepage
- `app/layout.tsx` - Root layout with SEO metadata and structured data schemas
- `app/components/` - Reusable components (navigation, footer, scroll-reveal, FAQ, breadcrumbs)
- `app/lib/` - Utility functions for internal linking and blog categories
- `app/diensten/` - Service pages (6 total)
- `app/blog/` - Blog section

### Key Architecture Notes

1. **Client Components**: Only components requiring interactivity use `'use client'` (e.g., navigation.tsx, scroll-reveal.tsx). Page components are server components by default.

2. **SEO Structured Data**: The root layout contains JSON-LD schemas for Organization, LocalBusiness, Person, and Services. Keep these synchronized when updating business information.

3. **Internal Linking Strategy**: `app/lib/internal-links.ts` defines the pillar/cluster strategy mapping blog posts to related services. Use these maps when creating new blog posts or service pages.

4. **URL Redirects**: `next.config.mjs` contains 301 redirects for legacy URLs. When renaming routes, add redirects here to preserve SEO.

5. **Animations**: Tailwind config defines custom keyframes (fadeInUp, blob, marquee, shimmer, float). Use these animation classes consistently.

6. **Brand Colors**: Primary colors defined in tailwind.config.ts:
   - `primary`: #1152d4
   - `accent`: #F59E0B (amber/orange for CTAs)

7. **Navigation**: Single dropdown menu under "Diensten" with all 6 services. Navigation items are defined inline in navigation.tsx.

### Service Pages

Six service pages under `/diensten/`:
- `zzp-applicatiebeheerder` - Primary pillar page
- `zzp-functioneel-beheerder` - Primary pillar page
- `support-itsm` - Primary pillar page
- `full-stack-development`
- `it-project-manager`
- `productconsultatie`

### Blog Structure

Blog posts are located in `app/blog/[slug]/page.tsx`. Categories and internal linking are managed through `app/lib/blog-categories.ts` and `app/lib/internal-links.ts`.

## Development Notes

- The site uses `lang="nl"` on the HTML element - content should be in Dutch
- Material Icons are loaded from Google Fonts CDN
- PWA manifest is at `/public/manifest.json`
- No test framework is currently configured

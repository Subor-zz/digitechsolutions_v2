# Technical Foundation

## Architecture decision

The current technical recommendation is to rebuild the marketing layer inside the confirmed canonical Next.js repository `Subor-zz/digitechsolutions_v2`, while keeping Git history, Vercel project, production domain, App Router foundation and audited utilities. Do not initialize a new application on the present evidence. Reconfirm this recommendation at the engineering gate; the existing page-level marketing implementation is migration input rather than the assumed visual/component basis. Proposed boundaries are in `docs/rebrand/REBUILD_BOUNDARIES.md`.

## Recommended stack

| Layer | Recommendation | Reason / constraint |
|---|---|---|
| Framework | Current supported Next.js App Router + React + strict TypeScript | Indexable server content, route metadata and controlled client islands |
| Styling | Tailwind plus semantic CSS custom properties | Matches working decision; no component-level raw brand values |
| Content | Version-controlled MDX for cases/insights with schema validation | Low publishing volume, reviewable claims and no premature CMS |
| Motion | CSS/SVG first; GSAP + ScrollTrigger only for approved story timelines | Progressive enhancement and isolated bundle cost |
| Diagrams | Semantic HTML summary + accessible SVG enhancement | Indexable, keyboard-safe and reduced-motion compatible |
| Testing | Unit runner, Playwright, axe and Lighthouse CI | Exact tools/versions confirmed during initialization |
| Hosting | Prefer existing Vercel project after ownership/config audit | Keeps domain/deployment continuity; do not change hosting in Phase 0 |

No dependency is added by this document. Current source uses Next `^16.1.6`, React `^19.2.4`, TypeScript `^5` and Tailwind `^3.4.17`. Future version or dependency changes require an engineering-foundation review; the current Next/ESLint tooling mismatch must be resolved there.

## Proposed application boundaries

```text
app/                    route composition, metadata, route handlers
components/ui/          accessible primitives
components/story/       homepage chapters and static fallbacks
components/diagrams/    SVG/HTML visual explanations
content/cases/          validated MDX and assets
content/insights/       validated MDX and assets
lib/content/            schemas, indexes, related-content logic
lib/forms/              validation and submission boundary
lib/analytics/          typed, consent-aware events
lib/seo/                metadata and structured-data builders
styles/                 tokens, global layers, motion preferences
tests/                  route, accessibility and visual checks
```

Business claims, service definitions, cases and scan deliverables must live in content/configuration, not hidden in animation code. Client components are opt-in islands; route content renders on the server by default.

## Launch route model

- `/`
- `/workflowmodernisering`
- `/applicatiemodernisering`
- `/modernization-scan`
- `/werkwijze`
- `/cases` and `/cases/[slug]`
- `/over-subor`
- `/insights` and `/insights/[slug]`
- `/contact`
- `/privacy`
- `/voorwaarden`

Generate navigation, sitemap, breadcrumbs and canonical metadata from a typed route registry. Redirects remain a separate reviewed map and are not implemented until production analytics are exported.

## Content schemas

Cases require: classification (`client`, `anonymized`, `lab`, `concept`), permission status, context, evidence level, problem, analysis, decision, scope, exclusions, quality gates, result, related services and CTA. Insights require: title, summary, publish/update dates, author, topic, related services/cases, canonical status and social image. Builds fail on missing required fields or duplicate slugs.

No case may expose a metric unless its evidence reference and publication permission are recorded. `lab` and `concept` labels must be visible in cards, page titles and structured data descriptions.

## Form boundary

The public intake collects only name, business email, organization, route (`workflow`, `application`, `combined/unsure`), problem summary, timing and explicit privacy consent. It must not request credentials, source archives, customer data or system exports.

Before selecting a provider, compare EU data processing/retention, DPA availability, regional storage, server-side API, spam controls, accessibility, operational ownership, export/deletion and cost. Submission flow:

1. client hints for usability;
2. server-side schema validation and normalization;
3. rate limit/honeypot or accessible challenge;
4. provider call with idempotency key;
5. generic user-safe failure and retry path;
6. PII-minimized operational event—never message content or email in analytics/logs.

Email is the visible fallback. Calendar embedding is optional and must not introduce tracking before consent.

## Analytics and consent

Prefer a privacy-minimal product that supports cookieless aggregate measurement. The legal basis and whether consent is required must be confirmed with the actual configuration, not vendor marketing. Centralize the required typed events from `docs/rebrand/REQUIREMENTS.md`; prohibit email, names, organization, free text, full query strings and stable user IDs in event properties.

Load analytics after critical content. Respect consent and Do Not Track where policy requires it. `reduced_motion_active` is aggregate capability telemetry only and must not become a fingerprinting dimension. Document event purpose, properties, retention and owner in an analytics plan before launch.

## SEO foundation

- Server-render meaningful copy and links; never hide primary content in canvas/SVG.
- Unique title/description, one canonical host, Open Graph asset and share copy per indexable route.
- Generate sitemap and robots from published content; exclude drafts and obsolete category pages.
- Use Person for Subor, Organization/ProfessionalService only where facts are verified, Service for defined offers, Article for insights and BreadcrumbList for detail routes.
- Avoid Review/AggregateRating and unsupported service areas, credentials or results.
- Preserve valuable old URLs with direct permanent redirects; avoid redirect chains and blanket home redirects.

## Accessibility foundation

WCAG 2.2 AA is a release gate. Provide semantic landmarks/headings, skip link, visible focus, keyboard-safe disclosure/menu/dialog patterns, 44 CSS px target aim, programmatic form errors, status announcements, text equivalents for diagrams and no hover-only content. Every motion feature has static, mobile and reduced-motion states before animation approval. Native scroll and browser history remain untouched.

## Performance budgets

Product targets remain LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile. Initial engineering budgets for the vertical slice:

- no hero video or WebGL;
- one optimized local variable sans font plus optional lazy mono subset;
- reserve media dimensions and avoid layout-dependent entrance states;
- homepage works with zero story-motion JavaScript;
- load GSAP/story code only near the relevant section;
- animate transform/opacity or measured SVG paths; pause offscreen timelines;
- set a reviewed JavaScript and image budget after the first static build, then enforce it in CI.

## Security and privacy controls

- Strict TypeScript, schema validation at all trust boundaries and encoded rendering by default.
- CSP, HSTS, `nosniff`, frame protection, referrer and permissions policies tested in preview.
- Secrets only in server runtime; least-privilege scoped provider tokens; protected previews.
- Dependency review, lockfile, automated updates and vulnerability scanning.
- No contact PII, report contents, tokens, IPs or request bodies in normal logs; redact before error monitoring.
- Explicit retention/deletion policy for submissions; vendor DPAs recorded.
- Content Security Policy starts strict and adds named origins only after provider selection.

## CI and release gates

Required checks: install from lockfile; format/lint; strict typecheck; unit/content-schema tests; production build; Playwright critical routes at desktop and 320 px; axe scan; reduced-motion test/screenshot; broken-link and metadata checks; Lighthouse budgets from the vertical slice. Preview deployment is reviewed before production. Redirects receive automated status, destination, canonical and no-chain tests.

## Migration sequence

1. Verify Vercel role, production-branch and rollback access with Subor; record versions and ownership without exposing environment values.
2. Export Search Console/analytics and crawl all current URLs, titles, canonicals, status codes and backlinks.
3. Create an isolated feature branch in the existing repository; keep the live deployment unchanged.
4. Implement tokens and a static semantic vertical slice, then motion enhancement.
5. Build content routes and validate claims/assets.
6. Implement and test the approved redirect map in preview.
7. Cut over with rollback criteria, monitor errors, forms, Web Vitals and 404s.

## Decisions still required

Vercel role/rollback verification; future framework/tool version policy; form provider and retention; analytics/consent product and legal basis; canonical host; error monitoring; scan commercial facts; and whether a scheduling tool is necessary. Owners and target gates are recorded in `docs/rebrand/DECISIONS.md` and the production plan.

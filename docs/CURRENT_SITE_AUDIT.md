# Current Site Audit

**Audit date:** 18 July 2026  
**Scope:** this repository snapshot plus the publicly reachable `https://digitechsolutions.nl` site. Public observations are point-in-time; implementation details that require source or provider access are marked **unverified**.

## Executive finding

This folder is a documentation package, not the current website repository: it contains 11 Markdown files and no `.git`, application source, package manifest, lockfile, tests, assets, environment example, CI, or deployment configuration. The live site is a separate Next.js application hosted on Vercel. Its source, exact dependency versions, form handler, analytics configuration, and deployment ownership cannot be audited from this snapshot.

**Recommendation:** create a clean new application inside the canonical Git repository (or convert this folder into that repository only after ownership is confirmed). Do not evolve copied production code whose history and configuration are unavailable. Preserve the existing domain, useful content, and redirect equity.

## Evidence and implementation inventory

| Area | Observed state | Confidence / implication |
|---|---|---|
| Framework | Next.js App Router/React markers, React Server Component payloads and `/_next/` assets | High; exact versions unverified |
| Hosting | `Server: Vercel`, `X-Vercel-*`, Frankfurt edge response | High; project/account and deployment workflow unverified |
| Repository | Current folder has no `.git` and no source code | High; GitHub source-of-truth requirement is not satisfied here |
| Styling | Compiled global CSS, Manrope font variable, Material Icons stylesheet; responsive utility-like classes | Runtime observation only; source convention and token quality unverified |
| Content | Page copy appears code-backed; no CMS endpoint or repository content source visible | MDX/CMS status unverified |
| Components | Repeated header, services menu, footer, CTA blocks, breadcrumb, service cards, article cards, FAQ, forms | Reusable at pattern/content level; source components unavailable |
| SEO | Titles, descriptions, canonicals, robots, sitemap and JSON-LD are present | Good baseline, but sitemap/content consistency needs correction |
| Analytics | No common analytics marker found in sampled homepage HTML | Absence not proven; browser/network and source audit required |
| Forms | Contact form exists with service, message, budget and timing fields | Backend, validation, storage, retention, spam controls and error handling unverified |
| Security headers | HSTS, `nosniff`, `DENY` framing, referrer and permissions policies observed | Positive baseline; no CSP observed in sampled response |
| Assets | Existing logo/favicon set and content diagrams/screenshots may exist publicly | Retain only after source/licence/quality review |

## Current public route structure

The sitemap exposes 44 URLs:

- Core: `/`, `/diensten`, `/over-mij`, `/contact`, `/tarieven`, `/it-consultant-breda`.
- Services: `/diensten/zzp-applicatiebeheerder`, `/zzp-functioneel-beheerder`, `/support-itsm`, `/fractional-cto`, `/it-consultancy`, `/full-stack-development`, `/it-project-manager`, `/projectmanagement`, `/productconsultatie`, `/product-business-consultatie`, `/applicatieconsultatie`, `/technical-strategy`.
- Content: `/blog`, five category routes and 16 article routes.
- Legal: `/privacy`, `/cookiebeleid`, `/voorwaarden`.

The sitemap mixes `www` URLs while the audited origin was the apex domain. Canonical-host behavior must be verified and standardized before migration.

## Content and positioning observations

The public homepage leads with “ZZP Applicatiebeheerder & Functioneel Beheerder”, availability, temporary capacity and IT support. That directly conflicts with the locked modernization-studio position and scan-first conversion. Useful raw material remains in process optimization, functional translation, technical assessment, knowledge transfer, and founder experience.

High-risk claims requiring evidence before reuse include:

- inconsistent experience claims: “9+”, “8–15” and “15+” years;
- “within 48 hours”, guaranteed continuity/knowledge transfer and “zero downtime”;
- named certifications and broad platform expertise;
- savings, incident reduction, MTTR, performance and percentage claims;
- comparative employment savings and “no overhead” claims;
- client-like scenarios without visible case provenance.

## Accessibility audit

### Positive indicators

- Dutch document language and a `main` landmark are present.
- Core copy is server-rendered text.
- Form controls appear to have visible textual prompts.
- Content does not appear dependent on animation.

### Risks to verify or remediate

- Material Icon text appears in extracted content, suggesting icon implementation may leak names to assistive technology.
- The mobile menu, service disclosure, focus order, visible focus, escape behavior and active state require keyboard testing.
- Form programmatic labels, error association, live success state and privacy consent are not demonstrated by the text response.
- The current contact form does not visibly include the required privacy consent.
- Dense service pages and duplicated navigation impose high cognitive load.
- Color contrast, touch targets, heading order and 320 px overflow require rendered testing.
- No accessibility statement or evidenced automated/manual test process is available.

## Performance risks

- Multiple framework chunks and an external Google Material Icons stylesheet increase request and script cost.
- A large route/content footprint raises maintenance and stale-content risk.
- Public HTML is cacheable and images use Next image optimization, both positive foundations.
- Current real-user Core Web Vitals, bundle size, font loading, client-component boundaries and third-party calls are unverified.
- The redesign’s proposed scroll motion could regress LCP/INP unless isolated, lazy-loaded and measured from the vertical slice.

## Security and privacy

P1 verification items before carrying anything forward:

- Identify the form processor, recipients, data stores, retention, subprocessors, abuse protection and deletion flow.
- Add/verify server-side schema validation, rate limiting and safe error logging; never log message bodies or contact PII by default.
- Define a CSP compatible with the selected font, analytics and form services.
- Reconcile privacy/cookie copy with actual services and block consent-requiring tracking until consent.
- Verify legal ownership and publication approval for phone number, email, client-like results and logos.
- Confirm secrets, Vercel scopes, preview access, branch protection and dependency scanning in the canonical repository.

## Assets and patterns worth retaining

- Full Digitech Solutions name, domain, favicon continuity and established blue recognition—subject to the new visual brief.
- Founder-led first-person tone and Subor’s business/IT bridge—after claim verification.
- Process, requirements, application management, documentation and handover language.
- Existing article topics on refactor-versus-rewrite, technical debt, build-versus-buy, application assessment, performance and security after editorial review.
- Legal-page topics and contact channels, not necessarily their current wording.
- Repeated structural patterns: service explanation, FAQ, breadcrumb, related content and direct contact fallback.

## Technical debt not to carry forward

- Role-for-hire navigation and availability-led CTA architecture.
- Duplicate/overlapping service routes and category taxonomy.
- Unsupported metrics, guarantees and inconsistent experience claims.
- Generic capability/tool lists that imply unbounded scope.
- Mixed brand voice (`ik`, “we”, agency-like breadth) without deliberate ownership.
- External icon font when a small accessible SVG set is sufficient.
- Any form or analytics integration whose privacy behavior cannot be evidenced.
- Sitemap entries, canonical host choices or structured data that are not generated from one route/content source.

## Implementation options

| Option | Assessment |
|---|---|
| Evolve existing codebase | Reject for now: source/history/configuration are absent, so maintainability and hidden integrations cannot be assessed. |
| Rebuild within existing repository | Preferred once the canonical Git repository is confirmed: clean architecture, preserved history/domain/migration plan. |
| Clean new application inside this folder | Viable only if this folder is intentionally initialized and adopted as canonical; import docs first, not unknown compiled code. |
| Fresh repository | Fallback if the current production repository cannot be recovered or ownership/history is unsuitable. Costs include split history and migration coordination. |

## Required follow-up evidence

Obtain read access to the production Git repository and Vercel project; export route analytics/Search Console data; inspect form submissions and privacy configuration; run Lighthouse, axe, keyboard and screen-reader smoke tests; inventory source assets and licences; and record baseline URLs/status/canonicals before redirect implementation.

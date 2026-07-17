# Current Site Audit

**Audit date:** 18 July 2026
**Scope:** canonical source repository `Subor-zz/digitechsolutions_v2` plus the publicly reachable `https://digitechsolutions.nl` site. Public observations are point-in-time; Vercel account settings and environment values were not inspected.

## Executive finding

The canonical production source is confirmed at `https://github.com/Subor-zz/digitechsolutions_v2`, locally at `C:\Users\Borus\Desktop\Github\digitechsolutions_v2`. It contains the App Router application, package lock, public assets and Git history. `origin/HEAD` identifies `main` as the production branch. Owner: Subor. Hosting remains the confirmed Vercel project `brandons-projects-bfea97aa/digitechsolutions-v2`; production domain: `https://digitechsolutions.nl`.

**Strong recommendation, subject to the engineering gate:** Option B—rebuild the marketing layer inside this existing repository. Preserve Git/Vercel/domain continuity and audited SEO utilities/assets; plan to replace most page-level visuals, old-positioning content, unsafe reveal behavior and the non-functional contact form. Revalidate the boundary if new technical evidence materially changes the assessment. See `docs/rebrand/CANONICAL_REPO_ASSESSMENT.md` and `docs/rebrand/REBUILD_BOUNDARIES.md`.

## Evidence and implementation inventory

| Area | Observed state | Confidence / implication |
|---|---|---|
| Framework | Next.js App Router `^16.1.6`, React `^19.2.4`, TypeScript `^5` | Confirmed in package and lock files |
| Hosting | Confirmed Vercel project `digitechsolutions-v2`; live Vercel headers | Project reference confirmed; account roles/settings still require owner UI verification |
| Repository | `Subor-zz/digitechsolutions_v2`; `origin/HEAD -> origin/main` | Confirmed canonical source and history |
| Styling | Tailwind 3.4, global CSS, Manrope, Material Icons, mixed legacy/new colors and custom animations | Source audited; semantic redesign tokens are not yet present |
| Content | Hardcoded TSX/data modules; no MDX/CMS/schema validation | Confirmed |
| Components | Navigation/footer, breadcrumbs, FAQ, related content, SEO/schema utilities, scroll reveals and page-local patterns | Source assessed in `docs/rebrand/CANONICAL_REPO_ASSESSMENT.md` |
| SEO | Titles, descriptions, canonicals, robots, sitemap and JSON-LD are present | Good baseline, but sitemap/content consistency needs correction |
| Analytics | No analytics integration found in tracked source; cookie policy claims Plausible | Source/legal mismatch; verify live network/Vercel configuration |
| Forms | Client-only form performs local checks and shows success without sending | Must be replaced; no backend, server validation, privacy consent, spam or error path |
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
- Form labels exist, but errors lack programmatic association/summary/focus and the success state is not backed by a submission.
- The current contact form has no required privacy acknowledgement and no server boundary.
- Dense service pages and duplicated navigation impose high cognitive load.
- Color contrast, touch targets, heading order and 320 px overflow require rendered testing.
- No accessibility statement or evidenced automated/manual test process is available.

## Performance risks

- Multiple framework chunks and an external Google Material Icons stylesheet increase request and script cost.
- A large route/content footprint raises maintenance and stale-content risk.
- Public HTML is cacheable and images use Next image optimization, both positive foundations.
- Many full pages are client components because they embed reveal hooks; current real-user Core Web Vitals and bundle cost still require measurement.
- The redesign’s proposed scroll motion could regress LCP/INP unless isolated, lazy-loaded and measured from the vertical slice.

## Security and privacy

P1 verification items before carrying anything forward:

- Select a real form processor and define recipients, data stores, retention, subprocessors, abuse protection and deletion flow; the current form has no processor.
- Add/verify server-side schema validation, rate limiting and safe error logging; never log message bodies or contact PII by default.
- Define a CSP compatible with the selected font, analytics and form services.
- Reconcile privacy/cookie copy with actual services and block consent-requiring tracking until consent.
- Verify legal ownership and publication approval for phone number, email, client-like results and logos.
- Verify Vercel scopes, preview access, branch protection and dependency scanning with the owner; do not expose secrets during that review.

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
| Evolve existing components | Reject as primary approach: old positioning, duplicated client pages, hidden-by-default reveals and page-level styling would dominate the new architecture. |
| Rebuild marketing layer within existing repository | **Strong recommendation:** preserves history/domain/Vercel/SEO infrastructure while allowing clean route, content and component boundaries; reconfirm at the engineering gate. |
| Separate application | Reject: the canonical App Router repository is structurally suitable; a second app adds migration and deployment risk without evidence-based benefit. |
| Fresh repository | Reject: source and ownership are confirmed; former source-availability rationale is obsolete. |

## Required follow-up evidence

Verify Vercel production-branch/role/rollback settings in the owner UI; export route analytics/Search Console data; verify live analytics network behavior; run Lighthouse, axe, keyboard and screen-reader smoke tests; inventory source assets/licences; and record baseline URLs/status/canonicals before redirect implementation.

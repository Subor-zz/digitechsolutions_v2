# Canonical Repository Assessment

**Assessment date:** 18 July 2026
**Scope:** read-only inspection of the canonical local repository and tracked application source. No production application files, dependencies, routes, redirects, Vercel settings or DNS were changed.

## Repository verification

| Item | Verified state | Evidence |
|---|---|---|
| GitHub | `https://github.com/Subor-zz/digitechsolutions_v2` | `origin` fetch/push remote |
| Local clone | `C:\Users\Borus\Desktop\Github\digitechsolutions_v2` | Git worktree with application history |
| Production branch | `main` | `origin/HEAD -> origin/main`; local `main` and `origin/main` at `123db26` during audit |
| Audit branch | `docs/modernization-rebrand-foundation` | Active branch at audit time, based on the same commit as `main` |
| Vercel project | `brandons-projects-bfea97aa/digitechsolutions-v2` | Confirmed project reference supplied by owner; no tracked `.vercel` link/config exists |
| Production domain | `https://digitechsolutions.nl` | Owner confirmation plus production metadata/public configuration |
| Owner | Subor | Owner confirmation and repository namespace |
| Source availability | Confirmed | Tracked App Router source, package lock, assets and history are present |

## Current technical foundation

- Next.js App Router, package range `^16.1.6`.
- React/React DOM `^19.2.4`, TypeScript `^5`.
- Tailwind CSS `^3.4.17` with PostCSS/autoprefixer.
- Manrope through `next/font/google`; Google Material Icons through a runtime stylesheet.
- Vercel deployment continuity inferred from the confirmed project and live response; no repository-owned Vercel configuration beyond Next.js exists.
- No test framework, test files or CI workflow are configured.
- The `lint` script is `next lint` while the repository uses Next 16, and `eslint-config-next` is pinned to `15.1.6`; treat this as a compatibility risk to verify in a later engineering-foundation change rather than assuming the required repair in advance.

## Route and content architecture

Tracked page routes include:

- Core/legal: `/`, `/contact`, `/over-mij`, `/tarieven`, `/privacy`, `/cookiebeleid`, `/voorwaarden`, `/it-consultant-breda`, and the custom 404.
- Services: `/diensten` plus 12 tracked service route folders. `next.config.mjs` permanently redirects six legacy service/location routes to other current routes.
- Editorial: `/blog`, `/blog/[slug]` and `/blog/c/[category]`.

The service and blog content is hardcoded in TSX/data modules. There is no MDX, CMS or content schema validation. Blog categories and internal links are centralized in `app/lib/blog-categories.ts` and `app/lib/internal-links.ts`, which is useful migration input.

## Component assessment

| Implementation | Disposition | Rationale |
|---|---|---|
| `app/layout.tsx` App Router shell and `next/font` use | **Adapt** | Retain server layout/font optimization; replace old metadata/claims and move global navigation/footer semantics outside page duplication |
| `Navigation` component | **Replace page-level design; retain behavioral lessons** | New IA/CTA differs; current keyboard/focus/Escape behavior is incomplete and items are inline |
| `Footer` component | **Replace content/design; retain semantic pattern** | New IA and verified claims required; Link/Image implementation is reusable |
| `breadcrumbs.tsx` and schema breadcrumb builders | **Retain/adapt** | Useful accessible/SEO pattern after route registry consolidation |
| `JsonLd.tsx`, `app/lib/seo.ts`, `app/lib/schema/*` | **Retain/adapt** | Valuable builders; inputs and duplicated schemas must be audited against the claim register |
| FAQ and related-content components | **Retain/adapt** | Useful patterns if content becomes validated and accessible; avoid unsupported FAQ schema |
| `ScrollToTop` | **Evaluate/optional** | Not central to redesign; retain only if keyboard/focus behavior passes testing |
| `ScrollReveal` hook/wrappers | **Retire/replace** | Content begins hidden, requires client JS and reduced-motion coverage is incomplete; conflicts with no-JS content rule |
| Page-local `ScrollReveal` copies | **Retire** | Repeated hidden behavior and client boundaries across many pages create duplication and bundle cost |
| Homepage `SpotlightCard` pointer tracking | **Retire** | Decorative pointer-dependent behavior does not support the new narrative and writes CSS properties per mouse move |
| `tech-stack.tsx` | **Retire from primary marketing story** | Tool-list emphasis conflicts with problem/outcome positioning; verified stack facts may survive contextually |

## Styling and motion

`tailwind.config.ts` has useful centralized color/font names and custom keyframes, but it mixes “new” and “legacy” raw brand colors. Page files contain extensive arbitrary sizes, radii, shadows and one-off gradients. This is not the semantic token system required by the rebrand.

Existing animations include fade, blob, marquee, shimmer and float. The reduced-motion rule only neutralizes one `.reveal-pending` selector; it does not comprehensively disable the animation utilities. Several local wrappers apply `.scroll-reveal` without `.reveal-pending`, so content can remain invisible when JavaScript does not execute. Retain only the progressive-enhancement concept; replace the implementation.

## Contact form

The current form is a client component with client-side required checks. It has no server action, route handler or provider call. After validation it immediately sets `formSubmitted=true` and shows “Dank je” plus a one-workday response claim. Therefore it can report success without sending or storing anything.

Additional gaps: no server validation, rate limit, spam control, privacy acknowledgement, submission error state, focusable error summary, safe operational logging definition or provider/retention evidence. The email/telephone/LinkedIn fallback links can be retained after contact/claim approval. The form implementation itself must be replaced, not adapted into production.

## Analytics and privacy

No Plausible, Google Analytics or other common analytics script/SDK was found in tracked source. `cookiebeleid/page.tsx` nevertheless states that Plausible is used and that consent is unnecessary. This mismatch must be resolved by verifying the live Vercel configuration/network behavior and then updating implementation and legal text together. Do not assume the policy proves an integration.

## SEO implementation

### Retain

- Server-rendered App Router content and route-level metadata patterns.
- `app/lib/seo.ts`, schema helpers, breadcrumbs and related-link maps as migration inputs.
- Existing OG images, robots/sitemap concepts, Google verification asset and URL history.
- `next.config.mjs` as the eventual redirect enforcement point after a reviewed migration map.

### Correct during rebuild

- Canonical host is inconsistent: `siteUrl`/schemas/robots/sitemap use `www`, while an explicit root canonical uses the apex domain.
- Structured data is duplicated in several forms and contains unverified experience, service area, opening-hours, price-range, job-title and expertise claims.
- Static sitemap includes URLs that `next.config.mjs` redirects and can drift from actual routes/content.
- Some redirected route source remains tracked but unreachable under the redirect configuration.
- Root metadata and navigation still express the old ZZP role-for-hire positioning.
- Metadata should derive from one typed route/content registry; redirect rules require Search Console/backlink evidence before change.

## Accessibility findings

### Useful foundations

- `lang="nl"`, a main landmark, native links/buttons and visible form labels are present.
- Some menus expose `aria-expanded`; breadcrumbs and nav regions have labels.
- A reduced-motion attempt exists and images generally use Next Image.

### Replace/fix

- No skip link is present; the fixed navigation precedes all page content.
- Root `main` wraps page-level navigation/footer as well as page content, weakening landmark semantics.
- Dropdown/mobile-menu focus management, Escape handling and disclosure relationships are incomplete.
- Material Icon ligature text is not consistently hidden from assistive technology.
- Scroll reveal can hide content without JavaScript and reduced motion is incomplete.
- Form errors are not linked with `aria-describedby`/`aria-invalid`, have no error summary/focus move, and success lacks a truthful server boundary.
- Extensive hover/scale/pointer effects and low-contrast gray text require visual and keyboard testing.

## Public assets

Potentially reusable after rights/quality review: logo variants, favicons/apple/PWA icons, manifest, OG image, blog OG images, service OG images and Google verification file. The root 1.3 MB logo file and tracked `app.zip` are source-management debt rather than production dependencies; do not copy them into the redesign layer. Verify image ownership, source masters, compression, alt/caption purpose and whether legacy positioning is embedded in each OG asset.

## Recommendation

The evidence strongly supports **Option B — rebuild the marketing layer inside the existing repository** as the current recommendation.

The repository is structurally suitable: current App Router, Git/Vercel/domain continuity, SEO route history, metadata/schema utilities and assets are valuable. Evolving the current page/component structure would preserve extensive old positioning, duplicated client-page patterns and unsafe reveal/form behavior. A separate application would add deployment, history, domain and migration complexity without a structural need.

If the engineering gate confirms these findings, build the new route/content/component layer alongside controlled migration boundaries, reuse audited infrastructure, and replace most visual/page-level code only after wireframes and the vertical-slice gate are approved. New evidence about build behavior, deployment constraints or route dependencies may refine this boundary through `docs/rebrand/DECISIONS.md`; this assessment is not production-change authorization.

## Evidence still required

- Vercel role/project settings, production branch and rollback access verified in the Vercel UI by owner.
- Search Console/analytics/backlink export and a fresh URL/status/canonical crawl.
- Live network verification of analytics and form behavior.
- Claim/case evidence and permissions.
- Asset rights/source review.
- Baseline Lighthouse, axe, keyboard and screen-reader checks on representative routes.

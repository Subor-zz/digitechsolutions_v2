# Rebuild Boundaries

## Current recommendation

The current repository evidence strongly favors **Option B: rebuild the marketing layer inside `digitechsolutions_v2`**. Keep the repository, history, Vercel project, production domain and audited infrastructure. This is a planning boundary, not authorization to replace production code. Reconfirm it at the engineering gate and record any evidence-driven change in `docs/rebrand/DECISIONS.md`. Do not create a second application or rewrite production routes before the approved migration sprint.

## Boundary map

| Area | Keep | Adapt | Retire/replace | Gate |
|---|---|---|---|---|
| Git/Vercel/domain | Repository/history, `main`, existing project/domain | Branch/preview/release process | New repo/app solely due to former source uncertainty | Owner verifies Vercel access/rollback |
| App Router | Next.js route/layout model, server rendering | Root layout and route composition | Current marketing-page TSX as design basis | Approved wireframes and route migration plan |
| Routes/SEO equity | Current URL inventory and history | Map valuable old intents to launch IA | Blanket home redirects, redirect chains, redirected URLs in sitemap | Search Console/backlink/crawl evidence |
| SEO utilities | `app/lib/seo.ts`, schema helpers, breadcrumbs, OG patterns | One typed route/metadata/schema registry | Duplicated/unverified root JSON-LD and manual static drift | Claim register + metadata tests |
| Content | Useful article topics and factual raw material | Move approved insights/cases into validated content | Role-for-hire copy, unsupported metrics, broad tool lists | Editorial/claim approval |
| Navigation/footer | Link/Image primitives and general semantic roles | New IA, active states, disclosure/focus behavior | Current service list, availability CTA and old descriptor | Tested low-fi navigation |
| Styling | Tailwind pipeline and `next/font` mechanism | Semantic CSS variables/tokens and selected font | Legacy/raw palette mix, arbitrary glow/radius system, Material Icon font | Visual foundation/contrast/font tests |
| Motion | Progressive-enhancement intent | Flow Line/Hidden Drag after static implementation | Current hidden-by-default reveals, blobs/shimmer/marquee as default language | Motion prototype, reduced-motion and performance pass |
| Forms | Verified email fallback and layout learnings | New server boundary/provider-neutral UX | Client-only fake success and old service/budget form | Provider/privacy/security decision |
| Blog | Dynamic route pattern, categories/link maps as inventory | `/insights` content model and reviewed migration | Hardcoded monolithic article content where it prevents validation | Content schema and redirect map |
| Assets | Approved favicon/icon/logo continuity and useful OG source | Recompress/relabel or recreate for new position | Unlicensed/outdated OG art, duplicate archive assets | Rights/quality review |
| Legal | Route presence and topic coverage | Rewrite against actual processors/services | Plausible/cookie statements without implementation evidence | Legal/privacy owner approval |

## Protected production surface

Until a later implementation task explicitly authorizes changes, do not modify:

- `app/**`, `public/**`, `next.config.mjs`, Tailwind/PostCSS/TypeScript configuration, package files or deployment settings;
- current redirects, routes, metadata, structured data, forms, analytics or DNS;
- production content or assets.

This documentation sprint changes only root instructions and `docs/rebrand`.

## Intended future build boundary

After the Figma artifact/validation sprint and visual/motion gates:

1. Establish quality gates and a typed route/content registry on a feature branch.
2. Build tokens and an accessible static homepage vertical slice without replacing the live route.
3. Add Flow Line/Hidden Drag only as progressive enhancement and measure mobile/reduced-motion performance.
4. Build new launch route templates and validated case/insight content.
5. Audit metadata/structured data against the claim register.
6. Implement the intake only after provider, privacy, retention, validation, rate-limit and error behavior are approved.
7. Approve and test the complete direct redirect map in preview.
8. Cut over with rollback, form, 404, canonical, indexing and Core Web Vitals monitoring.

## Reuse rules

- Reuse behavior or utilities only after tests demonstrate they meet the new accessibility, privacy and content requirements.
- Copy no existing result/credential/service claim without an approved Claim Register status.
- A retained URL does not require retaining its old component or visual structure.
- A retained utility may be refactored behind stable output, but page-level redesign should not inherit old client-component boundaries.
- No animation may control initial content visibility.
- No structured-data property may exceed what the visible, verified page states.

## Out of scope for the Figma sprint

Repository refactors, dependency upgrades, lint repair, MDX/schema implementation, production route changes, form/provider integration, redirects, Vercel changes, DNS, final logo/type, and motion code. Figma uses the completed specifications and this boundary map; it does not mirror current page layouts.

## Decision checkpoints

| Checkpoint | Required decision/evidence | Outcome |
|---|---|---|
| Figma start | Canonical docs available; page specs/journeys fixed | Ready |
| High-fidelity start | Tested low-fi, minimum scan facts, case plans, founder content | Still open |
| Vertical-slice start | High-fi hero/Hidden Drag, motion feasibility, repository quality-gate plan | Future |
| Route migration | Search/traffic/backlink map, direct redirects, canonical registry | Future |
| Form launch | Provider/DPA/retention/legal basis, server validation/rate limit, truthful states | Future |
| Production cutover | Preview acceptance, rollback owner, monitoring and all content/claim approvals | Future |

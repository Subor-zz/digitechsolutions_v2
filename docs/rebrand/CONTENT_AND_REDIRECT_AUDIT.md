# Content and Redirect Audit

**Basis:** public sitemap, sampled pages and the confirmed canonical application source on 18 July 2026. Search demand, backlinks and traffic data remain unavailable; redirect decisions are recommendations pending Search Console/analytics and a complete crawl. No redirects are implemented here.

## Classification rules

`Rewrite` preserves topic intent with new evidence-led copy. `Merge` reuses useful material inside a broader destination. `Redirect` removes a standalone intent but preserves URL equity. `Verify claims first` blocks copy/metrics from migration. Every permanent redirect must be direct, relevant and tested; low-value URLs without a real equivalent may return 410 rather than mislead.

## Current core and service URLs

| Current URL | Topic / strategic & SEO value | Classification / risk | Proposed destination / redirect |
|---|---|---|---|
| `/` | Role-for-hire homepage; high brand equity | Rewrite; positioning conflict and claims | `/`; none |
| `/diensten` | Service overview; useful discovery | Merge; overlapping taxonomy | `/` or most relevant expertise hub decision; likely 301 to `/` |
| `/diensten/zzp-applicatiebeheerder` | Application management; likely search value | Verify then merge; numerous metrics/guarantees | `/applicatiemodernisering`; 301 |
| `/diensten/zzp-functioneel-beheerder` | Business/IT translation | Verify then merge; inconsistent experience claims | `/workflowmodernisering`; 301 |
| `/diensten/support-itsm` | Support/ITSM | Merge selected process/continuity content; out-of-position | `/workflowmodernisering` if content matches, else 410 after traffic review |
| `/diensten/fractional-cto` | Strategic technical leadership | Merge decision/roadmap insights; not core offer | `/werkwijze` or a relevant insight; decide by query intent |
| `/diensten/it-consultancy` | Audits/consultancy | Rewrite/merge; broad terminology | `/modernization-scan`; 301 |
| `/diensten/full-stack-development` | Build capability | Merge; build is execution, not front-door offer | `/applicatiemodernisering`; 301 |
| `/diensten/it-project-manager` | Temporary role | Remove/redirect; wrong business model | `/werkwijze` only if intent/content fits; otherwise 410 |
| `/diensten/projectmanagement` | Duplicate temporary role | Remove/redirect; duplication | Same decision as above; avoid chain |
| `/diensten/productconsultatie` | Validation/scope | Merge; relevant diagnostic material | `/modernization-scan`; 301 |
| `/diensten/product-business-consultatie` | Broad consultation | Merge/remove; vague overlap | `/modernization-scan` if substantive; otherwise 410 |
| `/diensten/applicatieconsultatie` | Application assessment | Rewrite/merge; strong topical fit | `/applicatiemodernisering` or scan based on page intent; 301 |
| `/diensten/technical-strategy` | Roadmap/technical decisions | Merge; supporting not primary offer | `/werkwijze` or relevant insight; 301 only to semantic match |
| `/tarieven` | Hourly rates | Remove as standalone; conflicts with productized entry | `/modernization-scan` only after commercial facts exist; otherwise retain temporarily/noindex decision |
| `/it-consultant-breda` | Local role page | Verify traffic; outdated positioning | Location-relevant insight/contact only if genuine equivalent; otherwise 410 |
| `/over-mij` | Founder proof | Rewrite; useful biography but claims unverified | `/over-subor`; 301 |
| `/contact` | Contact and form | Rewrite; missing required route/consent, form backend unknown | `/contact`; none |
| `/privacy` | Legal/privacy | Keep and legal rewrite | `/privacy`; none |
| `/cookiebeleid` | Cookie policy | Legal verify/merge | `/privacy` if one accurate notice; otherwise keep |
| `/voorwaarden` | Terms | Keep and legal review | `/voorwaarden`; none |

## Blog and category treatment

| Current group | Classification | Destination strategy |
|---|---|---|
| `/blog` | Rewrite | `/insights`; 301 |
| `/blog/c/fractional-cto` | Remove/merge after traffic review | Relevant retained insights or 410; do not redirect every item to index |
| `/blog/c/it-consultancy-audits` | Rewrite | Insight topic or `/insights`; retain audit/diagnosis intent |
| `/blog/c/full-stack-mvp` | Merge | Application-modernization insight topic |
| `/blog/c/performance-security` | Keep selectively | Application-modernization insight topic; claims/sources reviewed |
| `/blog/c/strategie-beslissingen` | Keep selectively | Modernization decision insight topic |

### Article-level recommendation

| Current slug(s) | Value | Action / likely destination |
|---|---|---|
| `wat-is-een-applicatie-audit` | High scan relevance | Rewrite as modernization assessment insight; 301 to new slug |
| `wanneer-herschrijven-vs-doorbouwen` | High application relevance | Keep/rewrite with decision lens; 301 to insight slug |
| `technische-schuld-voorkomen`, `performanceproblemen-herkennen`, `security-risico's-bij-webapps` | High supporting relevance | Verify sources, update, migrate to insights |
| `build-vs-buy-beslissingen` | High cross-route relevance | Rewrite and migrate |
| `mvp-laten-bouwen-waar-op-letten`, `react-vs-nextjs-voor-startups`, `tech-roadmap-voor-startups` | Medium application/founder value | Merge/rewrite; remove tool-choice certainty and generic startup framing |
| `wanneer-zzp-applicatiebeheerder-inhuren`, `applicatiebeheerder-binnen-overheidsorganisaties` | Legacy role intent | Archive/410 or redirect only if a genuine modernization equivalent exists |
| `van-ad-hoc-helpdesk-naar-itil-support` | Supporting workflow/operations value | Rewrite around service workflow and ownership, or archive |
| Six fractional-CTO articles | Out-of-position but may have SEO equity | Traffic/backlink review; consolidate into one technical-ownership insight or 410 individually |

Known sitemap article routes include: `wanneer-heb-je-een-fractional-cto-nodig`, `kosten-vs-fulltime-cto`, `fractional-cto-vs-interim-cto`, `technische-fouten-zonder-cto`, `tech-roadmap-voor-startups`, `fractional-cto-bij-due-diligence`, `wat-is-een-applicatie-audit`, `wanneer-zzp-applicatiebeheerder-inhuren`, `van-ad-hoc-helpdesk-naar-itil-support`, `performanceproblemen-herkennen`, `security-risico's-bij-webapps`, `mvp-laten-bouwen-waar-op-letten`, `react-vs-nextjs-voor-startups`, `technische-schuld-voorkomen`, `wanneer-herschrijven-vs-doorbouwen`, `applicatiebeheerder-binnen-overheidsorganisaties`, and `build-vs-buy-beslissingen`. The sitemap count/content should be reconciled because the extracted listing contains more article entries than the “16” initially inferred from its categories.

## Contradictions and unsupported claims

- Experience varies across pages: 9+, 8–15 and 15+ years; finance and IT experience are not consistently separated.
- Current “senior”, certification, platform and geographic scope claims require evidence.
- “Within 24/48 hours”, “guaranteed”, zero downtime, percentage savings/performance, incident/MTTR results and employment-cost comparisons require dated source, context and permission.
- The site alternates among solo `ik`, “we”, and broad agency-like capability.
- Current availability/hourly engagement contradicts scan-first outcome positioning.
- “Free intake” must not be confused with the standalone-value scan.

Do not migrate these claims until `claim → source → context → permission → expiry/reviewer` is complete.

## Reusable content

Functional translation, process optimization, application continuity, requirements/UAT, documentation, knowledge transfer, refactor-versus-rewrite, build-versus-buy, technical debt, application assessment and founder business/IT background are strong raw inputs. Reuse the idea, not unverified wording or metrics.

## Content and proof gaps

Missing: verified workflow and application cases; provenance-labelled diagrams/screenshots; scan example output; precise founder bio and qualifications; client permission; testimonial evidence; scope/non-fit FAQs; application migration/rollback example; workflow exception/human-control example; legal processor/retention facts; and social images.

## Redirect implementation gate

Before coding: export 12–16 months of Search Console/analytics; crawl both apex and `www`; collect backlinks; decide canonical host; freeze old/new URL map with owner; identify 404/410 candidates; test query strings and trailing slash behavior; deploy direct server-side 301/308 rules; update internal links/sitemap/canonicals; monitor 404s, rankings and conversions for at least eight weeks.

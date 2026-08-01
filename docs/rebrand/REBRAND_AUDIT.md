# Rebrand Prototype Audit

**Date:** 19 July 2026  
**Scope:** documentation snapshot, public homepage, and the isolated prototype requested for `/prototype/rebrand`

## Executive finding

The current public site presents Digitech Solutions primarily as temporarily available application-management and functional-management capacity. The documentation defines a materially stronger position: a founder-led studio that diagnoses and modernizes workflow and application friction in controlled steps. The rebrand prototype should prove that repositioning without pretending that unresolved claims, cases, commercial terms, or production integrations are complete.

This workspace contains documentation only. It has no application source, package manifest, assets, tests, Git history, or production configuration. The new brief explicitly authorizes a prototype, so this folder will receive a clean review application while the live homepage remains untouched. This is a prototype decision, not a production migration decision.

## Authoritative sources

Priority follows `AGENTS.md`:

1. `DECISIONS.md`, especially locked decisions D-001 through D-035.
2. `REQUIREMENTS.md` and `TECHNICAL_FOUNDATION.md`.
3. `PROJECT_BRIEF.md`, `POSITIONING.md`, and `MODERNIZATION_SCAN.md`.
4. `STORYLINE.md`, `HOMEPAGE_CONTENT_ARCHITECTURE.md`, and `HOMEPAGE_WIREFRAME_SPEC.md`.
5. Visual, motion, evidence, claim, and UX supporting documents.
6. The rebrand prototype brief where it explicitly authorizes work that earlier gate documents deferred.

## Existing brand problems

- The public headline sells roles and availability instead of a defined modernization outcome.
- The broad service catalog makes Digitech appear generalist and obscures the strongest business and technical bridge.
- Availability and temporary-capacity language reinforces hourly staffing rather than bounded diagnosis and delivery.
- Unsupported experience, response-time, geographic, and performance claims create credibility risk.
- The voice moves between solo delivery and agency breadth without making accountability or specialist involvement precise.
- The current visual and copy hierarchy does not express the documented editorial engineering position.

## Existing UX problems

- The homepage lists capabilities but does not help a skeptical visitor identify the root of their operational drag.
- Workflow and application problems are separate menu items rather than two possible causes within one diagnostic story.
- The primary action asks visitors to discuss availability before they understand a purchasable first step.
- Technical evaluators receive lists of activities, not inspectable reasoning about scope, risk, options, and transfer.
- There is no evidence-led path from recognition to a proportionate next action.
- Dense repeated cards and generic process steps make the page feel assembled rather than narrated.

## Technical constraints

- No production source, Git repository, assets, or deployment ownership is available in this folder.
- The implementation cannot reuse an existing component library because none is present.
- Form transport, analytics, consent, legal ownership, redirect evidence, and canonical host remain unresolved.
- No approved founder photography, case media, report sample, or final identity assets are available.
- The prototype must therefore stay static, provider-neutral, analytics-free, and isolated.
- The documented stack preference is Next.js App Router, strict TypeScript, semantic tokens, server-rendered content, and small client islands.

## Documentation conflicts and decisions

### Engineering gate versus explicit prototype request

`PHASE_0_CLOSEOUT.md`, `UX_SPRINT_CLOSEOUT.md`, and `WIREFRAME_ARTIFACT_STRATEGY.md` defer HTML until the canonical repository and UX gates are resolved. The current brief explicitly requests a complete isolated prototype. Decision: build a non-production review application in this folder, add no deployment or migration configuration, and keep the route noindex/nofollow.

### Full nine-chapter story versus concise conversion path

The storyline specifies nine chapters while the brief warns against a long component showcase. Decision: retain the documented sequence but compress Entry into the header and combine related proof/trust material so each major section has one user job.

### Proof requirement versus missing cases

Two publishable cases do not exist. Decision: do not fabricate case cards. Replace the proof chapter with an explicit evidence policy and the anatomy of what a future proof item must disclose. This is honest prototype content, not a client result.

### Scan value versus unresolved commercial facts

The scan has a clear diagnostic model and deliverables, but duration, price, maximum scope, and operational response time remain open. Decision: explain the confirmed output and boundaries while omitting duration, price, and response promises.

### Motion framework versus performance and accessibility

The `gpt-taste` framework favors assertive GSAP treatments; project decisions require CSS/SVG first, native scroll, and meaningful motion only. Decision: use at most one bounded desktop ScrollTrigger sequence to explain fragmentation becoming a controlled flow, plus restrained stacked chapter behavior where it improves causality. Mobile and reduced-motion versions remain static and complete.

### Generated layout selection versus evidence constraints

The deterministic `gpt-taste` selection produced an artistic asymmetric hero, Satoshi, horizontal accordions, a testimonial carousel, an infinite partner marquee, scroll pinning, and card stacking. The hero asymmetry, deliberate density, and controlled stacking are useful. Testimonials, partner marquee, and Satoshi conflict with missing evidence, unnecessary looping, and the documented Geist direction. Decision: reject those content patterns, use Geist, and retain the selected interaction principles only where they serve the journey.

## Opportunities worth preserving

- The founder-led business-to-IT bridge is credible and distinctive when described without inflated claims.
- “Moderniseer wat je organisatie vertraagt” is a strong working headline and matches the locked position.
- The Modernization Scan gives uncertain visitors a safer entry than a generic sales call.
- The Flow Line can connect the full story when it encodes handoffs, decisions, gates, and transfer.
- Dark concentration and warm explanatory sections create an appropriate Dutch B2B rhythm.
- The decision lens makes “no automatic rewrite” tangible.

## Risks

- **P1 credibility:** unresolved cases or founder claims could be mistaken for proof if styled too confidently.
- **P1 delivery:** this workspace is not the canonical production repository and must not be treated as deploy-ready.
- **P1 privacy:** a functional-looking form could imply real data handling without a provider or policy.
- **P2 comprehension:** too much process language could hide the practical outcome.
- **P2 performance/accessibility:** pinning or large motion could reduce control on mobile or under reduced motion.
- **P2 conversion:** omitting price and duration may leave high-intent visitors with practical questions; the prototype must acknowledge this rather than invent an answer.

## Recommended prototype approach

- Build `/prototype/rebrand` as a static-first Next.js route with noindex/nofollow metadata.
- Keep the existing public homepage outside this workspace and make no redirect or deployment changes.
- Use a continuous editorial page, not a dashboard or component gallery.
- Open with recognizable operational friction, then establish technical judgment in the same first viewport.
- Show a labelled illustrative workflow transformation, decision layers, two self-selection routes, the controlled method, evidence standard, founder accountability, and scan output.
- Use semantic HTML and CSS/SVG for the complete experience; add only bounded progressive motion.
- Link CTAs to meaningful sections in the prototype rather than pretending an intake backend exists.
- Treat unresolved facts as explicit production limitations in documentation, not public-facing placeholder claims.


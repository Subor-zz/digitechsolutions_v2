# UX Assumptions

**Sprint date:** 18 July 2026
**Purpose:** separate decisions that are safe for wireframing from facts that still require product, evidence, legal or technical approval.

## Confirmed assumptions

- The visible brand is **Digitech Solutions** and the site is explicitly founder-led by Subor Cheung.
- Launch language is Dutch. The category is workflow- and application modernization.
- The opening leads with operational friction and establishes technical credibility immediately afterward.
- Workflow and application modernization are two routes in one diagnosis-led story; `combined` and `unsure` are valid scan paths.
- The Modernization Scan is the primary sitewide conversion and must provide standalone value.
- Homepage narrative and chapter order remain Entry → Conflict → Hidden Drag → Diagnosis → Two Routes → Delivery Method → Proof → Founder-led Trust → Scan CTA.
- Launch page types and route model are fixed by D-022; 404 and form outcome states are added as system states, not new positioning.
- Core content must work without JavaScript, motion or hover. Mobile and reduced-motion are designed states.
- Cases are labelled `client`, `anonymized`, `lab` or `concept`; no claim or metric is published without evidence and permission.
- Digitech is not presented as a fictional multi-person agency. Specialist participation is described transparently and only where relevant.

## Unresolved assumptions

| Unknown | Working UX treatment | Owner / decision gate |
|---|---|---|
| Scan duration, maximum scope, input list and exclusions | Reserve a compact “Praktisch” block with `nog te bevestigen`; never imply a duration | Subor — before scan wireframe sign-off |
| Paid/free model and public price | Do not display price or “free”; CTA starts qualification, not payment | Subor — before final scan copy |
| Exact follow-up time | Use non-promissory “Je ontvangt een bevestiging en hoort wat de passende vervolgstap is”; reserve response-time slot | Subor — before form production copy |
| Two launch cases | Use content-shaped evidence slots with `case vereist`; never fill with fictional examples | Subor — before high-fidelity proof design |
| Verified founder claims and credentials | Show layout slots only for approved evidence | Subor — before high-fidelity About page |
| Dutch/English descriptor | Wireframe uses Dutch functional descriptor; typography test may revisit visible form | Subor/design research — visual sprint |
| Form, calendar, analytics and consent providers | Specify provider-neutral behavior and privacy constraints | Technical/privacy — before implementation |
| Canonical host/repository | Use proposed route labels without implementation assumptions | Technical/SEO — before engineering/migration |
| Photography | Reserve real-photo aspect ratios; no stock or generated founder image | Subor — before visual design |

## UX decisions safe now

1. One dominant CTA per page; scan CTA links to the scan explanation before intake unless the visitor explicitly selects “start intake”.
2. Navigation order: Expertise disclosure, Werkwijze, Cases, Insights, Over Subor, scan CTA; Contact remains available in footer/mobile utility.
3. Service pages use `fit → problem model → approach → outputs → limits → proof → CTA`, with technical depth adapted to audience.
4. The scan page first explains value and routes, then starts a short route-selection step followed by one shared intake form.
5. Intake supports save-free progressive disclosure: no account, upload or system access in the public flow.
6. Cases expose provenance/classification before results. Proof modules collapse gracefully when no approved case exists.
7. A small launch case set uses grouping, not decorative filtering. Insight overview uses topic links, not search, at launch.
8. Mobile preserves document order; desktop spatial layouts may not change semantic reading order.
9. Sticky scan CTA appears only after the hero/first intent signal and must not cover content or form controls.
10. Error and success states are pages/regions with clear recovery, not transient toast-only messages.

## Decisions that remain open

- Final headline/descriptor after comprehension and visual-fit testing.
- Exact scan commercial facts, response promise and whether scheduling appears after submission.
- Case selection, case classification and evidence that may be shown.
- Final navigation microcopy if usability testing finds “Expertise” or “Modernization Scan” unclear.
- Final form field requirement for organization size and affected workflow/application after completion testing; both are included now because the sprint brief requires them.
- Whether a separate cookie policy is necessary after actual processors are chosen.
- Exact 404 search capability; launch recommendation is no site search unless insight volume justifies it.
- Final motion choreography, logo and typography.

## Content dependencies affecting layout

| Dependency | Affected layout | Safe placeholder rule |
|---|---|---|
| Case count, classification, result length and media | Homepage Proof, Cases and Case detail | Design for two cards and one detail template; labels never omitted |
| Scan outputs and practical facts | Homepage CTA, Scan page and success state | Reserve output list plus one compact facts panel |
| Founder bio, portrait and credentials | Homepage trust and About | Reserve one portrait, short bio and evidence list; omit empty credential grid |
| Workflow/application examples | Service diagrams and FAQs | Use labelled generic patterns, not implied client work |
| Claims and citations | Hero trust lines, method gates, About and cases | Only identity/positioning copy is populated until verified |
| Legal text and processors | Intake consent, Privacy and Terms | Use structured legal headings; no fabricated processor names |
| Insight inventory | Overview grouping and related content | Design for 3–8 items without requiring search/filter UI |

## Technical dependencies that do not block wireframing

- Canonical Git repository, framework versions and Vercel ownership.
- Form transport, spam service, rate limit and email/calendar provider.
- Analytics/consent implementation and error monitoring.
- MDX schema library, motion library and exact SVG implementation.
- Redirect syntax, canonical host, image pipeline and font loading.

Wireframes annotate the behavior these systems must support; they do not select or simulate the implementation.

## Assumption review protocol

Every wireframe frame carries `confirmed`, `working` or `content-dependent` annotations. When an open fact is resolved, update `docs/rebrand/DECISIONS.md`, the relevant spec and the frame together. A content-dependent block may be removed or resized, but it may not be silently filled with invented copy or proof.

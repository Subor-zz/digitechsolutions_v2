# Static Four-Act Prototype Review

**Route reviewed:** `/prototype/four-act-homepage` (noindex, nofollow, noimageindex — `layout.tsx:8-17`)
**Method:** Real headless-Chromium drive against `npm run dev` (localhost:3000). 10 required screenshots + responsive/overflow/tap-target/heading measurements captured at 1440×1000, 1024×900, 768×1024, 375×812, 320×700. Narrative findings cross-checked against all six source-of-truth documents and adversarially verified (each blocker/important claim was independently attacked before being kept).
**Constraint honoured:** No code, motion, or components were added or changed. This is the only file created. Screenshots live outside the repo (see *Screenshot locations*).

Every issue below is classified exactly as:
`blocker before motion` · `important before motion` · `may be solved during motion prototype` · `later visual-design refinement`.

---

## Executive Verdict

**Conditional GO.** The prototype clears the *Statische acceptance gate* (`STORY_CHOREOGRAPHY.md:175-184`) on the dimensions that matter most for a low-fidelity validation artifact: it is fully server-rendered and understandable with JS/motion/images disabled, honest to a degree that exceeds the spec drafts, responsive with **zero horizontal overflow at every tested viewport**, and has a clean heading outline (1 H1, 4 H2, 10 H3, 13 H4) with **no obscuring sticky chrome**. The four-act structure is real and the dark/paper/dark/paper rhythm makes the acts genuinely distinguishable without a single line of animation.

It must **not** advance to the motion sprint until a short, motion-free fix pass closes two P0 accessibility-gate failures (no `<main>` landmark; one AA contrast failure) and resolves the **conversion dead-end** (every "Start met een Modernization Scan" CTA lands on one disabled button with no spec-mandated fallback). Those are content/markup fixes, not motion work, and layering motion on top of them would only disguise the gaps.

After adversarial verification there are **zero hard blockers** — the one candidate flagged as a blocker (mobile page length) was refuted: the "First 30 seconds" test is a comprehension test of the first 30 seconds of *attention*, which the hero satisfies, and trimming spec-mandated lists would itself violate the wireframe. The eight confirmed defects are all `important before motion` and all fixable without motion.

**Distinctiveness verdict per act (1–5):** Chaos **4**, Bezinning **3**, Arbeid **3**, Resultaat **3**. Openings are sharply distinct; closings blur — especially Bezinning→Arbeid, where the route-card grammar repeats, and Resultaat, whose climax is its emptiest moment.

---

## Act 1 — Chaos

**Visual reading (screenshots `01-chaos-begin.png`, `d2-012HiddenDrag.png`, `d2-Huidigetoestand.png`):** Dark `--ink #090b0f`. The hero is a two-column grid: a dominant left-aligned H1 `Moderniseer wat je organisatie vertraagt.` (106.6px @1440, 49.6px @320), a support line, a primary CTA + a *text-link* secondary, the identity line `Rechtstreeks met Subor Cheung.`, and a right-hand "Illustratief systeemlandschap" panel — a calm 2×2 of bordered nodes (Inbox / Spreadsheet / Overdracht / Oude applicatie) on a faint blueprint grid, with nodes 2 and 4 nudged 1.2rem down. Below: a `fragmented` Flow Line, a Hidden Drag scene (intro + 5-item friction grid), and a before/after of two flow sequences (7 chips → 5 chips).

- **Is operational fragmentation immediately recognisable?** Partially. The *concept* is immediate via copy and the friction list; the *visual* is not. `— may be solved during motion prototype`. The system map is orderly, not "gecontroleerd onrustig" (`STORY_CHOREOGRAPHY.md:38`). The only truly fragmented graphic is the thin `fragmented` Flow Line band (`flow-line.tsx:12-23`, which *is* a faithful realisation: three disjoint segments, two y-levels, a backward risk branch). A viewer who registers only the hero reads "tidy diagram", not "controlled chaos".
- **Does it go beyond irritation?** Yes in copy, no in layout. The 5 signals escalate irritation → risk → continuity (Dubbele invoer → Foutkans/Ontbrekende audit trail → Kennisafhankelijkheid), but they are five typographically identical bare labels, so "beyond irritation" lands only at the closing blockquote. `— later visual-design refinement` (severity weighting/grouping).
- **Is the visual busyness controlled and readable?** Yes — strongly. 5-second proposition + CTA findability is satisfied; the secondary CTA is a subordinate text link (no "multiple equal hero buttons" violation).
- **Is the Flow Line genuinely fragmented?** Yes — the SVG path data is a correct, disjoint realisation of the spec contract, and it is correctly `aria-hidden` with a text caption fallback.

**Confirmed issues**
- **Missing Hidden Drag exit CTA** (`acts.tsx:86-111`). `WIREFRAME_SPEC.md:36`, `CONTENT_ARCHITECTURE.md:33`, `FIGMA_FRAME_PLAN.md:88`, `WIREFRAME_CONTENT_MATRIX.md:29` all mandate `Bekijk workflowmodernisering`. The scene ends at the before/after and jumps straight to the conclusion. `— important before motion`. *(Caveat: the destination `/workflowmodernisering` does not exist in the route map, so the fix is an in-page anchor now or a labelled-gap button until the page exists — do not ship a dead link.)*
- Hero "chaos" is conceptual, not visual (above). `— may be solved during motion prototype`.
- System map omits the spec's "feeding a constrained flow" relationship (`WIREFRAME_SPEC.md` ch.2). `— later visual-design refinement`.
- 5th friction signal `Kennisafhankelijkheid` orphaned in the 2-col grid (empty right cell on desktop/tablet; collapses on mobile). `— later visual-design refinement`.

---

## Transition — Chaos to Bezinning

**Visual reading (`02-transition-chaos-bezinning.png`):** Chaos ends with its right-aligned, orange-left-border conclusion `Onze organisatie draait, maar er lekt tijd, kennis en controle weg.`, then a **hard background flip** to paper `#f2f0e9` and the `Akte 02 / Bezinning` heading. No shared element, no transitional caption.

- This hard cut is **spec-intended** (`STORY_CHOREOGRAPHY.md` prescribes the per-act visual states), and the conceptual bridge *does* exist — the prior conclusion sets up the next act's heading description ("lekt tijd/kennis/controle weg" → "Zet de flow stil. Scheid symptomen van oorzaken"). So this is **not a defect**.
- The `WIREFRAME_SPEC` inter-chapter captions ("Maar welke ingreep is verstandig?", etc.) are absent, but those belong to the older 9-chapter model that `STORY_CHOREOGRAPHY` regrouped into four acts; the more recent/specific doc governs. `— later visual-design refinement` (a one-line bridging caption would still help).
- **Works without motion:** yes. The colour flip + conclusion + heading carry it.
- **Motion later:** a brief eased colour crossfade (200–400ms) would soften the jolt without losing the rhythm.

---

## Act 2 — Bezinning

**Visual reading (`03-bezinning-begin.png`, `d2-021Diagnose.png`, `d2-Decisionlens.png`, `d2-022ModernizationScan.png`):** Paper `#f2f0e9`. The `paused` Flow Line, then a 5-layer diagnostic list (Proces / Data / Systemen / Risico / Eigenaarschap), a Decision-lens panel with 8 option tags, the `mapped` Flow Line, then a **dark** scan-bridge panel with a 2×2 of four route cards (01 proces / 02 applicatie / 03 combined / 04 unsure) + a reassurance line.

- **More calm/space vs Chaos?** Yes on entry (light surface, paused line, airy diagnostic list). No on exit — the dark scan-bridge with its coded 2×2 grid reads as a control panel and visually previews Act 3 inside Act 2. This is the main reason Bezinning's distinctiveness is 3, not 4–5. The dark-Scan-panel device is, however, a *coherent* system (it repeats in Act 4), so it is `— later visual-design refinement`, not a defect.
- **Difference from Chaos clear without animation?** Yes — sharply, on entry.
- **Why building isn't the first step?** Yes, demonstrated *structurally*: 5 cause-seeking investigation layers precede the solutions panel, which is explicitly deferred ("Modernisering hoeft niet met automatisering of een volledige herbouw te beginnen"). The "cause vs symptom" line is asserted once (heading) — an explicit friction→layer cross-reference would be a nice enrichment but is **not** spec-required (the no-JS relationship diagram is "supplementary", `WIREFRAME_SPEC.md:56`). `— later visual-design refinement`.
- **Scan introduced logically?** Yes — placement is correct and spec-mandated (`STORY_CHOREOGRAPHY.md:14,62`).
- **Cause vs symptom?** Adequately conveyed structurally; not demonstrated visually (acceptable for static).

**Confirmed issues**
- **scan-bridge has no in-scene CTA** (`acts.tsx:166-188`). `WIREFRAME_SPEC.md:50` mandates `Bekijk de Modernization Scan`. The bridge builds Scan momentum, then offers no action — and on mobile the header CTA has already scrolled away, leaving ~6000px of scroll to `#scan-entry`. `— important before motion` (clean fix: one in-page `<a href="#scan-entry">`).
- Content density (5 + 8 + 4 = 17 labelled items) leans toward the "dashboard" the choreography warns against (`STORY_CHOREOGRAPHY.md:68`). `— later visual-design refinement`.
- `[Definitieve scanscope volgt]` tag here is terser than its full-sentence Act-4 equivalent. `— later visual-design refinement`.

*Refuted as defects (kept honest here so they are not re-litigated):* the 4 route cards being non-link `<article>` is spec-sanctioned ("links/kaarten", `STORY_CHOREOGRAPHY.md:74`); the intake is disabled, so linkifying would mislead. The scan-bridge/scan-entry pair is **not** redundant — they show different content (routes vs outputs) and different headlines.

---

## Transition — Bezinning to Arbeid

**Visual reading (`04-transition-bezinning-arbeid.png`):** Bezinning's conclusion → hard flip back to dark `--ink` → `Akte 03 / Arbeid`.

- **This is the weakest transition.** Not because the cut is abrupt (it is spec-intended), but because the *content on both sides* is conceptually and visually close: Bezinning closes with 4 route cards on a dark surface; Arbeid opens immediately with 2 route cards + a combined-route aside on the same dark surface. `STORY_CHOREOGRAPHY.md:18` explicitly sanctions this as "bewuste herhaling met een andere taak" — but the UI does not signal the role change, so a quick scroller can read the second occurrence as repetition or contradiction.
- Classification: the *repetition* is **not a defect** (spec-mandated); the *unsignalled role change* and the *shared card grammar* are `— later visual-design refinement` (differentiate the two card families: question-led decision prompts vs execution-direction panels).
- **Works without motion:** yes. **Motion cannot fix** the conceptual overlap — only verbal/visual differentiation can.

---

## Act 3 — Arbeid

**Visual reading (`05-arbeid-begin.png`, `d2-delivery-flow.png`, `d2-033Founderled.png`):** Dark `--ink`. Two route cards (Workflowmodernisering / Applicatiemodernisering, each with a headline + 3 points) and a full-width combined-route aside; the `organized` Flow Line; a 6-step delivery grid (Scope / Map / Simplify / Build / Verify / Transfer); a founder section with a dashed 4:5 portrait placeholder + a 6-item capability list.

- **Controlled craft / professional work?** Yes — the canonical 6-step method renders faithfully and reads as a controlled process. Quality gates are process labels, not fake trust badges (CL-026..030 correctly *not* shown as proven).
- **Workflow vs application distinguishable?** Yes — distinct eyebrows, headlines, and fit-signal lists.
- **Method understandable?** Yes.
- **Scope, testing, documentation, handover visible?** Yes — Scope (01), Verify (05), Transfer (06) are all named steps with one-line descriptions.
- **Founder-led credible?** In *copy*, yes (direct work with Subor + transparent specialists + partner/capacity limits — the full CL-032 qualifier). In *evidence*, no — and that is the gap.

**Confirmed issues**
- **Founder bio slot is empty** (`acts.tsx:246-263`). `WIREFRAME_SPEC.md:105,113` and `AUDIENCE_AND_MESSAGING.md` ch.8 require a 45–60-word bio. Only a ~25-word positioning line ships. CL-002/005..013 block real biographical content, so the consistent fix is a *labelled dashed bio placeholder* (mirroring the portrait placeholder), not silence. `— important before motion`.
- **No CTAs on the two route cards, the combined-route aside, or the founder section** (`acts.tsx:208-220, 246-263`). `WIREFRAME_SPEC.md:64,106` mandate `Bekijk workflowmodernisering` / `Bekijk applicatiemodernisering` / `Over Subor`. `— important before motion` (same destination-page caveat as the Hidden Drag CTA; use in-page anchors or labelled-gap buttons).
- Delivery steps show only name + description — no per-step artifact/outcome label, and the `organized` Flow Line draws **5 gate rectangles for 6 steps** (count mismatch). `— may be solved during motion prototype` (settle the labels + count parity as static content first).
- Scene numbering skips `03.1` — the opening route scene has no `.sceneNumber` while `03.2`/`03.3` do. `— later visual-design refinement`.

---

## Transition — Arbeid to Resultaat

**Visual reading (`06-transition-arbeid-resultaat.png`):** Arbeid's conclusion → hard flip to the lightest surface on the page `--paper-light #faf9f5` → `Akte 04 / Resultaat`.

- Conceptually sound: "beoordeeld, vastgelegd en overdraagbaar" → "weer beheersbaar".
- The flip to the calmest surface + the unique **green** `verified` Flow Line (the only green on the page) makes this the cleanest of the three boundaries at a glance.
- Same caveat as the others: identical transition *shape* (blockquote + flip + heading) used a third time. `— later visual-design refinement`. Not a defect.
- **Works without motion:** yes — strongly.

---

## Act 4 — Resultaat

**Visual reading (`07-resultaat.png`, `d2-042EvidenceLayer.png`, `08-scan-entry.png`):** Paper-light. The green `verified` Flow Line with four checkmark nodes; three outcome cards (Zichtbare flow / Aanpasbare systemen / Belegd eigenaarschap); an evidence layer of **two empty dashed cards** (`[Gevalideerde klantcase nodig]`); then the dark Scan-entry panel with three provisional outputs, an orange safety warning, and a **disabled** intake button.

- **Calmer than Chaos?** Yes — the lightest surface + green verified line deliver calm.
- **What structurally changed / is it concrete?** This is the act's honest weakness. The outcome cards use concrete nouns but conditional/aspirational predicates ("Minder…", "kunnen veranderen"). The only structural "change" signal is the decorative Flow Line state machine. There is no localised before/after delta (Chaos had 7-chip → 5-chip). `STORY_CHOREOGRAPHY.md:122` explicitly sanctions the "gewenste richting, niet gemeten resultaat" approach, so this is **spec-compliant** — but it leaves the climax as the emptiest act. `— may be solved during motion prototype` (a static node-delta reusing the Chaos system nodes, labelled "gewenste toestand", is the no-motion path; the vivid morph belongs to motion).
- **Manageability palpable?** Asserted, not shown.

**Confirmed issues**
- **`ResultAct` has no closing `actConclusion` blockquote** (`acts.tsx:273-357`) — the other three acts close with one (`acts.tsx:109,190,265`). `STORY_CHOREOGRAPHY.md:140-142` defines Act 4's closing line `Niet alleen gemoderniseerd, maar weer onder controle.`, but that string was consumed as the `04.1` scene H3 instead. The act — and the whole page — trails off at a disabled button in the dark Scan panel. `— important before motion` (restore the blockquote on the paper-light surface *after* the Scan panel; give `04.1` a different headline).
- **Evidence layer is a stub, not the "report anatomy" the spec asked for** (`CONTENT_ARCHITECTURE.md:69`, `WIREFRAME_SPEC.md:93`). Two empty 17rem cards. Honest per CL-019..25, and the binding honesty gate is met — so `— may be solved during motion prototype` (replace with a labelled 7-field anatomy schematic, clearly *not* a real case).
- Result asserted, not shown (above). `— may be solved during motion prototype`.
- `scanSafety` copy drops `gevoelige persoonsgegevens` / `gezondheidsgegevens` vs the canonical intake list (CL-035). `— later visual-design refinement`.
- Act opens calm but **closes dark + disabled** — the page's final tone is "CTA dead-end", not "verified result". `— later visual-design refinement` (resolved by restoring the conclusion blockquote after the Scan panel).

---

## Modernization Scan Entry

**Visual reading (`08-scan-entry.png`):** Integrated as scene `04.3` *inside* `ResultAct` — not a loose banner. Headline `Je hoeft nog niet te weten wat er gebouwd moet worden.`, three provisional outputs, a prominent orange safety warning, a disabled intake button, and a privacy link. The Scan thread introduced in Bezinning `02.2` resolves here, so the placement is a logical narrative conclusion.

**Confirmed issue (the most commercially important one)**
- **Every Scan CTA funnels to one disabled button with no fallback.** The Scan appears 3× (header `story-shell.tsx:26`, hero `acts.tsx:62`, scan-entry `acts.tsx:348`) — correct per "primary CTA above the fold and at the end". But both *working* CTAs anchor-jump to `#scan-entry`, whose only button is disabled. The disabled state itself is correct (`STORY_CHOREOGRAPHY.md:173`), **but** `AUDIENCE_AND_MESSAGING.md:64`, `CONTENT_ARCHITECTURE.md:87`, and `WIREFRAME_SPEC.md:120` all prescribe a fallback (`Plan een verkennend gesprek` / email) — and it is entirely absent. A convinced visitor who follows the primary CTA twice lands on a greyed button with no path forward except a privacy link. `— important before motion` (clean fix: an enabled secondary `mailto:`/`/contact` link labelled as orientation, *not* a free audit; this is navigation, not the "formulierintegratie" excluded from this sprint).

---

## Desktop Findings

- **Zero horizontal overflow** at 1440/1024/768/375/320 — earned by defensive CSS (`overflow-wrap: anywhere; min-width: 0` on the prototype + every grid item). Long Dutch words (`applicatiemodernisering`, `Kennisafhankelijkheid`) break cleanly.
- **No sticky/fixed chrome** at any viewport other than the hidden skip-link — the spec's 320px "no obscuring sticky element" rule is satisfied (verified by computed-style scan).
- At **1024px** the page sits *above* the 56rem (896px) breakpoint, so it keeps the multi-column desktop layout — it is denser than 1440 but not cramped; no overflow, no collision.
- **Page length:** 13,064px @1440, 11,269px @1024. Long, but a faithful rendering of all spec-mandated chapters.
- **CTA hierarchy on desktop:** the header CTA is always reachable via scroll-back, so the mid-page CTA desert and the disabled dead-end are less acute than on mobile — but the missing fallback CTA still applies.
- Desktop-only polish: the 5th friction signal orphaned in its 2-col row; act-heading 3-column grid is tight but legible at 1024.

---

## Mobile Findings

- **Zero horizontal overflow** at 375 and 320. Tap-target floor is global (`min-height: 2.75rem`/44px on all `a`/`button`; StoryProgress bumps to 3.75rem @38rem). Single column from 896px down; story-progress becomes a 2×2 at 608px; FlowSequence arrows rotate 90° so the before/after reads vertically.
- **Page length is the central mobile tension:** 16,866px @375 and **18,361px @320 ≈ 26 viewport-heights**. This is **not a blocker** — the "First 30 seconds" test is comprehension of the first 30 seconds of attention (hero carries recognition + safe action + founder line), no spec sets a max length, and trimming spec-mandated lists would violate the wireframe. But the length is a real UX cost: the mid-page CTA desert and the disabled dead-end bite hardest here. Recommendation: tighten section/figure spacing on mobile *only* (presentation, not content order — does not violate the same-content gate). `— important before motion` (mobile spacing) + `later visual-design refinement` (content density).
- **Conversion path collapses:** header CTA scrolls away (nothing sticky, per spec), the hero CTA duplicates it in the first viewport, the next CTA is ~25 screens later and **disabled**. Missing fallback CTA is most damaging on mobile. `— important before motion`.
- **Two evidence cards at `min-height: 17rem` = ~544px of empty dashed placeholders** at the climax, stacked. `— later visual-design refinement` (size to content or merge on `<56rem`).
- **Founder section opens with an empty 4:5 dashed box before any copy** (DOM order: placeholder → copy; on 1-col mobile the placeholder leads). `— later visual-design refinement` (swap DOM order to copy-first, place placeholder via grid on desktop).
- **Flow Line states are perceptually indistinguishable at 320px** except `verified` (the only coloured one). Stroke 4→2px, nodes r=8→4px. The figcaption carries the meaning (per the contract), so this is acceptable — but motion **cannot** fix it; it needs a small-screen glyph redesign or shrinking the dead-space `min-height`. `— later visual-design refinement` (motion-independent).

---

## What Already Works Without Motion

1. **Act separation** via the dark/paper/dark/paper rhythm + five distinct Flow Line graphics — fully JS-free.
2. **The Flow Line is honest decoration:** every instance is `aria-hidden` with a text `<figcaption>`, so all meaning survives no-JS/no-images (`flow-line.tsx:85-95`).
3. **Heading outline** is clean and semantic (1/4/10/13, no level skips); every act has a named heading.
4. **Honesty discipline exceeds the spec drafts** — e.g. the hero credibility line was deliberately trimmed to drop the AI-speed tail that would have violated CL-027..030 (`acts.tsx:65` vs `AUDIENCE_AND_MESSAGING.md:46`). No CL-005..018, no CL-019..025, no proven CL-026..030 badges, CL-031/032 correctly qualified, CL-033..035 shown as UNDER REVIEW.
5. **All five required placeholders** are clearly bracketed and none resembles a real case/credential/testimonial/result.
6. **Reduced-motion and forced-colors** are handled (`module.css:1091,1103`); since the CSS defines *no* animations, reduced-motion users get the identical page.
7. **No fake success state, no data submission** — disabled intake button + explicit "geen success state".
8. **Story-progress nav, skip link, focus ring (3px signal), 44px tap targets, no obscuring sticky** — all present.

---

## What Requires Motion

Motion *earns* its place only where it conveys meaning the static page cannot:

1. **Flow Line state morph across the four acts** (fragmented→paused→mapped→organized→verified) — the through-line of the whole page; today it reads as five independent diagrams. This is the single highest-value motion (`REQUIREMENTS.md` P1 "Page transition met de Flow Line"; `MOTION_FEASIBILITY.md` "Essential"). Must ship a reduced-motion fallback to the current discrete states.
2. **Arbeid `organized` line synced to the 6 delivery steps** — gates emphasise as each step enters the viewport (`WIREFRAME_SPEC.md` ch.6 "only the active gate gains emphasis"). The strongest single-act motion because today the Flow Line gates and the step list are two disconnected representations of the same sequence.
3. **Bezinning `paused`→`mapped` morph** within the act — connects two Flow Line states that already coexist there.
4. **Hidden Drag before/after morph** (7-chip → 5-chip) — enhancement only (static already shows both side-by-side).
5. **Act-boundary colour crossfade** (200–400ms) — softens the hard flips without losing the rhythm.
6. **Chaos hero fragmentation** — *but only after a static fragmentation cue exists first*; animating wires breaking on an orderly diagram adds motion to a graphic that does not yet convey fragmentation.

---

## What Motion Cannot Fix

These are content/IA/semantic defects; motion layered on top would only disguise them:

- **Missing CTAs** — Hidden Drag (`Bekijk workflowmodernisering`), scan-bridge (`Bekijk de Modernization Scan`), Arbeid routes/founder. Motion cannot manufacture DOM links.
- **Missing fallback CTA** at the conversion dead-end — an enabled secondary action must exist.
- **No `<main>` landmark** — semantic structure; motion cannot add landmarks.
- **Evidence-label contrast failure** (2.71:1) — a colour choice on a light surface.
- **Empty evidence placeholders** — content-blocked by CL-019..025; motion cannot create evidence (and a celebratory "verified" animation would *increase* overclaim risk).
- **Route cards as false affordances** — must become real links or be visibly de-styled; animating non-link `<article>`s deepens the deception.
- **Founder bio slot empty** — biographical content (or an honest labelled gap).
- **`ResultAct` missing conclusion** — structural markup.
- **Mobile page length** — motion adds travel; only content/spacing edits subtract it.
- **Flow Line illegibility at 320px** — motion cannot make sub-4px marks legible; needs a small-screen redesign.
- **Spec-vs-register tension** on `Snel waar het kan` (CL-030 vs `CONTENT_ARCHITECTURE.md` ch.6) — an owner copy decision, not motion.

---

## Critical Changes Before Motion

(All are content/markup/CSS — none require motion. Ordered by impact.)

1. **Add the fallback CTA** in the Scan entry (`Plan een verkennend gesprek` / email, framed as orientation). Resolves the conversion dead-end. `— important before motion` *(3 spec sources).*
2. **Fix the two P0 accessibility-gate failures:**
   - Wrap the story in `<main id="four-act-content" tabindex="-1">` (also hardens skip-link focus transfer). `— important before motion`
   - Change `.evidenceGrid strong` from `--signal #ff6a2b` (2.71:1) to `--flow-deep #244fc5` (6.65:1) on the light surface; reserve `--signal` for dark surfaces/borders. `— important before motion`
3. **Add the scan-bridge CTA** (`<a href="#scan-entry">Bekijk de Modernization Scan</a>`) so Bezinning's Scan momentum resolves instead of abandoning the reader mid-page. `— important before motion`
4. **Restore `ResultAct`'s closing `actConclusion`** on the paper-light surface *after* the Scan panel (and give `04.1` a new headline), so the act and page close on "weer onder controle" rather than a disabled button. `— important before motion`
5. **Resolve the missing per-scene CTAs** (Hidden Drag, Arbeid routes, founder `Over Subor`): add as in-page anchors now, or labelled-gap buttons until the destination pages exist — do not ship dead links. Fill the **founder bio slot** with a labelled dashed placeholder until a CL-approved bio exists. `— important before motion`

---

## Non-Blocking Improvements

`later visual-design refinement` (unless noted):

- Add a static fragmentation cue to the Chaos hero system map (broken connectors / overlap) so "gecontrolleerd onrustig" reads before motion.
- Draw the system-map → "constrained flow" relationship the spec describes.
- Weight/group the risk/continuity friction signals; span the 5th signal full-width.
- Visually differentiate the Bezinning route cards (decision prompts) from the Arbeid route cards (execution panels) so the spec-mandated repetition does not also look like duplication.
- Add per-step artifact labels to the delivery grid; reconcile the `organized` Flow Line's 5 gates with the 6 steps.
- Label the Arbeid opening scene `03.1`; add bridging one-liners at act boundaries.
- Replace the empty evidence cards with a labelled 7-field "report anatomy" schematic. `— may be solved during motion prototype`
- Add a static Resultaat node-delta (Chaos system nodes → verified line, labelled "gewenste toestand"). `— may be solved during motion prototype`
- Restore `gevoelige persoonsgegevens` in the `scanSafety` list (CL-035 precision); reconsider the English `Verified` label (overclaim risk).
- Mobile: tighten section/figure spacing `<38rem`; size evidence cards to content; copy-first founder section; consider a small-screen Flow Line glyph.
- Reconcile the spec-vs-register wording tension on `Snel waar het kan` (CL-030) at the *spec* layer with Subor — not by silently rewording.

---

## Go / No-Go Decision

**GO, conditional on the five Critical Changes above.**

The static prototype is a strong low-fidelity validation artifact: it is understandable without motion, honest beyond the spec drafts, responsive with zero overflow, and structurally sound. The four-act choreography reads, the Flow Line states are correct, and the claims gate holds.

**It is a NO-GO to proceed directly to the motion sprint.** Two P0 accessibility-gate failures (no `<main>`; evidence-label contrast) and a conversion dead-end (no fallback CTA) must be closed first — all are motion-free, ~half a day of work, and layering motion on top of them would hide rather than fix them. Close the five Critical Changes, re-run the 5/30-second comprehension test with two operations + two IT evaluators (`AUDIENCE_AND_MESSAGING.md:72-74`), *then* enter motion with the Flow Line state morph as the first and highest-value motion task.

---

## Screenshot locations

All artifacts are kept **outside the repo** (the task permitted only this review file). Directory:

`C:\Users\Borus\AppData\Local\Temp\ffa-review\screenshots\`

The 10 required shots:
1. `01-chaos-begin.png` — begin Chaos (1440×1000)
2. `02-transition-chaos-bezinning.png` — overgang Chaos→Bezinning
3. `03-bezinning-begin.png` — begin Bezinning
4. `04-transition-bezinning-arbeid.png` — overgang Bezinning→Arbeid
5. `05-arbeid-begin.png` — begin Arbeid
6. `06-transition-arbeid-resultaat.png` — overgang Arbeid→Resultaat
7. `07-resultaat.png` — Resultaat
8. `08-scan-entry.png` — Modernization Scan-entry
9. `09-full-desktop-1440.png` — volledige desktoppagina
10. `10-full-mobile-375.png` — volledige mobiele pagina

Supporting captures (same folder): responsive full pages `full-1024/768/320.png`; responsive heroes `r-1024/768/320-hero.png` and scan-entries `r-*-scan-entry.png`; mobile heroes/transitions `mobile-375/320-*.png`; mid-act detail `d2-*.png`; and `measurements.json` (overflow, document height, heading inventory, tap-target and sticky audit per viewport). On request these can be moved into the repo (e.g. `docs/rebrand/screenshots/static-prototype/`) — not done unprompted to honour the "maak alleen dit bestand" constraint.

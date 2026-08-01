# Homepage Wireframe Specification

## Global frame

The homepage is a normal semantic document, not a scrollytelling shell. Header and primary CTA are available at first paint. Recommended desktop content shell: 12 columns; mobile: one visible column on a four-column grid at 320 px. Maximum body measure is 60–75 characters. `H1` appears once in Conflict; each following chapter has one `H2`.

## 1. Entry

- **Viewport intent:** Establish brand readiness in the first second without delaying access.
- **Blocks/copy/CTA:** Header logo lockup, Dutch category descriptor, navigation and scan CTA. No separate marketing paragraph.
- **Proof/placeholder:** None. A thin Flow Line start marker may sit beneath the header.
- **Interaction:** Optional one-time line resolution; never a loader.
- **Desktop:** Header across shell; descriptor beside/below wordmark; line occupies a shallow band, maximum 15% viewport height.
- **320 px:** Compact wordmark, menu button and CTA inside menu; static line marker below header.
- **Reduced motion/no JS:** Final line state; complete navigation and CTA remain visible.
- **Maximum content:** Descriptor ≤45 characters; animation ≤1 second.
- **Transition:** Line enters the hero system map; visual continuity only, not reading dependency.

## 2. Conflict

- **Viewport intent:** Within one viewport, state problem, category, founder-led context and safe next step.
- **Blocks/headline:** Eyebrow `Workflow- en applicatiemodernisering`; H1 `Moderniseer wat je organisatie vertraagt.`; support `Digitech Solutions brengt vastgelopen workflows en verouderde bedrijfsapplicaties terug naar een beheersbare route—eerst begrijpen, dan gericht moderniseren.`; primary `Start met een Modernization Scan`; secondary `Bekijk de werkwijze`; short founder line `Rechtstreeks met Subor Cheung.`
- **Proof:** No performance claims. Founder line is identity, not experience proof.
- **Visual placeholder:** Labelled system sketch: `Inbox`, `Spreadsheet`, `Overdracht`, `Oude applicatie` feeding a constrained flow.
- **Interaction:** Line highlights the shared constraint; purely explanatory.
- **Desktop:** Copy columns 1–7, visual 8–12; CTA pair under copy; no below-fold dependency for core proposition.
- **320 px:** Eyebrow → H1 → support → primary → secondary → founder line → static visual. Buttons full width only if labels remain concise.
- **Reduced motion/no JS:** Static map with friction and flow labels; all copy/links rendered server-side.
- **Maximum content:** H1 ≤55 characters; support ≤35 words; founder line ≤8 words; two CTAs.
- **Transition:** Caption `De vertraging zit zelden op één plek` leads to Hidden Drag.

## 3. Hidden Drag

- **Viewport intent:** Turn a vague efficiency complaint into recognizable handoffs and risk.
- **Blocks/headline:** H2 `De grootste vertraging zit vaak tussen je systemen.`; support ≤28 words; friction list: dubbele invoer, wachttijd, foutkans, ontbrekende audit trail, kennisafhankelijkheid; one human-control note.
- **CTA:** `Bekijk workflowmodernisering`.
- **Proof:** Visual is labelled `Illustratief procespatroon`, never a client result.
- **Visual placeholder:** State A `Aanvraag → Inbox → Excel → Controle → Legacy-app → Update → Rapportage`; State B `Aanvraag → Validatie → Verwerking → Menselijke controle → Resultaat`.
- **Interaction:** Desktop scroll/tap may reveal friction markers and end state; one dominant interaction.
- **Desktop:** Intro columns 1–5; process canvas 5–12; if pinned, maximum ~1.5 viewport travel and content remains reachable with native scroll.
- **320 px:** Intro → State A card → friction list → State B card → human-control note → CTA. No horizontal pan.
- **Reduced motion/no JS:** Both states displayed together with captions; no information hidden in intermediate frames.
- **Maximum content:** Support ≤28 words; five friction labels ≤3 words each; diagram ≤7 nodes/state.
- **Transition:** End-state node expands into Diagnosis layers: `Maar welke ingreep is verstandig?`

## 4. Diagnosis

- **Viewport intent:** Establish technical/business judgment before selling execution.
- **Blocks/headline:** H2 `Eerst begrijpen. Dan pas automatiseren of herbouwen.`; support ≤30 words; five layers (proces, data, systemen, risico, eigenaarschap); decision options; link to scan.
- **CTA:** `Bekijk de Modernization Scan`.
- **Proof:** Placeholder for one anonymized sample scan excerpt/report anatomy; omit if unavailable.
- **Visual placeholder:** Five-layer stack connected to decision outcomes: simplify, integrate, automate, secure, refactor, replatform, rebuild, retire.
- **Interaction:** Focus/tap one layer to show a single definition and affected decisions.
- **Desktop:** Heading columns 1–7; stack 1–5; definition/lens 6–12. DOM order follows heading → layers → decisions.
- **320 px:** Heading → ordered layer accordion → decision list → CTA.
- **Reduced motion/no JS:** All layer names and decision definitions visible as text; static relationship diagram supplementary.
- **Maximum content:** Layer definition ≤18 words; decision definition ≤14 words; show at most eight decisions.
- **Transition:** Shared diagnostic line forks only after the decision lens.

## 5. Two Routes

- **Viewport intent:** Let visitors self-recognize without forcing a technical diagnosis.
- **Blocks/headline:** H2 `Eén moderniseringsvraag. Twee expertise-routes.`; workflow heading/support/3 fit signals; application heading/support/3 fit signals; third link `Workflow en applicatie zitten samen vast`.
- **CTA:** `Bekijk workflowmodernisering` and `Bekijk applicatiemodernisering`; combined link goes to scan route explanation.
- **Proof:** No case claims here; fit language comes from approved product definition.
- **Visual placeholder:** One incoming line, two labelled branches, shared scan node.
- **Interaction:** Focus/hover/tap emphasizes a branch but never hides the other.
- **Desktop:** Two equal 5-column cards with shared center/gutter; combined route below across width.
- **320 px:** Workflow card → application card → combined/unsure card. Visual fork becomes a simple vertical connector.
- **Reduced motion/no JS:** Static branches and standard links.
- **Maximum content:** Each card ≤45 words plus three short signals; one CTA each.
- **Transition:** Branches reconverge into the shared delivery method.

## 6. Delivery Method

- **Viewport intent:** Demonstrate that speed has explicit gates and transferable outputs.
- **Blocks/headline:** H2 `Snel waar het kan. Gecontroleerd waar het moet.`; six steps Scope, Map, Simplify, Build, Verify, Transfer; one artifact/outcome each; quality line.
- **CTA:** `Bekijk de werkwijze`.
- **Proof:** Content-dependent examples: decision log, acceptance criteria and transfer checklist. Do not show badges without artifacts.
- **Visual placeholder:** Flow Line crossing six gates; current step label and artifact below.
- **Interaction:** Step emphasis on viewport/focus; no autoplay loop or scrub requirement.
- **Desktop:** Heading top; horizontal method only if labels fit at 200% zoom; artifacts in lower 4/8 split.
- **320 px:** Ordered vertical steps with connector decorative; each description always visible.
- **Reduced motion/no JS:** All steps and artifacts visible; no progressive reveal needed.
- **Maximum content:** Intro ≤25 words; each step ≤16 words; maximum six trust terms.
- **Transition:** `Een methode is pas geloofwaardig wanneer het bewijs inspecteerbaar is.`

## 7. Proof

- **Viewport intent:** Allow comparison of evidence quality, not just polished outcomes.
- **Blocks/headline:** H2 `Geen toekomstverhaal zonder bewijs.`; short evidence policy; one workflow and one application case card; optional link to all cases.
- **CTA:** Card `Bekijk de case`; section `Bekijk alle cases` only if an index is published.
- **Proof:** Each card requires classification, context, evidence type, decision, bounded result, limitations and permission state.
- **Visual placeholder:** Media frame or process/architecture excerpt; never generic stock.
- **Interaction:** Optional native expansion for one evidence detail; normal detail link remains primary.
- **Desktop:** Heading columns 1–5; two cards below or staggered 6/6. Avoid carousel.
- **320 px:** Evidence policy → workflow card → application card → CTA.
- **Reduced motion/no JS:** Identical content; static media.
- **Maximum content:** Policy ≤30 words; card title ≤55 characters; summary ≤35 words; one result line and one limitation line.
- **Transition:** Case attribution/provenance leads naturally to the accountable founder.

## 8. Founder-led Trust

- **Viewport intent:** Resolve “who does the work?” and solo-capacity concerns.
- **Blocks/headline:** H2 `Geen overdracht naar een anoniem deliveryteam.`; 45–60-word bio; capability list; founder-led benefit; scope/partner disclosure.
- **CTA:** `Over Subor`; secondary `Bekijk de werkwijze`.
- **Proof:** Real portrait/work-context image, verified chronology/credentials only. Empty credentials are omitted.
- **Visual placeholder:** Portrait 4:5 plus one annotated work artifact; no team montage.
- **Interaction:** Optional subtle image reveal only; not required.
- **Desktop:** Portrait columns 1–5; copy 7–12; capability and boundary grouped separately.
- **320 px:** H2 → short identity line → portrait → bio → capability → boundary → CTA.
- **Reduced motion/no JS:** Static image/copy; accessible alt describes image purpose, not appearance trivia.
- **Maximum content:** Bio ≤60 words; six capabilities; partner disclosure ≤25 words.
- **Transition:** `Je hoeft de oplossing nog niet te kennen` bridges accountability to the scan.

## 9. Modernization Scan CTA

- **Viewport intent:** Make the final action tangible and low-risk after recognition, method and proof.
- **Blocks/headline:** H2 `Je hoeft nog niet te weten wat er gebouwd moet worden.`; support ≤35 words; three output groups `current state`, `risico en afhankelijkheden`, `gefaseerde route`; route prompts workflow/application/combined/unsure; practical-facts slot.
- **CTA:** `Start met een Modernization Scan`; secondary `Plan een verkennend gesprek`/email.
- **Proof:** Standalone-value statement and sample report anatomy when approved; no duration/price until confirmed.
- **Visual placeholder:** Flow Line becomes a three-stage roadmap.
- **Interaction:** User-selected route may append a non-sensitive query/state to preselect intake; no automatic profiling.
- **Desktop:** Copy 1–6; output roadmap 7–12; CTA and privacy reassurance below.
- **320 px:** H2 → support → output list → route links → primary CTA → alternative → privacy line.
- **Reduced motion/no JS:** Static roadmap; CTA links work normally.
- **Maximum content:** Support ≤35 words; three outputs ≤12 words each; four route labels; one reassurance line.
- **Transition:** Footer repeats contact/legal/navigation only; do not introduce a competing offer.

## Homepage acceptance checklist

- Proposition, both routes, scan and founder-led identity can be identified at 5/30 seconds.
- Operations is recognized first; IT sees process/data/system/risk controls before the midpoint.
- Every section has one content job and at most one dominant interaction.
- Page remains coherent with images, JavaScript and motion disabled.
- No proof placeholder resembles a published client case.
- 320 px version has no horizontal dependency or obscuring sticky element.
- Reduced-motion frames contain the same decisions and exits.

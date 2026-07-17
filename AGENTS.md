# AGENTS.md

## 1. Doel

Dit bestand bepaalt hoe Codex, Antigravity en andere coding agents aan de website van Digitech Solutions werken.

## 2. Verplichte leesvolgorde

Lees vóór iedere substantiële rebrandtaak:

1. `docs/rebrand/PROJECT_BRIEF.md`
2. `docs/rebrand/POSITIONING.md`
3. `docs/rebrand/REQUIREMENTS.md`
4. `docs/rebrand/STORYLINE.md`
5. `docs/rebrand/DESIGN_DIRECTION.md`
6. `docs/rebrand/MODERNIZATION_SCAN.md`
7. `docs/rebrand/DECISIONS.md`

Bij conflicten:

1. recente vastgelegde beslissing in `docs/rebrand/DECISIONS.md`;
2. requirements;
3. projectbrief;
4. storyline/designrichting;
5. individuele prompt.

Wijzig geen strategische keuze stilzwijgend in code.

## 2.1 Canonieke repository en huidige architectuur

- GitHub: `https://github.com/Subor-zz/digitechsolutions_v2`
- Production branch: `main`
- Production domain: `https://digitechsolutions.nl`
- Hosting: bestaand Vercel-project `digitechsolutions-v2`
- Framework: Next.js App Router met TypeScript, React en Tailwind CSS.
- Bestaande productiecode blijft intact totdat een afgebakende redesign-/vertical-sliceopdracht expliciet is goedgekeurd.
- Metadata en structured data staan verspreid over `app/layout.tsx`, route-layouts en `app/lib/seo.ts`; houd die bronnen synchroon bij latere route- of positioneringswijzigingen.
- Redirects staan in `next.config.mjs`; wijzig ze alleen vanuit een goedgekeurde SEO-migratiematrix.
- Navigatie-items staan momenteel inline in `app/components/navigation.tsx`; contentclusters staan in `app/lib/internal-links.ts` en `app/lib/blog-categories.ts`.

Huidige commands:

- Install: `npm install`
- Development: `npm run dev`
- Build: `npm run build`
- Start: `npm start`
- Lint-script: `npm run lint` (eerst compatibiliteit met de actuele Next.js-versie herstellen/valideren)

Er is nog geen testframework geconfigureerd. Claim niet dat tests bestaan voordat ze aantoonbaar zijn toegevoegd.

## 3. Rollen

### Codex — Lead Engineer

Codex is primair verantwoordelijk voor:

- repository-initialisatie;
- architectuur;
- productiecomponenten;
- integratie;
- refactors;
- tests;
- accessibility;
- performance;
- reviews;
- PR-documentatie.

### Antigravity — Motion and Experiment Lab

Antigravity wordt gebruikt voor:

- motionprototypes;
- SVG-experimenten;
- alternatieve hero-ideeën;
- losse visual proofs;
- kritische second opinion;
- performance- of accessibility-review.

Antigravity-experimenten worden niet direct als productiecode beschouwd.

### Subor — Product Owner en Creative Director

Subor beslist over:

- merk;
- positionering;
- doelgroep;
- scope;
- copy;
- visuele richting;
- commerciële claims;
- acceptatie.

## 4. Source of truth

- GitHub is de enige bron van waarheid.
- Eén agent is eigenaar van een branch.
- Geen twee agents wijzigen ongecoördineerd dezelfde branch.
- Experimentele code staat op `experiment/*`.
- Production features staan op `feat/*`.
- `main` bevat alleen gecontroleerde releases.
- `develop` bevat geïntegreerde werkversies indien dit branchmodel wordt gebruikt.

## 5. Branchconventies

- `feat/foundation`
- `feat/design-system`
- `feat/hero-flow`
- `feat/story-hidden-drag`
- `feat/story-diagnosis`
- `feat/cases`
- `feat/modernization-scan`
- `experiment/hero-*`
- `experiment/motion-*`
- `fix/*`
- `docs/*`

## 6. Engineering principles

- Begrijp de bestaande architectuur voordat code wordt gewijzigd.
- Kies de eenvoudigste oplossing die de requirements haalt.
- Voeg geen dependency toe zonder motivatie.
- Vermijd duplicatie tussen motion- en UI-systemen.
- Gebruik semantische tokens, geen losse merkwaarden.
- Bouw mobile-first of ontwerp minimaal gelijktijdig voor mobiel.
- Zorg dat content zonder motion begrijpelijk blijft.
- Gebruik progressive enhancement.
- Geen scroll-jacking.
- Geen belangrijke content uitsluitend in canvas.
- Geen onbewezen claims hardcoden.
- Geen mockdata presenteren alsof het echte klantdata is.
- Labcases worden zichtbaar gelabeld.

## 7. AI-generated code policy

AI-gegenereerde code wordt behandeld als onbetrouwbare eerste output.

Voor integratie:

- code begrijpen;
- types controleren;
- foutpaden controleren;
- security controleren;
- dependencies controleren;
- tests toevoegen;
- accessibility controleren;
- performance controleren;
- documenteren waar complexiteit noodzakelijk is.

Geen secrets, klantdata of vertrouwelijke code in ongecontroleerde externe prompts.

## 8. Motion rules

- Motion moet informatie uitleggen.
- Iedere complexe animatie heeft:
  - doel;
  - beginstaat;
  - eindstaat;
  - mobiele variant;
  - reduced-motionvariant;
  - cleanup bij unmount;
  - performancebudget.
- Gebruik maximaal één dominante scrolltimeline per sectie.
- Pauzeer of verwijder offscreen loops.
- Vermijd magic numbers; documenteer mappings.
- Animaties mogen focus en toetsenbordbediening niet verstoren.
- Geen custom cursor als vereiste interactie.

## 9. Accessibility gate

Voor iedere feature:

- semantische structuur;
- toetsenbordtest;
- zichtbare focus;
- contrast;
- labels;
- reduced motion;
- screenreaderalternatief voor complexe visuals;
- geen hover-only informatie.

Een visueel indrukwekkende feature die niet toegankelijk kan worden gemaakt, wordt vereenvoudigd.

## 10. Performance gate

Voor iedere feature:

- effect op bundle;
- effect op LCP/INP/CLS;
- lazy-loading waar mogelijk;
- geen layoutthrashing;
- transform/opacity als voorkeur;
- cleanup van listeners en timelines;
- test op mid-range mobiel.

## 11. Teststrategie

Minimaal:

- typecheck;
- lint;
- unit tests voor logica;
- componenttests waar zinvol;
- Playwright voor primaire routes;
- accessibility checks;
- reduced-motion screenshot/test;
- mobiele viewporttest;
- visual regression voor kernsecties;
- Lighthouse CI vanaf de vertical slice.

Exacte commands worden na repository-initialisatie toegevoegd.

## 12. PR requirements

Iedere PR bevat:

- doel;
- gekoppelde requirement(s);
- screenshots of korte video;
- desktop/mobiel;
- reduced-motionbewijs bij motion;
- tests;
- performance-impact;
- nieuwe dependency en motivatie;
- bekende beperkingen;
- rollback of veilige verwijderbaarheid bij experimentele features.

## 13. Verboden shortcuts

- geen volledige homepage in één onreviewbare PR;
- geen zware library voor één klein effect;
- geen inline willekeurige kleuren;
- geen fake testimonials;
- geen placeholder-Lorem Ipsum in reviewbare flows;
- geen animaties die content vertragen;
- geen desktop-only oplevering;
- geen “later accessibility toevoegen”;
- geen stille wijziging van merkcopy;
- geen massale agent-generated refactor zonder scope.

## 14. Definition of safe experiment

Een experiment:

- staat op eigen branch;
- raakt productie niet;
- heeft een duidelijke vraag;
- heeft een tijd- en scopegrens;
- bevat meetbare criteria;
- kan volledig worden verwijderd;
- wordt na beoordeling geïntegreerd of weggegooid.

## 15. Eerste redesign-engineeringopdracht

Na goedgekeurde en geteste low-fidelity UX, visual foundation en motionprototype:

1. werk in deze bestaande canonieke repository; initialiseer geen nieuwe applicatie;
2. bevestig de rebuild boundaries en bescherm bestaande SEO-URL's;
3. herstel/configureer lint, typecheck en tests;
4. bouw design tokens;
5. bouw semantische statische hero;
6. voeg Flow Line als progressive enhancement toe;
7. bouw Hidden Drag;
8. lever mobiel en reduced motion;
9. meet performance;
10. review de vertical slice;
11. bouw pas daarna de rest van de marketinglaag.

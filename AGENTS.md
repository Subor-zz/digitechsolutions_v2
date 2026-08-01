# AGENTS.md

## 1. Doel

Dit bestand bepaalt hoe Codex, Antigravity en andere coding agents aan de website van Digitech Solutions werken.

## 2. Verplichte leesvolgorde

Lees vóór iedere substantiële taak:

1. `docs/PROJECT_BRIEF.md`
2. `docs/POSITIONING.md`
3. `docs/REQUIREMENTS.md`
4. `docs/STORYLINE.md`
5. `docs/DESIGN_DIRECTION.md`
6. `docs/MODERNIZATION_SCAN.md`
7. `docs/DECISIONS.md`

Bij conflicten:

1. recente vastgelegde beslissing in `DECISIONS.md`;
2. requirements;
3. projectbrief;
4. storyline/designrichting;
5. individuele prompt.

Wijzig geen strategische keuze stilzwijgend in code.

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

## 15. Eerste engineeringopdracht

Na fase 0 en low-fidelity UX:

1. initialiseer repository;
2. configureer lint, typecheck en tests;
3. bouw design tokens;
4. bouw semantische statische hero;
5. voeg Flow Line als progressive enhancement toe;
6. bouw Hidden Drag;
7. lever mobiel en reduced motion;
8. meet performance;
9. review vertical slice;
10. pas daarna de rest van de website bouwen.

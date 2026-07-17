# Phase 0 Checklist

## Doel

Fase 0 is afgerond wanneer strategie, scope, contentbehoefte, visuele richting en werkwijze voldoende duidelijk zijn om low-fidelity UX te ontwerpen zonder fundamentele aannames in code te verstoppen.

## A. Brand and positioning

- [x] Merknaam blijft Digitech Solutions.
- [x] Categorie: workflow- en applicatiemodernisering.
- [x] Founder-led positionering.
- [x] Primaire doelgroep globaal vastgesteld.
- [x] Primaire CTA: Modernization Scan.
- [x] “Vibecoder” niet als klantpositionering.
- [x] Prioriteit operations versus IT in hero bepalen: operationele frictie eerst, technische geloofwaardigheid direct erna.
- [ ] Definitieve hoofdheadline testen.
- [ ] Nederlandse of Engelse descriptor kiezen.

## B. Offer

- [x] Eén overkoepelende Modernization Scan vastleggen.
- [x] Onderzoeksroutes workflow-led, application-led en combined vastleggen.
- [x] Basisdeliverables definiëren.
- [ ] Benodigde klantinput en maximale scope per route definiëren.
- [ ] Doorlooptijd bepalen.
- [ ] Prijsmodel bepalen.
- [ ] Vervolgopties bepalen.
- [ ] Scope-uitsluitingen vastleggen.
- [x] Voorbeeldrapportstructuur voor UX definiëren; inhoudelijk voorbeeldrapport blijft te produceren.

## C. Proof

- [ ] Twee launchcases kiezen.
- [ ] Caseclassificatie bepalen: client/anonymized/lab/concept.
- [x] Bestaande claims inventariseren en status/vereist bewijs registreren; inhoudelijke verificatie door Subor blijft open.
- [ ] Certificaten controleren.
- [ ] Toestemming voor klantnamen/logo's controleren.
- [ ] Resultaatmetingen verzamelen.
- [ ] Ontbrekend bewijs als labcase plannen.

## D. Content

- [x] Bestaande URL's inventariseren op basis van publieke sitemap; data-audit blijft nodig.
- [x] Voorlopig keep/rewrite/merge/redirect/remove per pagina bepalen; definitieve redirects wachten op SEO-data.
- [x] Homepagecopyoutline gereed voor low-fidelity review.
- [x] Dienstpagina-outlines gereed voor low-fidelity review.
- [ ] Founderbio verzamelen.
- [ ] FAQ-vragen verzamelen.
- [ ] Juridische pagina's beoordelen.
- [x] Fotografiebrief gespecificeerd; productie/PO-goedkeuring blijft open.

## E. Design foundation

- [x] Art direction gekozen.
- [x] Donker + warme lichte secties.
- [x] Blue/orange semantiek.
- [x] Flow Line als signature motif.
- [x] Logo blijft Digitech Solutions.
- [x] Drie wordmark/monogramrichtingen briefen; artwork volgt in visual sprint.
- [ ] Fonttests maken.
- [x] Voorlopige contrast-/brandrisico's geïdentificeerd; volledige tokenmatrix volgt in visual spike.
- [ ] Hero keyframe desktop.
- [ ] Hero keyframe mobiel.
- [ ] Hidden Drag begin/midden/eind keyframes.
- [ ] Reduced-motion keyframe.

## F. Technical foundation

- [x] Codex als primaire engineeringomgeving.
- [x] Antigravity als experimentlab.
- [x] GitHub als source of truth.
- [x] Vertical slice als eerste build.
- [x] Canonieke repository, productiebron, routes, componenten en publieke hosting auditen.
- [x] Technische voorkeursfoundation en huidige kernversies vastleggen; test/motionversies volgen in engineering foundation.
- [ ] Formulierbackend kiezen.
- [ ] Analytics/consent kiezen.
- [x] Redirectstrategie voorbereiden; implementatie wacht op SEO-data.
- [x] CI-quality gates definiëren op specificatieniveau.

## G. Phase 0 Gate

Fase 0 mag naar UX/wireframes wanneer minimaal is afgerond:

- [x] primaire doelgroepprioriteit;
- [ ] scanpropositie commercieel begrensd (inhoudelijke basis is gereed);
- [ ] twee cases;
- [x] initiële claimaudit en register (bewijsresolutie blijft open);
- [x] sitemap;
- [x] contentoutline;
- [x] designrichting;
- [x] logo-brief;
- [x] technische uitgangspunten;
- [x] open beslissingen hebben eigenaar en beslismoment.

## Gate status — 18 juli 2026, na UX-specificatiesprint

**Phase 0- en low-fidelity UX-specificaties zijn afgerond; de volledige gate naar high-fidelity is nog niet groen.** Werkelijke Figma-wireframes en begripstests kunnen starten. High-fidelity bewijs-, scan- en founderontwerp blijft geblokkeerd door scanbegrenzing, twee bewijsbare cases, claimverificatie en foundercontent. Repositoryherstel is afgerond; Vercel role/rollback-verificatie blijft een latere engineeringgate. Zie `docs/rebrand/UX_SPRINT_CLOSEOUT.md`.

## UX specification sprint — completed

- [x] UX-aannames en afhankelijkheden vastgelegd.
- [x] Alle 15 launchpagina-/systeemstaten gespecificeerd.
- [x] Homepagewireframe op desktop, 320 px, reduced motion en no-JS gespecificeerd.
- [x] Vijf hoofdjourneys als documentatieprototype uitgewerkt.
- [x] Scantriage, intake, validatie, privacy, error en success gespecificeerd.
- [x] Case-evidenceframework en herbruikbaar casetemplate gemaakt.
- [x] Claimframework en initieel register gemaakt.
- [x] Vijfpersoon begripstestplan gemaakt.
- [x] Figma + repositoryspecificatie als wireframestrategie vastgelegd.

## Aanbevolen volgorde vanaf nu

### Stap 1 — Evidence and offer inputs

Subor begrenst de minimale scanfeiten, selecteert twee casekandidaten en levert claim-/founderbewijs.

### Stap 2 — Actual low-fidelity artifacts

Bouw de gespecificeerde desktop- en 320 px Figma-wireframes en verbind de vijf journeys.

### Stap 3 — Comprehension testing

Voer het vijfpersoon testplan uit en los structurele begrips-/routeproblemen op.

### Stap 4 — Gate review

Beoordeel scanfeiten, bewijs, foundercontent en testresultaten voordat high-fidelity start.

### Stap 5 — Deployment readiness in parallel

Verifieer Vercel-rollen, production branch, DNS en rollback; de canonieke GitHub-bron is beschikbaar en geaudit.

### Stap 6 — Visual foundation sprint

Start pas na gate-goedkeuring met moodboard, font-/contrastproef, logo-exploraties en statische hero/Hidden Drag-keyframes.

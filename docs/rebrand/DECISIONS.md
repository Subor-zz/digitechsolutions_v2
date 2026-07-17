# Decision Log

## Statusdefinities

- **LOCKED** — alleen wijzigen na expliciete strategische beslissing.
- **WORKING** — huidige voorkeursrichting; mag via prototype worden aangepast.
- **OPEN** — nog beslissen vóór de relevante gate.

## Locked decisions

| ID | Beslissing | Status |
|---|---|---|
| D-001 | De merknaam blijft **Digitech Solutions**. | LOCKED |
| D-002 | De positionering is workflow- en applicatiemodernisering. | LOCKED |
| D-003 | De website wordt een founder-led modernization studio, geen fictief groot bureau. | LOCKED |
| D-004 | Primaire doelgroep: operations- en IT-verantwoordelijken in MKB/scale-ups. | LOCKED |
| D-005 | Primaire conversie: Modernization Scan. | LOCKED |
| D-006 | Hoofdtaal bij launch: Nederlands. | LOCKED |
| D-007 | Art direction: editorial engineering studio. | LOCKED |
| D-008 | Donkere basis met warme lichte secties. | LOCKED |
| D-009 | Primair kleurprincipe: electric blue + signal orange. | LOCKED |
| D-010 | Logo: volledige merknaam behouden; wordmark + Flow Line + eenvoudig monogram onderzoeken. | LOCKED |
| D-011 | Codex is primaire engineeringomgeving. | LOCKED |
| D-012 | Antigravity wordt gebruikt voor afgebakende experimenten en reviews. | LOCKED |
| D-013 | GitHub is de source of truth. | LOCKED |
| D-014 | De eerste build is een vertical slice. | LOCKED |
| D-015 | Geen zware WebGL in v1 zonder aparte goedgekeurde spike. | LOCKED |
| D-016 | “Vibecoder” wordt niet als primaire klantpositionering gebruikt. | LOCKED |
| D-017 | Motion moet inhoud uitleggen en heeft reduced-motionfallback. | LOCKED |
| D-018 | Er is één overkoepelende Modernization Scan voor workflow-, applicatie- en gecombineerde vraagstukken. | LOCKED |
| D-019 | De scan gebruikt intern drie routes: workflow-led, application-led en combined. | LOCKED |
| D-020 | De homepage leidt met operationele/zakelijke frictie en vestigt direct daarna technische geloofwaardigheid; IT blijft een expliciete evaluator en route. | LOCKED |
| D-021 | Workflow- en applicatiemodernisering zijn twee expertise-routes binnen één diagnosegedreven verhaal; onzekere bezoekers krijgen een gecombineerde route. | LOCKED |
| D-022 | De aanbevolen launch-IA bestaat uit Home, Workflowmodernisering, Applicatiemodernisering, Modernization Scan, Werkwijze, Cases/detail, Insights/detail, Over Subor, Contact, Privacy en Voorwaarden. | LOCKED |
| D-023 | Productieclaims worden alleen gemigreerd met bron, context en publicatietoestemming; lab- en conceptbewijs blijft zichtbaar gelabeld. | LOCKED |
| D-024 | Page transitions, WebGL, custom cursors en permanente decoratieve motion vallen buiten v1; Flow Line en Hidden Drag worden alleen als progressive enhancement geprototypeerd. | LOCKED |
| D-025 | De canonieke repository is `Subor-zz/digitechsolutions_v2`; bron en historie zijn beschikbaar. Repository-, Vercel-, domein- en SEO-continuïteit zijn uitgangspunten voor de implementatiekeuze. | LOCKED |
| D-026 | Iedere launchpagina heeft één dominante CTA; de scanpagina legt waarde, routes en grenzen uit vóór de publieke intake. | LOCKED |
| D-027 | De scantriage ondersteunt vier bezoekerskeuzes: workflow-led, application-led, combined en unsure. De keuze is een wijzigbare hypothese, geen definitieve diagnose. | LOCKED |
| D-028 | De publieke scanintake vraagt geen secrets, credentials, broncode, uploads of gevoelige persoonsgegevens; beschikbare documentatie/toegang wordt alleen als ja/deels/nee/onbekend uitgevraagd. | LOCKED |
| D-029 | Formuliersucces wordt alleen getoond na bevestigde serverrespons; fouten behouden veilige invoer, krijgen een focusbaar foutenoverzicht en bieden e-mail als herstelpad. | LOCKED |
| D-030 | Caseclassificatie (client, anonymized, lab, concept), disclosure, beperkingen en bewijsniveau zijn zichtbaar vóór resultaatclaims. | LOCKED |
| D-031 | Alleen claims met status APPROVED of APPROVED WITH QUALIFIER in het claimregister mogen in definitieve publieke copy worden gebruikt. | LOCKED |
| D-032 | Voor launchvolume gebruiken Cases en Insights eenvoudige groepering; geen decoratieve filters, carrousels of zoekfunctie zonder aangetoonde contentbehoefte. | LOCKED |
| D-033 | De wireframebron bestaat uit repository-gespecificeerde Markdown plus klikbare low-fidelity Figma-frames; HTML volgt pas bij de goedgekeurde vertical slice. | LOCKED |
| D-035 | De huidige contactformulierimplementatie wordt niet hergebruikt: deze toont client-side succes zonder verzending. Een nieuwe server-side, privacyveilige intake is vereist. | LOCKED |

## Working decisions

| ID | Beslissing | Status |
|---|---|---|
| W-001 | Hoofdheadline: “Moderniseer wat je organisatie vertraagt.” | WORKING |
| W-002 | Conceptnaam: “From Friction to Flow”. | WORKING |
| W-003 | Descriptor: “Workflow & Application Modernization” of Nederlandse variant. | WORKING |
| W-004 | Next.js App Router + strict TypeScript + Tailwind/tokens + MDX; CSS/SVG eerst en GSAP alleen voor goedgekeurde verhaaltimelines. | WORKING |
| W-005 | Inter Tight/Geist/Manrope worden als eerste typografisch getest. | WORKING |
| W-006 | Kleurenpalet v0.1 uit DESIGN_DIRECTION.md. | WORKING |
| W-007 | Low-fidelity wireframes worden in Figma gemaakt op 1440 px en 320 px met Auto Layout, grijstinten en gekoppelde repositoryspecificaties. | WORKING |
| W-008 | Implementatieaanpak B is de sterke aanbeveling: behoud repository, historie, Vercel-project, domein en bruikbare infrastructuur; herbouw het merendeel van de marketinglaag. Bevestig dit opnieuw bij de engineeringgate wanneer nieuwe technische evidence beschikbaar is. | WORKING |

## Open decisions — met eigenaar en beslismoment

De inhoudelijke basisdeliverables en onderzoeksroutes staan in `docs/rebrand/MODERNIZATION_SCAN.md`. Commerciële omvang, duur en prijs blijven open.

| ID | Vraag | Eigenaar |
|---|---|---|
| O-002 | Wordt de scan betaald, gratis of deels betaald? | Subor |
| O-003 | Wordt een prijs/“vanaf”-prijs op de website getoond? | Subor |
| O-004 | **Resolved by D-020:** operations-led opening, IT credibility immediately afterward. Case mix remains one workflow and one application case. | Subor — resolved 2026-07-18 |
| O-005 | Welke twee echte of labcases worden gebruikt? | Subor |
| O-006 | Welke bestaande claims, certificaten en resultaten zijn bewijsbaar? | Subor |
| O-007 | Voorlopige classificatie staat in `docs/rebrand/CONTENT_AND_REDIRECT_AUDIT.md`; definitieve mapping wacht op Search Console/analytics/backlinks. | SEO/technical owner — before implementation |
| O-008 | Is de zichtbare descriptor Nederlands of Engels? | Subor/design test |
| O-009 | Is een professionele fotosessie onderdeel van launch? | Subor |
| O-010 | Welke formulieroplossing voldoet aan EU-verwerking, DPA, retention, accessibility, server-side API en spamcontrols; is agenda-integratie nodig? | Technical/privacy owner — before visual form sign-off |
| O-011 | Welke privacy-minimale analyticsconfiguratie en consent/legal basis wordt gebruikt? | Technical/privacy owner — before production instrumentation |
| O-012 | **Resolved:** GitHub `Subor-zz/digitechsolutions_v2`, Vercel `brandons-projects-bfea97aa/digitechsolutions-v2`, domein `digitechsolutions.nl`, eigenaar Subor. Vercel role/rollback UI-verificatie blijft operationeel open. | Subor/technical owner — repository facts resolved 2026-07-18 |
| O-013 | Wordt `www` of apex de canonieke host? | Technical/SEO owner — before redirect implementation |
| O-014 | Huidig: Next `^16.1.6`, React `^19.2.4`, TypeScript `^5`, Tailwind `^3.4.17`; teststack/motion en versiebeleid blijven te beslissen. | Technical owner — engineering-foundation sprint |
| O-015 | Wie is formeel eigenaar van legal/privacy review en welke processors/retention gelden? | Subor — before provider selection |
| O-016 | Welke operationeel houdbare opvolgtermijn mag na een scan- of contactaanvraag worden beloofd? | Subor — before final form copy |
| O-017 | Welke twee casekandidaten krijgen voldoende bewijs en toestemming om high-fidelity Proof-ontwerp te dragen? | Subor — before visual proof design |
| O-018 | Welke publieke scanfeiten vullen het praktische feitenblok: input, maximale scope, duur en uitsluitingen? | Subor — before scan wireframe sign-off |

## Later decisions

- Meertaligheid.
- Headless CMS.
- Sectorlandingpages.
- Nieuwsbrief.
- Interactieve maturity assessment.
- Klantportaal.
- Uitgebreide WebGL-scène.

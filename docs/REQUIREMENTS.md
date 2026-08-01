# Website Requirements

## 1. Scope

Dit document beschrijft de eisen voor de nieuwe marketingwebsite van Digitech Solutions.

Prioriteiten:

- **P0** — vereist voor launch;
- **P1** — belangrijk, kan na vertical slice worden toegevoegd;
- **P2** — latere optimalisatie.

## 2. Functionele requirements

### Navigatie

- **P0** De desktop- en mobiele navigatie bieden toegang tot Expertise, Cases, Werkwijze, Over Subor, Insights en Contact.
- **P0** Onder Expertise staan Workflowmodernisering, Applicatiemodernisering en Modernization Scan.
- **P0** De primaire CTA “Start met een Modernization Scan” is zichtbaar in header of sticky utility.
- **P0** De huidige actieve pagina is waarneembaar.
- **P0** Navigatie is volledig met toetsenbord bedienbaar.

### Homepage

- **P0** Hero communiceert probleem, oplossing en CTA zonder afhankelijkheid van animatie.
- **P0** De homepage volgt de vastgelegde storyline.
- **P0** De gebruiker kan onderscheid maken tussen workflow- en applicatiemodernisering.
- **P0** Werkwijze, cases, founder-led aanpak en scan worden op de homepage geïntroduceerd.
- **P0** Alle interactieve visuals hebben een statische/reduced-motionweergave.
- **P1** Sectieprogressie zoals `01 / 07`.
- **P1** Page transition met de Flow Line.

### Diensten

- **P0** Workflowpagina beschrijft geschikte problemen, aanpak, deliverables, beperkingen en CTA.
- **P0** Applicatiemoderniseringspagina beschrijft assessment, moderniseringsopties, kwaliteit, beperkingen en CTA.
- **P0** Scanpagina beschrijft doelgroep, input, output, doorlooptijd, proces en commerciële volgende stap.
- **P0** De scan ondersteunt workflow-led, application-led en combined intake.
- **P0** De scanpagina maakt duidelijk dat het één product is met verschillende onderzoeksroutes.
- **P0** De intake helpt bepalen of het primaire vraagstuk workflow, applicatie of gecombineerd is.
- **P0** De scanpagina mag geen volledige herbouw beloven vóór discovery.

### Cases

- **P0** Overzichtspagina met filter of heldere categorie-indeling.
- **P0** Case detail ondersteunt context, probleem, analyse, besluit, scope, oplossing, kwaliteitsgates, resultaat en uitsluitingen.
- **P0** Labcases worden expliciet als demo/lab gemarkeerd.
- **P1** Interactieve architectuur- of workflowdiagrammen.
- **P2** Vergelijkbare cases en sectorfilters.

### Insights

- **P0** Artikelen zijn indexeerbaar en hebben metadata.
- **P0** Artikelen kunnen worden gekoppeld aan diensten en cases.
- **P1** Categorieën en zoeken.
- **P2** Nieuwsbriefinschrijving.

### Contact en intake

- **P0** Intakeformulier bevat:
  - naam;
  - zakelijk e-mailadres;
  - organisatie;
  - type vraag: workflow/applicatie/onzeker;
  - probleemomschrijving;
  - gewenste timing;
  - privacytoestemming.
- **P1** Organisatiegrootte en optionele URL/upload.
- **P0** Duidelijke validatie, foutstatus en successtatus.
- **P0** Spamprotectie zonder onnodige gebruikersfrictie.
- **P0** Geen gevoelige systeemgegevens opvragen in het openbare formulier.
- **P0** Een alternatieve contactmogelijkheid blijft zichtbaar.

### Contentbeheer

- **P0** Cases en insights worden in fase 1 via MDX of een vergelijkbaar version-controlled formaat beheerd.
- **P0** Content heeft schema-validatie.
- **P1** Previewworkflow.
- **P2** Headless CMS wanneer publicatiefrequentie dit rechtvaardigt.

## 3. Storytelling en motion

- **P0** The Flow Line is het primaire bewegingsmotief.
- **P0** Motion toont proces, oorzaak/gevolg of statusverandering.
- **P0** Geen content is uitsluitend via hover of animatie bereikbaar.
- **P0** Geen scroll-jacking.
- **P0** Native scroll en browsernavigatie blijven intact.
- **P0** `prefers-reduced-motion` wordt volledig ondersteund.
- **P0** Mobiele interacties worden apart ontworpen.
- **P0** Animaties buiten beeld worden gepauzeerd waar zinvol.
- **P1** Pinned workflowtransformatie.
- **P1** Legacy layer explorer.
- **P1** Decision lens.
- **P2** Geavanceerde page transitions.

## 4. Visual requirements

- **P0** Design gebruikt semantische tokens voor kleur, spacing, type, radius en motion.
- **P0** Geen willekeurige hexwaarden in componenten.
- **P0** Donkere en warme lichte secties vormen één coherent systeem.
- **P0** Blauw staat voor flow/technologie.
- **P0** Oranje staat voor frictie/aandacht/menselijke beslissing.
- **P0** Groen staat voor verificatie/succes.
- **P0** Rood uitsluitend voor echt risico/fout.
- **P0** Logo werkt monochroom en op 16 px.
- **P0** Geen generieke AI-, robot- of circuitboardstockbeelden.

## 5. Accessibility

- **P0** WCAG 2.2 AA als minimumdoel.
- **P0** Zichtbare focusstates.
- **P0** Skip link.
- **P0** Semantische headings en landmarks.
- **P0** Toetsenbordbediening voor navigatie, formulieren en interactieve visuals.
- **P0** Voldoende kleurcontrast.
- **P0** Geen informatie uitsluitend via kleur.
- **P0** Formuliervelden hebben labels en bruikbare foutmeldingen.
- **P0** Screenreadertekst voor diagrammen of een equivalente tekstweergave.
- **P0** Reduced motion.
- **P0** Touch targets minimaal comfortabel bruikbaar.
- **P1** Geautomatiseerde axe-tests in CI.
- **P1** Handmatige screenreader-smoketest.

## 6. Performance

Doelen:

- **P0** LCP ≤ 2,5 s op representatieve mobiele verbinding.
- **P0** INP ≤ 200 ms.
- **P0** CLS ≤ 0,1.
- **P0** Geen zware autoplayvideo in de hero.
- **P0** Afbeeldingen correct gesized en geoptimaliseerd.
- **P0** Niet-kritieke media en interactieve code lazy-loaden.
- **P0** Animaties primair met transform en opacity.
- **P0** Geen WebGL in v1 tenzij een afzonderlijke performance spike wordt goedgekeurd.
- **P1** Lighthouse CI-budgetten.
- **P1** Bundle-analyse.
- **P1** Motioncode per sectie dynamisch laden.

## 7. Responsive requirements

Breakpoints worden door content bepaald, niet alleen door apparaten.

- **P0** 320 px breedte blijft bruikbaar.
- **P0** Geen horizontale overflow.
- **P0** Mobiele sectievolgorde behoudt het verhaal.
- **P0** Geen verplichte horizontale scroll voor hoofdcontent.
- **P0** Pinned desktopsecties krijgen een compacte mobiele variant.
- **P0** Formulieren zijn mobiel volledig bruikbaar.
- **P0** Typografie gebruikt gecontroleerde fluid scaling.
- **P1** Tablet-specifieke composities voor belangrijke story-secties.

## 8. SEO en discovery

- **P0** Server-rendered/indexeerbare kerncontent.
- **P0** Unieke title en description per pagina.
- **P0** Canonicals.
- **P0** Open Graph en social metadata.
- **P0** XML-sitemap en robots.txt.
- **P0** Redirectplan voor relevante bestaande URL's.
- **P0** Organization/Person/Service/Article structured data waar passend.
- **P0** Geen belangrijke tekst in canvas of alleen in afbeeldingen.
- **P0** Dienstpagina's zijn inhoudelijk sterker dan de experimentele homepage.
- **P1** Breadcrumbs.
- **P1** Interne linking tussen cases, insights en diensten.

## 9. Privacy en security

- **P0** Securityheaders.
- **P0** CSP-strategie die geen onnodige inline scripts vereist.
- **P0** Formulierinput server-side valideren.
- **P0** Rate limiting/spamprotectie.
- **P0** Geen secrets aan de client.
- **P0** Dependencies scannen.
- **P0** Alleen noodzakelijke analytics.
- **P0** Privacyverklaring sluit aan op werkelijk gebruikte diensten.
- **P0** Geen tracking vóór vereiste toestemming.
- **P1** Error monitoring met gegevensminimalisatie.
- **P1** Security.txt.

## 10. Analytics

Te meten gebeurtenissen:

- `scan_cta_clicked`
- `workflow_service_viewed`
- `application_service_viewed`
- `case_opened`
- `case_completed`
- `contact_started`
- `contact_submitted`
- `story_section_reached`
- `reduced_motion_active`

Analytics mag de site niet merkbaar vertragen.

## 11. Technische basis

Voorgestelde stack:

- Next.js App Router;
- TypeScript;
- React;
- Tailwind CSS met semantische CSS-variabelen;
- GSAP + ScrollTrigger voor centrale motion;
- SVG voor diagrammen;
- MDX voor cases en insights;
- Vitest;
- Playwright;
- axe;
- Lighthouse CI;
- privacyvriendelijke analytics;
- error monitoring.

## 12. Definition of Done — Vertical Slice

De vertical slice is gereed wanneer:

- hero en eerste storysectie desktop én mobiel werken;
- de kernboodschap zonder motion begrijpelijk is;
- Flow Line coherent is;
- reduced-motionvariant aanwezig is;
- toetsenbord en screenreaderbasis werkt;
- geen horizontale overflow bestaat;
- performancebudget in de afgesproken testomgeving wordt gehaald;
- code review is uitgevoerd;
- design en motion niet afhankelijk zijn van ongedocumenteerde magic numbers;
- content uit centrale configuratie of componentprops komt;
- screenshots/video van alle varianten zijn toegevoegd aan de PR.

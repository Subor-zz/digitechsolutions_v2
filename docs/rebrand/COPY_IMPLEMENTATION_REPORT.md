# Copy Implementation Report

**Datum:** 22 juli 2026

## 1. Gebruikte branch

De implementatie is uitgevoerd op `prototype/flow-line-motion` in de canonical repository `Subor-zz/digitechsolutions_v2`. De branch was bij aanvang gelijk aan `origin/prototype/flow-line-motion`.

De bestaande productiehomepage is niet gewijzigd. Alle renderwijzigingen blijven beperkt tot `/prototype/four-act-homepage`; de gedeelde toevoeging in `lib/rebrand/` bevat alleen typed copydata en contracttests.

## 2. Copystructuur

De homepagecopy staat centraal en typed in `lib/rebrand/homepage-copy.ts` onder:

- `homepageCopy.navigation`
- `homepageCopy.hero`
- `homepageCopy.hiddenDrag`
- `homepageCopy.diagnosis`
- `homepageCopy.routes`
- `homepageCopy.method`
- `homepageCopy.founder`
- `homepageCopy.result`
- `homepageCopy.scan`
- `homepageCopy.footer`
- `homepageCopy.metadata`

De typen `ModernizationRoute`, `MethodStep` en `ScanRoute` begrenzen route-, methode- en intakecopy. De oude verspreide copybron `_components/content.ts` is verwijderd.

De canonical prototypearchitectuur gebruikt geen `components/rebrand/RebrandPage.tsx`; daarom importeert de actuele componentstructuur onder `app/prototype/four-act-homepage/_components/` rechtstreeks uit de nieuwe typed copylaag.

## 3. Gewijzigde componenten

- `acts.tsx`: alle vier aktes aan het copycontract gekoppeld; responsive verkorte copy, FAQ-details, rapportanatomie en eerlijke Scan-entry toegevoegd.
- `story-shell.tsx`: navigatie, akteprogressie en footer aan de centrale copy gekoppeld.
- `layout.tsx`: alleen prototype-title, description en Open Graph-copy aangepast; `noindex`, `nofollow` en `nocache` behouden.
- `four-act-homepage.module.css`: beperkte copy-fitstijlen voor routes, artifacts, FAQ, rapportanatomie, footer en mobiele copy toegevoegd.
- `flow-line.tsx`: niet gewijzigd; bestaande progressive enhancement en motioncleanup zijn behouden.

## 4. Definitief geïmplementeerde copy

- navigatie en vieraktenlabels;
- heroheadline, lead, CTA's en founder-led qualifier;
- Hidden Drag-headline, flowlabels, frictiesignalen en overgang;
- diagnoselagen en decision lens;
- workflow- en applicatieroutes met combined/unsure-pad;
- deliverymethode met het veilige headlinealternatief `Gericht waar het kan. Gecontroleerd waar het moet.`;
- founder-led positionering, capabilitylabels en AI als ondersteunend werkwijzeprincipe;
- expliciete Resultaatakte met de drie beoogde eindtoestanden;
- Scan-headline, probleemgedreven intro, disabled prototypeactie en mailfallback;
- footerdescriptor, statusregel en dynamisch jaartal;
- prototype-route metadata zonder canonicalwijziging.

## 5. Voorlopige copy en placeholders

- de founderbio toont uitsluitend de publieke prototypeplaceholder: `Meer over Subor en zijn relevante ervaring volgt na inhoudelijke verificatie.`;
- het founderbeeld blijft een zichtbaar maar niet-claimend prototypevlak;
- route-outputs en Scan-outputs zijn contractueel opgenomen en bij de Scan zichtbaar als `Beoogde output — voorlopig`;
- het antwoord op de vraag of de Scan een verkoopgesprek is behoudt de contractuele begrenzing dat zelfstandige deliverable, commerciële vorm en grenzen nog worden vastgesteld;
- de prooflaag is een eerlijk gelabeld voorbeeld van rapportstructuur en geen klantcase.

Interne labels zoals `BEWIJS NODIG`, `GOEDKEURING NODIG`, `BESLISSING NODIG` en `CASE PLACEHOLDER` worden niet in de publieke prototype-UI gerenderd.

## 6. Claims die bewust niet zijn gebruikt

Niet gepubliceerd zijn:

- ervaringsjaren, functies of werkchronologie;
- certificeringen en tool-expertise;
- klantnamen, testimonials, cases of gekwantificeerde resultaten;
- percentages, prijzen, tarieven, doorlooptijden of responstermijnen;
- gegarandeerde besparing, snelheid of uitkomsten;
- trust-badges die review, testing, security of overdraagbaarheid als bewezen projectresultaat presenteren;
- een zelfstandige Scan-deliverable als definitief commercieel product.

## 7. Resultaatsectie

**Geïmplementeerd.** De bestaande vierde akte was architectonisch al aanwezig en kon zonder grote layout- of motionwijziging worden aangepast. Zij bevat nu:

- kicker `De beoogde eindtoestand`;
- headline `Niet alleen gemoderniseerd, maar weer onder controle.`;
- `Zichtbare flow`, `Aanpasbare systemen` en `Belegd eigenaarschap`;
- een rapportanatomie met het label `Voorbeeld van de rapportstructuur — geen klantcase`.

Er zijn geen testimonials, statistieken of impliciete klantresultaten toegevoegd.

## 8. Desktop- en mobile copy-fit

Browsercontrole is uitgevoerd op 1440, 1024, 768, 375 en 320 px.

Resultaat:

- geen horizontale overflow;
- geen heading- of control-overflow;
- geen ontbrekende hashdoelen of dubbele id's;
- CTA's blijven op 320 px binnen maximaal twee tekstregels;
- headings blijven op 320 px binnen maximaal vier regels;
- drie FAQ-details openen correct;
- alle vijf Flow Line-states revealen tijdens scroll;
- copyhoogte behoudt de volgorde Chaos → Bezinning → Arbeid → Resultaat;
- alle publieke routepaden (`/`, `/over-mij`, `/contact`, `/privacy`, `/voorwaarden`) antwoorden lokaal met HTTP 200;
- de browserconsole bevat geen errors of warnings.

De bestaande `prefers-reduced-motion`-CSS-regels en de `matchMedia`-fallback in `flow-line.tsx` zijn behouden. De actieve browseromgeving rapporteerde geen reduced-motionvoorkeur, waardoor de reduced-motionvariant bronmatig maar niet via een geëmuleerde browservoorkeur is gecontroleerd.

## 9. Test-, typecheck- en buildresultaten

- `git diff --check`: geslaagd;
- `npx tsc --noEmit`: geslaagd;
- `node --test lib/rebrand/homepage-copy.test.mjs`: 6 tests geslaagd, 0 mislukt;
- `npm run build`: geslaagd met Next.js 16.1.6; 49 statische routes gegenereerd, inclusief `/prototype/four-act-homepage`;
- browsercheck: geslaagd op alle vijf gevraagde viewports.

De Node-test geeft alleen een niet-blokkerende `MODULE_TYPELESS_PACKAGE_JSON`-waarschuwing omdat het bestaande project geen `type: module` declareert. De build geeft de bestaande niet-blokkerende melding dat `caniuse-lite` zes maanden oud is. Voor deze copy-implementatie zijn geen dependencies of package-instellingen gewijzigd.

## 10. Gewijzigde bestanden

- `app/prototype/four-act-homepage/_components/acts.tsx`
- `app/prototype/four-act-homepage/_components/content.ts` — verwijderd
- `app/prototype/four-act-homepage/_components/story-shell.tsx`
- `app/prototype/four-act-homepage/four-act-homepage.module.css`
- `app/prototype/four-act-homepage/layout.tsx`
- `docs/rebrand/DIGITECH_HOMEPAGE_COPYWRITING_PLAN.md`
- `docs/rebrand/COPY_IMPLEMENTATION_REPORT.md`
- `lib/rebrand/homepage-copy.ts`
- `lib/rebrand/homepage-copy.test.mjs`

De vijf reeds aanwezige niet-getrackte rebranddocumenten in de worktree zijn niet gewijzigd en niet gestaged.

## 11. Commit hash

Implementatiecommit: `f341d58241201343d7f4867c85e033c59feea422` (`content: implement modernization homepage copy`).

Dit rapport wordt in een afzonderlijke documentatiecommit toegevoegd zodat de implementatiehash exact en niet zelf-referentieel kan worden vastgelegd.

## 12. Volgende actie

Beoordeel de prototype-route inhoudelijk op verhaalbegrip, tone of voice en acceptatie van de expliciet voorlopige Scan- en founderpassages.

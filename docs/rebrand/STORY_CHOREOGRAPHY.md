# Four-Act Homepage Story Choreography

## Status en doel

Dit document organiseert de bestaande homepagehoofdstukken in vier aktes. Het voegt geen nieuwe positionering of algemene UX-strategie toe. De vier aktes bepalen semantische groepering, visuele toestand en de statische toestand van de Flow Line; de negen hoofdstukken en hun inhoudelijke taken blijven leidend.

De eerste implementatie staat geïsoleerd op `/prototype/four-act-homepage`. De route is `noindex` en vervangt de huidige productiehomepage niet. De pagina moet zonder client-side JavaScript, motion of verborgen tussenstaten volledig begrijpelijk en bruikbaar zijn.

## Hoofdstukmapping

| Akte | Bestaande hoofdstukken | Prototypecomponenten |
|---|---|---|
| 1 — Chaos | Entry, Conflict, Hidden Drag | `EntryScene`, `FrictionScene`, `HiddenDragScene` |
| 2 — Bezinning | Diagnosis, route assessment en Scan-introductie | `DiagnosticScene`, `ScanIntroduction`, `RouteAssessment` |
| 3 — Arbeid | Two Routes in uitvoering, Delivery Method, Founder-led Trust | `ModernizationRoutes`, `DeliveryFlow`, `FounderResponsibility` |
| 4 — Resultaat | gewenste toestand, Proof, Modernization Scan CTA | `OutcomeState`, `EvidenceLayer`, `ScanEntry` |

De routekeuze verschijnt in Bezinning als wijzigbare hypothese. In Arbeid worden dezelfde workflow- en applicatieroutes uitgelegd als mogelijke uitvoeringsrichting. Dit is bewuste herhaling met een andere taak, geen dubbel aanbod.

## Act 1 — Chaos

### Doel

De bezoeker herkent operationele frictie, versnippering en verlies van controle. De opening leidt met bedrijfsvoering en toont in dezelfde akte dat oude applicaties, data en integraties deel van hetzelfde probleem kunnen zijn.

### Inhoud

- hero en categorie;
- conflict en verborgen frictie;
- mailboxen, spreadsheets en handmatige overdrachten;
- workarounds en legacysoftware;
- dubbele invoer, late fouten en ontbrekende audit trail;
- afhankelijkheid van personen of leveranciers;
- statisch illustratief procespatroon met menselijke controle als eindstaat.

### Visuele toestand

Gefragmenteerd, onderbroken, overlappend en gecontroleerd onrustig. De contenthiërarchie blijft rustig genoeg om binnen vijf seconden de propositie en primaire CTA te vinden.

### Flow Line

State: `fragmented`.

De lijn is onderbroken, vertakt, loopt lokaal terug en raakt losse systeemnodes. De lijn is aanvullend; labels en tekst dragen alle betekenis.

### Eindconclusie

> Onze organisatie draait, maar er lekt tijd, kennis en controle weg.

## Act 2 — Bezinning

### Doel

De bezoeker begrijpt dat direct automatiseren of herbouwen niet de juiste eerste stap is. Symptomen worden gescheiden van oorzaken en de Modernization Scan wordt geïntroduceerd als veilige diagnose vóór uitvoering.

### Inhoud

- diagnose vóór oplossing;
- oorzaak versus symptoom;
- proces, data, systemen, risico en eigenaarschap;
- afhankelijkheden en mogelijke beslissingen;
- workflow-led, application-led, combined en unsure;
- routekeuze als wijzigbare hypothese;
- wat de Scan voorlopig onderzoekt en welke scope nog bevestigd moet worden.

### Visuele toestand

Rust, ruimte, isolatie, ontleding en focus. Technische labels krijgen meer plaats; er ontstaat geen dashboard of nep-audit.

### Flow Line

States: `paused` en `mapped`.

De lijn wordt stilgezet, onderzocht, gelabeld en opgedeeld in begrijpelijke lagen. De vier routekeuzes zijn normale links/kaarten en blijven zonder visual bruikbaar.

### Eindconclusie

> Moderniseren begint niet met bouwen, maar met begrijpen.

## Act 3 — Arbeid

### Doel

De bezoeker ziet gecontroleerd vakwerk, afbakening, mogelijke uitvoering en directe founder-led verantwoordelijkheid.

### Inhoud

- workflowmodernisering;
- applicatiemodernisering;
- gecombineerde onderzoeks- of uitvoeringsroute;
- de canonieke methode `Scope → Map → Simplify → Build → Verify → Transfer`;
- begrijpen en ontwerpen als activiteiten binnen Scope, Map en Simplify;
- testen binnen Verify;
- documenteren en kennisoverdracht binnen Transfer;
- founder-led verantwoordelijkheid en transparante inzet van specialisten;
- placeholders waar method claims nog geen artifactbewijs hebben.

### Visuele toestand

Doelgericht, technisch, ritmisch, gecontroleerd en voorzien van zichtbare kwaliteitsgates. De gates zijn proceslabels, geen onbewezen trustbadges.

### Flow Line

State: `organized`.

De lijn wordt geordend, splitst waar nodig, passeert stappen en komt gecontroleerd samen. Er is nog geen scrolltimeline of morphing.

### Eindconclusie

> Van inzicht naar een afgebakende oplossing die wordt beoordeeld, vastgelegd en overdraagbaar gemaakt.

Deze formulering vermijdt een onbewezen garantie dat iedere route altijd eindigt in een volledig gebouwde, geteste productieoplossing.

## Act 4 — Resultaat

### Doel

De bezoeker ziet de beoogde beheersbare operationele toestand, begrijpt welk bewijs nog ontbreekt en kan veilig door naar de Scan.

### Inhoud

- minder handwerk, overdrachtsfouten en persoonsafhankelijkheid als gewenste richting, niet als gemeten resultaat;
- betrouwbare, aanpasbare applicaties als doeltoestand, niet als garantie;
- duidelijke verantwoordelijkheden, documentatie, beheer en overdracht;
- bewijs en cases uitsluitend na classificatie, toestemming en claimgoedkeuring;
- Scan-output als voorlopige productstructuur;
- vier routes en expliciete waarschuwing voor het openbare formulier;
- een eerlijke disabled prototypestatus zolang intakebackend en provider ontbreken.

### Visuele toestand

Rustig, stabiel, verbonden en overzichtelijk. Het resultaat is beheersing, niet spektakel.

### Flow Line

State: `verified`.

De lijn is eenvoudig, verbonden en voorzien van verificatiepunten. `Verified` beschrijft de verhaaltoestand van de lijn; het is geen publieke claim dat ongedefinieerde security-, test- of overdrachtsgates al bewezen zijn.

### Eindconclusie

> Niet alleen gemoderniseerd, maar weer onder controle.

## Flow Line-contract

```ts
export type FlowState =
  | 'fragmented'
  | 'paused'
  | 'mapped'
  | 'organized'
  | 'verified';
```

Voor deze sprint ondersteunt iedere state alleen:

- een semantische `figure` met tekstcaption;
- een decoratieve SVG die voor assistieve technologie verborgen is;
- een statische compositie per akte;
- responsive herschikking zonder horizontale hoofdscroll;
- een reduced-motionstaat zonder padtekenen, scrubben, parallax of automatische sequencing.

Later motionwerk mag deze states als interface hergebruiken, maar moet eerst doel, input, focusgedrag, cleanup en performancebudget vastleggen.

## Content- en evidencegrenzen

- Alleen CL-031 mag als categoriepositionering worden gebruikt.
- Founder-led mag alleen met de qualifier uit CL-032 worden geformuleerd.
- Scan-output blijft voorlopig zolang CL-033 en CL-034 niet zijn goedgekeurd.
- Geen method claim uit CL-026–CL-030 wordt als bewezen badge getoond.
- Proof gebruikt `[Gevalideerde klantcase nodig]` en `[Claim nog niet goedgekeurd]` totdat bewijs en publicatierechten bestaan.
- Het openbare formulier vraagt nooit om credentials, secrets, broncode, exports, uploads, vertrouwelijke bestanden of gevoelige persoonsgegevens.
- De prototype-route toont geen successtatus en verzendt geen gegevens.

## Statische acceptance gate

- Eén H1; elke akte heeft een benoemde heading en ieder scenecluster een logisch headingniveau.
- Propositie, beide expertise-routes, founder-led model en Scan zijn zonder motion te begrijpen.
- De vier Scan-routes zijn zichtbaar en de keuze wordt niet als definitieve diagnose gepresenteerd.
- Desktop en mobiel hebben dezelfde inhoudelijke volgorde en beslissingen.
- De pagina blijft bruikbaar op 320 px, bij 200% zoom, met toetsenbord en met reduced motion.
- Geen horizontale overflow, verborgen kerncontent of nep-success state.
- Geen placeholder lijkt op een echte case, credential, testimonial of resultaatclaim.
- Complexe motion, finale art direction, fotografie, logo en formulierintegratie blijven buiten deze sprint.

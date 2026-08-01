# Design Direction

## 1. Merknaam

De zichtbare merknaam blijft:

> **Digitech Solutions**

Er wordt geen verkorting naar alleen DIGITECH als primaire merknaam doorgevoerd.

Een descriptor mag ondersteunend worden gebruikt:

> Workflow & Application Modernization

De Nederlandse variant kan worden getest:

> Workflow- en applicatiemodernisering

## 2. Art direction

> **Editorial engineering studio**

De combinatie:

- redactionele typografie;
- technische precisie;
- systeemdiagrammen;
- interface-elementen;
- veel negatieve ruimte;
- gecontroleerde motion;
- warme menselijke details.

De website moet tegelijk twee signalen afgeven:

1. deze specialist begrijpt moderne digitale vormgeving;
2. deze specialist beheerst risico, scope en uitvoering.

## 3. Visuele principes

- Eén visueel verhaal boven losse effecten.
- Grote typografie, korte kernzinnen.
- Technische lijnen en grids als functionele taal.
- Donkere basis met warme lichte ademruimtes.
- Interfaces en procesdiagrammen als bewijsobjecten.
- Geen overmatig afgeronde SaaS-componenten.
- Geen futuristische decoratie zonder betekenis.
- Geen fake dashboards met onbegrijpelijke data.
- Geen stock-AI.

## 4. Kleurenpalet v0.1

### Neutrals

| Token | Hex | Gebruik |
|---|---|---|
| `ink-950` | `#090B0F` | primaire donkere achtergrond |
| `ink-900` | `#10141A` | surfaces |
| `ink-800` | `#181E26` | verhoogde componenten |
| `steel-500` | `#7F8998` | secundaire tekst |
| `steel-300` | `#B7BEC8` | lichte secundaire tekst |
| `paper-100` | `#F2F0E9` | warme lichte secties |
| `paper-50` | `#FAF9F5` | lichte surfaces |

### Accenten

| Token | Hex | Betekenis |
|---|---|---|
| `flow-blue` | `#2F6BFF` | technologie, verbinding en actieve flow |
| `flow-blue-light` | `#78A0FF` | highlights op donker |
| `signal-orange` | `#FF6A2B` | frictie, aandacht en menselijke beslissing |
| `verified-green` | `#35C98B` | gevalideerd, getest en afgerond |
| `risk-red` | `#FF4D5E` | echte fouten en risico's |

### Regels

- Blauw is de primaire merk- en flowkleur.
- Oranje is semantisch, niet overal decoratief.
- Groen uitsluitend voor succes en verificatie.
- Rood uitsluitend voor echte risico- of foutstatus.
- Alle combinaties worden op contrast getest.
- Gradients zijn ondersteunend, nooit noodzakelijk voor herkenning.
- Geen paars-neon AI-palet.

## 5. Typografie v0.1

### Display

Test eerst:

- Inter Tight;
- Geist Sans;
- Manrope.

Gewenste eigenschappen:

- krachtig in grote formaten;
- modern maar niet sci-fi;
- bruikbaar in Nederlands;
- variabel gewicht;
- helder bij compacte headlines.

### Body

Voorkeur:

- Geist Sans of Inter.

### Mono

Test:

- Geist Mono;
- IBM Plex Mono;
- JetBrains Mono.

Gebruik mono alleen voor:

- technische metadata;
- status;
- proceslabels;
- sectienummers;
- diagramannotaties.

### Indicatieve schaal

- Hero desktop: `clamp(4rem, 8vw, 7rem)`
- Hero mobiel: `clamp(2.75rem, 12vw, 4rem)`
- H2 desktop: 48–72 px
- H3: 28–40 px
- Body large: 20–24 px
- Body: 16–18 px
- Label: 12–14 px

Exacte schaal volgt uit de visual spike.

## 6. Grid en spacing

### Grid

- desktop: 12 kolommen;
- tablet: 6 kolommen;
- mobiel: 4 kolommen.

### Content

- maximale contentbreedte: ongeveer 1280–1440 px;
- bodycopy: ongeveer 60–75 tekens per regel;
- secties mogen viewportvullend zijn;
- kerninformatie blijft scanbaar;
- asymmetrie is toegestaan wanneer hiërarchie helder blijft.

### Spacing

Gebruik semantische tokens:

- `space-1` t/m `space-10`;
- `section-gap-sm`;
- `section-gap-md`;
- `section-gap-lg`;
- `content-gutter`.

Geen ongedocumenteerde willekeurige margins per sectie.

## 7. Componenttaal

### Radius

- 4 px: labels en technische details;
- 8 px: controls;
- 12–16 px: kaarten;
- grotere radius alleen voor mediaframes of uitzonderlijke hero-objecten.

### Borders

- dun;
- functioneel;
- rustig;
- zichtbaar genoeg op dark surfaces.

### Buttons

Primaire CTA:

- hoge visuele prioriteit;
- duidelijke tekst;
- geen overdreven glow;
- zichtbare focus;
- loading- en success-state;
- minimale magnetic motion op desktop is optioneel.

Secundaire CTA:

- outline of text/link;
- visueel onderscheid zonder onduidelijk te worden.

## 8. Logo brief

### Uitgangspunt

De naam **Digitech Solutions** blijft volledig behouden.

### Aanbevolen richting

Begin met een sterk wordmark en een eenvoudig monogram. Het motionconcept is belangrijker dan een complex statisch icoon.

### Richtingen voor exploratie

#### A — Flow D

Een `D` waarin een gefragmenteerde lijn wordt geordend tot één route.

#### B — DS system mark

Een minimalistisch D/S-monogram opgebouwd uit lijn, grid en onderbreking.

#### C — Wordmark alignment

Een custom of aangepast woordmerk waarin lettersegmenten in de motionvariant uitlijnen.

### Requirements

- leesbaar en herkenbaar op 16 px;
- monochroom bruikbaar;
- werkt op donker en licht;
- geen gradient nodig;
- exporteerbaar als SVG;
- geen circuitboard-icoon;
- geen AI-brein;
- geen swoosh;
- motionvariant duurt maximaal ongeveer één seconde;
- volledige naam blijft toegankelijk zichtbaar.

### Beslisproces

1. drie zwart-wit richtingen;
2. toets op favicon, header en social avatar;
3. kies één richting;
4. pas kleur toe;
5. ontwerp motion lock-up;
6. test naast hero en navigatie.

## 9. Motion system

### Signature elements

- Flow Line;
- nodes;
- layers;
- gates;
- state transitions;
- section progress.

### Principes

- motion verklaart;
- native scroll blijft leidend;
- geen scroll-jacking;
- maximaal één dominante interactie per sectie;
- mobiel krijgt eigen choreografie;
- reduced motion is volwaardig;
- animatie mag geen content blokkeren.

### Indicatieve timings

- microfeedback: 120–220 ms;
- standaardtransitie: 250–450 ms;
- section reveal: 500–800 ms;
- hero orchestration: maximaal ongeveer 1,2 s.

### Performance

- primair transform en opacity;
- SVG-pathanimatie selectief;
- pauzeer animaties buiten beeld;
- lazy-load niet-kritieke motioncode;
- WebGL alleen na afzonderlijke goedkeuring;
- geen permanente achtergrondanimaties die CPU verbruiken.

## 10. Beeld en fotografie

Benodigd:

- professionele founderfoto;
- echte werkcontext;
- close-ups van diagrammen, schermen of schetsen;
- casebeelden;
- abstracte technische composities uit echte interface-elementen.

Vermijden:

- stockvergaderingen;
- robots;
- hologrammen;
- AI-gezichten;
- generieke serverruimtes;
- onbegrijpelijke codewalls;
- fictief groot team.

## 11. Visual spike deliverables

Voordat production design start:

1. desktop hero keyframe;
2. mobiele hero keyframe;
3. Hidden Drag begin/midden/eind;
4. dark en light section-combinatie;
5. button- en navigatiestijl;
6. case card;
7. Flow Line-prototype;
8. drie logo/wordmarkrichtingen;
9. reduced-motionvoorbeeld;
10. performance-inschatting van de motionaanpak.

# Motion plan rebrandprototype

## Richting

Motion maakt relaties, volgorde en statusverandering zichtbaar. De pagina blijft volledig leesbaar als JavaScript of automatische animatie uitstaat. Er is geen scrollinterceptie, permanente loop, page transition, custom cursor of decoratieve parallax.

Inspiratie uit React Bits wordt beperkt tot twee principes: een georkestreerde entree en onthulling bij voldoende zichtbaarheid. De implementatie gebruikt de bestaande GSAP-stack en projectspecifieke HTML, CSS en SVG. Op verzoek is alle verhalende motion met factor 1,5 vertraagd. De gedeelde GSAP-timescale is daarom `2 / 3`.

## Bewegingskaart

| Sectie | Doel | Beginstaat | Eindstaat | Mobiel | Reduced motion | Budget en cleanup |
|---|---|---|---|---|---|---|
| Hero | Laat zien dat workflow-, data- en applicatiefrictie in een diagnose samenkomen | Fragmenten zijn licht verschoven; verbindingslijnen zijn nog niet getekend | Fragmenten staan op hun vaste plek; diagnose en route zijn verbonden | Korte verticale stagger, zonder ruimtelijke convergentie | Directe statische eindstaat | Circa 1,8 s na tempo-aanpassing; transform, opacity en beperkte SVG-stroke; GSAP-context wordt bij unmount hersteld |
| Hidden Drag | Verklaart de overgang van versnipperde overdrachten naar een beheersbare route | De versnipperde route en frictiesignalen verschijnen eerst | De oude route dempt; de gecontroleerde route wordt in volgorde opgebouwd | Compacte verticale sequentie zonder pin of scrub | Beide toestanden direct zichtbaar | Eenmalige ScrollTrigger; transform en opacity; geen layoutanimatie |
| Diagnose | Bevestigt dat meerdere ingrepen mogelijk zijn en een rewrite geen default is | De vijf onderzoekslagen en richtingnotitie staan iets lager | Lagen en notitie verschijnen in leesvolgorde | Kortere afstand, hetzelfde rustige tempo | Volledig zichtbaar | Eenmalige reveal; geen verborgen tekst of wijziging van focusvolgorde |
| Expertise-routes | Laat één vraag splitsen in twee routes en terugkomen in combined/unsure | Panelen staan licht naar het midden | Panelen openen van elkaar af; combined volgt als vangnet | Verticale reveal zonder zijwaartse beweging | Volledig zichtbaar | Eén timeline bij binnenkomst; geen hover-afhankelijke informatie |
| Werkwijze | Groepeert zes uitvoeringsstappen in drie begrijpelijke beslismomenten | De drie fasen staan iets lager | Begrijpen, gericht moderniseren en borgen verschijnen in volgorde | De fasen staan onder elkaar en gebruiken een kortere afstand | Volledig zichtbaar | Eenmalige reveal; geen pinning, stacking of extra scrollafstand |
| Founder | Verbindt de initialen visueel tot één aanspreekpunt | S en C staan iets uit elkaar; hoekmarkering is ingetrokken | Initialen vallen samen; markering tekent in | Kleinere beweging | Statische eindstaat | Eenmalige timeline; alleen transform, opacity en scale |
| Scan | Laat current state, beslissingen en eerste stap als routekaart lezen | Uitvoerblokken zijn neutraal; connectors zijn ingetrokken | Blokken en connectors activeren in logische volgorde | Dezelfde korte verticale volgorde | Statische eindstaat | Eenmalige timeline; geen permanente pulsering |

## Interactie en toegankelijkheid

- Native scroll en anchor-navigatie blijven leidend.
- Automatische motion draait alleen onder `prefers-reduced-motion: no-preference`.
- Alle informatie staat al in de DOM en blijft beschikbaar zonder motion.
- Animaties wijzigen geen tabvolgorde, naam, rol of status van interactieve elementen.
- Focus- en active-feedback blijven direct; alleen de zichtbare overgang duurt 50% langer.
- Mobiel gebruikt kleinere afstanden en geen sticky scrollchoreografie.

## Acceptatie

- Geen horizontale overflow op 320, 375, 768, 1024, 1440 en 1920 px.
- Geen console-errors bij laden, scrollen, disclosure-interactie en navigatie.
- Statische eindstaat bij reduced motion.
- Geen zichtbare contentflits die lezen blokkeert.
- Lint, typecheck, tests en productiebuild slagen.

## Motion spike: Hero, Hidden Drag en Diagnose

Deze spike verbindt de eerste drie hoofdstukken met een gedeelde scrollprogressie. De techniek
blijft progressive enhancement: de semantische inhoud en normale documentvolgorde bestaan al
voordat GSAP wordt uitgevoerd.

### Flow Line

- **Doel:** maakt zichtbaar dat herkenning, procesfrictie en diagnose onderdelen van dezelfde
  route zijn.
- **Beginstaat:** het eerste knooppunt is actief en een kort lijnsegment is zichtbaar.
- **Eindstaat:** de lijn bereikt het diagnoseknooppunt en verdwijnt voordat de expertiseroutes
  beginnen.
- **Desktop:** een sticky rail volgt alleen de drie hoofdstukken van de spike.
- **Mobiel:** de rail is verborgen; de bestaande diagramlijnen dragen het motief in documentflow.
- **Reduced motion:** de rail en scrollprogressie zijn uitgeschakeld.
- **Budget:** twee transformaties, drie knooppunten, geen loop en geen frame-gestuurde React-state.

### Hero-handoff

- **Doel:** laat de probleemsectie voortkomen uit de hero in plaats van als los kleurvlak te
  verschijnen.
- **Beginstaat:** de hero is volledig leesbaar en vult het beschikbare viewport.
- **Eindstaat:** de hero dempt en schaalt licht terug terwijl de warme probleemsectie hem afdekt.
- **Desktop:** native CSS sticky plus een GSAP ScrollTrigger met scrub `1.1`.
- **Mobiel en reduced motion:** normale documentflow zonder overlap of pinning.

### Hidden Drag

- **Doel:** toont oorzaak en gevolg tussen versnipperde overdrachten en een beheersbare route.
- **Beginstaat:** de versnipperde route heeft volledige nadruk; de gecontroleerde route is
  zichtbaar maar gedempt.
- **Eindstaat:** de oude route treedt terug en de gecontroleerde route wordt volledig leesbaar.
- **Desktop:** een korte sticky stage vanaf 1024 px breed en 760 px hoog, gekoppeld aan native
  scroll met scrub `1.15`.
- **Mobiel:** geen sticky stage; een eenmalige compacte reveal in verticale leesvolgorde.
- **Reduced motion:** beide toestanden staan direct volledig in beeld.

### Diagnosefocus

- **Doel:** maakt duidelijk dat meerdere onderzoekslagen eerst in samenhang worden gelezen.
- **Beginstaat:** alle lagen blijven zichtbaar, met lagere nadruk.
- **Eindstaat:** de vijf lagen en de richtingnotitie staan volledig in focus.
- **Desktop:** progressieve focus met scrub `1.1`; de native disclosures blijven bedienbaar.
- **Mobiel:** korte eenmalige reveal zonder wijziging van disclosurestatus.
- **Reduced motion:** volledige statische eindstaat.

Alle timelines worden binnen een GSAP-context opgebouwd. ScrollTriggers en timelines worden bij
unmount expliciet opgeruimd. De spike animeert alleen transform, opacity en een beperkte lijnscale.

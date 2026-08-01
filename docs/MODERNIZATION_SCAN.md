# Modernization Scan — Product Definition v0.1

## 1. Productbeslissing

Digitech Solutions gebruikt één overkoepelend diagnoseproduct:

> **Modernization Scan**

De scan kan drie vormen aannemen:

1. **Workflow-led** — het primaire probleem zit in processen, overdrachten en handmatig werk.
2. **Application-led** — het primaire probleem zit in een verouderde of moeilijk onderhoudbare applicatie.
3. **Combined** — workflow en applicatie zijn zodanig verweven dat beide samen moeten worden beoordeeld.

Er komen dus geen losstaande hoofdproducten “Workflow Scan” en “Legacy Application Assessment”. Die termen kunnen intern als onderzoeksroutes worden gebruikt, maar de klant koopt één herkenbaar product.

## 2. Strategische reden

Eén overkoepelende scan past bij de werkelijkheid van moderniseringsvraagstukken:

- een slecht proces kan ten onrechte als softwareprobleem worden gezien;
- een applicatieprobleem kan worden veroorzaakt door onduidelijke processen;
- automatisering zonder applicatiecontext kan extra technische schuld creëren;
- een applicatierewrite zonder procesanalyse kan oude inefficiëntie opnieuw bouwen.

De scan voorkomt dat de oplossing vooraf wordt gekozen.

## 3. Belofte

> De Modernization Scan brengt in kaart wat je organisatie vertraagt, waar de grootste risico's en afhankelijkheden zitten en welke moderniseringsroute het meest verstandig is.

## 4. Geschikt voor

De scan is geschikt wanneer een organisatie:

- dagelijks werkt met handmatige overdrachten, mailboxen of spreadsheets;
- gegevens tussen systemen kopieert;
- een interne applicatie moeilijk kan onderhouden of uitbreiden;
- afhankelijk is van één leverancier, developer of kennisdrager;
- twijfelt tussen automatiseren, integreren, refactoren of herbouwen;
- een verouderde MVP of interne tool wil professionaliseren;
- eerst scope, risico en haalbaarheid wil begrijpen;
- workflow- en applicatieproblemen niet goed van elkaar kan scheiden.

## 5. Niet geschikt voor

De scan is niet bedoeld als:

- volledige penetratietest;
- juridisch complianceonderzoek;
- uitgebreide enterprise-architectuuraudit;
- volledige code-audit van een zeer grote codebase binnen een klein pakket;
- gratis presalesrapport;
- garantie op een vaste totaalprijs voor onbekende uitvoering;
- vervanging van specialistisch forensisch, privacy- of securityonderzoek.

Wanneer specialistisch onderzoek nodig is, wordt dit als vervolg of externe expertise benoemd.

## 6. Intake en triage

De intake bepaalt de onderzoeksroute.

### Kernvragen

- Wat is het meest zichtbare probleem?
- Welke medewerkers en teams zijn betrokken?
- Welke processen worden geraakt?
- Welke applicaties en databronnen zijn betrokken?
- Waar ontstaan wachttijd, fouten of afhankelijkheid?
- Wat is de gewenste uitkomst?
- Welke beperkingen of deadlines bestaan?
- Welke documentatie, code of systeemtoegang is beschikbaar?
- Zijn security, privacy of continuïteit expliciete zorgen?

### Routebepaling

#### Workflow-led

Kies wanneer de kernpijn vooral bestaat uit:

- handwerk;
- dubbele invoer;
- versnipperde informatie;
- goedkeuringsstappen;
- rapportage;
- overdrachten tussen mensen en tools.

#### Application-led

Kies wanneer de kernpijn vooral bestaat uit:

- verouderde technologie;
- ontbrekende support;
- moeilijk wijzigbare code;
- security- of dependencyrisico;
- slechte performance;
- complexe integraties;
- gebrek aan tests of documentatie.

#### Combined

Kies wanneer:

- het proces rond de beperkingen van de applicatie is gebouwd;
- meerdere workflows afhankelijk zijn van dezelfde legacysoftware;
- modernisering van alleen proces of alleen applicatie onvoldoende zou zijn;
- businesslogica deels in mensen, spreadsheets en code verspreid zit.

## 7. Gemeenschappelijke onderzoekslagen

Iedere scan beoordeelt minimaal:

1. **Doel en context**
2. **Proces en gebruikers**
3. **Data en informatieoverdracht**
4. **Applicaties en integraties**
5. **Risico en continuïteit**
6. **Eigenaarschap en beheer**
7. **Gewenste eindsituatie**
8. **Scope en haalbaarheid**

De diepgang per laag verschilt per route.

## 8. Workflowonderzoek

Mogelijke onderdelen:

- procesmapping;
- handmatige stappen;
- overdrachtsmomenten;
- dubbele invoer;
- fout- en uitzonderingstrajecten;
- wachttijd;
- beslisregels;
- menselijke controles;
- gebruikte tools en systemen;
- audit trail;
- automatiseringsgeschiktheid;
- AI-geschiktheid;
- beheer na oplevering.

## 9. Applicatieonderzoek

Mogelijke onderdelen:

- functioneel doel;
- gebruikers en kritieke journeys;
- stack en hosting;
- codebase op hoofdlijnen;
- dependencies;
- architectuur;
- dataopslag;
- autorisatie;
- integraties;
- testbaarheid;
- deployproces;
- documentatie;
- vendor- of kennisafhankelijkheid;
- onderhoudbaarheid;
- security- en continuïteitssignalen.

De scan is een gerichte assessment, geen onbeperkte volledige audit.

## 10. Moderniseringsopties

De scan kan adviseren om één of meerdere routes te volgen:

- simplify;
- standardize;
- integrate;
- automate;
- augment with AI;
- secure;
- document;
- refactor;
- replatform;
- replace;
- rebuild;
- retire.

Het advies bevat ook wat **niet** moet worden gedaan.

## 11. Deliverables

Iedere Modernization Scan levert minimaal:

### 1. Executive summary

- probleem;
- belangrijkste bevindingen;
- urgentie;
- aanbevolen route.

### 2. Current-state map

Afhankelijk van de route:

- proceskaart;
- applicatiekaart;
- systeem- en datastroom;
- of een gecombineerde kaart.

### 3. Friction and risk register

Per bevinding:

- beschrijving;
- impact;
- waarschijnlijkheid of frequentie;
- bewijs/observatie;
- prioriteit;
- eigenaar indien bekend.

### 4. Dependency map

- mensen;
- systemen;
- data;
- leveranciers;
- technische afhankelijkheden;
- ontbrekende kennis.

### 5. Opportunity map

Kansen ingedeeld naar:

- quick wins;
- structurele verbeteringen;
- technische randvoorwaarden;
- zaken die eerst nader onderzoek vereisen.

### 6. Recommended modernization route

Met uitleg waarom bepaalde routes wel of niet worden aanbevolen.

### 7. Phased roadmap

Bijvoorbeeld:

- fase 0: risico beperken;
- fase 1: pilot;
- fase 2: moderniseren;
- fase 3: opschalen en overdragen.

### 8. Pilot or sprint proposal

Een afgebakend voorstel voor de eerste uitvoeringsstap, inclusief doel, scope, acceptatiecriteria en belangrijke uitsluitingen.

### 9. Decision log

Belangrijke aannames, onzekerheden en besluiten.

## 12. Optionele deliverables

Afhankelijk van pakket of scope:

- technisch codebase-overzicht;
- dependencyrapport;
- datamodel op hoofdlijnen;
- prototype;
- UX-flow;
- integratieconcept;
- securitybaseline;
- proof-of-concept;
- indicatieve budgetbandbreedte;
- build-versus-buyvergelijking.

## 13. Aanbevolen productstructuur

Om scope creep te voorkomen:

### Modernization Scan — Core

Eén primair vraagstuk met workflow-led of application-led route.

### Modernization Scan — Combined

Een breder vraagstuk waarbij workflow en applicatie aantoonbaar samen moeten worden onderzocht.

### Deep-dive add-on

Voor extra code, security, data, integratie of procesdiepgang.

Dit blijft één productfamilie en één merknaam. De varianten sturen alleen scope, doorlooptijd en prijs.

## 14. Commerciële guardrails

- De scan heeft een vaste scope en inputlijst.
- Niet-beschikbare documentatie wordt als risico vastgelegd.
- Onverwachte technische complexiteit leidt tot een deep-dive of vervolgonderzoek.
- Een scan garandeert geen vaste uitvoeringsprijs.
- Een uitvoeringsvoorstel volgt pas na voldoende inzicht.
- De klant kan het rapport ook zonder vervolgopdracht gebruiken.
- Verkoop van uitvoering mag het advies niet sturen.
- Bevindingen worden op bewijs, observatie en expliciete aannames gebaseerd.

## 15. Open commerciële beslissingen

Nog vast te stellen:

- exacte duur van Core en Combined;
- prijs of vanafprijs;
- aantal interviews;
- maximale codebase-/systeemomvang;
- inbegrepen workshops;
- vorm van rapport en presentatie;
- revisieronde;
- reistijd en on-sitewerk;
- voorwaarden voor toegang tot systemen;
- korting of verrekening bij vervolgopdracht.

## 16. Websitepresentatie

De website toont de Modernization Scan als veilige eerste stap.

### Headline

> **Ontdek wat je organisatie werkelijk vertraagt.**

### Supporting copy

> De Modernization Scan beoordeelt processen, applicaties of de samenhang daartussen en vertaalt de bevindingen naar een concrete, gefaseerde moderniseringsroute.

### Drie herkenningsroutes

- Mijn proces is handmatig of foutgevoelig.
- Mijn applicatie is verouderd of moeilijk aanpasbaar.
- Workflow en applicatie zitten samen vast.

Alle drie leiden naar hetzelfde product en intakeproces.

## 17. Acceptatiecriteria productdefinitie

De productdefinitie is gereed voor websitecopy en wireframes wanneer:

- Core en Combined scope zijn begrensd;
- deliverables definitief zijn;
- klantinput is vastgesteld;
- doorlooptijd is vastgesteld;
- prijsstrategie is vastgesteld;
- voorbeeldrapportstructuur is gemaakt;
- uitsluitingen zichtbaar zijn;
- intakevragen gereed zijn;
- één voorbeeldscenario per onderzoeksroute beschikbaar is.

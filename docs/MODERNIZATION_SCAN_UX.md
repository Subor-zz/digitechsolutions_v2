# Modernization Scan UX

## UX objective and boundary

Help a visitor recognize the appropriate research route and provide enough non-sensitive context for qualification. The public flow does **not** sell, price or execute the scan; request credentials, code or files; or make the visitor diagnose the technical root cause.

## Flow overview

1. Understand the scan and standalone outputs.
2. Select `workflow-led`, `application-led`, `combined` or `unsure`.
3. Complete one shared intake with route-adapted prompts.
4. Review privacy warning and consent.
5. Submit; receive an unambiguous success or recoverable error.

The route is a starting hypothesis. Copy states: `Twijfel je? Kies ‘Ik weet het nog niet’. De passende onderzoeksroute wordt na de intake bevestigd.`

## Triage

### Route cards

| Route | Visitor-facing label | Choose when | Adaptive prompt |
|---|---|---|---|
| Workflow-led | `Mijn proces is handmatig of foutgevoelig` | Handoffs, duplicate entry, waiting, approvals, exceptions or reporting dominate | `Welke workflow of overdracht veroorzaakt de meeste frictie?` |
| Application-led | `Mijn applicatie is verouderd of moeilijk aanpasbaar` | Maintenance, dependencies, integrations, performance, security signals or missing tests/docs dominate | `Welke applicatie of technische beperking staat verandering in de weg?` |
| Combined | `Workflow en applicatie zitten samen vast` | Process grew around system limitations or logic is spread across people, sheets and code | `Waar raken het proces en de applicatie elkaar?` |
| Unsure | `Ik weet nog niet waar de oorzaak zit` | Symptoms are clear but root cause is not | `Wat merk je dagelijks, zonder de oorzaak te hoeven bepalen?` |

Cards use radio semantics inside a labelled group. Selection is changeable at review and never erases shared answers. No route is visually presented as more expensive or “advanced”.

## Progressive disclosure

Use three short form sections on one page or three semantic steps if testing shows the one-page version is overwhelming:

1. **Over jou:** identity and organization.
2. **Over de uitdaging:** route, symptoms, affected area, timing and outcome.
3. **Beschikbare context en toestemming:** documentation/access availability, privacy warning and consent.

Prefer one server-rendered form with in-page section headings for resilience. If step UI is used, keep back/forward buttons, preserve values, expose `Stap X van 3` in text and allow validation per step without trapping focus. Do not require account creation or save sensitive drafts in local storage.

## Field specification

| Field | Required | Control / validation | Purpose and UX note |
|---|---:|---|---|
| Name | Yes | Text, 2–100 chars, `autocomplete=name` | Address response; accept international characters |
| Business email | Yes | Email, ≤254 chars, `autocomplete=email`; server validation | Do not block common valid formats; “business” is guidance, not brittle domain blacklist |
| Organization | Yes | Text, 2–150 chars, `autocomplete=organization` | Qualification context |
| Role | Yes | Text or concise select + `Anders`; ≤100 chars, `autocomplete=organization-title` | Understand buyer/stakeholder position |
| Organization size | Yes | Select: `1–19`, `20–49`, `50–99`, `100–250`, `250+`, `Weet ik niet` | Qualification; never imply exclusion in-form |
| Primary challenge / route | Yes | Four radio cards | Starting hypothesis, changeable |
| Affected workflow/application | Conditional label, optional | Text, ≤300 chars | Optional because unsure visitors may not know; prompt adapts by route |
| Challenge description | Yes | Textarea, 30–1500 chars | Ask for symptoms, teams and impact; warn against confidential/sensitive data |
| Urgency/timing | Yes | Radio/select: `Zo snel mogelijk`, `Binnen 1–3 maanden`, `Binnen 3–6 maanden`, `Verkennend`, `Anders` | No promise tied to selection |
| Desired outcome | Yes | Textarea, 10–600 chars | Outcome rather than prescribed tool |
| Documentation/system access exists | Yes | Radio: `Ja`, `Deels`, `Nee`, `Weet ik niet` | Availability only; explicitly no upload/access requested now |
| Privacy consent/acknowledgement | Yes | Unchecked checkbox with linked privacy notice | Use legally reviewed wording; do not bundle marketing consent |

Do not collect budget, phone, source URL/upload or system names by default in this flow. They may be reconsidered only with a documented qualification need and privacy review.

## Draft helper and privacy copy

Before free-text fields:

> Beschrijf alleen de situatie op hoofdlijnen. Deel hier geen wachtwoorden, API-sleutels, broncode, klantgegevens, gezondheidsgegevens of andere vertrouwelijke informatie.

Consent placeholder pending legal review:

> Ik heb de privacyverklaring gelezen en geef toestemming om mijn gegevens te gebruiken om op deze aanvraag te reageren.

If consent is not the correct legal basis, legal/privacy must replace this with an acknowledgement and documented basis. Marketing consent, if ever added, is separate, optional and unchecked.

## Validation and errors

- Validate on blur only after interaction and on submit; never validate empty fields while the visitor is typing.
- Server validation is authoritative. Normalize whitespace; reject control/injection payloads safely; never echo raw HTML.
- Error copy states the remedy: `Vul je zakelijke e-mailadres in, bijvoorbeeld naam@organisatie.nl.`
- On failed submit, focus an error summary linked to each invalid field; keep safe values; place inline messages beside fields and set `aria-invalid`/`aria-describedby`.
- Do not clear the form for provider/network errors. Message: `Je aanvraag is niet verzonden. Probeer het opnieuw of mail Subor rechtstreeks.`
- Duplicate submissions use an idempotency key and disabled/loading state only while the request is in progress; the button label remains understandable.
- Never reveal whether an email/address exists, provider internals or security details.

## Success state

Heading: `Je aanvraag is ontvangen.` Only show after confirmed server response.

Body: `Bedankt. Subor beoordeelt de context en laat weten welke vervolgstap passend is. Deel in de tussentijd geen vertrouwelijke systeeminformatie per e-mail.`

Show a response time only after Subor approves an operational promise. Provide `Bekijk de werkwijze`, return home and direct email for correction/withdrawal. A reference number is optional only if real, non-sensitive and supportable. Success page is noindex and contains no submitted values in URL, page source, analytics or pixels.

## Alternative contact

Display `Liever eerst afstemmen? Stuur een e-mail` beside the intake start and on errors. Use the verified business email. If a calendar is later offered, link out only after clear disclosure/consent behavior; it never replaces email or the accessible form.

## Spam and abuse constraints

Use server-side rate limiting, timestamp/honeypot and provider abuse detection before an interactive challenge. Honeypot is removed from accessibility tree and not keyboard-focusable. Any CAPTCHA must be privacy-reviewed, accessible, localized and invoked only on elevated risk. Log outcome/category, never free text, email, name, IP or organization by default. Return a generic failure and avoid unbounded retries.

## Mobile behavior

Single column; labels above controls; minimum comfortable targets; correct input types; no fixed CTA over keyboard; textarea grows within bounds; errors remain adjacent and summary links work; step controls remain visible in document flow, not sticky above the keyboard. Test at 320 px, zoom, autofill and slow/failed connections.

## Accessibility behavior

Use a real `form`, `fieldset` and `legend` for route/timing/access groups; explicit labels; required status in text; instructions before controls; no placeholder-only labels; logical focus; status announcements; keyboard-operable cards; no color-only selection; and reduced motion for progress/state changes. Title and H1 identify the scan intake, not a generic “Contact”.

## Analytics boundary

Permissible aggregate events after privacy decision: intake started, route category selected, validation blocked by field **name only**, submission succeeded/failed and alternative contact clicked. Never send field values, free text, email domain, organization, exact timing combined with identity, or full URL/query data.

## Acceptance criteria

An unsure visitor completes the form without inventing technical detail; route can change without data loss; sensitive-data warning appears before free text; all failures offer recovery and email; success is truthful; keyboard and screen-reader flow is complete; and the form works without motion or client-side validation.

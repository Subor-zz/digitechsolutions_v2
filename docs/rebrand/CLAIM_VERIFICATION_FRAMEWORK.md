# Claim Verification Framework

## Rule

Every externally visible factual or promissory statement has one record in `docs/rebrand/CLAIM_REGISTER.md`. Identity/positioning decisions may be approved internally; experience, credentials, results, security and commercial promises require external or operational evidence. Unknown evidence means **do not publish**, not “probably true”.

## Claim types and acceptable evidence

| Type | Examples | Minimum acceptable evidence | Additional publication checks |
|---|---|---|---|
| Identity | Brand, founder, entity, location | Chamber/company record, domain/account ownership, founder approval and current contact record | Exact legal/trading name, date checked, privacy choice for location/phone |
| Experience | Years, roles, sectors, capabilities | Dated CV/employment/contracts or portfolio records sufficient to calculate non-overlapping periods | Define whether IT, finance or total; avoid adding simultaneous roles twice; expiry review |
| Certification | ITIL or other credential | Certificate/issuer verification with holder, level, issue/expiry date | Correct current title; no broader competence implied |
| Project result | Artifact delivered, scope completed, technical behavior | Repository/release/test/acceptance artifact and defined project role | Permission, timeframe, environment and limitations |
| Client result | Business/operational outcome | Client-approved baseline/comparator, measurement method/window and corroborating record | Contribution vs causation, client permission/anonymization, confounders |
| Performance metric | Response time, incident count, uptime, percentage improvement | Raw/aggregated measurement source, definition, sample/window, comparable environments and calculation | No cherry-picking; device/network/build; material uncertainty |
| Security claim | “Security checked”, secure, compliant, no vulnerabilities | Defined review/test scope, tool/manual method, date, environment, findings disposition and qualified reviewer | Never imply pentest/compliance/certainty outside scope; expiry and residual risk |
| Commercial promise | Price, availability, response time, guaranteed transfer, duration | Approved offer/contract terms plus demonstrated operational ability and owner | Conditions, geography/tax, capacity, exceptions, change process; legal review for guarantees |

## Status model

- `DISCOVERED` — claim found; not yet reviewed.
- `EVIDENCE NEEDED` — source absent or incomplete; not publishable.
- `UNDER REVIEW` — evidence collected; exact wording/permission unresolved.
- `APPROVED` — exact public wording, evidence, owner and review date recorded.
- `APPROVED WITH QUALIFIER` — publish only with the registered context/limitation.
- `REJECTED` — misleading, contradictory, unprovable or strategically inappropriate.
- `RETIRED` — was approved but is no longer current/permitted.

Only `APPROVED` and `APPROVED WITH QUALIFIER` may enter final copy.

## Verification process

1. **Discover:** copy exact wording and source URL/document/location; assign stable ID and type.
2. **Normalize:** define the smallest factual proposition. Split compound claims such as experience + result + guarantee.
3. **Collect:** reference evidence without placing confidential data in this public documentation repository.
4. **Test:** check calculation, dates, scope, role, alternative explanations and consistency with other claims.
5. **Permission/privacy:** confirm client, person, logo, quote, screenshot and anonymization approval.
6. **Draft:** write exact qualified public wording and required adjacent disclosure.
7. **Approve:** evidence owner and Subor sign off; legal/privacy reviews regulated, security, comparative or guarantee claims.
8. **Publish/map:** record every page/component using the claim.
9. **Review/retire:** set review date; remove everywhere if evidence, permission or accuracy expires.

## Evidence record requirements

The register stores only references and non-sensitive summaries. Evidence itself belongs in an access-controlled location with owner and retention policy. Never commit employment contracts, client reports, personal IDs, raw analytics, contact data, credentials or security findings into the public site repository.

## Wording controls

- Prefer exact scope: `beoordeeld op [defined checks]` over `secure`.
- Prefer observation: `tijdens de meetperiode` over permanent guarantees.
- Prefer contribution: `droeg bij aan` unless causality is demonstrated.
- Do not use `enterprise-grade`, `gegarandeerd`, `zero downtime`, `binnen 48 uur`, percentages or `senior` without registered evidence/conditions.
- AI claims describe workflow and controls, not automatic quality or speed.
- Tool familiarity is not equivalent to certified expertise or successful client use.

## Audit cadence

Review homepage/service/commercial claims before every launch; certification/experience annually or on role change; case claims when permissions or facts change; security/performance claims at every material build/environment change; commercial promises whenever capacity/terms change. CI may validate claim IDs in structured content, but human evidence review remains mandatory.

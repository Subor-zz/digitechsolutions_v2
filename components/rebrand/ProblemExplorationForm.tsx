"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import {
  emptyProblemExplorationValues,
  problemExplorationRoutes,
  type ProblemExplorationErrors,
  type ProblemExplorationValues,
  validateProblemExploration,
} from "../../lib/forms/problem-exploration";
import { homepageCopy } from "../../lib/rebrand/homepage-copy";

const fieldIds: Record<keyof ProblemExplorationValues, string> = {
  name: "exploration-name",
  organization: "exploration-organization",
  role: "exploration-role",
  email: "exploration-email",
  phone: "exploration-phone",
  problem: "exploration-problem",
  affected: "exploration-affected",
  systems: "exploration-systems",
  attempted: "exploration-attempted",
  outcome: "exploration-outcome",
  preferredRoute: "exploration-route",
  privacyAccepted: "exploration-privacy",
  website: "exploration-website",
};

export function ProblemExplorationForm() {
  const { form } = homepageCopy;
  const [values, setValues] = useState(emptyProblemExplorationValues);
  const [errors, setErrors] = useState<ProblemExplorationErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const startedAt = useRef(0);
  const errorSummary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function update(field: keyof ProblemExplorationValues, value: string | boolean) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateProblemExploration(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      requestAnimationFrame(() => errorSummary.current?.focus());
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const response = await fetch("/api/problem-exploration", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ values, elapsedMs: Date.now() - startedAt.current }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "De aanvraag kon niet worden verzonden.");
      }

      setValues(emptyProblemExplorationValues);
      setStatus("success");
      startedAt.current = Date.now();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "De aanvraag kon niet worden verzonden.");
      setStatus("error");
    }

    requestAnimationFrame(() => errorSummary.current?.focus());
  }

  const errorCount = Object.keys(errors).length;

  const describedBy = (field: keyof ProblemExplorationValues, hint?: string) =>
    [hint, errors[field] ? `${fieldIds[field]}-error` : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <section
      id="probleemverkenning"
      className="chapter chapter--paper exploration"
      aria-labelledby="probleemverkenning-heading"
    >
      <div className="container exploration__heading">
        <p className="section-kicker">{form.kicker}</p>
        <h2 id="probleemverkenning-heading">{form.headline}</h2>
        <p>{form.intro}</p>
      </div>

      <div className="container exploration__layout">
        <form className="exploration-form" noValidate onSubmit={handleSubmit}>
          {(errorCount > 0 || status === "error" || status === "success") && (
            <div className={`form-status form-status--${status === "success" ? "success" : "error"}`} role={status === "success" ? "status" : "alert"} tabIndex={-1} ref={errorSummary}>
              <h3>{errorCount > 0 ? "Controleer de gemarkeerde velden." : status === "success" ? "Je aanvraag is verzonden" : "Verzenden is niet gelukt"}</h3>
              {errorCount > 0 ? (
                <ul>
                  {Object.entries(errors).map(([field, message]) => (
                    <li key={field}>
                      <a href={`#${fieldIds[field as keyof ProblemExplorationValues]}`}>{message}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{status === "success" ? form.success : submitError || form.unavailable}</p>
              )}
            </div>
          )}

          <div className="form-grid">
            <FormField label="Naam" field="name" error={errors.name}>
              <input id={fieldIds.name} name="name" autoComplete="name" required value={values.name} onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} />
            </FormField>
            <FormField label="Organisatie" field="organization" error={errors.organization}>
              <input id={fieldIds.organization} name="organization" autoComplete="organization" required value={values.organization} onChange={(e) => update("organization", e.target.value)} aria-invalid={Boolean(errors.organization)} aria-describedby={describedBy("organization")} />
            </FormField>
            <FormField label="Functie" field="role" error={errors.role}>
              <input id={fieldIds.role} name="role" autoComplete="organization-title" required value={values.role} onChange={(e) => update("role", e.target.value)} aria-invalid={Boolean(errors.role)} aria-describedby={describedBy("role")} />
            </FormField>
            <FormField label="Zakelijk e-mailadres" field="email" error={errors.email}>
              <input id={fieldIds.email} name="email" type="email" inputMode="email" autoComplete="email" required value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} />
            </FormField>
            <FormField label="Telefoonnummer" optional field="phone" error={errors.phone}>
              <input id={fieldIds.phone} name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(e) => update("phone", e.target.value)} />
            </FormField>
          </div>

          <FormField label="Waar loopt je organisatie momenteel op vast?" field="problem" error={errors.problem} hint="Beschrijf het proces, de applicatie of de terugkerende vertraging.">
            <textarea id={fieldIds.problem} name="problem" rows={5} required value={values.problem} onChange={(e) => update("problem", e.target.value)} aria-invalid={Boolean(errors.problem)} aria-describedby={describedBy("problem", `${fieldIds.problem}-hint`)} />
          </FormField>
          <FormField label="Wie ondervindt hiervan de meeste hinder?" field="affected" error={errors.affected} hint="Bijvoorbeeld een team, afdeling, klantgroep of de gehele organisatie.">
            <textarea id={fieldIds.affected} name="affected" rows={3} required value={values.affected} onChange={(e) => update("affected", e.target.value)} aria-invalid={Boolean(errors.affected)} aria-describedby={describedBy("affected", `${fieldIds.affected}-hint`)} />
          </FormField>
          <FormField label="Welke systemen of hulpmiddelen zijn hierbij betrokken?" field="systems" error={errors.systems} hint="Bijvoorbeeld ERP, CRM, maatwerksoftware, spreadsheets, e-mail of losse tools. Deel geen wachtwoorden, broncode of gevoelige gegevens.">
            <textarea id={fieldIds.systems} name="systems" rows={3} required value={values.systems} onChange={(e) => update("systems", e.target.value)} aria-invalid={Boolean(errors.systems)} aria-describedby={describedBy("systems", `${fieldIds.systems}-hint`)} />
          </FormField>
          <FormField label="Wat heb je al geprobeerd?" optional field="attempted" error={errors.attempted}>
            <textarea id={fieldIds.attempted} name="attempted" rows={3} value={values.attempted} onChange={(e) => update("attempted", e.target.value)} />
          </FormField>
          <FormField label="Wat zou een goede uitkomst voor je organisatie zijn?" field="outcome" error={errors.outcome}>
            <textarea id={fieldIds.outcome} name="outcome" rows={3} required value={values.outcome} onChange={(e) => update("outcome", e.target.value)} aria-invalid={Boolean(errors.outcome)} aria-describedby={describedBy("outcome")} />
          </FormField>

          <fieldset className="form-field form-routes" aria-describedby={errors.preferredRoute ? `${fieldIds.preferredRoute}-error` : undefined}>
            <legend>Voorkeursroute <span aria-hidden="true">*</span></legend>
            {problemExplorationRoutes.map((route) => (
              <label key={route}>
                <input type="radio" name="preferredRoute" value={route} checked={values.preferredRoute === route} onChange={(e) => update("preferredRoute", e.target.value)} />
                <span>{route}</span>
              </label>
            ))}
            {errors.preferredRoute && <span className="field-error" id={`${fieldIds.preferredRoute}-error`}>{errors.preferredRoute}</span>}
          </fieldset>

          <div className="form-honeypot" aria-hidden="true">
            <label htmlFor={fieldIds.website}>Website</label>
            <input id={fieldIds.website} name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} />
          </div>

          <div className="form-field form-consent">
            <label htmlFor={fieldIds.privacyAccepted}>
              <input
                id={fieldIds.privacyAccepted}
                name="privacyAccepted"
                type="checkbox"
                required
                checked={values.privacyAccepted}
                onChange={(event) => update("privacyAccepted", event.target.checked)}
                aria-invalid={Boolean(errors.privacyAccepted)}
                aria-describedby={errors.privacyAccepted ? `${fieldIds.privacyAccepted}-error` : undefined}
              />
              <span>Ik heb gelezen hoe Digitech Solutions mijn gegevens gebruikt om deze aanvraag te beoordelen en contact met mij op te nemen.</span>
            </label>
            {errors.privacyAccepted && <span className="field-error" id={`${fieldIds.privacyAccepted}-error`}>{errors.privacyAccepted}</span>}
          </div>

          <button className="button button--primary" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Bezig met verzenden..." : form.submitLabel}
          </button>
          <p className="form-privacy">
            {form.privacyCopy} Lees de <a href={form.privacyHref}>privacyverklaring</a>.
          </p>
        </form>

        <aside className="direct-contact" aria-labelledby="direct-contact-heading">
          <h3 id="direct-contact-heading">{form.directHeading}</h3>
          <a href={`mailto:${form.email}`}>{form.email}</a>
          <a href={form.phoneHref}>{form.phoneDisplay}</a>
        </aside>
      </div>
    </section>
  );
}

function FormField({
  label,
  optional = false,
  field,
  error,
  hint,
  children,
}: {
  label: string;
  optional?: boolean;
  field: keyof ProblemExplorationValues;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-field">
      <label htmlFor={fieldIds[field]}>
        {label} {optional ? <span>(optioneel)</span> : <span aria-hidden="true">*</span>}
      </label>
      {hint && <p className="field-hint" id={`${fieldIds[field]}-hint`}>{hint}</p>}
      {children}
      {error && <span className="field-error" id={`${fieldIds[field]}-error`}>{error}</span>}
    </div>
  );
}

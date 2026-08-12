"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import {
  emptyIntroductionValues,
  type IntroductionErrors,
  type IntroductionValues,
  validateIntroduction,
} from "@/lib/forms/introduction";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

const ids: Record<keyof IntroductionValues, string> = {
  name: "introduction-name",
  organization: "introduction-organization",
  email: "introduction-email",
  topic: "introduction-topic",
  privacyAccepted: "introduction-privacy",
  website: "introduction-website",
};

export function IntroductionForm() {
  const { form } = homepageCopy;
  const [values, setValues] = useState(emptyIntroductionValues);
  const [errors, setErrors] = useState<IntroductionErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const startedAt = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => { startedAt.current = Date.now(); }, []);

  function update(field: keyof IntroductionValues, value: string | boolean) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateIntroduction(values);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    setStatus("submitting");
    setSubmitError("");
    try {
      const response = await fetch("/api/introduction", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ values, elapsedMs: Date.now() - startedAt.current }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "De aanvraag kon niet worden verzonden.");
      setValues(emptyIntroductionValues);
      setStatus("success");
      startedAt.current = Date.now();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "De aanvraag kon niet worden verzonden.");
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const errorCount = Object.keys(errors).length;

  return (
    <section id="kennismaking" className="chapter chapter--paper exploration" aria-labelledby="kennismaking-heading">
      <div className="container exploration__heading">
        <p className="section-kicker">Kennismaking</p>
        <h2 id="kennismaking-heading">Vertel kort waarover u wilt overleggen.</h2>
        <p>Vier velden zijn voldoende. Voor een uitgebreide inhoudelijke voorbereiding kunt u ook de probleemverkenning gebruiken.</p>
      </div>
      <div className="container exploration__layout">
        <form className="exploration-form" noValidate onSubmit={submit}>
          {(errorCount > 0 || status === "error" || status === "success") && (
            <div className={`form-status form-status--${status === "success" ? "success" : "error"}`} role={status === "success" ? "status" : "alert"} tabIndex={-1} ref={statusRef}>
              <h3>{errorCount ? "Controleer de gemarkeerde velden." : status === "success" ? "Uw aanvraag is verzonden" : "Verzenden is niet gelukt"}</h3>
              {errorCount ? <ul>{Object.entries(errors).map(([field, message]) => <li key={field}><a href={`#${ids[field as keyof IntroductionValues]}`}>{message}</a></li>)}</ul> : <p>{status === "success" ? "Bedankt. Subor neemt contact met u op om een kennismaking in te plannen." : submitError}</p>}
            </div>
          )}
          <div className="form-grid">
            <Field id={ids.name} label="Naam" error={errors.name}><input id={ids.name} autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${ids.name}-error` : undefined} /></Field>
            <Field id={ids.organization} label="Organisatie" error={errors.organization}><input id={ids.organization} autoComplete="organization" value={values.organization} onChange={(e) => update("organization", e.target.value)} aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? `${ids.organization}-error` : undefined} /></Field>
            <Field id={ids.email} label="Zakelijk e-mailadres" error={errors.email}><input id={ids.email} type="email" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${ids.email}-error` : undefined} /></Field>
          </div>
          <Field id={ids.topic} label="Waarover wilt u kennismaken?" error={errors.topic}><textarea id={ids.topic} rows={4} value={values.topic} onChange={(e) => update("topic", e.target.value)} aria-invalid={Boolean(errors.topic)} aria-describedby={errors.topic ? `${ids.topic}-error` : undefined} /></Field>
          <div className="form-honeypot" aria-hidden="true"><label htmlFor={ids.website}>Website</label><input id={ids.website} tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} /></div>
          <div className="form-field form-consent">
            <label htmlFor={ids.privacyAccepted}><input id={ids.privacyAccepted} type="checkbox" checked={values.privacyAccepted} onChange={(e) => update("privacyAccepted", e.target.checked)} aria-invalid={Boolean(errors.privacyAccepted)} aria-describedby={errors.privacyAccepted ? `${ids.privacyAccepted}-error` : undefined} /><span>Ik heb gelezen hoe Digitech Solutions mijn gegevens gebruikt om contact met mij op te nemen.</span></label>
            {errors.privacyAccepted && <span className="field-error" id={`${ids.privacyAccepted}-error`}>{errors.privacyAccepted}</span>}
          </div>
          <button className="button button--primary" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Bezig met verzenden..." : "Vraag een kennismaking aan"}</button>
          <p className="form-privacy">We gebruiken uw gegevens alleen voor deze aanvraag. Lees de <a href="/privacy">privacyverklaring</a>.</p>
        </form>
        <aside className="direct-contact" aria-labelledby="other-route-heading">
          <h3 id="other-route-heading">Al verder met uw vraag?</h3>
          <p>Gebruik de uitgebreide route als u processen, systemen en gewenste uitkomst vooraf wilt toelichten.</p>
          <a href="/probleemverkenning">Start de probleemverkenning</a>
          <a href={`mailto:${form.email}`}>{form.email}</a>
        </aside>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return <div className="form-field"><label htmlFor={id}>{label} <span aria-hidden="true">*</span></label>{children}{error && <span className="field-error" id={`${id}-error`}>{error}</span>}</div>;
}

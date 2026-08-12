import { createHash } from "node:crypto";

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

import { isIntroductionValues } from "@/lib/forms/introduction";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();

function limited(request: NextRequest) {
  const forwarded = request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for") ?? "unknown";
  const key = createHash("sha256").update(forwarded.split(",")[0]?.trim() || "unknown").digest("hex");
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) { attempts.set(key, { count: 1, resetAt: now + 900_000 }); return false; }
  current.count += 1;
  return current.count > 5;
}

export async function POST(request: NextRequest) {
  if (limited(request)) return NextResponse.json({ ok: false, message: "Er zijn te veel pogingen gedaan. Probeer het over 15 minuten opnieuw." }, { status: 429 });
  let payload: { values?: unknown; elapsedMs?: unknown };
  try { payload = await request.json(); } catch { return NextResponse.json({ ok: false, message: "De aanvraag kon niet worden gelezen." }, { status: 400 }); }
  const candidate = payload.values as { website?: string } | undefined;
  if (candidate?.website) return NextResponse.json({ ok: true });
  if (typeof payload.elapsedMs !== "number" || payload.elapsedMs < 2_500) return NextResponse.json({ ok: false, message: "Het formulier is te snel verzonden. Probeer het opnieuw." }, { status: 400 });
  if (!isIntroductionValues(payload.values)) return NextResponse.json({ ok: false, message: "Controleer de verplichte velden." }, { status: 400 });

  const user = process.env.GOOGLE_SMTP_USER;
  const password = process.env.GOOGLE_SMTP_APP_PASSWORD;
  const recipient = process.env.CONTACT_FORM_RECIPIENT ?? "subor@digitechsolutions.nl";
  if (!user || !password) return NextResponse.json({ ok: false, message: "Online verzending is tijdelijk niet beschikbaar. Neem rechtstreeks contact op via e-mail." }, { status: 503 });

  const values = payload.values;
  try {
    const transporter = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user, pass: password } });
    await transporter.sendMail({
      from: `Digitech Solutions website <${user}>`,
      to: recipient,
      replyTo: values.email,
      subject: `Kennismakingsaanvraag van ${values.organization.replace(/[\r\n\u0000-\u001f\u007f]+/g, " ").trim()}`,
      text: ["Nieuwe kennismakingsaanvraag via digitechsolutions.nl", "", `Naam: ${values.name}`, `Organisatie: ${values.organization}`, `E-mail: ${values.email}`, "", "Onderwerp", values.topic, "", "Privacybevestiging: akkoord met contact over deze aanvraag."].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "De aanvraag kon niet worden verzonden. Probeer het opnieuw of neem rechtstreeks contact op." }, { status: 502 });
  }
}

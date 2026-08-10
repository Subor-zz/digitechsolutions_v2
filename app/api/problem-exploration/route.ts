import { createHash } from "node:crypto";

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

import {
  isProblemExplorationValues,
  type ProblemExplorationValues,
} from "../../../lib/forms/problem-exploration";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MINIMUM_COMPLETION_MS = 2_500;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimits = new Map<string, RateLimitEntry>();

function getRateLimitKey(request: NextRequest) {
  const forwarded = request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for") ?? "unknown";
  const ip = forwarded.split(",")[0]?.trim() || "unknown";
  return createHash("sha256").update(ip).digest("hex");
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimits.get(key);

  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

function singleLine(value: string) {
  return value.replace(/[\r\n\u0000-\u001f\u007f]+/g, " ").trim();
}

function buildMessage(values: ProblemExplorationValues) {
  return [
    "Nieuwe probleemverkenning via digitechsolutions.nl",
    "",
    `Naam: ${values.name}`,
    `Organisatie: ${values.organization}`,
    `Functie: ${values.role}`,
    `E-mail: ${values.email}`,
    `Telefoon: ${values.phone || "Niet opgegeven"}`,
    `Voorkeursroute: ${values.preferredRoute}`,
    "",
    "Waar loopt de organisatie op vast?",
    values.problem,
    "",
    "Wie ondervindt hinder?",
    values.affected,
    "",
    "Betrokken systemen of hulpmiddelen",
    values.systems,
    "",
    "Wat is al geprobeerd?",
    values.attempted || "Niet opgegeven",
    "",
    "Gewenste uitkomst",
    values.outcome,
    "",
    "Privacybevestiging: akkoord met contact over deze aanvraag.",
  ].join("\n");
}

export async function POST(request: NextRequest) {
  if (isRateLimited(getRateLimitKey(request))) {
    return NextResponse.json(
      { ok: false, message: "Er zijn te veel pogingen gedaan. Probeer het over 15 minuten opnieuw." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "De aanvraag kon niet worden gelezen." }, { status: 400 });
  }

  const payload = body as { values?: unknown; elapsedMs?: unknown };
  const values = payload.values as Partial<ProblemExplorationValues> | undefined;

  if (values?.website) {
    return NextResponse.json({ ok: true });
  }

  if (typeof payload.elapsedMs !== "number" || payload.elapsedMs < MINIMUM_COMPLETION_MS) {
    return NextResponse.json(
      { ok: false, message: "Het formulier is te snel verzonden. Controleer je invoer en probeer het opnieuw." },
      { status: 400 },
    );
  }

  if (!isProblemExplorationValues(payload.values)) {
    return NextResponse.json(
      { ok: false, message: "Controleer de verplichte velden en probeer het opnieuw." },
      { status: 400 },
    );
  }

  const validValues = payload.values;

  const smtpUser = process.env.GOOGLE_SMTP_USER;
  const smtpPassword = process.env.GOOGLE_SMTP_APP_PASSWORD;
  const recipient = process.env.CONTACT_FORM_RECIPIENT ?? "subor@digitechsolutions.nl";

  if (!smtpUser || !smtpPassword) {
    return NextResponse.json(
      { ok: false, message: "Online verzending is tijdelijk niet beschikbaar. Neem rechtstreeks contact op via e-mail of telefoon." },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: `Digitech Solutions website <${smtpUser}>`,
      to: recipient,
      replyTo: validValues.email,
      subject: `Probleemverkenning van ${singleLine(validValues.organization)}`,
      text: buildMessage(validValues),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "De aanvraag kon niet worden verzonden. Je invoer is bewaard. Probeer het opnieuw of neem rechtstreeks contact op." },
      { status: 502 },
    );
  }
}

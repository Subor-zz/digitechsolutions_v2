import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

import { POST } from "./route";

const { sendMail, createTransport } = vi.hoisted(() => {
  const send = vi.fn();
  return { sendMail: send, createTransport: vi.fn(() => ({ sendMail: send })) };
});

vi.mock("nodemailer", () => ({
  default: { createTransport },
}));

const validValues = {
  name: "Testpersoon",
  organization: "Voorbeeldorganisatie",
  role: "Product owner",
  email: "test@example.com",
  phone: "",
  problem: "Handmatige overdrachten",
  affected: "Operations",
  systems: "ERP en spreadsheets",
  attempted: "",
  outcome: "Een beheersbare workflow",
  preferredRoute: "Ik weet nog niet welke route past",
  privacyAccepted: true,
  website: "",
};

function request(body: unknown, ip: string) {
  return new NextRequest("https://digitechsolutions.nl/api/problem-exploration", {
    method: "POST",
    headers: { "content-type": "application/json", "x-vercel-forwarded-for": ip },
    body: JSON.stringify(body),
  });
}

describe("POST /api/problem-exploration", () => {
  beforeEach(() => {
    vi.stubEnv("GOOGLE_SMTP_USER", "subor@digitechsolutions.nl");
    vi.stubEnv("GOOGLE_SMTP_APP_PASSWORD", "test-app-password");
    vi.stubEnv("CONTACT_FORM_RECIPIENT", "subor@digitechsolutions.nl");
    sendMail.mockReset().mockResolvedValue({ messageId: "test-message" });
    createTransport.mockClear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("rejects invalid input before sending mail", async () => {
    const response = await POST(request({ values: { ...validValues, email: "ongeldig" }, elapsedMs: 5_000 }, "192.0.2.1"));

    expect(response.status).toBe(400);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("sends a validated request through the configured Workspace account", async () => {
    const response = await POST(request({ values: validValues, elapsedMs: 5_000 }, "192.0.2.2"));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({
      to: "subor@digitechsolutions.nl",
      replyTo: "test@example.com",
      subject: "Probleemverkenning van Voorbeeldorganisatie",
    }));
  });

  it("does not claim success when Workspace rejects the message", async () => {
    sendMail.mockRejectedValueOnce(new Error("SMTP unavailable"));
    const response = await POST(request({ values: validValues, elapsedMs: 5_000 }, "192.0.2.3"));

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual(expect.objectContaining({ ok: false }));
  });
});

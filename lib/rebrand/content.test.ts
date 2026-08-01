import { describe, expect, it } from "vitest";

import {
  bannedMarketingPhrases,
  homepageCopy,
  methodSteps,
  modernizationRoutes,
} from "./content";

const publicCopy = JSON.stringify(homepageCopy).toLowerCase();

describe("rebrand content model", () => {
  it("keeps route and method identifiers unique", () => {
    expect(new Set(modernizationRoutes.map((route) => route.id)).size).toBe(
      modernizationRoutes.length,
    );
    expect(new Set(methodSteps.map((step) => step.id)).size).toBe(methodSteps.length);
  });

  it("contains the complete controlled-delivery sequence", () => {
    expect(methodSteps.map((step) => step.id)).toEqual([
      "scope",
      "map",
      "simplify",
      "build",
      "verify",
      "transfer",
    ]);
  });

  it("does not contain banned marketing phrases", () => {
    for (const phrase of bannedMarketingPhrases) {
      expect(publicCopy).not.toContain(phrase.toLowerCase());
    }
  });

  it("keeps the founder-led qualifier explicit", () => {
    expect(homepageCopy.hero.founderTrustLine).toContain(
      "Je werkt rechtstreeks met Subor Cheung",
    );
    expect(homepageCopy.founder.supporting).toContain("transparant toegevoegd");
  });

  it("keeps editorial statuses out of public copy", () => {
    expect(publicCopy).not.toContain("[bewijs nodig");
    expect(publicCopy).not.toContain("[goedkeuring nodig");
    expect(publicCopy).not.toContain('"status":"definitief"');
  });

  it("keeps deferred result copy central but inactive", () => {
    expect(homepageCopy.result.rendered).toBe(false);
    expect(homepageCopy.result.outcomes).toHaveLength(3);
  });

  it("keeps the prototype scan honest", () => {
    expect(homepageCopy.scan.fallbackCta.href).toMatch(/^mailto:/);
    expect(homepageCopy.scan.prototypeMicrocopy).toContain("geen formulierdata");
    expect(publicCopy).not.toContain("success");
  });

  it("stores mobile variants without requiring extra layout slots", () => {
    expect(homepageCopy.hero.mobileLead.length).toBeGreaterThan(0);
    expect(homepageCopy.hiddenDrag.mobileIntro.length).toBeGreaterThan(0);
    expect(homepageCopy.diagnosis.mobileIntro.length).toBeGreaterThan(0);
    expect(homepageCopy.routes.mobileIntro.length).toBeGreaterThan(0);
    expect(homepageCopy.method.mobileIntro.length).toBeGreaterThan(0);
    expect(homepageCopy.scan.mobileCopy.length).toBeGreaterThan(0);
  });
});

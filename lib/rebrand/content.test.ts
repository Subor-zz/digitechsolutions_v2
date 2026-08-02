import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { bannedMarketingPhrases, homepageCopy, methodSteps, modernizationRoutes } from "./content";

const publicCopy = JSON.stringify(homepageCopy);
const publicCopyLower = publicCopy.toLowerCase();

describe("homepage copy contract", () => {
  it("keeps route and method identifiers unique and complete", () => {
    expect(new Set(modernizationRoutes.map((route) => route.id)).size).toBe(modernizationRoutes.length);
    expect(new Set(methodSteps.map((step) => step.id)).size).toBe(methodSteps.length);
    expect(methodSteps.map((step) => step.id)).toEqual(["scope", "map", "simplify", "build", "verify", "transfer"]);
  });

  it("uses the approved positioning and removes old prototype positioning", () => {
    expect(homepageCopy.hero.headline).toBe("Moderniseer wat verandering tegenhoudt.");
    expect(publicCopyLower).not.toContain("moderniseer wat je organisatie vertraagt");
    expect(publicCopyLower).not.toContain("je werkt rechtstreeks met subor");
    expect(publicCopyLower).not.toContain("rebrandprototype");
    expect(publicCopyLower).not.toContain("geen analytics");
    expect(publicCopyLower).not.toContain("niet geïndexeerd");
  });

  it("does not contain banned marketing phrases", () => {
    for (const phrase of bannedMarketingPhrases) {
      expect(publicCopyLower).not.toContain(phrase.toLowerCase());
    }
  });

  it("states the scan scope and price exactly once", () => {
    expect(publicCopy.match(/€1\.499 exclusief btw/g)).toHaveLength(1);
    expect(homepageCopy.scan.investment).toContain("maximaal drie interviews");
    expect(homepageCopy.scan.copy).toContain("twee werkdagen");
  });

  it("routes every primary CTA to the problem exploration", () => {
    const primaryTargets = [
      homepageCopy.navigation.primaryCta.href,
      homepageCopy.hero.primaryCta.href,
      homepageCopy.scan.primaryCta.href,
      homepageCopy.founder.cta.href,
      homepageCopy.routes.combined.cta.href,
      ...homepageCopy.routes.items.map((route) => route.ctaHref),
    ];
    expect(new Set(primaryTargets)).toEqual(new Set(["#probleemverkenning"]));
  });

  it("has production metadata without route-level noindex", () => {
    expect(homepageCopy.metadata.title).toBe("Workflow- en applicatiemodernisering | Digitech Solutions");
    expect(homepageCopy.metadata.canonical).toBe("https://digitechsolutions.nl/");
    const route = readFileSync(join(process.cwd(), "app/page.tsx"), "utf8");
    const nextConfig = readFileSync(join(process.cwd(), "next.config.ts"), "utf8");
    expect(route).toContain("index: true");
    expect(route).toContain("follow: true");
    expect(nextConfig).not.toContain("noindex");
    expect(nextConfig).not.toContain("/prototype");
    expect(existsSync(join(process.cwd(), "app/prototype/rebrand/page.tsx"))).toBe(false);
  });

  it("uses the approved Google Workspace contact address", () => {
    expect(homepageCopy.form.email).toBe("subor@digitechsolutions.nl");
    expect(homepageCopy.scan.fallbackCta.href).toContain("mailto:subor@digitechsolutions.nl");
    expect(publicCopyLower).not.toContain("info@digitechsolutions.nl");
  });

  it("retains a reduced-motion baseline", () => {
    const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("scroll-behavior: auto");
  });
});

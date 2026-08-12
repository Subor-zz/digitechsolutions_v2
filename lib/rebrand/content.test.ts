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

  it("uses decision-maker language and removes old prototype positioning", () => {
    expect(homepageCopy.hero.headline).toBe("Laat verouderde processen en software je groei niet afremmen.");
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
    expect(homepageCopy.scan.days.flatMap((day) => day.items).join(" ")).toContain("maximaal drie interviews");
    expect(homepageCopy.scan.copy).toContain("twee werkdagen");
  });

  it("offers a short introduction route and a detailed scan route", () => {
    const primaryTargets = [
      homepageCopy.navigation.primaryCta.href,
      homepageCopy.hero.primaryCta.href,
      homepageCopy.scan.primaryCta.href,
      homepageCopy.contact.primaryCta.href,
    ];
    expect(primaryTargets).toEqual([
      "/kennismaking",
      "/kennismaking",
      "/probleemverkenning",
      "/kennismaking",
    ]);
  });

  it("uses the shortened routes and removes the redundant expertise row", () => {
    expect(homepageCopy.routes.items.map((route) => route.statement)).toEqual([
      "Van handwerk naar een beheersbaar proces.",
      "Van kwetsbare software naar een veranderbare applicatie.",
    ]);
    expect(homepageCopy.routes.items.every((route) => route.visibleSignals.length <= 3)).toBe(true);
    expect("combined" in homepageCopy.routes).toBe(false);
    const route = readFileSync(join(process.cwd(), "components/rebrand/RebrandPage.tsx"), "utf8");
    expect(route).not.toContain("combined-route");
  });

  it("uses a decision-oriented final contact heading", () => {
    expect(homepageCopy.contact.headline).toBe("Begin bij het probleem, niet bij de oplossing.");
  });

  it("renders the approved homepage order with tangible proof before the founder", () => {
    const route = readFileSync(join(process.cwd(), "components/rebrand/RebrandPage.tsx"), "utf8");
    const sectionIds = [...route.matchAll(/<section id="([^"]+)"/g)].map((match) => match[1]);
    expect(sectionIds).toEqual(["top", "probleem", "scan", "routes", "werkwijze", "werkproduct", "over-digitech", "contact"]);
    expect(route).not.toContain("ProblemExplorationForm");
  });

  it("does not render duplicate desktop and mobile copy variants", () => {
    const route = readFileSync(join(process.cwd(), "components/rebrand/RebrandPage.tsx"), "utf8");
    expect(route).not.toContain("hero__lede--mobile");
    expect(route).not.toContain("scan__mobile-copy");
    expect(route).not.toContain("routes__mobile-intro");
    expect(route).not.toContain("route-panel__mobile-details");
  });

  it("renders the three proof artifacts in a dedicated evidence grid", () => {
    const route = readFileSync(join(process.cwd(), "components/rebrand/RebrandPage.tsx"), "utf8");
    const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
    expect(homepageCopy.evidence.items).toHaveLength(3);
    expect(route).toContain('className="container routes__grid evidence-grid"');
    expect(css).toContain("grid-template-columns: repeat(3, minmax(0, 1fr))");
  });

  it("keeps consent checkboxes compact and their privacy copy readable", () => {
    const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
    expect(css).toContain('input:not([type="radio"]):not([type="checkbox"])');
    expect(css).toContain("grid-template-columns: 1.25rem minmax(0, 1fr)");
  });

  it("keeps the full form on its dedicated route with one h1 per page", () => {
    const home = readFileSync(join(process.cwd(), "components/rebrand/RebrandPage.tsx"), "utf8");
    const exploration = readFileSync(join(process.cwd(), "app/probleemverkenning/page.tsx"), "utf8");
    expect(home.match(/<h1/g)).toHaveLength(1);
    expect(exploration.match(/<h1/g)).toHaveLength(1);
    expect(exploration).toContain("ProblemExplorationForm");
    expect(exploration).toContain('primaryCtaHref="#probleemverkenning"');
    expect(exploration).toContain("problemExploration.metadata.canonical");
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
    expect(existsSync(join(process.cwd(), "app/probleemverkenning/page.tsx"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app/kennismaking/page.tsx"))).toBe(true);
  });

  it("uses the approved Google Workspace contact address", () => {
    expect(homepageCopy.form.email).toBe("subor@digitechsolutions.nl");
    expect(homepageCopy.scan.fallbackCta.href).toContain("mailto:subor@digitechsolutions.nl");
    expect(publicCopyLower).not.toContain("info@digitechsolutions.nl");
  });

  it("links the legal documents to local routes", () => {
    expect(homepageCopy.form.privacyHref).toBe("/privacy");
    expect(homepageCopy.footer.links).toEqual(expect.arrayContaining([
      { href: "/privacy", label: "Privacyverklaring" },
      { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
    ]));
    expect(existsSync(join(process.cwd(), "app/privacy/page.tsx"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app/algemene-voorwaarden/page.tsx"))).toBe(true);
    expect(readFileSync(join(process.cwd(), "privacyverklaring-digitech-solutions.md"), "utf8")).toContain("# Privacyverklaring Digitech Solutions");
    expect(readFileSync(join(process.cwd(), "algemene-voorwaarden-digitech-solutions.md"), "utf8")).toContain("# Algemene voorwaarden Digitech Solutions");
  });

  it("retains a reduced-motion baseline", () => {
    const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("scroll-behavior: auto");
  });

  it("keeps the solution progression visible in the mobile hero", () => {
    const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
    const mobileCss = css.slice(css.indexOf("@media (max-width: 767px)"));
    const visual = readFileSync(join(process.cwd(), "components/rebrand/HeroSystemMap.tsx"), "utf8");

    expect(mobileCss).not.toMatch(/\.hero-map\s*{\s*display:\s*none/);
    expect(mobileCss).toContain(".hero-map__mobile-list");
    expect(visual).toContain("systemVisual.mobileSteps");
  });
});

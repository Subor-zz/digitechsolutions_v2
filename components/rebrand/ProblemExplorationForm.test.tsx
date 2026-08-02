// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ProblemExplorationForm, validateProblemExploration } from "./ProblemExplorationForm";

afterEach(cleanup);

describe("ProblemExplorationForm", () => {
  it("renders the required fields with accessible labels", () => {
    render(<ProblemExplorationForm />);
    for (const label of [
      "Naam *",
      "Organisatie *",
      "Functie *",
      "Zakelijk e-mailadres *",
      "Waar loopt je organisatie momenteel op vast? *",
      "Wie ondervindt hiervan de meeste hinder? *",
      "Welke systemen of hulpmiddelen zijn hierbij betrokken? *",
      "Wat zou een goede uitkomst voor je organisatie zijn? *",
    ]) {
      expect(screen.getByLabelText(label)).toBeTruthy();
    }
    expect(screen.getByRole("group", { name: /Voorkeursroute/ })).toBeTruthy();
    expect(screen.getByRole("link", { name: "privacyverklaring" }).getAttribute("href")).toBe("https://digitechsolutions.nl/privacy");
    expect(screen.getByRole("link", { name: "subor@digitechsolutions.nl" }).getAttribute("href")).toBe("mailto:subor@digitechsolutions.nl");
  });

  it("validates required fields and malformed email addresses", () => {
    const errors = validateProblemExploration({
      name: "",
      organization: "Digitech",
      role: "IT-manager",
      email: "ongeldig",
      phone: "",
      problem: "",
      affected: "Team operations",
      systems: "ERP",
      attempted: "",
      outcome: "Minder herstelwerk",
      preferredRoute: "Ik weet nog niet welke route past",
      website: "",
    });
    expect(errors.name).toBeTruthy();
    expect(errors.problem).toBeTruthy();
    expect(errors.email).toContain("geldig");
  });

  it("never presents an unconfigured submission as successful", () => {
    render(<ProblemExplorationForm />);
    fireEvent.submit(screen.getByRole("button", { name: "Verstuur de probleemverkenning" }).closest("form")!);
    expect(screen.queryByText(/bedankt|succesvol verzonden/i)).toBeNull();
    expect(screen.getByText("Controleer de gemarkeerde velden.")).toBeTruthy();
  });
});

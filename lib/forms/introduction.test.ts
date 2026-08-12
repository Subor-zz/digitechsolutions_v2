import { describe, expect, it } from "vitest";

import { emptyIntroductionValues, isIntroductionValues, validateIntroduction } from "./introduction";

const validValues = {
  ...emptyIntroductionValues,
  name: "Ada Jansen",
  organization: "Voorbeeld B.V.",
  email: "ada@voorbeeld.nl",
  topic: "Wij willen minder handmatige overdrachten in ons aanvraagproces.",
  privacyAccepted: true,
};

describe("introduction validation", () => {
  it("accepts a complete compact request", () => {
    expect(validateIntroduction(validValues)).toEqual({});
    expect(isIntroductionValues(validValues)).toBe(true);
  });

  it("rejects missing fields and invalid email", () => {
    const errors = validateIntroduction({ ...emptyIntroductionValues, email: "geen-adres" });
    expect(errors.name).toBeDefined();
    expect(errors.organization).toBeDefined();
    expect(errors.email).toMatch(/geldig/);
    expect(errors.topic).toBeDefined();
    expect(errors.privacyAccepted).toBeDefined();
  });

  it("rejects content beyond the public limits", () => {
    expect(validateIntroduction({ ...validValues, topic: "x".repeat(1_501) }).topic).toMatch(/1500/);
  });
});

export type ProblemExplorationValues = {
  name: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  problem: string;
  affected: string;
  systems: string;
  attempted: string;
  outcome: string;
  preferredRoute: string;
  privacyAccepted: boolean;
  website: string;
};

export type ProblemExplorationErrors = Partial<Record<keyof ProblemExplorationValues, string>>;

export const problemExplorationRoutes = [
  "Ik wil eerst kennismaken",
  "Ik wil de Modernization Scan bespreken",
  "Ik zoek ondersteuning bij uitvoering of modernisering",
  "Ik weet nog niet welke route past",
] as const;

export const problemExplorationLimits = {
  name: 120,
  organization: 160,
  role: 120,
  email: 254,
  phone: 40,
  problem: 4_000,
  affected: 2_000,
  systems: 2_000,
  attempted: 2_000,
  outcome: 2_000,
  preferredRoute: 120,
  website: 200,
} as const;

const requiredMessages: Partial<Record<keyof ProblemExplorationValues, string>> = {
  name: "Vul je naam in.",
  organization: "Vul de naam van je organisatie in.",
  role: "Vul je functie in.",
  email: "Vul je zakelijke e-mailadres in.",
  problem: "Beschrijf waar je organisatie op vastloopt.",
  affected: "Beschrijf wie hiervan hinder ondervindt.",
  systems: "Beschrijf welke systemen of hulpmiddelen betrokken zijn.",
  outcome: "Beschrijf wat een goede uitkomst zou zijn.",
  preferredRoute: "Kies een voorkeursroute.",
};

export const emptyProblemExplorationValues: ProblemExplorationValues = {
  name: "",
  organization: "",
  role: "",
  email: "",
  phone: "",
  problem: "",
  affected: "",
  systems: "",
  attempted: "",
  outcome: "",
  preferredRoute: "",
  privacyAccepted: false,
  website: "",
};

export function validateProblemExploration(values: ProblemExplorationValues) {
  const errors: ProblemExplorationErrors = {};

  for (const [field, message] of Object.entries(requiredMessages)) {
    const key = field as keyof ProblemExplorationValues;
    const value = values[key];
    if (typeof value !== "string" || !value.trim()) errors[key] = message;
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Vul een geldig zakelijk e-mailadres in.";
  }

  if (values.preferredRoute && !problemExplorationRoutes.includes(values.preferredRoute as (typeof problemExplorationRoutes)[number])) {
    errors.preferredRoute = "Kies een geldige voorkeursroute.";
  }

  for (const [field, limit] of Object.entries(problemExplorationLimits)) {
    const key = field as keyof typeof problemExplorationLimits;
    if (values[key].length > limit) {
      errors[key] = `Gebruik maximaal ${limit} tekens.`;
    }
  }

  if (!values.privacyAccepted) {
    errors.privacyAccepted = "Bevestig dat je de privacyverklaring hebt gelezen.";
  }

  return errors;
}

export function isProblemExplorationValues(value: unknown): value is ProblemExplorationValues {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;

  return (
    Object.keys(emptyProblemExplorationValues).every((key) => {
      const expected = emptyProblemExplorationValues[key as keyof ProblemExplorationValues];
      return typeof candidate[key] === typeof expected;
    }) && Object.keys(validateProblemExploration(candidate as ProblemExplorationValues)).length === 0
  );
}

export type IntroductionValues = {
  name: string;
  organization: string;
  email: string;
  topic: string;
  privacyAccepted: boolean;
  website: string;
};

export type IntroductionErrors = Partial<Record<keyof IntroductionValues, string>>;

export const introductionLimits = {
  name: 120,
  organization: 160,
  email: 254,
  topic: 1_500,
  website: 200,
} as const;

export const emptyIntroductionValues: IntroductionValues = {
  name: "",
  organization: "",
  email: "",
  topic: "",
  privacyAccepted: false,
  website: "",
};

export function validateIntroduction(values: IntroductionValues) {
  const errors: IntroductionErrors = {};

  if (!values.name.trim()) errors.name = "Vul uw naam in.";
  if (!values.organization.trim()) errors.organization = "Vul de naam van uw organisatie in.";
  if (!values.email.trim()) errors.email = "Vul uw zakelijke e-mailadres in.";
  if (!values.topic.trim()) errors.topic = "Beschrijf kort waarover u wilt kennismaken.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Vul een geldig zakelijk e-mailadres in.";
  }

  for (const [field, limit] of Object.entries(introductionLimits)) {
    const key = field as keyof typeof introductionLimits;
    if (values[key].length > limit) errors[key] = `Gebruik maximaal ${limit} tekens.`;
  }

  if (!values.privacyAccepted) errors.privacyAccepted = "Bevestig dat u de privacyverklaring heeft gelezen.";
  return errors;
}

export function isIntroductionValues(value: unknown): value is IntroductionValues {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  return (
    Object.keys(emptyIntroductionValues).every((key) => {
      const expected = emptyIntroductionValues[key as keyof IntroductionValues];
      return typeof candidate[key] === typeof expected;
    }) && Object.keys(validateIntroduction(candidate as IntroductionValues)).length === 0
  );
}

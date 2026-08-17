import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "https://digitechsolutions.nl/",
    "https://digitechsolutions.nl/workflowmodernisering",
    "https://digitechsolutions.nl/applicatiemodernisering",
    "https://digitechsolutions.nl/modernization-scan",
    "https://digitechsolutions.nl/tarieven",
    "https://digitechsolutions.nl/over",
    "https://digitechsolutions.nl/cases/ai-documentvertaling",
  ].map((url) => ({ url }));
}

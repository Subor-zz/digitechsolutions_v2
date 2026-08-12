import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://digitechsolutions.nl/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://digitechsolutions.nl/modernization-scan",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://digitechsolutions.nl/workflowmodernisering",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://digitechsolutions.nl/applicatiemodernisering",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://digitechsolutions.nl/kennismaking",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://digitechsolutions.nl/tarieven",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://digitechsolutions.nl/probleemverkenning",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

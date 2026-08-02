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
  ];
}

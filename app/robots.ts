import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://digitechsolutions.nl/sitemap.xml",
    host: "https://digitechsolutions.nl",
  };
}

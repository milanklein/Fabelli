import type { MetadataRoute } from "next";

const BASE_URL = "https://fabelli.sk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/kvalifikacny-formular/dakujeme"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

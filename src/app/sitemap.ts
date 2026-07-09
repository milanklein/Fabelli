import type { MetadataRoute } from "next";
import { caseStudies, LIVE_SLUGS } from "@/lib/case-studies";

const BASE_URL = "https://fabelli.sk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/pripadove-studie`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kvalifikacny-formular`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies
    .filter((caseStudy) => LIVE_SLUGS.has(caseStudy.slug))
    .map((caseStudy) => ({
      url: `${BASE_URL}/pripadove-studie/${caseStudy.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...caseStudyRoutes];
}

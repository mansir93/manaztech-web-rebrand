import type { MetadataRoute } from "next"
import { services } from "@/lib/services-data"

const SITE_URL = "https://manaztech.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceRoutes,
  ]
}
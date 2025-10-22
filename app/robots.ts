import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/checkout"],
    },
    sitemap: "https://kaza-jewellery.com/sitemap.xml",
  }
}

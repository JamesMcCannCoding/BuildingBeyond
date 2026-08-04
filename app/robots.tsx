import type { MetadataRoute } from "next";

const siteUrl = "https://www.buildingbeyond2032.com.au";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
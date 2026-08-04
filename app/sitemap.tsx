import type { MetadataRoute } from "next";

const siteUrl = "https://www.buildingbeyond2032.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/find-work",
    "/learn-more",
    "/concept",
    "/about-us",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
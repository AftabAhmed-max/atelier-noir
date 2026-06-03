import type { MetadataRoute } from "next";

const baseUrl = "https://ateliernoir.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/collections", "/services", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}

import { MetadataRoute } from "next";
import { posts } from "./porady/lib/posts";

const BASE_URL = "https://www.zielonywarsztat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Strony usług — najważniejsze poza homepage
    {
      url: `${BASE_URL}/pielegnacja-trawnikow-szczecin`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/przycinanie-krzewow-i-drzewek-szczecin`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wycinki-kompleksowe-szczecin`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nasadzanie-i-przesadzanie-roslin-szczecin`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/zakladanie-ogrodow-szczecin`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kostka-brukowa-szczecin`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Strony pomocnicze
    {
      url: `${BASE_URL}/porady`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/jak-pracujemy`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/porady/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

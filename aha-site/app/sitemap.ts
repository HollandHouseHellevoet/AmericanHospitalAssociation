import profilesData from "@/data/profiles.json";

export const dynamic = "force-static";

interface Profile {
  slug: string;
}

const profiles = profilesData as Profile[];

export default function sitemap() {
  const base = "https://aha.rojasreport.com";

  const staticPages = [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/powermap/`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/about/`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/privacy/`, lastModified: new Date(), priority: 0.3 },
  ];

  const profilePages = profiles.map((p) => ({
    url: `${base}/profiles/${p.slug}/`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...staticPages, ...profilePages];
}

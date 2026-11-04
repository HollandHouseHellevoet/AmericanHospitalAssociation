import type { Metadata } from "next";
import profilesData from "@/data/profiles.json";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const layoutProfiles = profilesData as { slug: string; name: string; status?: string }[];
const CURRENT_COUNT = layoutProfiles.filter((p) => p.status !== "former").length;

export const metadata: Metadata = {
  title: "AHA Intelligence | The Rojas Report",
  description:
    "The definitive intelligence database on the American Hospital Association's board of directors and executive team. Conflicts of interest, lobbying expenditures, and red flags sourced and cited.",
  alternates: {
    canonical: "https://aha.rojasreport.com/",
  },
  openGraph: {
    title: "AHA Intelligence | The Rojas Report",
    description:
      `${CURRENT_COUNT} individuals. Every conflict. Every dollar. Every red flag. The definitive intelligence record on who controls American hospital policy.`,
    url: "https://aha.rojasreport.com/",
    siteName: "The Rojas Report",
    images: [
      {
        url: "https://aha.rojasreport.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AHA Intelligence - The Rojas Report",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AHA Intelligence | The Rojas Report",
    description:
      `${CURRENT_COUNT} individuals. Every conflict. Every dollar. Every red flag. The definitive intelligence record on who controls American hospital policy.`,
    images: ["https://aha.rojasreport.com/og-image.png"],
    site: "@TheRojasReport",
  },
  verification: {
    google: "MNL9i5bYZRFH2AbVPNv4HcMARXUn467LSSUIiCYErNc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AHA Intelligence | The Rojas Report",
  url: "https://aha.rojasreport.com/",
  description:
    "Primary source intelligence on the American Hospital Association -- board conflicts, lobbying expenditures, PAC architecture, and institutional capture.",
  publisher: {
    "@type": "Organization",
    name: "The Rojas Report",
    url: "https://rojasreport.com",
    founder: {
      "@type": "Person",
      name: "Dutch Rojas",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rojas Media LLC",
  url: "https://rojasreport.com",
  logo: "https://rojasreport.com/logo.png",
  sameAs: [
    "https://twitter.com/TheRojasReport",
    "https://linkedin.com/in/dutch-rojas",
    "https://substack.com/@therojasreport",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dutch Rojas",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Rojas Media LLC",
  },
  url: "https://rojasreport.com",
  sameAs: [
    "https://twitter.com/TheRojasReport",
    "https://linkedin.com/in/dutch-rojas",
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AHA Board Member Intelligence Profiles",
  description:
    "Documented financial conflicts, compensation, and lobbying relationships of American Hospital Association board members and executives",
  numberOfItems: layoutProfiles.length,
  itemListElement: [...layoutProfiles]
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://aha.rojasreport.com/profiles/${p.slug}`,
    })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Sans+3:wght@400;600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        {/* TODO: Analytics */}
        {/* Platform: [TBD] */}
        {/* Measurement ID: [TBD] */}
        {/* Install package and add script tag here when confirmed. */}
      </head>
      <body className="bg-navy text-cream font-source antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

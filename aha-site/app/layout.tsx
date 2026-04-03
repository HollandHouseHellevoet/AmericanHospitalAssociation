import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
});

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
      "27 individuals. Every conflict. Every dollar. Every red flag. The definitive intelligence record on who controls American hospital policy.",
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
      "27 individuals. Every conflict. Every dollar. Every red flag. The definitive intelligence record on who controls American hospital policy.",
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
    "Documented financial conflicts, compensation, and lobbying relationships of American Hospital Association board members",
  numberOfItems: 27,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Albert", url: "https://aha.rojasreport.com/profiles/albert" },
    { "@type": "ListItem", position: 2, name: "Allen", url: "https://aha.rojasreport.com/profiles/allen" },
    { "@type": "ListItem", position: 3, name: "Barwis", url: "https://aha.rojasreport.com/profiles/barwis" },
    { "@type": "ListItem", position: 4, name: "Boom", url: "https://aha.rojasreport.com/profiles/boom" },
    { "@type": "ListItem", position: 5, name: "Coffman", url: "https://aha.rojasreport.com/profiles/coffman" },
    { "@type": "ListItem", position: 6, name: "DeRienzo", url: "https://aha.rojasreport.com/profiles/derienzo" },
    { "@type": "ListItem", position: 7, name: "Fish", url: "https://aha.rojasreport.com/profiles/fish" },
    { "@type": "ListItem", position: 8, name: "Freesedecker", url: "https://aha.rojasreport.com/profiles/freesedecker" },
    { "@type": "ListItem", position: 9, name: "Gallagher", url: "https://aha.rojasreport.com/profiles/gallagher" },
    { "@type": "ListItem", position: 10, name: "Gassen", url: "https://aha.rojasreport.com/profiles/gassen" },
    { "@type": "ListItem", position: 11, name: "Glasgo", url: "https://aha.rojasreport.com/profiles/glasgo" },
    { "@type": "ListItem", position: 12, name: "Golder", url: "https://aha.rojasreport.com/profiles/golder" },
    { "@type": "ListItem", position: 13, name: "Hancock", url: "https://aha.rojasreport.com/profiles/hancock" },
    { "@type": "ListItem", position: 14, name: "Hirsch", url: "https://aha.rojasreport.com/profiles/hirsch" },
    { "@type": "ListItem", position: 15, name: "Hood", url: "https://aha.rojasreport.com/profiles/hood" },
    { "@type": "ListItem", position: 16, name: "Hrobsky", url: "https://aha.rojasreport.com/profiles/hrobsky" },
    { "@type": "ListItem", position: 17, name: "Hughes", url: "https://aha.rojasreport.com/profiles/hughes" },
    { "@type": "ListItem", position: 18, name: "Ozuah", url: "https://aha.rojasreport.com/profiles/ozuah" },
    { "@type": "ListItem", position: 19, name: "Peters", url: "https://aha.rojasreport.com/profiles/peters" },
    { "@type": "ListItem", position: 20, name: "Pollack", url: "https://aha.rojasreport.com/profiles/pollack" },
    { "@type": "ListItem", position: 21, name: "Shannon", url: "https://aha.rojasreport.com/profiles/shannon" },
    { "@type": "ListItem", position: 22, name: "Slubowski", url: "https://aha.rojasreport.com/profiles/slubowski" },
    { "@type": "ListItem", position: 23, name: "Sutton-Wallace", url: "https://aha.rojasreport.com/profiles/suttonwallace" },
    { "@type": "ListItem", position: 24, name: "Trestman", url: "https://aha.rojasreport.com/profiles/trestman" },
    { "@type": "ListItem", position: 25, name: "Ugwueke", url: "https://aha.rojasreport.com/profiles/ugwueke" },
    { "@type": "ListItem", position: 26, name: "Van Houweling", url: "https://aha.rojasreport.com/profiles/vanhouweling" },
    { "@type": "ListItem", position: 27, name: "Vissers", url: "https://aha.rojasreport.com/profiles/vissers" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <meta name="robots" content="index, follow" />
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

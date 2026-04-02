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
    site: "@RojasReport",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy text-cream font-source antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

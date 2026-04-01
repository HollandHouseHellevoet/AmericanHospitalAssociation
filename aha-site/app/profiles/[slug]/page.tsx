import { Metadata } from "next";
import Link from "next/link";
import profilesData from "@/data/profiles.json";
import RedFlagCallout from "@/components/RedFlagCallout";
import ShareDossierClient from "@/components/ShareDossierClient";

interface Profile {
  slug: string;
  name: string;
  title: string;
  organization: string;
  role: string;
  state: string;
  systemType: string;
  affiliations: string[];
  financial: string[];
  lobbying: string[];
  revolvingDoor: string[];
  homeSystemRecord: string[];
  litigation: string[];
  redFlags: string[];
  patternSummary: string;
  redFlagCount: number;
  sources: string[];
}

const profiles = profilesData as Profile[];

export async function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profile = profiles.find((p) => p.slug === slug);
  if (!profile) return {};

  const firstFlag = profile.redFlags[0] || profile.patternSummary || "";
  const description = `${firstFlag} ${profile.patternSummary}`.slice(0, 155);

  return {
    title: `${profile.name || slug} -- AHA Intelligence Dossier | The Rojas Report`,
    description,
    openGraph: {
      title: `${profile.name || slug} -- AHA Intelligence Dossier`,
      description,
      url: `https://aha.rojasreport.com/profiles/${slug}/`,
    },
  };
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <details className="border border-border mb-3 group" open>
      <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-source font-semibold text-cream hover:text-orange transition-colors list-none" style={{ fontSize: "14px" }}>
        {title}
        <svg
          className="w-4 h-4 text-muted group-open:rotate-180 transition-transform flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-4 pb-4">
        {items.length > 0 ? (
          <ul className="space-y-2 mt-2">
            {items.map((item, i) => (
              <li key={i} className="font-source text-cream leading-relaxed flex gap-2" style={{ fontSize: "15px" }}>
                <span className="text-orange mt-0.5 flex-shrink-0">&#8226;</span>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-source text-muted italic mt-2" style={{ fontSize: "14px" }}>
            Not located in available sources.
          </p>
        )}
      </div>
    </details>
  );
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = profiles.find((p) => p.slug === slug);

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-muted">Profile not found.</p>
      </div>
    );
  }

  const related = profiles
    .filter((p) => p.slug !== profile.slug && p.role === profile.role)
    .sort((a, b) => b.redFlagCount - a.redFlagCount)
    .slice(0, 3);

  const tweetText = encodeURIComponent(
    `${profile.name} -- ${(profile.redFlags[0] || profile.patternSummary || "").slice(0, 100)} Full dossier: aha.rojasreport.com/profiles/${profile.slug}/ via @dutchrojas`
  );

  // JSON-LD
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    worksFor: {
      "@type": "Organization",
      name: profile.organization,
    },
    description: profile.patternSummary,
    url: `https://aha.rojasreport.com/profiles/${profile.slug}/`,
  };

  const faqJsonLd =
    profile.redFlags.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: `What are the red flags for ${profile.name}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: profile.redFlags.join(". "),
              },
            },
          ],
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="font-source text-muted mb-8" style={{ fontSize: "13px" }}>
          <Link href="/" className="hover:text-cream transition-colors">Home</Link>
          <span className="mx-2 text-border">/</span>
          <span>Profiles</span>
          <span className="mx-2 text-border">/</span>
          <span className="text-cream">{profile.name || profile.slug}</span>
        </nav>

        {/* Hero */}
        <div className="mb-12 border-b border-border pb-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-cormorant font-semibold text-cream mb-2" style={{ fontSize: "48px" }}>
                {profile.name || profile.slug}
              </h1>
              <p className="font-source text-muted" style={{ fontSize: "16px" }}>
                {profile.title}
                {profile.title && profile.organization ? " | " : ""}
                {profile.organization}
              </p>
            </div>
            <span className="bg-orange/15 border border-orange text-orange font-source font-semibold px-5 py-2.5 rounded-full" style={{ fontSize: "15px" }}>
              {profile.redFlagCount} Red Flags
            </span>
          </div>
        </div>

        {/* Two column layout */}
        <div className="flex gap-10 flex-col lg:flex-row">
          {/* Main content — 65% */}
          <div className="flex-1 min-w-0">
            {/* Collapsible sections */}
            <Section title="Affiliations" items={profile.affiliations} />
            <Section title="Financial / Compensation" items={profile.financial} />
            <Section title="Lobbying and Political" items={profile.lobbying} />
            <Section title="Revolving Door" items={profile.revolvingDoor} />
            <Section title="Home System Record" items={profile.homeSystemRecord} />
            <Section title="Litigation and Scrutiny" items={profile.litigation} />

            {/* Red Flags — always visible, not collapsible */}
            {profile.redFlags.length > 0 && (
              <div className="mt-8 mb-8">
                <h2
                  className="font-cormorant font-semibold mb-4"
                  style={{ fontSize: "28px", color: "#EB6E2C" }}
                >
                  Red Flags
                </h2>
                {profile.redFlags.map((flag, i) => (
                  <RedFlagCallout key={i} text={flag} />
                ))}
              </div>
            )}

            {/* Pattern Summary */}
            {profile.patternSummary && (
              <div
                className="mt-8 border-l-4 border-orange px-6 py-6"
                style={{ backgroundColor: "#1e3040" }}
              >
                <p
                  className="font-source text-orange uppercase tracking-widest font-semibold mb-3"
                  style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  Pattern Summary
                </p>
                <p
                  className="font-cormorant italic text-cream leading-relaxed"
                  style={{ fontSize: "24px" }}
                >
                  {profile.patternSummary}
                </p>
              </div>
            )}

            {/* Sources */}
            {profile.sources.length > 0 && (
              <div className="mt-10">
                <h2 className="font-cormorant text-xl font-semibold text-cream mb-4">
                  Sources and Citations
                </h2>
                <ol className="space-y-2">
                  {profile.sources.map((url, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-source text-muted flex-shrink-0" style={{ fontSize: "13px" }}>
                        {i + 1}.
                      </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-source text-muted hover:text-orange break-all transition-colors"
                        style={{ fontSize: "13px" }}
                      >
                        {url}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Sidebar — 35% */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              <ShareDossierClient
                name={profile.name}
                slug={profile.slug}
                tweetText={tweetText}
              />

              {related.length > 0 && (
                <div className="bg-card border border-border p-4">
                  <h3
                    className="font-source text-muted uppercase tracking-widest mb-3"
                    style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                  >
                    Related Profiles
                  </h3>
                  <ul className="space-y-4">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/profiles/${r.slug}/`}
                          className="block group"
                        >
                          <p className="font-source text-sm text-cream font-semibold group-hover:text-orange transition-colors">
                            {r.name || r.slug}
                          </p>
                          <p className="font-source text-muted mt-0.5" style={{ fontSize: "12px" }}>
                            {r.redFlagCount} flags
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

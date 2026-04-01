"use client";
import { useEffect, useState } from "react";
import powermapData from "@/data/powermap.json";
import ShareFinding from "@/components/ShareFinding";

interface Powermap {
  lobbyingFootprint: string;
  pacArchitecture: string;
  revolvingDoorMap: string;
  institutionalCapture: string;
  charityCaregap: string;
  bottomLine: string;
}

const powermap = powermapData as Powermap;

const SECTION_STATS: Record<string, { value: string; label: string }[]> = {
  "lobbying-footprint": [
    { value: "$29M+", label: "2024 record annual spend" },
    { value: "$7M", label: "Q1 2025 single quarter" },
    { value: "32%", label: "Above historical quarterly avg" },
  ],
  "pac-architecture": [
    { value: "$3.77M", label: "AHAPAC raised 2023-24 cycle" },
    { value: "$3.36M", label: "Distributed to both parties" },
    { value: "$1.83M", label: "Outside spending" },
  ],
  "revolving-door": [
    { value: "15+", label: "Former federal officials employed" },
    { value: "4", label: "Agencies: HHS, DOJ, CMS, Congress" },
    { value: "100%", label: "Bipartisan access maintained" },
  ],
  "institutional-capture": [
    { value: "$1.6M", label: "Trinity Health federal lobbying 2024" },
    { value: "73%", label: "Sanford lobbying spend increase" },
    { value: "$960K", label: "Sanford 2024 from $560K in 2020" },
  ],
  "charity-care-gap": [
    { value: "27%", label: "Hospitals fully compliant 2021 CMS" },
    { value: "$50M", label: "340B profits one system one year" },
    { value: "$6,151", label: "Houston Methodist 30-min PA visit" },
  ],
  "bottom-line": [
    { value: "$140-180B", label: "Site-neutral reform blocked" },
    { value: "15+ yrs", label: "Physician-owned hospital ban" },
    { value: "2x", label: "Price transparency suits lost" },
  ],
};

const sections = [
  { id: "lobbying-footprint", label: "Lobbying Footprint", key: "lobbyingFootprint" as keyof Powermap,
    verdict: "AHA spent a record $29M in 2024 timed directly to active site-neutral legislation threatening its members core revenue model." },
  { id: "pac-architecture", label: "PAC Architecture", key: "pacArchitecture" as keyof Powermap,
    verdict: "AHAPAC plays both sides: $3.36M distributed to Democrats and Republicans alike. Not ideology. Pure access." },
  { id: "revolving-door", label: "Revolving Door Map", key: "revolvingDoorMap" as keyof Powermap,
    verdict: "AHA's influence machine is staffed by former officials from the very agencies that regulate hospitals." },
  { id: "institutional-capture", label: "Institutional Capture", key: "institutionalCapture" as keyof Powermap,
    verdict: "AHA board members run the systems that benefit directly from every reform AHA kills then return to set AHA strategy." },
  { id: "charity-care-gap", label: "Charity Care Gap", key: "charityCaregap" as keyof Powermap,
    verdict: "AHA members claim billions in community benefit while lobbying against the reforms that would require them to deliver it." },
  { id: "bottom-line", label: "Bottom Line", key: "bottomLine" as keyof Powermap,
    verdict: "AHA's $29M lobbying machine has successfully blocked or weakened every major hospital reform of the last decade." },
];

function parseSection(raw: string): string[] {
  const lines = raw.split("\n");
  const bullets: string[] = [];
  const prose: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    const bm = trimmed.match(/^[-*]\s+(.+)/);
    if (bm) {
      const clean = bm[1].replace(/\*\*/g, "").replace(/`/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
      if (clean.length > 20) bullets.push(clean);
    } else if (trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("|") && !trimmed.match(/^---/)) {
      const clean = trimmed.replace(/\*\*/g, "").replace(/#{1,6}\s/g, "").replace(/`/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
      if (clean.length > 30) prose.push(clean);
    }
  }
  if (bullets.length >= 3) return bullets.slice(0, 7);
  return prose.join(" ").split(/\.\s+/).map(s => s.trim()).filter(s => s.length > 40).slice(0, 6);
}

export default function PowerMapPage() {
  const [activeSection, setActiveSection] = useState("lobbying-footprint");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1600&q=80')" }}>
        <div className="absolute inset-0" style={{ background: "rgba(17,30,43,0.85)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">
          <span className="inline-block border border-orange text-orange font-source text-xs uppercase tracking-widest px-3 py-1 mb-8">
            Intelligence Briefing
          </span>
          <h1 className="font-cormorant font-semibold text-cream leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", maxWidth: "700px" }}>
            The AHA Power Map
          </h1>
          <p className="font-source text-muted" style={{ fontSize: "20px", maxWidth: "520px" }}>
            The structural anatomy of the most powerful hospital lobbying operation in America.
          </p>
        </div>
        <div className="relative border-t border-white/10" style={{ background: "rgba(10,20,30,0.65)" }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "$29M+", label: "Annual AHA Lobbying Spend" },
              { value: "$3.77M", label: "AHAPAC Per Cycle" },
              { value: "$140-180B", label: "Site-Neutral Payments Blocked" },
              { value: "15+ Years", label: "Physician-Owned Hospital Ban" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-6 first:pl-0">
                <p className="font-cormorant font-semibold" style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)", color: "#EB6E2C" }}>
                  {stat.value}
                </p>
                <p className="font-source text-muted uppercase tracking-widest mt-1" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex gap-12">
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <nav className="sticky top-24">
              <p className="font-source text-muted uppercase tracking-widest mb-4" style={{ fontSize: "11px", letterSpacing: "0.15em" }}>Contents</p>
              <ul className="space-y-1">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className={`block font-source text-sm py-2 border-l-2 pl-3 transition-colors ${
                        activeSection === s.id ? "border-orange text-cream" : "border-border text-muted hover:text-cream hover:border-orange/50"}`}>
                      <span className="text-orange mr-2" style={{ fontSize: "11px" }}>{String(i + 1).padStart(2, "0")}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="flex-1 min-w-0">
            {sections.map((section, i) => {
              const rawText = powermap[section.key];
              const text = typeof rawText === "string" ? rawText : "";
              const bullets = parseSection(text);
              const isBottomLine = section.id === "bottom-line";
              const stats = SECTION_STATS[section.id] || [];
              return (
                <section key={section.id} id={section.id} className="mb-20 scroll-mt-24">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-source text-orange uppercase tracking-widest font-semibold" style={{ fontSize: "11px", letterSpacing: "0.15em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ShareFinding sectionName={section.label} />
                  </div>
                  <h2 className="font-cormorant font-semibold text-cream mb-5" style={{ fontSize: isBottomLine ? "2.4rem" : "2rem" }}>
                    {section.label}
                  </h2>
                  <p className="font-cormorant italic leading-snug mb-6"
                    style={{ fontSize: "1.2rem", color: "#c8b89a", borderLeft: "3px solid #EB6E2C", paddingLeft: "1rem" }}>
                    {section.verdict}
                  </p>
                  {stats.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-7">
                      {stats.map((stat) => (
                        <div key={stat.label} className="border border-orange/30 px-4 py-3" style={{ backgroundColor: "rgba(235,110,44,0.07)" }}>
                          <p className="font-cormorant font-semibold" style={{ fontSize: "1.5rem", color: "#EB6E2C" }}>{stat.value}</p>
                          <p className="font-source text-muted uppercase tracking-wide" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-3 mb-8">
                    {bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-orange flex-shrink-0 mt-1" style={{ fontSize: "10px" }}>&#9658;</span>
                        <p className="font-source text-cream leading-relaxed" style={{ fontSize: "15px" }}>{bullet}</p>
                      </li>
                    ))}
                  </ul>
                  {isBottomLine && (
                    <blockquote className="border-l-4 border-orange px-6 py-6 mt-6" style={{ backgroundColor: "#1e3040" }}>
                      <p className="font-cormorant italic text-cream leading-relaxed" style={{ fontSize: "1.35rem" }}>
                        AHA's $29 million lobbying machine has blocked or weakened every major hospital reform of the last decade. Q1 2025's $7 million signals AHA sees the current Congress as a live threat and is spending accordingly.
                      </p>
                    </blockquote>
                  )}
                  {!isBottomLine && <div className="border-t border-border mt-10" />}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import powermapData from "@/data/powermap.json";
import PullQuote from "@/components/PullQuote";
import ShareFinding from "@/components/ShareFinding";

interface Powermap {
  lobbyingFootprint: string;
  pacArchitecture: string;
  revolvingDoorMap: string;
  institutionalCapture: string;
  charityCaregap: string;
  bottomLine: string;
  keyStat1: { value: string; label: string };
  keyStat2: { value: string; label: string };
  keyStat3: { value: string; label: string };
}

const powermap = powermapData as Powermap;

const sections = [
  { id: "lobbying-footprint", label: "Lobbying Footprint", key: "lobbyingFootprint" as keyof Powermap },
  { id: "pac-architecture", label: "PAC Architecture", key: "pacArchitecture" as keyof Powermap },
  { id: "revolving-door", label: "Revolving Door Map", key: "revolvingDoorMap" as keyof Powermap },
  { id: "institutional-capture", label: "Institutional Capture", key: "institutionalCapture" as keyof Powermap },
  { id: "charity-care-gap", label: "Charity Care Gap", key: "charityCaregap" as keyof Powermap },
  { id: "bottom-line", label: "Bottom Line", key: "bottomLine" as keyof Powermap },
];

function extractPullQuote(text: string): string {
  const sentences = text.split(/\.\s+/);
  // Pick the longest sentence as the pull quote candidate
  return sentences.reduce((a, b) => (b.length > a.length ? b : a), "") + ".";
}

export default function PowerMapPage() {
  const [activeSection, setActiveSection] = useState("lobbying-footprint");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="mb-16 max-w-3xl">
        <p className="text-xs text-orange uppercase tracking-widest font-source mb-3">Intelligence File</p>
        <h1 className="font-cormorant text-5xl font-semibold text-cream mb-4">The AHA Power Map</h1>
        <p className="text-muted text-lg leading-relaxed">
          The structural anatomy of the most powerful hospital lobbying operation in America.
        </p>
      </div>

      <div className="flex gap-12">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <nav className="sticky top-24">
            <p className="text-xs text-muted uppercase tracking-widest mb-4 font-source">Contents</p>
            <ul className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block text-sm py-1 border-l-2 pl-3 transition-colors ${
                      activeSection === s.id
                        ? "border-orange text-cream"
                        : "border-border text-muted hover:text-cream hover:border-orange/50"
                    }`}
                  >
                    <span className="text-xs text-orange mr-1">{String(i + 1).padStart(2, "0")}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {sections.map((section, i) => {
            const rawText = powermap[section.key];
            const text = typeof rawText === "string" ? rawText : "";
            const paragraphs = text.split(/\n\n+/).filter(Boolean);
            const pullQuote = extractPullQuote(text);
            const isBottomLine = section.id === "bottom-line";

            return (
              <section
                key={section.id}
                id={section.id}
                className={`mb-20 scroll-mt-24 ${isBottomLine ? "bg-card border border-border rounded-xl p-8" : ""}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs text-orange uppercase tracking-widest font-source font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className={`font-cormorant font-semibold text-cream mt-1 ${isBottomLine ? "text-4xl" : "text-3xl"}`}>
                      {section.label}
                    </h2>
                  </div>
                  <ShareFinding sectionName={section.label} />
                </div>

                {paragraphs.map((para, j) => (
                  <p key={j} className={`text-cream leading-relaxed mb-4 ${isBottomLine ? "text-lg" : "text-base"}`}>
                    {para.trim()}
                  </p>
                ))}

                {text.length > 100 && <PullQuote text={pullQuote} />}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

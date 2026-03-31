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

function cleanText(raw: string): string {
  return raw
    .replace(/\*\*/g, "")
    .replace(/#{1,6}\s/g, "")
    .replace(/\|/g, " ")
    .replace(/---+/g, "")
    .replace(/--/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`/g, "")
    .trim();
}

function extractPullQuote(text: string): string {
  const sentences = text.split(/\.\s+/);
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
    <>
      {/* Hero — full-bleed with background image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1600')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(17, 30, 43, 0.82)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <span className="inline-block border border-orange text-orange font-source text-xs uppercase tracking-widest px-3 py-1 mb-8">
            Intelligence File
          </span>
          <h1
            className="font-cormorant font-semibold text-cream leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", maxWidth: "700px" }}
          >
            The AHA Power Map
          </h1>
          <p
            className="font-source text-muted"
            style={{ fontSize: "20px", maxWidth: "540px" }}
          >
            The structural anatomy of the most powerful hospital lobbying operation in America.
          </p>
        </div>
      </section>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex gap-12">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <nav className="sticky top-24">
              <p
                className="font-source text-muted uppercase tracking-widest mb-4"
                style={{ fontSize: "11px", letterSpacing: "0.15em" }}
              >
                Contents
              </p>
              <ul className="space-y-2">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block font-source text-sm py-1 border-l-2 pl-3 transition-colors ${
                        activeSection === s.id
                          ? "border-orange text-cream"
                          : "border-border text-muted hover:text-cream hover:border-orange/50"
                      }`}
                    >
                      <span className="text-orange mr-1" style={{ fontSize: "11px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
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
              const text = typeof rawText === "string" ? cleanText(rawText) : "";
              const paragraphs = text.split(/\n\n+/).filter(Boolean);
              const pullQuote = extractPullQuote(text);
              const isBottomLine = section.id === "bottom-line";

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={`mb-20 scroll-mt-24 ${isBottomLine ? "border border-border p-8" : ""}`}
                  style={isBottomLine ? { backgroundColor: "#243444" } : {}}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className="font-source text-orange uppercase tracking-widest font-semibold"
                        style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2
                        className={`font-cormorant font-semibold text-cream mt-1 ${
                          isBottomLine ? "text-4xl" : "text-3xl"
                        }`}
                      >
                        {section.label}
                      </h2>
                    </div>
                    <ShareFinding sectionName={section.label} />
                  </div>

                  {paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className={`font-source text-cream leading-relaxed mb-4 ${
                        isBottomLine ? "text-lg" : "text-base"
                      }`}
                    >
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
    </>
  );
}

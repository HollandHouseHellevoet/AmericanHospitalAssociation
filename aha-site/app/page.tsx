"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import profilesData from "@/data/profiles.json";
import powermapData from "@/data/powermap.json";
import StatBlock from "@/components/StatBlock";
import ProfileCard from "@/components/ProfileCard";
import FilterBar from "@/components/FilterBar";

const profiles = profilesData as Profile[];
const powermap = powermapData as Powermap;

interface Profile {
  slug: string;
  name: string;
  title: string;
  organization: string;
  role: string;
  state: string;
  patternSummary: string;
  redFlagCount: number;
  redFlags: string[];
}

interface Powermap {
  bottomLine: string;
  keyStat1: { value: string; label: string };
  keyStat2: { value: string; label: string };
  keyStat3: { value: string; label: string };
  [key: string]: unknown;
}

export default function HomePage() {
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortBy, setSortBy] = useState("redflags");

  const maxRedFlags = Math.max(...profiles.map((p) => p.redFlagCount));

  const filtered = useMemo(() => {
    let result = [...profiles];
    if (roleFilter !== "All") {
      result = result.filter((p) =>
        roleFilter === "C-Suite"
          ? p.role === "csuite" || p.role === "c-suite"
          : p.role === "board"
      );
    }
    if (sortBy === "redflags") {
      result.sort((a, b) => b.redFlagCount - a.redFlagCount);
    } else if (sortBy === "alpha") {
      result.sort((a, b) => (a.name || a.slug).localeCompare(b.name || b.slug));
    } else if (sortBy === "state") {
      result.sort((a, b) => (a.state || "").localeCompare(b.state || ""));
    }
    return result;
  }, [roleFilter, sortBy]);

  // Extract the most damning sentence from bottomLine
  const bottomLineSentence = powermap.bottomLine
    ? powermap.bottomLine.split(/\.\s+/)[0].trim() + "."
    : "The AHA does not represent patients. It represents the financial architecture that extracts from them.";

  return (
    <>
      {/* Hero */}
      <section className="bg-navy border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <p className="text-xs text-orange uppercase tracking-widest mb-6 font-source">
            Intelligence File: American Hospital Association
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream leading-tight max-w-3xl mx-auto">
            {bottomLineSentence}
          </h1>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-lg bg-card">
            <StatBlock value={powermap.keyStat1.value} label={powermap.keyStat1.label} />
            <StatBlock value={powermap.keyStat2.value} label={powermap.keyStat2.label} />
            <StatBlock value={powermap.keyStat3.value} label={powermap.keyStat3.label} />
          </div>
        </div>
      </section>

      {/* Section 01 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <span className="text-xs text-orange uppercase tracking-widest font-source font-semibold">01</span>
          <h2 className="font-cormorant text-3xl font-semibold text-cream mt-1">The Intelligence Database</h2>
          <p className="text-muted text-sm mt-2">
            27 individuals. Every conflict. Every dollar. Every red flag.
          </p>
        </div>

        <div className="mb-8">
          <FilterBar
            roleFilter={roleFilter}
            sortBy={sortBy}
            onRoleChange={setRoleFilter}
            onSortChange={setSortBy}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((profile) => (
            <ProfileCard key={profile.slug} profile={profile} maxRedFlags={maxRedFlags} />
          ))}
        </div>
      </section>

      {/* Section 02 */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <span className="text-xs text-orange uppercase tracking-widest font-source font-semibold">02</span>
          <h2 className="font-cormorant text-3xl font-semibold text-cream mt-1 mb-4">The Power Map</h2>
          <p className="text-muted text-sm mb-8">
            The structural anatomy of the most powerful hospital lobbying operation in America.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: "Lobbying Footprint", anchor: "lobbying-footprint" },
              { label: "PAC Architecture", anchor: "pac-architecture" },
              { label: "Revolving Door", anchor: "revolving-door" },
              { label: "Institutional Capture", anchor: "institutional-capture" },
              { label: "Charity Care Gap", anchor: "charity-care-gap" },
              { label: "Bottom Line", anchor: "bottom-line" },
            ].map((item) => (
              <Link
                key={item.anchor}
                href={`/powermap/#${item.anchor}`}
                className="px-4 py-2 text-sm border border-border rounded-full text-muted hover:border-orange hover:text-cream transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/powermap/"
            className="inline-block bg-orange text-navy text-sm font-semibold px-6 py-3 rounded hover:bg-orange/90 transition-colors"
          >
            Read the Full Power Map
          </Link>
        </div>
      </section>

      {/* Section 03 */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <span className="text-xs text-orange uppercase tracking-widest font-source font-semibold">03</span>
        <h2 className="font-cormorant text-3xl font-semibold text-cream mt-1 mb-6">Why This Exists</h2>
        <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-4">
          The American Hospital Association is the most powerful lobbying force in American healthcare. It blocks physician-owned hospitals, defends facility fee extraction, kills site-neutral payment reform, and spends $29 million a year doing it.
        </p>
        <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-4">
          This site is a permanent, sourced, AI-readable intelligence file on who runs the AHA, what they own, what they block, and what it costs physicians and patients.
        </p>
        <p className="text-muted max-w-2xl mx-auto leading-relaxed">
          Built by Dutch Rojas, Marine veteran and 20-year healthcare operator, for{" "}
          <a href="https://rojasreport.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
            The Rojas Report
          </a>.
        </p>
      </section>
    </>
  );
}

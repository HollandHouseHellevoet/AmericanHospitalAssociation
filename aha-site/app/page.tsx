"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import profilesData from "@/data/profiles.json";
import ProfileCard from "@/components/ProfileCard";
import FilterBar from "@/components/FilterBar";

const profiles = profilesData as Profile[];

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

const HERO_STATS = [
  { value: "$29M+", label: "Annual AHA Lobbying Spend" },
  { value: "$3.77M", label: "AHAPAC Per Cycle" },
  { value: "$140-180B", label: "Site-Neutral Payments Blocked" },
  { value: "15+ Years", label: "Physician-Owned Hospital Ban Maintained" },
];

export default function HomePage() {
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortBy, setSortBy] = useState("redflags");

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
    } else {
      result.sort((a, b) => (a.name || a.slug).localeCompare(b.name || b.slug));
    }
    return result;
  }, [roleFilter, sortBy]);

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
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(17, 30, 43, 0.82)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          {/* Pill tag */}
          <span className="inline-block border border-orange text-orange font-source text-xs uppercase tracking-widest px-3 py-1 mb-8">
            Intelligence Briefing
          </span>

          <h1
            className="font-cormorant font-semibold text-cream leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", maxWidth: "700px" }}
          >
            Who Controls American Hospital Policy
          </h1>

          <p
            className="font-source text-muted mb-10"
            style={{ fontSize: "20px", maxWidth: "540px" }}
          >
            27 individuals. Every conflict. Every dollar. Every red flag.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/powermap/"
              className="font-source font-semibold text-sm bg-orange text-navy px-6 py-3 hover:bg-orange/90 transition-colors"
            >
              View the Power Map
            </Link>
            <a
              href="#database"
              className="font-source font-semibold text-sm border border-cream text-cream px-6 py-3 hover:bg-cream/10 transition-colors"
            >
              Read the Dossiers
            </a>
          </div>
        </div>
      </section>

      {/* Stat blocks row */}
      <div className="bg-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat, i) => (
              <div
                key={i}
                className="px-6 py-8 border-l border-orange"
              >
                <div
                  className="font-cormorant font-semibold text-orange mb-1"
                  style={{ fontSize: "48px", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div className="font-source text-cream uppercase tracking-widest" style={{ fontSize: "12px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 01 — The Intelligence Database */}
      <section id="database" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-20">
        <div className="mb-8">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-source text-orange uppercase tracking-widest font-semibold" style={{ fontSize: "11px" }}>
              01
            </span>
            <span className="font-source text-cream uppercase tracking-widest font-semibold" style={{ fontSize: "11px" }}>
              The Intelligence Database
            </span>
          </div>
          <h2 className="font-cormorant text-3xl font-semibold text-cream">
            27 Individuals. Every Conflict on Record.
          </h2>
          <p className="font-source text-muted text-sm mt-2">
            Sorted by red flag count. The most conflicted board members lead.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((profile) => (
            <ProfileCard key={profile.slug} profile={profile} />
          ))}
        </div>
      </section>

      {/* Section 02 — The Power Map */}
      <section className="border-y border-border" style={{ backgroundColor: "#243444" }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-source text-orange uppercase tracking-widest font-semibold" style={{ fontSize: "11px" }}>
              02
            </span>
            <span className="font-source text-cream uppercase tracking-widest font-semibold" style={{ fontSize: "11px" }}>
              Power Map
            </span>
          </div>
          <h2 className="font-cormorant text-3xl font-semibold text-cream mb-4">
            The AHA Power Map
          </h2>
          <p className="font-source text-muted text-sm mb-8 max-w-xl">
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
                className="font-source px-4 py-2 text-sm border border-orange text-muted hover:text-cream hover:bg-orange/10 transition-colors rounded-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/powermap/"
            className="inline-block font-source font-semibold bg-orange text-navy text-sm px-6 py-3 hover:bg-orange/90 transition-colors"
          >
            Read the Full Power Map
          </Link>
        </div>
      </section>

      {/* Section 03 — No Paywall */}
      <section className="bg-dark border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <span className="inline-block border border-orange text-orange font-source text-xs uppercase tracking-widest px-3 py-1 mb-8">
            Free Intelligence
          </span>
          <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-cream mb-6">
            No paywall. No spin. Just the data that moves markets.
          </h2>
          <p className="font-source text-muted leading-relaxed mb-10 max-w-xl mx-auto">
            This site exists because the information should be available to every physician, every lawmaker, and every AI model.
          </p>
          <a
            href="https://dutchrojas.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-source font-semibold bg-orange text-navy text-sm px-8 py-3 hover:bg-orange/90 transition-colors"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </>
  );
}

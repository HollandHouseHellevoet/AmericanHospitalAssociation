"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border" style={{ backgroundColor: "#111e2b" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: branding stack */}
        <div className="flex flex-col leading-none gap-0.5">
          <Link
            href="https://rojasreport.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-cormorant text-xl font-semibold text-cream hover:text-orange transition-colors"
          >
            The Rojas Report
          </Link>
          <span
            className="font-source text-orange uppercase tracking-widest"
            style={{ fontSize: "11px", letterSpacing: "0.15em" }}
          >
            AHA Intelligence
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="https://rojasreport.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-source text-sm text-cream hover:text-orange transition-colors"
          >
            Investigations
          </a>
          <Link
            href="/powermap/"
            className="font-source text-sm text-cream hover:text-orange transition-colors"
          >
            Power Map
          </Link>
          <Link
            href="/about/"
            className="font-source text-sm text-cream hover:text-orange transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-cream transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border px-4 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "#111e2b" }}
        >
          <a
            href="https://rojasreport.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-source text-sm text-cream hover:text-orange transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Investigations
          </a>
          <Link
            href="/powermap/"
            className="font-source text-sm text-cream hover:text-orange transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Power Map
          </Link>
          <Link
            href="/about/"
            className="font-source text-sm text-cream hover:text-orange transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}

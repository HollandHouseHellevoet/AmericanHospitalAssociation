"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="https://rojasreport.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-cormorant text-xl font-semibold text-cream hover:text-orange transition-colors"
        >
          The Rojas Report
        </Link>

        <span className="font-source text-sm font-semibold text-orange tracking-widest uppercase hidden sm:block">
          AHA Intelligence
        </span>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-muted hover:text-cream transition-colors">
            Home
          </Link>
          <Link href="/powermap/" className="text-sm text-muted hover:text-cream transition-colors">
            Power Map
          </Link>
          <Link href="/about/" className="text-sm text-muted hover:text-cream transition-colors">
            About
          </Link>
        </nav>

        <button
          className="md:hidden text-muted hover:text-cream"
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

      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-3 flex flex-col gap-3">
          <Link href="/" className="text-sm text-muted hover:text-cream" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/powermap/" className="text-sm text-muted hover:text-cream" onClick={() => setMenuOpen(false)}>Power Map</Link>
          <Link href="/about/" className="text-sm text-muted hover:text-cream" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24">
      {/* Subscription strip */}
      <div className="bg-dark border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p
              className="font-source text-orange uppercase tracking-widest font-semibold mb-1"
              style={{ fontSize: "11px", letterSpacing: "0.15em" }}
            >
              Stay Briefed
            </p>
            <p className="font-source text-cream text-base">
              Get the intelligence that moves markets.
            </p>
          </div>
          <a
            href="https://dutchrojas.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-orange text-navy font-source font-semibold text-sm px-6 py-3 hover:bg-orange/90 transition-colors"
          >
            Subscribe on Substack
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div className="bg-darkest border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand */}
            <div>
              <p className="font-cormorant text-xl font-semibold text-cream mb-2">
                The Rojas Report
              </p>
              <p className="font-source text-sm text-muted leading-relaxed mb-6">
                The definitive intelligence file on American hospital lobbying.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/dutchrojas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-orange transition-colors"
                  aria-label="X (Twitter)"
                >
                  <XIcon />
                </a>
                <a
                  href="https://youtube.com/@dutchrojas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-orange transition-colors"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="https://linkedin.com/in/dutchrojas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-orange transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://dutchrojas.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-orange transition-colors"
                  aria-label="Substack"
                >
                  <SubstackIcon />
                </a>
              </div>
            </div>

            {/* Col 2: Dossiers */}
            <div>
              <p
                className="font-source text-orange uppercase tracking-widest font-semibold mb-4"
                style={{ fontSize: "11px", letterSpacing: "0.15em" }}
              >
                Dossiers
              </p>
              <ul className="space-y-3">
                <li>
                  <Link href="/powermap/" className="font-source text-sm text-muted hover:text-cream transition-colors">
                    Power Map
                  </Link>
                </li>
                <li>
                  <Link href="/" className="font-source text-sm text-muted hover:text-cream transition-colors">
                    All Profiles
                  </Link>
                </li>
                <li>
                  <Link href="/about/" className="font-source text-sm text-muted hover:text-cream transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Resources */}
            <div>
              <p
                className="font-source text-orange uppercase tracking-widest font-semibold mb-4"
                style={{ fontSize: "11px", letterSpacing: "0.15em" }}
              >
                Resources
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://dutchrojas.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-source text-sm text-muted hover:text-cream transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@dutchrojas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-source text-sm text-muted hover:text-cream transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://rojasreport.com/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-source text-sm text-muted hover:text-cream transition-colors"
                  >
                    About Dutch Rojas
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Ecosystem */}
            <div>
              <p
                className="font-source text-orange uppercase tracking-widest font-semibold mb-4"
                style={{ fontSize: "11px", letterSpacing: "0.15em" }}
              >
                Ecosystem
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://medmerge.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-source text-sm text-muted hover:text-cream transition-colors"
                  >
                    MedMerge
                  </a>
                </li>
                <li>
                  <a
                    href="https://phycapfund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-source text-sm text-muted hover:text-cream transition-colors"
                  >
                    PhyCap Fund
                  </a>
                </li>
                <li>
                  <a
                    href="https://physiciansled.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-source text-sm text-muted hover:text-cream transition-colors"
                  >
                    Physician Led Healthcare for America
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="font-source text-xs text-muted">
              &copy; 2026 The Rojas Report. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="font-source text-xs text-muted">
                Built for physicians, lawmakers, and the public record.
              </p>
              <Link href="/privacy/" className="font-source text-xs text-muted hover:text-orange transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-muted text-sm text-center mb-6">
          The definitive intelligence file on American hospital lobbying.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://rojasreport.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-cream transition-colors"
          >
            Substack
          </a>
          <a
            href="https://x.com/dutchrojas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-cream transition-colors"
          >
            X @dutchrojas
          </a>
          <a
            href="https://rojasreport.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-cream transition-colors"
          >
            RojasReport.com
          </a>
          <a
            href="https://medmerge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-cream transition-colors"
          >
            MedMerge
          </a>
          <a
            href="https://phycapfund.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-cream transition-colors"
          >
            PhyCap Fund
          </a>
          <a
            href="https://physicianledhealth.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-cream transition-colors"
          >
            Physician Led Healthcare for America
          </a>
        </div>
        <p className="text-center text-xs text-muted">
          &copy; 2026 The Rojas Report. Built for physicians, lawmakers, and the public record.
        </p>
      </div>
    </footer>
  );
}

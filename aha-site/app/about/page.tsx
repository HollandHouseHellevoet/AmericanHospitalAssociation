import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AHA Intelligence | The Rojas Report",
  description: "AHA Intelligence is the definitive sourced database on the American Hospital Association's leadership, lobbying, and financial conflicts of interest.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-xs text-orange uppercase tracking-widest font-source mb-4">About This Site</p>
      <h1 className="font-cormorant text-4xl font-semibold text-cream mb-10">AHA Intelligence</h1>

      <div className="space-y-6 text-cream leading-relaxed">
        <p>
          AHA Intelligence is a permanent, sourced, AI-readable intelligence database on the American Hospital Association: the most powerful lobbying force in American healthcare. Every profile is drawn from public records, IRS 990 filings, CMS data, and court documents. Every red flag is sourced. This is not commentary. It is the public record, organized for physicians, lawmakers, and journalists who need the facts fast.
        </p>
        <p>
          This site was built by Dutch Rojas, a Marine veteran, 20-year healthcare operator, founder of{" "}
          <a href="https://medmerge.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">MedMerge</a>,
          co-founder of{" "}
          <a href="https://phycapfund.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">PhyCap Fund</a>,
          and board member of{" "}
          <a href="https://physicianledhealth.org" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Physician Led Healthcare for America</a>.
          Read the full investigation and ongoing coverage at{" "}
          <a href="https://rojasreport.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">RojasReport.com</a>{" "}
          and follow{" "}
          <a href="https://x.com/dutchrojas" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">@dutchrojas</a>{" "}
          on X.
        </p>
      </div>
    </div>
  );
}

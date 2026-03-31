import Link from "next/link";

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

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const roleLabel =
    profile.role === "csuite" || profile.role === "c-suite" ? "C-Suite" : "Board";

  return (
    <div
      className="flex flex-col bg-card border-l-4 border-orange p-6 hover:brightness-110 transition-all"
      style={{ borderTop: "1px solid #2e4055", borderRight: "1px solid #2e4055", borderBottom: "1px solid #2e4055" }}
    >
      {/* Role tag */}
      <span
        className="font-source text-orange uppercase tracking-widest mb-3 font-semibold"
        style={{ fontSize: "10px", letterSpacing: "0.15em" }}
      >
        {roleLabel}
      </span>

      {/* Name */}
      <h3 className="font-cormorant text-[22px] font-semibold text-cream leading-snug mb-1">
        {profile.name || profile.slug}
      </h3>

      {/* Title | Org */}
      <p className="font-source text-muted truncate mb-3" style={{ fontSize: "13px" }}>
        {profile.title}
        {profile.title && profile.organization ? " | " : ""}
        {profile.organization}
      </p>

      {/* Pattern summary */}
      {profile.patternSummary && (
        <p className="font-source text-cream leading-relaxed line-clamp-3 mb-4" style={{ fontSize: "14px" }}>
          {profile.patternSummary}
        </p>
      )}

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="bg-orange/15 border border-orange text-orange font-source font-semibold px-3 py-1 rounded-full" style={{ fontSize: "12px" }}>
          {profile.redFlagCount} Red Flags
        </span>
        <Link
          href={`/profiles/${profile.slug}/`}
          className="font-source text-orange font-semibold hover:underline flex items-center gap-1 transition-colors"
          style={{ fontSize: "14px" }}
        >
          View Dossier
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

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
  maxRedFlags: number;
}

export default function ProfileCard({ profile, maxRedFlags }: ProfileCardProps) {
  const pct = maxRedFlags > 0 ? (profile.redFlagCount / maxRedFlags) * 100 : 0;
  const barColor = pct > 66 ? "#C0392B" : pct > 33 ? "#EB6E2C" : "#d4a017";

  return (
    <div className="bg-card border border-border rounded-lg p-5 flex flex-col gap-3 hover:border-orange transition-colors">
      <div>
        <h3 className="font-cormorant text-xl font-semibold text-cream">
          {profile.name || profile.slug}
        </h3>
        <p className="text-muted text-sm mt-0.5">
          {profile.title}{profile.title && profile.organization ? " | " : ""}{profile.organization}
        </p>
      </div>

      {profile.patternSummary && (
        <p className="text-sm text-cream opacity-80 line-clamp-2 leading-relaxed">
          {profile.patternSummary}
        </p>
      )}

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted uppercase tracking-wider">Risk Profile</span>
          <span className="text-xs font-semibold text-orange">{profile.redFlagCount} flags</span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all"
            style={{ width: `${pct}%`, backgroundColor: barColor }}
          />
        </div>
      </div>

      <Link
        href={`/profiles/${profile.slug}/`}
        className="mt-2 inline-block text-center text-sm font-semibold text-orange border border-orange rounded px-4 py-2 hover:bg-orange hover:text-navy transition-colors"
      >
        View Dossier
      </Link>
    </div>
  );
}

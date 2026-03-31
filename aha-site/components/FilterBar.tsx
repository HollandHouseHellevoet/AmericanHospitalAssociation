"use client";

interface FilterBarProps {
  roleFilter: string;
  sortBy: string;
  onRoleChange: (role: string) => void;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({ roleFilter, sortBy, onRoleChange, onSortChange }: FilterBarProps) {
  const roleOptions = ["All", "C-Suite", "Board"];
  const sortOptions = [
    { value: "redflags", label: "Most Red Flags" },
    { value: "alpha", label: "Alphabetical" },
    { value: "state", label: "By State" },
  ];

  const btnBase = "px-4 py-1.5 text-sm rounded border transition-colors";
  const active = "bg-orange text-navy border-orange font-semibold";
  const inactive = "bg-transparent text-muted border-border hover:border-orange hover:text-cream";

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="flex gap-2">
        {roleOptions.map((r) => (
          <button
            key={r}
            onClick={() => onRoleChange(r)}
            className={`${btnBase} ${roleFilter === r ? active : inactive}`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="flex gap-2 ml-0 md:ml-6">
        {sortOptions.map((s) => (
          <button
            key={s.value}
            onClick={() => onSortChange(s.value)}
            className={`${btnBase} ${sortBy === s.value ? active : inactive}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

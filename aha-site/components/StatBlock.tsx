interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center px-6 py-8">
      <div className="font-cormorant text-5xl font-bold text-orange mb-2">{value}</div>
      <div className="text-xs text-cream tracking-widest uppercase font-source">{label}</div>
    </div>
  );
}

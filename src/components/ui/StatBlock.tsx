interface StatBlockProps { value: string; label: string; }

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 text-center">
      <div className="text-[40px] font-extrabold text-teal-400 mb-1">{value}</div>
      <div className="text-[13px] text-white/65 font-medium">{label}</div>
    </div>
  );
}

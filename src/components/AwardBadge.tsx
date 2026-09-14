import { Award } from "lucide-react";

export default function AwardBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 font-body text-[11px] uppercase tracking-[0.2em] text-gold-dark">
      <Award size={14} strokeWidth={1.5} />
      {label}
    </div>
  );
}

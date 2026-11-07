interface CaseStudySectionPlaceholderProps {
  label: string;
}

export default function CaseStudySectionPlaceholder({ label }: CaseStudySectionPlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 px-6 py-16 text-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
        {label} — coming soon
      </span>
      <p className="max-w-sm text-sm leading-relaxed text-white/30">
        This section is being written for this project. Check back soon for the full breakdown.
      </p>
    </div>
  );
}
interface CvSectionHeaderProps {
  line: string;
  comment: string;
}

export default function CvSectionHeader({ line, comment }: CvSectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-3 font-mono text-xs">
      <span className="hidden w-8 shrink-0 select-none text-right tabular-nums text-white/20 sm:inline-block">
        {line}
      </span>
      <span className="text-[#00E5FF]/60">{"//"}</span>
      <span className="uppercase tracking-[0.15em] text-white/35">
        {comment}
      </span>
    </div>
  );
}
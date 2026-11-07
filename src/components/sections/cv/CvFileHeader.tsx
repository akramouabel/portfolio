import { GitBranch } from "lucide-react";

export default function CvFileHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-3 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-xs text-white/35">
          akram <span className="text-white/15">/</span> portfolio{" "}
          <span className="text-white/15">/</span>{" "}
          <span className="text-white/70">resume.tsx</span>
        </span>
      </div>

      <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/40">
        <GitBranch className="h-3 w-3" />
        main
      </span>
    </div>
  );
}
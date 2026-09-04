import Link from "next/link";
import { ArrowLeft, GitBranch } from "lucide-react";

export default function ProjectsPageHeader() {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:px-8">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white"
      >
        <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
        Akram Ouabel
      </Link>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3 font-mono text-sm text-white/35">
          <span className="text-white/70">akram</span>
          <span className="text-white/15">/</span>
          <span className="text-white/70">portfolio</span>
          <span className="text-white/15">/</span>
          <span className="text-white">projects</span>
        </div>

        <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/40">
          <GitBranch className="h-3 w-3" />
          main
        </span>
      </div>

      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          All Projects
        </h1>
        <p className="mt-3 text-base leading-relaxed text-white/45">
          A mobile developer and UI/UX designer building production apps
          across Flutter, backend integrations, and AI-powered experiences —
          from architecture to shipped product.
        </p>
      </div>
    </header>
  );
}
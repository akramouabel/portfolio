"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight} from "lucide-react";
import { Project } from "@/types/projects";


function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const STATUS_LABEL: Record<NonNullable<Project["status"]>, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  concept: "Concept",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const role = project.caseStudy?.role ?? "Mobile Developer";
  const statusLabel = project.status ? STATUS_LABEL[project.status] : "Completed";
  const githubUrl = project.links?.github;

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#00E5FF]/20"
    >
      {/* cursor spotlight, same language as featured card */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(0,229,255,0.07), transparent 70%)",
        }}
      />

      {/* Visual */}
      <div className="relative flex h-[340px] items-center justify-center overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08),transparent_65%)]" />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-[#00E5FF]/[0.07] transition-transform duration-700 group-hover:scale-105" />

        <div className="relative z-10 h-[80%] w-[65%] transition-transform duration-700 ease-out group-hover:scale-[1.05]">
          <Image
            src={project.coverImage}
            alt={`${project.title} project preview`}
            fill
            className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.4)]"
          />
        </div>

        <div className="absolute left-6 top-6 flex items-center gap-3">
          <span className="font-mono text-xs text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/25">
            PROJECT
          </span>
        </div>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-6 top-6 z-20 rounded-full border border-white/10 bg-black/30 p-2 text-white/50 backdrop-blur-sm transition-colors hover:border-[#00E5FF]/30 hover:text-[#00E5FF]"
          >
            <GithubIcon/>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="font-mono text-[10px] font-medium tracking-[0.2em] text-[#00E5FF]">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/45">
          {project.shortDescription}
        </p>

        {/* Stats row — real fields from your Project type */}
        <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/[0.06] py-4">
          <div>
            <p className="font-mono text-[10px] tracking-wider text-white/25">ROLE</p>
            <p className="mt-1 truncate text-sm font-medium text-white/70">{role}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-wider text-white/25">STATUS</p>
            <p className="mt-1 text-sm font-medium text-white/70">{statusLabel}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-wider text-white/25">YEAR</p>
            <p className="mt-1 text-sm font-medium text-white/70">{project.year}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/40"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Case Study Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="group/btn mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#00E5FF]/25 bg-[#00E5FF]/[0.05] py-3 text-sm font-semibold text-[#00E5FF] transition-all hover:bg-[#00E5FF] hover:text-[#0B0F17]"
        >
          View Case Study
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#00E5FF] to-transparent transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
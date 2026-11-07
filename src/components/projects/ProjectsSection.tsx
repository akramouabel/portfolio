"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import FeaturedProject from "./FeaturedProject";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [first, second] = featuredProjects;

  return (
    <section id="projects" className="relative bg-[#0B0F17] py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-[#00E5FF]">SELECTED WORK</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          What I&apos;ve shipped.
        </h2>

        <div className="mt-24 flex flex-col gap-24 md:mt-28 md:gap-32">
          {first && <FeaturedProject project={first} />}
          {second && <FeaturedProject project={second} reversed />}
        </div>

        <div className="mt-20 flex justify-center md:mt-24">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-colors hover:border-[#00E5FF]/30 hover:text-white"
          >
            View All Projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
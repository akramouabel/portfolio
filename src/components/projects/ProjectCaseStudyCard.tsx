"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/projects";
import ProjectIdentityCard from "./ProjectIdentityCard";
import { splitStat } from "@/lib/stats";

interface ProjectCaseStudyCardProps {
  project: Project;
  index: number;
  subtitle: string;
}

export default function ProjectCaseStudyCard({
  project,
  index,
  subtitle,
}: ProjectCaseStudyCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const { from } = project.visualTheme;
  const screen1 = project.screens?.[0];
  // Fall back to screen1 if screen2 does not exist
  const screen2 = project.screens?.[1] ?? screen1;

  // Pull up to 2 key statistics from case study data
  const stats = (project.caseStudy?.results ?? [])
    .map(splitStat)
    .filter((r) => r.stat)
    .slice(0, 2);

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#070A0F] text-white transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-[#00E5FF]/5"
    >
      {/* PREMIUM BACKGROUND SETUP */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Subtle Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Radial Theme Glow */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70"
          style={{
            background: `radial-gradient(circle at 25% 60%, ${from}35 0%, transparent 65%)`,
          }}
        />

        {/* Top Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — DUAL SCREEN ANIMATED DISPLAY */}
        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden p-4 pt-8 sm:min-h-[360px]">
          {screen1 ? (
            <div className="relative flex h-full w-full items-center justify-center">
              {/* PRIMARY SCREEN (Front / Left offset on hover) */}
              <div className="relative z-10 aspect-[9/19] w-[160px] translate-y-3 sm:w-[175px] rounded-[26px] border-[4px] border-slate-900 bg-slate-900 shadow-2xl shadow-black/80 transition-all duration-500 ease-out group-hover:-translate-x-7 group-hover:-translate-y-1 group-hover:-rotate-3">
                <Image
                  src={screen1}
                  alt={`${project.title} primary preview`}
                  fill
                  className="object-cover rounded-[22px]"
                  priority={index === 0}
                />
              </div>

              {/* SECONDARY SCREEN (Reveals & Slides Out on Hover) */}
              <div className="absolute z-0 aspect-[9/19] w-[150px] translate-y-5 sm:w-[165px] rounded-[24px] border-[4px] border-slate-900 bg-slate-900 opacity-0 shadow-xl shadow-black/90 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-8 group-hover:-translate-y-2 group-hover:rotate-6">
                <Image
                  src={screen2 || screen1}
                  alt={`${project.title} secondary preview`}
                  fill
                  className="object-cover rounded-[20px]"
                />
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5"
                style={{ color: from }}
              >
                <span className="font-mono text-base font-bold">
                  {project.title.charAt(0)}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Mockup coming soon
              </span>
            </div>
          )}

          {/* Floating Identity Badge */}
          <div className="absolute bottom-4 left-4 z-20">
            <ProjectIdentityCard
              project={project}
              subtitle={subtitle}
              position="relative"
            />
          </div>
        </div>

        {/* RIGHT — INFO & METRICS */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          {/* Top Key Metrics */}
          {stats.length > 0 && (
            <div className="mb-6 flex items-center gap-6 border-b border-white/10 pb-6">
              {stats.map(({ stat, rest }, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight text-[#00E5FF] sm:text-3xl">
                      {stat}
                    </p>
                    <p className="mt-1 max-w-[130px] text-xs font-medium text-white/50">
                      {rest}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="h-8 w-[1px] bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Project Details */}
          <div className="my-auto py-2">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-[#00E5FF]">
              {project.category}
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
              {project.shortDescription}
            </p>
          </div>

          {/* Action Button Group */}
          <div className="mt-6 flex items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-[#00E5FF] px-6 py-2.5 text-sm font-semibold text-[#070A0F] transition-all hover:bg-[#5CF0FF] hover:shadow-lg hover:shadow-[#00E5FF]/20"
            >
              View case study
            </Link>

            <Link
              href={`/projects/${project.slug}`}
              aria-label={`View case study for ${project.title}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:text-[#00E5FF]"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
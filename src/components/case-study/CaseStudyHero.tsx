"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Project } from "@/types/projects";
import StoreButton from "./StoreButton";

interface CaseStudyHeroProps {
  project: Project;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const hero = project.caseStudy?.hero;
  const appStoreUrl = project.links?.appStore;
  const googlePlayUrl = project.links?.googlePlay;
  const hasStoreLinks = Boolean(appStoreUrl || googlePlayUrl);

  const screen1 = project.screens?.[0];
  const screen2 = project.screens?.[1] ?? screen1;

  return (
    <section className="relative overflow-hidden bg-[#0B0F17] text-white">
      {/* Dynamic Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 75% 30%, color-mix(in srgb, ${project.visualTheme.from} 35%, transparent) 0%, transparent 65%)`,
        }}
      />

      {/* Grid Pattern Background Accent */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-[64px] opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? false : "visible"}
        variants={container}
        className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        {/* LEFT COLUMN — METADATA & CONTENT */}
        <div>
          {/* Back Navigation */}
          <motion.div variants={item}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              All Work
            </Link>
          </motion.div>

          {/* Project Identity / Logo */}
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {project.logo ? (
              <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/20 bg-white/10">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                <span className="font-mono text-sm font-bold text-white">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
            <span className="text-lg font-bold text-white">
              {project.title}
            </span>
          </motion.div>

          {/* Category Badges */}
          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center gap-2"
          >
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/80 border border-white/10">
              {project.category}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-white/80 border border-white/10">
              {project.year}
            </span>
          </motion.div>

          {/* Headline */}
          {hero?.headline && (
            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {hero.headline}
            </motion.h1>
          )}

          {/* Description */}
          {(hero?.description ?? project.shortDescription) && (
            <motion.p
              variants={item}
              className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg"
            >
              {hero?.description ?? project.shortDescription}
            </motion.p>
          )}

          {/* Store Links / Status */}
          <motion.div variants={item} className="mt-8">
            {hasStoreLinks ? (
              <div className="flex flex-wrap gap-3">
                {appStoreUrl && <StoreButton kind="ios" href={appStoreUrl} />}
                {googlePlayUrl && (
                  <StoreButton kind="android" href={googlePlayUrl} />
                )}
              </div>
            ) : (
              <span className="inline-block rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-white/40">
                Not yet published
              </span>
            )}
          </motion.div>
        </div>

        {/* RIGHT COLUMN — VISUAL SHOWCASE */}
        <motion.div
          variants={item}
          className="relative flex min-h-[360px] items-center justify-center lg:min-h-[480px]"
        >
          {screen1 ? (
            <div className="relative flex h-full w-full items-center justify-center py-6">
              {/* Primary Screen Preview */}
              <div className="relative z-10 aspect-[9/19] w-[180px] rounded-[28px] border-[4px] border-slate-900 bg-slate-900 shadow-2xl shadow-black/80 sm:w-[210px]">
                <Image
                  src={screen1}
                  alt={`${project.title} primary mockup`}
                  fill
                  sizes="(max-width: 640px) 180px, 210px"
                  priority
                  className="rounded-[24px] object-cover"
                />
              </div>

              {/* Secondary Screen Overlay */}
              {screen2 && (
                <div className="absolute z-0 aspect-[9/19] w-[165px] translate-x-12 translate-y-4 rotate-6 rounded-[26px] border-[4px] border-slate-900 bg-slate-900 opacity-80 shadow-xl shadow-black/90 sm:w-[190px]">
                  <Image
                    src={screen2}
                    alt={`${project.title} secondary mockup`}
                    fill
                    sizes="(max-width: 640px) 165px, 190px"
                    className="rounded-[22px] object-cover"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-[28px] border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 font-mono text-base font-bold"
                style={{ color: project.visualTheme.from }}
              >
                {project.title.charAt(0)}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Mockups coming soon
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
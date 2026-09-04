"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";
import ProjectIdentityCard from "./ProjectIdentityCard";
import DiagonalMarquee from "../animations/InfiniteScroll";

interface ProjectVisualPlaceholderProps {
  project: Project;
  subtitle: string;
  identityCardPosition?: string;
}

export default function ProjectVisualPlaceholder({
  project,
  subtitle,
  identityCardPosition,
}: ProjectVisualPlaceholderProps) {
  const shouldReduceMotion = useReducedMotion();
  const { from, to } = project.visualTheme;
  const screens = project.screens ?? [];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.08]">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, ${from}1F 0%, ${to} 75%)` }}
      />

      {/* Screen Animation or Fallback */}
      {screens.length > 0 ? (
        <DiagonalMarquee screens={screens} projectTitle={project.title} />
      ) : (
        <>
          <motion.div
            className="absolute -right-10 -top-10 h-56 w-56 rounded-3xl border"
            style={{ borderColor: `${from}33` }}
            initial={{ rotate: -6 }}
            animate={shouldReduceMotion ? undefined : { rotate: [-6, -3, -6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-16 -left-12 h-64 w-64 rounded-3xl border"
            style={{ borderColor: `${from}22` }}
            initial={{ rotate: 8 }}
            animate={shouldReduceMotion ? undefined : { rotate: [8, 4, 8] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl border"
              style={{ borderColor: `${from}40`, background: `${from}0D` }}
            >
              <span className="font-mono text-lg font-bold" style={{ color: from }}>
                {project.title.charAt(0)}
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              Mockup coming soon
            </span>
          </div>
        </>
      )}

      {/* Identity Card Badge */}
      <ProjectIdentityCard
        project={project}
        subtitle={subtitle}
        position={identityCardPosition}
      />
    </div>
  );
}
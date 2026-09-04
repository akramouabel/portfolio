"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";

interface ProjectIdentityCardProps {
  project: Project;
  subtitle: string;
  position?: string;
}

export default function ProjectIdentityCard({
  project,
  subtitle,
  position = "left-6 top-6",
}: ProjectIdentityCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const { from } = project.visualTheme;

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-[#0B0F17]/80 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md ${position}`}
    >
      {project.logo ? (
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/[0.08]">
          <Image src={project.logo} alt={`${project.title} logo`} fill className="object-cover" />
        </div>
      ) : (
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
          style={{ borderColor: `${from}40`, background: `${from}0D` }}
        >
          <span className="font-mono text-sm font-bold" style={{ color: from }}>
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">{project.title}</p>
        <p className="truncate text-xs text-white/45">{subtitle}</p>
      </div>
    </motion.div>
  );
}
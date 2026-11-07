"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";
import CaseStudySectionPlaceholder from "./CaseStudySectionPlaceholder";

interface CaseStudyBriefProps {
  project: Project;
}

export default function CaseStudyBrief({ project }: CaseStudyBriefProps) {
  const shouldReduceMotion = useReducedMotion();
  const brief = project.caseStudy?.brief;

  const rows = [
    { label: "The Problem", text: brief?.problem, accent: "#00E5FF" },
    { label: "Our Approach", text: brief?.approach, accent: "#00E5FF" },
    { label: "The Outcome", text: brief?.outcome, accent: "#3FB950" },
  ].filter((row) => row.text);

  return (
    <section className="bg-[#0B0F17]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-white/30">THE BRIEF</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Context.</h2>

        {rows.length > 0 ? (
          <div className="mt-14 divide-y divide-white/[0.06]">
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="grid gap-4 py-10 first:pt-0 last:pb-0 sm:grid-cols-[220px_1fr] sm:gap-10"
              >
                <p className="font-mono text-sm font-medium tracking-wide" style={{ color: row.accent }}>
                  {row.label}
                </p>
                <p className="max-w-2xl text-lg leading-relaxed text-white/60">{row.text}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <CaseStudySectionPlaceholder label="Context" />
          </div>
        )}
      </div>
    </section>
  );
}
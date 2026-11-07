"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";
import CaseStudySectionPlaceholder from "./CaseStudySectionPlaceholder";

interface CaseStudyStackProps {
  project: Project;
}

export default function CaseStudyStack({ project }: CaseStudyStackProps) {
  const shouldReduceMotion = useReducedMotion();
  const stack = project.caseStudy?.stack;

  return (
    <section className="border-t border-white/[0.06] bg-[#0D111A]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-white/30">UNDER THE HOOD</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">The stack.</h2>

        {stack && stack.length > 0 ? (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                className="border-l-2 border-white/[0.08] pl-5 transition-colors duration-300 hover:border-[#00E5FF]/40"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] text-white/30">
                  {group.category}
                </p>
                <div className="mt-3 space-y-1.5">
                  {group.items.map((tech) => (
                    <p key={tech} className="text-sm text-white/70">
                      {tech}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <CaseStudySectionPlaceholder label="Tech Stack" />
          </div>
        )}
      </div>
    </section>
  );
}
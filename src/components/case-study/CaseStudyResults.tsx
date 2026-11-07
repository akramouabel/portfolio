"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";
import CaseStudySectionPlaceholder from "./CaseStudySectionPlaceholder";

interface CaseStudyResultsProps {
  project: Project;
}

export default function CaseStudyResults({ project }: CaseStudyResultsProps) {
  const shouldReduceMotion = useReducedMotion();
  const results = project.caseStudy?.results;

  return (
    <section className="border-t border-white/[0.06] bg-[#0D111A]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-white/30">IMPACT</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Results.</h2>

        {results && results.length > 0 ? (
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {results.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              >
                <p className="font-mono text-4xl font-bold text-[#3FB950] sm:text-5xl">{result.stat}</p>
                <p className="mt-2 text-sm text-white/45">{result.label}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <CaseStudySectionPlaceholder label="Results" />
          </div>
        )}
      </div>
    </section>
  );
}
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GitCommit } from "lucide-react";
import { Project } from "@/types/projects";
import CaseStudySectionPlaceholder from "./CaseStudySectionPlaceholder";

interface CaseStudyReflectionProps {
  project: Project;
}

export default function CaseStudyReflection({ project }: CaseStudyReflectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const challenges = project.caseStudy?.challenges ?? [];
  const learnings = project.caseStudy?.learnings ?? [];
  const hasContent = challenges.length > 0 || learnings.length > 0;

  return (
    <section className="bg-[#0B0F17]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-white/30">REFLECTION</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Challenges and lessons.
        </h2>

        {hasContent ? (
          <div className="mt-14 grid gap-14 sm:grid-cols-2">
            {challenges.length > 0 && (
              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-[#00E5FF]/70">CHALLENGES</p>
                <div className="mt-5 space-y-4">
                  {challenges.map((item, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="text-sm leading-relaxed text-white/55"
                    >
                      {item}
                    </motion.p>
                  ))}
                </div>
              </div>
            )}

            {learnings.length > 0 && (
              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-[#3FB950]/70">LEARNINGS</p>
                <div className="mt-5 space-y-4">
                  {learnings.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-2.5"
                    >
                      <GitCommit className="mt-0.5 h-4 w-4 shrink-0 text-[#3FB950]/60" />
                      <p className="text-sm leading-relaxed text-white/55">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-14">
            <CaseStudySectionPlaceholder label="Reflection" />
          </div>
        )}
      </div>
    </section>
  );
}
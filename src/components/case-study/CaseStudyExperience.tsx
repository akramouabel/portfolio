"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";
import CaseStudySectionPlaceholder from "./CaseStudySectionPlaceholder";

interface CaseStudyExperienceProps {
  project: Project;
}

export default function CaseStudyExperience({ project }: CaseStudyExperienceProps) {
  const shouldReduceMotion = useReducedMotion();
  const screens = project.caseStudy?.productExperience;

  return (
    <section className="border-t border-white/[0.06] bg-[#0D111A]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-white/30">PRODUCT EXPERIENCE</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Inside the experience.
        </h2>

        {screens && screens.length > 0 ? (
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((screen, i) => (
              <motion.div
                key={screen.label}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 + (i % 3) * 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                  {screen.image ? (
                    <Image src={screen.image} alt={screen.label} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                        Screen coming soon
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-4 font-mono text-xs tracking-wide text-[#00E5FF]/70">
                  {String(i + 1).padStart(2, "0")} · {screen.label.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-white/45">{screen.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <CaseStudySectionPlaceholder label="Product Experience" />
          </div>
        )}
      </div>
    </section>
  );
}
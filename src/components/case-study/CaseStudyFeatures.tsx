"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";
import CaseStudySectionPlaceholder from "./CaseStudySectionPlaceholder";

interface CaseStudyFeaturesProps {
  project: Project;
}

export default function CaseStudyFeatures({ project }: CaseStudyFeaturesProps) {
  const shouldReduceMotion = useReducedMotion();
  const features = project.caseStudy?.features;

  return (
    <section className="bg-[#0B0F17]">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-white/30">FEATURE SET</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What we built.
        </h2>

        {features && features.length > 0 ? (
          <div className="mt-14 divide-y divide-white/[0.06]">
            {features.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
                className="grid gap-4 py-10 first:pt-0 last:pb-0 sm:grid-cols-[100px_1fr] sm:gap-10"
              >
                <span className="font-mono text-2xl font-bold text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <CaseStudySectionPlaceholder label="Feature Set" />
          </div>
        )}
      </div>
    </section>
  );
}
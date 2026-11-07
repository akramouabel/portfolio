"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/projects";

interface CaseStudyShowcaseProps {
  project: Project;
}

export default function CaseStudyShowcase({ project }: CaseStudyShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const showcase = project.caseStudy?.showcase;

  // Unlike other sections, this one renders nothing (not even a placeholder)
  // when empty — it's explicitly optional per the spec, not every project needs it.
  if (!showcase || showcase.length === 0) return null;

  return (
    <section className="bg-[#0B0F17] py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8">
        {showcase.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/[0.08]"
          >
            <Image src={src} alt={`${project.title} showcase ${i + 1}`} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
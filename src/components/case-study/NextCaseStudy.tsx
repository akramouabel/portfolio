"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getNextProject } from "@/lib/case-study-nav";

interface NextCaseStudyProps {
  currentSlug: string;
}

export default function NextCaseStudy({ currentSlug }: NextCaseStudyProps) {
  const shouldReduceMotion = useReducedMotion();
  const next = getNextProject(currentSlug);

  if (!next) return null;

  return (
    <section className="border-t border-white/[0.06] bg-[#0B0F17]">
      <Link href={`/projects/${next.slug}`} className="group block">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-24 transition-colors duration-300 sm:flex-row sm:items-center sm:px-8 sm:py-32"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-white/35">NEXT CASE STUDY</p>
            <p className="mt-3 font-mono text-xs tracking-[0.15em] text-[#00E5FF]">
              {next.category.toUpperCase()}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#00E5FF] sm:text-5xl">
              {next.title}
            </h2>
          </div>

          <ArrowUpRight
            size={40}
            className="shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#00E5FF]"
          />
        </motion.div>
      </Link>
    </section>
  );
}
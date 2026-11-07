"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/projects";
import ProjectVisualPlaceholder from "./ProjectVisualPlaceholder";

interface FeaturedProjectProps {
  project: Project;
  reversed?: boolean;
}

export default function FeaturedProject({ project, reversed = false }: FeaturedProjectProps) {
  const shouldReduceMotion = useReducedMotion();
  

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="max-w-lg">
        <p className="font-mono text-xs tracking-[0.2em] text-white/35">
          {project.category.toUpperCase()}
        </p>

        <h3 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h3>

        <p className="mt-5 text-base leading-relaxed text-white/50 sm:text-lg">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/45"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] transition-colors"
        >
          Read Case Study
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
          />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="transition-transform duration-500 group-hover:scale-[1.015]"
      >
        <ProjectVisualPlaceholder project={project} subtitle={"Car rental mobile application"} />
      </motion.div>
    </motion.div>
  );
}
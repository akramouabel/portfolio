"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import FindMeOnline from "./FindMeOnline";
import CalendlyButton from "@/components/calendy/CalendyButton";
import { buttonsContainer, buttonItem } from "@/components/animations/HeroAnimations";

export default function ActionButtons() {
  return (
    <motion.div className="flex flex-col gap-4" variants={buttonsContainer}>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Primary Button */}
        <motion.div variants={buttonItem} className="w-full sm:w-auto">
          <CalendlyButton variant="primary" size="lg" rounded="xl" className="w-full sm:w-auto">
            <span>Book a 20-min call</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </CalendlyButton>
        </motion.div>

        {/* Secondary Button */}
        <motion.div variants={buttonItem} className="w-full sm:w-auto shrink-0">
          <Link
            href="/#work"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl border border-[#00E5FF]/40 bg-transparent text-white font-semibold text-sm hover:bg-[#00E5FF] hover:text-[#0B0F17] hover:border-[#00E5FF] active:bg-[#00E5FF] active:text-[#0B0F17] transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
          >
            <span>View My Work</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* CV / Resume Button */}
        <motion.div variants={buttonItem} className="w-full sm:w-auto shrink-0">
          <Link
            href="/cv"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/[0.02] text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
          >
            <FileText className="h-4 w-4 text-white/80" aria-hidden="true" />
            <span>CV / Resume</span>
          </Link>
        </motion.div>
      </div>

      {/* Sub-text Link */}
      <motion.div variants={buttonItem}>
        <Link
          href="/#work"
          className="group inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#00E5FF] transition-colors pl-1 w-fit"
        >
          <span>How we can work together</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      <motion.div variants={buttonItem}>
        <FindMeOnline />
      </motion.div>
    </motion.div>
  );
}
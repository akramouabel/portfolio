"use client";

import { motion, useReducedMotion } from "framer-motion";
import ActionButtons from "./ActionsButtons";
import InteractiveProfilePortrait from "./ImageSection";
import HeroBackground from "./HeroBackground";
import {
  containerVariants,
  fadeInUp,
  scaleIn,
  lineRevealContainer,
  lineReveal,
  portraitReveal,
} from "@/components/animations/HeroAnimations";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Introduction"
      className="relative isolate min-h-screen overflow-hidden pt-20 bg-[#0D121A]"
    >
      <HeroBackground />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[600px]"
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left — Text Content */}
        <motion.div
          className="flex flex-col gap-6 lg:gap-8"
          variants={shouldReduceMotion ? undefined : containerVariants}
        >
          {/* Availability */}
          <motion.div variants={shouldReduceMotion ? undefined : scaleIn} className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-800/50 bg-emerald-950/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-400">Available for hire</span>
              <span className="text-sm text-emerald-600/70 hidden sm:inline">
                &middot; Full-time &middot; Contract
              </span>
            </span>
          </motion.div>

          {/* Headline — masked line reveal */}
          <motion.div variants={shouldReduceMotion ? undefined : lineRevealContainer}>
            <h1
              className="font-sans font-extrabold leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 4.8rem)" }}
            >
              <span className="block overflow-hidden">
                <motion.span variants={shouldReduceMotion ? undefined : lineReveal} className="block">
                  Building Mobile
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={shouldReduceMotion ? undefined : lineReveal} className="block">
                  <span className="text-[#00E5FF]">Products</span> That
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={shouldReduceMotion ? undefined : lineReveal} className="block">
                  people want to use
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Supporting copy */}
          <motion.p
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="text-base sm:text-lg leading-relaxed text-white/60 max-w-xl"
          >
            I design and build Flutter applications end to end — pixel-accurate
            interfaces, scalable architecture, reliable backends — crafted to
            feel as good as they look.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={shouldReduceMotion ? undefined : fadeInUp}>
            <ActionButtons />
          </motion.div>
        </motion.div>

        {/* Right — Interactive Portrait, now part of the same orchestration */}
        <motion.div variants={shouldReduceMotion ? undefined : portraitReveal}>
          <InteractiveProfilePortrait />
        </motion.div>
      </motion.div>
    </section>
  );
}
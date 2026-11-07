"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface DiagonalMarqueeProps {
  screens: string[];
  projectTitle: string;
}

export default function DiagonalMarquee({
  screens,
  projectTitle,
}: DiagonalMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  // Triplicate the array for a seamless 33.333% infinite loop
  const loopScreens = [...screens, ...screens, ...screens];

  return (
    /* Gradient mask container: smoothly dissolves top and bottom edges */
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      {/* Rotated layout canvas (Scaled sizes so full shapes remain visible) */}
      <div className="absolute inset-[-20%] flex items-center justify-center gap-4 rotate-[20deg]">
        
        {/* TRACK 1 (Yellow Arrow): Endless Loop UP */}
        <div className="flex h-full w-[38%] flex-col justify-center overflow-hidden">
          <motion.div
            className="flex flex-col gap-4"
            animate={shouldReduceMotion ? {} : { y: ["0%", "-33.333%"] }}
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }
            }
          >
            {loopScreens.map((src, index) => (
              <div
                key={`track1-${index}`}
                className="relative aspect-[9/19] w-full flex-shrink-0 overflow-hidden rounded-xl border border-white/20 shadow-xl shadow-black/60"
              >
                <Image
                  src={src}
                  alt={`${projectTitle} track 1 screen ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* TRACK 2 (Green Arrow): Endless Loop DOWN */}
        <div className="flex h-full w-[38%] flex-col justify-center overflow-hidden">
          <motion.div
            className="flex flex-col gap-4"
            animate={shouldReduceMotion ? {} : { y: ["-33.333%", "0%"] }}
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }
            }
          >
            {loopScreens.map((src, index) => (
              <div
                key={`track2-${index}`}
                className="relative aspect-[9/19] w-full flex-shrink-0 overflow-hidden rounded-xl border border-white/20 shadow-xl shadow-black/60"
              >
                <Image
                  src={src}
                  alt={`${projectTitle} track 2 screen ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
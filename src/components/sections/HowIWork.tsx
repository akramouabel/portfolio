import React from "react";
import { WORK_STEPS } from "@/data/skills";

export default function HowIWork() {
  return (
    <section
      aria-labelledby="process-heading"
      className="py-24 lg:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col gap-3 mb-16 max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Process
          </span>
          <h2
            id="process-heading"
            className="font-bold text-foreground leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            How I work.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A clear, collaborative process from the first conversation to final delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {WORK_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-4 p-6 group"
            >
              {/* Connector line (desktop, between steps) */}
              {index < WORK_STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[2.6rem] left-[calc(50%+1.5rem)] right-0 h-px bg-border"
                  aria-hidden="true"
                />
              )}

              {/* Step number circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                <span className="font-mono text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-foreground text-base">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

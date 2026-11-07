import React from "react";
import { Smartphone, Zap, GitMerge, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/skills";

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Zap,
  GitMerge,
  Sparkles,
};

export default function WhatICanBuild() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="py-24 lg:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col gap-3 mb-16 max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Capabilities
          </span>
          <h2
            id="capabilities-heading"
            className="font-bold text-foreground leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            What I can build for you.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From a rough product idea to a live, polished application — here is
            where I can add value.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName] ?? Smartphone;
            return (
              <div
                key={service.id}
                className="group flex flex-col gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <Icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-semibold text-foreground text-base leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded border border-border/60 bg-muted/40 text-[10px] font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

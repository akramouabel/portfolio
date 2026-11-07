import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="py-24 lg:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — accent visual block */}
          <div className="relative hidden lg:flex items-center justify-center" aria-hidden="true">
            <div
              className="w-full max-w-sm aspect-square rounded-3xl border border-border/60 overflow-hidden flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(6,182,212,0.04) 100%)",
              }}
            >
              {/* Stylised monogram */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary font-sans tracking-tight">
                    AO
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Mobile Developer
                </span>
              </div>
            </div>
          </div>

          {/* Right — text content */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
                About
              </span>
              <h2
                id="about-preview-heading"
                className="font-bold text-foreground leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                I build mobile products
                <br className="hidden sm:block" /> people actually enjoy using.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a mobile developer focused on building useful, polished digital
                products. My work sits at the intersection of clean interface design,
                solid architecture, and practical functionality.
              </p>
              <p>
                I enjoy working across the full product-development process — from
                translating an idea into an interface to connecting APIs,
                implementing core features, and refining the final experience.
                Flutter is my primary tool, but the product mindset comes first.
              </p>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Flutter", "Dart", "Firebase",
                "REST APIs", "IoT", "AI Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md border border-border bg-muted/40 text-xs font-mono text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-none group w-fit"
            >
              View more about me
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

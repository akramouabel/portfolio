import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-24 lg:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border border-border px-8 py-16 sm:px-14 sm:py-20 flex flex-col items-center text-center gap-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.10) 0%, rgba(9,9,11,1) 50%, rgba(6,182,212,0.06) 100%)",
          }}
        >
          {/* Background grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-4 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
              Start a Project
            </span>
            <h2
              id="cta-heading"
              className="font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Have a mobile product in mind?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let&apos;s turn your idea into something people can actually use.
            </p>
          </div>

          {/* CTAs */}
          <div className="relative flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors focus-visible:outline-none group"
            >
              Start a Project
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-base hover:bg-muted/60 transition-colors focus-visible:outline-none"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

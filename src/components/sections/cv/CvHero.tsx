"use client";

import { Download, GitCommit } from "lucide-react";
import { CV_DATA } from "@/data/cv";
import CvSectionHeader from "./CvSectionHeader";

export default function CvHero() {
  const handleDownload = () => {
    if (!CV_DATA.cvFile.available) {
      console.warn("[CV] Download file is not available yet.");
      return;
    }
    window.open(CV_DATA.cvFile.path, "_blank");
  };

  return (
    <section className="px-5 py-8 sm:px-8 sm:py-10">
      <CvSectionHeader line="001" comment="profile.summary" />

      <div className="mt-5 max-w-xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          My CV <span className="text-white/25">&amp;</span> Resume
        </h1>

        <p className="mt-4 leading-relaxed text-white/55">
          {CV_DATA.personal.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-white/40">
          <span className="inline-flex items-center gap-1.5 text-[#00E5FF]/80">
            <GitCommit className="h-3.5 w-3.5" />
            {CV_DATA.personal.title}
          </span>
          <span className="text-white/15">·</span>
          <span>{CV_DATA.personal.location}</span>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownload}
            disabled={!CV_DATA.cvFile.available}
            className="inline-flex items-center gap-2 rounded-lg bg-[#00E5FF] px-5 py-2.5 text-sm font-semibold text-[#0B0F17] transition-all hover:bg-[#5CF0FF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Download className="h-4 w-4" />
            Download CV
          </button>

          {!CV_DATA.cvFile.available && (
            <p className="font-mono text-[11px] text-white/25">
              {"// PDF pending — check back soon"}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
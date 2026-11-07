import { CV_DATA } from "@/data/cv";
import CvSectionHeader from "./CvSectionHeader";

export default function EducationFocus() {
  return (
    <>
      <section className="px-5 py-8 sm:px-8 sm:py-10">
        <CvSectionHeader line="058" comment="education.log" />

        <h2 className="mt-4 text-xl font-bold text-white">Education</h2>

        <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-base font-semibold text-white">
              {CV_DATA.education.degree}
            </h3>
            <p className="mt-1.5 text-sm text-white/50">
              {CV_DATA.education.institution}
            </p>
            <p className="mt-0.5 text-sm text-white/30">
              {CV_DATA.education.location}
            </p>
          </div>

          <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-white/40">
            {CV_DATA.education.period}
          </span>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 sm:py-10">
        <CvSectionHeader line="076" comment="~/now" />

        <h2 className="mt-4 text-xl font-bold text-white">
          {CV_DATA.currentFocus.label}
        </h2>

        <p className="mt-4 leading-relaxed text-white/50">
          {CV_DATA.currentFocus.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {CV_DATA.currentFocus.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#3FB950]/20 bg-[#3FB950]/[0.06] px-2.5 py-1 font-mono text-xs text-[#3FB950]/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
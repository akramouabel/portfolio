import { CV_DATA } from "@/data/cv";
import CvSectionHeader from "./CvSectionHeader";

export default function ProfessionalSnapshot() {
  return (
    <>
      <section className="px-5 py-8 sm:px-8 sm:py-10">
        <CvSectionHeader line="018" comment="quick_facts.diff" />

        <h2 className="mt-4 text-xl font-bold text-white">Quick Facts</h2>

        <dl className="mt-6 divide-y divide-white/[0.05] border-t border-white/[0.05]">
          {CV_DATA.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-center justify-between gap-4 py-3 font-mono text-sm"
            >
              <dt className="flex items-center gap-2 text-white/45">
                <span className="text-[#3FB950]">+</span>
                {fact.label}
              </dt>
              <dd className="font-semibold text-white/85">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-5 py-8 sm:px-8 sm:py-10">
        <CvSectionHeader line="034" comment="core_expertise.diff" />

        <h2 className="mt-4 text-xl font-bold text-white">Core Expertise</h2>

        <div className="mt-6 space-y-5">
          {CV_DATA.expertise.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-1.5 sm:flex-row sm:gap-4"
            >
              <span className="flex shrink-0 items-start gap-2 font-mono text-sm text-[#3FB950] sm:w-44">
                <span>+</span>
                <span className="text-white/70">{group.category}</span>
              </span>

              <p className="text-sm leading-relaxed text-white/45">
                {group.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
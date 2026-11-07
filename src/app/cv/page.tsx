import CvFileHeader from "@/components/sections/cv/CvFileHeader";
import CvFileFooter from "@/components/sections/cv/CvFileFooter";
import CvHero from "@/components/sections/cv/CvHero";
import ProfessionalSnapshot from "@/components/sections/cv/ProfessionalSnapshot";
import EducationFocus from "@/components/sections/cv/EducationFocus";
import CvContact from "@/components/sections/cv/CvContact";

export default function CvPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015]">
        <CvFileHeader />

        <div className="divide-y divide-white/[0.06]">
          <CvHero />
          <ProfessionalSnapshot />
          <EducationFocus />
          <CvContact />
        </div>

        <CvFileFooter />
      </div>
    </main>
  );
}
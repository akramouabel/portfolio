import { Project } from "@/types/projects";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyBrief from "./CaseStudyBrief";
import CaseStudyResults from "./CaseStudyResults";
import CaseStudyFeatures from "./CaseStudyFeatures";
import CaseStudyExperience from "./CaseStudyExperience";
import CaseStudyStack from "./CaseStudyStack";
import CaseStudyReflection from "./CaseStudyReflection";
import NextCaseStudy from "./NextCaseStudy";
import CaseStudyShowcase from "./CaseStudyshowcase";

interface CaseStudyPageProps {
  project: Project;
}

export default function CaseStudyPage({ project }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-white">
      <CaseStudyHero project={project} />
      <CaseStudyBrief project={project} />
      <CaseStudyResults project={project} />
      <CaseStudyFeatures project={project} />
      <CaseStudyExperience project={project} />
      <CaseStudyShowcase project={project} />
      <CaseStudyStack project={project} />
      <CaseStudyReflection project={project} />
      <NextCaseStudy currentSlug={project.slug} />
    </main>
  );
}
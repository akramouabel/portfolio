import { projects } from "@/data/projects";
import ProjectCaseStudyCard from "./ProjectCaseStudyCard";

// Subtitle per project — same identity-card copy used on the homepage.
// Kept here (not in data/projects.ts) since it's presentation copy, not project data.
const SUBTITLES: Record<string, string> = {
  "carloue-pro": "Car Rental Application",
  "moviemind-ai": "AI Movie Discovery",
  breathcoach: "Asthma Management System",
};

export default function ProjectsList() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 sm:gap-10 sm:pb-32 lg:px-8">
      {projects.map((project, index) => (
        <ProjectCaseStudyCard
          key={project.id}
          project={project}
          index={index}
          subtitle={SUBTITLES[project.id] ?? project.category}
        />
      ))}
    </div>
  );
}
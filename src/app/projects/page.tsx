import ProjectsPageHeader from "@/components/projects/ProjectPageHeader";
import ProjectsList from "@/components/projects/ProjectsList";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-white">
      <ProjectsPageHeader />
      <ProjectsList />
    </main>
  );
}
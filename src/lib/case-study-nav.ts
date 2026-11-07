import { projects } from "@/data/projects";
import { Project } from "@/types/projects";

export function getNextProject(currentSlug: string): Project | null {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return null;
  return projects[(index + 1) % projects.length];
}
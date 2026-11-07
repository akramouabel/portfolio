// src/types/projects.ts

import { CaseStudy } from "./case-study";

export interface Project {
  id: string;

  slug: string;

  title: string;

  category: string;

  year: string;

  status?: "completed" | "in-progress" | "concept";

  shortDescription: string;

  description?: string;

  logo?: string;


  coverImage: string;

  screens?: string[];

  technologies: string[];

  visualTheme: {
    from: string;
    to: string;
  }

  featured: boolean;

  links?: {
    github?: string;
    live?: string;
    appStore?: string;
    googlePlay?: string;
  };

  caseStudy?: CaseStudy
}

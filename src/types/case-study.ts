export interface CaseStudyHero {
  headline?: string;
  description?: string;
  visual?: string; 
}

export interface CaseStudyBrief {
  problem?: string;
  approach?: string;
  outcome?: string;
}

export interface CaseStudyResult {
  stat: string;  
  label: string;
}

export interface CaseStudyFeature {
  name: string;
  description: string;
}

export interface CaseStudyScreen {
  image?: string; 
  label: string;
  description: string;
}

export interface CaseStudyStackGroup {
  category: string; 
  items: string[];
}

export interface CaseStudy {
  role?: string;
  hero?: CaseStudyHero;
  brief?: CaseStudyBrief;
  results?: CaseStudyResult[];
  features?: CaseStudyFeature[];
  productExperience?: CaseStudyScreen[];
  showcase?: string[]; 
  stack?: CaseStudyStackGroup[];
  challenges?: string[];
  learnings?: string[];
}
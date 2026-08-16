export interface Skill {
  name: string;
  category: "Languages" | "Frameworks & SDKs" | "Tools & Platforms" | "Methodologies";
  level: "Advanced" | "Intermediate" | "Familiar";
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

/**
 * TEMPORARY PLACEHOLDER DATA
 * To verify the project build and typing. Will be replaced in Sprint 02.
 */
export const SAMPLE_SKILLS: Skill[] = [
  { name: "Dart", category: "Languages", level: "Advanced" },
  { name: "Kotlin", category: "Languages", level: "Advanced" },
  { name: "Swift", category: "Languages", level: "Intermediate" },
  { name: "TypeScript", category: "Languages", level: "Intermediate" },
  { name: "Flutter", category: "Frameworks & SDKs", level: "Advanced" },
  { name: "Android SDK", category: "Frameworks & SDKs", level: "Advanced" },
  { name: "iOS SDK", category: "Frameworks & SDKs", level: "Intermediate" },
  { name: "Firebase", category: "Tools & Platforms", level: "Advanced" },
  { name: "Git & GitHub", category: "Tools & Platforms", level: "Advanced" },
  { name: "Clean Architecture", category: "Methodologies", level: "Advanced" },
];

export const SAMPLE_SERVICES: Service[] = [
  {
    title: "Cross-Platform App Development",
    description: "Building polished, native-performing Android and iOS apps from a single codebase using Flutter.",
    iconName: "Smartphone",
  },
  {
    title: "Concept-to-Product Architecture",
    description: "Taking your mobile ideas and architecting the clean, testable, and scalable framework they need.",
    iconName: "Layers",
  },
];

export interface Skill {
  name: string;
  category: "Languages" | "Frameworks & SDKs" | "Tools & Platforms" | "Methodologies";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
}

export const SKILLS: Skill[] = [
  { name: "Dart", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Flutter", category: "Frameworks & SDKs" },
  { name: "Firebase", category: "Tools & Platforms" },
  { name: "Laravel", category: "Frameworks & SDKs" },
  { name: "REST APIs", category: "Tools & Platforms" },
  { name: "Clean Architecture", category: "Methodologies" },
  { name: "Git & GitHub", category: "Tools & Platforms" },
];

export const SERVICES: Service[] = [
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description:
      "Build cross-platform Flutter applications with polished interfaces and scalable, maintainable architecture for both Android and iOS.",
    iconName: "Smartphone",
    technologies: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    description:
      "Turn an idea into a functional mobile product ready for real users, validation, and iteration — without unnecessary complexity.",
    iconName: "Zap",
    technologies: ["Flutter", "Firebase", "REST APIs"],
  },
  {
    id: "api-backend",
    title: "API & Backend Integration",
    description:
      "Connect mobile applications with REST APIs, Firebase, and backend services — keeping data flowing reliably and efficiently.",
    iconName: "GitMerge",
    technologies: ["REST APIs", "Firebase", "Laravel", "Flask"],
  },
  {
    id: "ai-features",
    title: "AI-Powered Features",
    description:
      "Integrate intelligent recommendations, assistants, and AI-powered functionality into mobile products that genuinely improve the user experience.",
    iconName: "Sparkles",
    technologies: ["Python", "Flask", "ML APIs"],
  },
];

export const WORK_STEPS: WorkStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the product, users, requirements and goals before writing a single line of code.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define features, architecture and implementation strategy — creating a clear path to delivery.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the application with a focus on quality, performance and real-world usability.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Validate functionality, responsiveness and reliability across devices and edge cases.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Prepare the product for handoff, deployment and confident future iteration.",
  },
];

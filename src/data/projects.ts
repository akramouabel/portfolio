 import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "carloue-pro",
    slug: "carloue-pro",
    title: "Carloue Pro",
    category: "Mobile Development",
    year: "2026",
    shortDescription:
      "A modern car rental mobile experience designed to make vehicle discovery and booking simple and intuitive.",
    description:
      "A mobile application project focused on creating a polished digital product with a strong user experience and modern architecture.",
    coverImage: "/cover1.png",
    screens: [
      "/Carloue-Pro/on-boarding.png",
      "/Carloue-Pro/Login-version.png",
      "/Carloue-Pro/my-cars.png",
    ],
    logo: "/Carloue-Pro/carloue.svg",
    technologies: ["Flutter", "Dart", "GetX", "Laravel"],
    visualTheme: { from: "#00E5FF", to: "#0B0F17" },
    featured: true,
    links: { github: "" },
    caseStudy: {
      role: "Mobile Developer",
      hero: {
        headline:
          "A modern car rental experience designed around seamless vehicle discovery and intuitive booking.",
        description:
          "A professional mobile application built to deliver a seamless, modern car rental experience from browsing to booking.",
      },
      stack: [
        { category: "MOBILE", items: ["Flutter", "Dart"] },
        { category: "STATE MANAGEMENT", items: ["GetX"] },
        { category: "BACKEND", items: ["Laravel"] },
      ],
      // brief, results, features, productExperience, showcase, challenges, learnings:
      // not written yet — each renders its "coming soon" placeholder
    },
  },
  {
    id: "breathcoach",
    slug: "breathcoach",
    title: "BreathCoach",
    category: "Mobile Development / IoT",
    year: "2026",
    shortDescription:
      "A smart asthma management system combining mobile technology and environmental monitoring.",
    coverImage: "/cover3.png",
    screens: [],
    logo: "",
    technologies: ["Flutter", "Laravel", "ESP32"],
    visualTheme: { from: "#3FB950", to: "#0B0F17" },
    featured: false,
    caseStudy: {
      hero: {
        headline:
          "A connected asthma self-management system combining mobile tracking with environmental monitoring.",
        description:
          "A smart health technology project pairing a mobile app with ESP32-based environmental sensors.",
      },
      stack: [
        { category: "MOBILE", items: ["Flutter"] },
        { category: "BACKEND", items: ["Laravel"] },
        { category: "HARDWARE", items: ["ESP32"] },
      ],
    },
  },
  {
    id: "moviemind-ai",
    slug: "moviemind-ai",
    title: "MovieMind AI",
    category: "AI / Mobile Development",
    year: "2026",
    shortDescription: "An AI-powered movie discovery and recommendation experience.",
    coverImage: "/cover2.png",
    screens: [],
    logo: "",
    technologies: ["Flutter", "Python", "Flask", "AI"],
    visualTheme: { from: "#3FB950", to: "#0B0F17" },
    featured: false,
    caseStudy: {
      hero: {
        headline: "An intelligent movie discovery experience powered by AI recommendations.",
        description:
          "A Flutter application delivering AI-powered movie recommendations using a custom Python backend and the TMDB API.",
      },
      stack: [
        { category: "MOBILE", items: ["Flutter"] },
        { category: "AI / BACKEND", items: ["Python", "Flask"] },
        { category: "DATA", items: ["TMDB API"] },
      ],
    },
  },
];
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  featured: boolean;
  github?: string;
  demo?: string;
}

/**
 * TEMPORARY PLACEHOLDER DATA
 * To verify the project build and typing. Will be replaced in Sprint 02 with real client/personal projects.
 */
export const SAMPLE_PROJECTS: Project[] = [
  {
    slug: "flutter-delivery-concept",
    title: "EcoDrive Logistics",
    shortDescription: "A custom Flutter mobile application showing product design and offline-first reactive state management.",
    description: "This is a placeholder case study. In Sprint 02, this will detail taking the app from initial UI layout to a functional cross-platform deployment.",
    category: "Mobile Application",
    technologies: ["Flutter", "Dart", "Hive DB", "BLoC Pattern", "Google Maps API"],
    image: "/images/projects/placeholder-delivery.jpg",
    featured: true,
    github: "https://github.com/akramouabel",
    demo: "https://github.com/akramouabel",
  },
  {
    slug: "native-android-iot",
    title: "SmartHome Controller",
    shortDescription: "Native Android application using Clean Architecture and Kotlin Jetpack Compose for low-latency IoT interactions.",
    description: "This is a placeholder case study. Details will cover Kotlin Coroutines, BLE integrations, and clean architectural separation of layers.",
    category: "Native Application",
    technologies: ["Kotlin", "Jetpack Compose", "Coroutines", "Dagger Hilt", "BLE"],
    image: "/images/projects/placeholder-iot.jpg",
    featured: false,
    github: "https://github.com/akramouabel",
  }
];

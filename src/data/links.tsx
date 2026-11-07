import { Mail } from "lucide-react";

interface ProfileItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

export const PROFILES: ProfileItem[] = [
  {
    name: "GitHub",
    href: "https://github.com/akramouabel",
    isExternal: true,
    icon: (
      <svg
        className="w-4 h-4 shrink-0 transition-colors duration-200 group-hover:text-[#00E5FF]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.36-3.7 4.9 4.9 0 0 0-.1-3.65s-1.11-.35-3.64 1.39a12 12 0 0 0-6.6 0C5.7 1.65 4.6 2 4.6 2a4.9 4.9 0 0 0-.1 3.65A5.2 5.2 0 0 0 3.1 9.35c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akram-ouabel-61a370280/",
    isExternal: true,
    icon: (
      <svg
        className="w-4 h-4 shrink-0 transition-colors duration-200 group-hover:text-[#00E5FF]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "pub.dev",
    href: "https://pub.dev",
    isExternal: true,
    icon: (
      <svg
        className="w-4 h-4 shrink-0 transition-colors duration-200 group-hover:text-[#00E5FF]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:akramouabel2005@gmail.com",
    isExternal: false,
    icon: (
      <Mail
        className="w-4 h-4 shrink-0 transition-colors duration-200 group-hover:text-[#00E5FF]"
        aria-hidden="true"
      />
    ),
  },
];
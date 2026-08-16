import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import PageWrapper from "@/components/layout/PageWrapper";
import "../styles/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akram Ouabel — Mobile / Flutter Developer",
  description: "Portfolio of Akram Ouabel, a mobile developer and product engineer specializing in Flutter, iOS, and Android. Taking mobile product ideas from concept to polished, functional applications.",
  openGraph: {
    title: "Akram Ouabel — Mobile / Flutter Developer",
    description: "Taking mobile product ideas from concept to polished, functional applications.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}

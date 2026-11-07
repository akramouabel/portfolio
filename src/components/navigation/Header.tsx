"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Moon } from "lucide-react";
import { PROFILES } from "@/data/links";
import CalendlyButton from "../calendy/CalendyButton";
import {
  headerContainer,
  headerItem,
  buttonsContainer,
  drawerVariants,
  mobileLinkItem,
} from "@/components/animations/HeroAnimations";

const NAV_LINKS = [
  { num: "01", name: "PROJECTS", href: "/#projects" },
  { num: "02", name: "CASE STUDIES", href: "/#case-studies" },
  { num: "03", name: "HIRE ME", href: "/#hire-me" },
  { num: "04", name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <header
      className={`
  fixed top-0 left-0 w-full h-18 z-50 transition-all duration-300
  bg-[#0B0F17]/70 backdrop-blur-xl border-b
  ${scrolled ? "border-white/[0.06] shadow-sm" : "border-transparent"}
`}
    >
      <motion.div
        className="max-w-[1600px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
        variants={headerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT — LOGO */}
        <motion.div
          variants={headerItem}
          className="flex items-center gap-6 shrink-0"
        >
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none"
            aria-label="Akram Ouabel — Home"
          >
            <div className="w-9 h-9 rounded-full bg-[#00E5FF] flex items-center justify-center text-[#0B0F17] font-bold text-lg">
              A
            </div>
            <span className="font-bold text-white tracking-wide text-xl hidden sm:block">
              Akram
            </span>
          </Link>
          <div
            className="hidden xl:block w-1 h-8 bg-white/10"
            aria-hidden="true"
          />
        </motion.div>

        {/* CENTER — DESKTOP NAVIGATION */}
        <motion.nav
          variants={headerContainer}
          className="hidden xl:flex items-center gap-7 relative pb-1"
          aria-label="Primary navigation"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {NAV_LINKS.map((link, index) => {
            const active = isActive(link.href);
            const showIndicator =
              hoveredIndex !== null ? hoveredIndex === index : active;

            return (
              <motion.div
                key={link.name}
                variants={headerItem}
                className="relative"
              >
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="group relative flex items-center pb-3 text-[11px] font-bold tracking-[0.15em] transition-colors duration-200 focus-visible:outline-none"
                >
                  <span className="text-white/30 mr-2 transition-colors duration-200 group-hover:text-[#00E5FF]/60">
                    {link.num}
                  </span>
                  <span
                    className={`uppercase transition-colors duration-200 ${
                      active ? "text-white" : "text-white/70"
                    } group-hover:text-white`}
                  >
                    {link.name}
                  </span>

                  {/* Shared-layout indicator — framer tweens between positions automatically,
                      no manual bounding-box math needed */}
                  {showIndicator && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute left-0 right-0 bottom-0 h-[5px] pointer-events-none"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      aria-hidden="true"
                    >
                      <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent shadow-[0_0_12px_rgba(0,229,255,0.45)]" />
                      <span className="absolute -right-[2px] -bottom-[1px] w-1 h-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff] animate-pulse motion-reduce:animate-none" />
                      <span className="absolute left-[8%] -bottom-[3px] w-[84%] h-[6px] bg-[#00e5ff]/20 blur-[5px] opacity-60" />
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        {/* RIGHT — CTA + SOCIALS */}
        <motion.div
          variants={headerItem}
          className="hidden lg:flex items-center gap-6 shrink-0"
        >
          <CalendlyButton
            variant="outline"
            size="sm"
            rounded="full"
            className="w-full sm:w-auto"
          >
            <Calendar className="h-4 w-4" />
            <span>Book a call</span>
          </CalendlyButton>

          <div className="w-[1px] h-8 bg-white/10" aria-hidden="true" />

          <div className="flex items-center gap-5 text-white/70">
            {PROFILES.filter((profile) => profile.name !== "pub.dev").map(
              (profile) => (
                <Link
                  key={profile.name}
                  href={profile.href}
                  target={profile.isExternal ? "_blank" : undefined}
                  rel={profile.isExternal ? "noopener noreferrer" : undefined}
                  className="group hover:text-white transition-colors"
                  aria-label={profile.name}
                >
                  {profile.icon}
                </Link>
              ),
            )}

            <button
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 hover:bg-white/5 transition-colors ml-2 focus-visible:outline-none"
              aria-label="Toggle dark mode"
            >
              <Moon className="w-[18px] h-[18px]" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* MOBILE TOGGLE */}
        <motion.button
          variants={headerItem}
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </motion.button>
      </motion.div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="xl:hidden absolute top-[72px] left-0 w-full bg-[#0B0F17] border-b border-white/5 shadow-2xl overflow-hidden"
          >
            <motion.nav
              variants={buttonsContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col px-6 py-4 gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <motion.div key={link.name} variants={mobileLinkItem}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center py-3 text-sm font-bold tracking-widest border-b border-white/5 transition-colors focus-visible:outline-none"
                    >
                      <span className="text-white/30 mr-3 group-hover:text-[#00E5FF]/60 transition-colors">
                        {link.num}
                      </span>
                      <span
                        className={`uppercase transition-colors ${
                          active ? "text-white" : "text-white/70"
                        } group-hover:text-white`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={mobileLinkItem}
                className="pt-6 pb-2 flex flex-col gap-4"
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full border border-[#00E5FF] text-[#00E5FF] text-sm font-semibold hover:bg-[#00E5FF]/10 transition-colors focus-visible:outline-none"
                >
                  <Calendar className="w-4 h-4" />
                  Book a call
                </Link>

                <div className="flex items-center justify-center gap-6 pt-4 text-white/70">
                  {PROFILES.map((profile) => (
                    <Link
                      key={profile.name}
                      href={profile.href}
                      target={profile.isExternal ? "_blank" : undefined}
                      rel={
                        profile.isExternal ? "noopener noreferrer" : undefined
                      }
                      className="group hover:text-white transition-colors"
                      aria-label={profile.name}
                    >
                      {profile.icon}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

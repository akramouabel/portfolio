import { PROFILES } from "@/data/links";

export default function FindMeOnline() {
  return (
    <div className="w-full pt-6 border-t border-white/5 flex flex-col gap-3">
      {/* Section Label */}
      <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">
        FIND ME ONLINE
      </span>

      {/* Clean Horizontal Links */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        {PROFILES.map((profile) => (
          <a
            key={profile.name}
            href={profile.href}
            target={profile.isExternal ? "_blank" : undefined}
            rel={profile.isExternal ? "noopener noreferrer" : undefined}
            aria-label={`Visit my ${profile.name}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-[#00E5FF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5FF] rounded-sm py-0.5"
          >
            <span className="text-white/40 group-hover:text-[#00E5FF] group-hover:-translate-y-0.5 transition-all duration-200">
              {profile.icon}
            </span>
            <span className="tracking-wide">{profile.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
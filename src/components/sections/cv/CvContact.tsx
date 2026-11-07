import Link from "next/link";
import CalendlyButton from "@/components/calendy/CalendyButton";
import { PROFILES } from "@/data/links";

export default function CvContact() {
  return (
    <section className="px-4 pt-12 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-[#00E5FF]/15 bg-[#00E5FF]/[0.03] p-6 text-center sm:p-10">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#00E5FF]">
          Let&apos;s Connect
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Ready to work together?
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/55">
          Interested in working together or discussing a mobile development
          project? Feel free to reach out.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {PROFILES.filter((profile) => profile.name !== "pub.dev").map((profile) => (
            <Link
              key={profile.name}
              href={profile.href}
              target={profile.isExternal ? "_blank" : undefined}
              rel={
                profile.isExternal
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white"
            >
              {profile.icon}
              {profile.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <CalendlyButton
            variant="primary"
            size="md"
          >
            Book a Call
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
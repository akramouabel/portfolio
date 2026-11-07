export default function CvFileFooter() {
  return (
    <div className="flex items-center justify-center gap-2 border-t border-white/10 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/25">
      <span>End of file</span>
      <span className="cursor-blink inline-block h-3 w-[2px] bg-[#00E5FF]/60" />
      <style>{`
        .cursor-blink { animation: cv-blink 1s steps(1, end) infinite; }
        @keyframes cv-blink { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .cursor-blink { animation: none; }
        }
      `}</style>
    </div>
  );
}
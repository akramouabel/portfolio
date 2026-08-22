import React, { useRef, useState } from "react";
import Image from "next/image";

const MESSAGES = [
  "Nice try! 😜",
  "Too slow! ⚡",
  "Almost had it! 🏃‍♂️",
  "Whoops! Over here! 💨",
  "Not today! 🎯",
  "Getting tired... 🥵",
  "Okay okay, you're fast! Click me now! 🏆",
];

const DODGE_RADIUS = 150;
const DODGE_COOLDOWN = 350;
const MAX_ATTEMPTS = 6;
const AUTO_REPLAY_DELAY = 2200;

type Particle = { id: number; angle: number; distance: number; emoji: string };

export default function InteractiveProfilePortrait() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCaught, setIsCaught] = useState(false);
  const [isDodging, setIsDodging] = useState(false);
  const [message, setMessage] = useState("");
  const [particles, setParticles] = useState<Particle[]>([]);

  const dodge = (rect: DOMRect, mouseX: number, mouseY: number) => {
    const maxX = rect.width / 2 - 40;
    const maxY = rect.height / 2 - 60;

    let best = { x: pos.x, y: pos.y, dist: -1 };

    for (let i = 0; i < 6; i++) {
      const candidateX = (Math.random() - 0.5) * 2 * maxX;
      const candidateY = (Math.random() - 0.5) * 2 * maxY;
      const centerX = rect.width / 2 + candidateX;
      const centerY = rect.height / 2 + candidateY;
      const dist = Math.hypot(mouseX - centerX, mouseY - centerY);
      if (dist > best.dist) best = { x: candidateX, y: candidateY, dist };
    }

    setPos({ x: best.x, y: best.y });
    setHasStarted(true);
    setAttempts((prev) => {
      const next = prev + 1;
      setMessage(MESSAGES[Math.min(prev, MESSAGES.length - 1)]);
      return next;
    });

    setIsDodging(true);
    window.setTimeout(() => setIsDodging(false), DODGE_COOLDOWN);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isCaught || isDodging || attempts >= MAX_ATTEMPTS) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const cardCenterX = rect.width / 2 + pos.x;
    const cardCenterY = rect.height / 2 + pos.y;
    const dist = Math.hypot(mouseX - cardCenterX, mouseY - cardCenterY);

    if (dist < DODGE_RADIUS) {
      dodge(rect, mouseX, mouseY);
    }
  };

  const resetGame = () => {
    setIsCaught(false);
    setHasStarted(false);
    setAttempts(0);
    setPos({ x: 0, y: 0 });
    setMessage("");
    setParticles([]);
  };

  const handleCatch = () => {
    if (isCaught) return;
    setIsCaught(true);
    setMessage("YOU WINNER! 🎉 You caught me!");
    setPos({ x: 0, y: 0 });

    const emojis = ["✨", "🎉", "⭐", "💫", "🎊"];
    const burst: Particle[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      angle: (360 / 14) * i,
      distance: 60 + Math.random() * 50,
      emoji: emojis[i % emojis.length],
    }));
    setParticles(burst);
    window.setTimeout(() => setParticles([]), 900);

    // Auto-replay — no button needed
    window.setTimeout(resetGame, AUTO_REPLAY_DELAY);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="order-first lg:order-last flex flex-col items-center justify-center relative w-full h-[480px] sm:h-[600px] lg:h-[700px]"
    >
      <div
        className="relative flex items-center justify-center transition-transform duration-[350ms] ease-out cursor-pointer select-none z-20"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        onClick={handleCatch}
      >
        <div
          className={`absolute -top-11 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap transition-all duration-300 ${
            hasStarted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          <div className="px-4 py-1.5 rounded-full bg-[#121318]/90 border border-[#00E5FF]/30 shadow-xl backdrop-blur-md">
            <span className="text-xs font-semibold text-[#00E5FF] tracking-wide">
              {message}
            </span>
          </div>
          <div className="w-2 h-2 bg-[#121318]/90 border-r border-b border-[#00E5FF]/30 rotate-45 mx-auto -mt-1" />
        </div>

        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute left-1/2 top-1/2 text-lg pointer-events-none animate-confetti-burst"
            style={
              {
                "--angle": `${p.angle}deg`,
                "--distance": `${p.distance}px`,
              } as React.CSSProperties
            }
          >
            {p.emoji}
          </span>
        ))}

        <div
          className={`absolute -inset-4 sm:-inset-6 rounded-full -z-10 transition-all duration-500 ${
            isCaught ? "scale-125 opacity-100 animate-catch-pulse" : "opacity-60"
          }`}
          aria-hidden="true"
          style={{
            background: isCaught
              ? "radial-gradient(circle, rgba(0,229,255,0.45) 0%, rgba(16,185,129,0.25) 50%, transparent 75%)"
              : "radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 75%)",
            filter: "blur(32px)",
          }}
        />

        <div
          className={`relative w-[240px] sm:w-[280px] lg:w-[320px] rounded-[28px] bg-[#121318] border ${
            isCaught
              ? "border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.25)]"
              : "border-white/10"
          } shadow-2xl overflow-hidden flex flex-col transition-all duration-300`}
        >
          <div className="relative w-full aspect-[4/5]">
            <Image
              src="/Akram OUABEL PIC.png"
              alt="Akram Ouabel"
              fill
              priority
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 17rem, 15rem"
              className="object-cover"
            />

            <div
              className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border transition-colors duration-300 ${
                isCaught
                  ? "bg-emerald-950/70 border-emerald-400/40"
                  : "bg-[#0B0F17]/80 border-white/10"
              }`}
            >
              {isCaught ? (
                <>
                  <span className="text-xs" aria-hidden="true">🏆</span>
                  <span className="text-xs font-bold tracking-wide text-emerald-400 uppercase">
                    Caught!
                  </span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF]" aria-hidden="true" />
                  <span className="text-xs font-bold tracking-wide text-[#00E5FF] uppercase">
                    Live
                  </span>
                </>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#121318] via-[#121318]/70 to-transparent pointer-events-none" />
          </div>

          <div className="relative px-5 pb-5 z-10 -mt-2">
            <div className="flex items-baseline justify-between mb-1.5 gap-2">
              <h2 className="text-xl font-bold text-white tracking-tight truncate">
                Akram Ouabel
              </h2>
              <span className="text-xs text-white/50 shrink-0">Oran, Algeria</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              <span className="text-xs font-medium text-white/60 truncate">
                Mobile Developer
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes confettiBurst {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance))
              scale(1);
            opacity: 0;
          }
        }
        .animate-confetti-burst {
          animation: confettiBurst 800ms ease-out forwards;
        }

        @keyframes catchPulse {
          0%,
          100% {
            transform: scale(1.25);
          }
          50% {
            transform: scale(1.4);
          }
        }
        .animate-catch-pulse {
          animation: catchPulse 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
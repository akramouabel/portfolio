import ScannerLight from "@/components/animations/ScannerLight";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 75% 60% at 55% 5%,
              rgba(0, 229, 255, 0.10) 0%,
              rgba(0, 170, 210, 0.045) 25%,
              transparent 65%
            ),
            linear-gradient(
              180deg,
              #0D151D 0%,
              #0B1017 45%,
              #0A0F16 100%
            )
          `,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              rgba(150, 180, 195, 0.38) 0.8px,
              transparent 1px
            )
          `,
          backgroundSize: "24px 24px",
          opacity: 0.28,
          maskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
        }}
      />


      <div
        className="absolute pointer-events-none"
        style={{
          top: "-250px",
          left: "25%",
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.10) 0%, rgba(0,229,255,0.035) 35%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />



      <ScannerLight
        delay={10}
        duration={10}
      />


      <span className="hero-particle particle-1" />
      <span className="hero-particle particle-2" />
      <span className="hero-particle particle-3" />
      <span className="hero-particle particle-4" />



      <style jsx>{`
        .hero-particle {
          position: absolute;

          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: #00e5ff;

          box-shadow:
            0 0 8px rgba(0, 229, 255, 0.7),
            0 0 18px rgba(0, 229, 255, 0.25);

          animation: particlePulse 4s ease-in-out infinite;
        }

        .particle-1 {
          top: 24%;
          left: 18%;
        }

        .particle-2 {
          top: 31%;
          left: 72%;
          animation-delay: 1s;
        }

        .particle-3 {
          top: 46%;
          left: 88%;
          animation-delay: 2s;
        }

        .particle-4 {
          top: 76%;
          left: 29%;
          animation-delay: 2.5s;
        }

        @keyframes particlePulse {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.8);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-particle {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
"use client";

import React from "react";

interface ScannerLightProps {
  delay?: number;
  duration?: number;
}

export default function ScannerLight({
  delay = 0,
  duration = 7,
}: ScannerLightProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className="scanner-light"
        style={
          {
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          } as React.CSSProperties
        }
      >
        <div className="scanner-glow" />
        <div className="scanner-core" />
      </div>

      <style jsx>{`
        .scanner-light {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 80px; /* extra room so the blur has space to breathe */

          pointer-events: none;
          opacity: 0;

          animation: scannerDrop linear infinite;

          will-change: transform, opacity;
        }

        /* wide, soft ambient glow */
        .scanner-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          background: radial-gradient(
            ellipse 60% 100% at 50% 50%,
            rgba(0, 229, 255, 0.5) 0%,
            rgba(0, 229, 255, 0.2) 35%,
            rgba(0, 229, 255, 0.06) 65%,
            transparent 100%
          );

          filter: blur(18px);
        }

        /* tighter, brighter core so it doesn't feel washed out */
        .scanner-core {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 3px;
          transform: translateY(-50%);

          background: radial-gradient(
            ellipse 40% 100% at 50% 50%,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(0, 229, 255, 0.7) 25%,
            rgba(0, 229, 255, 0.25) 55%,
            transparent 100%
          );

          filter: blur(4px);
        }

        @keyframes scannerDrop {
          0% {
            transform: translateY(-40px);
            opacity: 0;
          }

          5% {
            opacity: 1;
          }

          15% {
            opacity: 0.85;
          }

          80% {
            opacity: 0.85;
          }

          95% {
            opacity: 0;
          }

          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scanner-light {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
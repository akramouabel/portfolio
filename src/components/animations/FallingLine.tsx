import React from "react";

interface FallingLineProps {
  /**
   * Horizontal position of the line.
   * Example: "35%", "72px", "calc(50% + 100px)"
   */
  left?: string;

  /**
   * Delay before the animation starts.
   */
  delay?: number;

  /**
   * Total animation duration in seconds.
   */
  duration?: number;

  /**
   * Height of the visible light beam.
   */
  height?: number;

  /**
   * Optional additional class names.
   */
  className?: string;
}

export default function FallingLine({
  left = "50%",
  delay = 0,
  duration = 6,
  height = 120,
  className = "",
}: FallingLineProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className={`falling-line ${className}`}
        style={
          {
            left,
            height: `${height}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          } as React.CSSProperties
        }
      />

      <style jsx>{`
        .falling-line {
          position: absolute;
          top: -${height}px;

          width: 1px;

          pointer-events: none;

          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 229, 255, 0.15) 15%,
            rgba(0, 229, 255, 0.9) 50%,
            rgba(0, 229, 255, 0.15) 85%,
            transparent 100%
          );

          box-shadow:
            0 0 6px rgba(0, 229, 255, 0.35),
            0 0 14px rgba(0, 229, 255, 0.12);

          opacity: 0;

          animation-name: fallingLine;
          animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
          animation-iteration-count: infinite;

          will-change: transform, opacity;
        }

        @keyframes fallingLine {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          10% {
            opacity: 0.75;
          }

          20% {
            opacity: 0.9;
          }

          75% {
            opacity: 0.75;
          }

          90% {
            opacity: 0;
          }

          100% {
            transform: translateY(calc(100vh + ${height}px));
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .falling-line {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
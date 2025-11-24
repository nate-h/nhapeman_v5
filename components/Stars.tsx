"use client";

import { useEffect, useState, useRef } from "react";

interface StarsProps {
  containerRef: React.RefObject<HTMLElement>;
  count?: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
}

export default function Stars({ containerRef, count = 30 }: StarsProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;

    const rect = containerRef.current.getBoundingClientRect();

    // Initialize stars with random positions and animation timings
    const initialStars: Star[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: 1 + Math.random() * 2, // 1-3px
      animationDuration: 1 + Math.random() * 3, // 1-4 seconds
      animationDelay: Math.random() * 4, // 0-4 seconds delay
    }));

    setStars(initialStars);
  }, [containerRef, count]);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute pointer-events-none z-0"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
        >
          <svg
            width={star.size * 2}
            height={star.size * 2}
            viewBox={`0 0 ${star.size * 2} ${star.size * 2}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Star point */}
            <circle
              cx={star.size}
              cy={star.size}
              r={star.size * 0.5}
              fill="white"
            >
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur={`${star.animationDuration}s`}
                begin={`${star.animationDelay}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Glow effect */}
            <circle
              cx={star.size}
              cy={star.size}
              r={star.size}
              fill="white"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0;0.3;0"
                dur={`${star.animationDuration}s`}
                begin={`${star.animationDelay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      ))}
    </>
  );
}

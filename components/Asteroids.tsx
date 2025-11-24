"use client";

import { useEffect, useState, useRef } from "react";

interface AsteroidsProps {
  containerRef: React.RefObject<HTMLElement>;
  count?: number;
}

interface Asteroid {
  id: number;
  x: number;
  y: number;
  rotation: number;
  rotationSpeed: number;
  velocityX: number;
  velocityY: number;
  size: number;
  shape: number; // Different asteroid shapes
}

export default function Asteroids({ containerRef, count = 5 }: AsteroidsProps) {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;

    const rect = containerRef.current.getBoundingClientRect();

    // Initialize asteroids with random positions and velocities
    const initialAsteroids: Asteroid[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      velocityX: (Math.random() - 0.5) * 0.3,
      velocityY: (Math.random() - 0.5) * 0.3,
      size: 20 + Math.random() * 25,
      shape: Math.floor(Math.random() * 3),
    }));

    setAsteroids(initialAsteroids);

    let animationFrameId: number;

    const animate = () => {
      setAsteroids((prevAsteroids) =>
        prevAsteroids.map((asteroid) => {
          let newX = asteroid.x + asteroid.velocityX;
          let newY = asteroid.y + asteroid.velocityY;

          // Wrap around edges
          if (newX < -50) newX = rect.width + 50;
          if (newX > rect.width + 50) newX = -50;
          if (newY < -50) newY = rect.height + 50;
          if (newY > rect.height + 50) newY = -50;

          return {
            ...asteroid,
            x: newX,
            y: newY,
            rotation: (asteroid.rotation + asteroid.rotationSpeed) % 360,
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerRef, count]);

  const getAsteroidPath = (shape: number, size: number) => {
    const paths = [
      // Irregular polygon 1
      `M ${size * 0.5} ${size * 0.1} L ${size * 0.9} ${size * 0.3} L ${size * 0.8} ${size * 0.7} L ${size * 0.4} ${size * 0.9} L ${size * 0.1} ${size * 0.5} Z`,
      // Irregular polygon 2
      `M ${size * 0.6} ${size * 0.05} L ${size * 0.95} ${size * 0.4} L ${size * 0.7} ${size * 0.85} L ${size * 0.2} ${size * 0.8} L ${size * 0.05} ${size * 0.3} Z`,
      // Irregular polygon 3
      `M ${size * 0.4} ${size * 0.0} L ${size * 0.85} ${size * 0.25} L ${size * 0.9} ${size * 0.7} L ${size * 0.5} ${size * 0.95} L ${size * 0.15} ${size * 0.6} L ${size * 0.1} ${size * 0.2} Z`,
    ];
    return paths[shape];
  };

  return (
    <>
      {asteroids.map((asteroid) => (
        <div
          key={asteroid.id}
          className="absolute pointer-events-none z-0 opacity-45"
          style={{
            left: `${asteroid.x}px`,
            top: `${asteroid.y}px`,
            transform: `translate(-50%, -50%) rotate(${asteroid.rotation}deg)`,
          }}
        >
          <svg
            width={asteroid.size}
            height={asteroid.size}
            viewBox={`0 0 ${asteroid.size} ${asteroid.size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={getAsteroidPath(asteroid.shape, asteroid.size)}
              fill="#57534e"
              stroke="#78716c"
              strokeWidth="0.6"
              opacity="0.7"
            />
            {/* Rough surface details - multiple craters and spots */}
            <circle
              cx={asteroid.size * 0.25}
              cy={asteroid.size * 0.3}
              r={asteroid.size * 0.09}
              fill="#44403c"
              opacity="0.6"
            />
            <circle
              cx={asteroid.size * 0.65}
              cy={asteroid.size * 0.55}
              r={asteroid.size * 0.07}
              fill="#44403c"
              opacity="0.5"
            />
            <circle
              cx={asteroid.size * 0.4}
              cy={asteroid.size * 0.7}
              r={asteroid.size * 0.05}
              fill="#44403c"
              opacity="0.4"
            />
            <circle
              cx={asteroid.size * 0.7}
              cy={asteroid.size * 0.25}
              r={asteroid.size * 0.04}
              fill="#44403c"
              opacity="0.5"
            />
            <circle
              cx={asteroid.size * 0.35}
              cy={asteroid.size * 0.5}
              r={asteroid.size * 0.06}
              fill="#44403c"
              opacity="0.4"
            />
            {/* Add some lighter spots for texture */}
            <circle
              cx={asteroid.size * 0.5}
              cy={asteroid.size * 0.35}
              r={asteroid.size * 0.03}
              fill="#78716c"
              opacity="0.3"
            />
            <circle
              cx={asteroid.size * 0.55}
              cy={asteroid.size * 0.75}
              r={asteroid.size * 0.025}
              fill="#78716c"
              opacity="0.25"
            />
          </svg>
        </div>
      ))}
    </>
  );
}

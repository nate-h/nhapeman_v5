"use client";

import { useEffect, useState, useRef } from "react";

interface SpaceshipProps {
  containerRef: React.RefObject<HTMLElement>;
}

export default function Spaceship({ containerRef }: SpaceshipProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    let animationFrameId: number;
    const targetPosition = { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    const speed = 1.5; // Constant speed

    // Function to generate a random target position within the container
    const getRandomTarget = () => {
      const padding = 100; // Keep away from edges
      const width = rect.width;
      const height = rect.height;

      return {
        x: padding + Math.random() * (width - padding * 2),
        y: padding + Math.random() * (height - padding * 2),
      };
    };

    // Set initial target
    Object.assign(targetPosition, getRandomTarget());

    const animate = () => {
      setPosition((prev) => {
        // Calculate direction to target
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distanceToTarget = Math.sqrt(dx * dx + dy * dy);

        // If close to target, pick a new random target
        if (distanceToTarget < 50) {
          Object.assign(targetPosition, getRandomTarget());
        }

        // Calculate desired velocity direction (normalized)
        const desiredVelX = (dx / distanceToTarget) * speed;
        const desiredVelY = (dy / distanceToTarget) * speed;

        // Smooth velocity changes for gradual turning
        const steerStrength = 0.03;
        velocity.current.x += (desiredVelX - velocity.current.x) * steerStrength;
        velocity.current.y += (desiredVelY - velocity.current.y) * steerStrength;

        // Normalize velocity to maintain constant speed
        const currentSpeed = Math.sqrt(
          velocity.current.x * velocity.current.x + velocity.current.y * velocity.current.y
        );
        if (currentSpeed > 0) {
          velocity.current.x = (velocity.current.x / currentSpeed) * speed;
          velocity.current.y = (velocity.current.y / currentSpeed) * speed;
        }

        // Update position
        const newX = prev.x + velocity.current.x;
        const newY = prev.y + velocity.current.y;

        // Update rotation to point in direction of velocity
        const angle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);
        setRotation(angle);

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize position at center of container
    const initialX = rect.width / 2;
    const initialY = rect.height / 2;
    setPosition({ x: initialX, y: initialY });

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerRef]);

  return (
    <div
      className="absolute pointer-events-none z-0 opacity-55"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      {/* Spaceship SVG */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]"
      >
        {/* Main body */}
        <path
          d="M30 20 L10 15 L10 25 Z"
          fill="url(#spaceshipGradient)"
          stroke="#0d9488"
          strokeWidth="0.5"
        />
        {/* Wing top */}
        <path
          d="M15 15 L8 10 L10 15 Z"
          fill="#064e3b"
          stroke="#047857"
          strokeWidth="0.5"
        />
        {/* Wing bottom */}
        <path
          d="M15 25 L8 30 L10 25 Z"
          fill="#064e3b"
          stroke="#047857"
          strokeWidth="0.5"
        />
        {/* Cockpit */}
        <circle cx="18" cy="20" r="3" fill="#0d9488" opacity="0.6" />

        {/* Engine glow */}
        <circle cx="10" cy="20" r="2" fill="#0d9488" opacity="0.4">
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </circle>

        <defs>
          <linearGradient id="spaceshipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Thruster trail */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          right: "28px",
          width: "20px",
          height: "2px",
          background: "linear-gradient(to left, rgba(13,148,136,0.3), transparent)",
          filter: "blur(1px)",
        }}
      >
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: "linear-gradient(to left, rgba(6,78,59,0.2), transparent)",
          }}
        />
      </div>
    </div>
  );
}

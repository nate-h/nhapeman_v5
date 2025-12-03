"use client";

import { useEffect, useState, useRef } from "react";
import Alien from "./Alien";
import Star from "./Star";
import Asteroid from "./Asteroid";
import Spaceship from "./Spaceship";

interface Asteroid {
  id: number;
  x: number;
  y: number;
  rotation: number;
  rotationSpeed: number;
  velocityX: number;
  velocityY: number;
  size: number;
  shape: number;
}

interface Spaceship {
  x: number;
  y: number;
  rotation: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
}

interface Alien {
  x: number;
  y: number;
  direction: 1 | -1; // 1 for down, -1 for up
  zigzagDirection: 1 | -1; // 1 for right, -1 for left
}

export default function ParallaxSpace() {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [spaceships, setSpaceships] = useState<Spaceship[]>([
    { x: 0, y: 0, rotation: 0 },
    { x: 0, y: 0, rotation: 0 },
    { x: 0, y: 0, rotation: 0 },
  ]);
  const [stars, setStars] = useState<Star[]>([]);
  const [aliens, setAliens] = useState<Alien[]>([
    { x: 20, y: 0, direction: 1, zigzagDirection: 1 },
    { x: 50, y: 0, direction: 1, zigzagDirection: 1 },
    { x: 80, y: 0, direction: 1, zigzagDirection: 1 },
  ]);
  const [scrollY, setScrollY] = useState(0);
  const velocities = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Initialize asteroids
    const initialAsteroids: Asteroid[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * viewportWidth,
      y: Math.random() * viewportHeight * 3, // Spread across scrollable area
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.8,
      velocityX: (Math.random() - 0.5) * 0.6,
      velocityY: (Math.random() - 0.5) * 0.6,
      size: 20 + Math.random() * 25,
      shape: Math.floor(Math.random() * 3),
    }));

    // eslint-disable-next-line -- not worried about penalty cost.
    setAsteroids(initialAsteroids);

    // Initialize stars
    const initialStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * viewportWidth,
      y: Math.random() * viewportHeight * 3, // Spread across scrollable area
      size: 1 + Math.random() * 2,
      animationDuration: 1 + Math.random() * 3,
      animationDelay: Math.random() * 4,
    }));

    setStars(initialStars);

    // Initialize spaceships
    setSpaceships([
      {
        x: viewportWidth / 2,
        y: viewportHeight / 2,
        rotation: 0,
      },
      {
        x: viewportWidth / 3,
        y: viewportHeight * 2, // Lower on the page
        rotation: 0,
      },
      {
        x: viewportWidth / 2.5,
        y: viewportHeight * 1.5, // Experience section area
        rotation: 0,
      },
    ]);

    // Initialize aliens at different positions
    setAliens([
      {
        x: viewportWidth * 0.2, // Start at 20% from left
        y: 0, // Start at top
        direction: 1,
        zigzagDirection: 1,
      },
      {
        x: viewportWidth * 0.5, // Start at 50% (center)
        y: viewportHeight * 1.5, // Start in middle of document
        direction: 1,
        zigzagDirection: -1, // Start moving left
      },
      {
        x: viewportWidth * 0.7, // Start at 70% from left
        y: viewportHeight * 2.5, // Start near bottom of document
        direction: -1, // Start moving up
        zigzagDirection: 1,
      },
    ]);

    // Scroll handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation loop
    let animationFrameId: number;
    const targetPositions = [
      { x: viewportWidth / 2, y: viewportHeight / 2 },
      { x: viewportWidth / 3, y: viewportHeight * 2 },
      { x: viewportWidth / 2.5, y: viewportHeight * 1.5 },
    ];

    const getRandomTargets = [
      () => ({
        x: 100 + Math.random() * (viewportWidth - 200),
        y: 100 + Math.random() * (viewportHeight - 200),
      }),
      () => ({
        x: 100 + Math.random() * (viewportWidth - 200),
        y: viewportHeight * 1.5 + Math.random() * (viewportHeight * 1.5 - 200), // Lower half of page
      }),
      () => ({
        x: 100 + Math.random() * (viewportWidth - 200),
        y: viewportHeight * 1.0 + Math.random() * (viewportHeight * 1.0), // Experience section area
      }),
    ];

    targetPositions.forEach((target, i) => {
      Object.assign(target, getRandomTargets[i]());
    });

    const animate = () => {
      const speed = 1.5;

      // Update asteroids
      setAsteroids((prev) =>
        prev.map((asteroid) => {
          let newX = asteroid.x + asteroid.velocityX;
          let newY = asteroid.y + asteroid.velocityY;

          // Wrap around edges
          if (newX < -50) newX = viewportWidth + 50;
          if (newX > viewportWidth + 50) newX = -50;
          if (newY < -50) newY = viewportHeight * 3 + 50;
          if (newY > viewportHeight * 3 + 50) newY = -50;

          return {
            ...asteroid,
            x: newX,
            y: newY,
            rotation: (asteroid.rotation + asteroid.rotationSpeed) % 360,
          };
        })
      );

      // Update all spaceships
      setSpaceships((prevSpaceships) =>
        prevSpaceships.map((prev, i) => {
          const dx = targetPositions[i].x - prev.x;
          const dy = targetPositions[i].y - prev.y;
          const distanceToTarget = Math.sqrt(dx * dx + dy * dy);

          if (distanceToTarget < 50) {
            Object.assign(targetPositions[i], getRandomTargets[i]());
          }

          const desiredVelX = (dx / distanceToTarget) * speed;
          const desiredVelY = (dy / distanceToTarget) * speed;

          const steerStrength = 0.03;
          velocities.current[i].x += (desiredVelX - velocities.current[i].x) * steerStrength;
          velocities.current[i].y += (desiredVelY - velocities.current[i].y) * steerStrength;

          const currentSpeed = Math.sqrt(
            velocities.current[i].x * velocities.current[i].x +
              velocities.current[i].y * velocities.current[i].y
          );
          if (currentSpeed > 0) {
            velocities.current[i].x = (velocities.current[i].x / currentSpeed) * speed;
            velocities.current[i].y = (velocities.current[i].y / currentSpeed) * speed;
          }

          const newX = prev.x + velocities.current[i].x;
          const newY = prev.y + velocities.current[i].y;

          const angle =
            Math.atan2(velocities.current[i].y, velocities.current[i].x) * (180 / Math.PI);

          return { x: newX, y: newY, rotation: angle };
        })
      );

      // Update all aliens with zig-zag motion
      const alienSpeeds = [
        { vertical: 0.25, horizontal: 0.35 },
        { vertical: 0.28, horizontal: 0.32 },
        { vertical: 0.22, horizontal: 0.38 },
      ];

      setAliens((prevAliens) =>
        prevAliens.map((prev, i) => {
          const verticalSpeed = alienSpeeds[i].vertical;
          const horizontalSpeed = alienSpeeds[i].horizontal;
          const documentHeight = viewportHeight * 3;
          const leftBound = viewportWidth * 0.1;
          const rightBound = viewportWidth * 0.9;

          let newY = prev.y + prev.direction * verticalSpeed;
          let newX = prev.x + prev.zigzagDirection * horizontalSpeed;
          let newDirection = prev.direction;
          let newZigzagDirection = prev.zigzagDirection;

          // Reverse vertical direction when reaching top or bottom of document
          if (newY >= documentHeight) {
            newY = documentHeight;
            newDirection = -1; // Go up
          } else if (newY <= 0) {
            newY = 0;
            newDirection = 1; // Go down
          }

          // Zig-zag: reverse horizontal direction at boundaries
          if (newX >= rightBound) {
            newX = rightBound;
            newZigzagDirection = -1; // Go left
          } else if (newX <= leftBound) {
            newX = leftBound;
            newZigzagDirection = 1; // Go right
          }

          return {
            x: newX,
            y: newY,
            direction: newDirection,
            zigzagDirection: newZigzagDirection,
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax offset - moves slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      {stars.map((star) => (
        <Star key={star.id} {...star} parallaxOffset={parallaxOffset} />
      ))}

      {/* Asteroids */}
      {asteroids.map((asteroid) => (
        <Asteroid key={asteroid.id} {...asteroid} parallaxOffset={parallaxOffset} />
      ))}

      {/* Spaceships */}
      {spaceships.map((spaceship, i) => (
        <Spaceship key={i} {...spaceship} parallaxOffset={parallaxOffset} index={i} />
      ))}

      {/* Space Invader Aliens */}
      {aliens.map((alien, i) => (
        <Alien
          key={i}
          x={alien.x}
          y={alien.y}
          parallaxOffset={parallaxOffset}
          color={["#AC92EC", "#FF8C00", "#00FF00"][i]}
        />
      ))}
    </div>
  );
}

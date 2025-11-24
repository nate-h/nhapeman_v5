"use client";

import { useEffect, useState, useRef } from "react";

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

export default function ParallaxSpace() {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [spaceship1, setSpaceship1] = useState<Spaceship>({ x: 0, y: 0, rotation: 0 });
  const [spaceship2, setSpaceship2] = useState<Spaceship>({ x: 0, y: 0, rotation: 0 });
  const [spaceship3, setSpaceship3] = useState<Spaceship>({ x: 0, y: 0, rotation: 0 });
  const [stars, setStars] = useState<Star[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const velocity1 = useRef({ x: 0, y: 0 });
  const velocity2 = useRef({ x: 0, y: 0 });
  const velocity3 = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
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
    setSpaceship1({
      x: viewportWidth / 2,
      y: viewportHeight / 2,
      rotation: 0,
    });

    setSpaceship2({
      x: viewportWidth / 3,
      y: viewportHeight * 2, // Lower on the page
      rotation: 0,
    });

    setSpaceship3({
      x: viewportWidth / 2.5,
      y: viewportHeight * 1.5, // Experience section area
      rotation: 0,
    });

    // Scroll handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation loop
    let animationFrameId: number;
    const targetPosition1 = { x: viewportWidth / 2, y: viewportHeight / 2 };
    const targetPosition2 = { x: viewportWidth / 3, y: viewportHeight * 2 };
    const targetPosition3 = { x: viewportWidth / 2.5, y: viewportHeight * 1.5 };

    const getRandomTarget1 = () => ({
      x: 100 + Math.random() * (viewportWidth - 200),
      y: 100 + Math.random() * (viewportHeight - 200),
    });

    const getRandomTarget2 = () => ({
      x: 100 + Math.random() * (viewportWidth - 200),
      y: viewportHeight * 1.5 + Math.random() * (viewportHeight * 1.5 - 200), // Lower half of page
    });

    const getRandomTarget3 = () => ({
      x: 100 + Math.random() * (viewportWidth - 200),
      y: viewportHeight * 1.0 + Math.random() * (viewportHeight * 1.0), // Experience section area
    });

    Object.assign(targetPosition1, getRandomTarget1());
    Object.assign(targetPosition2, getRandomTarget2());
    Object.assign(targetPosition3, getRandomTarget3());

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

      // Update spaceship 1
      setSpaceship1((prev) => {
        const dx = targetPosition1.x - prev.x;
        const dy = targetPosition1.y - prev.y;
        const distanceToTarget = Math.sqrt(dx * dx + dy * dy);

        if (distanceToTarget < 50) {
          Object.assign(targetPosition1, getRandomTarget1());
        }

        const desiredVelX = (dx / distanceToTarget) * speed;
        const desiredVelY = (dy / distanceToTarget) * speed;

        const steerStrength = 0.03;
        velocity1.current.x += (desiredVelX - velocity1.current.x) * steerStrength;
        velocity1.current.y += (desiredVelY - velocity1.current.y) * steerStrength;

        const currentSpeed = Math.sqrt(
          velocity1.current.x * velocity1.current.x + velocity1.current.y * velocity1.current.y
        );
        if (currentSpeed > 0) {
          velocity1.current.x = (velocity1.current.x / currentSpeed) * speed;
          velocity1.current.y = (velocity1.current.y / currentSpeed) * speed;
        }

        const newX = prev.x + velocity1.current.x;
        const newY = prev.y + velocity1.current.y;

        const angle = Math.atan2(velocity1.current.y, velocity1.current.x) * (180 / Math.PI);

        return { x: newX, y: newY, rotation: angle };
      });

      // Update spaceship 2
      setSpaceship2((prev) => {
        const dx = targetPosition2.x - prev.x;
        const dy = targetPosition2.y - prev.y;
        const distanceToTarget = Math.sqrt(dx * dx + dy * dy);

        if (distanceToTarget < 50) {
          Object.assign(targetPosition2, getRandomTarget2());
        }

        const desiredVelX = (dx / distanceToTarget) * speed;
        const desiredVelY = (dy / distanceToTarget) * speed;

        const steerStrength = 0.03;
        velocity2.current.x += (desiredVelX - velocity2.current.x) * steerStrength;
        velocity2.current.y += (desiredVelY - velocity2.current.y) * steerStrength;

        const currentSpeed = Math.sqrt(
          velocity2.current.x * velocity2.current.x + velocity2.current.y * velocity2.current.y
        );
        if (currentSpeed > 0) {
          velocity2.current.x = (velocity2.current.x / currentSpeed) * speed;
          velocity2.current.y = (velocity2.current.y / currentSpeed) * speed;
        }

        const newX = prev.x + velocity2.current.x;
        const newY = prev.y + velocity2.current.y;

        const angle = Math.atan2(velocity2.current.y, velocity2.current.x) * (180 / Math.PI);

        return { x: newX, y: newY, rotation: angle };
      });

      // Update spaceship 3
      setSpaceship3((prev) => {
        const dx = targetPosition3.x - prev.x;
        const dy = targetPosition3.y - prev.y;
        const distanceToTarget = Math.sqrt(dx * dx + dy * dy);

        if (distanceToTarget < 50) {
          Object.assign(targetPosition3, getRandomTarget3());
        }

        const desiredVelX = (dx / distanceToTarget) * speed;
        const desiredVelY = (dy / distanceToTarget) * speed;

        const steerStrength = 0.03;
        velocity3.current.x += (desiredVelX - velocity3.current.x) * steerStrength;
        velocity3.current.y += (desiredVelY - velocity3.current.y) * steerStrength;

        const currentSpeed = Math.sqrt(
          velocity3.current.x * velocity3.current.x + velocity3.current.y * velocity3.current.y
        );
        if (currentSpeed > 0) {
          velocity3.current.x = (velocity3.current.x / currentSpeed) * speed;
          velocity3.current.y = (velocity3.current.y / currentSpeed) * speed;
        }

        const newX = prev.x + velocity3.current.x;
        const newY = prev.y + velocity3.current.y;

        const angle = Math.atan2(velocity3.current.y, velocity3.current.x) * (180 / Math.PI);

        return { x: newX, y: newY, rotation: angle };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getAsteroidPath = (shape: number, size: number) => {
    const paths = [
      `M ${size * 0.40} ${size * 0.08} L ${size * 0.58} ${size * 0.05} L ${size * 0.75} ${size * 0.15} L ${size * 0.65} ${size * 0.28} L ${size * 0.92} ${size * 0.35} L ${size * 0.88} ${size * 0.52} L ${size * 0.72} ${size * 0.58} L ${size * 0.85} ${size * 0.72} L ${size * 0.68} ${size * 0.88} L ${size * 0.48} ${size * 0.95} L ${size * 0.35} ${size * 0.85} L ${size * 0.22} ${size * 0.78} L ${size * 0.18} ${size * 0.65} L ${size * 0.05} ${size * 0.55} L ${size * 0.15} ${size * 0.38} L ${size * 0.08} ${size * 0.25} L ${size * 0.22} ${size * 0.15} Z`,
      `M ${size * 0.48} ${size * 0.02} L ${size * 0.68} ${size * 0.12} L ${size * 0.75} ${size * 0.08} L ${size * 0.95} ${size * 0.25} L ${size * 0.92} ${size * 0.42} L ${size * 0.98} ${size * 0.58} L ${size * 0.78} ${size * 0.68} L ${size * 0.88} ${size * 0.82} L ${size * 0.65} ${size * 0.90} L ${size * 0.45} ${size * 0.98} L ${size * 0.28} ${size * 0.88} L ${size * 0.32} ${size * 0.75} L ${size * 0.12} ${size * 0.68} L ${size * 0.02} ${size * 0.48} L ${size * 0.08} ${size * 0.32} L ${size * 0.18} ${size * 0.28} L ${size * 0.25} ${size * 0.15} Z`,
      `M ${size * 0.52} ${size * 0.05} L ${size * 0.72} ${size * 0.02} L ${size * 0.88} ${size * 0.18} L ${size * 0.75} ${size * 0.32} L ${size * 0.95} ${size * 0.45} L ${size * 0.78} ${size * 0.52} L ${size * 0.92} ${size * 0.65} L ${size * 0.82} ${size * 0.80} L ${size * 0.58} ${size * 0.92} L ${size * 0.38} ${size * 0.98} L ${size * 0.35} ${size * 0.82} L ${size * 0.18} ${size * 0.85} L ${size * 0.08} ${size * 0.68} L ${size * 0.02} ${size * 0.45} L ${size * 0.12} ${size * 0.35} L ${size * 0.20} ${size * 0.22} L ${size * 0.32} ${size * 0.12} Z`,
    ];
    return paths[shape];
  };

  // Parallax offset - moves slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}px`,
            top: `${star.y - parallaxOffset * 0.5}px`, // Different parallax speed
          }}
        >
          <svg
            width={star.size * 2}
            height={star.size * 2}
            viewBox={`0 0 ${star.size * 2} ${star.size * 2}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

      {/* Asteroids */}
      {asteroids.map((asteroid) => (
        <div
          key={asteroid.id}
          className="absolute opacity-45"
          style={{
            left: `${asteroid.x}px`,
            top: `${asteroid.y - parallaxOffset}px`,
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

      {/* Spaceship 1 */}
      <div
        className="absolute opacity-55"
        style={{
          left: `${spaceship1.x}px`,
          top: `${spaceship1.y - parallaxOffset}px`,
          transform: `translate(-50%, -50%) rotate(${spaceship1.rotation}deg)`,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]"
        >
          <path
            d="M30 20 L10 15 L10 25 Z"
            fill="url(#spaceshipGradient1)"
            stroke="#0d9488"
            strokeWidth="0.5"
          />
          <path
            d="M15 15 L8 10 L10 15 Z"
            fill="#064e3b"
            stroke="#047857"
            strokeWidth="0.5"
          />
          <path
            d="M15 25 L8 30 L10 25 Z"
            fill="#064e3b"
            stroke="#047857"
            strokeWidth="0.5"
          />
          <circle cx="18" cy="20" r="3" fill="#0d9488" opacity="0.6" />
          <circle cx="10" cy="20" r="2" fill="#0d9488" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </circle>
          <defs>
            <linearGradient id="spaceshipGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
        </svg>
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

      {/* Spaceship 2 - Lower on page */}
      <div
        className="absolute opacity-55"
        style={{
          left: `${spaceship2.x}px`,
          top: `${spaceship2.y - parallaxOffset}px`,
          transform: `translate(-50%, -50%) rotate(${spaceship2.rotation}deg)`,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]"
        >
          <path
            d="M30 20 L10 15 L10 25 Z"
            fill="url(#spaceshipGradient2)"
            stroke="#0d9488"
            strokeWidth="0.5"
          />
          <path
            d="M15 15 L8 10 L10 15 Z"
            fill="#064e3b"
            stroke="#047857"
            strokeWidth="0.5"
          />
          <path
            d="M15 25 L8 30 L10 25 Z"
            fill="#064e3b"
            stroke="#047857"
            strokeWidth="0.5"
          />
          <circle cx="18" cy="20" r="3" fill="#0d9488" opacity="0.6" />
          <circle cx="10" cy="20" r="2" fill="#0d9488" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </circle>
          <defs>
            <linearGradient id="spaceshipGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
        </svg>
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

      {/* Spaceship 3 - Middle area */}
      <div
        className="absolute opacity-55"
        style={{
          left: `${spaceship3.x}px`,
          top: `${spaceship3.y - parallaxOffset}px`,
          transform: `translate(-50%, -50%) rotate(${spaceship3.rotation}deg)`,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]"
        >
          <path
            d="M30 20 L10 15 L10 25 Z"
            fill="url(#spaceshipGradient3)"
            stroke="#0d9488"
            strokeWidth="0.5"
          />
          <path
            d="M15 15 L8 10 L10 15 Z"
            fill="#064e3b"
            stroke="#047857"
            strokeWidth="0.5"
          />
          <path
            d="M15 25 L8 30 L10 25 Z"
            fill="#064e3b"
            stroke="#047857"
            strokeWidth="0.5"
          />
          <circle cx="18" cy="20" r="3" fill="#0d9488" opacity="0.6" />
          <circle cx="10" cy="20" r="2" fill="#0d9488" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </circle>
          <defs>
            <linearGradient id="spaceshipGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
        </svg>
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
    </div>
  );
}

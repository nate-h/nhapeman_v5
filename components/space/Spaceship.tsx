interface SpaceshipProps {
  x: number;
  y: number;
  rotation: number;
  parallaxOffset: number;
  index: number;
}

export default function Spaceship({ x, y, rotation, parallaxOffset, index }: SpaceshipProps) {
  return (
    <div
      className="absolute opacity-55"
      style={{
        left: `${x}px`,
        top: `${y - parallaxOffset}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
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
          fill={`url(#spaceshipGradient${index + 1})`}
          stroke="#0d9488"
          strokeWidth="0.5"
        />
        <path d="M15 15 L8 10 L10 15 Z" fill="#064e3b" stroke="#047857" strokeWidth="0.5" />
        <path d="M15 25 L8 30 L10 25 Z" fill="#064e3b" stroke="#047857" strokeWidth="0.5" />
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
          <linearGradient id={`spaceshipGradient${index + 1}`} x1="0%" y1="0%" x2="100%" y2="0%">
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
  );
}

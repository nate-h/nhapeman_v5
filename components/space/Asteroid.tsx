interface AsteroidProps {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  shape: number;
  parallaxOffset: number;
}

const getAsteroidPath = (shape: number, size: number) => {
  const paths = [
    `M ${size * 0.4} ${size * 0.08} L ${size * 0.58} ${size * 0.05} L ${size * 0.75} ${size * 0.15} L ${size * 0.65} ${size * 0.28} L ${size * 0.92} ${size * 0.35} L ${size * 0.88} ${size * 0.52} L ${size * 0.72} ${size * 0.58} L ${size * 0.85} ${size * 0.72} L ${size * 0.68} ${size * 0.88} L ${size * 0.48} ${size * 0.95} L ${size * 0.35} ${size * 0.85} L ${size * 0.22} ${size * 0.78} L ${size * 0.18} ${size * 0.65} L ${size * 0.05} ${size * 0.55} L ${size * 0.15} ${size * 0.38} L ${size * 0.08} ${size * 0.25} L ${size * 0.22} ${size * 0.15} Z`,
    `M ${size * 0.48} ${size * 0.02} L ${size * 0.68} ${size * 0.12} L ${size * 0.75} ${size * 0.08} L ${size * 0.95} ${size * 0.25} L ${size * 0.92} ${size * 0.42} L ${size * 0.98} ${size * 0.58} L ${size * 0.78} ${size * 0.68} L ${size * 0.88} ${size * 0.82} L ${size * 0.65} ${size * 0.9} L ${size * 0.45} ${size * 0.98} L ${size * 0.28} ${size * 0.88} L ${size * 0.32} ${size * 0.75} L ${size * 0.12} ${size * 0.68} L ${size * 0.02} ${size * 0.48} L ${size * 0.08} ${size * 0.32} L ${size * 0.18} ${size * 0.28} L ${size * 0.25} ${size * 0.15} Z`,
    `M ${size * 0.52} ${size * 0.05} L ${size * 0.72} ${size * 0.02} L ${size * 0.88} ${size * 0.18} L ${size * 0.75} ${size * 0.32} L ${size * 0.95} ${size * 0.45} L ${size * 0.78} ${size * 0.52} L ${size * 0.92} ${size * 0.65} L ${size * 0.82} ${size * 0.8} L ${size * 0.58} ${size * 0.92} L ${size * 0.38} ${size * 0.98} L ${size * 0.35} ${size * 0.82} L ${size * 0.18} ${size * 0.85} L ${size * 0.08} ${size * 0.68} L ${size * 0.02} ${size * 0.45} L ${size * 0.12} ${size * 0.35} L ${size * 0.2} ${size * 0.22} L ${size * 0.32} ${size * 0.12} Z`,
  ];
  return paths[shape];
};

export default function Asteroid({ x, y, rotation, size, shape, parallaxOffset }: AsteroidProps) {
  return (
    <div
      className="absolute opacity-45"
      style={{
        left: `${x}px`,
        top: `${y - parallaxOffset}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={getAsteroidPath(shape, size)}
          fill="#57534e"
          stroke="#78716c"
          strokeWidth="0.6"
          opacity="0.7"
        />
        <circle cx={size * 0.25} cy={size * 0.3} r={size * 0.09} fill="#44403c" opacity="0.6" />
        <circle cx={size * 0.65} cy={size * 0.55} r={size * 0.07} fill="#44403c" opacity="0.5" />
        <circle cx={size * 0.4} cy={size * 0.7} r={size * 0.05} fill="#44403c" opacity="0.4" />
        <circle cx={size * 0.7} cy={size * 0.25} r={size * 0.04} fill="#44403c" opacity="0.5" />
        <circle cx={size * 0.35} cy={size * 0.5} r={size * 0.06} fill="#44403c" opacity="0.4" />
        <circle cx={size * 0.5} cy={size * 0.35} r={size * 0.03} fill="#78716c" opacity="0.3" />
        <circle cx={size * 0.55} cy={size * 0.75} r={size * 0.025} fill="#78716c" opacity="0.25" />
      </svg>
    </div>
  );
}

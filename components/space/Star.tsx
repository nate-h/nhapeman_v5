interface StarProps {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
  parallaxOffset: number;
}

export default function Star({
  x,
  y,
  size,
  animationDuration,
  animationDelay,
  parallaxOffset,
}: StarProps) {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}px`,
        top: `${y - parallaxOffset * 0.5}px`, // Different parallax speed
      }}
    >
      <svg
        width={size * 2}
        height={size * 2}
        viewBox={`0 0 ${size * 2} ${size * 2}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={size} cy={size} r={size * 0.5} fill="white">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${animationDuration}s`}
            begin={`${animationDelay}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={size} cy={size} r={size} fill="white" opacity="0.3">
          <animate
            attributeName="opacity"
            values="0;0.3;0"
            dur={`${animationDuration}s`}
            begin={`${animationDelay}s`}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

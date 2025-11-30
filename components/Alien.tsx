interface AlienProps {
  x: number;
  y: number;
  parallaxOffset: number;
  color: string;
}

export default function Alien({ x, y, parallaxOffset, color }: AlienProps) {
  return (
    <div
      className="absolute opacity-25"
      style={{
        left: `${x}px`,
        top: `${y - parallaxOffset}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <path fill={color} d="M469.344,266.664v-85.328h-42.656v-42.672H384v-21.328h42.688v-64h-64v42.656H320v42.672H192V95.992
          h-42.656V53.336h-64v64H128v21.328H85.344v42.672H42.688v85.328H0v149.328h64v-85.328h21.344v85.328H128v42.672h106.688v-64h-85.344
          v-21.328h213.344v21.328h-85.344v64H384v-42.672h42.688v-85.328H448v85.328h64V266.664H469.344z M192,245.336h-64v-64h64V245.336z
           M384,245.336h-64v-64h64V245.336z"/>
      </svg>
    </div>
  );
}

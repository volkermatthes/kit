import * as React from "react";

function SoundOn(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 60" fill="none">
      <g clipPath="url(#SoundOn_svg__clip0)" fill={props.color || "#000"}>
        <path d="M36.53 59.29a2.48 2.48 0 01-1.7-.67L14.04 39.36H6.71a6.54 6.54 0 01-6.53-6.53v-6.37a6.54 6.54 0 016.53-6.53h7.33L34.83.67a2.5 2.5 0 014.2 1.83v54.29a2.5 2.5 0 01-2.5 2.5zM6.71 24.93a1.54 1.54 0 00-1.53 1.53v6.37a1.54 1.54 0 001.53 1.53h8.31a2.53 2.53 0 011.7.66l17.31 16V8.23l-17.31 16a2.53 2.53 0 01-1.7.66l-8.31.04z" />
        <path d="M15.02 39.36a2.5 2.5 0 01-2.5-2.5V22.43a2.5 2.5 0 015 0v14.43a2.5 2.5 0 01-2.5 2.5zM50.63 46.74a2.45 2.45 0 01-1.76-.74 2.501 2.501 0 010-3.54 18.14 18.14 0 000-25.65 2.5 2.5 0 013.53-3.54 23.141 23.141 0 010 32.73 2.489 2.489 0 01-1.77.74z" />
        <path d="M45.18 37a2.49 2.49 0 01-1.77-.73 2.52 2.52 0 010-3.54 4.359 4.359 0 000-6.19A2.51 2.51 0 0146.97 23a9.38 9.38 0 010 13.27 2.488 2.488 0 01-1.79.73z" />
      </g>
      <defs>
        <clipPath id="SoundOn_svg__clip0">
          <path fill="#fff" transform="translate(.18)" d="M0 0h59v59.29H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SoundOn;

import * as React from "react";

function Repeat(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 59" fill="none">
      <g clipPath="url(#Repeat_svg__clip0)" fill={props.color || "#000"}>
        <path d="M50 46.33A2.49 2.49 0 0148.33 42 16.5 16.5 0 0037.5 13h-16a2.5 2.5 0 010-5h16a21.5 21.5 0 0114.11 37.72 2.49 2.49 0 01-1.61.61zM37.5 51h-16A21.5 21.5 0 017.39 13.28a2.5 2.5 0 113.28 3.77A16.5 16.5 0 0021.5 46h16a2.5 2.5 0 010 5z" />
        <path d="M29.5 59a2.49 2.49 0 01-1.77-.73 2.52 2.52 0 010-3.54L34 48.5l-6.23-6.23a2.503 2.503 0 113.54-3.54l8 8a2.52 2.52 0 010 3.54l-8 8a2.49 2.49 0 01-1.81.73zM29.5 21a2.49 2.49 0 01-1.77-.73l-8-8a2.52 2.52 0 010-3.54l8-8a2.503 2.503 0 113.54 3.54L25 10.5l6.23 6.23a2.52 2.52 0 010 3.54 2.49 2.49 0 01-1.73.73z" />
      </g>
      <defs>
        <clipPath id="Repeat_svg__clip0">
          <path fill="#fff" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Repeat;

import * as React from "react";

function Compare(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Compare_svg__clip0)" fill={props.color || "#000"}>
        <path d="M46.55 17h-44a2.5 2.5 0 010-5h44a2.5 2.5 0 010 5z" />
        <path d="M14.55 29a2.49 2.49 0 01-1.77-.73l-12-12a2.52 2.52 0 010-3.54l12-12a2.503 2.503 0 113.54 3.54L6.05 14.5l10.27 10.23a2.52 2.52 0 010 3.54 2.49 2.49 0 01-1.77.73zM56.55 47h-44a2.5 2.5 0 010-5h44a2.5 2.5 0 010 5z" />
        <path d="M44.55 59a2.49 2.49 0 01-1.77-.73 2.52 2.52 0 010-3.54L53.05 44.5 42.78 34.27a2.503 2.503 0 113.54-3.54l12 12a2.52 2.52 0 010 3.54l-12 12a2.49 2.49 0 01-1.77.73z" />
      </g>
      <defs>
        <clipPath id="Compare_svg__clip0">
          <path fill="#fff" transform="translate(.05)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Compare;

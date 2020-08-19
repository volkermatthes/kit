import * as React from "react";

function Close(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Close_svg__clip0)" fill={props.color || "#000"}>
        <path d="M29.65 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0129.65 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0029.65 5z" />
        <path d="M19.65 42a2.49 2.49 0 01-1.77-.73 2.52 2.52 0 010-3.54l20-20a2.503 2.503 0 113.54 3.54l-20 20a2.491 2.491 0 01-1.77.73z" />
        <path d="M39.65 42a2.49 2.49 0 01-1.77-.73l-20-20a2.503 2.503 0 113.54-3.54l20 20a2.52 2.52 0 010 3.54 2.491 2.491 0 01-1.77.73z" />
      </g>
      <defs>
        <clipPath id="Close_svg__clip0">
          <path fill="#fff" transform="translate(.15)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Close;

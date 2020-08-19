import * as React from "react";

function Block(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Block_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.31 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0130.31 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0030.31 5z" />
        <path d="M49.4 51.09a2.49 2.49 0 01-1.77-.73L9.45 12.18a2.503 2.503 0 113.54-3.54l38.18 38.18a2.5 2.5 0 01-1.77 4.27z" />
      </g>
      <defs>
        <clipPath id="Block_svg__clip0">
          <path fill="#fff" transform="translate(.81)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Block;

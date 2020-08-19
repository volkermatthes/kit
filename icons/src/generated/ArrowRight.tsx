import * as React from "react";

function ArrowRight(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#ArrowRight_svg__clip0)" fill={props.color || "#000"}>
        <path d="M29.379 40.232a2.5 2.5 0 11-3.536-3.535l6.718-6.718-6.718-6.717a2.5 2.5 0 113.536-3.536l8.485 8.485a2.5 2.5 0 010 3.536l-8.485 8.485z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.618 45.89A29.5 29.5 0 0059.59 29.5 29.53 29.53 0 0030.09 0a29.5 29.5 0 1024.528 45.89zM9.72 43.11A24.5 24.5 0 015.59 29.5 24.53 24.53 0 0130.09 5 24.5 24.5 0 119.719 43.111z"
        />
      </g>
      <defs>
        <clipPath id="ArrowRight_svg__clip0">
          <path fill="#fff" transform="translate(.59)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRight;

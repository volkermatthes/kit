import * as React from "react";

function ArrowUp(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#ArrowUp_svg__clip0)" fill={props.color || "#000"}>
        <path d="M40.822 30.211a2.5 2.5 0 11-3.535 3.536l-6.718-6.718-6.717 6.718a2.5 2.5 0 01-3.536-3.536l8.485-8.485a2.5 2.5 0 013.536 0l8.485 8.485z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.48 4.972A29.5 29.5 0 0030.09 0 29.53 29.53 0 00.59 29.5 29.5 29.5 0 1046.48 4.972zM43.701 49.87A24.5 24.5 0 0130.09 54a24.53 24.53 0 01-24.5-24.5 24.5 24.5 0 1138.112 20.371z"
        />
      </g>
      <defs>
        <clipPath id="ArrowUp_svg__clip0">
          <path fill="#fff" transform="translate(.59)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowUp;

import * as React from "react";

function Minus(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Minus_svg__clip0)" fill={props.color || "#000"}>
        <path d="M39.486 32H20.194a2.287 2.287 0 01-1.664-.732 2.58 2.58 0 01-.69-1.768c0-.663.248-1.299.69-1.768A2.287 2.287 0 0120.194 27h19.292c.624 0 1.223.263 1.664.732a2.58 2.58 0 01.69 1.768 2.58 2.58 0 01-.69 1.768 2.287 2.287 0 01-1.664.732z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.95 54.028A29.5 29.5 0 0030.34 59a29.53 29.53 0 0029.5-29.5 29.5 29.5 0 10-45.89 24.528zM16.73 9.13A24.5 24.5 0 0130.34 5a24.53 24.53 0 0124.5 24.5A24.5 24.5 0 1116.728 9.129z"
        />
      </g>
      <defs>
        <clipPath id="Minus_svg__clip0">
          <path fill="#fff" transform="translate(.84)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Minus;

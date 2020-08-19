import * as React from "react";

function Exclamation(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Exclamation_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.34 34.05a2.5 2.5 0 01-2.5-2.5v-14a2.5 2.5 0 015 0v14a2.5 2.5 0 01-2.5 2.5zM30.34 44a2.5 2.5 0 01-2.5-2.5v-1.17a2.5 2.5 0 015 0v1.17a2.5 2.5 0 01-2.5 2.5z" />
        <path d="M30.34 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0130.34 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0030.34 5z" />
      </g>
      <defs>
        <clipPath id="Exclamation_svg__clip0">
          <path fill="#fff" transform="translate(.84)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Exclamation;

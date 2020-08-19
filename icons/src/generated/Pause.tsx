import * as React from "react";

function Pause(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Pause_svg__clip0)" fill={props.color || "#000"}>
        <path d="M29.65 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0129.65 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0029.65 5z" />
        <path d="M37.29 44a2.5 2.5 0 01-2.5-2.5v-24a2.5 2.5 0 015 0v24a2.5 2.5 0 01-2.5 2.5zM22.01 44a2.5 2.5 0 01-2.5-2.5v-24a2.5 2.5 0 015 0v24a2.49 2.49 0 01-2.5 2.5z" />
      </g>
      <defs>
        <clipPath id="Pause_svg__clip0">
          <path fill="#fff" transform="translate(.15)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Pause;

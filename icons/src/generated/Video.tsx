import * as React from "react";

function Video(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 39" fill="none">
      <g clipPath="url(#Video_svg__clip0)" fill={props.color || "#000"}>
        <path d="M35.31 39h-24A10.51 10.51 0 01.81 28.5v-18A10.51 10.51 0 0111.31 0h24a10.51 10.51 0 0110.5 10.5v18A10.51 10.51 0 0135.31 39zm-24-34a5.51 5.51 0 00-5.5 5.5v18a5.51 5.51 0 005.5 5.5h24a5.51 5.51 0 005.5-5.5v-18a5.51 5.51 0 00-5.5-5.5h-24z" />
        <path d="M57.31 32.49a2.489 2.489 0 01-1-.23l-14-6.34a2.501 2.501 0 112.06-4.55l10.44 4.74V12.88l-10.47 4.71A2.515 2.515 0 1142.28 13l14-6.3A2.5 2.5 0 0159.81 9v21a2.49 2.49 0 01-2.5 2.49z" />
      </g>
      <defs>
        <clipPath id="Video_svg__clip0">
          <path fill="#fff" transform="translate(.81)" d="M0 0h59v39H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Video;

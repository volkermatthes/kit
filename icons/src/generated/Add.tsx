import * as React from "react";

function Add(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Add_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.46 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0130.46 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0030.46 5z" />
        <path d="M44.46 32h-28a2.5 2.5 0 010-5h28a2.5 2.5 0 010 5z" />
        <path d="M30.46 46a2.5 2.5 0 01-2.5-2.5v-28a2.5 2.5 0 015 0v28a2.5 2.5 0 01-2.5 2.5z" />
      </g>
      <defs>
        <clipPath id="Add_svg__clip0">
          <path fill="#fff" transform="translate(.96)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Add;

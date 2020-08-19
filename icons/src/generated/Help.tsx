import * as React from "react";

function Help(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Help_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.31 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0130.31 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0030.31 5z" />
        <path d="M29.56 37.62a2.5 2.5 0 01-2.5-2.5 8.73 8.73 0 016.16-8.37 3.74 3.74 0 002.65-3.6 5.56 5.56 0 00-11.12 0 2.5 2.5 0 01-5 0 10.56 10.56 0 1121.12 0 8.73 8.73 0 01-6.16 8.37 3.75 3.75 0 00-2.65 3.6 2.5 2.5 0 01-2.5 2.5zM29.57 45.91a3 3 0 100-6 3 3 0 000 6z" />
      </g>
      <defs>
        <clipPath id="Help_svg__clip0">
          <path fill="#fff" transform="translate(.81)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Help;

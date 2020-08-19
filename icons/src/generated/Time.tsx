import * as React from "react";

function Time(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Time_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.31 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0130.31 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0030.31 5z" />
        <path d="M38.1 41.75a2.6 2.6 0 01-1.29-.33l-7.79-4.5a2.52 2.52 0 01-1.21-2.17v-15a2.5 2.5 0 015 0v13.56l6.54 3.77a2.5 2.5 0 01-1.25 4.67z" />
      </g>
      <defs>
        <clipPath id="Time_svg__clip0">
          <path fill="#fff" transform="translate(.81)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Time;

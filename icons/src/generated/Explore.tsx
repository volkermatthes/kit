import * as React from "react";

function Explore(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Explore_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.34 59a29.46 29.46 0 1120.86-8.62A29.401 29.401 0 0130.34 59zm0-54a24.48 24.48 0 1017.32 7.16A24.43 24.43 0 0030.34 5z" />
        <path d="M18.34 44a2.51 2.51 0 01-2.33-3.41l6.72-17.23a2.49 2.49 0 011.42-1.41l17.28-6.78a2.5 2.5 0 013.24 3.24l-6.78 17.27a2.49 2.49 0 01-1.42 1.41l-17.22 6.72a2.42 2.42 0 01-.91.19zm8.65-17.8l-4.25 10.88 10.89-4.25 4.29-10.93-10.93 4.3z" />
      </g>
      <defs>
        <clipPath id="Explore_svg__clip0">
          <path fill="#fff" transform="translate(.84)" d="M0 0h59v58.97H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Explore;

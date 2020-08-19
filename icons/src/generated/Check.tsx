import * as React from "react";

function Check(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Check_svg__clip0)" fill={props.color || "#000"}>
        <path d="M29.65 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0129.65 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0029.65 5z" />
        <path d="M26.52 39.24a2.49 2.49 0 01-1.77-.73l-7.22-7.22a2.5 2.5 0 013.53-3.54l5.46 5.46 11.72-11.72a2.499 2.499 0 014.428 1.7A2.5 2.5 0 0141.77 25L28.29 38.51a2.491 2.491 0 01-1.77.73z" />
      </g>
      <defs>
        <clipPath id="Check_svg__clip0">
          <path fill="#fff" transform="translate(.15)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Check;

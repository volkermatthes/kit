import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 59" fill="none">
      <g clipPath="url(#ArrowLeft_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.211 18.768a2.5 2.5 0 113.536 3.535l-6.718 6.718 6.718 6.717a2.5 2.5 0 11-3.536 3.536l-8.485-8.485a2.5 2.5 0 010-3.536l8.485-8.485z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.972 13.11A29.5 29.5 0 000 29.5 29.53 29.53 0 0029.5 59 29.5 29.5 0 104.972 13.11zM49.87 15.89A24.5 24.5 0 0154 29.5 24.53 24.53 0 0129.5 54a24.5 24.5 0 1120.371-38.111z"
        />
      </g>
      <defs>
        <clipPath id="ArrowLeft_svg__clip0">
          <path fill="#fff" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowLeft;

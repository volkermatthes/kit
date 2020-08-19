import * as React from "react";

function ArrowDown(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#ArrowDown_svg__clip0)" fill={props.color || "#000"}>
        <path d="M19.358 28.789a2.5 2.5 0 113.535-3.536l6.718 6.718 6.717-6.718a2.5 2.5 0 113.536 3.536l-8.485 8.485a2.5 2.5 0 01-3.536 0l-8.485-8.485z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7 54.028A29.5 29.5 0 0030.09 59a29.53 29.53 0 0029.5-29.5A29.5 29.5 0 1013.7 54.028zM16.48 9.13A24.5 24.5 0 0130.09 5a24.53 24.53 0 0124.5 24.5A24.5 24.5 0 1116.478 9.129z"
        />
      </g>
      <defs>
        <clipPath id="ArrowDown_svg__clip0">
          <path fill="#fff" transform="translate(.59)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowDown;

import * as React from "react";

function Filter(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 52 59" fill="none">
      <g clipPath="url(#Filter_svg__clip0)">
        <path
          d="M19.49 59a2.499 2.499 0 01-2.5-2.51l.06-24.63a21.66 21.66 0 00-6.3-15.25L1.81 7.68A4.5 4.5 0 014.99 0h42.5a4.5 4.5 0 013.24 7.62l-8.71 9a21.39 21.39 0 00-6 14.92V48.5a2.49 2.49 0 01-1.26 2.17l-14 8a2.53 2.53 0 01-1.27.33zM6.2 5l8.07 8.07a26.73 26.73 0 017.77 18.8l-.05 20.32 9-5.14V31.58a26.37 26.37 0 017.4-18.39L46.28 5H6.2z"
          fill={props.color || "#000"}
        />
      </g>
      <defs>
        <clipPath id="Filter_svg__clip0">
          <path fill="#fff" transform="translate(.49)" d="M0 0h51.47v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Filter;

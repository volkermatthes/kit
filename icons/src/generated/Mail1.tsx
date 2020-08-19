import * as React from "react";

function Mail1(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 51" fill="none">
      <g clipPath="url(#Mail-1_svg__clip0)" fill={props.color || "#000"}>
        <path d="M48.55 51h-38A10.51 10.51 0 01.05 40.5v-30A10.51 10.51 0 0110.55 0h38a10.51 10.51 0 0110.5 10.5v30A10.51 10.51 0 0148.55 51zm-38-46a5.51 5.51 0 00-5.5 5.5v30a5.51 5.51 0 005.5 5.5h38a5.51 5.51 0 005.5-5.5v-30a5.51 5.51 0 00-5.5-5.5h-38z" />
        <path d="M29.55 28.51a10.45 10.45 0 01-5.15-1.34L1.47 14.28a2.503 2.503 0 112.46-4.36l22.92 12.9a5.56 5.56 0 005.39 0l22.93-12.9a2.503 2.503 0 012.46 4.36L34.7 27.17a10.45 10.45 0 01-5.15 1.34z" />
      </g>
      <defs>
        <clipPath id="Mail-1_svg__clip0">
          <path fill="#fff" transform="translate(.05)" d="M0 0h59v51H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Mail1;

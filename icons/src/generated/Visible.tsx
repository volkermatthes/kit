import * as React from "react";

function Visible(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 39" fill="none">
      <g clipPath="url(#Visible_svg__clip0)" fill={props.color || "#000"}>
        <path d="M29.52 38.56c-12.32 0-22.67-9.24-27.74-14.75a6.66 6.66 0 010-9.06C6.85 9.24 17.2 0 29.52 0c12.32 0 22.76 9.32 27.85 14.88a6.49 6.49 0 010 8.8c-5.09 5.56-15.46 14.88-27.85 14.88zM5.46 18.14a1.67 1.67 0 000 2.28c3.64 3.95 13.26 13.14 24.06 13.14 10.8 0 20.48-9.27 24.16-13.26a1.52 1.52 0 000-2.05C50 14.27 40.38 5 29.52 5S9.1 14.19 5.46 18.14z" />
        <path d="M29.52 28.07a8.79 8.79 0 118.79-8.79 8.8 8.8 0 01-8.79 8.79zm0-12.58a3.79 3.79 0 103.79 3.79 3.8 3.8 0 00-3.79-3.79z" />
      </g>
      <defs>
        <clipPath id="Visible_svg__clip0">
          <path fill="#fff" d="M0 0h59.09v38.56H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Visible;

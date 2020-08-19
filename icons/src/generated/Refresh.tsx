import * as React from "react";

function Refresh(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 46" fill="none">
      <g clipPath="url(#Refresh_svg__clip0)" fill={props.color || "#000"}>
        <path d="M28.17 45.21A24.07 24.07 0 0119 43.37a2.502 2.502 0 011.92-4.62 19 19 0 0025.29-23.62A2.524 2.524 0 1151 13.54a24 24 0 01-22.83 31.67z" />
        <path d="M56.5 25.33a2.49 2.49 0 01-1.83-.8l-6.21-6.66-6.67 6.21a2.501 2.501 0 01-3.41-3.66l8.5-7.92a2.54 2.54 0 011.79-.67 2.51 2.51 0 011.74.8l7.92 8.49a2.51 2.51 0 01-1.83 4.21zM10.42 33.37a2.5 2.5 0 01-2.37-1.7A24 24 0 0140 1.84a2.5 2.5 0 11-1.92 4.61 19 19 0 00-25.29 23.63 2.49 2.49 0 01-1.57 3.16c-.258.086-.528.13-.8.13z" />
        <path d="M10.42 33.37a2.48 2.48 0 01-1.83-.79L.67 24.09a2.501 2.501 0 113.66-3.41l6.21 6.66 6.67-6.21a2.499 2.499 0 113.41 3.65l-8.5 7.92a2.47 2.47 0 01-1.7.67z" />
      </g>
      <defs>
        <clipPath id="Refresh_svg__clip0">
          <path fill="#fff" d="M0 0h59v45.21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Refresh;

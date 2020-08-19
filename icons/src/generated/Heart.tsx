import * as React from "react";

function Heart(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 58" fill="none">
      <g clipPath="url(#Heart_svg__clip0)">
        <path
          d="M29.68 57.27l-1.08-.51A64.996 64.996 0 0114.5 47C5.18 38.54.18 28.68.18 18.5a18.49 18.49 0 0129.5-14.86 18.49 18.49 0 0129.5 14.86c0 10.18-5 20-14.32 28.52a64.997 64.997 0 01-14.1 9.74l-1.08.51zM18.68 5a13.52 13.52 0 00-13.5 13.5c0 18.7 19.63 30.5 24.5 33.18C34.54 49 54.18 37.2 54.18 18.5A13.49 13.49 0 0031.4 8.71l-1.72 1.64-1.72-1.64A13.46 13.46 0 0018.68 5z"
          fill={props.color || "#000"}
        />
      </g>
      <defs>
        <clipPath id="Heart_svg__clip0">
          <path fill="#fff" transform="translate(.18)" d="M0 0h59v57.27H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Heart;

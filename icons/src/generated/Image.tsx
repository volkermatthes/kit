import * as React from "react";

function Image(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Image_svg__clip0)" fill={props.color || "#000"}>
        <path d="M49.34 59h-38A10.51 10.51 0 01.84 48.5v-38A10.51 10.51 0 0111.34 0h38a10.51 10.51 0 0110.5 10.5v38A10.51 10.51 0 0149.34 59zm-38-54a5.51 5.51 0 00-5.5 5.5v38a5.51 5.51 0 005.5 5.5h38a5.51 5.51 0 005.5-5.5v-38a5.51 5.51 0 00-5.5-5.5h-38z" />
        <path d="M3.34 49.52a2.5 2.5 0 01-1.77-4.26l16.67-16.67a2.501 2.501 0 013.54 0l6.5 6.49 12.87-12.87a2.501 2.501 0 013.54 0l14.42 14.42a2.5 2.5 0 01-3.54 3.53L42.92 27.51 30.04 40.39a2.5 2.5 0 01-3.53 0l-6.5-6.5-14.9 14.9a2.49 2.49 0 01-1.77.73zM28.12 21.86a4 4 0 100-8 4 4 0 000 8z" />
      </g>
      <defs>
        <clipPath id="Image_svg__clip0">
          <path fill="#fff" transform="translate(.84)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Image;

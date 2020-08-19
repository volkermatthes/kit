import * as React from "react";

function Music(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 37 59" fill="none">
      <g clipPath="url(#Music_svg__clip0)" fill={props.color || "#000"}>
        <path d="M26.42 12.92A10.43 10.43 0 0116 2.5a2.5 2.5 0 015 0 5.42 5.42 0 005.42 5.42 2.5 2.5 0 010 5z" />
        <path d="M34.34 20.84a2.49 2.49 0 01-2.5-2.5 5.42 5.42 0 00-5.42-5.42 2.5 2.5 0 010-5 10.43 10.43 0 0110.42 10.42 2.49 2.49 0 01-2.5 2.5zM10.5 59A10.5 10.5 0 1121 48.5 10.51 10.51 0 0110.5 59zm0-16a5.5 5.5 0 105.5 5.5 5.51 5.51 0 00-5.5-5.5z" />
        <path d="M18.5 51a2.5 2.5 0 01-2.5-2.5v-46a2.5 2.5 0 015 0v46a2.5 2.5 0 01-2.5 2.5z" />
      </g>
      <defs>
        <clipPath id="Music_svg__clip0">
          <path fill="#fff" d="M0 0h36.84v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Music;

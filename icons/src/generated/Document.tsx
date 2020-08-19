import * as React from "react";

function Document(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 49 59" fill="none">
      <g clipPath="url(#Document_svg__clip0)" fill={props.color || "#000"}>
        <path d="M46.5 21h-16a2.5 2.5 0 01-2.5-2.5v-16a2.5 2.5 0 015 0V16h13.5a2.5 2.5 0 010 5z" />
        <path d="M38.5 59h-28A10.51 10.51 0 010 48.5v-38A10.51 10.51 0 0110.5 0h24c.663 0 1.3.262 1.77.73l12 12c.468.47.73 1.107.73 1.77v34A10.51 10.51 0 0138.5 59zm-28-54A5.51 5.51 0 005 10.5v38a5.51 5.51 0 005.5 5.5h28a5.51 5.51 0 005.5-5.5v-33L33.46 5H10.5z" />
        <path d="M27.5 33.67h-16a2.5 2.5 0 010-5h16a2.5 2.5 0 010 5zM35.5 46.33h-24a2.5 2.5 0 010-5h24a2.5 2.5 0 010 5z" />
      </g>
      <defs>
        <clipPath id="Document_svg__clip0">
          <path fill="#fff" d="M0 0h49v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Document;

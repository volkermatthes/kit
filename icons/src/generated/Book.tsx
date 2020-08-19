import * as React from "react";

function Book(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 46 59" fill="none">
      <g clipPath="url(#Book_svg__clip0)" fill={props.color || "#000"}>
        <path d="M43.31 59h-32A10.51 10.51 0 01.81 48.5v-40a2.5 2.5 0 015 0v40a5.51 5.51 0 005.5 5.5h29.5V17H26.7a2.5 2.5 0 010-5h16.61a2.5 2.5 0 012.5 2.5v42a2.5 2.5 0 01-2.5 2.5z" />
        <path d="M37.31 17h-28a8.5 8.5 0 110-17h28a2.5 2.5 0 012.5 2.5v12a2.5 2.5 0 01-2.5 2.5zm-28-12a3.5 3.5 0 000 7h25.5V5H9.31zM33.31 31.33h-20a2.5 2.5 0 010-5h20a2.5 2.5 0 010 5zM33.31 44.67h-20a2.5 2.5 0 010-5h20a2.5 2.5 0 010 5z" />
      </g>
      <defs>
        <clipPath id="Book_svg__clip0">
          <path fill="#fff" transform="translate(.81)" d="M0 0h45v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Book;

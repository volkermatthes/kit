import * as React from "react";

function Edit(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Edit_svg__clip0)" fill={props.color || "#000"}>
        <path d="M3.34 59a2.54 2.54 0 01-1.77-.73 2.51 2.51 0 01-.65-2.39l3.1-12.12a2.54 2.54 0 01.65-1.15L46.55.73a2.52 2.52 0 013.54 0l9 9a2.51 2.51 0 010 3.54l-41.86 41.9a2.54 2.54 0 01-1.15.65l-12.12 3.1a2.64 2.64 0 01-.62.08zm5.35-13.34L6.84 53l7.37-1.88 39.63-39.6L48.32 6 8.69 45.66z" />
        <path d="M49.6 21.76a2.53 2.53 0 01-1.76-.76l-9-9a2.503 2.503 0 013.54-3.54l9 9a2.5 2.5 0 01-1.77 4.27l-.01.03zM47.73 59H27.46a2.5 2.5 0 010-5h20.27a2.5 2.5 0 010 5z" />
      </g>
      <defs>
        <clipPath id="Edit_svg__clip0">
          <path fill="#fff" transform="translate(.84)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Edit;

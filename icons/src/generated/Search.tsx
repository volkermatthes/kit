import * as React from "react";

function Search(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Search_svg__clip0)" fill={props.color || "#000"}>
        <path d="M24.31 47a23.5 23.5 0 1123.5-23.5A23.52 23.52 0 0124.31 47zm0-42a18.5 18.5 0 1018.5 18.5A18.52 18.52 0 0024.31 5z" />
        <path d="M57.31 59a2.49 2.49 0 01-1.77-.73L37.39 40.12a2.503 2.503 0 013.54-3.54l18.15 18.15a2.52 2.52 0 010 3.54 2.49 2.49 0 01-1.77.73z" />
      </g>
      <defs>
        <clipPath id="Search_svg__clip0">
          <path fill="#fff" transform="translate(.81)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Search;

import * as React from "react";

function Delete(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 57 59" fill="none">
      <g clipPath="url(#Delete_svg__clip0)" fill={props.color || "#000"}>
        <path d="M36.37 59H21.02a10.08 10.08 0 01-10-9.18l-3.03-36.3 5-.42 3.05 36.3a5 5 0 005 4.6h15.33a5.06 5.06 0 005-4.6l3-36.3 5 .42-3.05 36.3A10.08 10.08 0 0136.37 59z" />
        <path d="M54.09 15.81H3.31a2.5 2.5 0 010-5h50.78a2.5 2.5 0 010 5z" />
        <path d="M42.01 15.81h-5v-2.5A8.32 8.32 0 0028.7 5a8.42 8.42 0 00-8.31 8.31v2.5h-5v-2.5a13.31 13.31 0 0126.62 0v2.5zM33.37 45.39h-.17a2.5 2.5 0 01-2.33-2.66l1-14.41a2.506 2.506 0 015 .33l-1 14.41a2.51 2.51 0 01-2.5 2.33zM24.03 45.39a2.5 2.5 0 01-2.49-2.34l-1-14.41a2.505 2.505 0 015-.33l1 14.41a2.5 2.5 0 01-2.33 2.66l-.18.01z" />
      </g>
      <defs>
        <clipPath id="Delete_svg__clip0">
          <path fill="#fff" transform="translate(.81)" d="M0 0h55.78v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Delete;

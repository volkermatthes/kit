import * as React from "react";

function Checkmark(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 46 37" fill="none">
      <g clipPath="url(#Checkmark_svg__clip0)">
        <path
          d="M15.402 35.927a4.053 4.053 0 001.687.363 4.053 4.053 0 001.687-.363 4.379 4.379 0 001.43-1.045L43.94 8.819c.47-.43.854-.963 1.126-1.564a5.237 5.237 0 00.157-3.895 4.888 4.888 0 00-.997-1.667A4.382 4.382 0 0042.7.61a4.056 4.056 0 00-3.554.194 4.498 4.498 0 00-1.42 1.243l-20.637 22.61-9.613-10.533c-.832-.877-1.944-1.362-3.099-1.35-1.154.014-2.257.523-3.072 1.418-.815.896-1.277 2.106-1.285 3.37-.008 1.265.437 2.483 1.24 3.391l12.713 13.929a4.38 4.38 0 001.43 1.045z"
          fill={props.color || "#000"}
        />
      </g>
      <defs>
        <clipPath id="Checkmark_svg__clip0">
          <path fill="#fff" transform="translate(0 .29)" d="M0 0h46v36H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Checkmark;

import * as React from "react";

function Share(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 59" fill="none">
      <g clipPath="url(#Share_svg__clip0)" fill={props.color || "#000"}>
        <path d="M46.5 25A12.5 12.5 0 1159 12.5 12.52 12.52 0 0146.5 25zm0-20a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM11.5 41A11.5 11.5 0 1123 29.5 11.51 11.51 0 0111.5 41zm0-18a6.5 6.5 0 106.5 6.5 6.51 6.51 0 00-6.5-6.5zM47.5 59A11.5 11.5 0 1159 47.5 11.51 11.51 0 0147.5 59zm0-18a6.5 6.5 0 106.5 6.5 6.51 6.51 0 00-6.5-6.5z" />
        <path d="M39.45 46a2.49 2.49 0 01-1.11-.27l-19.91-10a2.5 2.5 0 112.23-4.47l19.91 10A2.5 2.5 0 0139.45 46zM19.55 28a2.5 2.5 0 01-1.12-4.74l17.82-8.91a2.501 2.501 0 013.565 3.03 2.5 2.5 0 01-1.335 1.44l-17.81 8.89a2.5 2.5 0 01-1.12.29z" />
      </g>
      <defs>
        <clipPath id="Share_svg__clip0">
          <path fill="#fff" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Share;

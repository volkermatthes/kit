import * as React from "react";

function Logout(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 53 59" fill="none">
      <g clipPath="url(#Logout_svg__clip0)" fill={props.color || "#000"}>
        <path d="M41.99 59h-31A10.51 10.51 0 01.49 48.5v-9a2.5 2.5 0 015 0v9a5.51 5.51 0 005.5 5.5h31a5.51 5.51 0 005.5-5.5v-38a5.51 5.51 0 00-5.5-5.5h-31a5.51 5.51 0 00-5.5 5.5v9a2.5 2.5 0 01-5 0v-9A10.51 10.51 0 0110.99 0h31a10.51 10.51 0 0110.5 10.5v38A10.51 10.51 0 0141.99 59z" />
        <path d="M35.49 32H2.99a2.5 2.5 0 010-5h32.5a2.5 2.5 0 010 5z" />
        <path d="M23.49 44a2.49 2.49 0 01-1.77-.73 2.52 2.52 0 010-3.54L31.95 29.5 21.72 19.27a2.503 2.503 0 113.54-3.54l12 12a2.52 2.52 0 010 3.54l-12 12a2.49 2.49 0 01-1.77.73z" />
      </g>
      <defs>
        <clipPath id="Logout_svg__clip0">
          <path fill="#fff" transform="translate(.49)" d="M0 0h52v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logout;

import * as React from "react";

function Home(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 58" fill="none">
      <g clipPath="url(#Home_svg__clip0)" fill={props.color || "#000"}>
        <path d="M2.5 32a2.5 2.5 0 01-1.77-4.24l27-27A2.51 2.51 0 0129.47 0c.663 0 1.3.262 1.77.73l27 27a2.503 2.503 0 11-3.54 3.54L29.47 6 4.27 31.29A2.5 2.5 0 012.5 32z" />
        <path d="M41.55 57.86h-24.1A10.49 10.49 0 017 47.37v-24.8a2.5 2.5 0 015 0v24.8a5.49 5.49 0 005.49 5.49h24.1A5.49 5.49 0 0047 47.37v-24.8a2.5 2.5 0 015 0v24.8a10.49 10.49 0 01-10.45 10.49z" />
        <path d="M36.5 48.86h-14a2.49 2.49 0 01-2.5-2.5v-6.85a9.5 9.5 0 1119 0v6.85a2.49 2.49 0 01-2.5 2.5zm-11.5-5h9v-4.35a4.5 4.5 0 10-9 0v4.35z" />
      </g>
      <defs>
        <clipPath id="Home_svg__clip0">
          <path fill="#fff" d="M0 0h59v57.86H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Home;

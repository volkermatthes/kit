import * as React from "react";

function Play(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Play_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.46 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0130.46 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0030.46 5z" />
        <path d="M23.56 44a4.37 4.37 0 01-2.26-.62 4.44 4.44 0 01-2.22-3.87v-20a4.48 4.48 0 016.68-3.91l17.8 10a4.49 4.49 0 010 7.82l-17.8 10c-.671.38-1.429.58-2.2.58zm.52-23.63v18.26l16.23-9.13-16.23-9.13z" />
      </g>
      <defs>
        <clipPath id="Play_svg__clip0">
          <path fill="#fff" transform="translate(.96)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Play;

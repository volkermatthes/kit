import * as React from "react";

function Download(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 59" fill="none">
      <g clipPath="url(#Download_svg__clip0)" fill={props.color || "#000"}>
        <path d="M45.5 41.21h-6a2.5 2.5 0 110-5h6a8.5 8.5 0 000-17h-1.77a2.49 2.49 0 01-2.49-2.32 12.5 12.5 0 00-24.94 0 2.49 2.49 0 01-2.49 2.32h-.31a8.5 8.5 0 000 17h6a2.5 2.5 0 110 5h-6a13.5 13.5 0 01-1.89-26.87 17.5 17.5 0 0134.29-.12 13.502 13.502 0 01-.4 27v-.01z" />
        <path d="M29.5 58.75a2.5 2.5 0 01-2.5-2.46v-31a2.5 2.5 0 015 0v31a2.5 2.5 0 01-2.5 2.46z" />
        <path d="M29.5 58.75a2.489 2.489 0 01-1.77-.73l-8-8a2.501 2.501 0 01.812-4.083 2.503 2.503 0 012.728.543l6.23 6.24 6.23-6.24a2.503 2.503 0 013.54 3.54l-8 8a2.49 2.49 0 01-1.77.73z" />
      </g>
      <defs>
        <clipPath id="Download_svg__clip0">
          <path fill="#fff" transform="translate(0 .29)" d="M0 0h59v58.46H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Download;

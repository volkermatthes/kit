import * as React from "react";

function Upload(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 49" fill="none">
      <g clipPath="url(#Upload_svg__clip0)" fill={props.color || "#000"}>
        <path d="M29.99 49a2.5 2.5 0 01-2.5-2.5v-26a2.5 2.5 0 015 0v26a2.5 2.5 0 01-2.5 2.5z" />
        <path d="M37.99 31a2.49 2.49 0 01-1.77-.73L29.99 24l-6.23 6.23a2.503 2.503 0 11-3.54-3.54l8-8a2.52 2.52 0 013.54 0l8 8a2.52 2.52 0 010 3.54 2.489 2.489 0 01-1.77.77z" />
        <path d="M45.99 40.92h-6a2.5 2.5 0 010-5h6a8.5 8.5 0 100-17h-1.77a2.49 2.49 0 01-2.49-2.32 12.5 12.5 0 00-24.94 0 2.49 2.49 0 01-2.49 2.32h-.31a8.5 8.5 0 100 17h6a2.5 2.5 0 010 5h-6a13.5 13.5 0 01-1.89-26.87 17.5 17.5 0 0134.29-.12 13.501 13.501 0 11-.4 27v-.01z" />
      </g>
      <defs>
        <clipPath id="Upload_svg__clip0">
          <path fill="#fff" transform="translate(.49)" d="M0 0h59v48.96H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Upload;

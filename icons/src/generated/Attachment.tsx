import * as React from "react";

function Attachment(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 58 59" fill="none">
      <g clipPath="url(#Attachment_svg__clip0)">
        <path
          d="M26.45 59c-1.86 0-3.688-.49-5.3-1.42L5.31 48.43a10.65 10.65 0 01-3.89-14.52l16.77-29a2.5 2.5 0 014.33 2.5l-16.77 29a5.64 5.64 0 002.06 7.69l15.84 9.15a5.64 5.64 0 007.69-2.06L51.66 16a3.61 3.61 0 00-1.31-4.92l-9.68-5.59a3.61 3.61 0 00-4.92 1.31L20 34.08a1.57 1.57 0 00.58 2.14l3.52 2a1.53 1.53 0 001.18.16 1.551 1.551 0 00.95-.73l12.2-21.12a2.5 2.5 0 114.33 2.5l-12.2 21.15a6.55 6.55 0 01-9 2.4l-3.52-2a6.57 6.57 0 01-2.41-9L31.42 4.3a8.61 8.61 0 0111.75-3.14l9.68 5.58A8.61 8.61 0 0156 18.49l-20.33 35.2A10.65 10.65 0 0126.45 59z"
          fill={props.color || "#000"}
        />
      </g>
      <defs>
        <clipPath id="Attachment_svg__clip0">
          <path fill="#fff" d="M0 0h57.15v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Attachment;

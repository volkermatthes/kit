import * as React from "react";

function Mail(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Mail_svg__clip0)" fill={props.color || "#000"}>
        <path d="M32 59h-.26a4.7 4.7 0 01-4.25-3.23l-5.93-17.84L3.72 32a4.73 4.73 0 01-.48-8.78L52.78.44a4.73 4.73 0 016.27 6.27L36.29 56.25A4.7 4.7 0 0132 59zM6 27.46l18.37 6.12a2.491 2.491 0 011.58 1.58l6.12 18.37L54.2 5.29 6 27.46z" />
        <path d="M23.54 38.45a2.49 2.49 0 01-1.77-.73 2.52 2.52 0 010-3.54l4.88-4.87a2.5 2.5 0 013.53 3.53l-4.87 4.88a2.49 2.49 0 01-1.77.73z" />
      </g>
      <defs>
        <clipPath id="Mail_svg__clip0">
          <path fill="#fff" transform="translate(.49)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Mail;

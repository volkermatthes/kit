import * as React from "react";

function Link(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 31" fill="none">
      <g clipPath="url(#Link_svg__clip0)" fill={props.color || "#000"}>
        <path d="M18.84 30.96C8.45 30.96 0 24.08 0 15.63S8.45.29 18.84.29a2.5 2.5 0 010 5C11.21 5.29 5 9.93 5 15.63s6.21 10.33 13.84 10.33 13.83-4.67 13.83-10.33a2.5 2.5 0 015 0c0 8.45-8.45 15.33-18.83 15.33z" />
        <path d="M40.16 30.96a2.5 2.5 0 010-5c7.63 0 13.84-4.67 13.84-10.33S47.79 5.29 40.16 5.29 26.33 9.93 26.33 15.63a2.5 2.5 0 11-5 0C21.33 7.17 29.78.29 40.16.29 50.54.29 59 7.17 59 15.63s-8.45 15.33-18.84 15.33z" />
      </g>
      <defs>
        <clipPath id="Link_svg__clip0">
          <path fill="#fff" transform="translate(0 .29)" d="M0 0h59v30.67H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Link;

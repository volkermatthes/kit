import * as React from "react";

function Inbox(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 55" fill="none">
      <g clipPath="url(#Inbox_svg__clip0)" fill={props.color || "#000"}>
        <path d="M48.55 55h-38A10.51 10.51 0 01.05 44.5v-17a2.58 2.58 0 01.17-.91l9.8-25A2.5 2.5 0 0112.35 0h34.4a2.5 2.5 0 012.3 1.59l9.8 25c.111.29.169.599.17.91v17A10.51 10.51 0 0148.55 55zM5.05 28v16.5a5.51 5.51 0 005.5 5.5h38a5.51 5.51 0 005.5-5.5V28l-9-23h-31l-9 23z" />
        <path d="M29.55 43a15.48 15.48 0 01-15.26-13H4.55a2.5 2.5 0 010-5h12a2.5 2.5 0 012.5 2.5 10.5 10.5 0 1021 0 2.5 2.5 0 012.5-2.5h12a2.5 2.5 0 010 5h-9.74a15.48 15.48 0 01-15.26 13z" />
      </g>
      <defs>
        <clipPath id="Inbox_svg__clip0">
          <path fill="#fff" transform="translate(.05)" d="M0 0h59v55H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Inbox;

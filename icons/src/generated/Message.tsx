import * as React from "react";

function Message(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 59 57" fill="none">
      <g clipPath="url(#Message_svg__clip0)" fill={props.color || "#000"}>
        <path d="M16.45 57a2.54 2.54 0 01-1.28-.35A2.5 2.5 0 0114 54.5V44.37a2.5 2.5 0 015 0v5.93l14.76-8a2.501 2.501 0 012.38 4.4l-18.45 10a2.5 2.5 0 01-1.24.3z" />
        <path d="M40.5 47h-5.6a2.5 2.5 0 010-5h5.6A13.52 13.52 0 0054 28.5v-10A13.52 13.52 0 0040.5 5h-22A13.52 13.52 0 005 18.5v10a13.52 13.52 0 0011.77 13.39 2.52 2.52 0 01-.64 5A18.53 18.53 0 010 28.5v-10A18.52 18.52 0 0118.5 0h22A18.52 18.52 0 0159 18.5v10A18.52 18.52 0 0140.5 47z" />
        <path d="M41 26H18a2.5 2.5 0 010-5h23a2.5 2.5 0 010 5zM41 35.5H18a2.5 2.5 0 010-5h23a2.5 2.5 0 010 5zM41 16.5H18a2.5 2.5 0 010-5h23a2.5 2.5 0 010 5z" />
      </g>
      <defs>
        <clipPath id="Message_svg__clip0">
          <path fill="#fff" d="M0 0h59v57H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Message;

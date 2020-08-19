import * as React from "react";

function Notification(
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 48 59" fill="none">
      <g clipPath="url(#Notification_svg__clip0)" fill={props.color || "#000"}>
        <path d="M41.13 49H6.68a6.68 6.68 0 01-5.53-10.42l2.52-3.73a5.84 5.84 0 001-3.29V19.7A19.45 19.45 0 0123 0a19.25 19.25 0 0120.14 19.23v12.33a5.84 5.84 0 001 3.29l2.52 3.73A6.68 6.68 0 0141.13 49zM23.91 5h-.7A14.45 14.45 0 009.67 19.7v11.86a10.84 10.84 0 01-1.86 6.09l-2.52 3.73a1.65 1.65 0 00-.09 1.73 1.63 1.63 0 001.48.89h34.45a1.63 1.63 0 001.48-.89 1.65 1.65 0 00-.09-1.73L40 37.65a10.84 10.84 0 01-1.86-6.09V19.23A14.23 14.23 0 0023.91 5z" />
        <path d="M23.91 59a12.51 12.51 0 01-12.5-12.5 2.5 2.5 0 015 0 7.5 7.5 0 0015 0 2.5 2.5 0 115 0A12.52 12.52 0 0123.91 59z" />
      </g>
      <defs>
        <clipPath id="Notification_svg__clip0">
          <path fill="#fff" d="M0 0h47.81v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Notification;

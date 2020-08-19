import * as React from "react";

function Profile(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Profile_svg__clip0)" fill={props.color || "#000"}>
        <path d="M30.46 59a29.5 29.5 0 1129.5-29.5A29.53 29.53 0 0130.46 59zm0-54a24.5 24.5 0 1024.5 24.5A24.53 24.53 0 0030.46 5z" />
        <path d="M44.55 51.71a14.88 14.88 0 00-28.18 0l-4.73-1.61a19.88 19.88 0 0137.64 0l-4.73 1.61z" />
        <path d="M30.46 34.07a10.82 10.82 0 1110.82-10.82 10.83 10.83 0 01-10.82 10.82zm0-16.64a5.82 5.82 0 105.82 5.82 5.83 5.83 0 00-5.82-5.82z" />
      </g>
      <defs>
        <clipPath id="Profile_svg__clip0">
          <path fill="#fff" transform="translate(.96)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Profile;

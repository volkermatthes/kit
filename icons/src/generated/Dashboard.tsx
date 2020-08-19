import * as React from "react";

function Dashboard(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 60 59" fill="none">
      <g clipPath="url(#Dashboard_svg__clip0)" fill={props.color || "#000"}>
        <path d="M24.34 18h-21a2.5 2.5 0 01-2.5-2.5v-13A2.5 2.5 0 013.34 0h21a2.5 2.5 0 012.5 2.5v13a2.5 2.5 0 01-2.5 2.5zm-18.5-5h16V5h-16v8zM57.34 35h-21a2.5 2.5 0 01-2.5-2.5v-30a2.5 2.5 0 012.5-2.5h21a2.5 2.5 0 012.5 2.5v30a2.5 2.5 0 01-2.5 2.5zm-18.5-5h16V5h-16v25zM24.34 59h-21a2.5 2.5 0 01-2.5-2.5v-30a2.5 2.5 0 012.5-2.5h21a2.5 2.5 0 012.5 2.5v30a2.5 2.5 0 01-2.5 2.5zm-18.5-5h16V29h-16v25zM57.34 59h-21a2.5 2.5 0 01-2.5-2.5v-13a2.5 2.5 0 012.5-2.5h21a2.5 2.5 0 012.5 2.5v13a2.5 2.5 0 01-2.5 2.5zm-18.5-5h16v-8h-16v8z" />
      </g>
      <defs>
        <clipPath id="Dashboard_svg__clip0">
          <path fill="#fff" transform="translate(.84)" d="M0 0h59v59H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Dashboard;

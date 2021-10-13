import React from 'react';

export default () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path fill="none" d="M21.17 46.81L18 64h24l2.75-17.19H21.17z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <circle cx="32" cy="50" r="1.5" fill="#72b8d4" />
        <animateTransform
          attributeName="transform"
          dur="0.6s"
          repeatCount="indefinite"
          type="translate"
          values="2 -10; -2 12; -1 9"
        />
        <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0" />
      </g>
      <g>
        <circle cx="39" cy="50" r="1.5" fill="#72b8d4" />
        <animateTransform
          attributeName="transform"
          begin="-0.4s"
          dur="0.6s"
          repeatCount="indefinite"
          type="translate"
          values="2 -10; -2 12; -1 9"
        />
        <animate
          attributeName="opacity"
          begin="-0.4s"
          dur="0.6s"
          repeatCount="indefinite"
          values="1;1;0"
        />
      </g>
      <g>
        <circle cx="25" cy="50" r="1.5" fill="#72b8d4" />
        <animateTransform
          attributeName="transform"
          begin="-0.2s"
          dur="0.6s"
          repeatCount="indefinite"
          type="translate"
          values="2 -10; -2 12; -1 9"
        />
        <animate
          attributeName="opacity"
          begin="-0.2s"
          dur="0.6s"
          repeatCount="indefinite"
          values="1;1;0"
        />
      </g>
    </g>
    <path
      fill="#efefef"
      stroke="#efefef"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
  </svg>
);

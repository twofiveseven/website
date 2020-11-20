import React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={1200}
      height={380}
      viewBox="0 0 1200 380"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {
          '@media (prefers-color-scheme:dark){stop.prefix__first{stop-color:#5a9681}stop.prefix__last{stop-color:#054844}path.prefix__text{fill:#f0f0f0}}'
        }
      </style>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="108.306%"
          id="prefix__linearGradient-1"
        >
          <stop offset="0%" className="prefix__first" stopColor="#ffd696" />
          <stop offset="100%" className="prefix__last" stopColor="#f1a939" />
        </linearGradient>
      </defs>
      <g
        id="prefix__TwoFiveSeven"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="prefix__twoFiveSeven">
          <ellipse
            id="prefix__Oval"
            fill="url(#prefix__linearGradient-1)"
            cx={600}
            cy={186}
            rx={600}
            ry={131}
          />
          <path
            className="prefix__text"
            d="M182.305 379.474l-13.87.48c-6.12.161-11.282-.106-15.485-.8-4.177-.695-7.526-44.058-10.048-130.09-2.548-2.244-4.373-5.343-5.477-9.297-1.077-3.981-1.615-51.072-1.615-141.27V76.573a3954.8 3954.8 0 01-17.81.12V63.71c2.207-.026 4.426-.04 6.66-.04 3.388-.026 6.067-.387 8.037-1.082 1.997-.721 3.494-1.843 4.492-3.366.998-1.523 1.681-3.487 2.05-5.891.367-2.405.63-5.29.787-8.657 3.993-.053 7.986-.12 11.979-.2v18.836a3785.44 3785.44 0 0030.3-.922v12.985c-10.218.347-20.437.654-30.655.922v21.801c0 87.501.263 132.347.788 134.538.473 2.217 1.471 3.914 2.995 5.09 1.497 1.148 3.611 1.856 6.343 2.124 2.732.24 6.265.294 10.6.16 3.31-.107 6.62-.227 9.93-.36v139.827M266.35 57.257c5.332-.454 10.678-.922 16.037-1.403-3.546 22.203-7.119 128.206-10.718 318.01a2649.78 2649.78 0 01-25.77 2.043c-2.784-186.357-5.568-288.886-8.352-307.589-1.051.08-2.102.147-3.153.2-2.653 19.077-5.293 121.98-7.92 308.712-8.694.507-17.39.988-26.084 1.442-3.546-189.322-7.093-294.844-10.639-316.566 5.385-.24 10.77-.494 16.155-.761a4314.2 4314.2 0 014.098 30.178c1.208 93.085 2.338 143.688 3.389 151.81.972-.053 1.97-.106 2.994-.16.552-3.954 1.17-8.336 1.852-13.145.683-88.623 1.38-135.473 2.089-140.55.735-5.102 1.47-10.165 2.206-15.188.71-4.996 1.419-9.672 2.128-14.027 7.644-.48 15.275-1.002 22.893-1.563a483.46 483.46 0 012.246 13.746c.709 4.916 1.418 9.873 2.128 14.869.709 4.996 1.418 51.752 2.127 140.268.683 4.73 1.3 9.031 1.852 12.905.972-.053 1.957-.12 2.955-.2 1.051-8.283 2.194-59.047 3.428-152.292a3068.68 3068.68 0 014.059-30.739m65.448 313.16c-12.82 1.362-22.683-42.388-29.592-131.252-6.908-5.023-10.363-55.613-10.363-151.77 0-12.317 3.455-21.642 10.363-27.974 6.909-6.359 16.773-10.22 29.592-11.582 12.819-1.443 22.656.267 29.512 5.13 6.83 4.836 10.245 13.412 10.245 25.73 0 96.157-3.415 147.495-10.245 154.014-6.856 90.36-16.693 136.26-29.512 137.704m0-139.067c8.826-.988 15.038-3.566 18.637-7.734 3.573-4.222 5.359-51.9 5.359-143.034 0-7.294-1.786-12.598-5.359-15.91-3.599-3.34-9.811-4.516-18.637-3.527-8.827.961-15.065 3.5-18.717 7.614-3.625 4.115-5.437 9.819-5.437 17.113 0 91.134 1.812 138.412 5.437 141.831 3.652 3.394 9.89 4.61 18.717 3.647m48.583-173.572V45.194l16.47-2.084c.447-5.37 1.524-9.899 3.231-13.586 1.734-3.634 4.164-6.653 7.29-9.057 3.152-2.405 7-4.289 11.545-5.651 4.57-1.39 9.956-2.498 16.155-3.327a592.11 592.11 0 006.344-.841v13.305l-9.536 1.283c-3.993.534-7.237 1.242-9.732 2.124-2.47.935-4.44 2.07-5.91 3.406-1.472 1.336-2.51 2.86-3.113 4.57-.526 1.736-.788 3.66-.788 5.77l28.842-3.847v12.584a82187.92 82187.92 0 00-28.96 3.847v304.503l-15.604 2.004V55.694l-16.234 2.084m70.334-38.153c0-2.966.84-5.33 2.521-7.093 1.63-1.71 3.993-2.78 7.093-3.207 3.1-.427 5.49 0 7.171 1.283 1.655 1.282 2.483 3.406 2.483 6.372 0 2.939-.828 5.277-2.483 7.013-1.68 1.684-4.071 2.739-7.171 3.166-3.1.428-5.464.014-7.093-1.242-1.68-1.256-2.521-3.353-2.521-6.292m1.891 333.158V35.696c5.175-.695 10.376-1.403 15.604-2.124v317.087c-5.228.721-10.43 1.43-15.604 2.124m88.971-329.03c5.805-.748 11.65-1.496 17.534-2.244-8.616 22.977-17.192 129.768-25.73 320.373-9.167 1.23-18.309 2.445-27.424 3.647-8.616-188.334-17.219-292.854-25.809-313.56 5.858-.802 11.73-1.603 17.613-2.405a823.642 823.642 0 0110.166 26.892c3.205 92.737 6.475 143.314 9.812 151.73 1.313-.187 2.64-.36 3.98-.52 3.31-9.325 6.566-60.77 9.771-154.336a1520.329 1520.329 0 0110.087-29.577m63.241-10.58c13.318-1.47 23.209.628 29.67 6.292 6.489 5.664 9.667 15.282 9.536 28.855a6235.484 6235.484 0 00-63.084 6.973c.237 90.52 2.443 136.97 6.62 139.347 4.177 2.378 10.127 3.113 17.85 2.204 5.673-.614 10.415-1.75 14.224-3.406 3.835-1.63 6.528-4.302 8.077-8.015 5.149-.535 10.298-1.056 15.446-1.563-1.418 7.106-5.411 12.864-11.978 17.273-6.594 88.275-15.341 133.028-26.242 134.257-6.068.694-11.52.708-16.353.04-4.86-.642-9.023-44.098-12.49-130.37-3.441-2.378-6.108-5.718-7.999-10.02-1.865-4.3-2.797-51.605-2.797-141.91 0-11.81 3.467-21.068 10.402-27.774 6.908-6.653 16.615-10.714 29.118-12.183m-23.641 31.9c15.63-1.843 31.285-3.62 46.968-5.33-.815-6.091-3.192-10.272-7.132-12.543-3.967-2.245-9.365-2.993-16.195-2.245-7.25.855-12.845 2.86-16.785 6.012-3.914 3.152-6.2 7.855-6.856 14.107m110.564 282.02c-10.902.881-19.465-42.067-25.691-128.847-6.226-2.912-10.468-8.456-12.727-16.632 5.438-.507 10.888-1.002 16.352-1.483 1.34 3.74 3.835 6.266 7.487 7.575 3.703 1.256 8.563 1.643 14.579 1.162 5.962-.454 10.704-1.616 14.224-3.487 3.546-1.87 5.32-4.368 5.32-7.494 0-1.737-.303-3.1-.907-4.088-.604-.988-1.629-1.71-3.073-2.164-1.445-84.295-3.35-126.455-5.714-126.482-2.364-.054-5.267.053-8.708.32-1.55.134-3.113.254-4.689.361-4.65.374-8.852.428-12.609.16-3.809-.213-7.04-.961-9.693-2.244-2.6-1.229-4.636-3.032-6.107-5.41-1.419-2.351-2.128-5.464-2.128-9.338 0-3.046.736-5.958 2.207-8.737 1.497-2.752 3.651-5.223 6.462-7.414 2.758-2.164 6.186-3.98 10.284-5.45 4.072-1.443 8.708-2.365 13.909-2.766 4.702-.374 9.076-.36 13.121.04 4.045.401 7.631 1.376 10.757 2.926a24.044 24.044 0 018.196 6.292c2.233 2.699 3.914 6.145 5.043 10.34-5.227.32-10.441.654-15.643 1.002-1.523-3.981-4.084-6.56-7.683-7.735-3.599-1.122-8.196-1.47-13.791-1.042-2.495.187-4.86.548-7.092 1.082-2.233.588-4.15 1.31-5.753 2.164-1.603.882-2.89 1.937-3.862 3.166-.972 1.23-1.458 2.672-1.458 4.329 0 3.286 1.563 5.263 4.69 5.93 3.125.642 8.366.669 15.72.081l4.296-.32c9.693-.695 17.035.28 22.026 2.925 4.965 2.618 7.447 49.562 7.447 140.83 0 3.847-.88 7.24-2.64 10.18-1.76 2.965-4.203 5.45-7.329 7.453-3.126 85.872-6.817 129.382-11.072 130.53-4.23 1.15-8.813 1.91-13.752 2.285M777.954.028c13.476-.348 23.484 2.591 30.025 8.816 6.594 6.252 9.812 16.151 9.654 29.697-21.278.374-42.542.949-63.793 1.724.263 90.52 2.496 137.142 6.699 139.867 4.202 2.672 10.218 3.874 18.046 3.607 5.7-.16 10.494-.895 14.382-2.204 3.861-1.31 6.593-3.74 8.196-7.294 5.2-.107 10.402-.187 15.603-.24-1.445 7-5.503 12.41-12.175 16.23-6.62 87.715-15.46 131.72-26.518 132.013-6.095.187-11.598-.24-16.51-1.282-4.886-1.015-9.076-44.792-12.57-131.331-3.493-2.619-6.186-6.146-8.077-10.58-1.891-4.436-2.837-51.807-2.837-142.113 0-11.81 3.48-20.813 10.442-27.012 7.04-6.145 16.851-9.444 29.434-9.898m-23.879 30.017c15.788-.614 31.601-1.109 47.441-1.483-.814-6.172-3.205-10.553-7.171-13.145-3.993-2.592-9.457-3.794-16.392-3.607-7.302.24-12.95 1.79-16.943 4.649-3.966 2.859-6.278 7.388-6.935 13.586M887.257 2.873c5.963.187 11.926.4 17.89.641-8.748 21.535-17.496 126.923-26.243 316.166a3267.05 3267.05 0 00-27.936-.521C842.194 129.596 833.42 23.873 824.647 1.99c5.963 0 11.939.014 17.928.04a885.94 885.94 0 0110.363 28.335c3.283 93.191 6.62 144.25 10.008 153.173l4.058.08c3.39-8.79 6.712-59.728 9.97-152.813 3.31-9.27 6.737-18.582 10.283-27.933m64.66.32c13.58.962 23.707 4.877 30.38 11.743 6.645 6.867 9.876 17.06 9.692 30.579-21.54-1.657-43.04-3.14-64.502-4.449.237 90.547 2.483 137.383 6.738 140.51 4.282 3.125 10.376 4.929 18.283 5.41 5.805.4 10.652.12 14.54-.842 3.914-.935 6.685-3.1 8.314-6.492 5.253.4 10.52.828 15.8 1.282-1.445 6.84-5.543 11.863-12.294 15.069-6.75 87.046-15.695 130.182-26.833 129.408-6.2-.374-11.781-1.323-16.746-2.846-4.965-1.523-9.22-45.714-12.766-132.574-3.52-2.992-6.24-6.786-8.157-11.381-1.917-4.65-2.876-52.114-2.876-142.393 0-11.81 3.546-20.48 10.639-26.01 7.066-5.45 16.995-7.788 29.788-7.013m-24.193 27.653a4132.38 4132.38 0 0147.992 3.166c-.788-6.252-3.205-10.861-7.25-13.827-4.045-2.992-9.562-4.729-16.549-5.21-7.434-.454-13.16.548-17.18 3.006-4.019 2.458-6.356 6.746-7.013 12.865M1050.03 12.01c10.244 1.122 17.98 4.341 23.208 9.658 5.175 5.317 7.762 13.265 7.762 23.846v289.594c-5.385-.614-10.744-1.229-16.076-1.843V45.916c0-6.894-1.603-11.943-4.807-15.15-3.205-3.179-8.275-5.13-15.21-5.85-7.224-.749-12.556.213-15.997 2.885-3.415 2.645-5.123 7.173-5.123 13.586v287.59c-5.385-.507-10.743-1.015-16.076-1.523V10.407c4.781.428 9.562.869 14.343 1.323l.236 8.456c3.126-3.66 7.014-6.118 11.663-7.374 4.65-1.176 10.009-1.443 16.077-.802"
            id="prefix__text"
            fillRule="nonzero"
            fill="#000"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;

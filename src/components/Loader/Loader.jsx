import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      {/* <div className="spinner"></div> */}
      <span className="spinner" style={{ width: "2em", height: "2em" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="19.25 12.249000549316406 25.5 39.50200271606445"
          enable-background="new 0 0 64 64"
        >
          <g>
            <g></g>

            <path
              fill="#FFFFFF"
              stroke="#536DFE"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="   M32,32L32,32c-5.316,0-9.625-4.309-9.625-9.625v-5.966h19.25v5.966C41.625,27.691,37.316,32,32,32z"
            />

            <path
              fill="#FFFFFF"
              stroke="#536DFE"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="   M32,31.839L32,31.839c5.316,0,9.625,4.309,9.625,9.625v5.966h-19.25v-5.966C22.375,36.149,26.684,31.839,32,31.839z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="   M42.42,16.409H21.58c-1.01,0-1.83-0.819-1.83-1.83v0c0-1.01,0.819-1.83,1.83-1.83H42.42c1.01,0,1.83,0.819,1.83,1.83v0   C44.25,15.59,43.431,16.409,42.42,16.409z"
            />

            <path
              fill="#FFFFFF"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="   M21.58,47.43H42.42c1.01,0,1.83,0.819,1.83,1.83v0.161c0,1.01-0.819,1.83-1.83,1.83H21.58c-1.01,0-1.83-0.819-1.83-1.83V49.26   C19.75,48.249,20.569,47.43,21.58,47.43z"
            />
          </g>
          <g>
            <line
              fill="none"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              x1="26.75"
              y1="19.75"
              x2="26.75"
              y2="25"
            />

            <line
              fill="none"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              x1="26.75"
              y1="39"
              x2="26.75"
              y2="44.25"
            />
          </g>
        </svg>
      </span>
      <div className="loading-text">در حال بارگزاری</div>
    </div>
  );
};

export default Loader;

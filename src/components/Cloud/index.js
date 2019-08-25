import React from "react";
import "./styles.css";

const Cloud = () => (
  <>
    <div id="cloud-circle"></div>
    <svg>
      <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
        <feDisplacementMap in="SourceGraphic" scale="180" />
      </filter>
    </svg>
  </>
);

export default Cloud;

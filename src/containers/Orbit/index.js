import React from "react";
import TimingContext from "../../context/timing";
import Moon from "./moon.png";
import Sun from "./sun.png";
import "./styles.css";

const morningSize = daysleft => ((30 - daysleft) / 30) * 0.2 + 1;
const morningPosition = daysLeft => Math.floor((daysLeft / 30) * 100);

const morningStyle = daysLeft => {
  daysLeft = daysLeft >= 0 ? daysLeft : 0;
  return {
    top: `${morningPosition(daysLeft)}%`,
    transform: `scale(${morningSize(daysLeft)})`
  };
};

const Orbit = () => (
  <TimingContext.Consumer>
    {({ currentHour, daysLeft }) => {
      const image = currentHour > 6 && currentHour < 21 ? Sun : Moon;
      return (
        <div className="orbit">
          <div className="orbit-container">
            <img alt="orbit" src={image} style={morningStyle(daysLeft)} />
          </div>
        </div>
      );
    }}
  </TimingContext.Consumer>
);

export default Orbit;

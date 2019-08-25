import React from "react";
import TimingContext from "../../context/timing";
import "./styles.css";

const TjCounter = () => (
  <TimingContext.Consumer>
    {({ daysLeft }) => <h2 className="tj-days-text">TJ {daysLeft}</h2>}
  </TimingContext.Consumer>
);

export default TjCounter;

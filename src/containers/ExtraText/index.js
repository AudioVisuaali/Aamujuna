import React from "react";
import TimingContext from "../../context/timing";
import "./styles.css";

const ExtraText = () => (
  <TimingContext.Consumer>
    {({ text }) => <h2 className="tj-extra-text">{text}</h2>}
  </TimingContext.Consumer>
);

export default ExtraText;

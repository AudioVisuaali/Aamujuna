import React from "react";
import TimingContext from "../../context/timing";
import Cloud from "../../components/Cloud";
import { doublePrecision } from "../../utils/time";
import "./styles.css";

const Sky = () => (
  <TimingContext.Consumer>
    {({ currentHour }) => (
      <div
        className={`sky-gradient sky-gradient-${doublePrecision(currentHour)}`}
      >
        <div className="windy-cloud-1">
          <Cloud />
        </div>
        <div className="windy-cloud-2">
          <Cloud />
        </div>
      </div>
    )}
  </TimingContext.Consumer>
);

export default Sky;

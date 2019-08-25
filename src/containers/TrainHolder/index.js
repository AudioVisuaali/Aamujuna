import React from "react";
import Train from "../../components/Train";
import TimingContext from "../../context/timing";
import "./styles.css";

const TrainHolder = () => (
  <TimingContext.Consumer>
    {({ daysLeft }) => (
      <div className="absolute-full train">
        <div className="train-holder">
          <Train text={`TJ ${daysLeft}`}></Train>
        </div>
        <div className="train-tracks"></div>
      </div>
    )}
  </TimingContext.Consumer>
);

//  <Train label={`TJ ${daysLeft}`} />

export default TrainHolder;

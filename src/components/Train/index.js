import React from "react";
import TrainImg from "./train.png";
import "./styles.css";

const Train = ({ text }) => (
  <div className="train-add-ons">
    <img alt="train" src={TrainImg} />
    <h2 className="train-days-left">{text}</h2>
  </div>
);

export default Train;

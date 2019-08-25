import React from "react";
import "./styles.css";

const Ball = ({ active }) => (
  <div className="ball" style={{ backgroundColor: active ? "red" : "green" }} />
);

export default Ball;

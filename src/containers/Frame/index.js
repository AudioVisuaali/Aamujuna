import React, { Component } from "react";
import Ball from "../../components/Ball";
import "./styles.css";

const createBalls = (x, y, active) => {
  const totalBalls = (x + y) * 2;
  const top = [];
  const right = [];
  const bottom = [];
  const left = [];

  for (let i = 0; i < totalBalls; i++) {
    const ball = <Ball key={i} active={(i + (active ? 0 : 1)) % 2} />;

    // Top row
    if (i < x) {
      top.push(ball);
      continue;
    }

    // Right row
    if (i < x + y) {
      right.push(ball);
      continue;
    }

    // Bottom row
    if (i < 2 * x + y) {
      bottom.push(ball);
      continue;
    }

    // Left row
    left.push(ball);
  }

  return [top, right, bottom, left];
};

class Frame extends Component {
  state = {
    height: 0,
    width: 0,
    active: false
  };

  componentDidMount() {
    this.updateDimensions();
    setInterval(this.toggleActive, 800);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const { height, width } = this.state;
    const {
      height: newHeight,
      width: newWidth
    } = document.body.getBoundingClientRect();

    if (newWidth === width && newHeight === height) return;

    this.setState({ width: newWidth, height: newHeight });
  };

  toggleActive = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  render() {
    const { active, height, width } = this.state;
    const xBalls = Math.floor(width / 64);
    const yBalls = Math.floor(height / 64) - 2;

    const [top, right, bottom, left] = createBalls(xBalls, yBalls, active);

    return (
      <div className="absolute-full balls">
        <div className="horizontal">{top}</div>
        <div className="mid">
          <div className="vertical">{right}</div>
          <div className="frame">{this.props.children}</div>
          <div className="vertical">{left.reverse()}</div>
        </div>
        <div className="horizontal">{bottom.reverse()}</div>
      </div>
    );
  }
}

export default Frame;

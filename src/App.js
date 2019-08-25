import React from "react";
import Balls from "./containers/balls";
import TJCounter from "./containers/tjcounter";
import Train from "./containers/train";

class App extends React.Component {
  state = { hours: 0 };
  componentDidMount() {
    this.getHour();
    setInterval(this.getHour, 20000);
  }

  getHour = () => {
    const d = new Date();
    const hours = d.getHours();
    this.setState({ hours });
  };

  render() {
    const { hours } = this.state;
    return (
      <>
        <div className={`sky-gradient sky-gradient-${hours}`} />
        <Balls />
        <TJCounter />
        <Train />
        <div className="content">asd</div>
      </>
    );
  }
}

export default App;

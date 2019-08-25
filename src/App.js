import React from "react";
import Sky from "./containers/Sky";
import Orbit from "./containers/Orbit";
import Frame from "./containers/Frame";
import TrainHolder from "./containers/TrainHolder";
import TJCounter from "./containers/TjCounter";
import ExtraText from "./containers/ExtraText";
import TimingProvider from "./context/TimingProvider";

const App = () => (
  <TimingProvider>
    <Frame>
      <Sky />
      <Orbit />
      <TrainHolder />
      <TJCounter />
      <ExtraText />
    </Frame>
  </TimingProvider>
);

export default App;

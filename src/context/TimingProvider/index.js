import React, { Component } from "react";
import TimingContext from "../timing";

const arrivalDates = [
  { value: "1/19", date: "2019-01-07" },
  { value: "2/19", date: "2019-07-08" },
  { value: "1/20", date: "2020-01-06" }
];

class TimingProvider extends Component {
  constructor() {
    super();
    var url = new URL(window.location.href);
    var arrival = url.searchParams.get("era");
    var serviceTime = url.searchParams.get("servicetime");
    var text = url.searchParams.get("text");
    const arrivalDate = arrivalDates.find(a => a.value === arrival);

    if (!arrival) {
      window.location.href =
        "/?era=1/19&servicetime=255&text=🏕️%20Ettehän%20unohtanut%20Lohtajaa%20:)%20⛺";
    }

    this.state = {
      arrival: arrivalDate.date,
      serviceTime: parseInt(serviceTime),
      text,
      dateSelected: false,
      daysLeft: null,
      currentHour: null
    };
  }

  componentDidMount() {
    // Can't use setTimeout untill next event since
    //   hibernating the pc messes this up.
    //   chrome also slows down js when tab is not active.
    this.checkTimeUpdates();
    setInterval(this.checkTimeUpdates, 2000);
  }

  checkTimeUpdates = () => {
    if (!this.state.arrival) return;

    this.checkTjChange();
    this.checkCurrentHour();
  };

  checkTjChange() {
    const { arrival, serviceTime } = this.state;

    let serviceEnd = new Date(arrival);
    serviceEnd.setDate(serviceEnd.getDate() + serviceTime - 1);
    const currentTime = new Date();

    const timeDiff = Math.abs(serviceEnd.getTime() - currentTime.getTime());
    const dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (this.state.daysLeft === dayDifference) return;
    this.setState({ daysLeft: dayDifference });
  }

  checkCurrentHour() {
    const currentHour = new Date().getHours();
    if (this.state.currentHour === currentHour) return;
    this.setState({ currentHour });
  }

  render() {
    return (
      <TimingContext.Provider value={this.state}>
        {this.props.children}
      </TimingContext.Provider>
    );
  }
}

export default TimingProvider;

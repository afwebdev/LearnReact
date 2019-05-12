import React, { Component } from "react";

class CounterDisplay extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="displayCount">
        <h1>{this.props.value}</h1>
      </div>
    );
  }

  checkZero() {
    let classes = "";
    classes += this.props.value === 0 ? "zero" : "notZero";
    return classes;
  }
}

export default CounterDisplay;

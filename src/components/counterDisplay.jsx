import React, { Component } from "react";

class CounterDisplay extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default CounterDisplay;

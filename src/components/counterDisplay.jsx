import React, { Component } from "react";

class CounterDisplay extends Component {
  checkZero = num => {
    return num === "Zero!" ? "textZero" : "";
  };

  render() {
    return (
      <div>
        <h2 className={this.checkZero(this.props.value)}>{this.props.value}</h2>
      </div>
    );
  }
}

export default CounterDisplay;

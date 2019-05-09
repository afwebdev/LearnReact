import React, { Component } from "react";

class CounterDisplay extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="displayCount">
        <span className={this.checkZero()}>{this.props.value}</span>
      </div>
    );
  }

  checkZero() {
    let classes = "";
    classes += this.state.count === 0 ? "zero" : "notZero";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <span>Zero!</span> : count;
  }
}

export default CounterDisplay;

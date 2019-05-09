import React, { Component } from "react";
import CounterDisplay from "./counterDisplay";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <div className="displayCount">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={this.incrementCount}>
            <span>+</span>
          </button>

          <button className="btn" onClick={this.decrementCount}>
            <span>-</span>
          </button>
        </div>
      </div>
    );
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  getBadgeClasses() {
    let classes = "";
    classes += this.state.count === 0 ? "zero" : "notZero";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <span>Zero!</span> : count;
  }
}

export default Counter;

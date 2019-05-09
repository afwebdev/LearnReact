import React, { Component } from "react";
import Tester from "./testcomp";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.incrementCount}
        >
          <span>+</span>
        </button>

        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.decrementCount}
        >
          <span>-</span>
        </button>
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
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <span>Zero!</span> : count;
  }
}

export default Counter;

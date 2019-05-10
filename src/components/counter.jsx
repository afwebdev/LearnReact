import React, { Component } from "react";
import CounterDisplay from "./counterDisplay";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <CounterDisplay value={this.formatCount()} />

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

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero!" : count;
  }

  checkZero() {
    let classes = "";
    classes += this.props.value === 0 ? "zero" : "notZero";
    console.log(this.props.value);
    return classes;
  }
}

export default Counter;

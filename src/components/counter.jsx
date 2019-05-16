import React, { Component } from "react";
import CounterDisplay from "./counterDisplay";
import Modifier from "./modifier";

class Counter extends Component {
  state = {
    count: 0,
    modifier: 1
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()} className="container">
        <CounterDisplay value={this.formatCount()} />

        <div className="btn-group">
          <button className="btn" onClick={this.incrementCount}>
            <span>+</span>
          </button>
          <button className="btn" onClick={this.decrementCount}>
            <span>-</span>
          </button>
        </div>
        <Modifier changeInc={this.changeIncrement} />
      </form>
    );
  }

  changeIncrement = e => {
    e.target.value === ""
      ? this.setState({ modifier: 1 })
      : this.setState({ modifier: e.target.value });
  };

  incrementCount = e => {
    this.setState({ count: this.state.count + parseInt(this.state.modifier) });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - parseInt(this.state.modifier) });
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero!" : count;
  }
}

export default Counter;

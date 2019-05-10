import React, { Component } from "react";
import CounterDisplay from "./counterDisplay";

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
        <div className="change-inc">
          <input
            onChange={this.changeIncrement}
            placeholder="Enter A Value.."
            type="text"
          />
        </div>
      </form>
    );
  }

  changeIncrement = e => {
    e.preventDefault();
    this.setState({
      modifier: e.target.value
    });
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

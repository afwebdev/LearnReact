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
      <div className="container">
        <CounterDisplay value={this.formatCount()} />

        <div className="btn-group">
          <button className="btn" onClick={this.incrementCount}>
            <span>+</span>
          </button>
          <button className="btn" onClick={this.decrementCount}>
            <span>-</span>
          </button>
        </div>

        <Modifier
          val={this.state.modifier}
          resetState={this.resetState}
          changeInc={this.changeIncrement}
        />
      </div>
    );
  }

  resetState = () => {
    this.setState({
      count: 0,
      modifier: 1
    });
  };

  changeIncrement = e => {
    this.setState({ modifier: e.target.value });
  };

  incrementCount = () => {
    if (this.state.modifier === "") {
      this.setState({
        modifier: 1
      });
    } else {
      this.setState({
        count: this.state.count + parseInt(this.state.modifier)
      });
    }
  };

  decrementCount = () => {
    if (this.state.modifier === "") {
      this.setState({
        modifier: 1
      });
    } else {
      this.setState({
        count: this.state.count - parseInt(this.state.modifier)
      });
    }
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero!" : count;
  }
}

export default Counter;

import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import Modifier from "./Modifier";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modifier: 1,
      defCheckboxChecked: true
    };
    this.btn1 = React.createRef();
    this.btn2 = React.createRef();
  }

  render() {
    return (
      <div className="container">
        <CounterDisplay value={this.formatCount()} />

        <div className="btn-group">
          <button ref={this.btn1} className="btn" onClick={this.incrementCount}>
            <span>+</span>
          </button>
          <button ref={this.btn2} className="btn" onClick={this.decrementCount}>
            <span>-</span>
          </button>
        </div>

        <Modifier
          val={this.state.modifier}
          resetState={this.resetState}
          changeInc={this.changeIncrement}
          changeType={this.changeType}
          defCheckbox={this.state.defCheckboxChecked}
        />
      </div>
    );
  }

  changeType = e => {
    if (e.target.value === "addSub") {
      this.btn1.current.innerText = "+";
      this.btn2.current.innerText = "-";
    } else if (e.target.value === "multiDiv") {
      this.btn1.current.innerText = "*";
      this.btn2.current.innerText = "/";
    }
  };

  resetState = cb => {
    this.setState({
      count: 0,
      modifier: 1,
      defCheckbox: true
    });
    this.btn1.current.innerText = "+";
    this.btn2.current.innerText = "-";
    cb();
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
        count: eval(
          `${this.state.count}${this.btn1.current.innerText}${
            this.state.modifier
          }`
        )
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
        count: eval(
          `${this.state.count}${this.btn2.current.innerText}${
            this.state.modifier
          }`
        )
      });
    }
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero!" : count;
  };
}

export default Counter;

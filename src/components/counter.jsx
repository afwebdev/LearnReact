import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import Modifier from "./Modifier";
import safeEval from "safe-eval";

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
          <button
            id="btn1"
            ref={this.btn1}
            className="btn"
            onClick={this.updateCount}
          >
            <span>+</span>
          </button>
          <button
            id="btn2"
            ref={this.btn2}
            className="btn"
            onClick={this.updateCount}
          >
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

  updateCount = btnPressed => {
    const operator = btnPressed.target.innerText;
    this.setState({
      count: safeEval(
        `(${this.state.count})${operator}(${this.state.modifier})`
      )
    });
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero!" : count;
  };
}

export default Counter;

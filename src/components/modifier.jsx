import React, { Component } from "react";

export default class Modifier extends Component {
  state = {
    defCheck: true
  };

  radioHandler = e => {
    if (e.target.value === "addSub") {
      this.setState({ defCheck: true });
    } else {
      this.setState({ defCheck: false });
    }
  };

  defaultCheck = () => {
    this.setState({ defCheck: true });
  };

  render() {
    return (
      <div className="change-inc">
        <input
          id="changeValue"
          onChange={this.props.changeInc}
          placeholder="Enter A Value.."
          type="number"
          value={this.props.val}
        />

        {/* RESET BUTTON */}
        <button
          onClick={this.props.resetState.bind(this, this.defaultCheck)}
          id="resetBtn"
        >
          <span>Reset</span>
        </button>

        {/* RADIO BUTTONS */}
        <div className="radio-group">
          <div>
            <input
              className="radioBtn"
              id="addSub"
              value="addSub"
              onClick={this.props.changeType}
              type="radio"
              name="symbol"
              onChange={this.radioHandler}
              checked={this.state.defCheck}
            />
            <label htmlFor="addSub">Add / Sub</label>
          </div>
          <div>
            <input
              className="radioBtn"
              id="multiDiv"
              value="multiDiv"
              onClick={this.props.changeType}
              type="radio"
              name="symbol"
              checked={!this.state.defCheck}
              onChange={this.radioHandler}
            />
            <label htmlFor="multiDiv">Multi / Div</label>
          </div>
        </div>
      </div>
    );
  }
}

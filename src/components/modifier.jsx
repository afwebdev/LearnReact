import React, { Component } from "react";

export default class Modifier extends Component {
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
        <button onClick={this.props.resetState} id="resetBtn">
          <span>Reset</span>
        </button>
      </div>
    );
  }
}

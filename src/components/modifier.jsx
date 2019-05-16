import React, { Component } from "react";

export default class Modifier extends Component {
  render() {
    return (
      <div className="change-inc">
        <input
          onChange={this.props.changeInc}
          placeholder="Enter A Value.."
          type="number"
          defaultValue="1"
        />
      </div>
    );
  }
}

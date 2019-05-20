import React, { Component } from "react";

export default class Modifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defCheck: true
    };
    this.default = React.createRef();
  }

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
        <input
          value="addSub"
          onClick={this.props.changeType}
          type="radio"
          name="symbol"
          onChange={this.changeCheck}
          checked={this.state.defCheck}
          ref={this.default}
        />
        <label style={{ marginRight: 10, marginLeft: 5 }} htmlFor="addSub">
          Add / Sub
        </label>
        <input
          id="multiDiv"
          value="multiDiv"
          onClick={this.props.changeType}
          type="radio"
          name="symbol"
          checked={!this.state.defCheck}
          onChange={this.changeCheck}
        />
        <label style={{ marginRight: 10, marginLeft: 5 }} htmlFor="multiDiv">
          Multi / Div
        </label>
      </div>
    );
  }

  changeCheck = e => {
    console.log(e.target.value);
    if (e.target.value === "addSub") {
      this.setState({ defCheck: true });
    } else {
      this.setState({ defCheck: false });
    }
  };

  defaultCheck = () => {
    this.setState({ defCheck: true });
  };
}

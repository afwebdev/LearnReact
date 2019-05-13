import React from "react";

const CounterDisplay = props => {
  return (
    <div className="displayCount">
      <h1>{props.value}</h1>
    </div>
  );
};

export default CounterDisplay;

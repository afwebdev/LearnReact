import React from "react";
import "./App.css";
import Counter from "./components/counter";
// import Tester from "./components/counterDisplay";
// import CounterDisplay from "./components/counterDisplay";
class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
export default App;

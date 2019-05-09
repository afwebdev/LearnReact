import React from "react";
import "./App.css";
import Counter from "./components/counter";
import Tester from "./components/testcomp";
class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Tester name={"hello"} />
      </div>
    );
  }
}
export default App;

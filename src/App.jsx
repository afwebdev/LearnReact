import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}
export default App;

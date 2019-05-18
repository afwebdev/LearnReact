import React from "react";
import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
      </div>
    );
  }
}
export default App;

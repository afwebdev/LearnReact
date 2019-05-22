import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Default from "./components/Default";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/LearnReact" component={Counter} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;

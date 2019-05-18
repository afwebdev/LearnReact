import React, { Component } from "react";
import BuildLinks from "./links";

class Header extends Component {
  state = {
    links: [
      { name: "Home", link: "#home" },
      { name: "About", link: "#about" },
      { name: "Contact", link: "#contact" }
    ]
  };

  render() {
    return (
      <div>
        <navbar className="navLinks">
          <ul className="nav-ul">
            {this.state.links.map(list => {
              return (
                <BuildLinks key={list.name} name={list.name} link={list.link} />
              );
            })}
          </ul>
        </navbar>
      </div>
    );
  }
}

export default Header;

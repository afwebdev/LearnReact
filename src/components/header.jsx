import React, { Component } from "react";
import BuildLinks from "./BuildLinks";

class Header extends Component {
  state = {
    links: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <ul className="nav-ul">
            {this.state.links.map(list => {
              return (
                <BuildLinks key={list.name} name={list.name} link={list.link} />
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

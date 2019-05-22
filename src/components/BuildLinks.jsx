import React from "react";
import { Link } from "react-router-dom";

const BuildLinks = props => {
  return (
    <li>
      <Link to={props.link}>{props.name.toUpperCase()}</Link>
    </li>
  );
};

export default BuildLinks;

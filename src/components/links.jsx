import React from "react";

const BuildLinks = props => {
  return (
    <li>
      <a href={props.link}>{props.name.toUpperCase()}</a>
    </li>
  );
};

export default BuildLinks;

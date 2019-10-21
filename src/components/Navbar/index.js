import React from "react";
import "./style.css";

function Navbar(props) {
  return <div className="navBar">{props.children}</div>;
}

export default Navbar;

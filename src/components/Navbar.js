import React from "react";
import Logo from "../images/reactLogo.png";

function Navbar() {
  return (
    <div className="Nav">
      <div className="navItems--left">
        <img className="nav--logo" src={Logo} alt="ReactLogo" />
        <h1>ReactFacts</h1>
      </div>
      <p className="navItems">React Course - Project 1</p>
    </div>
  );
}

export default Navbar;

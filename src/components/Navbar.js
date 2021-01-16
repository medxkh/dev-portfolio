import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__active">about</div>
      <div className="navbar__items">
        <div className="navbar__item">about</div>
        <div className="navbar__item">resume</div>
        <div className="navbar__item">projects</div>
      </div>
    </div>
  );
}

export default Navbar;

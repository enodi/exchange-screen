import React from "react";
import { NavLink } from "react-router-dom";
import logo from "images/bar.svg";

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" to="/">
          <h1>Revolut</h1>
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

// A Navbar presentational component

const Navbar = () => {

  return (
    <nav className="navbar navbar-default navbar-expand-lg" role="navigation">
      <a className="navbar-brand" href="/">
        CodeJS
      </a>
      <div className="collapse navbar-collapse" id="navbar-collapse-01">
        <ul className="nav navbar-nav mr-auto">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

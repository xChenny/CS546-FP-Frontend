import React from "react";
import { NavLink } from "react-router-dom";

// A Navbar presentational component

const Navbar = ({ loggedIn, logout, username }) => {
  return (
    <nav className="navbar navbar-default navbar-expand-lg">
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
          {loggedIn ? (
            <li onClick={() => logout()}>
              <NavLink to="/">Log out</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
          )}
          {username ? (
            <li style={{}}>
              <NavLink to="#">Logged in as: {username}</NavLink>
            </li>
          ) : (
            <li />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

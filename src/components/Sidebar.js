import React from "react";
import { NavLink } from "react-router-dom";

// A sidebar presentational component

const Sidebar = () => {
  const style = {
    backgroundColor: "white",
    width: "200px"
  };
  return (
    <div className="sidebar" style={style}>
      <ul>
        <NavLink to="/newfile">
          <li>Create New</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;

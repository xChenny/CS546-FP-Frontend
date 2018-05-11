import React from "react";
import { NavLink } from "react-router-dom";

// A sidebar presentational component

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="no-style-list">
        <NavLink to="/uploadfile">
          <li>
            <button
              className="btn btn-primary btn-reduce-on-xs"
              style={{ width: "100%" }}
            >
              <span className='fui-upload' />
              &nbsp;Upload a File
            </button>
          </li>
        </NavLink>
        <NavLink to="/newfile">
          <li>
            <button
              className="btn btn-primary btn-reduce-on-xs"
              style={{ width: "100%" }}
            >
              <span className='fui-plus' />
              &nbsp;Create new File
            </button>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;

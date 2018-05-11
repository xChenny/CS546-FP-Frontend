import React from "react";
import { NavLink } from "react-router-dom";

// A sidebar presentational component

const Sidebar = () => {
  const style = {
    width: "200px"
  };
  return (
    <div className="sidebar" style={style}>
      <ul className="no-style-list">
        <NavLink to="/uploadfile">
          <li>
            <button
              class="btn btn-primary btn-reduce-on-xs"
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
              class="btn btn-primary btn-reduce-on-xs"
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

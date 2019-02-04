import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/" className="link">
          HOME
        </NavLink>
        <NavLink to="/watch" className="link">
          WATCH
        </NavLink>
        <NavLink to="/about" className="link">
          ABOUT
        </NavLink>
        <NavLink to="/gallery" className="link">
          GALLERY
        </NavLink>
        <NavLink to="/news" className="link">
          NEWS
        </NavLink>
        <NavLink to="/action" className="link">
          TAKE ACTION
        </NavLink>
      </div>
    );
  }
}

export default NavBar;

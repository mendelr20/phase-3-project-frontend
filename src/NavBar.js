import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="ui three item menu">
      <div className="ui animated button" tabIndex="0">
        <div className="visible content">
          <i className="home icon"></i>
        </div>
        <div className="hidden content">
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
      <div className="ui vertical animated button" tabIndex="0">
        <div className="visible content">
          <i className="info circle icon"></i>
        </div>
        <div className="hidden content">
          <NavLink to="/About">About</NavLink>
        </div>
      </div>
      <div className="ui animated fade button" tabIndex="0">
        <div className="visible content">
          <i className="book icon"></i>
        </div>
        <div className="hidden content">
          <NavLink to="/Books">Books</NavLink>
        </div>
      </div>
    </div>
  );
}

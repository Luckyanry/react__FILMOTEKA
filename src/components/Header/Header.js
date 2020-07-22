import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/users" className="link">
            Movies
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

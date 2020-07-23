import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            exact
            to="/"
            className="Navigation-link"
            activeClassName="Navigation-link-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="Navigation-link"
            activeClassName="Navigation-link-active"
          >
            Movies
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

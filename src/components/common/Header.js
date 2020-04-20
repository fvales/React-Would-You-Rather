import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        Would You Rather???
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* TODO: TO be shown only if user logged in */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" activeClassName="">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="">
              Leader Board
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="">
              Create a question
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="float-right">
        <ul className="nav float-right">
          <li className="dropdown">
            <span className="dropdown-toggle" data-toggle="dropdown">
              {/* TODO: Replace user with props.user */}
              Welcome, User <b className="caret"></b>
            </span>
            <ul className="dropdown-menu">
              <li>
                <span>
                  <i className="icon-off"></i> Logout
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        Would You Rather???
      </NavLink>
      {props.name !== "" && (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/leaderboard"
                  activeClassName="active"
                >
                  Leader Board
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/add"
                  activeClassName="active"
                >
                  Create a question
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="float-right user-info">
            <span>Welcome, {props.name}</span>

            <span>Logout</span>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;

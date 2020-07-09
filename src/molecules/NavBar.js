import React, { useState } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import "./NavBar.scss";
import squaredMenu from "./menu.svg";
import squaredMenuWhite from "./menu-white.svg";

const NavBar = ({ isInverted }) => {
  const [sideMenuVisibility, setSideMenuVisibility] = useState(false);
  return (
    <>
      <nav className="navbar">
        <button
          className={`navbar__button ${isInverted ? "is-inverted" : null}`}
          onClick={() => setSideMenuVisibility(!sideMenuVisibility)}
        >
          {isInverted ? (
            <img src={squaredMenuWhite} alt="menu" className="navbar__icon" />
          ) : (
            <img src={squaredMenu} alt="menu" className="navbar__icon" />
          )}
        </button>
        {sideMenuVisibility ? (
          <aside className="sidemenu">
            <ul className="sidemenu__list">
              <li className="sidemenu__item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="sidemenu__link"
                >
                  Home
                </NavLink>
              </li>
              <li className="sidemenu__item">
                <NavLink
                  to="/about-us"
                  activeClassName="active"
                  className="sidemenu__link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="sidemenu__item">
                <NavLink
                  to="/artists"
                  activeClassName="active"
                  className="sidemenu__link"
                >
                  Artists
                </NavLink>
              </li>
              <li className="sidemenu__item">
                <NavLink
                  to="/studios"
                  activeClassName="active"
                  className="sidemenu__link"
                >
                  Studios
                </NavLink>
              </li>
              <li className="sidemenu__item">
                <NavLink
                  to="/tattoos"
                  activeClassName="active"
                  className="sidemenu__link"
                >
                  Tattoos
                </NavLink>
              </li>
            </ul>
            <div className="sidemenu__bottom">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">FAQ</Link>
            </div>
          </aside>
        ) : null}
        <div className="menu">
          <span>Logo</span>
          <Router>
            <ul className={`menu__list ${isInverted ? "is-inverted" : null}`}>
              <li className="menu__item">
                <NavLink to="/login" className="menu__link">
                  Log In
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/signup" className="menu__link">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </Router>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

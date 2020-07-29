import React, { useState } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import "./NavBar.scss";
import squaredMenu from "./menu.svg";
import squaredMenuWhite from "./menu-white.svg";
import { logout as logoutAction } from "../actions";

const NavBar = ({ isInverted, user, logout, history, ...props }) => {
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
          {!user ? (
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
          ) : (
            <div className="usermenu">
              <img
                src={user.avatar}
                className="usermenu__avatar"
                alt="user avatar"
              />
              <p>{user.fullName}</p>
              <ul className="usermenu__list">
                <li className="usermenu__item">
                  <NavLink to="/profile">Your profile</NavLink>
                </li>
                <li className="usermenu__item">
                  <NavLink to="/settings">Add studio</NavLink>
                </li>
                <button
                  className="usermenu__item"
                  onClick={() => {
                    logout(history);
                  }}
                >
                  Logout
                </button>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = ({ user = null }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  logout: (history) => dispatch(logoutAction(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

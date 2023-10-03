import React from "react";
import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <p className="header">Fiverr 2.0</p>
      <div className="link-container">
        <Link className="link" to="/">
          Find a Dev
        </Link>
        <Link className="link" to="/about">
          Find a Job
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/signup">
          Signup
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
import React from "react";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container px-0">
        <Link className="navbar-brand d-none d-sm-block" exact={true} to="/">
          <p className="navbar-brand">Logo</p>
        </Link>
        <button
          className="navbar-toggler order-first"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsHeader"
          aria-controls="navbarsHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsHeader">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact={true} to="/">
                Forside
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/om-os">
                Om Os
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/kontakt">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

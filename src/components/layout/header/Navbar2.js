import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthDataContext } from "../../context/AuthDataContext";
// API
import { BrugerLogout } from "../../API/AuthAPI";

import Logo from "../../../logo.png";

const Navbar2 = () => {
  // History
  let history = useHistory();

  // handleSoeg
  const handleSoeg = (e) => {
    e.preventDefault(); //ungå at component reloader/re-mounter
    history.push("/soeg/" + e.target.soeg.value);
  };

  // LoggedIn Logout
  const { loggedIn, onLogout } = useContext(AuthDataContext);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    BrugerLogout()
      .then((data) => {
        onLogout();
        history.push("/");
      })
      .catch(function (error) {
        console.log(error.message);
        setError("Der er sket en fejl - " + error.message);
      });
  };

  let loginlogout;

  if (loggedIn) {
    loginlogout = (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">
            Admin
          </NavLink>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logud
          </button>
        </li>
      </>
    );
  } else {
    loginlogout = (
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    );
  }

  // Navbar
  return (
    <>
      <nav className="Navbar navbar navbar-expand-lg navbar-light bg-light font-weight-bold text-uppercase">
        <div className="container px-0">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Boston Gaming logo"
              loading="lazy"
            />
            Boston Gaming
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
                  Front page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/design-your-own">
                  Design your own
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {loginlogout}
            </ul>
            <form onSubmit={handleSoeg}>
              <input name="soeg" type="seach" />
              <input type="submit" value="søg" />
            </form>
          </div>
        </div>
      </nav>
      <h2>{error ? <span>{error}</span> : null}</h2>
    </>
  );
};

export default Navbar2;

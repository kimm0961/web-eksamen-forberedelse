import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthDataContext } from "../../context/AuthDataContext";

import $ from "jquery";
import Logo from "../../../logo.png";

// // CSS
// import "./NavbarScroll.css"
// API
import { BrugerLogout } from "../../API/AuthAPI";


const NavbarScroll = () => {

  $(function() {
    $(document).scroll(function() {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
  })

  // History
  let history = useHistory();

// LoggedIn Logout
  const { loggedIn, onLogout } = useContext(AuthDataContext);

  const handleLogout = () => {
    BrugerLogout()
      .then((data) => {
        onLogout();
        history.push("/");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  let loginlogout;

  if (loggedIn) {
    loginlogout = (
      <>
        <li className="nav-item">
          <a className="nav-link" href="/admin">
            Admin
          </a>
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
        <a className="nav-link" href="/login">
          Login
        </a>
      </li>
    );
  }

  // Navbar
  return (
    <>
    <nav className="Navbar navbar navbar-expand-lg navbar-light bg-light fixed-top font-weight-bold text-uppercase py-4">
        <div className="container px-0">
          <a className="navbar-brand" href="/#top">
            <img
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block mr-2"
              alt="Boston Gaming logo"
              loading="lazy"
            />
            Boston Gaming
          </a>
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
              <a className="nav-link" href="/#productpage">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#designpage">
                Design your own
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#aboutpage">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contactpage">
                Contact
              </a>
            </li>
            {loginlogout}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavbarScroll;

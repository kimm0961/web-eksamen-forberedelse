import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { AuthDataContext } from "../../context/AuthDataContext";

import $ from "jquery";
// CSS
import "./NavbarScroll.css"
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
    <nav className="Navbar navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container px-0">
        <a className="navbar-brand d-none d-sm-block" href="/">
          <p className="navbar-brand">Logo</p>
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
              <a className="nav-link" exact={true} href="/">
                Forside
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events-filter">
                Events filter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events-pagination">
                Events pagination
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/slider">
                Slider
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sponsorer">
                Sponsorer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/om-os">
                Om Os
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/kontakt">
                Kontakt
              </a>
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
}

export default NavbarScroll;

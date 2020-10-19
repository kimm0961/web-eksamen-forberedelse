import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthDataContext } from "../../context/AuthDataContext";
// API
import { BrugerLogout } from "../../API/AuthAPI";

function Navbar2() {
  let history = useHistory();
  const handleSoeg = (e) => {
    e.preventDefault(); //ungå at component reloader/re-mounter
    history.push("/soeg/" + e.target.soeg.value);
  };

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

  return (
    <>
    <nav className="Navbar navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container px-0">
        <Link className="navbar-brand d-none d-sm-block" to="/">
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
              <NavLink className="nav-link" to="/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events-filter">
                Events filter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events-pagination">
                Events pagination
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

export default Navbar2;

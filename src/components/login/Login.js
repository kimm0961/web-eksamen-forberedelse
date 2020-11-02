import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthDataContext } from "../context/AuthDataContext";
// API
import { BrugerLogin, BrugerLoggedin } from "../API/AuthAPI";
// Icons
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  //* State */
  const [brugerInfo, setBrugerInfo] = useState({});

  const { onLogin } = useContext(AuthDataContext);

  const history = useHistory();

  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      setBrugerInfo(await BrugerLogin(brugerInfo));

      BrugerLoggedin();
      onLogin();
      // redirect
      history.push("/admin");
    })();
  };

  return (
    <div
      className="container text-center border border-secondary rounded mt-5 p-4 bg-light"
      style={{ width: "18rem" }}
    >
    <FaUserCircle  size={80} className="text-dark"/>
      <h1 className="mb-4 text-success">Login</h1>
      <form
        className="mb-5"
        method="post"
        action="/login"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Brugernavn</label>
          <input
          id="name"
            type="text"
            name="name"
            placeholder="User name"
            required
            className="form-control"
            onChange={(e) =>
              setBrugerInfo({ ...brugerInfo, name: e.target.value })
            }
            value={brugerInfo.name || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="form-control"
            aria-describedby="password"
            onChange={(e) =>
              setBrugerInfo({ ...brugerInfo, password: e.target.value })
            }
            value={brugerInfo.password || ""}
            autoComplete="on"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Login now
        </button>
      </form>
    </div>
  );
}

export default Login;

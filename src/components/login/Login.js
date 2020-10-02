import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthDataContext } from "../context/AuthDataContext";
// API
import { BrugerLogin, BrugerLoggedin } from "../API/AuthAPI";

function Login() {
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
      className="container border border-secondary rounded mt-5 p-4 bg-light"
      style={{ width: "18rem" }}
    >
      <h1 className="mb-4 text-center text-success">Login</h1>
      <form
        className="mb-5"
        method="post"
        action="/login"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="text">Brugernavn</label>
          <input
            type="text"
            name="brugernavn"
            placeholder="Brugernavn"
            required
            className="form-control"
            aria-describedby="brugernavn"
            onChange={(e) =>
              setBrugerInfo({ ...brugerInfo, brugernavn: e.target.value })
            }
            value={brugerInfo.brugernavn || ""}
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
        <button className="btn btn-success" type="submit" aria-label="Bruger login knap">
          Indsend
        </button>
      </form>
      {/* <p className="text-danger font-italic m-0">Har du ikke en profil?</p>
        <a href='/register'>Register</a> */}
    </div>
  );
}

export default Login;

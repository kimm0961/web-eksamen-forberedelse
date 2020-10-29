import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import parse from "html-react-parser";
// API
import { sletEvent, hentEvent } from "../API/EventAPI";

const Slet = () => {

  // State
  const [event, setEvent] = useState();

  // History

  const history = useHistory();

  // Params

  const { event_id } = useParams();

  // useEffect

  useEffect(() => {
    (async () => {
      setEvent(await hentEvent(event_id));
    })();
  }, [event_id]);

  // Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      setEvent(await sletEvent(event_id));
      // redirect
      history.push("/admin");
    })();
  };

  // Metode 1 - if

  let eventen = "";

  if (event !== undefined) {
    eventen = (
      <div className="container">
        <h1 className="text-center mt-5">Slet</h1>
        <div
          className="card text-white mx-auto mb-5"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header text-danger font-weight-bold">
            Er du sikker på, at du vil slette?
          </div>
          <div className="card-body bg-dark text-center">
            <h5 className="card-title">{event.titel}</h5>
            {parse(event.beskrivelse)}
          </div>
        </div>
        <div className="text-center">
          <Link
            className="btn btn-secondary mr-3"
            to="/admin/adminevents"
            role="button"
          >
            Fortryd
          </Link>
          <Link
            className="btn btn-warning"
            to="/admin"
            role="button"
            onClick={handleSubmit}
          >
            Slet
          </Link>
        </div>
      </div>
    );
  }

  // Udskriv

  return <div>{eventen}</div>;
}

export default Slet;

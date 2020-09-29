import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { hentAlleEvents } from "../../API/EventAPI";

const Card = () => {
  //* State */

  const [oevelser, setOevelser] = useState([]);

  //* useEffect */

  useEffect(() => {
    hentAlleEvents().then(setOevelser);
  }, []);

  //* Metode 1 - map */

  let eventList = "";

  if (oevelser.length > 0) {
    eventList = oevelser.map((e) => {
      return (
        <div className="col-md-6 col-lg-4" key={e._id}>
          <div className="card mb-4 shadow">
            <div className="dot">
              <img
                className="card-img-top"
                src={"/Images/Events/" + e.billede}
                alt={e.titel}
              />
              <div className="card-body">
                <h5 className="card-title">{e.titel}</h5>
                <p className="card-text font-italic">{e.dato}</p>
                <p className="card-text">{e.beskrivelse}</p>
                <Link className="btn btn-danger" role="button" to={"/" + e._id}>
                  Læs mere
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <div>Ingen events endnu.</div>;
  }

  //* Udskriv her */

  return <div className="card-deck row">{eventList}</div>;
};

export default Card;

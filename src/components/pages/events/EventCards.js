import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { hentAlleEvents } from "../../API/EventAPI";

const EventCards = () => {
  //* State */

  const [events, setEvents] = useState([]);

  //* useEffect */

  useEffect(() => {
    // Min kode
    hentAlleEvents().then(setEvents);

    // // Mariannes kode
    // hentAlleEvents().then(response => {
    //   if(response !== "error") setEvents(response)
    // });

  }, []);

  //* Metode 1 - map */

  let eventList = <h2>Loader...</h2>;

  if (events && events.length) {
    eventList = events.map((e) => {
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

export default EventCards;

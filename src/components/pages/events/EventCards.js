import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
// API
import { hentAlleEvents } from "../../API/EventAPI";
// Style Features
import Loader from "react-spinners/ClipLoader";
// dayjs
import dayjs from "dayjs";
import "dayjs/locale/da";

const EventCards = () => {
  //* State */

  const [events, setEvents] = useState([]);

  //* useEffect */

  useEffect(() => {
    hentAlleEvents().then((response) => {
      if (response !== "error") setEvents(response);
    });
  }, []);

  //* Liste med alle events */

  let eventList = <Loader size={35} color={"#333"} />;

  if (events && events.length) {
    eventList = events.map((e) => {
      return (
        <article className="col-md-6 col-lg-4" key={e._id}>
          <div className="card mb-4">
            <img
              className="card-img-top"
              src={"http://localhost:5021/images/events/" + e.billede}
              alt={e.titel}
            />
            <div className="card-body">
              <h5>{e.titel}</h5>
              <time dateTime={e.dato}>
                Dato:{" "}
                {dayjs(e.dato).locale("da").format("DD. MMMM YYYY kl. HH:mm")}
              </time>
              <br />
              {parse(e.beskrivelse)}
              <br />
              <br />
              <Link className="btn btn-danger" role="button" to={"/" + e._id}>
                Læs mere
              </Link>
            </div>
          </div>
        </article>
      );
    });
  }

  //* Udskriv her */

  return (
    <section className="container">
      <div className="row">{eventList}</div>
    </section>
  );
};

export default EventCards;

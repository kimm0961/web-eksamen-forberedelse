import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
// API
import { hentEvent } from "../../API/EventAPI";
// Style Features
import Loader from "react-spinners/ClipLoader";
// dayjs
import dayjs from "dayjs";
import "dayjs/locale/da";

const Event = () => {
  //* State event */
  const [event, setEvent] = useState();

  //* Params */
  const { event_id } = useParams();

  //* useEffect */
  useEffect(() => {

    hentEvent(event_id).then((response) => {
      // Hvis der ikke er en fejl, så put event (fra api) i state
      if (response !== "error") setEvent(response);
    });

  }, [event_id]);

  //* Eventen */

  let eventen = <Loader size={35} color={"#333"} />;

  if (event) {
    eventen = (
      <article className="card my-5 mx-auto" style={{ maxWidth: "30rem" }}>
        <img
          className="card-img-top"
          src={"http://localhost:5021/images/events/" + event.billede}
          alt={event.titel}
        />
        <div className="card-body">
          <h5>{event.titel}</h5>
          <time dateTime={event.dato}>
            Dato:{" "}
            {dayjs(event.dato).locale("da").format("DD. MMMM YYYY kl. HH:mm")}
          </time>
          <br />
          {parse(event.beskrivelse)}
        </div>
      </article>
    );
  }

  //* Uskriv her */
  return (
    <section className="text-center">
      {eventen}
      <button
        type="button"
        className="btn btn-secondary mr-3"
        onClick={(e) => {
          window.history.back();
        }}
      >
        Gå tilbage
      </button>
    </section>
  );
};

export default Event;

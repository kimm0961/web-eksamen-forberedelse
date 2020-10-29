import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// API
import { hentEvent } from "../../API/EventAPI";


const Event = () => {
  
  //* State event */
  const [event, setEvent] = useState();

  //* Params */
  const { event_id } = useParams();

  //* useEffect */
  useEffect(() => {
    (async () => {
      setEvent(await hentEvent(event_id));
    })();
  }, [event_id]);

  //* Noget */

  let eventen = <h2>Loader...</h2>;

  if (event !== undefined) {
    eventen = (
      <div className="card my-5 mx-auto" style={{ maxWidth: "30rem" }}>
        <img
          className="card-img-top"
          src={"/Images/Events/" + event.billede}
          alt={event.titel}
        />
        <div className="card-body">
          <h5 className="card-title">{event.titel}</h5>
          <p className="card-text font-italic">{event.dato}</p>
          <p className="card-text">{event.beskrivelse}</p>
        </div>
      </div>
    );
  }

  //* Uskriv her */
  return (
    <div className="text-center">
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
    </div>
  );
}

export default Event;

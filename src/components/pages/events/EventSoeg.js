import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// API
import { eventSoegSimple } from "../../API/EventAPI";

const EventSoeg = () => {

  //* State */
  const [events, setEvents] = useState();

  //* Params */
  const { soegeord } = useParams();

  //* useEffect */
  useEffect(() => {
    (async () => {
      setEvents(await eventSoegSimple(soegeord));
    })();
  }, [soegeord]);

  //* Metode 1 - map */
  const eventList = events ? (
    events.map((e) => {
      return (
        <div className="col-lg-6 col-xl-4" key={e._id}>
          <div className="card">
            <div className="embed-responsive embed-responsive-16by9">
              <img
                src={"/Images/Events/" + e.billede}
                className="card-img-top embed-responsive-item"
                alt={e.titel}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{e.titel}</h5>
              <p className="font-italic">{e.dato}</p>
              <p className="card-text">{e.beskrivelse}...</p>
              <p className="font-weight-bold">
                Pris: <span>{e.pris}</span>kr.
              </p>
              <Link className="btn btn-danger" role="button" to={"/" + e._id}>
                Læs mere
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>Ingen events matchede din søgning</div>
  );

  //* Udskriv */
  return (
    <section>
      <div className="container">
        <h2 className="m-5">
          Du har søgt på: <span className="text-success">{soegeord}</span>
        </h2>
        <div className="row">{eventList}</div>
      </div>
    </section>
  );
}

export default EventSoeg;

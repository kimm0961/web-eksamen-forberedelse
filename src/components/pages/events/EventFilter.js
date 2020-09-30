import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { hentAlleEvents } from "../../API/EventAPI";
import { hentAlleRegioner } from "../../API/RegionAPI";

const EventFilter = () => {
  //* State */

  const [events, setEvents] = useState();
  const [regioner, setRegioner] = useState();
  const [valgtRegion, setValgtRegion] = useState("alle");

  //* useEffect */

  useEffect(() => {
    hentAlleRegioner().then(setRegioner);
    hentAlleEvents().then(setEvents);
  }, []);

  //* Map regioner */

  let regionList = <h2>Loader...</h2>;

  if (regioner && regioner.length) {
    regionList = regioner.map((r) => (
      <option value={r._id}>{r.regionnavn}</option>
    ));
  }

  //* Map events */

  let eventList = <h2>Loader...</h2>;

  if (events && events.length) {
    eventList = events
      .filter((e) => {
        return e.region._id === valgtRegion || valgtRegion === "alle";
      })
      .map((e) => (
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
      ));
  }

  //* Udskriv her */

  return (
    <section>
      <h5>Hvor i landet</h5>
      <select
        className="custom-select"  style={{ width: "15rem" }}
        defaultValue="alle"
        name="regioner"
        onChange={(e) => {
          setValgtRegion(e.target.value);
        }}
      >
        <option value="alle">Alle regioner</option>
        {regionList}
      </select>
      <div className="card-deck row">{eventList}</div>;
    </section>
  );
};

export default EventFilter;

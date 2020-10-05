import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
// API 
import { hentAlleEvents } from "../../API/EventAPI";
import { hentAlleRegioner } from "../../API/RegionAPI";


const EventsPageFilter = () => {
  //* State */

  const [events, setEvents] = useState();
  const [regioner, setRegioner] = useState();
  const [valgtRegion, setValgtRegion] = useState("alle");
  const [valgtKortDistance, setValgtKortDistance] = useState(1);
  const [valgtLangDistance, setValgtLangDistance] = useState(999999999999999);

  //* useEffect */

  useEffect(() => {
    hentAlleRegioner().then(setRegioner);
    hentAlleEvents().then(setEvents);
  }, []);

  //* Map regioner */

  let regionList = <option>Loading...</option>;

  if (regioner && regioner.length) {
    regionList = regioner.map((r) => (
      <option key={r._id} value={r._id} name="regionnavn">{r.regionnavn}</option>
    ));
  }

  //* Map events */

  let eventList = <ClipLoader size={150} color={"#123abc"}/>;

  if (events && events.length) {
    eventList = events
      .filter((e) => {
        return (
          (e.region._id === valgtRegion || valgtRegion === "alle") &&
          e.distance > valgtKortDistance &&
          e.distance < valgtLangDistance
        );
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
                <p className="card-text">Distance: {e.distance / 1000} km</p>
                <p className="card-text">Region: {e.region.regionnavn}</p>
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
    <main>
      <form>
        <h5>Hvor i landet</h5>
        <select
          className="custom-select"
          style={{ width: "15rem" }}
          defaultValue="alle"
          name="regioner"
          onChange={(e) => {
            setValgtRegion(e.target.value);
          }}
        >
          <option value="alle">Alle regioner</option>
          {regionList}
        </select>
        <div>
          <h5>Distance</h5>
          <div>
            <input
              type="radio"
              name="distance"
              id="lang"
              value="over10km"
              onChange={() => {
                setValgtKortDistance(10000);
                setValgtLangDistance(99999999999);
              }}
            />
            <label htmlFor="lang">Over 10 km</label>
            <br />
            <input
              type="radio"
              name="distance"
              id="kort"
              value="under10km"
              onChange={() => {
                setValgtKortDistance(1);
                setValgtLangDistance(10001);
              }}
            />
            <label htmlFor="kort">Under 10 km</label>
            <br />
            <input
              type="radio"
              name="distance"
              id="alle"
              value="under10km"
              onChange={() => {
                setValgtKortDistance(1);
                setValgtLangDistance(99999999999);
              }}
            />
            <label htmlFor="alle">Alle</label>
          </div>
        </div>
      </form>
      <div className="card-deck row">{eventList}</div>;
    </main>
  );
};

export default EventsPageFilter;

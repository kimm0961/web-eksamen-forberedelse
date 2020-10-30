import React, { useState, useEffect } from "react";
// Style Features
import Loader from 'react-spinners/ClipLoader'
// API
import { hentAlleOmOs } from "../../API/OmOsAPI";

const OmOsCards = () => {
  //* State */

  const [omOs, setOmOs] = useState([]);

  //* useEffect */

  useEffect(() => {

      // hent alle Om Os
      hentAlleOmOs().then(response => {
        if (response !== "error") setOmOs(response)
    })

  }, []);

  //* Liste med alle Om Os */

  let omOsList = <Loader size={35} color={"#333"} />

  if (omOs && omOs.length) {
    omOsList = omOs.map((o) => {
      return (
        <div className="col-md-6 col-lg-4" key={o._id}>
          <div className="card mb-4 shadow">
            <div className="dot">
              <img
                className="card-img-top"
                src={"http://localhost:5021/images/omos/" + o.billede}
                alt={o.overskrift}
              />
              <div className="card-body">
                <h5 className="card-title">{o.overskrift}</h5>
                <p className="card-text">{o.beskrivelse}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  //* Udskriv her */

  return <div className="card-deck row">{omOsList}</div>;
};

export default OmOsCards;

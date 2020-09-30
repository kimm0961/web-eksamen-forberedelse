import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
// import { hentAlleRegioner } from "../API/RegionAPI";
// import { useHistory, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { opretEvent } from "../API/EventAPI";


function Opret() {
  //* State */
  const [eventData, setEventData] = useState({});
  // const [eventBillede, setEventBillede] = useState();
  // const [regioner, setRegioner] = useState({});

  // //* History */
  // const history = useHistory();

  // //* Region */
  // useEffect(() => {
  //   hentAlleRegioner().then(kat => {
  //     setRegioner(kat);
  //     setEventData({ kategori: kat[0]._id });
  //   });
  // }, []);

  //* Submit *
  const handleSubmit = e => {
    e.preventDefault();

    (async () => {
      setEventData(await opretEvent(eventData));
      // setEventData(await opretEvent(eventData, eventBillede));
      // redirect
      // history.push("/admin");
    })();
  };

    //* Metode 1 - map */

    // let regionList = <h2>Loader...</h2>;

    // if (regioner.length > 0) {
    //   regionList = regioner.map(r => {
    //     return (
    //       <option key={r._id} value={r._id}>
    //         {r.regionnavn}
    //       </option>
    //     );
    //   });
    // } else {
    //   return <div>Ingen regioner endnu.</div>;
    // }

  

  //* Udskriv */

  return (
    <div className="container">
      <h1 className="text-center m-5">Opret en ny event</h1>
      <div className="container" style={{maxWidth: '40rem'}}>
      <form className="text-left">
        <label htmlFor="titel" className="font-weight-bold">Titel:</label>
        <input
          id="titel" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="titel"
         onChange={(e) => setEventData({ ...eventData, titel: e.target.value})}
          value={eventData.titel || ""}
        />
        {/* <select
            className="custom-select bg-light"
            onChange={e =>
              setEventData({ ...eventData, region: e.target.value })
            }
            value={eventData.region || ""}
          >
            {regionList}
          </select> */}
        {/* <label htmlFor="dato" className="font-weight-bold">Dato</label>
        <input
          id="dato" type="date"
          className="form-control mb-3 bg-info text-white"
         required name="dato" onChange={(e) => setEventData({ ...eventData, dato: e.target.value})}
          value={eventData.dato || ""}
        />
        <label htmlFor="beskrivelse" className="font-weight-bold">Beskrivelse</label>
        <textarea
            id="beskrivelse"
            className="form-control mb-3 bg-light"
            rows="3"
            required
            name="beskrivelse"
            onChange={e =>
              setEventData({ ...eventData, beskrivelse: e.target.value })
            }
            value={eventData.beskrivelse || ""}
          ></textarea>
        <label htmlFor="distance" className="font-weight-bold">distance</label>
        <input
          id="distance" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="distance" onChange={(e) => setEventData({ ...eventData, distance: e.target.value})}
          value={eventData.distance || ""}
        />
        <label htmlFor="pris" className="font-weight-bold">Pris</label>
        <input
          id="pris" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="pris" onChange={(e) => setEventData({ ...eventData, pris: e.target.value})}
          value={eventData.pris || ""}
        />
        <label htmlFor="pladser" className="font-weight-bold">Antal pladser</label>
        <input
          id="pladser" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="pladser" onChange={(e) => setEventData({ ...eventData, antalpladser: e.target.value})}
          value={eventData.antalpladser || ""}
        /> */}
        <ImageUploader
            withIcon={true}
            buttonText="Vælg et billede"
            onChange={(billede) => {setEventData({ ...eventData, billede: billede[0]})}} // Send kun 1 fil, ikke et array med 1 fil
            imgExtension={[".jpg", ".gif", ".png"]}
            maxFileSize={5242880}
            withPreview={true}
          />
      </form>
      <Link className="btn btn-success mr-3" role="button" to="/admin">
        Fortryd
      </Link>
      <Link
        className="btn btn-primary"
        role="button"
        onClick={handleSubmit} to="/admin"
      >
        Gem
      </Link>
      </div>
    </div>
  );
}

export default Opret;

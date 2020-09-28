import React, { useState } from "react";
import { sendBesked } from "../../API/KontaktAPI";

function KontaktForm() {
  //* State kontaktForm */
  const [kontaktForm, setKontaktForm] = useState({
    navn: "",
    emailadresse: "",
    emne: "",
    besked: "",
  });

  //* Navn */
  const handleNavn = (e) => {
    setKontaktForm({ ...kontaktForm, navn: e.target.value });
  };

  //* Email */
  const handleEmail = (e) => {
    setKontaktForm({ ...kontaktForm, emailadresse: e.target.value });
  };

  //* Emne */
  const handleEmne = (e) => {
    setKontaktForm({ ...kontaktForm, emne: e.target.value });
  };

  //* Besked */
  const handleBesked = (e) => {
    setKontaktForm({ ...kontaktForm, besked: e.target.value });
  };

  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(kontaktForm);
    (async () => {
      setKontaktForm(await sendBesked(kontaktForm));
    })();
  };

  //* Return */
  return (
    <form onSubmit={handleSubmit} style={{ width: "22rem" }}>
      <div className="form-group">
        <label htmlFor="navn">Dit navn</label>
        <input
          type="text"
          className="form-control"
          id="navn"
          value={kontaktForm.navn || ""}
          onChange={handleNavn}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Din Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={kontaktForm.emailadresse || ""}
          onChange={handleEmail}
        />
      </div>
      <div className="form-group">
        <label htmlFor="emne">Emne fx. løbs navn eller lign</label>
        <input
          type="text"
          className="form-control"
          id="emne"
          value={kontaktForm.emne || ""}
          onChange={handleEmne}
        />
      </div>
      <div className="form-group">
        <label htmlFor="besked">Besked</label>
        <textarea
          className="form-control"
          id="besked"
          rows="3"
          value={kontaktForm.besked || ""}
          onChange={handleBesked}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-danger">
        Send besked
      </button>
    </form>
  );
}

export default KontaktForm;

import React from "react";
import { sendBesked2 } from "../../API/KontaktAPI";

function KontaktForm2() {
  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    sendBesked2(e.target).then((response) => {
      if (response !== "error") {
        console.log(response);
        alert("Din bedsked er sendt");
      }
    });
  };

  //* Return */
  return (
    <form onSubmit={handleSubmit} style={{ width: "22rem" }}>
      <label htmlFor="navn">Dit navn</label>
      <input type="text" name="navn" className="form-control" id="navn" />
      <label htmlFor="emailadresse">Din Email</label>
      <input
        type="email"
        name="emailadresse"
        className="form-control"
        id="emailadresse"
      />
      <label htmlFor="emne">Emne fx. løbs navn eller lign</label>
      <input type="text" className="form-control" name="emne" id="emne" />
      <label htmlFor="besked">Besked</label>
      <textarea
        className="form-control"
        id="besked"
        name="besked"
        rows="3"
      ></textarea>
      <button type="submit" className="btn btn-danger">
        Send besked
      </button>
    </form>
  );
}

export default KontaktForm2;

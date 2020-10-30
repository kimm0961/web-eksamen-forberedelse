import React from "react";
// API
import { sendBesked } from "../../API/KontaktAPI";

const KontaktForm = () => {

  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    sendBesked(e.target).then((response) => {
      if (response !== "error") {
        console.log(response);
        alert("Din bedsked er sendt");
      }
    });
    e.target.reset();
  };

  //* Return */
  return (
    <form onSubmit={handleSubmit} style={{ width: "22rem" }}>
      <label htmlFor="navn">Dit navn</label>
      <input type="text" name="navn" className="form-control" id="navn" required />
      <label htmlFor="emailadresse">Din Email</label>
      <input
        type="email"
        name="emailadresse"
        className="form-control"
        id="emailadresse" required
      />
      <label htmlFor="emne">Emne fx. løbs navn eller lign</label>
      <input type="text" className="form-control" name="emne" id="emne" required/>
      <label htmlFor="besked">Besked</label>
      <textarea
        className="form-control"
        id="besked"
        name="besked"
        rows="3" required
      ></textarea>
      <button type="submit" className="btn btn-danger">
        Send besked
      </button>
      <button type="reset" className="btn btn-danger">Annuller</button>
    </form>
  );
}

export default KontaktForm;

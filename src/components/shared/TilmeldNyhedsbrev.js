import React, { useState } from "react";
import { tilmeldNyhedsbrev } from "../API/NyhedsbrevAPI";

function TilmeldNyhedsbrev() {

  //* State */
  const [nyhedsbrev, setNyhedsbrev] = useState({ email: "" });

  //* Email */ 
  const handleEmail = (e) => {
    setNyhedsbrev({ email: e.target.value });
  };

  //* Submit */
  const handleSubmit = (e) => {
    // console.log(nyhedsbrev);

    (async () => {
      setNyhedsbrev(await tilmeldNyhedsbrev(nyhedsbrev));
      e.preventDefault();
    })();
  };

  //* Return */
  return (
    <form
      className="bg-success p-4"
      onSubmit={handleSubmit}
      style={{ width: "18rem" }}
    >
      <label htmlFor="inputEmail">Email</label>
      <input
        className="form-control"
        type="email"
        id="inputEmail"
        placeholder="Din email"
        value={nyhedsbrev.email}
        onChange={handleEmail}
      ></input>
      <button type="submit" value="Submit" className="btn btn-primary">
        Tilmeld
      </button>
    </form>
  );
}

export default TilmeldNyhedsbrev;

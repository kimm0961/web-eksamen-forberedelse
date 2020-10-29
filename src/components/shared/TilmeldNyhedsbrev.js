import React, { useState } from "react";
// API
import { tilmeldNyhedsbrev } from "../API/NyhedsbrevAPI";

const TilmeldNyhedsbrev = () => {

  //* State nyhedsbrev */
  const [nyhedsbrev, setNyhedsbrev] = useState({ email: "" });

  //* Email */
  const handleEmail = (e) => {
    setNyhedsbrev({ email: e.target.value });
  };

  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(nyhedsbrev);
    (async () => {
      setNyhedsbrev(await tilmeldNyhedsbrev(nyhedsbrev));
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
        name="email"
        id="inputEmail"
        placeholder="Din email"
        value={nyhedsbrev.email || ""}
        onChange={handleEmail}
      ></input>
      <button type="submit" value="Submit" className="btn btn-primary">
        Tilmeld
      </button>
    </form>
  );
}

export default TilmeldNyhedsbrev;

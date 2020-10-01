import React, { useState } from "react";
import { tilmeldNyhedsbrev2 } from "../API/NyhedsbrevAPI";

function TilmeldNyhedsbrev2() {


  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(nyhedsbrev);
    tilmeldNyhedsbrev2(e.target).then((response) => {
      if (response !== "error") {
        console.log(response);
        alert("Du er blevet tilmeldt nyhedsbrevet");
      }
    });
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
      ></input>
      <button type="submit" value="Submit" className="btn btn-primary">
        Tilmeld
      </button>
    </form>
  );
}

export default TilmeldNyhedsbrev2;

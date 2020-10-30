import React from "react";
// Components
import TilmeldNyhedsbrev from "../../shared/TilmeldNyhedsbrev";

const ForsidePage = () => {
  return (
    <>
      <h1>Forside</h1>
      <section>
        <h2>Nyhedsbrevtilmelding</h2>
        <TilmeldNyhedsbrev />
      </section>
    </>
  );
};

export default ForsidePage;

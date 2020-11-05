import React from "react";
// Components
import About from "./About";
import { StarLine } from "../../shared/StarLine";

const AboutPage = () => {
  return (
    <section className="bg-dark py-5">
      <hr />
      <h1>
        <span id="aboutpage" className="anchor"></span>About
      </h1>
      <StarLine />
      <About />
    </section>
  );
};

export default AboutPage;

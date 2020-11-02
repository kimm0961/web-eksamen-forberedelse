import React from "react";
// Components
import About from "./About";
// Icons
import { FaStar } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="text-center bg-dark py-5">
    <hr/>
      <h1 className="anchor" id="aboutpage">About</h1>
      <FaStar size={28} className="mb-4"/>
      <About />
    </section>
  );
};

export default AboutPage;

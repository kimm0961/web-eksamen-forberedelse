import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// API
import { getAllSlides } from "../API/SliderAPI";
// Style Features
import Loader from "react-spinners/ClipLoader";

import "./Slider.css";
import { StarLine } from "./StarLine";

const Slider = () => {
  // State
  const [slides, setSlides] = useState();

  // Useeffect
  useEffect(() => {
    getAllSlides().then((response) => {
      if (response !== "error") setSlides(response);
    });
  }, []);

  let slidesImages = <Loader size={35} color={"#333"} />;

  if (slides && slides.length) {
    // Loop/map images
    slidesImages = slides.map((s) => {
      return (
        <Carousel.Item key={s._id} interval={4000}>
          <img
            src={"http://localhost:5039/images/slider/" + s.sliderimage}
            alt={s.alttext} className="img-fluid"
          />
        </Carousel.Item>
      );
    });
  }
  return (
    <section id="slider">
      <Carousel> {slidesImages}</Carousel>
      <div className="overlay-slider d-none d-sm-block">
        <h2>Boston Gaming</h2>
        <StarLine />
        <div className="d-none d-md-block">
        <p>Affordable - Professionel - Aesthetic</p>
        <p>Let us build your next rig!</p>
        </div>
      </div>
    </section>
  );
};

export default Slider;

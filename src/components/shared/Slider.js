import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// API
import { getAllSlides } from "../API/SliderAPI";
// Style Features
import Loader from "react-spinners/ClipLoader";

import "./Slider.css";

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
            className="d-block w-100"
            src={"http://localhost:5039/images/slider/" + s.sliderimage}
            alt={s.alttext}
          />
          <Carousel.Caption className="slider-caption">
            <h2>Boston Gaming</h2>
            <p>Affordable - Professionel - Aesthetic</p>
            <p>Let us build your next rig!</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }
  return (
    <section>
      <Carousel> {slidesImages}</Carousel>
    </section>
  );
};

export default Slider;

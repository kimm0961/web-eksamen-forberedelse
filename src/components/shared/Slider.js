import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import { hentAlleEvents } from "../API/EventAPI";

const Slider = () => {
  // State til events
  const [events, setEvents] = useState();

  // Useeffect - kald api og hent events
  useEffect(() => {
    // hent alle events
    hentAlleEvents().then((response) => {
      if (response !== "error") setEvents(response);
    });
  }, []);

  // Lav html til events-billeder
  let slidebilleder = "Loader ...";

  if (events && events.length) {
    // Loop/map billeder
    slidebilleder = events.map((e, i) => {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"http://localhost:5021/images/events/" + e.billede}
            alt={e.titel}
          />
        </Carousel.Item>
      );
    });

  }
  return (
    <div className="container">
      <Carousel> {slidebilleder}</Carousel>
    </div>
  );
};

export default Slider;

import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
// Style Features
import Loader from "react-spinners/ClipLoader";
// API
import { getAbout } from "../../API/AboutAPI";

const About = () => {
  //* State */

  const [about, setAbout] = useState("");

  //* useEffect */

  useEffect(() => {
    getAbout().then((response) => {
      if (response !== "error") setAbout(response);
    });
  }, []);

  if (about) {
    return (
      <div className="row text-left mx-auto" style={{ maxWidth: "40rem" }}>
        <div className="col-sm-6">{parse(about.content1)}</div>
        <div className="col-sm-6">{parse(about.content2)}</div>
      </div>
    );
  } else {
    return <Loader size={35} color={"#333"} />;
  }
};

export default About;

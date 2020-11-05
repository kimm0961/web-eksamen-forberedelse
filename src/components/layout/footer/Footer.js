import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
// API
import { getFooter } from "../../API/FooterAPI";
// Icons
import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

const Footer = () => {
  //* State */

  const [footer, setFooter] = useState("");

  //* useEffect */

  useEffect(() => {
    getFooter().then((response) => {
      if (response !== "error") setFooter(response);
    });
  }, []);

  return (
    <footer className="mt-md-5 pt-md-5 text-center">
    <div className="row bg-dark">
      <div className="col-12-sm col-md-6 col-lg-4 my-5">
        <h5>Locations</h5>
        {footer ? parse(footer.location) : ""}
      </div>
      <div className="col-12-sm col-md-6 col-lg-4 my-5">
        <h5>Around the web</h5>
        <a href="/" className="some-button"><FaFacebook className="some-icon" /></a>
        <a href="/" className="some-button"><FaTwitter  className="some-icon" /></a>
        <a href="/" className="some-button"><FaLinkedin className="some-icon" /></a>
        <a href="/" className="some-button"><FaDribbble className="some-icon" /></a>
      </div>
      <div className="col-12-sm col-md-6 col-lg-4 my-5">
        <h5>About Boston Gaming</h5>
        {footer ? parse(footer.about) : ""}
      </div>
    </div>
    <p className="py-3">Copyright &copy; Boston Gaming</p>
    </footer>
  );
}

export default Footer;

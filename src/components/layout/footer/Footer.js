import React, { useState, useEffect } from "react";
// API
import { getFooter } from "../../API/FooterAPI";
// Icons
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  //* State */

  const [footer, setFooter] = useState([]);

  //* useEffect */

  useEffect(() => {
    getFooter().then((response) => {
      if (response !== "error") setFooter(response);
    });
  }, []);

  return (
    <footer className="mt-md-5 pt-md-5 text-center">
    <div className="row bg-dark py-5">
      <div className="col-6 col-md">
        <h5>Locations</h5>
        <p>{footer.location}</p>
      </div>
      <div className="col-6 col-md">
        <h5>Around the web</h5>
        <a href="/" className="some-button"><FaFacebook className="some-icon" /></a>
        <a href="/" className="some-button"><FaTwitter  className="some-icon" /></a>
        <a href="/" className="some-button"><FaLinkedin className="some-icon" /></a>
        <a href="/" className="some-button"><FaLinkedin className="some-icon" /></a>
      </div>
      <div className="col-6 col-md">
        <h5>About Boston Gaming</h5>
        <p>{footer.about}</p>
      </div>
    </div>
    <p className="py-3">Copyright &copy; Boston Gaming</p>
    </footer>
  );
}

export default Footer;

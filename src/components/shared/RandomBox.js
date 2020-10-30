import React, { useState, useEffect } from "react";
import { hentAlleSponsor } from "../API/SponsorAPI";
import "./RandomBox.css";

const RandomBox = () => {
  // State

  const [udvalgt, setUdvalgt] = useState([]);

  // useEffect

  useEffect(() => {
    hentAlleSponsor().then(setUdvalgt);
  }, []);

  var randomSpon = udvalgt[Math.floor(Math.random() * udvalgt.length)];


  let sponsorBox = "";

  if (randomSpon) {
    let sponsorclass = "alm";
    if (randomSpon.sponsorkategori.kategori === "Guld") sponsorclass = "gold";
    if (randomSpon.sponsorkategori.kategori === "Sølv") sponsorclass = "silver";

    sponsorBox = (
      <figure className={sponsorclass} style={{ width: "18rem" }}>
        <h4 className="text-secondary font-weight-bold text-center">Random sponsorbox</h4>
        <img
          src={"http://localhost:5021/images/sponsorer/" + randomSpon.logo}
          alt={randomSpon.navn + " logo"}
          className="img-fluid"
        />
      </figure>
    );
  }

  return <div>{sponsorBox}</div>;
}

export default RandomBox;

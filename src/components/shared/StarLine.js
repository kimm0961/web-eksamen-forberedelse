import React from "react";
// Icons
import { FaStar } from "react-icons/fa";

export const StarLine = () => {
  return (
    <div className="starline">
      <hr className="left" />
      <FaStar size={28} />
      <hr className="right" />
    </div>
  );
};

import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Events2 = ({ events, loading }) => {
  if (loading) {
    return <BounceLoader size={150} color={"#000"}/>;
  }

  return (
    <ul className="list-group mb-4">
      {events.map((e) => (
        <li key={e._id} className="list-group-item">
          {e.titel}
        </li>
      ))}
    </ul>
  );
};

export default Events2;

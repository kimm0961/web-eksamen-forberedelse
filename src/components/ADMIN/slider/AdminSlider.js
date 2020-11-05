import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// API
import { getAllSlides, deleteSlider } from "../../API/SliderAPI";
// Icons
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
// Style Features
import Loader from "react-spinners/ClipLoader";
import { StarLine } from "../../shared/StarLine";

const AdminSlider = () => {
  //* State Admin */

  const [Admin, setAdmin] = useState([]);
  const [message, setMessage] = useState([]);

  //* useEffect */

  useEffect(() => {
    getAllSlides().then(setAdmin);
  }, [message]);

  // Delete
  const handleDelete = (slider_id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteSlider(slider_id).then((response) => {
        if (response !== "error") {
          console.log("Deleted ", response);
          setMessage("Slider is deleted " + slider_id);
        }
      });
    }
  };

  //* Map */

  let AdminList = <Loader size={35} color={"#333"} />;

  if (Admin.length > 0) {
    AdminList = Admin.map((s) => {
      return (
        <div className="col-4" key={s._id}>
          <img
            src={"http://localhost:5039/images/slider/" + s.sliderimage}
            alt={s.alttext}
            className="img-fluid"
          />
          <button
            onClick={() => handleDelete(s._id)}
            className="btn btn-danger deletebutton"
          >
            <span role="img" aria-label="delete">
              <MdDeleteForever  size={28} />
            </span>
          </button>
        </div>
      );
    });
  }

  //* Return here */

  return (
    <section className="adminSection">
      <h1 className="text-center mt-5"><span id="slideradmin" className="anchor"></span>Slider pictures</h1>
      <StarLine />
      <div className="text-center">
      <Link to="/admin/slider/create" role="button" className="btn btn-success mb-5">
        <span role="img" className="mr-2" aria-label="plus">
          <FaPlus />
        </span>
        Create new
      </Link>
      </div>
      <div className="row">{AdminList}</div>
    </section>
  );
};

export default AdminSlider;

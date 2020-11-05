import React, { useState, useEffect } from "react";
// API
import { getAllNewsletter, deleteNewsletter } from "../../API/NewsletterAPI";
// Icons
import { MdDeleteForever } from "react-icons/md";
// Style Features
import Loader from "react-spinners/ClipLoader";
import { StarLine } from "../../shared/StarLine";

const AdminNewsletter = () => {
  //* State Admin */

  const [Admin, setAdmin] = useState([]);
  const [message, setMessage] = useState([]);

  //* useEffect */

  useEffect(() => {
    getAllNewsletter().then(setAdmin);
  }, [message]);

  // Delete
  const handleDelete = (newsletter_id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteNewsletter(newsletter_id).then((response) => {
        if (response !== "error") {
          console.log("Deleted ", response);
          setMessage("Sign up is deleted " + newsletter_id);
        }
      });
    }
  };

  //* Map */

  let AdminList = <Loader size={35} color={"#333"} />;

  if (Admin && Admin.length > 0) {
    AdminList = Admin.map((n) => {
      return (
        <tr key={n._id}>
          <td className="font-weight-bold">{n.name}</td>
          <td><a href={"mailto:" + n.email}>{n.email}</a></td>
          <td>
          <button
            onClick={() => handleDelete(n._id)}
            className="btn btn-danger"
          >
            <span role="img" aria-label="delete">
              <MdDeleteForever />
            </span>
          </button>
          </td>
        </tr>
      );
    });
  }

  //* Return here */

  return (
    <section className="adminSection">
      <h1 className="text-center mt-5"><span id="contactadmin" className="anchor"></span>Newsletter List</h1>
      <StarLine />
      <div className="container">
        <table className="table table-striped bg-light">
          <thead>
            <tr className="thead">
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{AdminList}</tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminNewsletter;

import React, { useState, useEffect } from "react";
// API
import { getAllContact, deleteContact } from "../../API/ContactAPI";
// Icons
import { MdDeleteForever } from "react-icons/md";
// Style Features
import Loader from "react-spinners/ClipLoader";

const AdminContact = () => {
  //* State Admin */

  const [Admin, setAdmin] = useState([]);
  const [message, setMessage] = useState([]);

  //* useEffect */

  useEffect(() => {
    getAllContact().then(setAdmin);
  }, [message]);

  // Delete
  const handleDelete = (contact_id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteContact(contact_id).then((response) => {
        if (response !== "error") {
          console.log("Deleted ", response);
          setMessage("Message is deleted " + contact_id);
        }
      });
    }
  };

  //* Map */

  let AdminList = <Loader size={35} color={"#333"} />;

  if (Admin && Admin.length > 0) {
    AdminList = Admin.map((c) => {
      return (
        <tr key={c._id}>
          <td className="font-weight-lighter">{c._id}</td>
          <td className="font-weight-bold">{c.name}</td>
          <td className="font-italic">{c.email}</td>
          <td className="font-italic">{c.phonenumber}</td>
          <td className="font-italic">{c.message}</td>
          <td className="font-italic">{c.received}</td>
          <td>
          <button
            onClick={() => handleDelete(c._id)}
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
    <div>
      <h1 className="text-center m-5">Contact List</h1>
      <div className="container">
        <table className="table table-striped bg-light">
          <thead>
            <tr className="thead">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Message</th>
              <th scope="col">Received</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{AdminList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContact;

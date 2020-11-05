import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// API
import { getAllProducts } from "../../API/ProductAPI";
// Icons
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever, MdEdit } from "react-icons/md";
// Style Features
import Loader from "react-spinners/ClipLoader";
import { StarLine } from "../../shared/StarLine";

const AdminProducts = () => {
  //* State Admin */

  const [Admin, setAdmin] = useState([]);

  //* useEffect */

  useEffect(() => {
    getAllProducts().then(setAdmin);
  }, []);

  //* Map */

  let AdminList = <Loader size={35} color={"#333"} />;

  if (Admin.length > 0) {
    AdminList = Admin.map((p) => {
      return (
        <tr key={p._id}>
          <td className="font-weight-lighter">{p._id}</td>
          <td className="font-weight-bold">{p.title}</td>
          <td className="font-italic">{p.category.title}</td>
          <td>
            <Link to={"/admin/update/" + p._id}>
              <button type="button" className="btn btn-primary">
                <span role="img" aria-label="ret">
                  <MdEdit />
                </span>
              </button>
            </Link>
          </td>
          <td>
            <Link to={"/admin/delete/" + p._id}>
              <button type="button" className="btn btn-danger">
                <span role="img" aria-label="delete">
                  <MdDeleteForever />
                </span>
              </button>
            </Link>
          </td>
        </tr>
      );
    });
  }

  //* Return here */

  return (
    <section className="adminSection">
      <h1 className="text-center mt-5">
        <span id="productadmin" className="anchor"></span>Product List
      </h1>
      <StarLine />
      <div className="text-center">
      <Link to="/admin/create" role="button" className="btn btn-success mb-5">
        <span role="img" className="mr-2" aria-label="plus">
          <FaPlus />
        </span>
        Create new
      </Link>
      </div>
      <div className="container">
        <table className="table table-striped bg-light">
          <thead>
            <tr className="thead">
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{AdminList}</tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminProducts;

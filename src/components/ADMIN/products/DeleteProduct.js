import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
// API
import { deleteProduct, getProduct } from "../../API/ProductAPI";
// import parse from "html-react-parser";

const DeleteProduct = () => {

  // State
  const [product, setProduct] = useState();

  // History

  const history = useHistory();

  // Params

  const { product_id } = useParams();

  // useEffect

  useEffect(() => {
    (async () => {
      setProduct(await getProduct(product_id));
    })();
  }, [product_id]);

  // Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      setProduct(await deleteProduct(product_id));
      // redirect
      history.push("/admin");
    })();
  };

  // Metode 1 - if

  let producten = "";

  if (product !== undefined) {
    producten = (
      <div className="container">
        <h1 className="text-center mt-5">Delete</h1>
        <div
          className="card text-white mx-auto mb-5"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header text-danger font-weight-bold">
            Are you sure that you want to delete?
          </div>
          <div className="card-body bg-dark text-center">
            <h5 className="card-title">{product.title}</h5>
            <p>{product.content}</p>
            {/* {parse(product.content)} */}
          </div>
        </div>
        <div className="text-center">
          <Link
            className="btn btn-secondary mr-3"
            to="/admin"
            role="button"
          >
            Regret
          </Link>
          <Link
            className="btn btn-warning"
            to="/admin"
            role="button"
            onClick={handleSubmit}
          >
            Delete
          </Link>
        </div>
      </div>
    );
  }

  // Return here

  return <div>{producten}</div>;
}

export default DeleteProduct;

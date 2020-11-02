import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// API
import { getAllProducts } from "../../API/ProductAPI";
// Style Features
import Loader from "react-spinners/ClipLoader";

const ProductCards = () => {
  //* State */

  const [products, setProducts] = useState([]);

  //* useEffect */

  useEffect(() => {
    getAllProducts().then((response) => {
      if (response !== "error") setProducts(response);
    });
  }, []);

  //* List with all products */

  let productList = <Loader size={35} color={"#333"} />;

  if (products && products.length) {
    productList = products.map((p) => {
      return (
        <article className="col-md-6 col-lg-4 mb-4" key={p._id}>
          <div className="card mb-4 bg-dark p-4">
              <h5>{p.title}</h5>
            <img
              className="card-img-bottom"
              src={"http://localhost:5039/images/product/" + p.productimage}
              alt={p.title}
            />
          </div>
          <Link className="btn btn-danger" role="button" to={"/" + p._id}>
              Læs mere
            </Link>
        </article>
      );
    });
  }

  //* Udskriv her */

  return <div className="row">{productList}</div>;
};

export default ProductCards;

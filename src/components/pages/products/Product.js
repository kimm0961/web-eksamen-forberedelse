import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
// API
import { getProduct } from "../../API/ProductAPI";
// Style Features
import Loader from "react-spinners/ClipLoader";

const Product = () => {
  //* State product*/
  const [product, setProduct] = useState();

  //* Params */
  const { product_id } = useParams();

  //* useEffect */
  useEffect(() => {
    getProduct(product_id).then((response) => {
      if (response !== "error") setProduct(response);
    });
  }, [product_id]);

  //* producten */

  let producten = <Loader size={35} color={"#333"} />;

  if (product) {

    // Choose a class according to the product category
    let productclass = "alm";
    if(product.category.title === "High End") productclass = "gold"
    if(product.category.title === "Mid End") productclass = "silver"

    producten = (
      <article className="card my-5 mx-auto bg-dark" style={{ maxWidth: "30rem" }}>
        <div className={productclass}>{product.category.title}</div>
        <img
          className="card-img-top"
          src={"http://localhost:5039/images/product/" + product.productimage}
          alt={product.title}
        />
        <div className="card-body">
          <h5>{product.title}</h5>
          <br />
          {parse(product.content)}
        </div>
      </article>
    );
  }

  //* Return here */
  return (
    <section className="text-center">
      {producten}
      <button
        type="button"
        className="btn btn-secondary mr-3"
        onClick={(e) => {
          window.history.back();
        }}
      >
        Go back
      </button>
    </section>
  );
};

export default Product;

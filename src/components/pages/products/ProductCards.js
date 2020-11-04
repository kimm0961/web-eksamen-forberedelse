import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
// API
import { getAllProducts } from "../../API/ProductAPI";
import { getAllCategories } from "../../API/CategoryAPI";
// Style Features
import Loader from "react-spinners/ClipLoader";

const ProductCards = () => {
  $(function () {
    $("[data-productbutton]").click(function () {
      let productId = $(this).data("productbutton");

      $("[data-productbutton]").each(function () {
        if ($(this).hasClass("btn-primary")) {
          $(this).removeClass("btn-primary");
          $(this).addClass("btn-secondary");
        }
      });
      $(this).removeClass("btn-secondary");
      $(this).addClass("btn-primary");

      $("[data-productitem]").each(function () {
        let productItem = $(this);

        if (productId === "") {
          productItem.fadeIn("fast");
        } else {
          let isCorrectItem = $(this).data("productitem") === productId;
          isCorrectItem
            ? productItem.fadeIn("fast")
            : productItem.fadeOut("fast");
        }
      });
    });
  });
  //* State */

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //* useEffect */

  useEffect(() => {
    getAllProducts().then((response) => {
      if (response !== "error") setProducts(response);
    });

    getAllCategories().then((response) => {
      if (response !== "error") setCategories(response);
    });
  }, []);

  //* List with all products */

  let productList = <Loader size={35} color={"#333"} />;

  if (products && products.length) {
    productList = products.map((p) => {
      return (
        <article
          className="col-md-6 col-lg-4 mb-4"
          key={p._id}
          data-productitem={p.category.title}
        >
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

  // List with all product categories
  let catList = <Loader size={35} color={"#333"} />;

  if (categories && categories.length) {
    catList = categories.map((c) => {
      return (
        <button
          className="btn btn-primary mx-2"
          key={c._id}
          data-productbutton={c.title}
        >
          {c.title}
        </button>
      );
    });
  }

  //* Return here */

  return (
    <>
      <button className="btn btn-primary mx-2" data-productbutton="">
        Alle
      </button>
      {catList}
      <div className="row mt-5">{productList}</div>
    </>
  );
};

export default ProductCards;

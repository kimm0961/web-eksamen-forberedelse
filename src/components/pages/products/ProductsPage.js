import React from "react";
import { StarLine } from "../../shared/StarLine";
// Components
import ProductCards from "./ProductCards";


const ProductsPage = () => {
  return (
    <section className="container text-center my-5">
      <h1><span id="productpage"  className="anchor"></span>Products</h1>
      <StarLine />
      <ProductCards />
    </section>
  );
};

export default ProductsPage;

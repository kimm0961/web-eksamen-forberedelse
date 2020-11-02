import React from "react";
// Components
import ProductCards from "./ProductCards";
// Icons
import { FaStar } from "react-icons/fa";

const ProductsPage = () => {
  return (
    <section className="container text-center my-5">
      <h1 className="anchor" id="productpage">Products</h1>
      <FaStar size={28} className="mb-4"/>
      <ProductCards />
    </section>
  );
};

export default ProductsPage;

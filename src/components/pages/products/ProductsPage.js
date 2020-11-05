import React from "react";
import { useHistory } from "react-router-dom";
// Components
import ProductCards from "./ProductCards";
import { StarLine } from "../../shared/StarLine";

const ProductsPage = () => {
  // History
  let history = useHistory();

  // handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    history.push("/search/" + e.target.search.value);
  };

  return (
    <section className="container my-5 text-center">
      <h1>
        <span id="productpage" className="anchor"></span>Products
      </h1>
      <StarLine />
      <form className="form-inline d-block my-4" onSubmit={handleSearch}>
        <input
          className="form-control mr-sm-2"
          name="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
      <ProductCards />
    </section>
  );
};

export default ProductsPage;

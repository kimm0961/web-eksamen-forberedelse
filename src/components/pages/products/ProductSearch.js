import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// API
import { productSearch } from "../../API/ProductAPI";

const ProductSearch = () => {
  //* State */
  const [products, setProducts] = useState();

  //* Params */
  const { searchWord } = useParams();

  //* useEffect */
  useEffect(() => {

    productSearch(searchWord).then((response) => {
      if (response !== "error") setProducts(response);
    });

  }, [searchWord]);

  //* List over products */
  const productList = products ? (
    products.map((p) => {
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
            Read more
          </Link>
        </article>
      );
    })
  ) : (
    <div>Nothing matched your search</div>
  );

  //* Return */
  return (
    <section>
      <div className="container text-center newPage">
        <h2 className="m-5">
          Search word <span className="text-success">{searchWord}</span>
        </h2>
        <div className="row">{productList}</div>
      </div>
    </section>
  );
};

export default ProductSearch;

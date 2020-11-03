import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import { useHistory, useParams } from "react-router-dom";
// API
import { updateProduct, getProduct } from "../../API/ProductAPI";
import { getAllCategories } from "../../API/CategoryAPI";
// CK Editor
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const editorConfiguration = {
  toolbar: [
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
  ],
};

const UpdateProduct = () => {
  //* State */
  const [categories, setCategories] = useState({});
  const [product, setProduct] = useState();
  const [content, setContent] = useState();

  // Params

  const { product_id } = useParams();

  // //* History */
  const history = useHistory();

  //* Categories */
  useEffect(() => {
    getAllCategories().then((response) => {
      if (response !== "error") setCategories(response);
    });

    getProduct(product_id).then((response) => {
      if (response !== "error") setProduct(response);
    });
  }, [product_id]);

  // List of the categories
  let categoryList = "";
  if (categories && categories.length) {
    categoryList = categories.map((c) => (
      <option value={c._id} key={c._id}>
        {c.title}
      </option>
    ));
  }

  //* Submit *
  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct(product_id, e.target).then((response) => {
      console.log(response);
    });

    // redirect
    history.push("/admin");
  };

  //* Udskriv */

  return (
    <div className="container">
      <h1 className="text-center m-5">Update product</h1>
      {product ? (
        <div className="container" style={{ maxWidth: "40rem" }}>
          <form onSubmit={handleSubmit}>
            <label>
              Title
              <input
                name="title"
                defaultValue={product.title}
                id="inpTitle"
                type="text"
                placeholder="Title"
              />
            </label>
            <br />
            <br />
            <label>
              {/* <textarea
                name="content"
                defaultValue={product.content}
                id="txtcontent"
                placeholder="content" style={{display: "none"}}
              /> */}
              <textarea
                name="content"
                defaultValue={content}
                id="txtContent"
                placeholder="Content"
                style={{ display: "none" }}
              />
            </label>
            <CKEditor className="text-dark"
              editor={ClassicEditor}
              data={product.content}
              config={editorConfiguration}
              onInit={(editor) => {
                const data = editor.getData();
                setContent(data);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
            <br />
            <br />
            {/* <label>
              Pris i kr.
              <input
                name="pris"
                defaultValue={product.pris}
                type="number"
                min="0"
                max="10000"
                placeholder="Pris i kr"
              />
            </label>
            <br />
            <br /> */}
            <select
              name="category"
              defaultValue={product.category._id}
              id="categoryselect"
            >
              {categoryList}
            </select>
            <br />
            <br />

            <div>
              <ImageUploader
                name="productimage"
                withIcon={true}
                buttonText="Choose a picture"
                withLabel={true}
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                singleImage={true}
                withPreview={true}
                required={true}
                defaultImages={[
                  "http://localhost:5039/images/product/" + product.productimage,
                ]}
              />
            </div>
            <br />
            <br />
            <button type="submit">Save product</button>
          </form>
        </div>
      ) : (
        <h2>Please wait...</h2>
      )}
    </div>
  );
};

export default UpdateProduct;

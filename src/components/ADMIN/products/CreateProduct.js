import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import { useHistory } from "react-router-dom";
// API
import { createProduct } from "../../API/ProductAPI";
import { getAllCategories } from "../../API/CategoryAPI";
// CK editor
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

const CreateProduct = () => {

  //* State */
  const [categories, setCategories] = useState({});

  const [content, setContent] = useState();

  // //* History */
  const history = useHistory();

  //* Categories */
  useEffect(() => {
    getAllCategories().then((response) => {
      if (response !== "error") setCategories(response);
    });
  }, []);

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

    createProduct(e.target).then((response) => {
      console.log(response);
    });

    history.push("/admin");
  };

  //* Udskriv */

  return (
    <div className="container">
      <h1 className="text-center m-5">Create a new product</h1>
      <div className="container" style={{ maxWidth: "40rem" }}>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input name="title" id="inpTitle" type="text" placeholder="Title" />
          </label>
          <br />
          <br />
          <label>
            <textarea
              name="content"
              defaultValue={content}
              id="txtContent"
              style={{ display: "none" }}
              placeholder="Content"
            ></textarea>
          </label>
          <CKEditor
            editor={ClassicEditor}
            data=""
            config={editorConfiguration}
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
              type="number"
              min="0"
              max="10000"
              placeholder="Pris i kr"
            />
          </label>
          <br />
          <br /> */}
          <select name="category" defaultValue="DEFAULT" id="categoryselect">
            <option value="DEFAULT" disabled>
              Choose a category ....
            </option>
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
            />
          </div>
          <br />
          <br />
          <button type="button">Regret</button>
          <button type="submit">Save product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

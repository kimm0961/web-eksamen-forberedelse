import React, { useState, useEffect } from "react";
// API
import { getAbout, updateAbout } from "../../API/AboutAPI";

// CK Editor
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { StarLine } from "../../shared/StarLine";
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

const UpdateAbout = () => {
  //* State */

  const [about, setAbout] = useState();
  const [content1, setContent1] = useState();
  const [content2, setContent2] = useState();

  useEffect(() => {

    getAbout().then((response) => {
      if (response !== "error") setAbout(response);
    });
  }, []);



  //* Submit *
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update about")) {
    updateAbout(e.target).then((response) => {
      console.log(response);
    });
  }
  };

  //* Udskriv */

  return (
    <section className="container adminSection">
      <h1 className="text-center mt-5"><span id="aboutadmin" className="anchor"></span>Update about</h1>
      <StarLine />
      {about ? (
        <div className="container" style={{ maxWidth: "40rem" }}>
          <form onSubmit={handleSubmit}>
            <h2>Edit content 1</h2>
            <label>
              <textarea
                name="content1"
                defaultValue={content1}
                id="txtContent1"
                placeholder="Content1"
                style={{ display: "none" }}
              />
            </label>
            <CKEditor className="text-dark"
              editor={ClassicEditor}
              data={about.content1}
              config={editorConfiguration}
              onInit={(editor) => {
                const data = editor.getData();
                setContent1(data);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent1(data);
              }}
            />
            <br />
            <br />
            <h2>Edit content 2</h2>
            <label>
              <textarea
                name="content2"
                defaultValue={content2}
                id="txtContent2"
                placeholder="Content2"
                style={{ display: "none" }}
              />
            </label>
            <CKEditor className="text-dark"
              editor={ClassicEditor}
              data={about.content2}
              config={editorConfiguration}
              onInit={(editor) => {
                const data = editor.getData();
                setContent2(data);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent2(data);
              }}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">Save about</button>
          </form>
        </div>
      ) : (
        <h2>Please wait...</h2>
      )}
    </section>
  );
};

export default UpdateAbout;

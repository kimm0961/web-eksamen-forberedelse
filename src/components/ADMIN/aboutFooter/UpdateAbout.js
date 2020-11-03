import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// API
import { getAbout, updateAbout } from "../../API/AboutAPI";

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

const UpdateAbout = () => {
  //* State */

  const [about, setAbout] = useState();
  const [content1, setContent1] = useState();
  const [content2, setContent2] = useState();



  // //* History */
  const history = useHistory();

  useEffect(() => {

    getAbout().then((response) => {
      if (response !== "error") setAbout(response);
    });
  }, []);



  //* Submit *
  const handleSubmit = (e) => {
    e.preventDefault();

    updateAbout(e.target).then((response) => {
      console.log(response);
    });

    // redirect
    history.push("/admin");
  };

  //* Udskriv */

  return (
    <div className="container">
      <h1 className="text-center m-5">Update about</h1>
      {about ? (
        <div className="container" style={{ maxWidth: "40rem" }}>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Save about</button>
          </form>
        </div>
      ) : (
        <h2>Please wait...</h2>
      )}
    </div>
  );
};

export default UpdateAbout;

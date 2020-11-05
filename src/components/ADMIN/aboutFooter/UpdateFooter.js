import React, { useState, useEffect } from "react";
// API
import { getFooter, updateFooter } from "../../API/FooterAPI";

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

const UpdateFooter = () => {
  //* State */

  const [footer, setFooter] = useState();
  const [about, setAbout] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {

    getFooter().then((response) => {
      if (response !== "error") setFooter(response);
    });
  }, []);



  //* Submit *
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update footer")) {
    updateFooter(e.target).then((response) => {
      console.log(response);
    });
  }
  };

  //* Return here */

  return (
    <section className="container adminSection">
      <h1 className="text-center mt-5"><span id="footeradmin" className="anchor"></span>Update footer</h1>
      <StarLine />
      {footer ? (
        <div className="container" style={{ maxWidth: "40rem" }}>
          <form onSubmit={handleSubmit}>
            <h2>About</h2>
            <label>
              <textarea
                name="about"
                defaultValue={about}
                id="txtAbout"
                placeholder="About"
                style={{ display: "none" }}
              />
            </label>
            <CKEditor className="text-dark"
              editor={ClassicEditor}
              data={footer.about}
              config={editorConfiguration}
              onInit={(editor) => {
                const data = editor.getData();
                setAbout(data);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setAbout(data);
              }}
            />
            <br />
            <br />
            <h2>Location</h2>
            <label>
              <textarea
                name="location"
                defaultValue={location}
                id="txtLocation"
                placeholder="Location"
                style={{ display: "none" }}
              />
            </label>
            <CKEditor className="text-dark"
              editor={ClassicEditor}
              data={footer.location}
              config={editorConfiguration}
              onInit={(editor) => {
                const data = editor.getData();
                setLocation(data);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setLocation(data);
              }}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">Save footer</button>
          </form>
        </div>
      ) : (
        <h2>Please wait...</h2>
      )}
    </section>
  );
};

export default UpdateFooter;

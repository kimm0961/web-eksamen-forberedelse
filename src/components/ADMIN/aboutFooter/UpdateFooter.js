import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// API
import { getFooter, updateFooter } from "../../API/FooterAPI";

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

const UpdateFooter = () => {
  //* State */

  const [footer, setFooter] = useState();
  const [about, setAbout] = useState();
  const [location, setLocation] = useState();



  // //* History */
  const history = useHistory();

  useEffect(() => {

    getFooter().then((response) => {
      if (response !== "error") setFooter(response);
    });
  }, []);



  //* Submit *
  const handleSubmit = (e) => {
    e.preventDefault();

    updateFooter(e.target).then((response) => {
      console.log(response);
    });

    // redirect
    history.push("/admin");
  };

  //* Return here */

  return (
    <div className="container">
      <h1 className="text-center m-5">Update footer</h1>
      {footer ? (
        <div className="container" style={{ maxWidth: "40rem" }}>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Save footer</button>
          </form>
        </div>
      ) : (
        <h2>Please wait...</h2>
      )}
    </div>
  );
};

export default UpdateFooter;

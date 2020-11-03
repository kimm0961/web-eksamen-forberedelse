import React from "react";
import ImageUploader from "react-images-upload";
import { useHistory } from "react-router-dom";
// API
import { createSlider } from "../../API/SliderAPI";

const CreateSlider = () => {


  // //* History */
  const history = useHistory();



  //* Submit *
  const handleSubmit = (e) => {
    e.preventDefault();

    createSlider(e.target).then((response) => {
      console.log(response);
    });

    history.push("/admin");
  };

  //* Udskriv */

  return (
    <div className="container">
      <h1 className="text-center m-5">Upload a new slider image</h1>
      <div className="container" style={{ maxWidth: "40rem" }}>
        <form onSubmit={handleSubmit}>
          <label>
          Alt text
            <input name="alttext" id="inpAlttext" type="text" placeholder="Alt text" />
          </label>
          <br />
          <br />
          <div>
            <ImageUploader
              name="sliderimage"
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
          <button type="submit">Save Image</button>
        </form>
      </div>
    </div>
  );
};

export default CreateSlider;

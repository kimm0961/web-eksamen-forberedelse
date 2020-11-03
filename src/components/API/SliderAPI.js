import axios from "axios";

const sliderAPI = {
  baseUrl: "http://localhost:5039/slider",
};



//* Cald to API */

// GET - all

  export const getAllSlides = () => {
    let response = axios
      .get(sliderAPI.baseUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return "error";
      });
  
    return response;
  };

// DELETE
export const deleteSlider = async (slider_id) => {
  let response = axios
  .delete(sliderAPI.baseUrl + "/admin/" + slider_id)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return "error";
  });

return response;
};

// POST - create
export const createSlider = async (sliderData) => {
  let formdata = new FormData(sliderData);

  let response = axios
    .post(sliderAPI.baseUrl + "/admin", formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};


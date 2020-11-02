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



// PUT - ret
export const retOmOs = ( omOsData) => {
  let formdata = new FormData(omOsData);

  let response = axios
    .put(sliderAPI.baseUrl + "/admin", formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};


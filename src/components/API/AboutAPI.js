import axios from "axios";

const aboutAPI = {
  baseUrl: "http://localhost:5039/about",
};



//* Cald to API */

// GET 

  export const getAbout = () => {
    let response = axios
      .get(aboutAPI.baseUrl)
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
    .put(aboutAPI.baseUrl + "/admin", formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};


import axios from "axios";

const footerAPI = {
  baseUrl: "http://localhost:5039/footer",
};



//* Cald to API */

// GET 

  export const getFooter = () => {
    let response = axios
      .get(footerAPI.baseUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return "error";
      });
  
    return response;
  };



// PUT - update
export const updateFooter = (footerData) => {
  let formdata = new FormData(footerData);

  let response = axios
    .put(footerAPI.baseUrl + "/admin", formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};


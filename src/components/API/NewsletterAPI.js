import axios from "axios";

const newsletterAPI = {
  baseUrl: "http://localhost:5039/newssubscription",
};


// POST - newsletter sign up
export const signupNewsletter = async (newsletter) => {

  let formdata = new FormData(newsletter);

  let response = axios
    .post(newsletterAPI.baseUrl, formdata)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return "error";
    });

  return response;
};

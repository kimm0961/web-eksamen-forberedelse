import axios from "axios";

const kontaktAPI = {
  baseUrl: "http://localhost:5039/contact",
};

// POST - send message
export const sendMessage = (message) => {
  let formdata = new FormData(message);

  let response = axios
    .post(kontaktAPI.baseUrl, formdata)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return "error";
    });

  return response;
};

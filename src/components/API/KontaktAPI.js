import axios from "axios";

const kontaktAPI = {
  baseUrl: "http://localhost:5021/kontakt/",
};

// POST - send besked
export const sendBesked = (besked) => {
  let formdata = new FormData(besked);

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

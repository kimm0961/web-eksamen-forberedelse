import axios from "axios";

const kontaktAPI = {
  baseUrl: "http://localhost:5021/kontakt/",
};

// POST - send besked
export const sendBesked = async (kontaktForm) => {
  try {
    let res = await axios.post(kontaktAPI.baseUrl, kontaktForm);
    console.log("send besked 1", res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// POST - send besked
export const sendBesked2 = (besked) => {
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

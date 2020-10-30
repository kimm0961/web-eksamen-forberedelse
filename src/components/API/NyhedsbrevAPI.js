import axios from "axios";

const nyhedsbrevAPI = {
  baseUrl: "http://localhost:5021/nyhedsbrevtilmelding/",
};


// POST - Tilmeld nyhedsbrev
export const tilmeldNyhedsbrev = async (nyhedsbrev) => {

  let formdata = new FormData(nyhedsbrev);

  let response = axios
    .post(nyhedsbrevAPI.baseUrl, formdata)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return "error";
    });

  return response;
};

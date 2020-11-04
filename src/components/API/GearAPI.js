import axios from "axios";

const gearAPI = {
  baseUrl: "http://localhost:5039/gear"
};


// GET - all
export const getAllGear = async () => {
  let response = axios
  .get(gearAPI.baseUrl)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return "error";
  });

return response;
};


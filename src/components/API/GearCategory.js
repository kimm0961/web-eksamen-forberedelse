import axios from "axios";

const gearCategoryAPI = {
  baseUrl: "http://localhost:5039/gearcategory"
};


// GET - all
export const getAllGearCategories = async () => {
  let response = axios
  .get(gearCategoryAPI.baseUrl)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return "error";
  });

return response;
};


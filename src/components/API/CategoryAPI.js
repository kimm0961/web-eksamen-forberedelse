import axios from "axios";

const categoryAPI = {
  baseUrl: "http://localhost:5039/category",
};

// GET - all
export const getAllCategories = async () => {
  try {
    let res = await axios.get(categoryAPI.baseUrl);
    return res.data;
  } catch (error) {
    console.log("Error:", error);
  }
};


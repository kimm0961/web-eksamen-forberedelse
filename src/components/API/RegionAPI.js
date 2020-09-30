import axios from "axios";

const regionAPI = {
  baseUrl: "http://localhost:5021/region",
};

// GET - alle 
export const hentAlleRegioner = async () => {
  try {
    let res = await axios.get(regionAPI.baseUrl);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};


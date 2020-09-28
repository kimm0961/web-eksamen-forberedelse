import axios from "axios";

const kontaktAPI = {
  baseUrl: "http://localhost:5021/kontakt/",
};

// POST - send besked
export const sendBesked = async (kontaktForm) => {
  try {
    let res = await axios.post(kontaktAPI.baseUrl, kontaktForm);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

import axios from "axios";

const sponsorAPI = {
  baseUrl: "http://localhost:5021/sponsor"
};


// GET - alle
export const hentAlleSponsor = async () => {
  try {
    let res = await axios.get(sponsorAPI.baseUrl);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};


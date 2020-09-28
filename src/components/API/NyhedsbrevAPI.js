import axios from "axios";

const nyhedsbrevAPI = {
  baseUrl: "http://localhost:5021/nyhedsbrevtilmelding/"
};


// POST - Tilmeld
export const tilmeldNyhedsbrev = async (nyhedsbrev) => {
    try {
      let res = await axios.post(nyhedsbrevAPI.baseUrl, nyhedsbrev);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log("Fejl:", error);
    }
  };


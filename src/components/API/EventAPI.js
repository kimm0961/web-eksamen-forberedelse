import axios from "axios";

const eventAPI = {
  baseUrl: "http://localhost:5021/event",
};

// GET - alle
export const hentAlleEvents = async () => {
  try {
    let res = await axios.get(eventAPI.baseUrl);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// GET - ud fra id
export const hentEvent = async (eventData_id) => {
  try {
    let res = await axios.get(eventAPI.baseUrl + "/" + eventData_id);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// GET - søg
export const eventSoegSimple = async (soegeord) => {
  try {
    let res = await axios.get(eventAPI.baseUrl + "/soeg/" + soegeord);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

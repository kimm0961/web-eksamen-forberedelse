import axios from "axios";

const OmOsAPI = {
  baseUrl: "http://localhost:5021/omos",
};



//* Kald til API */

// GET - alle

  export const hentAlleOmOs = () => {
    let response = axios
      .get(OmOsAPI.baseUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return "error";
      });
  
    return response;
  };


// GET - ud fra id

export const hentOmOs = (omOs_id) => {
  let response = axios
    .get(OmOsAPI.baseUrl + "/" + omOs_id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// PUT - ret
export const retOmOs = (omOs_id, omOsData) => {
  let formdata = new FormData(omOsData);

  let response = axios
    .put(OmOsAPI.baseUrl + "/admin/" + omOs_id, formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// DELETE - slet
export const sletOmOs = async (omOs_id) => {
  try {
    let res = await axios.delete(OmOsAPI.baseUrl + "/admin/" + omOs_id, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// POST - opret
export const opretOmOs = (omOsData) => {
  let formdata = new FormData(omOsData);

  let response = axios
    .post(OmOsAPI.baseUrl + "/admin", formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};
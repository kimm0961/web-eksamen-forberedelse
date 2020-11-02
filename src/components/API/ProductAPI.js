import axios from "axios";

const productAPI = {
  baseUrl: "http://localhost:5039/product",
};

//* Kald til API */

export const getAllProducts = () => {
  let response = axios
    .get(productAPI.baseUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// GET - ud fra id
export const getProduct = (product_id) => {
  let response = axios
    .get(productAPI.baseUrl + "/" + product_id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// PUT - ret
export const retEvent = (event_id, eventData) => {
  let formdata = new FormData(eventData);

  let response = axios
    .put(productAPI.baseUrl + "/admin/" + event_id, formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// DELETE - slet
export const sletEvent = async (event_id) => {
  try {
    let res = await axios.delete(productAPI.baseUrl + "/admin/" + event_id, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// POST - opret
export const opretEvent = async (eventData) => {
  let formdata = new FormData(eventData);

  let response = axios
    .post(productAPI.baseUrl + "/admin", formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};


// GET - søg
export const eventSoegSimple = (soegeord) => {
  let response = axios
    .get(productAPI.baseUrl + "/soeg/" + soegeord)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

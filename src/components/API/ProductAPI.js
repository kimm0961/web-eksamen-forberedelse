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

// GET - from id
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

// PUT - update
export const updateProduct = (product_id, productData) => {
  let formdata = new FormData(productData);

  let response = axios
    .put(productAPI.baseUrl + "/admin/" + product_id, formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// DELETE
export const deleteProduct = async (product_id) => {
  try {
    let res = await axios.delete(productAPI.baseUrl + "/admin/" + product_id, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

// POST - create
export const createProduct = async (productData) => {
  let formdata = new FormData(productData);

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
export const productSearch = (searchWord) => {
  let response = axios
    .get(productAPI.baseUrl + "/search/" + searchWord)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

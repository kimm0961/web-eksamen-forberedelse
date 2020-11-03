import axios from "axios";

const contactAPI = {
  baseUrl: "http://localhost:5039/contact",
};

// GET - all
export const getAllContact = async () => {
  try {
    let res = await axios.get(contactAPI.baseUrl + "/admin");
    return res.data;
  } catch (error) {
    console.log("Error:", error);
  }
};


// POST - send message
export const sendMessage = (message) => {
  let formdata = new FormData(message);

  let response = axios
    .post(contactAPI.baseUrl, formdata)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return "error";
    });

  return response;
};

// DELETE
export const deleteContact = async (contact_id) => {
  let response = axios
  .delete(contactAPI.baseUrl + "/admin/" + contact_id)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return "error";
  });

return response;
};
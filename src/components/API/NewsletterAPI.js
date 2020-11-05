import axios from "axios";

const newsletterAPI = {
  baseUrl: "http://localhost:5039/newssubscription",
};


// POST - newsletter sign up
export const signupNewsletter = async (newsletter) => {

  let formdata = new FormData(newsletter);

  let response = axios
    .post(newsletterAPI.baseUrl, formdata)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return "error";
    });

  return response;
};


// GET - all
export const getAllNewsletter = async () => {
  try {
    let res = await axios.get(newsletterAPI.baseUrl + "/admin");
    return res.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

// DELETE
export const deleteNewsletter = async (newsletter_id) => {
  let response = axios
  .delete(newsletterAPI.baseUrl + "/admin/" + newsletter_id)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return "error";
  });

return response;
};
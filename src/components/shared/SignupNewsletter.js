import React from "react";
// API
import { signupNewsletter } from "../API/NewsletterAPI";

const SignupNewsletter = () => {
  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    signupNewsletter(e.target).then((response) => {
      if (response !== "error") {
        console.log(response);
        alert("You are now signed up for our newsletter, thanks");
      }
    });
    e.target.reset();
  };

  //* Return */
  return (
    <form
      className="p-4 form-inline newsletterForm"
      onSubmit={handleSubmit}
    >
    <label htmlFor="nameNewsletter" className="m-3">Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        id="nameNewsletter"
        required
      />
      <label htmlFor="emailNewsletter" className="m-3">Email</label>
      <input
        className="form-control"
        type="email"
        name="email"
        id="emailNewsletter"
        required
      ></input>
      <button type="submit" value="Submit" className="btn btn-success m-3">
        Sign up
      </button>
    </form>
  );
};

export default SignupNewsletter;

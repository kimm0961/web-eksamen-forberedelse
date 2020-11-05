import React from "react";
// API
import { sendMessage } from "../../API/ContactAPI";

const ContactForm2 = () => {
  //* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    sendMessage(e.target).then((response) => {
      if (response !== "error") {
        console.log(response);
        alert("Your message has been send");
      }
    });
    e.target.reset();
  };

  //* Return */
  return (
    <form className="contact-form-2 text-left" onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Name" title="Type your name"
        required
      />
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Email" title="Type your email"
        required
      />
      <button type="submit" className="btn btn-success border-white mb-3">
        Send
      </button>
    </form>
  );
};

export default ContactForm2;

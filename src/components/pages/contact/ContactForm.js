import React from "react";
// API
import { sendMessage } from "../../API/ContactAPI";

const ContactForm = () => {
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
    <form className="mx-auto text-left border-contact" onSubmit={handleSubmit} style={{ width: "28rem" }}>
      <label htmlFor="nameContact">Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        id="nameContact"
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        className="form-control"
        id="email"
        required
      />
      <label htmlFor="phonenumber">Phone Number</label>
      <br/>
      <input
        type="tel"
        id="phonenumber"
        name="phonenumber"
      />
      <br/>
      <label htmlFor="message">Message</label>
      <textarea
        className="form-control"
        id="message"
        name="message"
        rows="5"
        required
      ></textarea>
      <button type="submit" className="btn btn-secondary border-white mb-3">
        Send Message
      </button>
    <br/>
      <button type="reset" className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
};

export default ContactForm;

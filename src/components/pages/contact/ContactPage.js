import React from "react";
//Components
import ContactForm from "./ContactForm";
// Icons
import { FaStar } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="text-center py-5">
      <h1 className="anchor" id="contactpage">
        Contact Us
      </h1>
      <FaStar size={28} className="mb-4"/>
      <ContactForm />
    </section>
  );
};

export default ContactPage;

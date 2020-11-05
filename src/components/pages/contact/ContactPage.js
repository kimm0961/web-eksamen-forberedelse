import React from "react";
//Components
import ContactForm from "./ContactForm";
import { StarLine } from "../../shared/StarLine";

const ContactPage = () => {
  return (
    <section className="py-5">
      <h1><span id="contactpage" className="anchor"></span>
        Contact Us
      </h1>
      <StarLine />
      <ContactForm />
    </section>
  );
};

export default ContactPage;

import React from "react";
//Components
import KontaktForm from "./KontaktForm";
import KontaktFormData from "./KontaktForm2";

const KontaktPage = () => {
  return (
    <>
      <h1>Kontakt</h1>
      <h2>Kontaktform med state</h2>
      <KontaktForm />
      <br />
      <h2>Kontaktform med formdata</h2>
      <KontaktFormData />
    </>
  );
};

export default KontaktPage;

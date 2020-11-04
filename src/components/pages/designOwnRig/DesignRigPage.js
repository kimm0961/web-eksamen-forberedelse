import React from "react";
import { StarLine } from "../../shared/StarLine";
import PickGear from "./PickGear";

const DesignRigPage = () => {
  return (
    <section className="container text-center my-5">
      <h1><span id="designpage" className="anchor"></span>
        Design your own rig!
      </h1>
      <StarLine />
      <PickGear/>
    </section>
  );
};

export default DesignRigPage;

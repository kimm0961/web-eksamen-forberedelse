import React, { useEffect, useState } from "react";
// API
import { getAllGear } from "../../API/GearAPI";
import { getAllGearCategories } from "../../API/GearCategory";
import ContactForm2 from "../contact/ContactForm2";

const PickGear = () => {
  const [gear, setGear] = useState();
  const [categories, setCategories] = useState();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getAllGear().then((response) => {
      if (response !== "error") setGear(response);
    });

    getAllGearCategories().then((response) => {
      if (response !== "error") setCategories(response);
    });
  }, []);

  const getGearFromCategory = (gearcategorytitle) => {
    let gearList = <h2>Loader ...</h2>;

    if (gear && gear.length) {
      gearList = gear
        .filter((g) => {
          return g.gearcategory.gearcategorytitle === gearcategorytitle;
        })
        .map((g) => (
          <div key={g._id}>
            <label>
              <input
                type="radio"
                name={g.gearcategory.gearcategorytitle}
                value={g.geartitle}
                data-price={g.price}
                onChange={handleChange}
                className="mr-2"
              />
              {g.geartitle}
            </label>
            <p>{g.price}</p>
          </div>
        ));
    }

    return gearList;
  };

  const handleChange = (e) => {
    e.preventDefault();
    let attributePrice = e.target.attributes.getNamedItem("data-price").value;

    setSelected({ ...selected, [e.target.name]: attributePrice });
  };

  let categoryList = <h2>Loader...</h2>;

  if (categories && categories.length) {
    categoryList = categories.map((c) => {
      return (
        <div className="row bg-dark mb-2 rounded p-3" key={c._id}>
          <div className="col-md-4">
            <h4>{c.gearcategorytitle}</h4>
          </div>
          <div className="col-md-8">
            {getGearFromCategory(c.gearcategorytitle)}
          </div>
        </div>
      );
    });
  }

  let gearArray = Object.entries(selected);

  let gearPriceList;

  if (gearArray && gearArray.length) {
    gearPriceList = gearArray.map((c) => {
      return (
        <tr className="gearSummary">
          <th className="font-weight-normal" scope="row">{c[0]}</th>
          <td className="text-right"><span className="bg-dark text-white p-2 rounded">{c[1]}</span></td>
        </tr>
      );
    });
  }

  let sum = 0;
  for (const num of Object.values(selected)) {
    sum += parseFloat(num);
    console.log("ms", sum);
  }

  return (
    <div className="row">
      <div className="col-lg-6">
        <h2 className="my-5">Pick your gear</h2>
        {categoryList}
      </div>
      <div className="col-lg-6">
        <h2 className="my-5">Summary</h2>
        <div>
          <table class="table table-light rounded">
            {gearPriceList}
            <tr>
              <th className="totaltext"scope="row">Total</th>
              <td className="text-right"><span className="bg-success text-white p-2 rounded">{sum}</span></td>
            </tr>
          </table>
        </div>
        <h3>Contact us!</h3>
        <ContactForm2 />
      </div>
    </div>
  );
};

export default PickGear;

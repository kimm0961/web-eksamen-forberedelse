import React, { useEffect, useState } from "react";
// API
import { getAllGear } from "../../API/GearAPI";
import { getAllGearCategories } from "../../API/GearCategory";

const PickGear = () => {
  const [gear, setGear] = useState();
  const [categories, setCategories] = useState();
  const [selected, setSelected] = useState({});

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
            <input
              type="radio"
              name={g.gearcategory.gearcategorytitle}
              id={g._id}
              value={g.geartitle}
              data-price={g.price}
              onChange={handleChange}
            />
            <label htmlFor={g._id}>{g.geartitle} </label>
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
        <div className="bg-dark mb-2" key={c._id}>
          <h4>{c.gearcategorytitle}</h4>

          {getGearFromCategory(c.gearcategorytitle)}
        </div>
      );
    });
  }

  let gearArray = Object.entries(selected);
  console.log(gearArray);

  let oo = Object.values(gearArray);
  console.log("he", oo);

  let sum = 0;
  for (const num of Object.values(selected)) {
    sum += parseFloat(num);
    console.log("ms", sum);
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Pick your gear</h2>
        {categoryList}
      </div>
      <div className="col-md-6">
        <h2>Summary</h2>
        <div></div>
      </div>
    </div>
  );
};

export default PickGear;

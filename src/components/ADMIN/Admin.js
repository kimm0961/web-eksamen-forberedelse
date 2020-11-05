import React from "react";
import UpdateAbout from "./aboutFooter/UpdateAbout";
import UpdateFooter from "./aboutFooter/UpdateFooter";
import AdminNav from "./AdminNav";
import AdminContact from "./contact/AdminContact";
import AdminNewsletter from "./newsletter/AdminNewsletter";
import AdminProducts from "./products/AdminProducts";
import AdminSlider from "./slider/AdminSlider";

const Admin = () => {
  return (
    <div className="row">
      <AdminNav />
      <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <h1>Admin Page</h1>
        <AdminProducts />
        <AdminSlider />
        <UpdateAbout />
        <UpdateFooter />
        <AdminContact />
        <AdminNewsletter />
      </div>
    </div>
  );
};

export default Admin;

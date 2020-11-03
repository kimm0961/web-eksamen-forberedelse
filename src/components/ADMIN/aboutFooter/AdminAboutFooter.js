import React from 'react'
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const AdminAboutFooter = () => {
    return (
        <div>

            <p>Ret about</p>
        <Link to={"/admin/about/update"}>
              <button type="button" className="btn btn-primary">
                <span role="img" aria-label="ret">
                  <MdEdit />
                </span>
              </button>
            </Link>

            <p>Ret footer</p>
        <Link to={"/admin/footer/update/"}>
              <button type="button" className="btn btn-primary">
                <span role="img" aria-label="ret">
                  <MdEdit />
                </span>
              </button>
            </Link>
        </div>
    )
}

export default AdminAboutFooter

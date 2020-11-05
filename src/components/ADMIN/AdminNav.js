import React from 'react'

const AdminNav = () => {
    return (
        
        <nav className="navbar-light col-md-3 col-lg-2 d-md-block bg-light sidebar collapse position-fixed">
      <div className="pt-3">
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/admin/#productadmin">
              Products 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/#slideradmin">
             Slider
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/#aboutadmin">
             About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/#footeradmin">
             Footer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/#contactadmin">
             Contact
            </a>
          </li>
        </ul>
        </div>
    </nav>
        
    )
}

export default AdminNav

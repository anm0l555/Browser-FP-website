import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <div className="nav-wrapper " id="navWrap2">
          <Link to="/">
            <a className="brand-logo center">Browser FP</a>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">
                <a id="navLinks">//01. &nbsp;&nbsp;ABOUT US</a>
              </Link>
            </li>
            <li>
              <Link to="/fingerprint">
                <a id="navLinks" href="#">
                  //02. &nbsp;&nbsp;FINGERPRINT TABLES
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar
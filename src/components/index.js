// make a function
import React from "react";
import Image1 from "./images/hehe.png";
import { Link } from "react-router-dom";
import Animation from "./animation/animate";
import "./index.css";
function Index() {
  return (
    <div className="Index">
      {/* <h1>aK</h1> */}
      <nav>
        <div className="nav-wrapper " id="navWrap2">
          <Link to="/">
            <a className="brand-logo center">Browser FP</a>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li> */}
            {/* <a href="sass.html"></a> */}
            {/* </li> */}
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
            {/* <li>
              <a href="collapsible.html">JavaScript</a>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className="row gmf-cont ">
        <div className="col s12 m12 l6 firstRowIndex ">
          <h1 className="content-index">
            Reveal Your True <br />
            Web Browser Fingerprint
            <br /> By Clicking Here
          </h1>
          <br />
          <br />
          <br />
          <Link to="/fingerprint">
            <a className="btn left" id="gmf-index">
              GET MY FINGERPRINT
            </a>
          </Link>
        </div>
        <div className="col s12 m12 l6 secondRowIndex left">
          <Animation />
          {/* <img src={Image1} className="center img-secrow" alt="image here" /> */}
        </div>
      </div>
    </div>
  );
}

export default Index;

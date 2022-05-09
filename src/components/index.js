import { React, useState, useEffect } from "react";
import Image1 from "./images/hehe.png";
import { Link } from "react-router-dom";
import Animation from "./animation/animate";
import "./index.css";
import Navbar from "./navbar/Navbar";
import Loader from "./loader/loader";
function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <div className="Index">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
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
                <a href="#!"  className="btn left" id="gmf-index">
                  GET MY FINGERPRINT
                </a>
              </Link>
            </div>
            <div className="col s12 m12 l6 secondRowIndex left">
              <Animation />
              {/* <img src={Image1} className="center img-secrow" alt="fingerprint" /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Index;

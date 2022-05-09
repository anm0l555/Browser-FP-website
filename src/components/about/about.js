import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image2 from "../images/humaans.png";
import Navbar from "../navbar/Navbar";
import Loader from "../loader/loader";
import "../index.css";

export default function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <div className="About">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="row aboutRow">
            <div className="col s12 m12 l6 ">
              <ul>
                <h4 className="aboutHead">About Us</h4>
              </ul>
              <div className="aboutFirstRow">
                <p>
                  In the modern web, the browser has emerged as the vehicle of
                  choice, which users are to trust, customize, and use, to
                  access a wealth of information and online services. However,
                  recent studies show that the browser can also be used to
                  invisibly fingerprint the user: a practice that may have
                  serious privacy and security implications. In this paper, we
                  report on the design, implementation and deployment of
                  FPDetective, a framework for the detection and analysis of
                  web-based fingerprinters. Instead of relying on information
                  about known fingerprinters or third-party-tracking blacklists,
                  FPDetective focuses on the detection of the fingerprinting
                  itself.
                </p>
                <p>
                  By applying our framework with a focus on font detection
                  practices, we were able to conduct a large scale analysis of
                  the million most popular websites of the Internet, and
                  discovered that the adoption of fingerprinting is much higher
                  than previous studies had estimated. Moreover, we analyze two
                  countermeasures that have been proposed to defend against
                  fingerprinting and find weaknesses in them that might be
                  exploited to bypass their protection. Finally, based on our
                  findings, we discuss the current understanding of
                  fingerprinting and how it is related to Personally
                  Identifiable Information, showing that there needs to be a
                  change in the way users, companies and legislators engage with
                  fingerprinting.
                </p>
                {/* <br /> */}
                <p>
                  FingerprintJS is a browser fingerprinting library that queries
                  browser attributes and computes a hashed visitor identifier
                  from them. Unlike cookies and local storage, a fingerprint
                  stays the same in incognito/private mode and even when browser
                  data is purged.In the modern web, the browser has emerged as
                  the vehicle of choice, which users are to trust, customize,
                  and use, to access a wealth of information and online
                  services. However, recent studies show that the browser can
                  also be used to invisibly fingerprint the user: a practice
                  that may have serious privacy and security implications.
                </p>
              </div>
            </div>
            <div className="col s12 m12 l6 ">
              <img
                src={Image2}
                className=" responsive-img imgAbtRow"
                alt="image here"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

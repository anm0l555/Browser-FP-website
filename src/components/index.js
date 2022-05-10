import { React, useState, useEffect } from "react";
import Image1 from "./images/hehe.png";
import CanvasFP from "./images/Fingerprints/cf.png";
import AudioFP from "./images/Fingerprints/af.png";
import WebGL from "./images/Fingerprints/webgl.png";
import WebRTC from "./images/Fingerprints/webrtc.png";
import Bua from "./images/Fingerprints/bua.png";
import Mdf from "./images/Fingerprints/mdf.png";
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
                <a href="#!" className="btn left" id="gmf-index">
                  GET MY FINGERPRINT
                </a>
              </Link>
            </div>
            <div className="col s12 m12 l6 secondRowIndex left">
              <Animation />
              {/* <img src={Image1} className="center img-secrow" alt="fingerprint" /> */}
            </div>
          </div>
          <div className="row SecondDivRowIndex">
            <div className="col s12 m4 l2">
              <img
                src={CanvasFP}
                className="responsive-img SecondDivRowIndex-img"
                alt="canvas Fingerprint"
              />
            </div>
            <div className="col s12 m4 l2">
              <img
                src={AudioFP}
                className="responsive-img SecondDivRowIndex-img"
                alt="canvas Fingerprint"
              />
            </div>
            <div className="col s12 m4 l2">
              <img
                src={WebGL}
                className="responsive-img logoWebGL"
                alt="canvas Fingerprint"
              />
            </div>
            <div className="col s12 m4 l2">
              <img
                src={WebRTC}
                className="responsive-img logoWebRTC"
                alt="canvas Fingerprint"
              />
            </div>
            <div className="col s12 m4 l2">
              <img
                src={Bua}
                className="responsive-img logoBua"
                alt="canvas Fingerprint"
              />
            </div>
            <div className="col s12 m4 l2">
              <img
                src={Mdf}
                className="responsive-img logoMdf"
                alt="canvas Fingerprint"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Index;

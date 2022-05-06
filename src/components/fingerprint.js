import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Gif from "./images/xyz-unscreen.gif";
import Navbar from "./navbar/Navbar";

export default function Fingerprint() {
  return (
    <div className="Fingerprint">
      {/* <h1>Fingerprint</h1> */}
      <Navbar />
      <div className="row fingerprintCont left">
        <div className="col s12 m12 l4 center">
          <img src={Gif} className="responsive-img" alt="...loading" />

          <Link to="/fingerprint">
            <a href="#!" className="btn left fingerprintBtn" id="gmf-index">
              GENERATE FINGERPRINT
            </a>
          </Link>
        </div>
        <div className="col s12 m12 l8">
          <h4 className="left"> Fingerprint Values</h4>
          <br />
          <br />
          <br />
          <br />
          <p className="left">
            The version column describes which version of Brave the farbling
            protection was introduced in.
          </p>
          <br />

          <p className="left">
            The mode column captures whether the protection is applied when
            standard protections are enabled, strict protections are enabled, or
            both.
          </p>
          <br />

          <br />
          <br />
          <br />
          <br />

          <table
            className="striped responsive-table  centered"
            id="FingeprintTable"
          >
            <thead>
              <tr>
                <th>Feature</th>
                <th>Version</th>
                <th>Mode</th>
                <th>Strict Vs. Standard</th>
                <th>This Page</th>
                <th>Local Frame</th>
                <th>Remote Frame</th>
                <th>WebWorker</th>
                <th>ServiceWorker</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
              </tr>
              <tr>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
              </tr>
              <tr>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
                <td>{Math.random().toString(36).substr(2, 18)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

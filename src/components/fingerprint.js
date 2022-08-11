import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Gif from "./images/xyz-unscreen.gif";
import Navbar from "./navbar/Navbar";
import ReactJson from "react-json-view";
import UseFingerprint from "../script";
import Loader from "../components/loader/loader";

export default function Fingerprint() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    if (loading) {
      getFingerprint();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  });

  const getFingerprint = async () => {
    const res = await UseFingerprint();
    setResult(res);
    console.log(res);
  };

  
  return (
    <div className="Fingerprint">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="row fingerprintCont left">
            <div className="col s12 m12 l4 center">
              <img src={Gif} className="responsive-img" alt="...loading" />

              <Link to="/fingerprint">
                <a href="#!" onClick={setLoading} className="btn left fingerprintBtn" id="gmf-index">
                  GENERATE FINGERPRINT
                </a>
              </Link>
            </div>
            <div className="col s12 m12 l8 fingeprintRowRight">
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
                standard protections are enabled, strict protections are
                enabled, or both.
              </p>
              <br />

              <br />
              <br />
              <br />
              <br />

              <table
                className="responsive-table centered"
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

                    {/* <td>{Math.random().toString(36).substr(2, 18)}</td> */}
                <tbody>
                <tr>
                <th scope="row">WebGL Drawing</th>
                <td>1.11</td>
                <td>standard</td>
                <td>diff</td>
                <td className="local-value value-webgl">-</td>
                <td className="local-frame-value value-webgl">-</td>
                <td className="remote-frame-value value-webgl">-</td>
                <td className="worker-value value-webgl">-</td>
                <td className="serviceworker-value value-webgl">-</td>
              </tr>
              <tr>
                <th scope="row">WebGL Vendor and Render</th>
                <td>1.12</td>
                <td>standard</td>
                <td>diff</td>
                <td className="local-value value-webglVendorAndRenderer">-</td>
                <td className="local-frame-value value-webglVendorAndRenderer">-</td>
                <td className="remote-frame-value value-webglVendorAndRenderer">-</td>
                <td className="worker-value value-webglVendorAndRenderer">-</td>
                <td className="serviceworker-value value-webglVendorAndRenderer">-</td>
              </tr>
              <tr>
                <th scope="row">WebGL2 Params</th>
                <td>1.17</td>
                <td>strict</td>
                <td>diff</td>
                <td className="local-value value-webglParams">-</td>
                <td className="local-frame-value value-webglParams">-</td>
                <td className="remote-frame-value value-webglParams">-</td>
                <td className="worker-value value-webglParams">-</td>
                <td className="serviceworker-value value-webglParams">-</td>
              </tr>
              <tr>
                <th scope="row">User Agent</th>
                <td>1.17</td>
                <td>strict</td>
                <td>sometimes same</td>
                <td className="local-value value-userAgent">-</td>
                <td className="local-frame-value value-userAgent">-</td>
                <td className="remote-frame-value value-userAgent">-</td>
                <td className="worker-value value-userAgent">-</td>
                <td className="serviceworker-value value-userAgent">-</td>
              </tr>
              <tr>
                <th scope="row">Canvas</th>
                <td>1.11</td>
                <td>both</td>
                <td>diff</td>
                <td className="local-value value-canvas">-</td>
                <td className="local-frame-value value-canvas">-</td>
                <td className="remote-frame-value value-canvas">-</td>
                <td className="worker-value value-canvas">-</td>
                <td className="serviceworker-value value-canvas">-</td>
              </tr>
              <tr>
                <th scope="row"> ∟ red channel</th>
                <td>1.21</td>
                <td>both</td>
                <td>diff</td>
                <td className="local-value value-canvas-red">-</td>
                <td className="local-frame-value value-canvas-red">-</td>
                <td className="remote-frame-value value-canvas-red">-</td>
                <td className="worker-value value-canvas-red">-</td>
                <td className="worker-servicevalue value-canvas-red">-</td>
              </tr>
              <tr>
                <th scope="row"> ∟ green channel</th>
                <td>1.21</td>
                <td>both</td>
                <td>diff</td>
                <td className="local-value value-canvas-green">-</td>
                <td className="local-frame-value value-canvas-green">-</td>
                <td className="remote-frame-value value-canvas-green">-</td>
                <td className="worker-value value-canvas-green">-</td>
                <td className="worker-servicevalue value-canvas-green">-</td>
              </tr>
              <tr>
                <th scope="row"> ∟ blue channel</th>
                <td>1.21</td>
                <td>both</td>
                <td>diff</td>
                <td className="local-value value-canvas-blue">-</td>
                <td className="local-frame-value value-canvas-blue">-</td>
                <td className="remote-frame-value value-canvas-blue">-</td>
                <td className="worker-value value-canvas-blue">-</td>
                <td className="worker-servicevalue value-canvas-blue">-</td>
              </tr>
              <tr>
                <th scope="row">Web Audio</th>
                <td>1.11</td>
                <td>both</td>
                <td>diff</td>
                <td className="local-value value-audio">-</td>
                <td className="local-frame-value value-audio">-</td>
                <td className="remote-frame-value value-audio">-</td>
                <td className="worker-value value-audio">-</td>
                <td className="serviceworker-value value-audio">-</td>
              </tr>
              <tr>
                <th scope="row">Plugins</th>
                <td>1.12</td>
                <td>both</td>
                <td>diff</td>
                <td className="local-value value-plugins">-</td>
                <td className="local-frame-value value-plugins">-</td>
                <td className="remote-frame-value value-plugins">-</td>
                <td className="worker-value value-plugins">-</td>
                <td className="serviceworker-value value-plugins">-</td>
              </tr>
              <tr>
                <th scope="row">Hardware Concurrency</th>
                <td>1.14</td>
                <td>both</td>
                <td>sometimes same</td>
                <td className="local-value value-hardwareConcurrency">-</td>
                <td className="local-frame-value value-hardwareConcurrency">-</td>
                <td className="remote-frame-value value-hardwareConcurrency">-</td>
                <td className="worker-value value-hardwareConcurrency">-</td>
                <td className="serviceworker-value value-hardwareConcurrency">-</td>
              </tr>
              <tr>
                <th scope="row">Enumerate Devices</th>
                <td>1.14</td>
                <td>both</td>
                <td>same</td>
                <td className="local-value value-enumerateDevices">-</td>
                <td className="local-frame-value value-enumerateDevices">-</td>
                <td className="remote-frame-value value-enumerateDevices">-</td>
                <td className="worker-value value-enumerateDevices">-</td>
                <td className="serviceworker-value value-enumerateDevices">-</td>
              </tr>
              <tr>
                <th scope="row">Device Memory</th>
                <td>1.18</td>
                <td>both</td>
                <td>sometimes same</td>
                <td className="local-value value-deviceMemory">-</td>
                <td className="local-frame-value value-deviceMemory">-</td>
                <td className="remote-frame-value value-deviceMemory">-</td>
                <td className="worker-value value-deviceMemory">-</td>
                <td className="serviceworker-value value-deviceMemory">-</td>
              </tr>
              <tr>
                <th scope="row">Speech Voices</th>
                <td>1.32</td>
                <td>both</td>
                <td>diff</td>
                <td className="local-value value-speechSynthesisVoices">-</td>
                <td className="local-frame-value value-speechSynthesisVoices">-</td>
                <td className="remote-frame-value value-speechSynthesisVoices">-</td>
                <td className="worker-value value-speechSynthesisVoices">-</td>
                <td className="serviceworker-value value-speechSynthesisVoices">-</td>
              </tr>
              <tr>
                <th scope="row">Fonts</th>
                <td>1.39</td>
                <td>standard</td>
                <td>sometimes same</td>
                <td className="local-value value-fonts">-</td>
                <td className="local-frame-value value-fonts">-</td>
                <td className="remote-frame-value value-fonts">-</td>
                <td className="worker-value value-fonts">-</td>
                <td className="serviceworker-value value-fonts">-</td>
              </tr>
              <tr>
                <th scope="row">Accept-Language</th>
                <td>1.36</td>
                <td>standard</td>
                <td>sometimes same</td>
                <td className="local-value value-acceptLang">-</td>
                <td className="local-frame-value value-acceptLang">-</td>
                <td className="remote-frame-value value-acceptLang">-</td>
                <td className="worker-value value-acceptLang">-</td>
                <td className="serviceworker-value value-acceptLang">-</td>
              </tr>
              <tr>
                <th scope="row"><code>navigator.languages</code></th>
                <td>1.39</td>
                <td>standard</td>
                <td>sometimes same</td>
                <td className="local-value value-navigatorLanguages">-</td>
                <td className="local-frame-value value-navigatorLanguages">-</td>
                <td className="remote-frame-value value-navigatorLanguages">-</td>
                <td className="worker-value value-navigatorLanguages">-</td>
                <td className="serviceworker-value value-navigatorLanguages">-</td>
              </tr>
                </tbody>
              </table>
              <br />
              <ReactJson
                src={result}
                theme="monokai"
                iconStyle="circle"
                name="Fingerprint Values"
                collapseStringsAfterLength={45}
              />
              {/* {result ? <ReactJson src={result} theme="brewer" collapseStringsAfterLength="10" /> : <div></div>} */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

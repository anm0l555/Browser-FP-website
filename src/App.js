import "./App.css";
import { React } from "react";
// import FIngerprintJS from 'browser-fp'
// import { UseFingerprint } from "./script";
import { Routes, Route, Link } from "react-router-dom";
//importing pages components
import Index from "./components/index";
import Fingerprint from "./components/fingerprint";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="fingerprint" element={<Fingerprint/>} />
        <Route path="about" element={<About/>} />
      </Routes>

      {/* <UseFingerprint /> */}
    </div>
  );
}

export default App;

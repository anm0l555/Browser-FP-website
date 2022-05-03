import "./App.css";
import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./components/index";
import Fingerprint from "./components/fingerprint";
import { UseFingerprint } from "./script";

function App() {
  useEffect(() => {
    console.log("executed")
    UseFingerprint()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="fingerprint" element={<Fingerprint />} />
      </Routes>
    </div>
  );
}

export default App;

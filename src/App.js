import "./App.css";
import { React } from "react";
// import FIngerprintJS from 'browser-fp'
// import { UseFingerprint } from "./script";
import { Routes, Route, Link } from "react-router-dom";
//importing pages components
import Index from "./components/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>

      {/* <UseFingerprint /> */}
    </div>
  );
}

export default App;

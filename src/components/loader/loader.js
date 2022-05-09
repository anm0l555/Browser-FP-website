import { React } from "react";
import gif from "../images/giphy-unscreen.gif";
import '../index.css'

function Loader() {
  return (
    <div className="Loader">
      <img src={gif} className="responsive-img" alt="...loading" />
    </div>
  );
}

export default Loader;

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper ">
                <Link to="/">
                    <a href="#!" className="brand-logo center">
                        Browser FP
                    </a>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/* <li> */}
                    {/* <a href="sass.html"></a> */}
                    {/* </li> */}
                    <li>
                        <a id="navLinks" href="badges.html">
            //01. &nbsp;&nbsp;ABOUT US
                        </a>
                    </li>
                    <li>
                        <a id="navLinks" href="badges.html">
            //02. &nbsp;&nbsp;FINGERPRINT TABLES
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
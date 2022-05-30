import React from "react";
import '../css/website.css';
import {Link} from "react-router-dom"
import Pdf from "../Leo-Zeng-software-resume.pdf"

function Navbar() {
    return (
        <nav>
            <div id="buttons">

                <Link to="/">
                    Home
                </Link>

                <Link to="/projects">
                    Projects
                </Link>

                <Link to="/other">
                    Other
                </Link>

                <Link to={Pdf} target="_blank">Resume</Link>

                <a id="github" href="https://github.com/leoyzeng" target="_blank">Github</a>

            </div>
        </nav>
    );
}

export default Navbar;

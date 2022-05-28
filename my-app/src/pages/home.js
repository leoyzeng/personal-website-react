import React from "react";
import "../css/website.css"

function Home() {

    console.log('in home');

    return (
        <div id="introduction">

            <div id="picture">
                <img src="images/leo.png" alt="leo.jpg" width="300px" height="300px"></img>
            </div>

            <div id="description">
                <p>Hi, I am Leo, a student at the University of Waterloo for computer engineering,
                    feel free to look at some of my projects.
                </p>
            </div>

        </div>
    );
}

export default Home;
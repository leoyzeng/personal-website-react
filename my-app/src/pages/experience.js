import '../css/experience.css';
import React from "react";


const Experience = () => {

    return (
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Sep-Dec 2022</h2>
                        <p>Software Engineer Coop</p>
                        <p>Plan Group</p>
                    </div>
                    <div className="company-logo">
                        <img className="logo-image" src="images/plan-group-icon.png" alt="image"></img>
                    </div>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Jan-Apr 2022</h2>
                        <p>Full Stack Web Developer Coop</p>
                        <p>Collaborative Approach Therapy Service</p>
                    </div>
                    <div className="company-logo">
                        <img className="logo-image" src="images/cats-icon.png" alt="image"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

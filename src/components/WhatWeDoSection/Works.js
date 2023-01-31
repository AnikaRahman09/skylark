import React from 'react';
import "./Work.css";

import pencil from "./noun-pencil.png";
import camera from "./noun-camera.png";
import mobile from "./noun-mobile.png";


const Works = () => {
    return (
        <>
            <div className="works" id="work-sec">

                {/* DESIGN */}
                <div className="work design">
                    <div className="work-content">
                        <img src={pencil} alt="" />

                        <div className="work-heading">
                            <h2>Design</h2>
                        </div>

                        <div className="work-point">
                            <ul>
                                <li>Branding</li>
                                <li>Marketing collateral</li>
                                <li>Presentation design</li>
                                <li>UX/UI design</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className="learn-btn">
                    <a href="">
                            Learn More
                        </a>
                    </div>                  
                </div>
                {/* DESIGN */}

                {/* WEBSITE DEVELOPMENT */}
                <div className="work website">
                    <div className="work-content">
                        <img src={camera} alt="" />

                        <div className="work-heading">
                            <h2>Website Development</h2>
                        </div>

                        <div className="work-point">
                            <ul>
                                <li>Wordpress</li>
                                <li>Shopify</li>
                                <li>Headless</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className="learn-btn">
                    <a href="">
                            Learn More
                        </a>
                    </div>                  
                </div>
                {/* WEBSITE DEVELOPMENT */}

                {/* APP DEVELOPMENT */}
                <div className="work app">
                    <div className="work-content">
                        <img src={mobile} alt="" />

                        <div className="work-heading">
                            <h2>App Development</h2>
                        </div>

                        <div className="work-point">
                            <ul>
                                <li>Web apps</li>
                                <li>Mobile apps</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className="learn-btn">
                    <a href="">
                            Learn More
                        </a>
                    </div>                  
                </div>
                {/* APP DEVELOPMENT */}


            </div>
        </>
    );
};

export default Works;
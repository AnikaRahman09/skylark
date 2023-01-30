import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Home.css";
import LearnMore from "./LearnMore.png";

const Home = () => {
    return (
        <>

            <div className="bg-image">
                <div className="bg-overlay">
                    <Navbar />

                    <div className="home-content">

                        <div className="about-us">
                            <p>About Us</p>

                            <h2>Skylark is a dolor sit amet consectetur. Sem at pellentesque in tellus. Eu nibh dolor erat egestas. Malesuada.</h2>

                            <p>Lorem ipsum dolor sit amet consectetur. In enim aliquam porttitor. Condimentum amet consectetur egestas vel libero varius. Feugiat magna dolor odio penatibus consequat est auctor. Ligula purus faucibus integer eget risus. Fermentum aenean gravida netus et quis quis. Elit mattis quisque sed.</p>


                            {/* LEARN MORE */}
                            <div className="learn-more">
                                <img src={LearnMore} alt="" />
                                <a href=''><p>Learn More</p></a>


                            </div>
                        </div>

                        {/* TABS */}
                        <div className="tabs">
                            <a href=''>
                            <div className="tab-about tab-style">
                                <p>About Us</p>
                                <button className="line-button"></button>
                            </div>
                            </a>

                            <a href=''>
                            <div className="tab-team tab-style">
                                <p>Our Team</p>
                                <button className="line-button"></button>
                            </div>
                            </a>
                            
                            <a href=''>
                            <div className="tab-weare tab-style">
                                <p>Who We Are</p>
                                <button className="line-button"></button>
                            </div>
                            </a>
                            
                            <a href=''>
                            <div className="tab-contact tab-style">
                                <p>Contact us</p>
                                <button className="line-button"></button>
                            </div>
                            </a>                        
                        </div>


                    </div>


                </div>
            </div>

        </>
    );
};

export default Home;
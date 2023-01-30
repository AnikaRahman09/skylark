import React from 'react';
import "./Footer.css";
import image from './Vector.png';

const Footer = () => {
    return (
        <>

        <footer>
            
            <div className="top-footer">
                <div className="footer-nav">
                    <ul>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Team</li></a>
                        <a href=""><li>HOw can we help</li></a>
                        <a href=""><li>Sector Expertise</li></a>
                        <a href=""><li>Deals</li></a>
                        <a href=""><li>News & Insights</li></a>
                        <a href=""><li>Careers</li></a>
                        <a href=""><li>Contact US</li></a>
                    </ul>

                    <a href="" className="subscribe-btn">
                        <div>Subscribe to our news</div>
                    </a>
                </div>
            </div>


            {/* BOTTOM FOOTER */}
            <div className="bottom-footer">
                <div className="terms-nav">
                    <div className="terms">
                        <ul>
                            <li>© Capitalmind 2022</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>A Website by Skylark Creative</li>
                        </ul>
                    </div>

                    <div className="social">
                        <img src={image} alt="" />
                        <p>Follow Us on Linkedin</p>
                    </div>
                </div>
            </div>

        </footer>
            
        </>
    );
};

export default Footer;
import React from 'react';
import "./Navbar.css"
import Logo from "./FullLogo.png"
import Menu from "./menulogo.png"



const Navbar = () => {
    return (
        <>

            {/* NAVBAR FOR 1548px AND BIGGER */}
            <div className="top-nav">

                <div className="nav-style">
                    <a href=''><h6>Who We Are</h6></a>
                    <a href=''><h6>What We Do</h6></a>
                    <a href=''><h6>Sectors</h6></a>
                    <a href=''><h6>Transactions</h6></a>
                </div>

                <div className="logo">
                    <a href=''><img src={Logo} alt="" /></a>
                </div>

                <div className="nav-style">
                    <a href=''><h6>Our People</h6></a>
                    <a href=''><h6>Global Reach</h6></a>
                    <a href=''><h6>Newsletter</h6></a>
                    <a href=''><h6>Contact Us</h6></a>
                </div>
            </div>
            {/* NAVBAR FOR 1548px AND BIGGER */}



            {/* NAVBAR FOR SMALLER SCREENS */}
            <div className="rsv-nav">

                <div>
                    <div className="logo-button">
                    <div className="rsv-logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>

                <div className="menu-logo">
                        <img src={Menu} alt="" />
                    </div>
                </div>
                
            </div>

        </>
    );
};

export default Navbar;
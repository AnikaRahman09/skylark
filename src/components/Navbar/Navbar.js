import React from 'react';
import "./Navbar.css"
import Logo from "./FullLogo.png"


const Navbar = () => {
    return (
        <>
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
        </>
    );
};

export default Navbar;
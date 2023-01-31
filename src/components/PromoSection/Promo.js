import React from 'react';
import "./Promo.css";
import image from "./promo-image.png"

const Promo = () => {
    return (
        <>
            <div className="promo-section" id='whoweare'>
                <div className="promo-bg">

                    <div className="promo-content">
                        <div className="promo-heading">
                            <h3>Neque tortor porttitor ornare ultrices. Risus eget vel maecenas </h3>
                            <div className="underline"></div>
                        </div>

                        <div className="promo-details">
                            <p>Lorem ipsum dolor sit amet consectetur. Sollicitudin ac egestas rutrum eget urna. Risus eget congue duis diam. Etiam nisl quisque ut sed ac. Neque tortor porttitor ornare ultrices. Risus eget vel maecenas aliquam. Amet euismod purus turpis velit. Eget sem integer urna odio.</p>
                        </div>

                        <div className="promo-btns">
                            <a href="" className="btns">
                                <div>Join the team</div>
                            </a>
                            <a href="" className="btns">
                                <div>Meet the team</div>
                            </a>

                        </div>
                    </div>

                    <div className="promo-img">
                        <img src={image} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Promo;
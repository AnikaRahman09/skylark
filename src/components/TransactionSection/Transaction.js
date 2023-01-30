import React from 'react';
import "./Transaction.css";

import card1 from "./card1.png"
import card2 from "./card2.png"
import card3 from "./card3.png"


const Transaction = () => {
    return (
        <>
            <div className="transaction-section">
                <div className="transaction">

                    {/* TRANSACTION HADING AND BUTTON */}
                    <div className="trans-content">
                        <div className="trans-heading">
                            <h6>Transactions</h6>
                            <button className="underline"></button>
                        </div>

                        <div className="trans-btn">
                            <a href="">VIEW ALL TRANSACTIONS</a>
                        </div>
                    </div>

                    {/* TRANSACTION CARDS */}
                        <div className="transaction-cards">
                            <img src={card1} alt="" />
                            <img src={card2} alt="" />
                            <img src={card3} alt="" />
                        </div>

                </div>
            </div>

        </>
    );
};

export default Transaction;
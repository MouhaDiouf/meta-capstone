import React from "react";
import "./Specials.css";
import Card from "../Card/Card";

function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <div className="specials-title-container">
                    <p>Specials</p>
                </div>
                <div className="specials-button-container">
                    <button className="button-yellow">Online Menu</button>
                </div>
            </div>
            <div className="specials-cards">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Specials;

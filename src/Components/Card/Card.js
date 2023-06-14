import React from "react";
import greekSalad from "../../icons_assets/greek-salad.png";
import "./Card.css";
function Card({ title, content, img }) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img src={img} />
            </div>
            <div className="card-text-container">
                <div className="card-title-container">
                    <h4 className="title">{title}</h4>
                    <p className="price">$12.99</p>
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Card;

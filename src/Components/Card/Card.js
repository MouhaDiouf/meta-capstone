import React from "react";
import greekSalad from "../../icons_assets/greek-salad.png";
import "./Card.css";
function Card() {
    return (
        <div className="card">
            <div className="card-img-container">
                <img src={greekSalad} />
            </div>
            <div className="card-text-container">
                <div className="card-title-container">
                    <h4 className="title">Greek salad</h4>
                    <p className="price">$12.99</p>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            </div>
        </div>
    );
}

export default Card;

import React from "react";
import "./Testimonial.css";
import reviewer from "../../icons_assets/reviewer.png";
function Testimonial() {
    return (
        <article className="testimonial-container">
            <h3>Rating</h3>
            <div className="testimonial-image-container">
                <img src={reviewer} />
                <p>Name</p>
            </div>
            <p>Review text</p>
        </article>
    );
}

export default Testimonial;

import React from "react";
import "./Testimonial.css";
import reviewer from "../../icons_assets/reviewer.png";
function Testimonial({ rating, name, img, text }) {
    return (
        <article className="testimonial-container">
            <h3>Rating: {rating}</h3>
            <div className="testimonial-image-container">
                <img src={img} />
                <p className="text-center">{name}</p>
            </div>
            <p>{text}</p>
        </article>
    );
}

export default Testimonial;

import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";
function Testimonials() {
    return (
        <div className="background-primary-green testimonials-outer-container">
            <h2 className="text-center text-white heading-4 testimonials-title">Testimonials</h2>
            <div className="testimonials-container">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </div>
    );
}

export default Testimonials;

import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";
import Mario from "../../icons_assets/mario-adrian.png";
import Jane from "../../icons_assets/jane.png";
import John from "../../icons_assets/john.png";
import Alice from "../../icons_assets/alice.png";
function Testimonials() {
    return (
        <div className="background-primary-green testimonials-outer-container">
            <h2 className="text-center text-white heading-4 testimonials-title">Testimonials</h2>
            <div className="testimonials-container">
                <Testimonial name="Mario" rating={5} text="Lorem ipsum dolor" img={Mario} />
                <Testimonial name="Jane" rating={4.5} text="Lorem ipsum dolor" img={Jane} />
                <Testimonial name="Joe" rating={4} text="Lorem ipsum dolor" img={John} />
                <Testimonial name="Alice" rating={5} text="Lorem ipsum dolor" img={Alice} />
            </div>
        </div>
    );
}

export default Testimonials;

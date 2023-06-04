import React from "react";
import Specials from "../Specials/Specials";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Chicago from "../Chicago/Chicago";
function HomePage() {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <Chicago />
        </>
    );
}

export default HomePage;

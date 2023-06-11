import React from "react";
import "./Hero.css";
import heroImg from "../../icons_assets/restauranfood.png";
function Hero() {
    return (
        <section className="background-primary-green">
            <div className=" hero">
                <div>
                    <h1 className="color-yellow margin-bottom-xsmall">Little Lemon</h1>
                    <h2 className="color-white margin-top-xsmall margin-bottom-none">Chicago</h2>
                    <p className="color-white margin-top-xsmall">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="button-yellow">Reserve a Table</button>
                </div>
                <div>
                    <img src={heroImg} className="hero-img" />
                </div>
            </div>
        </section>
    );
}

export default Hero;

import React from "react";
import marioAdrian from "../../icons_assets/mario-adrian.png";
import "./Chicago.css";
function Chicago() {
    return (
        <section className="chicago-container">
            <div className="chicago-text-container">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <div>
                <img src={marioAdrian} />
            </div>
        </section>
    );
}

export default Chicago;

import React, { useReducer, useState } from "react";
import "./Main.css";
import Testimonials from "../Testimonials/Testimonials";
import Specials from "../Specials/Specials";
import Chicago from "../Chicago/Chicago";

function Main() {
    return (
        <>
            <Specials />
            <Testimonials />
            <Chicago />
        </>
    );
}

export default Main;

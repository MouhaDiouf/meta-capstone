import React from "react";
import Nav from "./Nav";
import logo from "../icons_assets/Logo.svg";
function Header() {
    return (
        <>
            <img src={logo} />
            <Nav />
        </>
    );
}

export default Header;

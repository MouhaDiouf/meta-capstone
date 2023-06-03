import React from "react";
import Nav from "../Nav/Nav";
import logo from "../../icons_assets/Logo.svg";
import "./Header.css";
function Header() {
    return (
        <header>
            <img src={logo} className="logo" />
            <Nav />
        </header>
    );
}

export default Header;

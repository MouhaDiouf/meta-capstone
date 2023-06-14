import React from "react";
import Nav from "../Nav/Nav";
import logo from "../../icons_assets/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} className="logo" />
            </Link>
            <Nav />
        </header>
    );
}

export default Header;

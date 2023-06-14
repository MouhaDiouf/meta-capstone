import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
    const navRef = useRef(null);

    function handleToggleMenu() {
        navRef.current.classList.toggle("show");
    }
    return (
        <>
            <i class="fa-solid fa-bars menu-icon" onClick={handleToggleMenu}></i>
            <nav className="main-nav" ref={navRef}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <a href="#">Order Online</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;

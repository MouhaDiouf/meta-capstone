import React from "react";
import "./Footer.css";
function Footer() {
    return (
        <footer>
            <section>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/order-online">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Contact</h3>
                <ul>
                    <li>
                        <a href="/">Address</a>
                    </li>
                    <li>
                        <a href="/about">Phone number</a>
                    </li>
                    <li>
                        <a href="/menu">Email</a>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <ul>
                    <li>
                        <a href="/">Address</a>
                    </li>
                    <li>
                        <a href="/about">Phone number</a>
                    </li>
                    <li>
                        <a href="/menu">Email</a>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;

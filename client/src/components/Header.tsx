import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <h1>Tzofia eye</h1>
            <p>Alert system</p>
            <nav>
                <Link to="/map">Map</Link>
                <Link to="/alerts">All Alerts</Link>
            </nav>
        </>
    );
}

export default Header;

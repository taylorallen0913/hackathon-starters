import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Hackathon Starter</h1>
            <h3 className="subtitle">React with routing</h3>
            <div class="row">
                <div class="column">
                    <Link to="/page1" style={{ textDecoration: "none", color: "#222A68" }}>
                        <h2>Page 1</h2>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/page2" style={{ textDecoration: "none", color: "#222A68" }}>
                        <h2>Page 2</h2>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/page3" style={{ textDecoration: "none", color: "#222A68" }}>
                        <h2>Page 3</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
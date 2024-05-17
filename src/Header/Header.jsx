import React from "react";
import "./Header.css";
import Logo from '../assets/Logo.png';

export default function Header({ toggleColor }) {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo-image" style={{ width: 150 }} />
            </div>
            <div className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#about-me">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
            <div className="header-buttons">
                <button className="connect-button">Connect With Me</button>
                <button onClick={toggleColor}>Lights</button>
            </div>
        </div>
    );
}

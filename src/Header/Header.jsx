import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from '../assets/Logo.png';

export default function Header({toggleColor}) {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo-image" style={{width:150}}/>
            </div>
            <div className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">Login</li>
                    <li className="nav-item">Register</li>
                </ul>
            </div>
            <button className="connect-button">Connect With Me</button>
            <button onClick={toggleColor}>Lights</button>
        </div>
    );
}

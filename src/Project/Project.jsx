import React from "react";
import './Project.css';
import StormAtlas from '../assets/StormAtlas.png';
import FlavorQuest from '../assets/FlavorQuest.png';

export default function Project() {
    return (
        <div className="project-container">
            <h2 className="project-title">Projects</h2>
        
            <div className="project-item">
                <h3 className="project-name">FlavorQuest</h3>
                <img src={FlavorQuest} alt="FlavorQuest" className="project-image" />
                <article className="project-description">
                    <p>"FlavorQuest" is a culinary exploration app designed to help users discover new recipes and cooking techniques. The application features robust search functionality, personalized meal planning, and seamless user authentication.</p>
                </article>
                <ul className="project-features">
                    <li>User Authentication</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Spoonacular API</li>
                    <li>CSS</li>
                    <li>Material-UI</li>
                    <li>React Router</li>
                    <li>Local Storage</li>
                </ul>
            </div>

            <div className="project-item">
                <h3 className="project-name">StormAtlas</h3>
                <img src={StormAtlas} alt="StormAtlas" className="project-image" />
                <article className="project-description">
                    <p>"StormAtlas" is a React-based web application that allows users to track weather conditions, view earthquake occurrences, and analyze weather trends. It integrates with external APIs to fetch real-time weather data and relevant news articles. The use of interactive maps enhances the user experience by visualizing geographical data effectively.</p>
                </article>
                <ul className="project-features">
                    <li>React</li>
                    <li>React Router</li>
                    <li>React Leaflet</li>
                    <li>API Integration</li>
                    <li>CSS Styling</li>
                </ul>
            </div>
        </div>
    );
}
